const lightCodeTheme = require("prism-react-renderer/themes/github")
const darkCodeTheme = require("prism-react-renderer/themes/dracula")

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Medusa Commerce",
  tagline: "Explore and learn how to use Medusa",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "medusajs", // Usually your GitHub org/user name.
  projectName: "medusajs/www", // Usually your repo name.
  themeConfig: {
    navbar: {
      hideOnScroll: true,
      // title: "Medusa Docs",
      logo: {
        alt: "Medusa Commerce",
        src: "img/logo.svg",
        srcDark: "img/logo.svg",
      },
      items: [
        {
          type: "doc",
          docId: "tutorials/overview",
          position: "right",
          label: "Tutorial",
        },
        {
          href: "http://localhost:8000/api/store",
          position: "right",
          label: "API Reference",
        },
        // { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/medusajs/medusa/",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorials",
              to: "/tutorials/overview",
            },
            {
              label: "Guides",
              to: "/guides/overview",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href:
                "https://stackoverflow.com/questions/tagged/medusa-commerce",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/medusajs",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/medusajs",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Contact",
              href: "https://medusa-commere.com",
            },
            {
              label: "Privacy & Terms",
              href: "https://medusa-commere.com",
            },
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Medusa Commerce`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/medusajs/medusa/edit/master/www/",
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        // },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
}