export type Cat = "AI & LLM" | "Mobile" | "Backend & Enterprise" | "Engineering Tools" | "Web Platforms";
export interface Project { title: string; desc: string; tech: string[]; cat: Cat; repo: string; metric?: string }
const G = "https://github.com/Eng-Osama-Sadek/";
const p = (title: string, cat: Cat, repo: string, tech: string[], desc: string, metric?: string): Project =>
  ({ title, cat, repo: repo.startsWith("http") ? repo : G + repo, tech, desc, metric });
export const projects: Project[] = [
 p("SmartGrid AI Auditor","AI & LLM","SmartGrid_AI_Auditor",["Python","FastAPI","Gemini","Docker"],"Ingests unstructured grid logs and telemetry; automates KPI evaluation, compliance checks and reporting."),
 p("SAIP AI Auditor","AI & LLM","saip-ai-auditor",["GPT-4","Gemini","RAG"],"Legal-tech patent analysis with semantic search, vector embeddings and automated claim auditing.","70% faster · 92% accuracy"),
 p("Spotter AI Logistics","AI & LLM","Spotter-AI-Logistics",["Next.js","TypeScript","FastAPI","Google Maps"],"Route optimization and freight-metric engine for fleet operators.","60% route gain"),
 p("Smart Real Estate Intelligence","AI & LLM","smart-real-estate-intelligence",["Streamlit","FastAPI","Pandas","Gemini"],"Automated multi-criteria property appraisal and market intelligence."),
 p("SyncDin AI Matchmaker","AI & LLM","syncdin-ai-matchmaker",["Python","FastAPI","LLM","Vector matching"],"Scores resumes against job specs with LLM prompts and vector matching."),
 p("AI App Generator","AI & LLM","ai-app-generator",["Next.js","TypeScript","Prisma","PostgreSQL","Docker"],"Provisions database models and API endpoints in real time, no manual migrations."),
 p("Commit Echo AI Canvas","AI & LLM","coommit-echo-ai-canvas",["React","TypeScript","AI backend"],"Visualizes commit history and project evolution on a live canvas."),
 p("Asyut Maintenance Bot","AI & LLM","https://huggingface.co/spaces/osamasadekadam321/Asyut-Maintenance",["HuggingFace","AI Agent"],"Production AI agent for automated technical reporting via chat."),
 p("Electricity Theft Inspection App","Mobile","theft-inspection-app",["Flutter","Dart","SQLite","Offline-first"],"Field app for inspectors: location capture, video evidence, offline sync."),
 p("Innov8 Inventory Management","Backend & Enterprise","innov8-inventory",["Laravel 11","REST"],"High-concurrency inventory reservation with transactional stock locking."),
 p("Asyut Smart Grid Management System","Backend & Enterprise","asyut-smartgrid-management-system",["Python","FastAPI","Docker"],"MV/LV grid management: maintenance scheduling, team allocation, live health dashboards."),
 p("Asyut Maintenance System Dashboard","Backend & Enterprise","Asyut_Maintenance_System_Dashboard",["Python","Streamlit","SQLAlchemy"],"Turns manual maintenance logs into real-time visual metrics."),
 p("Asyut Maintenance Digital Platform","Backend & Enterprise","Asyut_Maintenance",["Python","RBAC"],"Digitizes core operational workflows with roles and automated reporting.","42 workflows"),
 p("Asyut Maintenance Core","Backend & Enterprise","asyut-maintenance",["Microservices","Python"],"Backend schemas and services for infrastructure tracking and workflow automation."),
 p("Secure File Storage API","Backend & Enterprise","secure-file-storage-api",["JWT","RBAC","Encrypted chunking"],"Encrypted file storage and transmission API."),
 p("Fuel Planner Task API","Backend & Enterprise","fuel-planner-task",["REST","Algorithms"],"Optimal fuel stops along long-haul routes to minimize cost."),
 p("Laravel Task Management API","Backend & Enterprise","laravel-task-management-api",["Laravel","Queues","Multi-tenant"],"Task orchestration with prioritization, queues and tenant access control."),
 p("Electrical Load & Cost Calculator","Engineering Tools","Electrical-Load-Calculator",["Python"],"Transformer, cable and load sizing per Egyptian electrical codes."),
 p("JSesh Web SVG Editor","Engineering Tools","jsesh-svg-editor",["SVG","JavaScript","Open source"],"Browser-based editor for hieroglyphic SVG paths."),
 p("Meriti ML Assessment","Engineering Tools","Meriti_ML_Assessment",["Scikit-Learn","Pandas"],"Predictive models, feature engineering and evaluation pipelines."),
 p("Landvisor Real Estate Platform","Web Platforms","landvisor_project",["Full-stack","Analytics"],"Land analytics with geographic visualization and zoning evaluation."),
 p("Drawing Course E-Learning Platform","Web Platforms","drawing-course-platform",["Video","Subscriptions"],"Video courses, subscriptions and progress tracking."),
 p("Personal Landing Page","Web Platforms","my-landing-page",["Responsive","HTML/CSS"],"Responsive portfolio landing page."),
 p("Eng Osama Sadek GitHub Pages","Web Platforms","Eng-Osama-Sadek.github.io",["Static site"],"Static portfolio hosted on GitHub Pages."),
];
