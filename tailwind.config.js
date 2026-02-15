export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {

      /* ===============================
         BASE FOUNDATION
      =============================== */
      colors: {
        foundation: {
          void: "#05060a",
          abyss: "#070812",
          quiet: "#0c0f1a",
        },

        light: {
          divine: "#f8f9fb",
          soft: "rgba(255,255,255,0.06)",
          glow: "rgba(255,255,255,0.14)",
        },

        room: {
          vg: "#0b1020",
          leo: "#111316",
          jobs: "#0a0a0a",
          musk: "#0a0d12",
        }
      },

      /* ===============================
         ATMOSPHERE TOKENS
      =============================== */
      backgroundImage: {
        vgAura:
          "radial-gradient(900px 600px at 50% 45%, rgba(70,110,200,0.06), transparent 75%)",

        leoDust:
          "radial-gradient(800px 500px at 50% 40%, rgba(200,210,220,0.05), transparent 75%)",

        muskField:
          "radial-gradient(900px 700px at 50% 45%, rgba(120,160,220,0.05), transparent 80%)",

        altar:
          "linear-gradient(to bottom, transparent, rgba(255,255,255,0.4), transparent)",
      },

      /* ===============================
         TYPOGRAPHY SYSTEM
      =============================== */
      fontFamily: {
        serifDisplay: ["Cormorant Garamond", "serif"],
        sansDisplay: ["Inter", "system-ui", "sans-serif"],
      },

      letterSpacing: {
        sacred: "0.28em",
        ultra: "0.45em",
        ritual: "0.65em",
      },

      fontSize: {
        hero: ["54px", { lineHeight: "1.2" }],
        origin: ["12px", { lineHeight: "1.8" }],
        pillar: ["13px", { lineHeight: "1.6" }],
      },

      /* ===============================
         LIGHT SYSTEM
      =============================== */
      boxShadow: {
        divine:
          "0 0 40px rgba(255,255,255,0.12), 0 0 120px rgba(255,255,255,0.05)",

        pillar:
          "0 0 25px rgba(255,255,255,0.18), 0 0 80px rgba(255,255,255,0.07)",

        vgGlow:
          "0 0 40px rgba(255,220,140,0.15), 0 0 120px rgba(70,110,200,0.08)",
      },

      /* ===============================
         BREATHING ANIMATIONS
      =============================== */
      animation: {
        slowPulse: "slowPulse 14s ease-in-out infinite",
        divineFloat: "divineFloat 18s ease-in-out infinite",
      },

      keyframes: {
        slowPulse: {
          "0%,100%": { opacity: 0.18 },
          "50%": { opacity: 0.38 },
        },
        divineFloat: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(6px)" },
        },
      },
    },
  },

  plugins: [],
};
