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
    "revision": "a039d61389a86fe6c55c4172920dfaa2"
  },
  {
    "url": "aboutme/index.html",
    "revision": "beb9afc136323804c2f6d468e53385e7"
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
    "url": "assets/js/1.7d7f51ae.js",
    "revision": "32bf87fd5c144e6dea2b92bd3f3d8d08"
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
    "url": "assets/js/24.ac8f62c5.js",
    "revision": "a6fa3cbf5711c77f63b7f2af5ba29c08"
  },
  {
    "url": "assets/js/25.cb4a3cb2.js",
    "revision": "42d0548a660a2044313fea2ff5a20b05"
  },
  {
    "url": "assets/js/26.eac91bb3.js",
    "revision": "c02fa347fff5a7b8ae210cabe8098984"
  },
  {
    "url": "assets/js/27.8e950e0e.js",
    "revision": "afa158ac0af7044d4a6f2f32db6aae2b"
  },
  {
    "url": "assets/js/28.52a3cd60.js",
    "revision": "7da0e2041f5dc9e19cc789689dc56dbe"
  },
  {
    "url": "assets/js/29.230daf5e.js",
    "revision": "5a8e4177f8321869ee8d3839b57c8e3b"
  },
  {
    "url": "assets/js/3.d5b2439e.js",
    "revision": "664b842bbfb373fbf53f9c867206d673"
  },
  {
    "url": "assets/js/30.4266ec19.js",
    "revision": "f7de86cd3c856a5b08a65c6fcf0fed06"
  },
  {
    "url": "assets/js/31.ef44afcf.js",
    "revision": "7f469b88f018e920586c3b78fac601ac"
  },
  {
    "url": "assets/js/32.c7228690.js",
    "revision": "ea37c1281cdf5375a73c9999bccc7003"
  },
  {
    "url": "assets/js/33.6daa712f.js",
    "revision": "0b132b5b062d98b3e1fa00810de4670f"
  },
  {
    "url": "assets/js/34.39428a79.js",
    "revision": "141b7619a18e654f6f184c1c2353cfba"
  },
  {
    "url": "assets/js/35.1b5c2350.js",
    "revision": "579d4f22846d0620c663f6fd7719379c"
  },
  {
    "url": "assets/js/36.77def630.js",
    "revision": "1a9287bbd7322b548fd951e29082e6c6"
  },
  {
    "url": "assets/js/37.a55d6f81.js",
    "revision": "b3ad8d8487bd626c6e1da86982134f89"
  },
  {
    "url": "assets/js/38.886691e6.js",
    "revision": "c6b8c3c0a36581a0c995417c91c869e9"
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
    "url": "assets/js/40.1a808127.js",
    "revision": "ef2d8c26f17b368d8461b70877951f68"
  },
  {
    "url": "assets/js/41.fca434ee.js",
    "revision": "5ee2922906c801f7389b52a9148b3077"
  },
  {
    "url": "assets/js/42.40cd0150.js",
    "revision": "21f341ad4a3edd8a6f596fa11fd21d42"
  },
  {
    "url": "assets/js/43.a631beab.js",
    "revision": "e2298750a2d452116cb174c94e2d54af"
  },
  {
    "url": "assets/js/44.d8e277fd.js",
    "revision": "c6cf253e5c99f60f73ebb8226a243e4e"
  },
  {
    "url": "assets/js/45.525f6042.js",
    "revision": "263c971ec77fd439f47c853e1e098936"
  },
  {
    "url": "assets/js/46.24d688c5.js",
    "revision": "117793c7f3919cca1dddf65b7b6dbef7"
  },
  {
    "url": "assets/js/47.9e404ff6.js",
    "revision": "8b3960538be1eae516da488de8c1aa73"
  },
  {
    "url": "assets/js/48.2307bbf1.js",
    "revision": "c4dbfddcac43c3b5de0983ee00522255"
  },
  {
    "url": "assets/js/49.8aec282e.js",
    "revision": "9ae40354aab64ebbc3512a9df610e48b"
  },
  {
    "url": "assets/js/5.841b10ce.js",
    "revision": "d18bb96742b1a16c268c21ff55cee40c"
  },
  {
    "url": "assets/js/50.dddd2c9b.js",
    "revision": "c657e224e8fe422bc0af19e2f8fa42f4"
  },
  {
    "url": "assets/js/51.5806fc73.js",
    "revision": "0713539c1e819f490a56c16c861e641c"
  },
  {
    "url": "assets/js/52.b7e2a36b.js",
    "revision": "4ee6b11e8dd5900949879389538f3172"
  },
  {
    "url": "assets/js/53.26c30d1d.js",
    "revision": "a49fb847b21c2c24df1f0a40d67d052a"
  },
  {
    "url": "assets/js/54.38580401.js",
    "revision": "551b36490d14d7b960724afd9fc57c86"
  },
  {
    "url": "assets/js/55.55f828ec.js",
    "revision": "d7a5eabac1a008a650021314cfc0ef45"
  },
  {
    "url": "assets/js/56.a36db437.js",
    "revision": "dacf6baf51ba01762abc74c34264ac2a"
  },
  {
    "url": "assets/js/57.e6a7491e.js",
    "revision": "65e70b7ed1898a8eef11d0c0f73d7f32"
  },
  {
    "url": "assets/js/58.f5659ac6.js",
    "revision": "3c6fdb2a85808a6cd1cfc97ffbb371cc"
  },
  {
    "url": "assets/js/59.ba66deeb.js",
    "revision": "376a458c791af76807db7289456cab05"
  },
  {
    "url": "assets/js/6.508a846c.js",
    "revision": "341974fd34eaf41eedec21b55d7dfabd"
  },
  {
    "url": "assets/js/60.9f7dae9e.js",
    "revision": "04e13601be21a81415f0e70dfcee8cd2"
  },
  {
    "url": "assets/js/61.35971d3f.js",
    "revision": "c72f1db6a88065ac74e8e21e461a5d7e"
  },
  {
    "url": "assets/js/62.f06c9838.js",
    "revision": "0f3b2dbf934d367b7503d7c5fdfb28ce"
  },
  {
    "url": "assets/js/63.18856c0f.js",
    "revision": "60b1148b7c4395809cc53e74bc91eeea"
  },
  {
    "url": "assets/js/64.aa07c8f7.js",
    "revision": "2032d2982aafe8e56e50df6478f7266d"
  },
  {
    "url": "assets/js/65.6b734d26.js",
    "revision": "5cd808d7b0b252cc9aa221dab18e67ff"
  },
  {
    "url": "assets/js/66.57af0d08.js",
    "revision": "78c570e6781ac6f0adb1f960b6fb377c"
  },
  {
    "url": "assets/js/67.89d2d510.js",
    "revision": "d530dc52fcfc74bf7ec2c913b2780fc3"
  },
  {
    "url": "assets/js/68.568b0485.js",
    "revision": "e1754bd611019dbce812e10e8be28c87"
  },
  {
    "url": "assets/js/69.98153ff7.js",
    "revision": "e696c5b187c60b4f48a853620c659679"
  },
  {
    "url": "assets/js/7.9f58c0f5.js",
    "revision": "c6808306ac52e461010b2e4b5a36f1e0"
  },
  {
    "url": "assets/js/70.44460b17.js",
    "revision": "ff6d3857aeaf35c231580923721b00ad"
  },
  {
    "url": "assets/js/71.461daec7.js",
    "revision": "90c1d9efcd29df269630cf570b7b3b50"
  },
  {
    "url": "assets/js/72.241e5126.js",
    "revision": "32d21fbb9602e205c9b74a2a5a1e61df"
  },
  {
    "url": "assets/js/73.a219a624.js",
    "revision": "1fea931f6a61fa8ac688053eac432ae4"
  },
  {
    "url": "assets/js/74.58ac6005.js",
    "revision": "4c8af5f49dff7aee1370567fee193288"
  },
  {
    "url": "assets/js/75.efb62f15.js",
    "revision": "7108d0370ac815d39371e347ce720005"
  },
  {
    "url": "assets/js/76.13affa31.js",
    "revision": "3791201cb47d0df9f2c371d3812701d3"
  },
  {
    "url": "assets/js/77.143691cc.js",
    "revision": "0044c11d99a443b9fc7e49f76c7048f4"
  },
  {
    "url": "assets/js/78.668eefe8.js",
    "revision": "38277440b2ea3ffecec82e573e06adf0"
  },
  {
    "url": "assets/js/79.e7ea1169.js",
    "revision": "b204a3e080a79c211f97124cfc187542"
  },
  {
    "url": "assets/js/80.82285b2f.js",
    "revision": "cd682ddcdbd4be8daeb48e59f9faebde"
  },
  {
    "url": "assets/js/81.cb1338f2.js",
    "revision": "ac399f5c21a1fe260d39883a49f7e98f"
  },
  {
    "url": "assets/js/82.c03952aa.js",
    "revision": "a74839ca30c257dffdbd0ef91d600465"
  },
  {
    "url": "assets/js/83.769bd48b.js",
    "revision": "fd9514e233e2981162566fb5046daab5"
  },
  {
    "url": "assets/js/84.5b49c2f5.js",
    "revision": "748ab3656260a90e419e3339647bea3a"
  },
  {
    "url": "assets/js/85.4cc0bfa7.js",
    "revision": "336fbe2631b8a8d4e107ac9bcb17fea2"
  },
  {
    "url": "assets/js/86.f37757f9.js",
    "revision": "e836ef3f174a2a67a5a632e69f236592"
  },
  {
    "url": "assets/js/87.67a0dede.js",
    "revision": "868a05f74ba5c72f5db0022870f14c54"
  },
  {
    "url": "assets/js/app.49ee7978.js",
    "revision": "aaca016bebb1f1e11c76c9fb42143402"
  },
  {
    "url": "assets/js/vendors~docsearch.7bcd5e47.js",
    "revision": "fedb91d1e1e352065427033e9b8e5dc1"
  },
  {
    "url": "blog-article/drawing-bed/index.html",
    "revision": "36d2f73fa47faf13fe3e16329a54911f"
  },
  {
    "url": "blog-article/drawing-bed/picGo+gitee.html",
    "revision": "7403149f64dbbdb906031728d6befe9a"
  },
  {
    "url": "blog-article/front-end/easyui/easyui-tree-combotree.html",
    "revision": "c18f8a38d37857252cbdd5aa54f66f22"
  },
  {
    "url": "blog-article/front-end/index.html",
    "revision": "1dc15da10a45a595605fb921fb3d8e62"
  },
  {
    "url": "blog-article/front-end/js/js-array-object-contain-duplicate-values.html",
    "revision": "07cde33f3c89c9b1f92a6a39b88ace8e"
  },
  {
    "url": "blog-article/front-end/vuepress/vuepress-auto-sidebar.html",
    "revision": "46ab5b414faa5ef0b28772dc06781de3"
  },
  {
    "url": "blog-article/front-end/vuepress/vuepress-back-last-read.html",
    "revision": "fa843ffabee69a8ea3bf09be377406f7"
  },
  {
    "url": "blog-article/front-end/vuepress/vuepress-custom-navigation.html",
    "revision": "693212f82302baf1d84e8ec984a16ac2"
  },
  {
    "url": "blog-article/front-end/vuepress/vuepress-fix-search.html",
    "revision": "0b999fffe4d5c0629c76e79d45a3b88d"
  },
  {
    "url": "blog-article/front-end/vuepress/vuepress-loads-network-images.html",
    "revision": "cdd2d5b185f472bdb9cc959bfc3d82f8"
  },
  {
    "url": "blog-article/front-end/vuepress/vuepress-pwa.html",
    "revision": "6ccdad2318d5a5ab94f7a16dbe7dd4b7"
  },
  {
    "url": "blog-article/front-end/vuepress/vuepress-right-sidebar.html",
    "revision": "36a4a8eaf415d0e4c903d0aeafb64905"
  },
  {
    "url": "blog-article/front-end/vuepress/vuepress-sakura-plugin.html",
    "revision": "383fb7542696ad108667d66eec760dd3"
  },
  {
    "url": "blog-article/index.html",
    "revision": "53c0fd69b9605b7781de59e97cf1e6ce"
  },
  {
    "url": "blog-article/java/index.html",
    "revision": "61b2e5dde7a4b4b6043c52a4025f30c5"
  },
  {
    "url": "blog-article/mybatis/index.html",
    "revision": "1ad6e6d253edaaa06569d4b06afa505d"
  },
  {
    "url": "blog-article/mybatis/mybatis-list-map-array.html",
    "revision": "f5294d17629d9eb1e97c69b12e5ecdf6"
  },
  {
    "url": "blog-article/mybatis/mybatis-List-map.html",
    "revision": "dea6822413c5978fd77999a3a3470cb8"
  },
  {
    "url": "blog-article/mysql/index.html",
    "revision": "c3cb6119d01e8beb40a6beb9cdc901eb"
  },
  {
    "url": "blog-article/other/index.html",
    "revision": "519df07821c6c8e7d57782416746a3c9"
  },
  {
    "url": "blog-article/python/first-acquaintance-python.html",
    "revision": "b0a42a085fc031a739642f4e4254b18a"
  },
  {
    "url": "blog-article/python/index.html",
    "revision": "0db7e895bde00765f434be25978f19f8"
  },
  {
    "url": "blog-article/python/python-basic.html",
    "revision": "86eabb14d2efeeaa8083b5a18be198a9"
  },
  {
    "url": "code-demo/back-end-code/index.html",
    "revision": "0ddccfad114672df03f70db92782618f"
  },
  {
    "url": "code-demo/front-end-code/index.html",
    "revision": "1e41768f5ede8b1fa6aef14edc6d1240"
  },
  {
    "url": "code-demo/index.html",
    "revision": "2ff1a5bac04a4ab0ec0ba2ae621b9721"
  },
  {
    "url": "code-demo/other.html",
    "revision": "3ec76d806b3f2989bb4fc2ebb28fb469"
  },
  {
    "url": "friendly-chain/index.html",
    "revision": "3ffa0cd6cb259fe6c760e71eaf0b315d"
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
    "revision": "bebde635dad1e417fe8bd18aa57dd270"
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
    "revision": "b3ab7677425ea4aa3339bd8b514f6353"
  },
  {
    "url": "other/index.html",
    "revision": "84eb5b6217160a0adf7097f28a062082"
  },
  {
    "url": "other/notes-on-tomb-robbery.html",
    "revision": "2eed6f08da2ba497be4f9411505ab2a1"
  },
  {
    "url": "read/books/fanshiyaochenzao.html",
    "revision": "0c6e56acd3e8079c1e2f30c909c63caa"
  },
  {
    "url": "read/classic-sentences/ruyizhuan.html",
    "revision": "79b5c8857b83a301e3b4778e4c56b1f0"
  },
  {
    "url": "read/classic-sentences/saniti.html",
    "revision": "23dee6afc5fff2698dda89eda23bdfa6"
  },
  {
    "url": "read/classic-sentences/zhenhuanzhuan.html",
    "revision": "52b40d7f802f5aadee12dcf527bc45fd"
  },
  {
    "url": "read/classic-sentences/zhifou.html",
    "revision": "457927fbd832364296b2a41322b8f627"
  },
  {
    "url": "read/index.html",
    "revision": "22f480ce3005e4006cec9b67c4193396"
  },
  {
    "url": "study-notes/back-end/index.html",
    "revision": "39605be7f7b72b814e08c0d8c33f5a6a"
  },
  {
    "url": "study-notes/back-end/java/collection.html",
    "revision": "74763ef853ce7f66ac1e930c2d1ac08e"
  },
  {
    "url": "study-notes/back-end/java/fenbushi.html",
    "revision": "712b47714a170289811452fa934999c9"
  },
  {
    "url": "study-notes/back-end/java/index.html",
    "revision": "c6b3c1392ab5e7bede641b3015c67e51"
  },
  {
    "url": "study-notes/back-end/java/javase.html",
    "revision": "4ddabaf381d8387cf76c1f43ff6b20d2"
  },
  {
    "url": "study-notes/back-end/java/javathread.html",
    "revision": "8ec6a474b4e3ab71dd893acf4f2d2ccb"
  },
  {
    "url": "study-notes/back-end/java/jvm.html",
    "revision": "e52f90dc37366b64378335406cd4f567"
  },
  {
    "url": "study-notes/back-end/java/mybatis.html",
    "revision": "6c3de9171cd87df308cb72b454a71876"
  },
  {
    "url": "study-notes/back-end/java/mysql.html",
    "revision": "0ef02b59272841f58f85b0c325a5885d"
  },
  {
    "url": "study-notes/back-end/java/network.html",
    "revision": "f69997e4e0f9efad17cf1155d53ce02e"
  },
  {
    "url": "study-notes/back-end/java/nixi.html",
    "revision": "cf314ff58b798a036d827a57d25d8808"
  },
  {
    "url": "study-notes/back-end/java/os.html",
    "revision": "b588c2894843ec25d1ea7c9e7c0b5476"
  },
  {
    "url": "study-notes/back-end/java/redis.html",
    "revision": "accb87b90abcbb1bfda9e15349aef7f3"
  },
  {
    "url": "study-notes/back-end/java/rocketmq.html",
    "revision": "1036f46fd33b53c177716b99771d3a43"
  },
  {
    "url": "study-notes/back-end/java/spring.html",
    "revision": "8aafc21748a55b29c344bae38a56092e"
  },
  {
    "url": "study-notes/back-end/java/weifuwu.html",
    "revision": "4f14cea010d5ad0a2ca273bedc80472a"
  },
  {
    "url": "study-notes/back-end/python/index.html",
    "revision": "ba203143f8f88f08c85f9f1f909f7b07"
  },
  {
    "url": "study-notes/common/common-tools/index.html",
    "revision": "608398df80fdb3499f93da3b29bd70b8"
  },
  {
    "url": "study-notes/front-end/html/basic/index.html",
    "revision": "eab5178fed5779e5cd29fc897e211e38"
  },
  {
    "url": "study-notes/front-end/html/index.html",
    "revision": "7b291880a911e44b2db111b2570e96f6"
  },
  {
    "url": "study-notes/front-end/index.html",
    "revision": "72b8d1bbb95ad9f07460a40548ce13bb"
  },
  {
    "url": "study-notes/front-end/javaScript/index.html",
    "revision": "224fce039753b0e01a5d0b255a25d068"
  },
  {
    "url": "study-notes/index.html",
    "revision": "c5bbe9cb5a8324ca3c42fdc0b4f6c077"
  },
  {
    "url": "vuepress-custom-content-width/index.html",
    "revision": "16b0c2f145c06444a1ebc325d7dbe312"
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
