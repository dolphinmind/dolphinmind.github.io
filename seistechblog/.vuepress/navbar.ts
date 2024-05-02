import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",

  {
    text: "参考",
    icon: "pen-to-square",
    prefix: "/ref/",
    children: [ 
          {
            text: "后端",
            icon: "pen-to-square",
            link: "tools"
          },  
    ]

  }



  // {
  //   text: "工具",
  //   icon: "book",
  //   link: "https://theme-hope.vuejs.press/",
  // },

    // "/demo/",
  // {
  //   text: "目录",
  //   icon: "pen-to-square",
  //   prefix: "/posts/",
  //   children: [
  //     {
  //       text: "Banana",
  //       icon: "pen-to-square",
  //       prefix: "banana/",
  //       children: [
  //         {
  //           text: "Banana 1",
  //           icon: "pen-to-square",
  //           link: "1",
  //         },
  //         {
  //           text: "Banana 2",
  //           icon: "pen-to-square",
  //           link: "2",
  //         }
  //       ],
  //     }
  //   ],
  // },
]);
