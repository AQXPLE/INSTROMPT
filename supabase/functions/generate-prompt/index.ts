import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Parse body (support JSON or form-data)
    let body: Record<string, any> = {};
    const contentType = (req.headers.get('content-type') || '').toLowerCase();

    if (contentType.includes('application/json')) {
      try {
        body = await req.json();
      } catch {
        body = {};
      }
    } else if (contentType.includes('multipart/form-data')) {
      const fd = await req.formData();
      for (const [k, v] of fd.entries()) {
        // formData entries can be File or string
        body[k] = typeof v === 'string' ? v : v;
      }
    } else {
      // fallback: try JSON
      try {
        body = await req.json();
      } catch {
        body = {};
      }
    }

    // Accept either { formData: { tool, goal, ... } } or direct fields
    const payload = body.formData ?? body;
    const tool = payload?.tool;
    const goal = payload?.goal;
    const context = payload?.context ?? '';
    const constraints = payload?.constraints ?? '';
    const tone = payload?.tone ?? '';

    if (!tool || !goal) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields: tool and goal' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const OPENAI_API_KEY = Deno.env.get("OPENAI_API_KEY");
    if (!OPENAI_API_KEY) {
      throw new Error("OPENAI_API_KEY is not configured");
    }

    const systemPrompt = `You are an expert AI prompt engineer. Your task is to create effective, well-structured prompts based on the user's requirements. 

Create prompts that are:
- Clear and specific
- Well-structured with proper formatting
- Optimized for the target AI tool
- Include relevant context and constraints
- Professional and effective

Format the prompt in a way that's ready to use directly with the target AI tool.`;

    const userPrompt = `Create an optimized AI prompt based on these details:

Tool/Platform: ${tool}
Goal: ${goal}
${context ? `Context: ${context}` : ''}
${constraints ? `Constraints: ${constraints}` : ''}
${tone ? `Tone/Style: ${tone}` : ''}

Generate a complete, ready-to-use prompt that incorporates all these elements effectively.`;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo", // free tier compatible model
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt }
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again later." }), 
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 401) {
        return new Response(
          JSON.stringify({ error: "Invalid OpenAI API key. Please check your configuration." }), 
          { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402 || response.status === 403) {
        return new Response(
          JSON.stringify({ error: "Insufficient OpenAI credits. Please add credits to your account." }), 
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const errorText = await response.text();
      console.error("OpenAI API error:", response.status, errorText);
      throw new Error("OpenAI API request failed");
    }

    const data = await response.json();
    const generatedPrompt =
      data?.choices?.[0]?.message?.content ??
      data?.choices?.[0]?.text ??
      '';

    if (!generatedPrompt) {
      console.error('No prompt returned from OpenAI:', JSON.stringify(data));
      return new Response(
        JSON.stringify({ error: 'No prompt generated' }),
        { status: 502, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ prompt: generatedPrompt }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error in generate-prompt function:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});