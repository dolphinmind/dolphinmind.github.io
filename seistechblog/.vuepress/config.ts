import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "我的旅程",
  description: "走一段路，看看四处的风景，修一颗平常心",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
