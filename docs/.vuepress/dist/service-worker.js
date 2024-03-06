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
    "revision": "9f526106f0c5f729ece45a3cbc6b8027"
  },
  {
    "url": "aboutme/index.html",
    "revision": "9c47a07acad9fe1c0e0b3d4322e49372"
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
    "url": "assets/js/24.ceedc39c.js",
    "revision": "76674d602fc795fab098b49bb2e945d0"
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
    "url": "assets/js/28.24f7ab6f.js",
    "revision": "5980becad613d7410c1c2b5805c19f1c"
  },
  {
    "url": "assets/js/29.3aacbcd5.js",
    "revision": "4acf7c430e023b950e0a915a21848a25"
  },
  {
    "url": "assets/js/3.d5b2439e.js",
    "revision": "664b842bbfb373fbf53f9c867206d673"
  },
  {
    "url": "assets/js/30.569fa52b.js",
    "revision": "da0e9782671ea7cb27d3926bfb02a96f"
  },
  {
    "url": "assets/js/31.e98ecbd2.js",
    "revision": "4246a8bc669b163c31f0e71ad2fb24d6"
  },
  {
    "url": "assets/js/32.1a114bcd.js",
    "revision": "4bafa3f75ac27c5368f2d7da0e183a11"
  },
  {
    "url": "assets/js/33.e45144db.js",
    "revision": "16d4aca016c35b25a9872c85c2c3b747"
  },
  {
    "url": "assets/js/34.a82a70d9.js",
    "revision": "b3fe6a102ad3c0debf33fb5dceb576f1"
  },
  {
    "url": "assets/js/35.7a91fa5d.js",
    "revision": "d226ed5374b74de87fdcdd6da27de003"
  },
  {
    "url": "assets/js/36.9fad79a5.js",
    "revision": "ea4541bdf37bf9a3f44681a33f538153"
  },
  {
    "url": "assets/js/37.fb2d9042.js",
    "revision": "f5254f356e302e5d589c3ccaa065cdb9"
  },
  {
    "url": "assets/js/38.13b3bf43.js",
    "revision": "d5614477a81497ac6f4fec11f63961cb"
  },
  {
    "url": "assets/js/39.d86bb2c3.js",
    "revision": "316d2fd0741c9e8fccc3da4c770ba3ad"
  },
  {
    "url": "assets/js/4.da81c3e9.js",
    "revision": "2a872627bbbf86e7c9394eb39e887ba3"
  },
  {
    "url": "assets/js/40.c1b2efaf.js",
    "revision": "502f7eba2d6db8dcc6d2625df9305c54"
  },
  {
    "url": "assets/js/41.7c89ff7e.js",
    "revision": "588cc98319015486b9144ce5f0604395"
  },
  {
    "url": "assets/js/42.816622c0.js",
    "revision": "15a4daa8bd773c1df8af9353a8b2e98b"
  },
  {
    "url": "assets/js/43.db6f0467.js",
    "revision": "b6dd45e16d02bb552fdef2acf45e5cb8"
  },
  {
    "url": "assets/js/44.54f24363.js",
    "revision": "4f6ea5610c099b23deb44f20cdf636e4"
  },
  {
    "url": "assets/js/45.d37b6dca.js",
    "revision": "8a68eb6fa3d6187d889ae13206e2dd84"
  },
  {
    "url": "assets/js/46.ed17c7b7.js",
    "revision": "dd3f8b714ca088a6eca222eb42093a4a"
  },
  {
    "url": "assets/js/47.a1827b36.js",
    "revision": "0a0fd220e09d5495851f825734596d85"
  },
  {
    "url": "assets/js/48.34267dc3.js",
    "revision": "0300d0e5429fd2d5becb12852fb542d7"
  },
  {
    "url": "assets/js/49.4c11621f.js",
    "revision": "eb7165bbd6c5b40c4a9f331c34e3e7a8"
  },
  {
    "url": "assets/js/5.841b10ce.js",
    "revision": "d18bb96742b1a16c268c21ff55cee40c"
  },
  {
    "url": "assets/js/50.3bca2780.js",
    "revision": "240825534aa1b8100f71bf9bb0298e46"
  },
  {
    "url": "assets/js/51.2a52cfe2.js",
    "revision": "e88f745f219bb455ca3936e0aafda35e"
  },
  {
    "url": "assets/js/52.8f0ddcfd.js",
    "revision": "55959873b37744647120141deddefc31"
  },
  {
    "url": "assets/js/53.4389a978.js",
    "revision": "f49697b463ccdab248414b7542bcea38"
  },
  {
    "url": "assets/js/54.e804db25.js",
    "revision": "07b29b4f4bbaa23ac95962afb64781c0"
  },
  {
    "url": "assets/js/55.6b6e1668.js",
    "revision": "d641f7eaa7103babcf856ebf689e5dc3"
  },
  {
    "url": "assets/js/56.a2badb2b.js",
    "revision": "8c60eafc4bdbf7cc0df82e13b9b2e91d"
  },
  {
    "url": "assets/js/57.fdf44749.js",
    "revision": "dbc25aebf5c1ec91a12dd8f5aaa2f925"
  },
  {
    "url": "assets/js/58.a4604376.js",
    "revision": "ee2e3a7952d1302c8b3f002044f7805e"
  },
  {
    "url": "assets/js/59.ec87dcaf.js",
    "revision": "e76709f119fa840a72619fbe53658054"
  },
  {
    "url": "assets/js/6.508a846c.js",
    "revision": "341974fd34eaf41eedec21b55d7dfabd"
  },
  {
    "url": "assets/js/60.25a12b7e.js",
    "revision": "e7d5d996c7ce29f41dee42c1b93d298d"
  },
  {
    "url": "assets/js/61.483c1d42.js",
    "revision": "2cb56e723d4127b2d0e2bf2c6f6516a3"
  },
  {
    "url": "assets/js/62.6bf2c095.js",
    "revision": "5a35156cd996d41b899ff0aa0308a3ae"
  },
  {
    "url": "assets/js/63.3fe9158d.js",
    "revision": "86250a5635279efe497f93852346c3ac"
  },
  {
    "url": "assets/js/64.714a751e.js",
    "revision": "6defc2d83b5c59f6416b56222cbdf346"
  },
  {
    "url": "assets/js/65.e96a24d6.js",
    "revision": "58346b933f1339b600f06642b8e2f10c"
  },
  {
    "url": "assets/js/66.a583bfc9.js",
    "revision": "0dd7367d5097ea7193eef17b7dff125a"
  },
  {
    "url": "assets/js/67.8c05e0a3.js",
    "revision": "6949616305ec0629ca0899fc470a0095"
  },
  {
    "url": "assets/js/68.1a9421e6.js",
    "revision": "b00fdc7c0ed5d52da98d7bf65a4ed4e9"
  },
  {
    "url": "assets/js/69.f405a40a.js",
    "revision": "93caa4eaba917ee734f9f80767ddd3b2"
  },
  {
    "url": "assets/js/7.9f58c0f5.js",
    "revision": "c6808306ac52e461010b2e4b5a36f1e0"
  },
  {
    "url": "assets/js/70.1fde5acc.js",
    "revision": "2dd9490e1eb1a8789fc794c462e6e829"
  },
  {
    "url": "assets/js/71.4813d033.js",
    "revision": "2e30c6cf703b494c90d74411ee192b33"
  },
  {
    "url": "assets/js/72.60e6818c.js",
    "revision": "219e9ed22be6eff60926d57474091c84"
  },
  {
    "url": "assets/js/73.3d6f142c.js",
    "revision": "45fb839b9dc8f1be3d7f331b2cd5201e"
  },
  {
    "url": "assets/js/74.06929dde.js",
    "revision": "a8728c9bbaa5dd46d3c51622e3dc7e00"
  },
  {
    "url": "assets/js/75.7a21db1c.js",
    "revision": "45f3bc74065437baa488e765205315b3"
  },
  {
    "url": "assets/js/76.cc5125d0.js",
    "revision": "12158b834c74edb147688cad5bada1cd"
  },
  {
    "url": "assets/js/77.d8dbff05.js",
    "revision": "8d265a4e7ed5e809da04e758be4184fa"
  },
  {
    "url": "assets/js/78.77d3c144.js",
    "revision": "ab1c54d27dfe68f9c4e33bc9f3b9fcdb"
  },
  {
    "url": "assets/js/79.6994f0a0.js",
    "revision": "8d4ff9a7c66eeeeabb3d1d6bae6d28f4"
  },
  {
    "url": "assets/js/80.a4c79139.js",
    "revision": "1c1d794945569f8a04556bf336a835a1"
  },
  {
    "url": "assets/js/81.013fee74.js",
    "revision": "820c5c88479e3cd68b77e8bada218b75"
  },
  {
    "url": "assets/js/82.cdb785fc.js",
    "revision": "1702fcb5a6b4b0325fb08b09d26dcb45"
  },
  {
    "url": "assets/js/83.310c8a9d.js",
    "revision": "c2f36e9f5cd52a40549a961299e05758"
  },
  {
    "url": "assets/js/84.9907ccc9.js",
    "revision": "36bebc00ea800c56c94d192eddc4f948"
  },
  {
    "url": "assets/js/85.26d5478f.js",
    "revision": "22ca20983ee48b297f5647f102f67874"
  },
  {
    "url": "assets/js/86.1627e41a.js",
    "revision": "c34a8decdb199b99642b6605515681a4"
  },
  {
    "url": "assets/js/87.513611ba.js",
    "revision": "482de7bb7104e2a1043f58d825b99cd8"
  },
  {
    "url": "assets/js/88.aab87487.js",
    "revision": "55df775a915269c9bafba7dd80c1c210"
  },
  {
    "url": "assets/js/89.1fdf9379.js",
    "revision": "0e13f4973b1c8a52d737972b91cd97dd"
  },
  {
    "url": "assets/js/90.83b7f864.js",
    "revision": "1cacf965e556d2242af3e6f4033d3a02"
  },
  {
    "url": "assets/js/91.e6a06d6c.js",
    "revision": "2e8d6e787aedc7c13ccd34a803805b8e"
  },
  {
    "url": "assets/js/92.e03db9aa.js",
    "revision": "64411a49c0ccf2c17f48c02e07e29943"
  },
  {
    "url": "assets/js/93.66cf5cb4.js",
    "revision": "a81f4ba9921244cf545cceb060a90a8f"
  },
  {
    "url": "assets/js/94.ce8b96aa.js",
    "revision": "c11da752eebe3aacabe86cc89d59431b"
  },
  {
    "url": "assets/js/95.8e95abc5.js",
    "revision": "948e00713a5101ff60aaa01f6a3f3289"
  },
  {
    "url": "assets/js/96.f261fa0f.js",
    "revision": "69c37b81c23c64a2e6434c1ede71dbc9"
  },
  {
    "url": "assets/js/97.a41d5328.js",
    "revision": "b4406a04ee4a8333f5182703726f2297"
  },
  {
    "url": "assets/js/app.5aaeb795.js",
    "revision": "508cd11fec3056a1707b2ebb64f46ed0"
  },
  {
    "url": "assets/js/vendors~docsearch.7bcd5e47.js",
    "revision": "fedb91d1e1e352065427033e9b8e5dc1"
  },
  {
    "url": "blog-article/drawing-bed/index.html",
    "revision": "7aa1073920abe8d315713a607b3ce884"
  },
  {
    "url": "blog-article/drawing-bed/picGo+gitee.html",
    "revision": "18d7c5aefc7d33a47112e5f86babbf32"
  },
  {
    "url": "blog-article/front-end/easyui/easyui-tree-combotree.html",
    "revision": "3c66b3d036e73772edbc17fb20a513bd"
  },
  {
    "url": "blog-article/front-end/index.html",
    "revision": "158e75437f09eefa04a29be064561bb0"
  },
  {
    "url": "blog-article/front-end/js/js-array-object-contain-duplicate-values.html",
    "revision": "c722fc575ccdecfb3b44b563001a56f9"
  },
  {
    "url": "blog-article/front-end/vuepress/vuepress-auto-sidebar.html",
    "revision": "dcad79dd0a1033aabbfa2a277c11655a"
  },
  {
    "url": "blog-article/front-end/vuepress/vuepress-back-last-read.html",
    "revision": "9f88bf4a6be574a46668abad8984f43f"
  },
  {
    "url": "blog-article/front-end/vuepress/vuepress-custom-navigation.html",
    "revision": "0301436516c254282ac49e462a392668"
  },
  {
    "url": "blog-article/front-end/vuepress/vuepress-fix-search.html",
    "revision": "1f6e78cd402ba41eaf73cd2d59b625c5"
  },
  {
    "url": "blog-article/front-end/vuepress/vuepress-loads-network-images.html",
    "revision": "83107fd357ea92d953adf281f0b1da30"
  },
  {
    "url": "blog-article/front-end/vuepress/vuepress-pwa.html",
    "revision": "0daae313dbe8947c584190256773e3ea"
  },
  {
    "url": "blog-article/front-end/vuepress/vuepress-right-sidebar.html",
    "revision": "59a41232624af85dae8d65443eb71675"
  },
  {
    "url": "blog-article/front-end/vuepress/vuepress-sakura-plugin.html",
    "revision": "2a2bcaec0baf324f62dad31e2d00521a"
  },
  {
    "url": "blog-article/index.html",
    "revision": "bd21d6b136718b8fc724770ff561db69"
  },
  {
    "url": "blog-article/java/basic/byte-array-and-string.html",
    "revision": "2471c9199aeb1e8c1abda510921cbc18"
  },
  {
    "url": "blog-article/java/basic/list-string-remove-duplicate.html",
    "revision": "2aba88b92f5309ea716b5073d9b738e0"
  },
  {
    "url": "blog-article/java/basic/stream-extract-id.html",
    "revision": "6cc471fee13ea24abdf6dcd7dd3e20fd"
  },
  {
    "url": "blog-article/java/index.html",
    "revision": "1b4f41d23611db82e090a22b9d060ea2"
  },
  {
    "url": "blog-article/java/software/idea-maven.html",
    "revision": "b98a7c036c076627b5a6fb0095af14df"
  },
  {
    "url": "blog-article/java/software/jdk-install.html",
    "revision": "d8b83d378fbc1b80b815954c68657bc8"
  },
  {
    "url": "blog-article/java/software/maven-install.html",
    "revision": "389c2694139436b4b8a036875331c88c"
  },
  {
    "url": "blog-article/java/springboot/ip-blacklist.html",
    "revision": "1bf5d4d7da9760430f64aa74b52470c9"
  },
  {
    "url": "blog-article/mybatis/index.html",
    "revision": "c65c4e73d302845cf7004d68c9ac9ece"
  },
  {
    "url": "blog-article/mybatis/mybatis-Integer.html",
    "revision": "d1a9f242414b19b4760d1d8e5ec45f85"
  },
  {
    "url": "blog-article/mybatis/mybatis-list-map-array.html",
    "revision": "23eac385ea6d075cf91fb8fdef439d8e"
  },
  {
    "url": "blog-article/mybatis/mybatis-List-map.html",
    "revision": "fb0ec956707844cbe4ae5a49287f29f5"
  },
  {
    "url": "blog-article/mybatis/mybatis-type-handler.html",
    "revision": "c29c2d98c39bd3872ac0071bc2b04eea"
  },
  {
    "url": "blog-article/mysql/index.html",
    "revision": "f7f91217c379ad9bba1e654d3a5af67c"
  },
  {
    "url": "blog-article/other/index.html",
    "revision": "bb06b67424310e693bd10eef51dcc560"
  },
  {
    "url": "blog-article/python/first-acquaintance-python.html",
    "revision": "1e449d4821e8bf1abc9387767f58aa53"
  },
  {
    "url": "blog-article/python/index.html",
    "revision": "a30dcdf3c25328e0a02a5d8385e31aee"
  },
  {
    "url": "blog-article/python/python-basic.html",
    "revision": "2ef04457f3c0b79ac07faa5465600371"
  },
  {
    "url": "code-demo/back-end-code/index.html",
    "revision": "85470224bda087430093f7558c490010"
  },
  {
    "url": "code-demo/front-end-code/index.html",
    "revision": "979e7eb64ef345de039a58146a2b8b67"
  },
  {
    "url": "code-demo/index.html",
    "revision": "004250ff22013f12ed105167dee65df0"
  },
  {
    "url": "code-demo/other.html",
    "revision": "73b69dd458b39bb4c572d0aca9940368"
  },
  {
    "url": "friendly-chain/index.html",
    "revision": "69d30ee058802967d12a9fb0b6ee2ee2"
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
    "revision": "8c97b6af718b691daaeb85b850c0e1ba"
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
    "revision": "e59a2318e1115178c58d0bc6174116bd"
  },
  {
    "url": "other/index.html",
    "revision": "65e15b90b3ce57234e677cdd3b12d790"
  },
  {
    "url": "other/notes-on-tomb-robbery.html",
    "revision": "65669602405ce4321c5b2b899ff41127"
  },
  {
    "url": "read/books/fanshiyaochenzao.html",
    "revision": "66042ef58af9ce8552b143be852e19a6"
  },
  {
    "url": "read/classic-sentences/ruyizhuan.html",
    "revision": "672ef65c49cc77ef1de02d31dcbfa877"
  },
  {
    "url": "read/classic-sentences/saniti.html",
    "revision": "02476cdb38f33473c5fd76c2831052c9"
  },
  {
    "url": "read/classic-sentences/zhenhuanzhuan.html",
    "revision": "df3bb60d2ff6a84da03982503f193ee2"
  },
  {
    "url": "read/classic-sentences/zhifou.html",
    "revision": "a1136d70fa865162fbdf52ac735629b8"
  },
  {
    "url": "read/compile/struggle.html",
    "revision": "16deb1086b108255dda096f6433caaf2"
  },
  {
    "url": "read/index.html",
    "revision": "08bc6bcd6aed89e2a48e3b1b3eee14b4"
  },
  {
    "url": "study-notes/back-end/index.html",
    "revision": "988499e08288cb1cf200dd3476e33b0c"
  },
  {
    "url": "study-notes/back-end/java/collection.html",
    "revision": "ed71d04f714ef8be1359d372b7ca04bd"
  },
  {
    "url": "study-notes/back-end/java/fenbushi.html",
    "revision": "4731bf5ea7500b50da6191feab544feb"
  },
  {
    "url": "study-notes/back-end/java/index.html",
    "revision": "6f033f24580a8627e31dbf481d7f48b3"
  },
  {
    "url": "study-notes/back-end/java/javase.html",
    "revision": "2ec5f9b2c829262e87f0e39f85a05fe4"
  },
  {
    "url": "study-notes/back-end/java/javathread.html",
    "revision": "e3b13abf74b1d73f17493eaa083a79e5"
  },
  {
    "url": "study-notes/back-end/java/jvm.html",
    "revision": "9acec75eb99ab84735556bed45b2fc96"
  },
  {
    "url": "study-notes/back-end/java/mybatis.html",
    "revision": "17ba2d8a9d2246fc7d6d713cd437b172"
  },
  {
    "url": "study-notes/back-end/java/mysql.html",
    "revision": "2ddef7e40de9e8664f3d57cf939d5989"
  },
  {
    "url": "study-notes/back-end/java/network.html",
    "revision": "09606d655cfa7c05b3bd320e2fd04ebf"
  },
  {
    "url": "study-notes/back-end/java/nixi.html",
    "revision": "c42d9102c036eb99d601cd333dd0f3b6"
  },
  {
    "url": "study-notes/back-end/java/os.html",
    "revision": "5870577ab9dfe285622270ad23a30340"
  },
  {
    "url": "study-notes/back-end/java/redis.html",
    "revision": "8fa21be7518ccdcdcfff3d526a57c310"
  },
  {
    "url": "study-notes/back-end/java/rocketmq.html",
    "revision": "de64fe224124b95e2703e0b6bbd549f4"
  },
  {
    "url": "study-notes/back-end/java/spring.html",
    "revision": "f3c11b31ff814b3c2ef08f018f80d4a2"
  },
  {
    "url": "study-notes/back-end/java/weifuwu.html",
    "revision": "b5403b1b0df7b508de5db7355c7789eb"
  },
  {
    "url": "study-notes/back-end/python/index.html",
    "revision": "4ce83253f8c135b4e4240589962d50c7"
  },
  {
    "url": "study-notes/common/common-tools/index.html",
    "revision": "150cce65bf555c61f0bf4127fee0bd93"
  },
  {
    "url": "study-notes/front-end/html/basic/index.html",
    "revision": "af1b7825785ad96d4781576c745cf93e"
  },
  {
    "url": "study-notes/front-end/html/index.html",
    "revision": "76e492eeaccdcdcf983c3e3edfc831e0"
  },
  {
    "url": "study-notes/front-end/index.html",
    "revision": "724c45d9d9917090d7659fdd911b3ec2"
  },
  {
    "url": "study-notes/front-end/javaScript/index.html",
    "revision": "8c64f81c0d3afcff6ced7be8a3f6837a"
  },
  {
    "url": "study-notes/index.html",
    "revision": "d91f6789c9b9196e537207203ffc77bd"
  },
  {
    "url": "vuepress-custom-content-width/index.html",
    "revision": "3790d17dd5e81dafc2762cc1583b6490"
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
