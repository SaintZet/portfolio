export const siteConfig = {
  name: "Serhii Chepets",
  title: "Middle Software Engineer",
  description: "Portfolio website of Serhii Chepets",
  accentColor: "#512BD4",
  resumeUrl: "/portfolio/resume.pdf",
  certificates: [
    {
      name: "Game Development And Testing Course Certificate 2025",
      description: "Certificate of Appreciation from NURE for contributing to the development and delivery of the educational course 'Testing of Gaming Applications and Server Solutions for Game Statistics'.",
      fileUrl: "/portfolio/certificates/nure-certificate-2025.pdf",
      previewUrl: "/portfolio/certificates/nure-certificate-2025-preview.jpg",
      issuer: "Kharkiv National University of Radio Electronics",
      date: "2025",
      type: "Teaching"
    },
    {
      name: "StudMentor Training Certificate",
      description: "Certificate confirming completion of the StudMentor program (45 hours total: 24h coursework, 16h teaching practice, 8 weeks supervision). Focused on mentoring schoolchildren from frontline regions, improving academic support, and developing innovative teaching skills. Organized by Teach for Ukraine with UNICEF and GPE support.",
      fileUrl: "/portfolio/certificates/studmentor-certificate.pdf",
      previewUrl: "/portfolio/certificates/studmentor-certificate-preview.jpg",
      issuer: "Teach for Ukraine, UNICEF & GPE",
      date: "2025-02-07",
      type: "Teaching"
    },
    {
      name: "Recommendation Letter - Teach For Ukraine",
      description: "Letter of recommendation from NGO Teach For Ukraine recognizing exceptional mentorship in informatics, effective teaching methods, and strong student engagement during the StudMentor program.",
      fileUrl: "/portfolio/certificates/teaching-recommendation.pdf",
      previewUrl: "/portfolio/certificates/teaching-recommendation-preview.jpg",
      issuer: "NGO Teach For Ukraine (Senior Mentor: Daria Lohvynenko)",
      date: "2024",
      type: "References"
    },
    {
      name: "Game Development And Testing Course Certificate 2024",
      description: "Certificate of Appreciation from NURE for contributing to the development and delivery of the educational course 'Testing of Gaming Applications and Server Solutions for Game Statistics'.",
      fileUrl: "/portfolio/certificates/nure-certificate-2024.pdf",
      previewUrl: "/portfolio/certificates/nure-certificate-2024-preview.jpg",
      issuer: "Kharkiv National University of Radio Electronics",
      date: "2024",
      type: "Teaching"
    },
    {
      name: "Bachelor's Degree Certificate",
      description: "Bachelor's Diploma in Computer Science and Information Technology with professional qualification as Teacher of Computer Science, awarded by Zaporizhzhia National University.",
      fileUrl: "/portfolio/certificates/bachelor-certificate.pdf",
      previewUrl: "/portfolio/certificates/bachelor-certificate-preview.jpg",
      issuer: "Zaporizhzhia National University",
      date: "2020",
      type: "Education"
    }
  ],
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
      school: "StudMentor Program",
      degree: "Intensive Training",
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
