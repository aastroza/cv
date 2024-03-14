import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Alonso Astroza Tagle",
  initials: "AAT",
  location: "Santiago, Chile, South America",
  locationLink: "https://www.google.com/maps/place/Santiago,+Santiago+Metropolitan+Region",
  about:
    "AI engineer. Started in computer vision research, then led ML-powered products at tech startups. Now bridging industry and academia at a data science institute. Constantly building through side projects, open-source collaborations, and AI consulting for startups. Passionate about teaching, delivering data science master's courses and public workshops to share knowledge.",
  summary:
    "I'm an electrical engineer who began my career conducting research in computer vision at an Image Processing Laboratory. I then transitioned to tech startups, where I applied my machine learning knowledge to lead the development of data-driven products. Subsequently, I was hired by a Data Science Institute to serve as the link between industry and academia in applied research projects. I'm constantly building and creating, with several side projects, open-source collaborations, and AI consulting engagements for various startups. In addition to my professional work, I have a strong passion for teaching. I serve as a professor in a Data Science Master's program and create workshops that I release publicly for anyone who wants to learn. Sharing knowledge and helping others grow in the field of data science and AI is incredibly fulfilling for me. Throughout my career, I've developed expertise across the AI project lifecycle, from research and modeling to deploying production-ready systems. I'm always eager to apply the latest advancements in machine learning, particularly in computer vision, natural language processing, and MLOps, to solve real-world challenges and drive business value.",
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
      company: "Universidad del Desarrollo",
      link: "https://ingenieria.udd.cl/persona/alonso-astroza-tagle/",
      badges: ["Data Science"],
      title: "Deputy Director of Industry Partnerships, Data Science Institute",
      start: "2023",
      end: "Present",
      description: "I lead the intersection between academic research and industrial applications at Institute of Data Science. My role involves initiating, planning, and executing collaborative projects that drive innovation and provide real-world solutions. I'm responsible for stakeholder engagement, aligning university research capabilities with industry needs, and ensuring successful project delivery."
    },
    {
      company: "Universidad del Desarrollo",
      link: "https://ingenieria.udd.cl/postgrado/magister-en-data-science/profesores/",
      badges: ["Teaching"],
      title: "Lecturer, Data Science Master's Program",
      start: "2019",
      end: "Present",
      description: "Lecturer of the course \"Development of Data Products and Projects\", part of the Data Science master's program. The course schedule included practical classes using Fastapi, Streamlit, Modal and OpenAI API."
    },
    {
      company: "GeoVictoria",
      link: "https://www.geovictoria.com/",
      badges: ["Consulting"],
      title: "Machine Learning Consultant",
      start: "2020",
      end: "Present",
      description: ""
    },
    {
      company: "Universidad del Desarrollo",
      link: "https://ingenieria.udd.cl/persona/alonso-astroza-tagle/",
      badges: ["Data Science"],
      title: "Senior Data Scientist, Data Science Institute",
      start: "2020",
      end: "2023",
      description: ""
    },
    {
      company: "GeoVictoria",
      link: "https://www.geovictoria.com/",
      badges: ["Machine Learning"],
      title: "Head of Data Science",
      start: "2016",
      end: "2020",
      description: "Led the creation of new data-driven technological products for enterprise clients in Latin America."
    },
    {
      company: "GeoVictoria",
      link: "https://www.geovictoria.com/",
      badges: ["Consulting"],
      title: "Senior Data Scientist",
      start: "2014",
      end: "2016",
      description: "Voice Biometrics consultant. Developer of a Data Visualization tool for retail."
    },
    {
      company: "Universidad de Chile",
      link: "https://ingenieria.uchile.cl/investigacion/laboratorios/departamento-de-ingenieria-electrica/laboratorio-de-procesamiento-digital-de-imagenes",
      badges: ["Research"],
      title: "Research Engineer, Image Processing Lab",
      start: "2006",
      end: "2016",
      description: (
        <>
          <p>
          Researcher in various state-funded projects (Conicyt), as well as private-funded projects (Metro, NEC Chile, Micomo). All of the following were Machine Learning projects with applications in multiple industries, generating software tools built on OpenCV and C++.
          </p>
          <li>
          <a href="https://www.conicyt.cl/wp-content/themes/fondef/encuentra_proyectos/PROYECTO/04/I/D04I1256.html">FONDEF D04I-1256</a>: Biometrics for smart video surveillance.
          </li>
          <li>
          FONDEF D08I-1060: Smart pattern recognition in video, applications in surveillance and mining.
          </li>
          <li>
          INNOVA 12IDL2-13673: Monitoring system for mining workers’ safety with Machine Learning.
          </li>
          <li>
          INNOVA 13IDL2-23589: Automated Monitoring of Points of Sale for Retail Products using Digital Image Processing
          </li>
        </>
      )
    }
  ],
  skills: [
    "Artificial Intelligence",
    "Large Language Models",
    "Machine Learning",
    "Data Science",
    "Python",
    "Prompt Engineering",
    "Computer Vision",
    "Structured Extraction",
    "Guided Generation",
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
