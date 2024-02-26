/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "fc8f99988753941d4fee79fda5250672"
  },
  {
    "url": "aboutme/index.html",
    "revision": "70806fe3c6af6613153eff88e3ce4639"
  },
  {
    "url": "assets/css/0.styles.681ced2a.css",
    "revision": "58e45151b5227c010d3e5a0ece63a9bb"
  },
  {
    "url": "assets/img/home.png",
    "revision": "565987a677f8403e1cde61ff039f6d8f"
  },
  {
    "url": "assets/img/logo.png",
    "revision": "565987a677f8403e1cde61ff039f6d8f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.9c9452b1.js",
    "revision": "bf34737507dd1e333afef80b93404a02"
  },
  {
    "url": "assets/js/10.fbbbb869.js",
    "revision": "fbc3d421435cbe9adfb470edabdc0cf0"
  },
  {
    "url": "assets/js/11.ac28cd29.js",
    "revision": "f10f317b95b80ca30649b613d891da79"
  },
  {
    "url": "assets/js/12.0044ffa8.js",
    "revision": "239a62768760481ba7533930bac239b1"
  },
  {
    "url": "assets/js/13.3f00ea11.js",
    "revision": "24a45902011a04fbeea1732c8c4409cd"
  },
  {
    "url": "assets/js/14.a2bb4e70.js",
    "revision": "e511ebd61cb9693d9c645a2ec48fc531"
  },
  {
    "url": "assets/js/15.ce56d026.js",
    "revision": "ce7e3806d826732fe93282a1d1da4221"
  },
  {
    "url": "assets/js/16.5384ea57.js",
    "revision": "1aa30c465d57a572649df87e89ed2d91"
  },
  {
    "url": "assets/js/17.f3362155.js",
    "revision": "a07d3dbbe01ccf94cebaa264f10acade"
  },
  {
    "url": "assets/js/18.386b487a.js",
    "revision": "369406bbf4371b4c2c646231ec9c8642"
  },
  {
    "url": "assets/js/19.95f9ef6e.js",
    "revision": "ae3fe89b182fe3097d7281257b456c80"
  },
  {
    "url": "assets/js/2.6c3b9528.js",
    "revision": "8f755b62d7cb0ed4ef905ef06855fd97"
  },
  {
    "url": "assets/js/20.51598947.js",
    "revision": "4ecb0b2a1aa1191356c7c4e5cacd9bb5"
  },
  {
    "url": "assets/js/21.f90d3ea6.js",
    "revision": "74643064c5664f9d5805528e8b3262d3"
  },
  {
    "url": "assets/js/22.29ea0e0a.js",
    "revision": "bea76fb6febd83a817961fefb98dffe4"
  },
  {
    "url": "assets/js/23.8ce8f7e4.js",
    "revision": "5313d12987b82e770543f8e2d041a970"
  },
  {
    "url": "assets/js/24.5366cda5.js",
    "revision": "f9d215d83d9e83e291273244bb77eaba"
  },
  {
    "url": "assets/js/25.45039e9e.js",
    "revision": "d0655b7c121b52173fa4d730b7539928"
  },
  {
    "url": "assets/js/26.eac91bb3.js",
    "revision": "c02fa347fff5a7b8ae210cabe8098984"
  },
  {
    "url": "assets/js/27.413dc07a.js",
    "revision": "0d7ad563db1ee296415ed3f59ebfb072"
  },
  {
    "url": "assets/js/28.18bc2a2b.js",
    "revision": "588460266c0dd5df764d9c5587d6a6d3"
  },
  {
    "url": "assets/js/29.68634091.js",
    "revision": "d76da12d9c05b541b9d122af489ab707"
  },
  {
    "url": "assets/js/3.d5b2439e.js",
    "revision": "664b842bbfb373fbf53f9c867206d673"
  },
  {
    "url": "assets/js/30.d2c815ad.js",
    "revision": "c198bd70bc97614f07592bc4721a424b"
  },
  {
    "url": "assets/js/31.b5fd8093.js",
    "revision": "c8b109f1c98f67ba08eb0fab27a5bb16"
  },
  {
    "url": "assets/js/32.dcdab88f.js",
    "revision": "811f954d0d6eb9b51a9c1aa24fb36ae5"
  },
  {
    "url": "assets/js/33.53ee2f1f.js",
    "revision": "83ea1368f2a5b87b14054e83b19a6c1e"
  },
  {
    "url": "assets/js/34.a54b2932.js",
    "revision": "a8a79f429477d031344677da99f3ffc6"
  },
  {
    "url": "assets/js/35.a5f9ae8c.js",
    "revision": "2b9ca5322bb2d2a639060135d140a0b3"
  },
  {
    "url": "assets/js/36.f5dc6d4c.js",
    "revision": "cfc1cb9b0f2c1f395ff83632c57842dd"
  },
  {
    "url": "assets/js/37.02a11f5b.js",
    "revision": "98df1c9803b65c3b7d728db10a736895"
  },
  {
    "url": "assets/js/38.80038dff.js",
    "revision": "e2c93a932fcc684dc8dff0b4e16ddfea"
  },
  {
    "url": "assets/js/39.d9bd6cbb.js",
    "revision": "3592ea8c15efe34e519b398f4ddf9a83"
  },
  {
    "url": "assets/js/4.da81c3e9.js",
    "revision": "2a872627bbbf86e7c9394eb39e887ba3"
  },
  {
    "url": "assets/js/40.8d381d72.js",
    "revision": "f0769fc1f9b50e37acbd13b0b00085c0"
  },
  {
    "url": "assets/js/41.c266a049.js",
    "revision": "614dd07dd4e89a6fb472dbc50fe2da76"
  },
  {
    "url": "assets/js/42.4bc08812.js",
    "revision": "f64afacddf33cf45a208e610f9cc3293"
  },
  {
    "url": "assets/js/43.527e1ea1.js",
    "revision": "96272da100816c84c39796c723898dff"
  },
  {
    "url": "assets/js/44.2ce2841f.js",
    "revision": "fdd2f81e56162ac4512802d81c87fec0"
  },
  {
    "url": "assets/js/45.14ed254d.js",
    "revision": "5198962d6c01bcd44a24e79b67666512"
  },
  {
    "url": "assets/js/46.9d88ee00.js",
    "revision": "eaaaf0aa31e9581851ecd1abedf13894"
  },
  {
    "url": "assets/js/47.c47258d2.js",
    "revision": "b33a6d179c437c6cf0a83715590383ec"
  },
  {
    "url": "assets/js/48.59788b35.js",
    "revision": "5062ff59b4fdb6b2e735e39793a77da6"
  },
  {
    "url": "assets/js/49.1f014664.js",
    "revision": "1949973d1b61e565eac181fe1dfdb262"
  },
  {
    "url": "assets/js/5.841b10ce.js",
    "revision": "d18bb96742b1a16c268c21ff55cee40c"
  },
  {
    "url": "assets/js/50.ba6551a0.js",
    "revision": "35502b923b8c47a967ee2eeacec49d90"
  },
  {
    "url": "assets/js/51.bfca971d.js",
    "revision": "ac2f86b35237d9e81314b67f03dea68a"
  },
  {
    "url": "assets/js/52.1bcc92fb.js",
    "revision": "a27cdad9ac3cd3b3e08ba400fce14282"
  },
  {
    "url": "assets/js/53.b18f1cfb.js",
    "revision": "931dca5f46673ed1c816804318d9a793"
  },
  {
    "url": "assets/js/54.aa35dc11.js",
    "revision": "7f6d3cdda6ccf11acf8d1812ab310597"
  },
  {
    "url": "assets/js/55.ee5a96cc.js",
    "revision": "881222971811e3e5c2ccf99dd6eecbea"
  },
  {
    "url": "assets/js/56.696ba4a2.js",
    "revision": "7562ab0869b46949a0359205a44db431"
  },
  {
    "url": "assets/js/57.655bc063.js",
    "revision": "5a5518f26c9b120a195f816bea7db5a4"
  },
  {
    "url": "assets/js/58.c555b845.js",
    "revision": "04d952d46869b21d37c3d8786c0fa48b"
  },
  {
    "url": "assets/js/59.381b5995.js",
    "revision": "ad4c496b9175bf14d701b2458a8f6c52"
  },
  {
    "url": "assets/js/6.508a846c.js",
    "revision": "341974fd34eaf41eedec21b55d7dfabd"
  },
  {
    "url": "assets/js/60.30ddfda8.js",
    "revision": "6b29a8dd086bb79d623ec9a48ee5d269"
  },
  {
    "url": "assets/js/61.d79551da.js",
    "revision": "9612f893c012a6cfcd4e8a85d47230b4"
  },
  {
    "url": "assets/js/62.3c999495.js",
    "revision": "9d1d51b31a100e13e66fb31e9e70fb4c"
  },
  {
    "url": "assets/js/63.a9b72b76.js",
    "revision": "645d2dacfb6be728f4000db19d31bbfe"
  },
  {
    "url": "assets/js/64.3876ef10.js",
    "revision": "f68f313eb59c83edc65ce44b8166c3e1"
  },
  {
    "url": "assets/js/65.7c633473.js",
    "revision": "4349f03f578d180e625cff61b0d0ca5e"
  },
  {
    "url": "assets/js/66.a52d0168.js",
    "revision": "6457b2a207e180806153bc6848e85923"
  },
  {
    "url": "assets/js/67.6cab5271.js",
    "revision": "292889995e7c41292a85ee314353c50b"
  },
  {
    "url": "assets/js/68.671472e5.js",
    "revision": "fdfbb6a1e9678bdb71c8bb88552612c1"
  },
  {
    "url": "assets/js/69.feda60a8.js",
    "revision": "47ae92155e8af7f38ede3e95e9cbd157"
  },
  {
    "url": "assets/js/7.9f58c0f5.js",
    "revision": "c6808306ac52e461010b2e4b5a36f1e0"
  },
  {
    "url": "assets/js/70.2c70ed09.js",
    "revision": "0e3b4e867fee0cd8b13c7cb2460c69ec"
  },
  {
    "url": "assets/js/71.0bd0e15e.js",
    "revision": "06491c2851f185e15c8e6aea0a5dd558"
  },
  {
    "url": "assets/js/72.f45a4959.js",
    "revision": "6cfc65905909ee67b2d1f935fbf45f71"
  },
  {
    "url": "assets/js/73.0b9f41ee.js",
    "revision": "41c3ca1edf1c776007f59527c1ef33b6"
  },
  {
    "url": "assets/js/74.4c4cdc3c.js",
    "revision": "67c984c3d816a592b87b861c62a2e383"
  },
  {
    "url": "assets/js/75.5f5c486f.js",
    "revision": "8b61a4750e7320e32fb09a67771ff3e2"
  },
  {
    "url": "assets/js/76.c0ee5598.js",
    "revision": "d94dd2110e82771c7b09320df5538efe"
  },
  {
    "url": "assets/js/77.8325ea11.js",
    "revision": "8d100c5d866c3dc3a2c114591aaeedd5"
  },
  {
    "url": "assets/js/78.11b95cec.js",
    "revision": "057b96b73e501a49b9c2a72a89fcd346"
  },
  {
    "url": "assets/js/79.0600ad81.js",
    "revision": "e593b1168c312c6300c787d42d0228ab"
  },
  {
    "url": "assets/js/80.dba7fe36.js",
    "revision": "a15041cf38f1e58e2ccf7dd5e19dcd52"
  },
  {
    "url": "assets/js/81.3beda2a2.js",
    "revision": "a3b8be1c65e1173e4a512353f9b7b74c"
  },
  {
    "url": "assets/js/82.c28cf128.js",
    "revision": "3ac7d9e0e19d5890db4cfb92f361c6ec"
  },
  {
    "url": "assets/js/83.27d6aab5.js",
    "revision": "6a19a69892037461e9e963c2c5483c94"
  },
  {
    "url": "assets/js/84.2953c353.js",
    "revision": "c22e239021226ef20667cc34897dbff4"
  },
  {
    "url": "assets/js/85.1b4f650c.js",
    "revision": "675d95e64f808dc4a774d9f48ffde5b4"
  },
  {
    "url": "assets/js/86.c0d9df13.js",
    "revision": "a0f2a7ed1313e30b2e023176b930eab1"
  },
  {
    "url": "assets/js/87.0d33ae54.js",
    "revision": "ca0f693c09909b4eef74b83f0bc9234a"
  },
  {
    "url": "assets/js/88.0a3944c1.js",
    "revision": "4dabcd0cdde709805e1b058a2e4a61d3"
  },
  {
    "url": "assets/js/89.b5b07f1f.js",
    "revision": "59b364f88aa56fff7812e86244192e02"
  },
  {
    "url": "assets/js/app.e5d9b1e5.js",
    "revision": "97f1dbc0fed7a249f2534fcd58379552"
  },
  {
    "url": "assets/js/vendors~docsearch.7bcd5e47.js",
    "revision": "fedb91d1e1e352065427033e9b8e5dc1"
  },
  {
    "url": "blog-article/drawing-bed/index.html",
    "revision": "0042bd3fdfe27a9e962dd5b174fcd822"
  },
  {
    "url": "blog-article/drawing-bed/picGo+gitee.html",
    "revision": "abc5e31ff2beaddf4587f7d1cabeef25"
  },
  {
    "url": "blog-article/front-end/easyui/easyui-tree-combotree.html",
    "revision": "6a909ca2e060f4c85b0831a25a31ae96"
  },
  {
    "url": "blog-article/front-end/index.html",
    "revision": "b0264ea301fe8da5f97e964b80fcf0cd"
  },
  {
    "url": "blog-article/front-end/js/js-array-object-contain-duplicate-values.html",
    "revision": "728288da4f21d3dd9fcb075633fadb23"
  },
  {
    "url": "blog-article/front-end/vuepress/vuepress-auto-sidebar.html",
    "revision": "e3447f07eecbb7458350957024f4f725"
  },
  {
    "url": "blog-article/front-end/vuepress/vuepress-back-last-read.html",
    "revision": "6f5c5c81141e3022db3f7e545a876407"
  },
  {
    "url": "blog-article/front-end/vuepress/vuepress-custom-navigation.html",
    "revision": "323201e77f4a79777b294772365730cc"
  },
  {
    "url": "blog-article/front-end/vuepress/vuepress-fix-search.html",
    "revision": "e0aaf333ee4df07a9638ef34743756e5"
  },
  {
    "url": "blog-article/front-end/vuepress/vuepress-loads-network-images.html",
    "revision": "82479046c51629d245075ffc9669248f"
  },
  {
    "url": "blog-article/front-end/vuepress/vuepress-pwa.html",
    "revision": "0305d82a4506d4042516067325a45cc1"
  },
  {
    "url": "blog-article/front-end/vuepress/vuepress-right-sidebar.html",
    "revision": "d75a92ab88d8be736f556e76f37c2a00"
  },
  {
    "url": "blog-article/front-end/vuepress/vuepress-sakura-plugin.html",
    "revision": "df2a4d38e9e072c9ce950b484e1e7ef8"
  },
  {
    "url": "blog-article/index.html",
    "revision": "d35a06f07c8d900e804f490f8961bfa7"
  },
  {
    "url": "blog-article/java/byte-array-and-string.html",
    "revision": "32beb81f1d63ea22730076a453783a1f"
  },
  {
    "url": "blog-article/java/index.html",
    "revision": "fc7fdc2d4ac68f54d2613a6aedeac738"
  },
  {
    "url": "blog-article/mybatis/index.html",
    "revision": "3afca676de99fddb033041d3ea0aef14"
  },
  {
    "url": "blog-article/mybatis/mybatis-list-map-array.html",
    "revision": "ad8755f431799e4ab00d56167f68fec0"
  },
  {
    "url": "blog-article/mybatis/mybatis-List-map.html",
    "revision": "225556850c78dfb0fe4a6f08458aa6c5"
  },
  {
    "url": "blog-article/mysql/index.html",
    "revision": "8ff797287b8e9c5a326ac826d7f98331"
  },
  {
    "url": "blog-article/other/index.html",
    "revision": "4bb3fa71efe6c3056512b62b892827a2"
  },
  {
    "url": "blog-article/python/first-acquaintance-python.html",
    "revision": "8c79d4b793f93b43a3cf7a849c6aa223"
  },
  {
    "url": "blog-article/python/index.html",
    "revision": "7a1638a31e2fb39188568b6be4fe4744"
  },
  {
    "url": "blog-article/python/python-basic.html",
    "revision": "e141d464fdbf433dd3eae3bd857d2478"
  },
  {
    "url": "code-demo/back-end-code/index.html",
    "revision": "4c7bbe3c6a9a39d01a21f6f6d4a82635"
  },
  {
    "url": "code-demo/front-end-code/index.html",
    "revision": "76b8468072510e0166699d6d7ab050c4"
  },
  {
    "url": "code-demo/index.html",
    "revision": "20f952699ec322f32344cb10ee73b259"
  },
  {
    "url": "code-demo/other.html",
    "revision": "0d69eabaf1fb574901888b08ad334a84"
  },
  {
    "url": "friendly-chain/index.html",
    "revision": "9f35c7bd79ec395674378a0f1acf3a0d"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "2e5ebd420ac1a15358c46cc557ff088f"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "29629689eaa3810fc9e310d3b426928b"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "94b364f8722573cdc4c8dbae97855a02"
  },
  {
    "url": "index.html",
    "revision": "35ecf929b8fa7e30b30cd33daa69e466"
  },
  {
    "url": "logo288.png",
    "revision": "4ec1a001550017507268e71eb04acc40"
  },
  {
    "url": "logo52.png",
    "revision": "ab464c32dcee826995d6b04f37966386"
  },
  {
    "url": "navigation/index.html",
    "revision": "d0d0d1ed3476e47521b3f7daf89bf4a7"
  },
  {
    "url": "other/index.html",
    "revision": "64627a22aae26784dcb24bd75e40967b"
  },
  {
    "url": "other/notes-on-tomb-robbery.html",
    "revision": "3f19a16b38c60167a8f34dadfb97a121"
  },
  {
    "url": "read/books/fanshiyaochenzao.html",
    "revision": "b96c77e307d0e85ba7b022482d1e5b2c"
  },
  {
    "url": "read/classic-sentences/ruyizhuan.html",
    "revision": "29ad32b0d6cbcae5f9a9cce3c4af7cc7"
  },
  {
    "url": "read/classic-sentences/saniti.html",
    "revision": "55eb864b8cb23866cea95e75fc47d296"
  },
  {
    "url": "read/classic-sentences/zhenhuanzhuan.html",
    "revision": "434f81489b1fc212bead40362eca4096"
  },
  {
    "url": "read/classic-sentences/zhifou.html",
    "revision": "e4567c002f1627bd11fdd983c2dccccf"
  },
  {
    "url": "read/compile/struggle.html",
    "revision": "78e313d01af7aa9b58bab4cb1d4534c5"
  },
  {
    "url": "read/index.html",
    "revision": "ea7846d41eed95d1c83e8f8b847fd031"
  },
  {
    "url": "study-notes/back-end/index.html",
    "revision": "255872f990aa762ba55904f84c6a81c8"
  },
  {
    "url": "study-notes/back-end/java/collection.html",
    "revision": "8df8379d44b11cf53ed3fb003db9eebc"
  },
  {
    "url": "study-notes/back-end/java/fenbushi.html",
    "revision": "4ddb5d5f67997c3cec19c13bf44b2f2c"
  },
  {
    "url": "study-notes/back-end/java/index.html",
    "revision": "8eccdc526f8159ee24e64d5b2a277e08"
  },
  {
    "url": "study-notes/back-end/java/javase.html",
    "revision": "c83d00d4eaa8e2a9b19c2d28be831d3a"
  },
  {
    "url": "study-notes/back-end/java/javathread.html",
    "revision": "42a376ebeb27008c681e0207aed3ff75"
  },
  {
    "url": "study-notes/back-end/java/jvm.html",
    "revision": "76adc9997848d13a3d9c12dcaf71be64"
  },
  {
    "url": "study-notes/back-end/java/mybatis.html",
    "revision": "6d4d785a7ff8a726214df72e04d7ab3d"
  },
  {
    "url": "study-notes/back-end/java/mysql.html",
    "revision": "a083ed255f463cbd78793a917981c852"
  },
  {
    "url": "study-notes/back-end/java/network.html",
    "revision": "e52b95c81fa429b19173b02ddb0d5829"
  },
  {
    "url": "study-notes/back-end/java/nixi.html",
    "revision": "fcd1d14ea4d3bf076ee406b0531988d2"
  },
  {
    "url": "study-notes/back-end/java/os.html",
    "revision": "c1599afc2ba4a1d7156948208faaf9df"
  },
  {
    "url": "study-notes/back-end/java/redis.html",
    "revision": "83c25d3ba1fd546024ebb29d9d1d5a0f"
  },
  {
    "url": "study-notes/back-end/java/rocketmq.html",
    "revision": "c3c04639f1f93e367b8dd194c29bba72"
  },
  {
    "url": "study-notes/back-end/java/spring.html",
    "revision": "768026f2bdb91961272993d433d4a21f"
  },
  {
    "url": "study-notes/back-end/java/weifuwu.html",
    "revision": "3deef7aa76ce94a84d6986d2b5927b8d"
  },
  {
    "url": "study-notes/back-end/python/index.html",
    "revision": "4caafb742fe39d93d99408938eef7a5c"
  },
  {
    "url": "study-notes/common/common-tools/index.html",
    "revision": "650e90148973b99b9b149185d8d57d8d"
  },
  {
    "url": "study-notes/front-end/html/basic/index.html",
    "revision": "30867585d16870ff4becf70504eee41c"
  },
  {
    "url": "study-notes/front-end/html/index.html",
    "revision": "286551984c98ecabb6b28ea1fb1fe33f"
  },
  {
    "url": "study-notes/front-end/index.html",
    "revision": "5f6696cea9686583d9ce00d78123cb1b"
  },
  {
    "url": "study-notes/front-end/javaScript/index.html",
    "revision": "ada06157ed5db9b2245f5fda488a9373"
  },
  {
    "url": "study-notes/index.html",
    "revision": "66acebb5e8604b9e47e74b8f8fcf0391"
  },
  {
    "url": "vuepress-custom-content-width/index.html",
    "revision": "352b948ee19b447660ac0c5251952795"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
