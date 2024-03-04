import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Alonso Astroza Tagle",
  initials: "AAT",
  location: "Santiago, Chile, South America",
  locationLink: "https://www.google.com/maps/place/Santiago,+Santiago+Metropolitan+Region",
  about:
    "Machine Learning Engineer / Data Scientist focused on bridging the gap between academia and industry.",
  summary:
    "Engineer with over 10 years of experience in R&D for Artificial Intelligence and Data Science projects. Focus on building software powered by Large Language Models, such as ChatGPT. Lecturer in a Master's Program in Data Science, teaching Data Products Development.",
  avatarUrl: "https://avatars.githubusercontent.com/u/8590877?v=4",
  personalWebsiteUrl: "https://aastroza.github.io/",
  contact: {
    email: "alonsoastroza@gmail.com",
    tel: "+56969190480",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/aastroza",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aastrozacl/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/aastroza",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Universidad de Chile",
      degree: "Master of Science - MS, Electrical Engineer",
      start: "2011",
      end: "2015",
    },
    {
      school: "Universidad de Chile",
      degree: "Bachelor of Science - BS, Electrical Engineer",
      start: "2004",
      end: "2008",
    },
  ],
  work: [
    {
      company: "Parabol",
      link: "https://parabol.co",
      badges: ["Remote"],
      title: "Senior Full Stack Developer",
      start: "2021",
      end: "2024",
      description:
        "Implemented new features, led squad, worked on improving the way developers ship the code, started migration from Emotion to Tailwind CSS and more. Technologies: React, TypeScript, GraphQL",
    }
  ],
  skills: [
    "Artificial Intelligence",
    "Large Language Models",
    "Machine Learning",
    "Computer Vision",
    "Python",
    "FastAPI",
    "SQL",
    "MLOps",
  ],
  projects: [
    {
      title: "PokeAlertas",
      techStack: ["Side Project", "Python", "Twitter", "PokemonGo"],
      description:
        "I developed a Twitter bot on Python that gained 11 thousand followers in less than a week.",
      link: {
        label: "emol.com",
        href: "https://www.emol.com/noticias/Tecnologia/2016/08/11/816958/PokeAlertas-La-cuenta-de-Twitter-que-avisa-cuando-un-pokemon-aparece-en-Santiago.html",
      },
    }
  ],
  clients: [
    {
      title: "GeoVictoria",
      techStack: ["Biometrics", "FastAPI", "LLMs", "PowerBI", "SQL"],
      description:
        "Minimalist calendars, habit trackers and planners generator",
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Defontana",
      techStack: ["Time Series Forecasting", "AWS", "Sagemaker"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "Subconscious.ai",
      techStack: ["Langchain", "LLMs"],
      description: "Tracks current year progress and displays a countdown",
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    }
  ],
  courses: [
    {
      title: "Development of Data Products and Projects",
      techStack: [
        "MLOps",
        "Data Products",
        "Master's Program",
      ],
      description:
        "The course schedule included practical classes using Fastapi, Streamlit, Modal and OpenAI API.",
      link: {
        label: "aastroza.github.io",
        href: "https://aastroza.github.io/dataproducts/introduccion/",
      },
    }
  ],
} as const;
