import technicalBriefUrl from "../assets/Centralized_vs_Decentralized_MRTA.pdf?url";

export const siteConfig = {
  name: "Joshua McConkie",
  title: "Robotics & Autonomy | Applied Mathematics Student",
  recruitingIntro: "Brigham Young University · Expected graduation: April 2028",
  roleSummary: "Robotics Research Assistant at FRoST · Incoming Engineering Intern, State Estimation at Shield AI (Summer 2027)",
  description: "Joshua McConkie, BYU applied math student and Robotics Research Assistant at FRoST. Incoming Engineering Intern on Shield AI’s State Estimation team, Summer 2027.",
  accentColor: "#1d4ed8",

  social: {
    email: "joshuamcconkie@gmail.com",
    linkedin: "https://www.linkedin.com/in/joshuamcconkie",
    github: "https://github.com/JoshMcConkie",
  },

  aboutMe: "I study applied and computational mathematics at BYU (ACME), with interests in robotics and autonomy. I’m the Perception Lead for BYU’s RoboBoat Team, and my projects range from a camera-guided balancing system to a multi-agent coverage simulator.",

  portrait: {
    image: "/images/portrait.jpg",
    imageAlt: "Portrait of Joshua McConkie",
    placeholder: "Portrait photo to come",
  },

  skills: [
    "Python",
    "C/C++",
    "OpenCV",
    "ROS 2",
    "Optimization",
    "Perception",
    "Multi-Agent Planning",
    "Feedback Control",
    "Embedded Systems",
  ],

  projects: [
    {
      name: "Ball-on-Plate Balancing System",
      description:
        "Built a camera-guided system that balances a ball on a tilting plate using PID control.",
      id: "ball-on-plate",
      highlights: ["Developed camera-based tracking, ESP32 firmware for two-servo actuation and IMU feedback over I2C, and supporting custom PCB hardware."],
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
        "Built a simulator to study the tradeoff between planning time and multi-agent coverage.",
      id: "coverage-planner",
      highlights: ["On an 8×8 grid with 1–7 agents and eight-step paths, planning 3–4 steps at a time retained roughly 97–99% of full-horizon greedy coverage on average and ran 2.5–10× faster."],
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
      name: "Mimic — Learning from Human Demonstration",
      id: "mimic",
      award: "2nd Place · BYU HireReady Hackathon",
      description:
        "Co-created a system that turns human demonstration video into pick-and-place tasks for a simulated Franka Panda in MuJoCo.",
      highlights: [
        "Co-designed the architecture and skill-transition graph to map recognized actions to valid robot movements.",
        "Directed implementation and integration through AI coding agents; the recorded simulation demonstrates grasp, transport, and release using conventional inverse kinematics and control.",
      ],
      link: "https://pjhancock.github.io/Mimic/",
      image: "/images/mimic.png",
      imageAlt: "Mimic’s simulated Franka Panda carrying a red cube above the tabletop in MuJoCo",
      skills: ["Robotics Architecture", "Skill Graphs", "Coordinate Retargeting", "MuJoCo"],
    },
    {
      name: "Physical AI — Robot Integration & Evaluation",
      id: "physical-ai",
      award: "1st Place · Physical AI Hackathon · 2026",
      description:
        "Our team won the NVIDIA × Nebius × Antioch × Toloka Physical AI Hackathon with a vision-language-action evaluation and retraining workflow.",
      highlights: [
        "Built and tested a control harness intended to connect model actions to LeRobot, with action validation, command clamping, and explicit control intents.",
        "Investigated platform, device-mapping, and serial-connection limitations. The final demo ran the frontend and backend; the physical robot connection remained incomplete.",
      ],
      link: "",
      image: "/images/physical-ai.png",
      imageAlt: "Physical AI Sprint team on stage holding the first-place award beneath the event and sponsor banner",
      skills: ["Python", "LeRobot Integration", "Action Validation", "Robot Control Harness"],
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
      company: "FRoST",
      title: "Robotics Research Assistant",
      dateRange: "Sep 2026 - Present",
      bullets: [
        "Organizing DB3-to-MCAP conversion with AI coding agents, selecting data to retain, and investigating timing issues and dataset usability",
        "Setting up website documentation, contributing the paper’s data structure section, and evaluating dataset hosting options",
      ],
    },
    {
      company: "Brigham Young University",
      title: "RoboBoat Perception Lead",
      dateRange: "Sep 2026 - Present",
      bullets: [
        "Leading the perception team’s technical direction and turning system requirements into implementation tasks",
        "Guiding architecture and evaluating approaches for sensor fusion, state estimation, and vision-based detection",
        "Overseeing ROS 2 node responsibilities and interfaces across the perception system",
      ],
    },
    {
      company: "BYU IDeA Labs",
      title: "Research Assistant — Multi-Agent Planning & Optimization",
      dateRange: "Mar 2026 - Sep 2026",
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
        "Contributed to a team effort to optimize a Julia simulation engine for hybrid Gaussian and non-Gaussian quantum-optics states",
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
        "Major GPA: 4.00/4.00",
        "BYU Merit Scholarship",
        "AI Association team lead and Competitive Programming Association member",
        "ACME core curriculum: mathematical analysis, algorithm design and optimization, probabilistic modeling, and dynamical systems and control",
      ],
    },
  ],
};
