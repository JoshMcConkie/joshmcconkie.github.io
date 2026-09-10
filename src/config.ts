import technicalBriefUrl from "../assets/Centralized_vs_Decentralized_MRTA.pdf?url";

export const siteConfig = {
  name: "Joshua McConkie",
  title: "Robotics & Autonomy | Applied Mathematics Student",
  recruitingIntro: "Brigham Young University · Expected graduation: April 2028",
  internshipInterests: "Seeking Summer 2027 internships in robotics, autonomy, perception, and software engineering.",
  description: "Joshua McConkie, BYU Applied and Computational Mathematics student graduating April 2028. Seeking Summer 2027 robotics, autonomy, perception, and software engineering internships. RobotBoat Perception Lead and multi-agent planning researcher.",
  accentColor: "#1d4ed8",

  social: {
    email: "joshuamcconkie@gmail.com",
    linkedin: "https://www.linkedin.com/in/joshuamcconkie",
    github: "https://github.com/JoshMcConkie",
  },

  aboutMe: "I’m an Applied and Computational Mathematics student at Brigham Young University, graduating in April 2028. I enjoy the math behind robotics, and I like building things to see how those ideas work in practice. I’m seeking Summer 2027 internships in robotics, autonomy, perception, and software engineering.\n\nMy experience includes multi-agent planning and optimization research at BYU IDeA Labs, scientific simulation, and a camera-based feedback control system. I’m the Perception Lead for BYU’s RobotBoat Team and Vice President of the BYU SIAM Chapter.\n\nI co-designed Mimic’s robotics architecture and skill-transition graph, and directed integration of perception with simulated robot execution. My teams earned first place at the 2026 NVIDIA × Nebius × Antioch × Toloka Physical AI Hackathon and second place at BYU’s HireReady Hackathon.",

  portrait: {
    image: "/images/portrait.jpg",
    imageAlt: "Portrait of Joshua McConkie",
    placeholder: "Portrait photo to come",
  },

  currentRoles: [
    { organization: "BYU RobotBoat Team", title: "Perception Lead" },
    { organization: "BYU SIAM Chapter", title: "Vice President" },
  ],

  recognition: [
    {
      placement: "1st Place · 2026",
      event: "Physical AI Hackathon",
      organizers: "NVIDIA × Nebius × Antioch × Toloka",
      href: "#physical-ai",
    },
    {
      placement: "2nd Place · 2026",
      event: "BYU HireReady Hackathon — Robot Learning",
      organizers: "Mimic · 24-hour team competition",
      href: "#mimic",
    },
  ],

  skills: [
    "Mathematical Modeling",
    "Optimization",
    "Simulation",
    "Numerical Computing",
    "Data Analysis",
    "Multi-Agent Systems",
    "Feedback Control",
    "Robotics Architecture",
    "Perception Pipeline Design",
    "MuJoCo",
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
      name: "Mimic — Learning from Human Demonstration",
      id: "mimic",
      award: "2nd Place · BYU HireReady Hackathon",
      description:
        "Co-created a system that recognizes manipulation phases in human video, tracks object motion separately, and retargets pick-and-place tasks to a simulated Franka Panda in MuJoCo.",
      highlights: [
        "Co-designed the architecture and modular skill-transition graph, linking classifier labels to robot actions and validating the two highest-probability predictions against legal transitions.",
        "Specified frame-aligned data and coordinate-mapping contracts, and selected proximity-based waypoint handoff while retaining measured final-arrival checks.",
        "Directed implementation and integration through AI coding agents. The recorded simulation demonstrates grasp, transport, and release; robot motion uses conventional IK and control.",
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
        "Our team won the five-hour NVIDIA × Nebius × Antioch × Toloka Physical AI Hackathon with a vision-language-action evaluation and retraining workflow. My contribution centered on the robot-side integration path and control harness for an SO-101 arm.",
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
