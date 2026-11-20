/**
 * Single source of truth for every piece of copy, link and asset on the site.
 * Edit here — components stay untouched.
 */

export const profile = {
  name: "Rahul Paswan",
  role: "Associate Software Engineer",
  company: "AegisCovenant",
  companyNote: "InsurTech",
  location: "Gurgaon, India",
  email: "rahulpaswandoon@gmail.com",
  resume: "/resume.pdf",

  // The avatar is a CSS monogram by default — see components/avatar/Avatar.jsx.
  // To use a picture instead, drop the file in public/ and set the path here;
  // the About section swaps to it with no other change.
  avatarImage: null,
};

export const links = {
  linkedin: "https://www.linkedin.com/in/rahul-paswan-78162a238/",
  x: "https://twitter.com/RahulPaswa61922",
  forg: "https://forg.to/@rahulpaswandoon",
  medium: "https://medium.com/@rahulpaswandoon",
  leetcode: "https://leetcode.com/paswan_rahul/",
  healibrate: "https://healibrate.com/",
  ytAnalyzer: "https://youtube-comment-analyzer-eta.vercel.app/",
  refound: "https://chromewebstore.google.com/detail/hleeibidjedcneeafgjpgdbeifcfeool",
};

/**
 * Articles. `author` is shown on the card, so a piece written by someone else is
 * never presented under Rahul's byline. `url: null` renders a card as
 * "coming soon" and disables the link — drop a real URL in and it goes live
 * with no other change.
 */
export const articles = {
  agenticAi: {
    title: "Building an Agentic AI Workflow with LangGraph, FAISS, Gemini and Tavily",
    blurb:
      "How an LLM router decides — on its own — whether a question should be answered from a vector store, from live web search, or straight from the model.",
    tags: ["LangGraph", "FAISS", "Gemini", "Tavily"],
    author: "Rahul Paswan",
    byMe: true,
    source: "Medium",
    url: "https://medium.com/@rahulpaswandoon/building-an-agentic-ai-workflow-with-langgraph-faiss-gemini-and-tavily-145e82107f7a",
  },
  notificationPipeline: {
    title: "How I Built a Lightweight In-Website Notification System With Minimal Resources",
    blurb:
      "My senior Rohit Ojha's write-up of the in-website notification system we worked on at AegisCovenant.",
    tags: ["Notifications", "Backend", "Production"],
    author: "Rohit Ojha",
    byMe: false,
    source: "Medium",
    url: "https://rohit-ojha.medium.com/how-i-built-a-lightweight-in-website-notification-system-with-minimal-resources-62aed9ae623b?sharedUserId=rahulpaswandoon",
  },
};

export const hero = {
  eyebrow: "Backend engineer · SaaS builder",
  // The h1, as lines. `accent` marks the one phrase set in the accent colour.
  lines: [
    [{ t: "I build" }, { t: "SaaS products", accent: true }],
    [{ t: "and the backends" }],
    [{ t: "they run on." }],
  ],
  title: "I build SaaS products and the backends they run on.",
  lede:
    "Associate Software Engineer at AegisCovenant, building backends in Node.js, TypeScript and AWS. I also founded and run three software products of my own.",
  // The proof strip under the hero.
  proof: [
    { v: "3", k: "products founded and running" },
    { v: "AWS", k: "Lambda, SQS, SNS, S3 in production" },
    { v: "Jan 2025", k: "at AegisCovenant, intern to full-time" },
  ],
  facts: [
    { k: "Now", v: "Associate Software Engineer, AegisCovenant" },
    { k: "Since", v: "January 2025" },
    { k: "Based in", v: "Gurgaon, India" },
    { k: "Building", v: "Healibrate, a clinic booking SaaS" },
  ],
  sub:
    "I'm a software engineer at an InsurTech company in Gurgaon. I build the part of a product you never see — the systems it actually runs on. On the side I run a SaaS product of my own, and I build with AI to understand it.",
  status: "Associate Software Engineer @ AegisCovenant · Gurgaon",
  marquee: [
    "Node.js",
    "TypeScript",
    "AWS Lambda",
    "API Gateway",
    "SQS",
    "SNS",
    "SES",
    "DynamoDB",
    "RDS",
    "S3",
    "EC2",
    "CloudFormation",
    "Cloudflare",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "LangGraph",
    "FAISS",
  ],
};

