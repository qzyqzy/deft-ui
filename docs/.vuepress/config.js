module.exports = {
  title: "deft-ui",
  base: "/deft-ui/",
  plugins: ["demo-container"],
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Github", link: "https://github.com/qzyqzy/deft-ui" },
      { text: "Npm", link: "https://www.npmjs.com/package/deft-ui" },
    ],
    sidebar: [
      "/",
      {
        title: "CSS Components",
        collapsable: false,
        children: [
          "/md/cssComponents/button",
          "/md/cssComponents/cell",
          "/md/cssComponents/spinner",
          "/md/cssComponents/tabContainer",
        ],
      },
      {
        title: "Form Components",
        collapsable: false,
        children: [
          "/md/formComponents/switch",
          "/md/formComponents/radio",
          "/md/formComponents/checklist",
          "/md/formComponents/field",
        ],
      },
      {
        title: "JS Components",
        collapsable: false,
        children: ["/md/jsComponents/toast", "/md/jsComponents/indicator"],
      },
    ],
  },
};
