export const siteConfig = {
  name: "Serhii Chepets",
  title: "Middle Software Engineer",
  description: "Portfolio website of Serhii Chepets",
  accentColor: "#512BD4",
  social: {
    email: "serhii.chepets@gmail.com",
    telegram: "https://t.me/saint_zett",
    linkedin: "https://www.linkedin.com/in/serhii-chepets/",
    // twitter: "https://x.com/rfitzio",
    github: "https://github.com/SaintZet",
  },
  aboutMe: `Developer from Ukraine with higher education and commercial experience.
Strong in problem-solving, teamwork, and communication.
Focused on becoming a software architect.
Passionate about open-source projects and continuous self-development.`,
  skills: ["C#", ".NET", "ASP.NET Core", "EF Core", "SQL", "SOLID & Design Patterns", "Git", "CI/CD", "Unit Testing"],
  projects: [
    {
      name: "University Lectures - Game Development & Testing",
      description:
        "Teaching practical game development and testing courses at Kharkiv National University of Radio Electronics for 2+ years. Creating educational content and sharing knowledge through YouTube lectures to help students master game development concepts and testing methodologies.",
      link: "https://youtube.com/playlist?list=PLfOzdlGsYiW9TBFN_SDlN1smxBnrroCxv&si=92wmQ9_PmuKFzI7b",
      skills: ["Teaching", "Game Development", "Testing", "Educational Content", "YouTube"],
    },
    {
      name: "Heuristics for Clean Code",
      description:
        "The goal of the project is to help learn heuristics that will help you write clean code. Use them for the benefit of the community.",
      link: "https://github.com/SaintZet/HeuristicsForCleanCode",
      skills: ["Clean Code", "Heuristic Rules", "GitHub Wiki"],
    },
    {
      name: "DayZ Map Loader",
      description:
        "Project is to allow users to download maps for the game DayZ from two different map providers. The downloaded maps are of high quality. Also, personal library of knowledge.",
      link: "https://fullstackextensions.com/?ref=devportfolio",
      skills: [".NET", "Sql Server", "Clean Architecture", "REST API"],
    },
  ],
  experience: [
    {
      company: "Plarium LLC",
      title: "Middle Software Engineer",
      dateRange: "March 2023 - Present",
      bullets: [
        "Implemented and enhanced gameplay features, increasing player engagement and enabling regular live content updates.",
        "Integrated third-party services and internal tools, streamlining workflows and expanding game functionality.",
        "Optimized client-server communication and background processes, improving performance and reducing latency.",
        "Collaborated with cross-functional teams (game designers, QA, DevOps) to deliver new features on schedule and with high quality.",
        "Supported live operations and scaled infrastructure, ensuring stability and performance for millions of active players worldwide.",
      ],
    },
    {
      company: "Private Tutor ",
      title: "Programming, C#",
      dateRange: "February 2025 - Present",
      bullets: [
        "Taught C# programming and computer science fundamentals to school and college students, building a strong foundation for future IT careers.",
        "Designed and delivered structured lessons on algorithms, OOP principles, and software design patterns, ensuring practical understanding.",
        "Created tailored study plans and exercises, helping students prepare for university studies, career goals, and personal projects.",
        "Mentored and motivated students, fostering problem-solving, critical thinking, and independent learning skills.",
        "Introduced real-world tools and practices (Git, Entity Framework, project structuring) to bridge the gap between theory and industry standards.",
      ],
    },
    {
      company: "Microinvest LTD",
      title: "Junior Software Engineer",
      dateRange: "April 2021 - March 2023",
      bullets: [
        "Refactored legacy software using modern design patterns to improve maintainability and scalability.",
        "Developed client-server applications enabling reliable interaction with USB devices.",
        "Created background processing modules for file I/O (XML, JSON, Excel), automating data workflows.",
        "Built desktop applications integrating third-party services to extend system capabilities.",
        "Contributed to a web-based license management solution, improving license tracking and administration.",
      ],
    },
  ],
  education: [
    {
      school: "Zaporiz`kyy National University",
      degree: "Bachelor of Science in Computer Science and Information Technology",
      dateRange: "Sept 2016 - June 2020",
      achievements: [
        "Gained teaching experience during an internship at a school",
        "Projects — software development, startups, participation in team case championships",
      ],
    },
    {
      school: "StudMentor Online Program",
      degree: "Intensive Training Certificate",
      dateRange: "2024",
      achievements: [
        "Completed ~24 hours of group-based practical training",
        "Delivered weekly online lessons (2×90 min) to small groups (up to 3 students)",
        "Provided academic mentoring to schoolchildren from frontline regions",
        "Participated in group and individual supervisions with an experienced teacher",
        "Received an official certificate issued by Teach for Ukraine and UNICEF",
        "Volunteer-based role within a UNICEF-supported program (funded by GPE)",
      ],
    },
  ],
};
