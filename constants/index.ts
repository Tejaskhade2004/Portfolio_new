import { FaEnvelope, FaGraduationCap, FaPhoneAlt } from "react-icons/fa";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";

export const PROFILE = {
  name: "Tejas Vitthal Khade",
  title: "Computer Science Engineer - AI & ML",
  email: "tejaskhade711@gmail.com",
  phone: "+91-8483918362",
  location: "Kolhapur, Maharashtra, India",
  github: "https://github.com/TstarRoyal",
  linkedin: "https://linkedin.com/in/tejaskhade07",
  summary:
    "Computer Science Engineering (AI & ML) undergraduate with practical experience in backend development, machine learning, LLM-based systems, and data analytics. Proficient in Python, backend APIs, database integration, and AI frameworks. Seeking entry-level roles or internships in Software Development, Backend Development, Machine Learning, or Data Science.",
} as const;

export const CORE_SKILLS = [
  "Python",
  "C",
  "Java",
  "HTML",
  "CSS",
  "Machine Learning",
  "Deep Learning",
  "TensorFlow",
  "OpenCV",
  "Pandas",
  "NumPy",
  "LLMs",
  "SQL",
  "Pinecone",
  "GitHub",
  "Data Structures",
  "Algorithms",
  "OOP",
  "DBMS",
  "NestJS",
  "Kafka",
  "RabbitMQ",
  "Redis",
  "Flask",
  "LangChain",
  "GPT-4o",
  "Stripe",
  "Firebase Auth",
  "JWT",
  "Redux Toolkit",
  "Prompt Engineer",
  "MERN",
] as const;

export const RESUME_SKILLS = [
  { skill_name: "Python", image: "python.svg", width: 72, height: 72 },
  { skill_name: "C", image: "c.svg", width: 72, height: 72 },
  { skill_name: "Java", image: "java.svg", width: 72, height: 72 },
  { skill_name: "HTML", image: "html.svg", width: 72, height: 72 },
  { skill_name: "CSS", image: "css.svg", width: 72, height: 72 },
  { skill_name: "Machine Learning", image: "ml.svg", width: 72, height: 72 },
  { skill_name: "Deep Learning", image: "deeplearning.svg", width: 72, height: 72 },
  { skill_name: "TensorFlow", image: "tensorflow.svg", width: 72, height: 72 },
  { skill_name: "OpenCV", image: "opencv.svg", width: 72, height: 72 },
  { skill_name: "Pandas", image: "pandas.svg", width: 72, height: 72 },
  { skill_name: "NumPy", image: "numpy.svg", width: 72, height: 72 },
  { skill_name: "LLMs", image: "llm.svg", width: 72, height: 72 },
  { skill_name: "SQL", image: "sqlite.svg", width: 72, height: 72 },
  { skill_name: "Pinecone", image: "pinecone.svg", width: 72, height: 72 },
  { skill_name: "GitHub", image: "github.svg", width: 72, height: 72 },
  { skill_name: "Data Structures", image: "datastructures.svg", width: 72, height: 72 },
  { skill_name: "Algorithms", image: "algorithms.svg", width: 72, height: 72 },
  { skill_name: "OOP", image: "oop.svg", width: 72, height: 72 },
  { skill_name: "DBMS", image: "dbms.svg", width: 72, height: 72 },
  { skill_name: "NestJS", image: "nestjs.svg", width: 72, height: 72 },
  { skill_name: "Kafka", image: "kafka.svg", width: 72, height: 72 },
  { skill_name: "RabbitMQ", image: "rabbitmq.svg", width: 72, height: 72 },
  { skill_name: "Redis", image: "redis.svg", width: 72, height: 72 },
  { skill_name: "Flask", image: "flask.svg", width: 72, height: 72 },
  { skill_name: "LangChain", image: "langchain.svg", width: 72, height: 72 },
  { skill_name: "GPT-4o", image: "openai.svg", width: 72, height: 72 },
  { skill_name: "Stripe", image: "stripe.svg", width: 72, height: 72 },
  { skill_name: "Firebase Auth", image: "firebase-auth.svg", width: 72, height: 72 },
  { skill_name: "JWT", image: "jwt.svg", width: 72, height: 72 },
  { skill_name: "Redux Toolkit", image: "redux-toolkit.svg", width: 72, height: 72 },
  { skill_name: "Prompt Engineer", image: "prompt-engineer.svg", width: 72, height: 72 },
  { skill_name: "MERN", image: "mern.svg", width: 72, height: 72 },
] as const;

export const SKILL_DATA = [
  {
    skill_name: "Python",
    image: "go.png",
    width: 72,
    height: 72,
  },
  {
    skill_name: "Java",
    image: "node.png",
    width: 72,
    height: 72,
  },
  {
    skill_name: "C",
    image: "tauri.png",
    width: 72,
    height: 72,
  },
  {
    skill_name: "GitHub",
    image: "next.png",
    width: 72,
    height: 72,
  },
  {
    skill_name: "Data Structures",
    image: "prisma.png",
    width: 72,
    height: 72,
  },
  {
    skill_name: "Algorithms",
    image: "graphql.png",
    width: 72,
    height: 72,
  },
] as const;

