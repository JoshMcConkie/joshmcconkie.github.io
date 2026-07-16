export const siteConfig = {
  name: "Joshua McConkie",
  title: "Applied Mathematics Student | Autonomy & Robotics",
  description:
    "Portfolio of Joshua McConkie, a BYU applied mathematics student focused on state estimation, path planning, and control systems for autonomy and robotics.",
  accentColor: "#1d4ed8",

  social: {
    email: "joshuamcconkie@gmail.com",
    linkedin: "https://www.linkedin.com/in/joshuamcconkie",
    github: "https://github.com/JoshMcConkie",
  },

  aboutMe:
    "I am an Applied and Computational Mathematics student at Brigham Young University interested in autonomous systems and robotics. My work combines mathematical modeling with hands-on engineering, with a particular focus on state estimation, path planning, and controls. Through research and projects, I have built multi-agent planning simulations, developed approximation guarantees for resource-allocation algorithms, and designed a vision-based feedback control system with custom embedded hardware. I am seeking opportunities in autonomy and robotics.",

  skills: [
    "State Estimation",
    "Path Planning",
    "Control Systems",
    "Optimization",
    "Multi-Agent Systems",
    "Robotics",
    "Python",
    "C/C++",
    "Julia",
    "MATLAB",
    "OpenCV",
    "ESP32",
    "Embedded Systems",
    "Linux",
    "Git",
  ],

  projects: [
    {
      name: "Ball-on-Plate Balancing System",
      description:
        "Built a closed-loop control testbed with camera-based ball tracking, real-time state estimation, and PID control. Developed ESP32 firmware for two-servo actuation and IMU feedback over I2C, along with supporting custom PCB hardware.",
      link: "https://github.com/JoshMcConkie/ball-plate",
      skills: [
        "Python",
        "C",
        "OpenCV",
        "State Estimation",
        "PID Control",
        "ESP32",
      ],
    },
    {
      name: "Multi-Agent Coverage Planner",
      description:
        "Created a configurable simulator for receding-horizon multi-agent coverage planning. The planner achieved 97–99% of full-horizon coverage while reducing runtime by 2.5–10× across benchmark scenarios.",
      link: "https://github.com/JoshMcConkie/multi-agent-coverage-planner",
      skills: [
        "Python",
        "Path Planning",
        "Multi-Agent Systems",
        "Optimization",
        "Data Analysis",
      ],
    },
    {
      name: "Circuit Analysis Solver",
      description:
        "Programmed a C++ modified-nodal-analysis solver for resistor networks and independent sources, representing circuits as linear systems to calculate node voltages and component currents.",
      link: "https://github.com/JoshMcConkie/circuit-analysis",
      skills: ["C++", "Linear Algebra", "Circuit Analysis"],
    },
  ],

  experience: [
    {
      company: "BYU IDeA Labs",
      title: "Research Assistant — Multi-Agent Planning & Optimization",
      dateRange: "Mar 2026 - Present",
      bullets: [
        "Developed a multi-agent grid path planner that achieved 97–99% of full-horizon coverage with a 2.5–10× runtime reduction",
        "Proved a 50% approximation guarantee for a robust round-robin resource planner against the optimal solution",
        "Identified failure conditions for adjacency-constrained path-planning guarantees",
      ],
    },
    {
      company: "BYU Electrical Engineering Department",
      title: "Research Assistant — Quantum Photonics Simulation",
      dateRange: "Nov 2025 - Jan 2026",
      bullets: [
        "Optimized a Julia research simulation codebase, achieving an approximately 60× speedup through allocation reduction and hot-loop refactoring",
        "Contributed to the optimization and simulation of a hybrid Gaussian and non-Gaussian quantum-optics state engine",
      ],
    },
    {
      company: "BYU Economics Department",
      title: "Research Assistant — Econometrics",
      dateRange: "Apr 2025 - Sep 2025",
      bullets: [
        "Built statistical-modeling and large-scale data-preparation workflows in Python and Stata for causal-inference research",
        "Supported reproducible quantitative analysis of relationships between language learning and career outcomes",
      ],
    },
  ],

  education: [
    {
      school: "Brigham Young University",
      degree: "B.S. in Applied and Computational Mathematics",
      dateRange: "Expected Apr 2028",
      achievements: [
        "Major GPA: 4.00/4.00; ACT: 35/36",
        "BYU Merit Scholarship; Bain Case Competition second-round participant (2025)",
        "AI Association team lead and Competitive Programming Association member",
        "Coursework in analysis, differential equations, computational linear algebra, signals and systems, circuits, computer systems, data structures, and econometrics",
      ],
    },
  ],
};
