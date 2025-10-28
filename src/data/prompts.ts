export interface Prompt {
  id: string;
  title: string;
  description: string;
  prompt: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  prompts: Prompt[];
}

export const categories: Category[] = [
  {
    id: "developers",
    name: "Developers",
    description: "Prompts for coding, debugging, and software development",
    icon: "Code",
    prompts: [
      {
        id: "dev-1",
        title: "Code Review Assistant",
        description: "Get detailed code reviews with improvement suggestions",
        prompt: "Act as an experienced software engineer conducting a code review. Review the following code for: 1) Code quality and best practices, 2) Potential bugs or edge cases, 3) Performance optimizations, 4) Security vulnerabilities, 5) Maintainability improvements. Provide specific, actionable feedback with examples.\n\n[Paste your code here]"
      },
      {
        id: "dev-2",
        title: "Debug Helper",
        description: "Systematic approach to debugging complex issues",
        prompt: "Help me debug this issue systematically. Context: [Describe what should happen]. Problem: [Describe what actually happens]. Environment: [Tech stack, versions]. Error messages: [Paste errors]. Steps to reproduce: [List steps]. Guide me through: 1) Root cause analysis, 2) Potential solutions, 3) Prevention strategies."
      },
      {
        id: "dev-3",
        title: "API Design Consultant",
        description: "Design RESTful APIs following best practices",
        prompt: "Act as an API architect. Help me design a RESTful API for [describe your application/feature]. Consider: 1) Resource naming conventions, 2) HTTP methods and status codes, 3) Authentication/authorization, 4) Versioning strategy, 5) Error handling, 6) Rate limiting, 7) Documentation standards. Provide endpoint examples with request/response formats."
      },
      {
        id: "dev-4",
        title: "Tech Stack Advisor",
        description: "Choose the right technologies for your project",
        prompt: "I need help choosing a tech stack for [project description]. Project requirements: [list requirements]. Constraints: [budget, timeline, team expertise]. Scale: [expected users/traffic]. Please recommend: 1) Frontend framework, 2) Backend technology, 3) Database solution, 4) Hosting/deployment, 5) Key libraries/tools. Explain pros/cons for each choice."
      }
    ]
  },
  {
    id: "researchers",
    name: "Researchers",
    description: "Academic research, literature reviews, and analysis",
    icon: "GraduationCap",
    prompts: [
      {
        id: "res-1",
        title: "Literature Review Assistant",
        description: "Organize and synthesize research papers effectively",
        prompt: "Help me conduct a literature review on [topic]. For each relevant paper, analyze: 1) Main research question and hypothesis, 2) Methodology and approach, 3) Key findings and contributions, 4) Limitations and gaps, 5) How it relates to my research on [your specific focus]. Identify common themes, contradictions, and research opportunities."
      },
      {
        id: "res-2",
        title: "Research Methodology Designer",
        description: "Design rigorous research methodologies",
        prompt: "I'm researching [topic] with the goal of [research objective]. Help me design a methodology that covers: 1) Research design (qualitative/quantitative/mixed), 2) Data collection methods, 3) Sampling strategy and size, 4) Analysis techniques, 5) Validity and reliability measures, 6) Ethical considerations, 7) Timeline and resources needed."
      },
      {
        id: "res-3",
        title: "Academic Writing Coach",
        description: "Improve academic writing clarity and impact",
        prompt: "Review my academic text for: 1) Clarity and coherence, 2) Argument structure and logic, 3) Evidence and citations, 4) Academic tone and style, 5) Grammar and precision, 6) Paragraph transitions. Suggest improvements while maintaining academic rigor. Text: [paste your text]"
      },
      {
        id: "res-4",
        title: "Data Analysis Guide",
        description: "Analyze research data with statistical rigor",
        prompt: "I have collected [type of data] from [describe sample/source]. Research question: [your question]. Help me: 1) Choose appropriate statistical tests, 2) Interpret results and p-values, 3) Identify patterns and correlations, 4) Address confounding variables, 5) Present findings clearly, 6) Discuss limitations. Data summary: [provide data overview]"
      }
    ]
  },
  {
    id: "writers",
    name: "Writers",
    description: "Creative writing, content creation, and storytelling",
    icon: "PenTool",
    prompts: [
      {
        id: "wri-1",
        title: "Story Development Workshop",
        description: "Develop compelling narratives and characters",
        prompt: "Help me develop my story concept: [brief synopsis]. Work with me on: 1) Character development (motivations, arcs, conflicts), 2) Plot structure (three-act structure, turning points), 3) Setting and world-building, 4) Themes and symbolism, 5) Dialogue authenticity, 6) Pacing and tension. Ask clarifying questions to deepen the narrative."
      },
      {
        id: "wri-2",
        title: "Content Style Adapter",
        description: "Adapt writing style for different audiences and platforms",
        prompt: "Transform this content for [target audience/platform]. Original: [paste content]. Desired tone: [professional/casual/persuasive/educational]. Adapt for: 1) Audience expectations and knowledge level, 2) Platform conventions and constraints, 3) Optimal length and structure, 4) Voice and personality, 5) Call-to-action strategy. Maintain core message while optimizing delivery."
      },
      {
        id: "wri-3",
        title: "Editorial Enhancement",
        description: "Refine and polish your writing",
        prompt: "Edit this text to improve: 1) Clarity and conciseness, 2) Flow and readability, 3) Word choice and variety, 4) Sentence structure diversity, 5) Grammar and punctuation, 6) Engagement and impact. Preserve the author's voice. Explain significant changes. Text: [paste your writing]"
      },
      {
        id: "wri-4",
        title: "SEO Content Optimizer",
        description: "Create search-optimized content that ranks",
        prompt: "Help me write SEO-optimized content about [topic]. Target keyword: [keyword]. Search intent: [informational/transactional/navigational]. Create content that includes: 1) Compelling title and meta description, 2) Clear structure with H2/H3 headings, 3) Natural keyword integration, 4) Value-focused introduction, 5) Actionable takeaways, 6) Internal/external linking opportunities. Target length: [word count]."
      }
    ]
  },
  {
    id: "marketers",
    name: "Marketers",
    description: "Marketing campaigns, copy, and strategy",
    icon: "TrendingUp",
    prompts: [
      {
        id: "mar-1",
        title: "Campaign Strategy Builder",
        description: "Design comprehensive marketing campaigns",
        prompt: "Help me create a marketing campaign for [product/service]. Target audience: [demographics, psychographics]. Goal: [awareness/leads/sales]. Budget: [range]. Develop: 1) Campaign concept and theme, 2) Channel strategy (social, email, ads, content), 3) Messaging framework, 4) Content calendar, 5) KPIs and metrics, 6) A/B testing plan, 7) Risk mitigation."
      },
      {
        id: "mar-2",
        title: "Copy That Converts",
        description: "Write persuasive marketing copy",
        prompt: "Write compelling copy for [landing page/email/ad] promoting [product/service]. Target audience: [describe]. Pain points: [list]. Unique value proposition: [describe]. Include: 1) Attention-grabbing headline, 2) Problem-solution narrative, 3) Benefits over features, 4) Social proof elements, 5) Urgency/scarcity, 6) Clear CTA. Length: [specify]."
      },
      {
        id: "mar-3",
        title: "Customer Persona Developer",
        description: "Create detailed customer personas",
        prompt: "Help me create a customer persona for [business/product]. Include: 1) Demographics (age, location, income, education), 2) Psychographics (values, interests, lifestyle), 3) Professional background and role, 4) Goals and aspirations, 5) Pain points and challenges, 6) Buying behavior and preferences, 7) Media consumption and channels, 8) Objections and concerns. Make it specific and actionable."
      },
      {
        id: "mar-4",
        title: "Social Media Content Planner",
        description: "Plan engaging social media content",
        prompt: "Create a social media content plan for [brand/business]. Platforms: [list]. Brand voice: [describe]. Goals: [engagement/growth/sales]. Plan should include: 1) Content pillars (themes), 2) Post types and formats, 3) Posting frequency per platform, 4) Caption templates, 5) Hashtag strategy, 6) Visual style guidelines, 7) Engagement tactics. Provide 1-week content calendar as example."
      }
    ]
  },
  {
    id: "designers",
    name: "Designers",
    description: "UI/UX design, visual design, and design systems",
    icon: "Palette",
    prompts: [
      {
        id: "des-1",
        title: "UX Design Critique",
        description: "Get detailed feedback on user experience design",
        prompt: "Review my UX design for [product/feature]. Evaluate: 1) User flow and navigation logic, 2) Information architecture, 3) Visual hierarchy and layout, 4) Interaction patterns and affordances, 5) Accessibility (WCAG compliance), 6) Mobile responsiveness, 7) Error handling and feedback, 8) Performance impact. Context: [describe users and use case]. Provide specific improvement suggestions."
      },
      {
        id: "des-2",
        title: "Design System Architect",
        description: "Build scalable, consistent design systems",
        prompt: "Help me create a design system for [product/brand]. Include: 1) Color palette (primary, secondary, semantic colors), 2) Typography scale and hierarchy, 3) Spacing and layout grid, 4) Component library (buttons, forms, cards, etc.), 5) Iconography style, 6) Motion and animation principles, 7) Documentation structure, 8) Naming conventions. Consider: [platforms/frameworks to support]."
      },
      {
        id: "des-3",
        title: "User Research Planner",
        description: "Plan effective user research studies",
        prompt: "I need to conduct user research for [product/feature]. Goals: [what you want to learn]. Users: [target demographic]. Help me plan: 1) Research methodology (interviews/surveys/testing), 2) Participant recruitment criteria, 3) Interview questions or test scenarios, 4) Data collection methods, 5) Analysis framework, 6) Timeline and resources, 7) How to synthesize and present findings."
      },
      {
        id: "des-4",
        title: "Conversion-Focused Design",
        description: "Design interfaces that drive conversions",
        prompt: "Optimize the design of [specific page/flow] to increase [signups/purchases/engagement]. Current conversion rate: [if known]. Analyze and improve: 1) Above-the-fold content and value prop, 2) Visual hierarchy and focal points, 3) Form design and friction points, 4) Trust signals and social proof, 5) CTA prominence and copy, 6) Mobile optimization, 7) Loading speed factors. Provide before/after recommendations."
      }
    ]
  },
  {
    id: "educators",
    name: "Educators",
    description: "Teaching strategies, lesson plans, and educational content",
    icon: "BookOpen",
    prompts: [
      {
        id: "edu-1",
        title: "Lesson Plan Builder",
        description: "Create comprehensive, engaging lesson plans",
        prompt: "Help me create a lesson plan for [subject/topic]. Grade level: [specify]. Learning objectives: [list goals]. Duration: [time]. Include: 1) Hook/warm-up activity, 2) Direct instruction approach, 3) Guided practice activities, 4) Independent practice, 5) Assessment methods, 6) Differentiation strategies for diverse learners, 7) Required materials, 8) Homework/follow-up. Align with [educational standards if applicable]."
      },
      {
        id: "edu-2",
        title: "Assessment Designer",
        description: "Design effective assessments and rubrics",
        prompt: "Create an assessment for [topic/unit]. Type: [quiz/test/project/presentation]. Grade level: [specify]. Learning objectives: [list]. Include: 1) Question types (multiple choice, short answer, essay), 2) Bloom's taxonomy alignment, 3) Point distribution, 4) Detailed rubric with criteria and scoring levels, 5) Answer key/scoring guide, 6) Time allocation, 7) Accommodations for special needs."
      },
      {
        id: "edu-3",
        title: "Classroom Management Helper",
        description: "Strategies for behavior and engagement",
        prompt: "I'm facing [classroom challenge/behavior issue]. Context: [grade level, class size, specific situation]. Help me develop: 1) Root cause analysis, 2) Preventive strategies, 3) In-the-moment interventions, 4) Positive reinforcement plan, 5) Communication with parents/guardians, 6) Long-term behavior modification approach, 7) Self-reflection questions. Keep strategies evidence-based and developmentally appropriate."
      },
      {
        id: "edu-4",
        title: "Differentiation Planner",
        description: "Adapt lessons for diverse learning needs",
        prompt: "Help me differentiate [lesson/activity] for diverse learners. Topic: [specify]. Student profiles: [describe learning levels, challenges, strengths]. Provide variations for: 1) Content (what students learn), 2) Process (how they learn), 3) Product (how they demonstrate learning), 4) Learning environment, 5) Scaffolding strategies, 6) Extension activities for advanced learners, 7) Supports for struggling students."
      }
    ]
  },
  {
    id: "students",
    name: "Students",
    description: "Study strategies, essay help, and learning optimization",
    icon: "GraduationCap",
    prompts: [
      {
        id: "stu-1",
        title: "Study Guide Generator",
        description: "Create effective study materials",
        prompt: "Help me create a study guide for [subject/topic]. Exam date: [when]. Topics covered: [list]. Format my guide with: 1) Key concepts and definitions, 2) Important formulas/theories, 3) Practice questions with answers, 4) Mnemonic devices for memorization, 5) Concept connections and relationships, 6) Common mistakes to avoid, 7) Study timeline recommendation."
      },
      {
        id: "stu-2",
        title: "Essay Outliner",
        description: "Structure essays with clear arguments",
        prompt: "Help me outline an essay on [topic]. Type: [argumentative/analytical/expository]. Length: [words/pages]. Assignment requirements: [describe]. Create an outline with: 1) Thesis statement, 2) Hook/introduction strategy, 3) Main arguments/body paragraphs (topic sentences), 4) Supporting evidence needed for each point, 5) Counterargument and rebuttal, 6) Conclusion approach, 7) Transition ideas between sections."
      },
      {
        id: "stu-3",
        title: "Concept Explainer",
        description: "Break down complex topics into understandable parts",
        prompt: "Explain [complex concept/topic] in a way I can understand. My current level: [beginner/intermediate/grade level]. What confuses me: [specific questions]. Please: 1) Explain using simple language and analogies, 2) Break it into smaller chunks, 3) Provide real-world examples, 4) Create visual/diagram description if helpful, 5) Show how it connects to what I already know, 6) Give practice problems or application exercises, 7) Highlight common misconceptions."
      },
      {
        id: "stu-4",
        title: "Time Management Planner",
        description: "Balance academics, activities, and life",
        prompt: "Help me create a time management plan. Commitments: [classes, work, activities]. Goals: [academic and personal]. Challenges: [describe struggles]. Create a plan with: 1) Weekly schedule template, 2) Study time allocation by subject, 3) Break and rest strategies, 4) Prioritization framework, 5) Deadline tracking system, 6) Productivity techniques for my learning style, 7) Balance strategies to avoid burnout."
      }
    ]
  },
  {
    id: "analysts",
    name: "Business Analysts",
    description: "Data analysis, requirements gathering, and process optimization",
    icon: "BarChart",
    prompts: [
      {
        id: "ana-1",
        title: "Requirements Gathering Framework",
        description: "Capture comprehensive business requirements",
        prompt: "Help me gather requirements for [project/feature]. Stakeholders: [list]. Business goal: [describe]. Guide me through: 1) Stakeholder interview questions, 2) Functional requirements template, 3) Non-functional requirements (performance, security, etc.), 4) User stories and acceptance criteria, 5) Constraints and assumptions, 6) Dependencies and integrations, 7) Success metrics. Ensure clarity and traceability."
      },
      {
        id: "ana-2",
        title: "Process Optimization Consultant",
        description: "Identify inefficiencies and improvement opportunities",
        prompt: "Analyze this business process: [describe current process]. Context: [team, volume, tools]. Pain points: [list issues]. Help me: 1) Map the current state process, 2) Identify bottlenecks and inefficiencies, 3) Root cause analysis, 4) Propose optimized future state, 5) Calculate potential time/cost savings, 6) Implementation roadmap, 7) Change management considerations, 8) KPIs to track improvement."
      },
      {
        id: "ana-3",
        title: "Data Analysis Reporter",
        description: "Analyze data and present insights",
        prompt: "Analyze this dataset/situation: [describe data]. Objective: [what needs to be discovered]. Help me: 1) Identify key metrics and patterns, 2) Perform relevant analysis (trend, correlation, etc.), 3) Create data visualization recommendations, 4) Interpret findings in business context, 5) Draw actionable insights, 6) Make data-driven recommendations, 7) Present limitations and confidence level, 8) Suggest follow-up analysis."
      },
      {
        id: "ana-4",
        title: "Business Case Builder",
        description: "Create compelling business cases for initiatives",
        prompt: "Help me build a business case for [initiative/investment]. Current situation: [describe]. Proposed solution: [describe]. Create a case including: 1) Problem statement and opportunity, 2) Proposed solution overview, 3) Cost-benefit analysis, 4) ROI calculation and timeline, 5) Risk assessment and mitigation, 6) Alternative options considered, 7) Implementation approach, 8) Success metrics and KPIs. Make it executive-ready."
      }
    ]
  },
  {
    id: "product-managers",
    name: "Product Managers",
    description: "Product strategy, roadmaps, and feature prioritization",
    icon: "Layers",
    prompts: [
      {
        id: "pm-1",
        title: "Product Roadmap Strategist",
        description: "Plan and communicate product direction",
        prompt: "Help me create a product roadmap for [product]. Vision: [describe]. Timeframe: [quarters/months]. Stakeholders: [list]. Build a roadmap with: 1) Strategic themes and objectives, 2) Feature prioritization (now/next/later), 3) User/business value for each initiative, 4) Dependencies and technical constraints, 5) Resource allocation estimates, 6) Success metrics per milestone, 7) Stakeholder communication plan. Use [RICE/Value vs Effort] framework."
      },
      {
        id: "pm-2",
        title: "User Story Writer",
        description: "Write clear, actionable user stories",
        prompt: "Help me write user stories for [feature/epic]. User personas: [describe]. Jobs to be done: [list]. For each story include: 1) User story format (As a [user], I want [goal], so that [benefit]), 2) Acceptance criteria (Given/When/Then), 3) Edge cases and error states, 4) User value and business impact, 5) Dependencies and assumptions, 6) Story points estimate, 7) Definition of done. Ensure stories are testable and independent."
      },
      {
        id: "pm-3",
        title: "Competitive Analysis Framework",
        description: "Analyze competitors and market positioning",
        prompt: "Conduct competitive analysis for [product/feature]. Competitors: [list]. Market: [describe]. Analyze: 1) Feature comparison matrix, 2) Pricing strategy comparison, 3) UX/design approach differences, 4) Target audience and positioning, 5) Strengths and weaknesses (SWOT), 6) Market gaps and opportunities, 7) Differentiation strategy recommendations, 8) Threats and defensive moves. Be objective and evidence-based."
      },
      {
        id: "pm-4",
        title: "Feature Prioritization Helper",
        description: "Make data-driven prioritization decisions",
        prompt: "Help me prioritize these features: [list features]. Product goals: [describe]. Constraints: [time, resources, tech debt]. User feedback: [summarize]. Apply prioritization using: 1) Impact vs Effort scoring, 2) User value assessment, 3) Business value (revenue, retention, acquisition), 4) Strategic alignment, 5) Technical dependencies, 6) Risk assessment, 7) Opportunity cost analysis. Recommend top 3-5 priorities with rationale."
      }
    ]
  },
  {
    id: "consultants",
    name: "Consultants",
    description: "Strategic advice, client presentations, and problem-solving",
    icon: "Briefcase",
    prompts: [
      {
        id: "con-1",
        title: "Strategic Framework Analyst",
        description: "Apply business frameworks to client challenges",
        prompt: "Apply strategic frameworks to analyze [client situation/challenge]. Context: [industry, company size, issue]. Use relevant frameworks: 1) SWOT analysis, 2) Porter's Five Forces, 3) Value Chain Analysis, 4) PESTEL (if applicable), 5) Business Model Canvas elements, 6) Core competency assessment. Synthesize insights into: strategic options, risks, recommended approach, and implementation considerations."
      },
      {
        id: "con-2",
        title: "Client Presentation Builder",
        description: "Structure compelling client presentations",
        prompt: "Help me structure a client presentation on [topic/recommendation]. Audience: [decision-makers, roles]. Goal: [inform/persuade/align]. Create presentation outline with: 1) Executive summary slide, 2) Problem statement and context, 3) Analysis approach and findings, 4) Recommendations (with pros/cons), 5) Implementation roadmap, 6) Financial impact, 7) Risk mitigation, 8) Next steps and decision points. Keep it concise and action-oriented."
      },
      {
        id: "con-3",
        title: "Problem Structuring Expert",
        description: "Break down complex business problems",
        prompt: "Help me structure this business problem: [describe issue]. Use a structured approach: 1) Define the problem clearly (what, where, when), 2) Create issue tree / logic tree, 3) Identify root causes vs symptoms, 4) Determine key questions to answer, 5) Prioritize hypotheses to test, 6) Outline analysis needed, 7) Data requirements, 8) Framework selection. Make it MECE (mutually exclusive, collectively exhaustive)."
      },
      {
        id: "con-4",
        title: "Change Management Planner",
        description: "Guide organizational change initiatives",
        prompt: "Help me plan change management for [initiative/transformation]. Organization: [size, culture, change history]. Scope: [what's changing]. Create plan covering: 1) Stakeholder analysis (impact, influence), 2) Change readiness assessment, 3) Communication strategy and key messages, 4) Training and support needs, 5) Resistance management, 6) Quick wins and milestones, 7) Success metrics and feedback loops, 8) Sustainability plan."
      }
    ]
  }
];
