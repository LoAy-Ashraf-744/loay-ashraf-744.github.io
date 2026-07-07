export const projects = [
  // --- LANDING PAGES ---
  {
    id: "landing-1",
    category: "landing",
    featured: true,
    title: "High quality landing page",
    description: "A landing page is a sales funnel compressed into one scroll. Built for Triple S Pro (an Arabic-first AI education community), it features native RTL layout and bilingual support.",
    longDescription: "A landing page is a sales funnel compressed into one scroll. This page was built for Triple S Pro, an Arabic-first AI education community, and solves a real problem: most landing page templates are built for English audiences and break under RTL layout and cultural context. This page is native Arabic with proper right-to-left design, bilingual support baked in from the start, and strategic sections that move from social proof through value proposition to conversion. It demonstrates the ability to design conversion-focused pages that work across languages without compromise.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    screenshot: "/images/projects/triples.png",
    liveUrl: "https://thets.plus",
    type: "Marketing Landing Page"
  },
  {
    id: "landing-2",
    category: "landing",
    featured: false,
    title: "Joud Landing Page",
    description: "Joud is a landing page for a company that sells products. It features a modern, responsive design focused on user experience.",
    longDescription: "Joud is a landing page for a company that sells products. It is a modern and responsive design with a focus on user experience. It is also mobile-friendly and easy to navigate. This is for anyone who wants to create a professional and modern landing page for their business.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    screenshot: "/images/projects/joud.png",
    liveUrl: "https://jo-ud.vercel.app",
    type: "Product Landing Page"
  },

  // --- PROGRAMS ---
  {
    id: "app-1",
    category: "application",
    featured: true,
    title: "Making Prompting Easier (MarkMap)",
    description: "Explaining a complex workflow to an AI agent in plain text is messy — relationships get lost, hierarchy disappears, and the model has to guess at structure that should be explicit. This tool solves that by converting Mermaid.js graph diagrams into clean, structured Markdown files.",
    longDescription: "Explaining a complex workflow to an AI agent in plain text is messy — relationships get lost, hierarchy disappears, and the model has to guess at structure that should be explicit. This tool solves that by converting Mermaid.js graph diagrams into clean, structured Markdown files. Instead of writing a wall of text to describe a workflow, you draw it as a graph, run the tool, and hand the AI a document where every node, connection, and hierarchy is clearly laid out. The output is designed to be machine-readable first — giving AI agents the structured context they need to reason about a workflow accurately, without the ambiguity of freeform text.",
    tags: ["Next.js", "Tailwind CSS", "Mermaid.js", "Markdown"],
    githubUrl: "https://github.com/LoAy-Ashraf-744/MarkMap",
    liveUrl: "https://mark-map-seven.vercel.app/",
    downloadUrl: null,
    stars: 12,
    techStack: [
      { name: "Next.js", icon: "react", color: "rgba(97, 218, 251, 0.08)" },
      { name: "Tailwind CSS", icon: "tailwind", color: "rgba(56, 189, 248, 0.08)" }
    ],
    screenshot: "/images/projects/markmap.png"
  },

  // --- AUTOMATION WORKFLOWS ---
  {
    id: "auto-1",
    category: "automation",
    featured: true,
    title: "Lead Generation System",
    description: "An automated lead generation pipeline that scrapes data from Google Maps and LinkedIn, cleans it using custom code, and stores the formatted leads directly into Google Sheets.",
    longDescription: "This workflow acts as a powerful lead scraper. It starts from a form submission, checking the lead source (LinkedIn or Google Maps). It leverages Apify actors to scrape the targeted platform, cleans and normalizes the JSON data via JavaScript nodes, and finally appends structured rows into targeted Google Sheets tabs.",
    tags: ["n8n", "Apify", "Google Sheets API", "JavaScript"],
    githubUrl: "https://github.com/LoAy-Ashraf-744",
    downloadUrl: "/downloads/lead-gen.json",
    aiPowered: false,
    screenshot: "/images/projects/lead-gen.png"
  },
  {
    id: "auto-2",
    category: "automation",
    featured: false,
    title: "CreatorScope - UGC Finder",
    description: "An AI-driven automation that researches UGC content creators matching specific brand criteria, scrapes their profiles, and drafts personalized outreach emails.",
    longDescription: "Triggered via Webhook, this complex workflow uses Tavily Search and Google Gemini to find perfect UGC (User Generated Content) creators. It parses search results, structures creator profiles, and uses an LLM to write highly personalized outreach messages based on the creator's niche and platform, preparing them for email sending.",
    tags: ["n8n", "Google Gemini", "Tavily Search", "Webhooks"],
    githubUrl: "https://github.com/LoAy-Ashraf-744",
    downloadUrl: "/downloads/ugc-finder.json",
    aiPowered: true,
    screenshot: "/images/projects/ugc-finder.png"
  }
];