export const SOCIALS = [
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: PROFILE.linkedin,
  },
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: PROFILE.github,
  },
  {
    name: "Email",
    icon: FaEnvelope,
    link: `mailto:${PROFILE.email}`,
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "NestJS",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Flask",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Redis",
    image: "docker.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Kafka",
    image: "docker.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "RabbitMQ",
    image: "docker.png",
    width: 80,
    height: 80,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "MERN",
    image: "react.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Stripe",
    image: "stripe.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "JWT",
    image: "node.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Firebase Auth",
    image: "firebase.png",
    width: 60,
    height: 60,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Machine Learning",
    image: "reactquery.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Deep Learning",
    image: "framer.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "TensorFlow",
    image: "react.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "OpenCV",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Pandas",
    image: "mysql.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "NumPy",
    image: "postgresql.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "LLMs",
    image: "next.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "LangChain",
    image: "graphql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Pinecone",
    image: "prisma.png",
    width: 70,
    height: 70,
  },
] as const;

export const PROJECTS = [
  {
    title: "End-to-End Medical Chatbot",
    description:
      "Built a production-ready medical chatbot with Python, LangChain, GPT-4o, and a RAG pipeline over a 637-page medical dataset. Implemented PDF extraction, Recursive Character Text Splitting, Hugging Face embeddings, Pinecone vector search, and a Flask frontend for interactive medical assistance.",
    image: "/projects/project-1.png",
    link: "https://github.com/TstarRoyal?tab=repositories",
  },
  {
    title: "AI Website Builder",
    description:
      "Developed a full-stack AI-powered website builder using the MERN stack to generate responsive websites from natural language prompts. Integrated LLMs via OpenRouter for automated code generation, added a real-time chat interface, secured the product with Firebase Google Auth, JWT, and Stripe billing, and built a one-click deployment pipeline for generated projects.",
    image: "/projects/project-2.png",
    link: "https://github.com/TstarRoyal?tab=repositories",
  },
] as const;

export const EXPERIENCE = [
  {
    title: "Backend Developer Intern",
    company: "Nexaprime Pvt. Ltd.",
    location: "Kolhapur, India",
    duration: "2023 - Present",
    bullets: [
      "Developing scalable backend services using NestJS with a microservices architecture.",
      "Implemented asynchronous communication using Kafka and RabbitMQ for inter-service messaging.",
      "Designed and optimized database schemas for high-performance applications and used Redis for caching.",
      "Built and maintained backend modules with an emphasis on code quality, modularity, and reusability.",
    ],
  },
  {
    title: "Volunteer Member",
    company: "GaganVedhi Club, KITCOEK",
    location: "Kolhapur, Maharashtra",
    duration: "2023 - Present",
    bullets: [
      "Planned and conducted space science and astronomy awareness programs in rural communities.",
      "Delivered technical presentations on solar systems, satellites, rockets, and space missions.",
      "Coordinated with team members to execute educational outreach initiatives effectively.",
    ],
  },
] as const;

export const EDUCATION = [
  {
    title: "B.Tech in Computer Science Engineering (AI & ML)",
    institution: "Kolhapur Institute of Technology, Kolhapur",
    duration: "2022 - 2025",
    detail: "CGPA: 8.5 / 10",
  },
  {
    title: "Higher Secondary Certificate (HSC)",
    institution: "Maharashtra State Board",
    duration: "2022",
    detail: "Percentage: 81.83%",
  },
  {
    title: "Secondary School Certificate (SSC)",
    institution: "Maharashtra State Board",
    duration: "2020",
    detail: "Percentage: 94.60%",
  },
] as const;

export const CERTIFICATIONS = [
  "HackerRank - Python Certification",
  "HackerRank - Problem Solving (Basic)",
  "HackerRank - Problem Solving (Intermediate)",
  "Google Cloud - Cloud Computing Fundamentals",
  "ScholarHat - Core Java Fundamentals",
] as const;

export const FOOTER_DATA = [
  {
    title: "Profiles",
    data: [
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: PROFILE.linkedin,
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: PROFILE.github,
      },
      {
        name: "Email",
        icon: FaEnvelope,
        link: `mailto:${PROFILE.email}`,
      },
    ],
  },
  {
    title: "Contact",
    data: [
      {
        name: PROFILE.email,
        icon: FaEnvelope,
        link: `mailto:${PROFILE.email}`,
      },
      {
        name: PROFILE.phone,
        icon: FaPhoneAlt,
        link: `tel:${PROFILE.phone.replace(/[^+\d]/g, "")}`,
      },
      {
        name: PROFILE.location,
        icon: null,
        link: "#about-me",
      },
    ],
  },
  {
    title: "Education",
    data: [
      {
        name: "B.Tech CSE (AI & ML)",
        icon: FaGraduationCap,
        link: "#experience",
      },
      {
        name: "HSC - Maharashtra State Board",
        icon: FaGraduationCap,
        link: "#experience",
      },
      {
        name: "SSC - Maharashtra State Board",
        icon: FaGraduationCap,
        link: "#experience",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Experience",
    link: "#experience",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

export const LINKS = {
  sourceCode: PROFILE.github,
};