export const about = {
  // Rendered with the scroll-driven reveal: one sentence that says who I am.
  reveal: "I write the backend, ship the product and answer the support email myself.",
  traits: [
    {
      title: "Ship, then improve",
      body: "Three products are live because I would rather put something real in front of users than polish it in private.",
    },
    {
      title: "Own it end to end",
      body: "Database, pricing, onboarding, support. I care about the whole product, not just the ticket in front of me.",
    },
    {
      title: "Learn by building",
      body: "When something new matters, like AI agents, I build with it until I understand how it really works.",
    },
  ],
  now: [
    { k: "Engineering", v: "Backend services on AWS at AegisCovenant" },
    { k: "Founding", v: "Healibrate, ReFound and YouTube Comment Analyzer" },
    { k: "Learning", v: "Agentic AI workflows with LangGraph" },
  ],
};

// "What I do" cards. `icons` are files in public/icons (real logos, CC0, fetched
// with the taste skill's icons.mjs).
export const focus = [
  {
    n: "01",
    title: "SaaS, end to end",
    short: "Healibrate and ReFound are mine: the schema, billing, multi-tenancy, the landing page and the support inbox.",
    icons: [["react", "React"], ["supabase", "Supabase"], ["tailwindcss", "Tailwind CSS"], ["vercel", "Vercel"]],
  },
  {
    n: "02",
    title: "Backend engineering",
    short: "APIs and business logic in Node.js and TypeScript, structured so the rules outlive the framework.",
    icons: [["nodejs", "Node.js"], ["typescript", "TypeScript"], ["express", "Express"], ["postgres", "PostgreSQL"]],
  },
  {
    n: "03",
    title: "Cloud systems on AWS",
    short: "Event-driven services with Lambda, queues and topics that keep working when a dependency fails.",
    icons: [["aws", "AWS"], ["aws-lambda", "Lambda"], ["aws-sqs", "SQS"], ["aws-s3", "S3"]],
  },
  {
    n: "04",
    title: "AI applications",
    short: "Retrieval, vector search and agent workflows, built and shipped rather than read about.",
    icons: [["langchain", "LangChain"], ["gemini", "Gemini"], ["python", "Python"]],
  },
];

// One company, three steps. Details live in the résumé, not here.
export const career = {
  company: "AegisCovenant",
  meta: "InsurTech · Gurgaon, India",
  steps: [
    { role: "Software Developer Intern", period: "Jan 2025 — Jul 2025", note: "Backend team, Node.js and AWS" },
    { role: "Associate Software Engineer", period: "Jul 2025 — Present", note: "Full-time offer after the internship", current: true },
  ],
  focus: ["Node.js", "TypeScript", "AWS Lambda", "SQS", "SNS", "S3", "API Gateway", "Hexagonal architecture"],
};

export const caseStudy = {
  label: "System · Production",
  title: "The notification pipeline",
  intro:
    "Built with one of my seniors at AegisCovenant. Notifications look trivial from the outside — something happened, tell someone. The engineering is everything in between: who needs to know, through which channel, what happens when a channel fails, and how the dashboard hears about it without asking every few seconds.",
  steps: [
    {
      k: "Event",
      t: "Something happens in the product",
      d: "A domain event is emitted where the business logic lives, not where the delivery code lives. The producer doesn't know or care who is listening.",
    },
    {
      k: "Fan-out",
      t: "The event is published, not delivered",
      d: "Publishing to a topic and consuming through queues decouples producing from delivering. New consumers get added without touching the service that raised the event.",
    },
    {
      k: "Process",
      t: "Lambda consumers do the work",
      d: "Each consumer resolves recipients, applies the business rules for that notification type, and hands off to the channel it owns.",
    },
    {
      k: "Deliver",
      t: "Channel delivery, per channel",
      d: "Email through SES; in-app updates pushed to the dashboard over WebSockets so the UI reacts to events rather than polling for them.",
    },
    {
      k: "Survive",
      t: "Retries and failure isolation",
      d: "Queues absorb spikes and hold work when a downstream is unavailable. A failing channel degrades on its own instead of taking the rest of the pipeline with it.",
    },
  ],
  stack: ["AWS Lambda", "SQS", "SNS", "SES", "API Gateway", "WebSockets", "Node.js", "TypeScript"],
};

