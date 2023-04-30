module.exports = {
  content: [],
  theme: {
    extend: {
      fontSize: {
        xxs: ["0.6rem", "0.95rem"],
      },
      keyframes: {
        "menu-open": {
          "0%": {
            opacity: "0",
            transform: "scale(0.9)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        "toast-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(200px)",
          },
          "70%": {
            opacity: "0.4",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "toast-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-200px)",
          },
          "70%": {
            opacity: "0.4",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "toast-fade": {
          from: {
            opacity: "1",
          },
          to: {
            opacity: "0",
          },
        },
      },
      animation: {
        "menu-open": "menu-open 200ms ease-in-out",
        "toast-up": "toast-up 500ms cubic-bezier(0,-0.01,0,.99)",
        "toast-down": "toast-down 500ms cubic-bezier(0,-0.01,0,.99)",
        "toast-fade": "toast-fade 500ms cubic-bezier(0,-0.01,0,.99)",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
    },
  },
};
