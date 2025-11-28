import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import ProjectDetailMobile from "./ProjectDetailMobile";

const FILTERS = ["All", "AI", "Robotics", "Web", "XR", "IoT"];

const PROJECTS = [
  {
    id: "quantum-grid",
    name: "Quantum Grid",
    description: "Real-time quantum‑inspired routing for autonomous swarms.",
    field: "AI",
    tech: ["AI", "Edge", "5G"],
    url: "https://deeptech.local/projects/quantum-grid",
  },
  {
    id: "neon-sentinel",
    name: "Neon Sentinel",
    description: "Vision system that tracks anomalies across cyber‑cities.",
    field: "Robotics",
    tech: ["Robotics", "CV", "Lidar"],
    url: "https://deeptech.local/projects/neon-sentinel",
  },
  {
    id: "meta-weave",
    name: "Meta Weave",
    description: "Adaptive XR layer blending real and virtual city data.",
    field: "XR",
    tech: ["XR", "WebGPU"],
    url: "https://deeptech.local/projects/meta-weave",
  },
  {
    id: "aether-link",
    name: "Aether Link",
    description: "Ultra‑low‑latency mesh for drone‑to‑drone coordination.",
    field: "IoT",
    tech: ["IoT", "Mesh"],
    url: "https://deeptech.local/projects/aether-link",
  },
  {
    id: "holo-chain",
    name: "Holo Chain",
    description: "Distributed holographic displays for shared analytics.",
    field: "Web",
    tech: ["Web", "3D", "XR"],
    url: "https://deeptech.local/projects/holo-chain",
  },
  {
    id: "omega-core",
    name: "Omega Core",
    description: "Self-healing data core for mission-critical nodes.",
    field: "AI",
    tech: ["AI", "Cloud"],
    url: "https://deeptech.local/projects/omega-core",
  },
  {
    id: "nova-pulse",
    name: "Nova Pulse",
    description: "Orbital sensor mesh for monitoring deep-space anomalies in real time.",
    field: "AI",
    tech: ["AI", "Telemetry", "SatNet"],
    url: "https://deeptech.local/projects/nova-pulse",
  },
  {
    id: "spectra-node",
    name: "Spectra Node",
    description: "Edge compute nodes that color‑code citywide risk in milliseconds.",
    field: "Web",
    tech: ["Web", "Edge", "Analytics"],
    url: "https://deeptech.local/projects/spectra-node",
  },
  {
    id: "drift-net",
    name: "Drift Net",
    description: "Autonomous drone lattice for environmental telemetry over oceans.",
    field: "IoT",
    tech: ["IoT", "Mesh", "5G"],
    url: "https://deeptech.local/projects/drift-net",
  },
  {
    id: "lambda-vault",
    name: "Lambda Vault",
    description: "Self‑optimizing data vault that rewrites its own redundancy rules.",
    field: "AI",
    tech: ["AI", "Cloud", "Security"],
    url: "https://deeptech.local/projects/lambda-vault",
  },
  {
    id: "ember-link",
    name: "Ember Link",
    description: "Hyper‑reliable mesh for disaster‑zone communications.",
    field: "IoT",
    tech: ["IoT", "Resilience", "Mesh"],
    url: "https://deeptech.local/projects/ember-link",
  },
  {
    id: "prism-lattice",
    name: "Prism Lattice",
    description: "Holographic city overlay for operators in mixed reality.",
    field: "XR",
    tech: ["XR", "3D", "WebGPU"],
    url: "https://deeptech.local/projects/prism-lattice",
  },
  {
    id: "synapse-trail",
    name: "Synapse Trail",
    description: "Neural pathfinding engine for autonomous ground convoys.",
    field: "Robotics",
    tech: ["Robotics", "CV", "AI"],
    url: "https://deeptech.local/projects/synapse-trail",
  },
  {
    id: "chrono-field",
    name: "Chrono Field",
    description: "Temporal anomaly detector for high‑frequency infra networks.",
    field: "AI",
    tech: ["AI", "Signal", "Cloud"],
    url: "https://deeptech.local/projects/chrono-field",
  },
];