export const projects = [
  {
    id: "healibrate",
    index: "01",
    name: "Healibrate",
    kind: "Founder · Clinic booking SaaS",
    live: "https://healibrate.com/",
    liveLabel: "healibrate.com",
    shot: "/shot-healibrate.jpg",
    shotAlt: "The Healibrate marketing site — 'Create your own clinic booking platform in minutes'",
    problem: "Small clinics still take bookings over WhatsApp and paper diaries. Patients wait for replies, slots get double-booked and nobody sees the day at a glance.",
    solution: "Each clinic gets its own branded booking page. Patients pick a doctor and a time and confirm with an email code, with no account and no password.",
    outcomes: ["Patients book any time, without calling", "Email reminders before every appointment", "Doctors see their whole day in one view", "Admins manage staff, schedules and time off"],
    tagline: "Booking software that gives a clinic its own branded portal.",
    body:
      "Clinics run appointments on WhatsApp and paper diaries. Healibrate gives each clinic a booking page of its own — patients pick a doctor, pick a slot and confirm with an email OTP, no account and no password. Doctors get a day view they can actually work from; admins get schedules, availability blocks, staff accounts and the numbers.",
    notes: [
      {
        h: "Multi-tenant by subdomain",
        p: "Every clinic lives at its own slug. A middleware resolves the tenant from the Host header on each request, with a short-lived cache so tenant lookups don't hit the database on every call.",
      },
      {
        h: "The whole product, not just the code",
        p: "Auth and password reset, transactional email, appointment reminders, subscriptions and billing, the marketing site, pricing, support inbox — all of it is mine to build and keep working.",
      },
    ],
    stack: [
      "React",
      "Vite",
      "Tailwind",
      "Node.js",
      "Express",
      "Supabase / Postgres",
      "JWT",
      "Dodo Payments",
      "Resend",
      "Vercel",
    ],
  },
  {
    id: "refound",
    index: "02",
    name: "ReFound",
    kind: "Founder · Chrome extension",
    live: "https://chromewebstore.google.com/detail/hleeibidjedcneeafgjpgdbeifcfeool",
    liveLabel: "chromewebstore.google.com",
    bar: "chrome://newtab",
    cta: "Add ReFound to Chrome",
    icon: "/icons/refound.png",
    shot: "/shot-refound.jpg",
    shotAlt: "ReFound's new tab page: a greeting, a search box for the web and bookmarks, and today's 'Worth a second look' bookmark with Read now, Remind later and Dismiss",
    problem: "People save hundreds of bookmarks and never open them again. The articles and videos they meant to read get lost in folders.",
    solution: "ReFound turns every new tab into a gentle reminder: a few forgotten bookmarks a day, ready to read now, snooze or dismiss.",
    outcomes: ["A few picks a day, not another feed", "One search box for the web and your bookmarks", "No account, no tracking, bookmarks never changed"],
    tagline: "Brings back the bookmarks you saved and forgot, every time you open a new tab.",
    body:
      "Everyone saves links they never open again. ReFound replaces the new tab page with a few of those bookmarks each day, so you can read one now, be reminded later, or dismiss it.",
    notes: [
      {
        h: "A few picks a day, not a feed",
        p: "Three bookmarks a day with Read now, Remind later and Dismiss, plus one search box for the web and your bookmarks, filtered by your Chrome folders.",
      },
      {
        h: "Your data stays on your device",
        p: "No account and no tracking. It reads your Chrome bookmarks but never edits or deletes them.",
      },
    ],
    stack: ["Chrome extension", "Bookmarks API", "New tab page", "On-device storage"],
  },
  {
    id: "yt-analyzer",
    index: "03",
    name: "YouTube Comment Analyzer",
    kind: "Founder · AI tool for creators",
    live: "https://youtube-comment-analyzer-eta.vercel.app/",
    liveLabel: "youtube-comment-analyzer-eta.vercel.app",
    shot: "/shot-yt-analyzer.jpg",
    shotAlt: "The YouTube Comment Analyzer app — paste a video URL to analyse its comments",
    problem: "A video with hundreds of comments is impossible to read in full, so creators miss what their audience keeps asking for.",
    solution: "Paste a video link and get the comment section summarised: the overall mood, the topics people repeat and what to make next.",
    outcomes: ["A sentiment breakdown of the comments", "The topics and keywords people keep repeating", "A short, prioritised list of suggestions"],
    tagline: "Turns a comment section into something a creator can act on.",
    body:
      "Paste a video URL. The backend pulls the top-level comments through the YouTube Data API, sends them to Gemini under a strict output schema, and returns a sentiment breakdown, the keywords people keep repeating, and a short list of prioritised suggestions — instead of a wall of text to scroll.",
    notes: [
      {
        h: "Structured output, not free text",
        p: "The model is constrained to a fixed JSON shape, and the response is cleaned and parsed before it reaches the client — so the UI renders typed data rather than whatever the model felt like writing.",
      },
      {
        h: "Keys stay on the server",
        p: "The React client only ever talks to the Express API. YouTube and Gemini credentials never leave the backend.",
      },
    ],
    stack: [
      "React",
      "TypeScript",
      "Tailwind",
      "shadcn/ui",
      "Node.js",
      "Express 5",
      "YouTube Data API v3",
      "Gemini",
      "Vercel",
    ],
  },
];

