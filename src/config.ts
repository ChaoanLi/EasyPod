export const SITE = {
  website: "https://podcast.chaoanli.com/",
  author: "ohaaayooo",
  profile: "https://podcast.chaoanli.com/",
  desc: "轻松愉快，和好朋友们聊聊生活、电影，以及那些突然意识到的瞬间。",
  title: "轻松愉快",
  ogImage: "logo.png",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Suggest Changes",
    url: "https://github.com/satnaing/astro-paper/edit/main/",
  },
  dynamicOgImage: true,
  lang: "zh-CN", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Shanghai", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
