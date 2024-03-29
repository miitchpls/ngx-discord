module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        "elevation-low":
          "0 1px 0 rgba(4,4,5,0.2),0 1.5px 0 rgba(6,6,7,0.05),0 2px 0 rgba(4,4,5,0.05)",
      },
      colors: {
        primary: "#5865f2",
        secondary: "#3ba55d",
        success: "hsl(139,calc(var(--saturation-factor, 1) * 47.3%), 43.9%)",
        tertiary: "#18191c",
        danger: "hsl(359,calc(var(--saturation-factor, 1) * 82.6%), 59.4%)",
        gray: {
          900: "#202225",
          800: "#2f3136",
          700: "#36393f",
          600: "#4f545c",
          400: "#d4d7dc",
          300: "#e3e5e8",
          200: "#ebedef",
          100: "#f2f3f5",
        },
        "header-primary": "#fff",
        "header-secondary": "#b9bbbe",
        "secondary-alt": "#292b2f",
        "modifier-selected": "rgba(79,84,92,0.32)",
        "interactive-normal": "#b9bbbe",
        "interactive-hover": "#dcddde",
        "background-tertiary":
          "hsl(216,calc(var(--saturation-factor, 1)*7.2%),13.5%)",
        "text-muted": "hsl(214,calc(var(--saturation-factor, 1)*4%),65.3%)",
        "background-secondary": " #2f3136",
        "background-loading-screen": "#25262c",
        "channels-default": "#8e9297",
        "interactive-hover":
          "hsl(210,calc(var(--saturation-factor, 1)*2.9%),86.7%)",
        "background-modifier-hover":
          "hsla(217,calc(var(--saturation-factor, 1)*7.6%),33.5%,0.4)",
        strikethrough: "#a43d40",
      },
    },
  },
  plugins: [],
};

// .dark-theme {
//   --header-primary: #fff;
//   --header-secondary: #b9bbbe;
//   --text-normal: #dcddde;
//   --text-link: hsl(197,calc(var(--saturation-factor, 1)*100%),47.8%);
//   --text-link-low-saturation: hsl(197,calc(var(--saturation-factor, 1)*100%),52.9%);
//   --text-positive: hsl(139,calc(var(--saturation-factor, 1)*66.8%),58.6%);
//   --text-warning: hsl(38,calc(var(--saturation-factor, 1)*95.7%),54.1%);
//   --text-danger: hsl(359,calc(var(--saturation-factor, 1)*82.6%),59.4%);
//   --text-brand: hsl(235,calc(var(--saturation-factor, 1)*86.1%),77.5%);
//   --interactive-normal: #b9bbbe;
//   --interactive-hover: #dcddde;
//   --interactive-active: #fff;
//   --interactive-muted: #4f545c;
//   --background-primary: #36393f;
//   --background-secondary-alt: #292b2f;
//   --background-accent: #4f545c;
//   --background-floating: #18191c;
//   --background-nested-floating: #2f3136;
//   --background-mobile-primary: #36393f;
//   --background-mobile-secondary: #2f3136;
//   --background-modifier-hover: rgba(79,84,92,0.16);
//   --background-modifier-active: rgba(79,84,92,0.24);
//   --background-modifier-selected: rgba(79,84,92,0.32);
//   --background-modifier-accent: hsla(0,0%,100%,0.06);
//   --info-positive-text: #fff;
//   --info-warning-text: #fff;
//   --info-danger-text: #fff;
//   --info-help-background: hsla(197,calc(var(--saturation-factor, 1)*100%),47.8%,0.1);
//   --info-help-foreground: hsl(197,calc(var(--saturation-factor, 1)*100%),47.8%);
//   --info-help-text: #fff;
//   --status-warning-text: #000;
//   --scrollbar-thin-thumb: #202225;
//   --scrollbar-thin-track: transparent;
//   --scrollbar-auto-thumb: #202225;
//   --scrollbar-auto-track: hsl(210,calc(var(--saturation-factor, 1)*9.8%),20%);
//   --scrollbar-auto-scrollbar-color-thumb: #202225;
//   --scrollbar-auto-scrollbar-color-track: #2f3136;
//   --elevation-stroke: 0 0 0 1px rgba(4,4,5,0.15);
//   --elevation-medium: 0 4px 4px rgba(0,0,0,0.16);
//   --elevation-high: 0 8px 16px rgba(0,0,0,0.24);
//   --logo-primary: #fff;
//   --control-brand-foreground: hsl(235,calc(var(--saturation-factor, 1)*86.1%),77.5%);
//   --control-brand-foreground-new: hsl(235,calc(var(--saturation-factor, 1)*86.1%),77.5%);
//   --background-mentioned: hsla(38,calc(var(--saturation-factor, 1)*95.7%),54.1%,0.1);
//   --background-mentioned-hover: hsla(38,calc(var(--saturation-factor, 1)*95.7%),54.1%,0.08);
//   --background-message-hover: rgba(4,4,5,0.07);
//   --guild-header-text-shadow: 0 1px 1px rgba(0,0,0,0.4);
//   --channeltextarea-background: #40444b;
//   --activity-card-background: #202225;
//   --textbox-markdown-syntax: #8e9297;
//   --spoiler-revealed-background: #292b2f;
//   --spoiler-hidden-background: #202225;
//   --deprecated-card-bg: rgba(32,34,37,0.6);
//   --deprecated-card-editable-bg: rgba(32,34,37,0.3);
//   --deprecated-store-bg: #36393f;
//   --deprecated-quickswitcher-input-background: #72767d;
//   --deprecated-quickswitcher-input-placeholder: hsla(0,0%,100%,0.3);
//   --deprecated-text-input-bg: rgba(0,0,0,0.1);
//   --deprecated-text-input-border: rgba(0,0,0,0.3);
//   --deprecated-text-input-border-hover: #040405;
//   --deprecated-text-input-border-disabled: #202225;
//   --deprecated-text-input-prefix: #dcddde;
// }
