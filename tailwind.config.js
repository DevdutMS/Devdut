const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      // xxxs: {'max': '320px'},
      // xxs: {'max': '360px'}, // min-width
      // xs: {'max': '420px'}, // min-width
      // "sm.5": {'max': '541px'},
      xxxs: "320px",
      xxs: "360px",
      xs: "420px",
      "sm.5": "541px",
      "2md": "769px",      
 
      ...defaultTheme.screens,

    },

    extend: {
      screens: {
        "3xl": "1540px",
      },
      colors: {
        "primary-black": "#242A39",
        "primary-blue-01": "#7089FF",
        "primary-blue-02": "#5775FF",
        "primary-light-blue-01": "#EFF1F9",
        "primary-light-yellow": "#FFEE9B",
        "primary-light-gray": "#FEFEFE",
        "primary-blue-03": "#6478D3",
        "primary-light-gray-01": "#F5F7FA",
        "primary-blue-04": "#F2F2FF",
        "primary-blue-05": "#FBFBFF",
        "primary-light-gray-02": "#FEFEFF",
        "primary-violet": "#9E8BFF",
      },
      fontSize: {
        xxs: "11.5px",
        "xs.5": "13px",
        "sm.5": "15px",
        "3.5xl": "31px",
        "4.5xl": "42px",
        "6.5xl": "65px",
      },
      letterSpacing: {
        tightest: "-8px",
        "tightest.5": "-6px",
      },
      boxShadow: {
        "4xl": "0 2px 5px  rgb(41 32 91 / 8%), 0 3px 4px  rgb(36 42 57 / 4%)",
        "5xl": "1px 5px  rgb(41 32 91 / 8%), 0 3px 4px  rgb(36 42 57 / 8%)",
        violet: "0 4px 8px rgb(158 139 255 / 45%)",
      },
      borderRadius: {
        "4xl": "32px",
      },
      lineHeight: {
        20: "20px",
        12: "12px",
        15: "15px",
      },
    },
  },
  plugins: [],
};