export const ai = {
  reveal:
    "I am not an AI researcher. I am an engineer who learns a thing by building it, and right now that thing is how AI applications are actually put together.",
  intro:
    "The workflow below is the one I built to understand routing: instead of sending every question to the same place, an LLM looks at the question first and decides what should happen to it.",
  routes: [
    {
      k: "RAG",
      t: "Answer from the documents",
      d: "The question is answered from an indexed corpus — embeddings in a FAISS vector store, retrieved and passed to the model as context.",
    },
    {
      k: "Web search",
      t: "Answer from the live web",
      d: "When the corpus can't help — anything recent or outside it — the question goes to Tavily and the results become the context instead.",
    },
    {
      k: "Direct",
      t: "Answer from the model",
      d: "General questions that need no retrieval skip both and go straight to generation. Retrieval you don't need is just latency.",
    },
  ],
  learning: [
    "RAG & vector search",
    "AI agents",
    "Agentic workflows",
    "LLM application architecture",
    "LangGraph",
    "FAISS",
    "Gemini",
    "Tavily",
    "Claude / Claude Code",
  ],
};

export const brand = {
  reveal:
    "Most founders don't need to learn to code. They need someone who will tell them the truth about what they are building.",
  body:
    "I'm building in public around one idea: technology should not be the reason a good business idea dies. I write and talk about what I actually build — backend systems, cloud architecture, AI workflows, and what it really takes to run a small SaaS product — and I aim most of it at founders who don't come from a technical background.",
  second:
    "Not advice from the outside. I'm shipping a product, paying the bills for it, and answering its support email, so what I share is what I'm currently getting right and wrong.",

  // What the personal brand is actually about.
  pillars: [
    {
      n: "01",
      title: "Engineering in plain English",
      body:
        "What a backend, an API, a database or an AI feature genuinely is — what it's for, what it costs you, and when it's the wrong tool. No jargon used as a status symbol.",
    },
    {
      n: "02",
      title: "The decisions, not the code",
      body:
        "Most of what hurts a young product isn't bad code, it's a choice nobody flagged early: what you build versus buy, what you'll be stuck with in a year, where the money quietly goes.",
    },
    {
      n: "03",
      title: "Building a SaaS in the open",
      body:
        "Healibrate is the working example. Pricing, tenancy, billing, support, the parts that went wrong — shared as it happens rather than written up afterwards as a success story.",
    },
    {
      n: "04",
      title: "Where AI is real",
      body:
        "I build with AI every week, so I can say where it genuinely changes a product and where it's decoration on a pitch deck. Usually the honest answer is smaller and more useful than the hype.",
    },
  ],

  // Concrete things a non-technical founder gets out of talking to me.
  points: [
    "Understand what your engineers are actually building",
    "Know which technical decisions are expensive to reverse",
    "Read a proposal or a quote and tell if it adds up",
    "Work out whether AI belongs in your product yet",
    "Get from an idea to something real people can use",
  ],
};
