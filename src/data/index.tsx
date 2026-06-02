
export const experiences = [
  {
    title: "Full Stack Developer",
    company: "Globalion Technology Solutions Pvt. Ltd., Pune",
    date: "Oct 2023 – Present",
    isActive: true,
    techStack: ["React.js", "Node.js","Express.js","MongoDB", "Tailwind CSS", "REST APIs", "Payment Gateways"],
    points: [
      "Developed and maintained multiple responsive e-commerce applications using the MERN stack, achieving a seamless cross-device user experience.",
      "Architected admin and user dashboards utilizing React Hooks and Tailwind CSS, optimizing state management and improving frontend rendering speed.",
      <span key="1">
        Integrated RESTful APIs and third-party payment gateways with robust error-handling protocols,{" "}
        <strong className="text-cyan-400">reducing transaction-related issues by 45%</strong>.
      </span>,
      "Engineered modular UI components in collaboration with UI/UX design teams, ensuring brand consistency and high usability standards.",
    ],
  },
  {
    title: "MERN Stack Developer",
    company: "SUBTLE SOLUTIONS Pvt. Ltd., Pune",
    date: "Jun 2022 – Aug 2023",
    isActive: false,
    techStack: ["MERN Stack", "JWT", "MongoDB", "Agile", "Postman"],
    points: [
      <span key="1">
        Built and deployed 5+ full-stack MERN applications,{" "}
        <strong className="text-cyan-400">reducing manual operational workflows by 50%</strong> through process automation.
      </span>,
      "Developed secure REST APIs with JWT-based authentication and role-based authorization.",
      "Optimized MongoDB schemas and queries, improving backend performance significantly.",
      "Collaborated in Agile sprints using Git and GitHub, conducting regular code reviews via Postman.",
    ],
  },
];

export const projects = [
  {
    title: "Secure Banking Web Application",
    description:
      "A full-stack Loan Management System to automate the complete loan lifecycle, including application submission, approval workflows, disbursement, EMI calculations, and repayment tracking.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "AI Credit Card Fraud Detection System",
    description:
      "A real-time Credit Card Fraud Detection System to monitor transaction activity, detect suspicious behavior using rule-based validation and historical pattern analysis, and generate instant alerts.",
    tags: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
    githubUrl: "#",
    liveUrl: "#",
  },
];
