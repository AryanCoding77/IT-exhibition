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

function renderProjectDescription(project) {
  if (!project) return null;

  if (project.id === "muscleai") {
    return (
      <>
        <p className="text-[15px] leading-relaxed text-neutral-200">
          MuscleAI is an AI-powered fitness platform that analyzes users’ body photos to assess muscle development, symmetry, and strength balance. Its core aim is to help individuals track physical progress and plan workouts efficiently.
        </p>
        <p className="text-[14px] leading-relaxed text-neutral-400">
          Users upload a clear body photo; the system uses computer vision and machine learning to detect muscle groups, measure symmetry and highlight strength imbalances. Based on findings, MuscleAI generates personalized workout recommendations tailored to the user’s needs.
        </p>
        <p className="text-[14px] leading-relaxed text-neutral-400">
          * Automated muscle-group analysis and symmetry evaluation
          * Custom workout plans based on body structure and imbalances
          * Progress tracking over time to monitor improvements
        </p>
        <p className="text-[14px] leading-relaxed text-neutral-400">
          Perfect for fitness enthusiasts, bodybuilders, or anyone wanting structured, data-driven workout guidance.
        </p>
      </>
    );
  }

  if (project.id === "pop-hop") {
    return (
      <>
        <p className="text-[15px] leading-relaxed text-neutral-200">
          POP &amp; HOP is a 2D platformer where the player runs, jumps, avoids
          obstacles, defeats enemies, and collects items across two handcrafted
          levels. At the end of each level, the player must grab a trophy to
          move forward, and after finishing level 2 they are brought back to the
          main menu.
        </p>
        <p className="text-[14px] leading-relaxed text-neutral-400">
          Built in the Godot Engine using GDScript, the project covers core
          systems such as player movement, enemy behaviour, collectibles, and
          level transitions, using stylised assets sourced from itch.io.
        </p>
        <p className="text-[14px] leading-relaxed text-neutral-400">
          This game is designed to provide a short, fun platformer experience
          that helps beginners understand basics like movement, collisions,
          enemies, and item pickups. It works well as a portfolio piece and can
          easily be expanded with more levels, story, or advanced mechanics.
        </p>
        <p className="text-[14px] leading-relaxed text-neutral-400">
          Future advantages include improving focus and attention, quick
          thinking, problem solving, and hand&#8209;eye coordination while
          encouraging patience, a retry mindset, and a healthy sense of
          completion and achievement through simple, positive gameplay.
        </p>
      </>
    );
  }

  if (project.id === "periodic-table-of-programming-lanuages") {
    return (
      <>
        <p className="text-[15px] leading-relaxed text-neutral-200">
          The "periodic table of programming lanuages" is a unique and interactive web application designed to serve as an engaging educational resource and technical reference. The project falls under the category of Educational Technology (EdTech), specifically utilizing Data Visualization principles to structure complex information. Inspired by the chemical periodic table, this project organizes various programming languages based on shared characteristics.The project’s goal is to provide a comprehensive, single-page reference where users can quickly identify, compare, and learn about the diverse tools available in software development
        </p>
        <p className="text-[14px] leading-relaxed text-neutral-400">
          (i)HTML (Structure): Provides the foundational grid layout and semantic structure for the "elements" (languages), ensuring content is organized logically.   (ii)CSS (Style): Defines the table's appearance, including the visual periodic table grid, color-coding based on language category, and the responsive design that maintains usability across different screen sizes. (iii)JavaScript (Interactivity):this code acts as the application's engine, handling user interaction by capturing click events on a language element, retrieving the corresponding detailed information from the structured
        </p>
        <p className="text-[14px] leading-relaxed text-neutral-400">
          (i)IDENTIFY AND COMPARE LANUAGES-  Users can immediately see how languages are grouped by their primary paradigm (e.g., object-oriented, scripting) via the distinct color-coding system.    (ii)ACCESS DETAILED INFORMATION-Upon clicking any language element, the application's core feature activates, displaying a clean, dedicated information panel.
        </p>
        <p className="text-[14px] leading-relaxed text-neutral-400">
          While the current application is a complete and functional reference, its future utility can be expanded through several key enhancements: (i)Implementing robust search and filtering options would allow users to quickly find languages by name, category, or release decade, significantly improving efficiency for power users. (ii)Community Data Integration: Integrating a simple external data source would allow the content to remain up-to-date and expand the depth of information available for emerging or niche programming languages.
        </p>
      </>
    );
  }

  if (project.id === "meta-weave") {
    return (
      <>
        <p className="text-[15px] leading-relaxed text-neutral-200">
          1. Project Overview
          EcoSense is a Single-Page Application (SPA) designed to visualize real-time environmental data. It bridges the gap between complex atmospheric metrics and daily user life by converting raw sensor data into actionable health and climate insights.
          • Type: Responsive Web Application (React.js)
          • Design System: Glassmorphism (Dark Mode)
          • Target Platform: Cross-platform (Desktop, Tablet, Mobile)
          2. Component Architecture
          The application is built using a modular React architecture.
          A. Core UI Components
        </p>
        <p className="text-[14px] leading-relaxed text-neutral-400">
          Built in the Godot Engine using GDScript, the project covers core
          systems such as player movement, enemy behaviour, collectibles, and
          level transitions, using stylised assets sourced from itch.io.
        </p>
        <p className="text-[14px] leading-relaxed text-neutral-400">
          This game is designed to provide a short, fun platformer experience
          that helps beginners understand basics like movement, collisions,
          enemies, and item pickups. It works well as a portfolio piece and can
          easily be expanded with more levels, story, or advanced mechanics.
        </p>
        <p className="text-[14px] leading-relaxed text-neutral-400">
          Future advantages include improving focus and attention, quick
          thinking, problem solving, and hand&#8209;eye coordination while
          encouraging patience, a retry mindset, and a healthy sense of
          completion and achievement through simple, positive gameplay.
        </p>
      </>
    );
  }

  if (project.id === "ecosense") {
    return (
      <>
        <p className="text-[15px] leading-relaxed text-neutral-200">
          EcoSense is a React-based, glassmorphic SPA that visualizes real-time environmental data using custom SVG charts, smart location fallback, and actionable health insights—designed for cross-platform, responsive, and educational climate awareness
        </p>
        <p className="text-[14px] leading-relaxed text-neutral-400">
          It includes custom SVG Pie, Bar, and Line charts, mobile-friendly interactions, and a smart three-layer location system (GPS → IP → Manual search). Modals and tap-based interactions ensure smooth UX on all devices.
        </p>
        <p className="text-[14px] leading-relaxed text-neutral-400">
          Helpful for health monitoring, climate awareness, and education through an integrated explanatory chatbot.
        </p>
        <p className="text-[14px] leading-relaxed text-neutral-400">
          React 18, Tailwind CSS, Lucide icons, Open-Meteo API, Nominatim, and ipwho.is.
        </p>
      </>
    );
  }

  if (project.id === "sanketify") {
    return (
      <>
        <p className="text-[15px] leading-relaxed text-neutral-200">
          Sanketify is an advanced two-way sign language interpretation system that enables Sign-to-Text and Text-to-Sign communication. It helps bridge the gap between sign language users and non-signers in schools, homes, and public spaces.        </p>
        <p className="text-[14px] leading-relaxed text-neutral-400">
          Uses a webcam, OpenCV, MediaPipe, and deep learning models (CNN/LSTM) to capture hand gestures, extract landmarks, and convert them into real-time text output.        </p>
        <p className="text-[14px] leading-relaxed text-neutral-400">
          Takes typed words or sentences, tokenizes them, and displays corresponding sign images or animations using gesture libraries.        </p>
        <p className="text-[14px] leading-relaxed text-neutral-400">
          Real-time recognition, offline support, high accuracy, simple interface, and webcam-based operation.        </p>
      </>
    );
  }

  if (project.id === "nexbuild") {
    return (
      <>
        <p className="text-[15px] leading-relaxed text-neutral-200">
          Ai construction's materials estimation software, use to calculate raw/eco-friendly materials.
        </p>
        <p className="text-[14px] leading-relaxed text-neutral-400">
          Light weight calculator with a knowledge of eco-friendly database. CAD file analyzer which measure the dimensions of the building.
        </p>
        <p className="text-[14px] leading-relaxed text-neutral-400">
          It supports, eco-friendly construction development while ensuring the budget in its way.
        </p>
        <p className="text-[14px] leading-relaxed text-neutral-400">
          It can be use easily both in mobile and low end pc(s), it's target audience are startup owner, low level constructors and students to understand the construction. It will also have locality based resource which will sugest regarding the locality.
        </p>
      </>
    );
  }

  if (project.id === "evadex") {
    return (
      <>
        <p className="text-[15px] leading-relaxed text-neutral-200">
          EvadeX is a fast-paced arcade shooter where players control a spacecraft using keyboard or mobile touch controls to dodge and destroy falling meteors.
        </p>
        <p className="text-[14px] leading-relaxed text-neutral-400">
          The game starts with three lives, and each collision reduces one life while resetting the spacecraft’s speed, increasing the challenge. As meteors become faster, the difficulty gradually rises, rewarding players with higher scores for surviving longer and destroying more obstacles.
        </p>
        <p className="text-[14px] leading-relaxed text-neutral-400">
          Built using C++, Python, and web-based technologies.
        </p>
      </>
    );
  }

  if (project.id === "autostudy") {
    return (
      <>
        <p className="text-[15px] leading-relaxed text-neutral-200">
          This app is an AI-powered self-tutoring platform designed to help students study smarter using their own textbooks and notes.        </p>
        <p className="text-[14px] leading-relaxed text-neutral-400">
          Students can upload PDFs of their books and choose whether the content is private or shared with others for collaborative learning.        </p>
        <p className="text-[14px] leading-relaxed text-neutral-400">
          The AI extracts specific elements from the book and organizes them into blocks such as Definitions, Derivations & Formulas, and Chapter Questions, giving students a clean, structured study layout.        </p>
        <p className="text-[14px] leading-relaxed text-neutral-400">
          Users can chat with their book through AI to clarify concepts, get explanations, and ask questions. </p>
        <p className="text-[14px] leading-relaxed text-neutral-400">
          A dedicated assessment section generates quizzes, questions, and concept tests based on the uploaded content to evaluate understanding. </p>
      </>

    );
  }

  if (project.id === "TRANSLYADVANCED") {
    return (
      <>
        <p className="text-[15px] leading-relaxed text-neutral-200">
          This language processor and translator converts words or sentences from one language to another, acting as an interpreter to support smooth communication.          </p>
        <p className="text-[14px] leading-relaxed text-neutral-400">
          It is built using Machine Learning, especially Neural Machine Translation (NMT), which uses an encoder–decoder system and deep learning to deliver accurate, natural-sounding translations.
        </p>
        <p className="text-[14px] leading-relaxed text-neutral-400">
          The translator supports global communication, market expansion, legal and financial translation, customer support, and international travel across trade, tourism, education, and healthcare.        </p>
        <p className="text-[14px] leading-relaxed text-neutral-400">
          Its goal is worldwide unification by enabling equal communication among people of all countries.        </p>

      </>

    );
  }


  if (project.id === "ecolens") {
    return (
      <>
        <p className="text-[15px] leading-relaxed text-neutral-200">
          This screen is the Windows Boot Manager, which appears when your system has issues loading Windows normally.          </p>
        <p className="text-[14px] leading-relaxed text-neutral-400">
          It usually comes after a forced shutdown, hardware change, corrupted boot files, or BIOS settings reset.        </p>
        <p className="text-[14px] leading-relaxed text-neutral-400">
          The system is asking you to choose an option to continue booting Windows safely.        </p>
        <p className="text-[14px] leading-relaxed text-neutral-400">
          Select “Start Windows Normally” first; if it fails, choose “Launch Startup Repair” to automatically fix boot problems.        </p>

      </>

    );
  }

  if (project.id === "real-time-hammerball-scoreboard") {
    return (
      <>
        <p className="text-[15px] leading-relaxed text-neutral-200">
          The Real-Time Hammerball Scoreboard is a digital system that eliminates manual scoring errors by updating game statistics instantly as data is entered.          </p>
        <p className="text-[14px] leading-relaxed text-neutral-400">
          The scorer saves the spreadsheet, a Python server detects the update, and a WebSocket message immediately refreshes the on-screen scoreboard with new runs, wickets, and units.        </p>
        <p className="text-[14px] leading-relaxed text-neutral-400">
          Excel/LibreOffice for input, Python with openpyxl and websockets for backend, and HTML-JavaScript with Tailwind CSS for the display.        </p>
        <p className="text-[14px] leading-relaxed text-neutral-400">
          A custom scoring web form and multi-screen live broadcasting are planned for expanded functionality.        </p>

      </>

    );
  }

if (project.id === "Eco-Product-Finder") {
    return (
      <>
        <p className="text-[15px] leading-relaxed text-neutral-200">
          The Real-Time Hammerball Scoreboard is a digital system that eliminates manual scoring errors by updating game statistics instantly as data is entered.          </p>
        <p className="text-[14px] leading-relaxed text-neutral-400">
          The scorer saves the spreadsheet, a Python server detects the update, and a WebSocket message immediately refreshes the on-screen scoreboard with new runs, wickets, and units.        </p>
        <p className="text-[14px] leading-relaxed text-neutral-400">
          Excel/LibreOffice for input, Python with openpyxl and websockets for backend, and HTML-JavaScript with Tailwind CSS for the display.        </p>
        <p className="text-[14px] leading-relaxed text-neutral-400">
          A custom scoring web form and multi-screen live broadcasting are planned for expanded functionality.        </p>

      </>

    );
  }

  
if (project.id === "D.T-PPT") {
    return (
      <>
        <p className="text-[15px] leading-relaxed text-neutral-200">
         Deep Tech refers to innovations built on advanced scientific and engineering breakthroughs with the power to transform entire industries. It includes fields like AI, robotics, quantum computing, biotechnology, advanced materials, semiconductors, space tech, and clean energy          </p>
        <p className="text-[14px] leading-relaxed text-neutral-400">
          These technologies solve complex global challenges by enabling intelligent automation, real-time analytics, and sustainable solutions. In healthcare, Deep Tech powers early disease detection, robotic surgeries, and personalized monitoring.        </p>
        <p className="text-[14px] leading-relaxed text-neutral-400">
          In energy, it optimizes renewable sources, smart grids, and predictive maintenance. In finance, it enhances fraud detection, secure transactions, and AI-driven advisory systems. Defense benefits from AI surveillance and cybersecurity, while transportation and manufacturing leverage automation, smart routing, and predictive systems for safer, efficient operations.        </p>
        
      </>

    );
  }
  if (project.id === "Neon-Arcade-Hub") {
    return (
      <>
        <p className="text-[15px] leading-relaxed text-neutral-200">
         Neon Arcade Hub is a vibrant, neon-themed gaming platform that combines classic and modern minigames into one polished experience</p>
        <p className="text-[14px] leading-relaxed text-neutral-400">
          Players start on a unified dashboard where they can browse games, track their XP, monitor progress, and jump instantly into any challenge.
        </p>
        <p className="text-[14px] leading-relaxed text-neutral-400">
          Each game carries its own unique style — from strategic classics like Rock Paper Scissors and Tic-Tac-Toe to fast-paced options such as Hangman, Number Guess, and Snake. Several games feature adaptive AI, making every match feel dynamic, competitive, and constantly engaging. Progress is shared across the hub, letting players build streaks, set new personal bests, and unlock achievements.        </p>
        <p className="text-[14px] leading-relaxed text-neutral-400">
          Smooth animations, clean layouts, and glowing neon visuals give the entire platform a modern, immersive feel.        </p>

      </>

    );
  }

    if (project.id === "Smarthome") {
    return (
      <>
        <p className="text-[15px] leading-relaxed text-neutral-200">
         A smart home uses the Internet of Things (IoT) to make daily living more convenient, secure, and energy-efficient by automating household appliances. In this project, we created a basic IoT-based smart home system that allows users to remotely control devices such as lights, fans, and other electrical appliances through an internet-connected interface. Using components like a Raspberry Pi or NodeMCU, relay modules, jumper wires, Wi-Fi, and a simple dashboard, the system processes user commands online and sends signals to the microcontroller. The microcontroller then switches appliances ON or OFF through relays. This project highlights how IoT technology simplifies life by enabling automatic and remote operation of home devices, focusing only on manual and web-based control without voice commands.</p>
        
      </>

    );
  }

   if (project.id === "Red-Shadow-Chat") {
    return (
      <>
        <p className="text-[15px] leading-relaxed text-neutral-200">
         This Python-based GUI Chatting Application is built using Tkinter for the interface and Pillow for image handling. It includes a simple file-based login system that stores user credentials in JSON format. The app features a custom black-and-red theme, a scrollable chat area, emoji support, and an AI reply engine that responds using keyword matching and random fallback messages. A unique loading animation with falling red numbers appears before login, enhancing the visual experience. The code follows a modular class-based structure, includes keyboard shortcuts, and provides error handling for smooth performance. Future updates aim to add voice input, reminders, a calculator, quiz mode, mini-games, and multi-user support.</p>
        
      </>

    );
  }


  if (project.description) {
    return (
      <p className="text-[15px] leading-relaxed text-neutral-200">
        {project.description}
      </p>
    );
  }

  return (
    <p className="text-[14px] leading-relaxed text-neutral-400">
      This project explores cutting‑edge concepts in {project.field || "tech"}
      , with a focus on experimentation and rapid iteration.
    </p>
  );
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
            className="relative flex h-[92vh] w-[92vw] max-w-md flex-col overflow-hidden rounded-[1.9rem] border border-orange-500/70 bg-gradient-to-b from-black/80 via-[#050505]/95 to-black/95 px-4 pb-4 pt-5 shadow-[0_30px_90px_rgba(0,0,0,1)] backdrop-blur-2xl"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
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
                  <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-orange-500/70 bg-black">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="h-full w-full bg-[radial-gradient(circle_at_0%_0%,rgba(249,115,22,0.7),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(253,224,71,0.55),transparent_55%)]" />
                    )}
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
              {project.detailImage && (
                <motion.button
                  type="button"
                  className="group relative w-full"
                  whileTap={{ scale: 0.97 }}
                >
                  <div className="relative aspect-video overflow-hidden rounded-2xl border border-orange-500/70 bg-black shadow-[0_25px_60px_rgba(0,0,0,1)]">
                    {/* Project‑specific demo image */}
                    <img
                      src={project.detailImage}
                      alt={`${project.name} demo`}
                      className="h-full w-full object-cover"
                    />
                    {/* Soft gradient overlay for readability */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    {/* Play button */}
                  </div>
                </motion.button>
              )}

              {/* PROJECT DESCRIPTION */}
              <section className="space-y-2">
                <h3 className="text-xs uppercase tracking-[0.28em] text-neutral-400">
                  About project
                </h3>
                {renderProjectDescription(project)}

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
            <div className="mt-4 flex items-center justify-end gap-3 text-[11px] uppercase tracking-[0.24em]">
              {/* View Project button – only for MuscleAI */}
              {project.id === "muscleai" && (
                <a
                  href={project.url || "#"}
                  target={project.url ? "_blank" : "_self"}
                  rel={project.url ? "noreferrer" : undefined}
                  className="rounded-full bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-300 px-5 py-2.5 text-center font-semibold text-black shadow-[0_0_25px_rgba(0,0,0,1)] active:scale-95 transition-transform"
                >
                  View Project
                </a>
              )}
              {/* Close pill */}
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-[11px] uppercase tracking-[0.22em] text-neutral-200 shadow-[0_0_14px_rgba(0,0,0,1)] active:scale-95"
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