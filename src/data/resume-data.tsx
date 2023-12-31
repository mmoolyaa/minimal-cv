import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Andara Mulya",
  initials: "AM",
  location: "Jakarta, Indonesia, GMT",
  locationLink: "https://www.google.com/maps/place/Jakarta",
  about:
    "Junior Software Engineer focused on improving my skills",
  summary:
    "As a Junior Software Engineer, I'm currently learning a lot from the internet, I'm giving my best effort to improving my skils. Currently, I learn mostly about HTML, CSS and Javascript. I'm exited to work remotely with companies all around the world.",
  avatarUrl: "https://avatars.githubusercontent.com/u/119565002?v=4",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "mulyaandara250@gmail.com",
    tel: "+6285155151179",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/mmoolyaa",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/andaramw/",
        icon: LinkedInIcon,
      },
      {
        name: "Instagram",
        url: "https://instagram.com/andarammw",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Telkom Jakarta Vocational Highschool",
      degree: "Highschool diploma in Software Engineering",
      start: "2023",
      end: "2026",
    },
  ],
  work: [
    {
      company: "Open for any oppurtunity!",
      link: "",
      badges: ["Remote", "Hybrid (Jakarta)"],
      title: "Junior Software Engineer",
      logo: ParabolLogo,
      start: "",
      end: "",
      description: "",
    }
  ],
  skills: [
    "JavaScript",
    "PHP",
    "React",
    "Python",
    "Kotlin",
    "SQL",
    "Figma",
  ],
  projects: [
    {
      title: "MyTabungan",
      techStack: [
        "Team Project",
        "Kotlin",
        "Java",
        "XML",
        "Firebase",
      ],
      description: "A mobile app to track your income and expenses.",
      logo: ConsultlyLogo,
    },
    {
      title: "New Year React App",
      techStack: ["Side Project", "React", "Tailwind"],
      description:
        "React app to celebrate 2024 New Year",
      logo: MonitoLogo,
      link: {
        label: "mmoolyaa.github.io/newyear",
        href: "https://mmoolyaa.github.io/newyear",
      },
    },
  ],
} as const;