export default function AllProjectsMobile({
  onBackHome,
  onProjectSelect,
}) {
  const navigate = useNavigate();
  const location = useLocation();

  const projectId = useMemo(() => {
    const match = location.pathname.match(/\/allprojects\/?([^/]+)?/);
    return match && match[1] ? match[1] : null;
  }, [location.pathname]);

  const [activeFilter, setActiveFilter] = useState("All");
  const selectedProject = useMemo(
    () => PROJECTS.find((p) => p.id === projectId) || null,
    [projectId]
  );

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return PROJECTS;
    return PROJECTS.filter((p) => p.field === activeFilter);
  }, [activeFilter]);

  const handleCardClick = (project) => {
    if (onProjectSelect) {
      // Call after a short delay so the scan/expand animation starts first
      setTimeout(() => onProjectSelect(project), 260);
    }
    navigate(`/allprojects/${project.id}`);
  };

  const neonLines = [0, 1, 2];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0a0a] text-white">
      {/* Radial glow background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-orange-500/40 blur-3xl" />
        <div className="absolute bottom-[-30%] left-1/2 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-orange-600/20 blur-3xl" />
      </div>

      {/* Neon data rays (hidden on small screens to improve mobile performance) */}
      <div className="pointer-events-none absolute inset-0 -z-10 hidden md:block">
        {neonLines.map((i) => (
          <motion.div
            key={i}
            className="absolute left-[-40%] h-px w-[160%] bg-gradient-to-r from-transparent via-orange-400/80 to-transparent"
            style={{ top: `${16 + i * 13}%`, opacity: 0.3 + i * 0.08 }}
            initial={{ x: "-40%" }}
            animate={{ x: "20%" }}
            transition={{
              duration: 6 + i * 1.8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex min-h-screen flex-col px-4 pb-24 pt-6">
        {/* Header */}
        <header className="mb-3">
          <div className="mb-1 text-xs uppercase tracking-[0.25em] text-orange-400/80">
            Deep Tech Exhibition
          </div>
          <div className="flex items-baseline justify-start">
            <h1 className="text-3xl font-semibold tracking-[0.18em] text-white">
              PROJECTS
            </h1>
          </div>

          <motion.div
            className="mt-2 h-[2px] w-24 rounded-full bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-500 shadow-[0_0_12px_rgba(249,115,22,0.9)]"
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          />
        </header>

        {/* Project bento grid */}
        <main className="mt-4 flex-1">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
            {filteredProjects.map((project, index) => (
              <React.Fragment key={project.id}>
                <ProjectCard
                  project={project}
                  index={index}
                  onClick={() => handleCardClick(project)}
                />
                {(index + 1) % 4 === 0 && (
                  <div className="col-span-2 lg:col-span-4 flex items-center justify-center">
                    <motion.div
                      className="h-px w-10/12 bg-gradient-to-r from-transparent via-orange-400/80 to-transparent"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true, amount: 0.7 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </main>
      </div>

      {/* Sticky back-to-home button */}
      <div className="pointer-events-none fixed bottom-0 left-0 right-0 z-30 flex justify-center">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/80 via-black/60 to-transparent" />

        <motion.button
          whileTap={{ scale: 0.96 }}
          className="relative mb-3 pointer-events-auto w-[86%] rounded-full bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-300 py-3 text-sm font-semibold uppercase tracking-[0.28em] text-black shadow-[0_18px_50px_rgba(0,0,0,0.9)]"
          onClick={() => onBackHome && onBackHome()}
        >
          Back to Home
        </motion.button>
      </div>

      <ProjectDetailMobile
        project={selectedProject}
        onClose={() => navigate("/allprojects")}
      />
    </div>
  );
}

function ProjectCard({ project, index, onClick }) {
  const slideFrom = index % 2 === 0 ? -20 : 20;

  return (
    <motion.button
      layoutId={`project-${project.id}`}
      className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-orange-500/70 bg-white/5 p-2.5 text-left shadow-[0_20px_60px_rgba(0,0,0,0.95)] backdrop-blur-md"
      initial={{ opacity: 0, y: 30, x: slideFrom }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
    >
      {/* Scan overlay on tap */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        initial={false}
        whileTap={{ background: "rgba(249,115,22,0.12)" }}
      >
        <motion.div
          className="absolute left-[-30%] top-1/2 h-[1px] w-[160%] -translate-y-1/2 bg-gradient-to-r from-transparent via-yellow-300 to-transparent"
          initial={false}
          whileTap={{ x: ["-20%", "30%"] }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        />
      </motion.div>

      {/* Image */}
      <div className="relative mb-2 rounded-xl border border-orange-400/70 bg-gradient-to-br from-orange-500/30 via-black to-black p-[2px]">
        <div className="relative h-36 md:h-40 lg:h-44 overflow-hidden rounded-[0.7rem] bg-black/80">
          {project.image ? (
            <img
              src={project.image}
              alt={project.name}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="h-full w-full bg-[radial-gradient(circle_at_0%_0%,rgba(249,115,22,0.6),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(253,224,71,0.5),transparent_55%)]" />
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <h2 className="text-[13px] font-semibold uppercase tracking-[0.2em] text-white drop-shadow-[0_0_12px_rgba(248,150,31,0.9)]">
            {project.name}
          </h2>
          <p className="mt-1 line-clamp-2 text-[11px] text-neutral-300">
            {project.description}
          </p>
        </div>

        <div className="mt-2 flex flex-wrap gap-1">
          {project.tech.map((tag, i) => {
            const palette =
              i % 3 === 0
                ? "from-orange-500/80 to-yellow-300/80 text-black"
                : i % 3 === 1
                ? "from-cyan-400/80 to-sky-300/80 text-black"
                : "from-fuchsia-500/80 to-purple-400/80 text-black";
            return (
              <span
                key={tag}
                className={`rounded-full bg-gradient-to-r ${palette} px-2 py-[3px] text-[9px] uppercase tracking-[0.22em] shadow-[0_0_15px_rgba(0,0,0,0.9)]`}
              >
                {tag}
              </span>
            );
          })}
        </div>
      </div>
    </motion.button>
  );
}