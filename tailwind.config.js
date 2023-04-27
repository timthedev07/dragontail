const plugin = require(`tailwindcss/plugin`);

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
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
      },
      animation: {
        "menu-open": "menu-open 200ms ease-in-out",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant("hocus", ["&:hover", "&:focus"]);
      addVariant("child-list", "& ol", "& ul");
      addVariant("child-code", "& pre");
    }),
  ],
};
