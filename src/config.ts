export const SITE = {
  website: "https://podcast.chaoanli.com/",
  author: "ohaaayooo",
  profile: "https://podcast.chaoanli.com/",
  desc: "轻松愉快，@ohaaayooo、@frank 和朋友们的中文闲聊播客。聊电影、游戏，也聊近来遇到的小事。",
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
