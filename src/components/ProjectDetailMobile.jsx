// src/components/ProjectDetailMobile.jsx
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Expected project shape:
 * {
 *   id: string;
 *   name: string;
 *   description: string;
 *   field: string;          // e.g. "AI", "IoT"
 *   tech?: string[];        // e.g. ["AI", "Cloud"]
 *   url?: string;           // external link to project
 *   status?: "active" | "inactive" | "coming-soon";
 * }
 */

const demoTeam = [
  { id: "t1", initials: "NS", name: "Neon Systems" },
  { id: "t2", initials: "VX", name: "Vortex Labs" },
  { id: "t3", initials: "PX", name: "Pixel Foundry" },
];

const scanLineVariants = {
  initial: { x: "-40%", opacity: 0 },
  animate: {
    x: "40%",
    opacity: 1,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

function statusChip(status) {
  const normalized = (status || "active").toLowerCase();
  if (normalized === "inactive") {
    return {
      label: "Inactive",
      classes:
        "bg-red-500/10 text-red-300 border border-red-400/40",
    };
  }
  if (normalized === "coming-soon") {
    return {
      label: "Coming soon",
      classes:
        "bg-purple-500/10 text-purple-200 border border-purple-400/40",
    };
  }
  // For active status, return null so no chip is rendered
  return null;
}

export default function ProjectDetailMobile({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key={project.id}
          className="fixed inset-0 z-40 flex items-center justify-center bg-black/80 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Main frosted card */}
          <motion.div
            layoutId={`project-${project.id}`}
            className="relative flex h-[92vh] w-[92vw] max-w-md flex-col overflow-hidden rounded-[1.9rem] border border-orange-500/70 bg-gradient-to-b from-black/80 via-[#050505]/95 to-black/95 px-4 pb-4 pt-5 shadow-[0_30px_90px_rgba(0,0,0,1)] backdrop-blur-2xl"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
          >
            {/* Animated neon scan bar at top */}
            <div className="pointer-events-none absolute inset-x-6 top-4 h-px overflow-hidden">
              <motion.div
                className="h-px w-[160%] bg-gradient-to-r from-transparent via-orange-400 to-transparent"
                variants={scanLineVariants}
                initial="initial"
                animate="animate"
              />
            </div>

            {/* Scrollable content */}
            <div className="relative mt-4 flex-1 space-y-5 overflow-y-auto pr-1">
              {/* HEADER ROW */}
              <div className="flex gap-3">
                {/* Project logo */}
                <div className="relative">
                  <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-br from-orange-500/60 via-yellow-300/20 to-transparent opacity-80 blur-md" />
                  <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-orange-500/70 bg-gradient-to-br from-orange-500/50 via-black to-black shadow-[0_0_30px_rgba(248,152,31,0.9)]">
                    <div className="h-full w-full bg-[radial-gradient(circle_at_0%_0%,rgba(249,115,22,0.7),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(253,224,71,0.55),transparent_55%)]" />
                  </div>
                </div>

                {/* Name + field tag */}
                <div className="flex min-w-0 flex-1 flex-col justify-center">
                  <h2 className="text-[1.3rem] font-semibold uppercase tracking-[0.22em] text-white drop-shadow-[0_0_16px_rgba(248,150,31,0.9)]">
                    {project.name}
                  </h2>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="rounded-full border border-orange-400/60 bg-orange-500/15 px-2 py-[3px] text-[10px] uppercase tracking-[0.26em] text-orange-200">
                      {project.field || "Field"}
                    </span>
                  </div>
                </div>
              </div>

              {/* FEATURE VIDEO (thumbnail + play) */}
              <motion.button
                type="button"
                className="group relative w-full"
                whileTap={{ scale: 0.97 }}
              >
                <div className="relative aspect-video overflow-hidden rounded-2xl border border-orange-500/70 bg-gradient-to-br from-orange-500/20 via-black to-black shadow-[0_25px_60px_rgba(0,0,0,1)]">
                  {/* Pulsing glow overlay */}
                  <motion.div
                    className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(249,115,22,0.45),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(253,224,71,0.35),transparent_55%)]"
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: 0.6 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                  {/* Play button */}
                  <motion.div
                    className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 shadow-[0_0_30px_rgba(0,0,0,1)]"
                    whileTap={{ scale: 0.9 }}
                  >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-500/80 to-yellow-300/80 opacity-80 blur-md" />
                    <div className="relative ml-[3px] h-6 w-6 border-l-[10px] border-l-black border-y-[7px] border-y-transparent" />
                  </motion.div>
                </div>
              </motion.button>

              {/* PROJECT DESCRIPTION */}
              <section className="space-y-2">
                <h3 className="text-xs uppercase tracking-[0.28em] text-neutral-400">
                  About project
                </h3>
                <p className="text-[15px] leading-relaxed text-neutral-200">
                  {project.description}
                </p>
                <p className="text-[14px] leading-relaxed text-neutral-400">
                  Operating across dense urban corridors and low‑altitude drone lanes,
                  this node constantly learns from interference, weather, and crowd
                  patterns to keep links stable when everything else is failing.
                  It is designed for noisy, hostile environments where traditional
                  infrastructure can’t be trusted, streaming telemetry, commands,
                  and sensor meshes with millisecond precision.
                </p>

                {/* Highlight chips (from tech stack) */}
                {project.tech && project.tech.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
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
                          className={`rounded-full bg-gradient-to-r ${palette} px-3 py-[5px] text-[9px] uppercase tracking-[0.26em] shadow-[0_0_16px_rgba(0,0,0,0.9)]`}
                        >
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                )}
              </section>

              {/* INFO PANEL */}
              <section className="space-y-3">
                <div className="flex flex-wrap items-center justify-end gap-3">
                  {/* Status chip */}
                  {(() => {
                    const s = statusChip(project.status);
                    if (!s) return null;
                    return (
                      <span
                        className={`rounded-full px-3 py-[5px] text-[9px] uppercase tracking-[0.22em] ${s.classes}`}
                      >
                        {s.label}
                      </span>
                    );
                  })()}
                </div>

                {/* Date + meta row (placeholder) */}
                <div className="flex flex-wrap items-center gap-3 text-[11px] text-neutral-500">
                  <span>Updated · 2049‑10‑21</span>
                  <span className="h-[3px] w-[3px] rounded-full bg-neutral-600" />
                  <span>Deep Tech Showcase · Mobile</span>
                </div>
              </section>
            </div>

            {/* ACTIONS FOOTER */}
            <div className="mt-4 flex items-center justify-between text-[11px] uppercase tracking-[0.24em]">
              {/* View Project button */}
              <a
                href={project.url || "#"}
                target={project.url ? "_blank" : "_self"}
                rel={project.url ? "noreferrer" : undefined}
                className="mr-2 flex-1 rounded-full bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-300 py-2.5 text-center font-semibold text-black shadow-[0_0_25px_rgba(0,0,0,1)] active:scale-95 transition-transform"
              >
                View Project
              </a>

              {/* Close pill */}
              <button
                type="button"
                onClick={onClose}
                className="ml-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-[11px] uppercase tracking-[0.22em] text-neutral-200 shadow-[0_0_14px_rgba(0,0,0,1)] active:scale-95"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}