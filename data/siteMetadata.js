const siteMetadata = {
  title: "jungnoh",
  author: "Junghoon Noh",
  headerTitle: "jungnoh",
  language: "ko-kr",
  theme: "system", // system, dark or light
  siteUrl: "https://jungnoh.me/",
  siteRepo: "https://github.com/jungnoh/jungnoh.me",
  siteLogo: "",
  image: "",
  socialBanner: "/static/images/twitter-card.png",
  email: "jungnoh.dev@gmail.com",
  github: "https://github.com/jungnoh",
  linkedin: "https://www.linkedin.com/in/jungnoh",
  locale: "ko-KR",
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports plausible, simpleAnalytics, umami or googleAnalytics
    plausibleDataDomain: "", // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    umamiWebsiteId: "", // e.g. 123e4567-e89b-12d3-a456-426614174000
    googleAnalyticsId: "", // e.g. UA-000000-2 or G-XXXXXXX
  },
  comment: {
    // If you want to use a commenting system other than giscus you have to add it to the
    // content security policy in the `next.config.js` file.
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: "utterances",
    utterancesConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://utteranc.es/
      repo: "jungnoh/jungnoh.me",
      issueTerm: "pathname", // supported options: pathname, url, title
      label: "", // label (optional): Comment 💬
      // theme example: github-light, github-dark, preferred-color-scheme
      // github-dark-orange, icy-dark, dark-blue, photon-dark, boxy-light
      theme: "github-light",
      // theme when dark mode
      darkTheme: "github-dark",
    },
  },
};

module.exports = siteMetadata;
