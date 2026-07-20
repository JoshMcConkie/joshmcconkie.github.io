import technicalBriefUrl from "../assets/Centralized_vs_Decentralized_MRTA.pdf?url";

export const siteConfig = {
  name: "Joshua McConkie",
  title: "Applied Mathematics | Modeling, Optimization & Software",
  description: "Portfolio of Joshua McConkie, a BYU applied and computational mathematics student building mathematical software, simulations, optimization tools, and engineering systems.",
  accentColor: "#1d4ed8",

  social: {
    email: "joshuamcconkie@gmail.com",
    linkedin: "https://www.linkedin.com/in/joshuamcconkie",
    github: "https://github.com/JoshMcConkie",
  },

  aboutMe: "I am an Applied and Computational Mathematics student at Brigham Young University who enjoys using mathematics and software to solve technical problems. My experience includes optimization, simulation, numerical computing, data analysis, control systems, and embedded development. Through research and independent projects, I have built multi-agent planning simulations, analyzed approximation guarantees for resource-allocation algorithms, optimized scientific software, and developed a vision-based feedback control system with custom embedded hardware. I am seeking technical internship opportunities for Summer 2027, particularly in software engineering, modeling and simulation, optimization, robotics, and autonomous systems.",

  skills: [
    "Mathematical Modeling",
    "Optimization",
    "Simulation",
    "Numerical Computing",
    "Data Analysis",
    "Multi-Agent Systems",
    "Feedback Control",
    "Python",
    "C/C++",
    "Julia",
    "MATLAB",
    "OpenCV",
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
      image:
        "https://raw.githubusercontent.com/JoshMcConkie/ball-plate/main/working_build_v2.gif",
      imageAlt: "Ball-on-plate system tracking and balancing a ball",
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
      image:
        "https://raw.githubusercontent.com/JoshMcConkie/multi-agent-coverage-planner/master/results/same_start/grid_8x8/same_start__pareto__seriesby_agents__method_rolling_horizon_greedy_solve_steps_8__grid_8x8.png",
      imageAlt:
        "Performance comparison for receding-horizon multi-agent coverage planning",
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
      link: technicalBriefUrl,
      linkLabel: "Related technical writing: Centralized vs. Decentralized MRTA",
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
      link: "https://github.com/QuantumSavory/Genqo.jl",
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
