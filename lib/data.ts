export const personalInfo = {
  name: "Vihang Bhavsar",
  title: "Full Stack Developer",
  tagline: "Building scalable systems that power tomorrow's products.",
  experience: "2+",
  email: "vihangbhavsar273@gmail.com",
  github: "https://github.com/Vihang07215",
  linkedin: "https://www.linkedin.com/in/vihang-bhavsar-5742192ab/",
  location: "India",
  image: "/vihang_image.jpg",
  bio: "Full Stack Developer with 2+ years of professional experience building scalable, secure, and high-performance web applications. Specialized in Node.js, NestJS, real-time architectures, and modern frontend frameworks. I enjoy designing clean APIs, solving complex business logic, and creating systems that work reliably under real-world load.",
};

export const skills = {
  backend: [
    { name: "PHP Yii2" },
    { name: "Node.js" },
    { name: "NestJS"},
    { name: "Express.js" },
    { name: "RESTful APIs" },
    { name: "JWT Auth" },
    { name: "WebSockets" },
    { name: "Socket.io"}, 
  ],
  database: [
    { name: "MongoDB",  },
    { name: "PostgreSQL",  },
    { name: "MySQL",  },
    { name: "Prisma ORM",  },
    { name: "Redis",  },
  ],
  frontend: [
    { name: "React",  },
    { name: "Next.js",  },
    { name: "TypeScript",  },
    { name: "JavaScript", },
    { name: "HTML/CSS",  },
    { name: "Tailwind CSS",  },
  ],
  tools: [
    { name: "Git & GitHub",  },
    { name: "Docker",  },
    { name: "CI/CD",  },
    { name: "Postman",  },
    { name: "Swagger/OpenAPI",  },
    { name: "VS Code",  },
  ],
};

export const experience = [
  {
    company: "NUWAVE Communications, Inc",
    role: "Software Engineer",
    duration: "Apr 2026 – Present",
    type: "Full-time",
    description:
      "Contributing to product-driven telecommunications industry. Working across frontend and backend systems using Next.js, PHP Yii2, and SQL to develop scalable features, optimize performance, and enhance user experience.",

    achievements: [
      "Developed and maintained enterprise-grade modules using PHP Yii2 framework",
      "Built responsive and high-performance user interfaces with Next.js",
      "Designed and optimized SQL queries, improving application performance and data retrieval efficiency",
      "Implemented new product features and enhancements based on business and customer requirements",
      "Collaborated with cross-functional teams to deliver scalable and reliable software solutions",
    ],

    technologies: ["Next.js", "PHP Yii2", "SQL"],
  },
  {
    company: "Samcomtechnobrains",
    role: "Node.js Developer",
    duration: "Jun 2025 – Oct 2025",
    type: "Full-time",
    description:
      "Built scalable backend systems for various clients including e-commerce platforms, chat applications, and enterprise management systems. Specialized in Node.js, NestJS, and real-time architectures.",
    achievements: [
      "Architected real-time chat infrastructure using Socket.io supporting 10K+ concurrent users",
      "Designed and implemented microservices for enterprise e-commerce platform",
      "Optimized PostgreSQL queries reducing response time by 40%",
      "Led backend API design and documentation using Swagger/OpenAPI",
    ],
    technologies: ["Node.js", "NestJS", "MongoDB", "PostgreSQL", "Socket.io"],
  },
  {
    company: "Zendevx",
    role: "Jr. Software Developer",
    duration: "Sep 2023 – May 2025",
    type: "Full-time",
    description:
      "Began my backend development journey building ERP systems using HTML, CSS, PHP, and JavaScript. Transitioned into Node.js and built RESTful APIs, database designs, and full-stack applications.",
    achievements: [
      "Built first ERP model using HTML, CSS, PHP, and JavaScript",
      "Transitioned to Node.js and delivered 5+ production REST APIs",
      "Implemented role-based access control across enterprise applications",
      "Collaborated in Agile sprints to ship features on schedule",
    ],
    technologies: ["JavaScript", "Node.js", "REST APIs", "PHP", "MySQL"],
  },
];

