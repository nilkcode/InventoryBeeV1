export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        border: "var(--color-border)",

        text_primary: "var(--color-text-primary)",
        text_secondary: "var(--color-text-secondary)",

        primary: "var(--color-primary)",
        primary_hover: "var(--color-primary-hover)",

        success: "var(--color-success)",
        danger: "var(--color-danger)",
      },
      spacing: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "32px",
      },
      borderRadius: {
        lg: "12px",
        xl: "16px",
      },
    },
  },
  plugins: [],
};
