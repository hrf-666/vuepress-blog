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
    "revision": "c01dc51e054db652848e3019166cab41"
  },
  {
    "url": "aboutme/index.html",
    "revision": "38633a3b8befdeb2100541a01292012d"
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
    "url": "assets/js/25.24b0297a.js",
    "revision": "5e56bf85da1b06351273d450db36edec"
  },
  {
    "url": "assets/js/26.eb5d4750.js",
    "revision": "4247d578eb7e44d78f978a2f8ba6705d"
  },
  {
    "url": "assets/js/27.8e950e0e.js",
    "revision": "afa158ac0af7044d4a6f2f32db6aae2b"
  },
  {
    "url": "assets/js/28.18bc2a2b.js",
    "revision": "588460266c0dd5df764d9c5587d6a6d3"
  },
  {
    "url": "assets/js/29.41698775.js",
    "revision": "cd3ee38c3c72674707df3a60e5609831"
  },
  {
    "url": "assets/js/3.d5b2439e.js",
    "revision": "664b842bbfb373fbf53f9c867206d673"
  },
  {
    "url": "assets/js/30.0e5b9b0f.js",
    "revision": "45d37f956213406f1ce78791083cb03c"
  },
  {
    "url": "assets/js/31.b5fd8093.js",
    "revision": "c8b109f1c98f67ba08eb0fab27a5bb16"
  },
  {
    "url": "assets/js/32.5abef779.js",
    "revision": "c92878db0448e506e3f02f1d2e7c2716"
  },
  {
    "url": "assets/js/33.6daa712f.js",
    "revision": "0b132b5b062d98b3e1fa00810de4670f"
  },
  {
    "url": "assets/js/34.1a7bff9f.js",
    "revision": "0bf348e51bdcd4d9d01e04143cb7a1d5"
  },
  {
    "url": "assets/js/35.7a91fa5d.js",
    "revision": "d226ed5374b74de87fdcdd6da27de003"
  },
  {
    "url": "assets/js/36.b101b07d.js",
    "revision": "07195ec24c0f66af085a969910728cb7"
  },
  {
    "url": "assets/js/37.4a85469f.js",
    "revision": "f28e8a32e0b88655b221d9041bf8a596"
  },
  {
    "url": "assets/js/38.886691e6.js",
    "revision": "c6b8c3c0a36581a0c995417c91c869e9"
  },
  {
    "url": "assets/js/39.f7a41f5b.js",
    "revision": "e38dbaafbcdf4b06d25edea8c7d583b8"
  },
  {
    "url": "assets/js/4.da81c3e9.js",
    "revision": "2a872627bbbf86e7c9394eb39e887ba3"
  },
  {
    "url": "assets/js/40.c3b3a9b0.js",
    "revision": "91fe00488fa7a28c7e693962039f5981"
  },
  {
    "url": "assets/js/41.fca434ee.js",
    "revision": "5ee2922906c801f7389b52a9148b3077"
  },
  {
    "url": "assets/js/42.33ef3916.js",
    "revision": "9effecef14c92431932436c4a35908ff"
  },
  {
    "url": "assets/js/43.84a835b4.js",
    "revision": "857bd2a5cae31edad168a8104f3d85ed"
  },
  {
    "url": "assets/js/44.914cb067.js",
    "revision": "cffc83ae5aa8d6441f523edb1a2bfb7c"
  },
  {
    "url": "assets/js/45.6cd5165e.js",
    "revision": "1630b2e5f0d4abd1c8171fd13d11113f"
  },
  {
    "url": "assets/js/46.c090173d.js",
    "revision": "eaaaf0aa31e9581851ecd1abedf13894"
  },
  {
    "url": "assets/js/47.9e404ff6.js",
    "revision": "8b3960538be1eae516da488de8c1aa73"
  },
  {
    "url": "assets/js/48.aa445b55.js",
    "revision": "987007f32e9152e4d170eaf8f4f3e626"
  },
  {
    "url": "assets/js/49.efea5059.js",
    "revision": "70bb9ae897447b7ea365c13c84039d1c"
  },
  {
    "url": "assets/js/5.841b10ce.js",
    "revision": "d18bb96742b1a16c268c21ff55cee40c"
  },
  {
    "url": "assets/js/50.f14e235f.js",
    "revision": "97dedc47d16fd187f02732eb97c25701"
  },
  {
    "url": "assets/js/51.5806fc73.js",
    "revision": "0713539c1e819f490a56c16c861e641c"
  },
  {
    "url": "assets/js/52.dffb0d64.js",
    "revision": "924e2ccf16b23652ebc0e6853d5eaa73"
  },
  {
    "url": "assets/js/53.85e646dd.js",
    "revision": "8d40f10287c2ef97d748d33a38633ef7"
  },
  {
    "url": "assets/js/54.1760f22e.js",
    "revision": "6cfe435e9797ea917ac82d37d41d1166"
  },
  {
    "url": "assets/js/55.34e3256e.js",
    "revision": "328a01cef3d894551ed868efab9e2f31"
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
    "url": "assets/js/58.1198130f.js",
    "revision": "15a71da7d50c07120704452f55e55c62"
  },
  {
    "url": "assets/js/59.f7f083c4.js",
    "revision": "1d94782ad1eb933f26ae970c9d729811"
  },
  {
    "url": "assets/js/6.508a846c.js",
    "revision": "341974fd34eaf41eedec21b55d7dfabd"
  },
  {
    "url": "assets/js/60.894ecb73.js",
    "revision": "cfc15dc8af59d27f891900e61e4a8ef9"
  },
  {
    "url": "assets/js/61.4a3d63b8.js",
    "revision": "d872f6918014f29d0a12977e4ac04678"
  },
  {
    "url": "assets/js/62.978c0ef3.js",
    "revision": "4a17465304e85dd0fcad171c80f0e30e"
  },
  {
    "url": "assets/js/63.89ec9d37.js",
    "revision": "91a825e022a23fd07e3d943814a58d61"
  },
  {
    "url": "assets/js/64.60c88c72.js",
    "revision": "3705689ec7c58efa4e4f814b9e040b63"
  },
  {
    "url": "assets/js/65.865cc93a.js",
    "revision": "1c74a78683822d31ec9c377d8101deae"
  },
  {
    "url": "assets/js/66.46d4a21c.js",
    "revision": "d36c16ca4599fdc1218bedc3c676f772"
  },
  {
    "url": "assets/js/67.1683ebbd.js",
    "revision": "bc2fc95ecb84271297eb7343b3dc354b"
  },
  {
    "url": "assets/js/68.08fdf9fe.js",
    "revision": "127bb0885b47276016d114ea157b54f2"
  },
  {
    "url": "assets/js/69.33e2e266.js",
    "revision": "81039d889bc627afedfd67363c46e052"
  },
  {
    "url": "assets/js/7.9f58c0f5.js",
    "revision": "c6808306ac52e461010b2e4b5a36f1e0"
  },
  {
    "url": "assets/js/70.3824d7f1.js",
    "revision": "6b5db25316e2aa28cc97f70033cfc63d"
  },
  {
    "url": "assets/js/71.3a30863e.js",
    "revision": "b3813be9d55e5d86f6debcf493ca6512"
  },
  {
    "url": "assets/js/72.74c12507.js",
    "revision": "3fe5702959c8e3a411635e730b8455a6"
  },
  {
    "url": "assets/js/73.18bb19df.js",
    "revision": "8b8ff3ce145f1116448885aa02e25dfb"
  },
  {
    "url": "assets/js/74.8af68bcd.js",
    "revision": "fc842d5bd1b3de2bd97f503c9888296d"
  },
  {
    "url": "assets/js/75.45d3f879.js",
    "revision": "a4f149b70b598a6fa7b935f59b866f38"
  },
  {
    "url": "assets/js/76.18b87ee9.js",
    "revision": "7f6ef3a8e66ed586acaaf36584049c55"
  },
  {
    "url": "assets/js/77.c774f1d9.js",
    "revision": "31879d9ee0b23df4d6592f18a8f20961"
  },
  {
    "url": "assets/js/78.a15d66d4.js",
    "revision": "4dab8d3053b24d182d5ed5f29b040d13"
  },
  {
    "url": "assets/js/79.c7ba5432.js",
    "revision": "4b2546cfff40b56d09247ee777a388b3"
  },
  {
    "url": "assets/js/80.c2bba8e8.js",
    "revision": "38df02aa80768a18a9acb009db8bf16d"
  },
  {
    "url": "assets/js/81.d0e4629e.js",
    "revision": "31227a4a8a9a38f47bbb9b0f55b531d9"
  },
  {
    "url": "assets/js/82.dbcadc65.js",
    "revision": "e3f7d7c2647aa63abed856dbf12f6fce"
  },
  {
    "url": "assets/js/83.17cc1a00.js",
    "revision": "3b8e8f264dea05e9554e1b63a52ccbf0"
  },
  {
    "url": "assets/js/84.00a26b63.js",
    "revision": "5e2300fadb34920cd9203d6e987ab22d"
  },
  {
    "url": "assets/js/app.fb436e1a.js",
    "revision": "2b417e530e0f00d303089096e46d912b"
  },
  {
    "url": "assets/js/vendors~docsearch.7bcd5e47.js",
    "revision": "fedb91d1e1e352065427033e9b8e5dc1"
  },
  {
    "url": "blog-article/drawing-bed/index.html",
    "revision": "5be9e37cbaf60161d199130d66878919"
  },
  {
    "url": "blog-article/drawing-bed/picGo+gitee.html",
    "revision": "6401b1d6753f206a925dd276dd464d1a"
  },
  {
    "url": "blog-article/front-end/easyui/easyui-tree-combotree.html",
    "revision": "808778dfd97ad10247408d8594c15ea6"
  },
  {
    "url": "blog-article/front-end/index.html",
    "revision": "7da4de7635b92f9c0c09ae31119c35aa"
  },
  {
    "url": "blog-article/front-end/js/js-array-object-contain-duplicate-values.html",
    "revision": "e02d25e1ce1981d96e95cc52475d16f6"
  },
  {
    "url": "blog-article/front-end/vuepress/vuepress-auto-sidebar.html",
    "revision": "ec245f80a097a7571791c20abe936fc9"
  },
  {
    "url": "blog-article/front-end/vuepress/vuepress-back-last-read.html",
    "revision": "173d5c551332aa183678b7b5b5d2d297"
  },
  {
    "url": "blog-article/front-end/vuepress/vuepress-custom-navigation.html",
    "revision": "9b59d1369806c9ef63cfaab99a7844ce"
  },
  {
    "url": "blog-article/front-end/vuepress/vuepress-fix-search.html",
    "revision": "49cd802fa48adb589fcf57a5453b0574"
  },
  {
    "url": "blog-article/front-end/vuepress/vuepress-loads-network-images.html",
    "revision": "32cfa544adc759fd62d47dbcb7061564"
  },
  {
    "url": "blog-article/front-end/vuepress/vuepress-pwa.html",
    "revision": "94fd132a70ed96e64a6ab24fd48bd9e7"
  },
  {
    "url": "blog-article/front-end/vuepress/vuepress-right-sidebar.html",
    "revision": "c5591ef36cea412a508c6bd6abdbe231"
  },
  {
    "url": "blog-article/front-end/vuepress/vuepress-sakura-plugin.html",
    "revision": "3f288eafc8e0fdc487293f8839d3173a"
  },
  {
    "url": "blog-article/index.html",
    "revision": "2f5c3ac6f67ce1f5c148de4213d48e62"
  },
  {
    "url": "blog-article/java/index.html",
    "revision": "8d418a630102a9c02c366c34a1ae2ebd"
  },
  {
    "url": "blog-article/mybatis/index.html",
    "revision": "96b6b92714045b553a0c219fbbe9d4ba"
  },
  {
    "url": "blog-article/mybatis/mybatis-list-map-array.html",
    "revision": "c0dc93ce37adab53339d5ad3b6df98ec"
  },
  {
    "url": "blog-article/mybatis/mybatis-List-map.html",
    "revision": "6c1c4f979fd04da5fe5176e5b51c7f43"
  },
  {
    "url": "blog-article/mysql/index.html",
    "revision": "472148db02299807116768317d67abb4"
  },
  {
    "url": "blog-article/other/index.html",
    "revision": "a87a7159b7308ed4724c2a1a61bab1d9"
  },
  {
    "url": "blog-article/python/first-acquaintance-python.html",
    "revision": "1be4104f94a7db27be157a0b32ada2ed"
  },
  {
    "url": "blog-article/python/index.html",
    "revision": "945332c368253b6badb28a499a1417fa"
  },
  {
    "url": "blog-article/python/python-basic.html",
    "revision": "49a575c41a8a9cc12221239e34372c59"
  },
  {
    "url": "code-demo/back-end-code/index.html",
    "revision": "64ac25f768cd1b36f1fc0271ea97af04"
  },
  {
    "url": "code-demo/front-end-code/index.html",
    "revision": "6a92976f701994f936ff42ddbc5ad57d"
  },
  {
    "url": "code-demo/index.html",
    "revision": "3e053acd80e503dc6926e9a8616bd438"
  },
  {
    "url": "code-demo/other.html",
    "revision": "2250f6b24a2f7a35a4e5629a3f677087"
  },
  {
    "url": "friendly-chain/index.html",
    "revision": "e32cd0d6b0bcbe5ffc47efd021e60c2d"
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
    "revision": "159fa5d8f3937e1dbdbea2a2986042a2"
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
    "revision": "d2cfead76155df4c9aa131a02c8445f0"
  },
  {
    "url": "other/index.html",
    "revision": "e5fae68dbbd49024b9cea76fa71bb879"
  },
  {
    "url": "other/notes-on-tomb-robbery.html",
    "revision": "46185f00497717e47d495f276bf18b51"
  },
  {
    "url": "read/classic-sentences/zhenhuanzhuan.html",
    "revision": "539887a82d1e1da26ef92daa8dc7a342"
  },
  {
    "url": "read/classic-sentences/zhifou.html",
    "revision": "24b3cb747c141116025c8cee43258481"
  },
  {
    "url": "read/index.html",
    "revision": "c03fa957cbdfdbf39b24e1f27356f46b"
  },
  {
    "url": "study-notes/back-end/index.html",
    "revision": "75189d105ea7119d22023529b14b456e"
  },
  {
    "url": "study-notes/back-end/java/collection.html",
    "revision": "6622fc2ceaa5ffdd66d346c7a776aabb"
  },
  {
    "url": "study-notes/back-end/java/fenbushi.html",
    "revision": "611dc032a148efe885371ca06401dc1c"
  },
  {
    "url": "study-notes/back-end/java/index.html",
    "revision": "2cc5ceaf2f1ae4c279690991b4fcd2f6"
  },
  {
    "url": "study-notes/back-end/java/javase.html",
    "revision": "0484b3f39c03da2b9604b6484e29fa6c"
  },
  {
    "url": "study-notes/back-end/java/javathread.html",
    "revision": "1b9ebe0d9cd0509009a37604ce9b4efa"
  },
  {
    "url": "study-notes/back-end/java/jvm.html",
    "revision": "87f3c6a904815676d18b296e25f5b783"
  },
  {
    "url": "study-notes/back-end/java/mybatis.html",
    "revision": "09e1034069ec0773220572c42dd09101"
  },
  {
    "url": "study-notes/back-end/java/mysql.html",
    "revision": "e9164c5c859dd2a24bf1b9bd02d9cd52"
  },
  {
    "url": "study-notes/back-end/java/network.html",
    "revision": "5cb9a2c6f3c9f00466189f51633098eb"
  },
  {
    "url": "study-notes/back-end/java/nixi.html",
    "revision": "12349ded6dc960dd67f1a2597f0df327"
  },
  {
    "url": "study-notes/back-end/java/os.html",
    "revision": "7018f291080adaea09a970db113abca3"
  },
  {
    "url": "study-notes/back-end/java/redis.html",
    "revision": "c766aed6f9a2b2f772fbd9ca3eaec25f"
  },
  {
    "url": "study-notes/back-end/java/rocketmq.html",
    "revision": "dbe956a5fd869f5bca9b267eb32e0cd5"
  },
  {
    "url": "study-notes/back-end/java/spring.html",
    "revision": "98b85c8678b0d70da5eb10f2be32822e"
  },
  {
    "url": "study-notes/back-end/java/weifuwu.html",
    "revision": "fc6d7a6d64679408e45a54b8c35f61de"
  },
  {
    "url": "study-notes/back-end/python/index.html",
    "revision": "d2f56235638f5db7a083e19317fb88cf"
  },
  {
    "url": "study-notes/common/common-tools/index.html",
    "revision": "f422b768f1e99c0e3da7ca4d999c42d8"
  },
  {
    "url": "study-notes/front-end/html/basic/index.html",
    "revision": "173034edcfb36f9eaa78b1292144ea87"
  },
  {
    "url": "study-notes/front-end/html/index.html",
    "revision": "854c7caff43d6f850a7cc6334ba857d8"
  },
  {
    "url": "study-notes/front-end/index.html",
    "revision": "2a10cca07022298a7cdafee0876a68c8"
  },
  {
    "url": "study-notes/front-end/javaScript/index.html",
    "revision": "a08d41d0a46db46963b255d4669b3661"
  },
  {
    "url": "study-notes/index.html",
    "revision": "5f65c305ce4e6a36a824d3d03b83aa12"
  },
  {
    "url": "vuepress-custom-content-width/index.html",
    "revision": "ef32b402cb2e23bb64adf8509762c693"
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