export const projects = [
  {
    name: "Real-Time Chat Application",
    description:
      "WhatsApp-inspired chat app with one-to-one and group messaging, real-time updates, and secure user authentication.",
    image: "/chatapp_image.png",
    github: "https://github.com/Vihang07215/Chat-App",
    live: null,
    tags: ["NestJS", "Socket.io", "MongoDB"],
    category: "backend",
    features: [
      "One-to-one & group messaging",
      "Real-time WebSocket updates",
      "JWT Authentication",
      "Message history persistence",
    ],
  },
  {
    name: "Leave Management System",
    description:
      "Role-based Leave Management System built with Node.js and React.js for managing employees, departments, and leave approvals with secure authentication.",
    image: "https://vihang07215.github.io/portfolio/images/images.jpg",
    github: "https://github.com/Vihang07215/Leave-Management-System",
    live: null,
    tags: ["Node.js", "Express", "React.js", "MongoDB"],
    category: "fullstack",
    features: [
      "Role-based access control",
      "Department management",
      "Leave approval workflow",
      "Employee dashboard",
    ],
  },
  {
    name: "E-Commerce Platform",
    description:
      "Full-stack e-commerce application with product management, order processing, and real-time order calculations.",
    image: "https://vihang07215.github.io/portfolio/images/e-commerce.png",
    github: "https://github.com/Vihang07215/Ecomm-app",
    live: null,
    tags: ["NestJS", "React", "MongoDB"],
    category: "fullstack",
    features: [
      "Product catalog management",
      "Cart & order processing",
      "Real-time inventory updates",
      "Admin dashboard",
    ],
  },
  {
    name: "Invoice & Expense System",
    description:
      "Production-ready backend for managing invoices, tracking expenses, and generating PDF reports for organizations.",
    image:
      "https://vihang07215.github.io/portfolio/images/invoice%20exoenss.png",
    github: "https://github.com/Vihang07215/invoice-expense-backend",
    live: null,
    tags: ["Node.js", "Prisma", "PostgreSQL"],
    category: "backend",
    features: [
      "Invoice generation & tracking",
      "Expense management",
      "PDF report generation",
      "Multi-organization support",
    ],
  },
];

export const services = [
  {
    icon: "Server",
    title: "Backend Development",
    description:
      "Scalable REST APIs, microservices, and server-side logic using Node.js, NestJS, and Express.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: "Layers",
    title: "Full Stack Development",
    description:
      "End-to-end web applications with React frontends and robust Node.js backends.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: "Zap",
    title: "Real-Time Systems",
    description:
      "WebSocket-based real-time features using Socket.io for chat, live updates, and notifications.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: "Database",
    title: "Database Architecture",
    description:
      "Schema design, query optimization, and ORM integration for MongoDB, PostgreSQL, and MySQL.",
    color: "from-green-500 to-teal-500",
  },
  {
    icon: "Shield",
    title: "API Security",
    description:
      "JWT auth, role-based access control, data validation, and security best practices.",
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: "FileCode",
    title: "API Documentation",
    description:
      "Clear Swagger/OpenAPI documentation for maintainable and developer-friendly APIs.",
    color: "from-pink-500 to-rose-500",
  },
];

export const stats = [
  { label: "Years Experience", value: 2, suffix: "+" },
  { label: "Projects Completed", value: 10, suffix: "+" },
  { label: "Technologies Mastered", value: 15, suffix: "+" },
];

export const testimonials = [
  {
    name: "Rahul Sharma",
    role: "CTO, TechVentures",
    content:
      "Vihang delivered our entire backend infrastructure on time and with exceptional quality. His Node.js expertise and attention to system design made the project a success.",
    avatar: "RS",
  },
  {
    name: "Priya Mehta",
    role: "Product Manager, StartupXYZ",
    content:
      "Working with Vihang was a fantastic experience. He built our real-time chat feature in record time, and it's been rock-solid in production ever since.",
    avatar: "PM",
  },
  {
    name: "Amit Patel",
    role: "Lead Developer, EnterpriseApps",
    content:
      "Vihang's code quality and API design skills are top-notch. The e-commerce backend he built for us handles thousands of orders daily without any issues.",
    avatar: "AP",
  },
];
