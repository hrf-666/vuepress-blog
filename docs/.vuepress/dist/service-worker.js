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
    "revision": "0449d3a58e648a53a216e47186007952"
  },
  {
    "url": "aboutme/index.html",
    "revision": "f6fbd828d088d0d71d4a6186c77c7e90"
  },
  {
    "url": "assets/css/0.styles.ac078240.css",
    "revision": "fa3440d03b20000f0260b5962c883492"
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
    "url": "assets/js/1.fc84bb0f.js",
    "revision": "c35dca7a887cbce41db9ef316c1ce5ea"
  },
  {
    "url": "assets/js/10.0b55125a.js",
    "revision": "f841ab26c789c85e9d5b34719db85546"
  },
  {
    "url": "assets/js/11.d539c09a.js",
    "revision": "7c9a5a1524bd574955a4c4b022d324e1"
  },
  {
    "url": "assets/js/12.6658c563.js",
    "revision": "f60aa0ff05a601e4c5ea141256969859"
  },
  {
    "url": "assets/js/13.573f196c.js",
    "revision": "e23712dad16320abdb60bbf55e2d376a"
  },
  {
    "url": "assets/js/14.6043700f.js",
    "revision": "933eaa221c858d6b17595b426996b087"
  },
  {
    "url": "assets/js/15.65e70df6.js",
    "revision": "0cc79d7be0ebdd8725841198c1563674"
  },
  {
    "url": "assets/js/16.2e385800.js",
    "revision": "8e76563930a318b9e85d1a776cf6fdfb"
  },
  {
    "url": "assets/js/17.c4b14a43.js",
    "revision": "201536e9a2d37df0e7b06de888c578b2"
  },
  {
    "url": "assets/js/18.f7d61ead.js",
    "revision": "9fd335b7e58cd17d93dba9b65710ca7f"
  },
  {
    "url": "assets/js/19.bfdd85bb.js",
    "revision": "86738fc2a5a22f1d7dfc1f7bda0223f3"
  },
  {
    "url": "assets/js/2.641fe87c.js",
    "revision": "6cf0c0686f1265efe8e55c3ef51e515b"
  },
  {
    "url": "assets/js/20.0d805156.js",
    "revision": "c036f785122b9f8cc94064bf5077eb94"
  },
  {
    "url": "assets/js/21.5c126441.js",
    "revision": "a1273feb48e6c8231afdcbc6f50cbf9e"
  },
  {
    "url": "assets/js/22.941bfcae.js",
    "revision": "4b5d5e9e50067fbf869374a2bb4989e8"
  },
  {
    "url": "assets/js/23.f5582929.js",
    "revision": "78f6e88876bf3d44369813aed56e83a4"
  },
  {
    "url": "assets/js/24.ac8f62c5.js",
    "revision": "a6fa3cbf5711c77f63b7f2af5ba29c08"
  },
  {
    "url": "assets/js/25.46b503f0.js",
    "revision": "a33763a5dee18eb6a7b4066465ae13cf"
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
    "url": "assets/js/29.7ad784cc.js",
    "revision": "3b5df13121855f5fd78326b9b168f9fa"
  },
  {
    "url": "assets/js/3.5ae9fd06.js",
    "revision": "01ef904f9c924392d3c964a325a2c21c"
  },
  {
    "url": "assets/js/30.8436df19.js",
    "revision": "8dcfc44383b29858935d44bda1889df0"
  },
  {
    "url": "assets/js/31.564304ac.js",
    "revision": "df117451b5eb01a53ea0aade94c46dcb"
  },
  {
    "url": "assets/js/32.4f114039.js",
    "revision": "91c0ef6ab00efffa992eff21a668f135"
  },
  {
    "url": "assets/js/33.cd679be9.js",
    "revision": "60655759df00129134bf84d0e11722d1"
  },
  {
    "url": "assets/js/34.a82a70d9.js",
    "revision": "b3fe6a102ad3c0debf33fb5dceb576f1"
  },
  {
    "url": "assets/js/35.d3b4aae1.js",
    "revision": "2b40e26253a102ad330b2893a434837f"
  },
  {
    "url": "assets/js/36.248a474c.js",
    "revision": "d726cef15da68673f0aacff7dea5ac24"
  },
  {
    "url": "assets/js/37.0dc82d55.js",
    "revision": "0a134c2ecdb234dd8f8e019766e0c031"
  },
  {
    "url": "assets/js/38.ca02c4ea.js",
    "revision": "ce5677cd04462522ead3f26cb7e1a1e1"
  },
  {
    "url": "assets/js/39.c0931e8a.js",
    "revision": "48fe6133e69e48c3ffe704b78f292c86"
  },
  {
    "url": "assets/js/4.b9f849ab.js",
    "revision": "1ad83421ba118ef06914a948c5bd3838"
  },
  {
    "url": "assets/js/40.950e7ce5.js",
    "revision": "25301c45d5368bbfa86e6e32b39d7821"
  },
  {
    "url": "assets/js/41.d2e1d284.js",
    "revision": "8406a729b22ff6eb57a9a305e500e02a"
  },
  {
    "url": "assets/js/42.c7281cca.js",
    "revision": "ff7b9d69680af5977df826bc92443477"
  },
  {
    "url": "assets/js/43.8e092540.js",
    "revision": "ac1815dbcb1c66f8900dfe8e02ad2eb0"
  },
  {
    "url": "assets/js/44.96ac8f4c.js",
    "revision": "aa87b4bfb543cb25e5df6270dcb3b3a4"
  },
  {
    "url": "assets/js/45.413b20e2.js",
    "revision": "74c4c8d669576de1f527404e1376ec8a"
  },
  {
    "url": "assets/js/46.e6524cd4.js",
    "revision": "462cc9f5a6215c1b1890c63b2ba0be0a"
  },
  {
    "url": "assets/js/47.02961d29.js",
    "revision": "bad165f30733de2f33f0fa6b2fb6e67a"
  },
  {
    "url": "assets/js/48.58200f80.js",
    "revision": "0a8d9074686ebe6bb99a62d09fc684b3"
  },
  {
    "url": "assets/js/49.c40e0736.js",
    "revision": "9b4665079dc24834d3832c1ec6d70e2f"
  },
  {
    "url": "assets/js/5.fbef9483.js",
    "revision": "d2b28cf650212ec5b81efc26a168ae1c"
  },
  {
    "url": "assets/js/50.afeb6d0d.js",
    "revision": "140d894ee5664bfa098157de9c78695a"
  },
  {
    "url": "assets/js/51.55463a32.js",
    "revision": "d523f66257f3361dbaf413124f40da9b"
  },
  {
    "url": "assets/js/52.86814f56.js",
    "revision": "08f15e39c0fa47422d4843df27fbd4ef"
  },
  {
    "url": "assets/js/53.e71163c9.js",
    "revision": "0950007fb0430c0fb290dedfe2ca539b"
  },
  {
    "url": "assets/js/54.cd4b00dd.js",
    "revision": "29340d5255d837f652dc140c46f58b1d"
  },
  {
    "url": "assets/js/55.0cbb9645.js",
    "revision": "6e21ca0f6821e7998249c9ff66e4d251"
  },
  {
    "url": "assets/js/56.113428e6.js",
    "revision": "e93089b561c2002b170fac2ef36812f9"
  },
  {
    "url": "assets/js/57.5da5f58a.js",
    "revision": "4bde19b02050dbed896a595709ba054f"
  },
  {
    "url": "assets/js/58.b342df80.js",
    "revision": "f61742278b3d8c8b2739e0b733f70c0b"
  },
  {
    "url": "assets/js/59.8b347191.js",
    "revision": "0a05e0ce9e3dc13324b24e1eeadcf126"
  },
  {
    "url": "assets/js/6.b503f8cb.js",
    "revision": "6429bcc54119a6b7083d3645252092c2"
  },
  {
    "url": "assets/js/60.49d72371.js",
    "revision": "f7830d713ac1638768fda73e285aeaeb"
  },
  {
    "url": "assets/js/61.9e104de7.js",
    "revision": "9fb340e7921591e7630ed632cee2f07c"
  },
  {
    "url": "assets/js/62.e3cf864c.js",
    "revision": "808283f551fc72ae13036a7c7b23f911"
  },
  {
    "url": "assets/js/63.8db55fe7.js",
    "revision": "ec5cf63d8a73c1c06624e01098971eaa"
  },
  {
    "url": "assets/js/64.4801ab08.js",
    "revision": "688ac8fb6e665bd308e31d6742ea9d6e"
  },
  {
    "url": "assets/js/65.f6ce7d56.js",
    "revision": "63fb3f002eea51074b86a16c40fb92e9"
  },
  {
    "url": "assets/js/66.a50fdd69.js",
    "revision": "715d68b89332d8b25ca586b08ad777d5"
  },
  {
    "url": "assets/js/67.4c77f2dc.js",
    "revision": "906f564da3ef673e0e7bd358581a1075"
  },
  {
    "url": "assets/js/68.6ab9538d.js",
    "revision": "2e47c237f08cc6e5aca3e9d9158cca77"
  },
  {
    "url": "assets/js/69.46a7a5c7.js",
    "revision": "4cfc945877c8614222499c5fbe47aafb"
  },
  {
    "url": "assets/js/7.b8d5789a.js",
    "revision": "32dad1e5ca297d1fdcfaa22fe3930490"
  },
  {
    "url": "assets/js/70.afe6878f.js",
    "revision": "f1b7df2ae4d4da9a2bc3c9432925cb06"
  },
  {
    "url": "assets/js/71.9baf2522.js",
    "revision": "63aee48182b186113090419670ec1580"
  },
  {
    "url": "assets/js/72.392d3212.js",
    "revision": "00e98a0a91f2217e60775db7cc4329a8"
  },
  {
    "url": "assets/js/73.95feae02.js",
    "revision": "f4570aff6271d2fa21f7e59fb9db8491"
  },
  {
    "url": "assets/js/74.8177e3bc.js",
    "revision": "33c51b9bc908bea7c9e00c9fd3aa17c4"
  },
  {
    "url": "assets/js/75.6d54f7da.js",
    "revision": "37e59c7b3cec2a586a6e47b23442200c"
  },
  {
    "url": "assets/js/76.7fdb38c3.js",
    "revision": "3f2243be2d4d7e17993c24685f0f8d1d"
  },
  {
    "url": "assets/js/77.b776746a.js",
    "revision": "e66278f86b50555325af42fd08972791"
  },
  {
    "url": "assets/js/78.4f2e6ba9.js",
    "revision": "87cb055ae2469c59d49b0a42dcab5ff6"
  },
  {
    "url": "assets/js/79.c7929d19.js",
    "revision": "6701091609f293d03da6600db62a49df"
  },
  {
    "url": "assets/js/app.a17a49a6.js",
    "revision": "79f7165e1a708c985d67a12d06d9aa29"
  },
  {
    "url": "assets/js/vendors~docsearch.b68dc5ed.js",
    "revision": "d132455805ad0c3e561894795ad23d56"
  },
  {
    "url": "blog-article/drawing-bed/index.html",
    "revision": "1de5dc639ff5822b485ff3e81f7b482e"
  },
  {
    "url": "blog-article/drawing-bed/picGo+gitee.html",
    "revision": "97e444f3bc0e74564a04ee4aa9e3114e"
  },
  {
    "url": "blog-article/front-end/easyui/easyui-tree-combotree.html",
    "revision": "bc047cfeffa3b328e5c419d6de863ba9"
  },
  {
    "url": "blog-article/front-end/index.html",
    "revision": "2d59be5de450a0041c505ffe0c5e1fde"
  },
  {
    "url": "blog-article/front-end/js/js-array-object-contain-duplicate-values.html",
    "revision": "a0e0848ae773032c97f9188b2c6aa6e2"
  },
  {
    "url": "blog-article/front-end/vuepress/vuepress-auto-sidebar.html",
    "revision": "c7e1830301cb3ac58c994b51adc9013c"
  },
  {
    "url": "blog-article/front-end/vuepress/vuepress-back-last-read.html",
    "revision": "8d16f5a1db5dd32bb8c0069303ac29a9"
  },
  {
    "url": "blog-article/front-end/vuepress/vuepress-custom-navigation.html",
    "revision": "ba221f92d44c280ef707ff9b477d2c66"
  },
  {
    "url": "blog-article/front-end/vuepress/vuepress-loads-network-images.html",
    "revision": "bb77674b86b47ef4e9d612217a5b0225"
  },
  {
    "url": "blog-article/front-end/vuepress/vuepress-pwa.html",
    "revision": "8c4440a99cc1831839c12a6140e3935e"
  },
  {
    "url": "blog-article/front-end/vuepress/vuepress-right-sidebar.html",
    "revision": "8201594c76035bbbe884b52a0bfde126"
  },
  {
    "url": "blog-article/index.html",
    "revision": "3f1b3aa77f2e2235f1b3032e5c39cf0f"
  },
  {
    "url": "blog-article/java/index.html",
    "revision": "9e95dcdb1da58bda0068ff429bbab754"
  },
  {
    "url": "blog-article/mybatis/index.html",
    "revision": "59e0d51f79f5839d756d53bb32ef9e13"
  },
  {
    "url": "blog-article/mybatis/mybatis-list-map-array.html",
    "revision": "63f2139079da561c34ed1f6be516a2e2"
  },
  {
    "url": "blog-article/mybatis/mybatis-List-map.html",
    "revision": "29f6a9f56afc7ceda037d9557750d213"
  },
  {
    "url": "blog-article/mysql/index.html",
    "revision": "f501c7c90bf0444d1613fc4e3f6fc385"
  },
  {
    "url": "blog-article/other/index.html",
    "revision": "bebf928fdf6da6990d846e956878cfad"
  },
  {
    "url": "blog-article/python/first-acquaintance-python.html",
    "revision": "5df2ff99b095673ffd38949bab42d241"
  },
  {
    "url": "blog-article/python/index.html",
    "revision": "f15ddf921888c60aa0c4fd8364253239"
  },
  {
    "url": "code-demo/back-end-code/index.html",
    "revision": "a8a8e02c2e032c4b434d620dd7bb1c00"
  },
  {
    "url": "code-demo/front-end-code/index.html",
    "revision": "1b17e4b12bd1fd5f6c797a6fb3254def"
  },
  {
    "url": "code-demo/index.html",
    "revision": "186b9f28f8fc5489a6209f751378727f"
  },
  {
    "url": "code-demo/other.html",
    "revision": "a3c6e528ea2c3f63b74320c7f3fd88c7"
  },
  {
    "url": "friendly-chain/index.html",
    "revision": "ec3d92cb0880e53a9fb1c19e17597676"
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
    "revision": "ad83543fab1089eade53a52d8d1bfee0"
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
    "revision": "ebc6c99058e95c5091e934a9b55d66d2"
  },
  {
    "url": "other/index.html",
    "revision": "340951f976832fa56e2bc438febd66eb"
  },
  {
    "url": "other/notes-on-tomb-robbery.html",
    "revision": "8e92dcb570481b22259fe0d525c97482"
  },
  {
    "url": "read/index.html",
    "revision": "71981742daae5d13bdf3e99d2a5eb95b"
  },
  {
    "url": "study-notes/back-end/index.html",
    "revision": "39a1cdf02ab97a4ab52699a338badca6"
  },
  {
    "url": "study-notes/back-end/java/collection.html",
    "revision": "ea1cd4f2ea98d61ef410d0d2e787b4c9"
  },
  {
    "url": "study-notes/back-end/java/fenbushi.html",
    "revision": "466707bf89e5dd6f0168d17663830843"
  },
  {
    "url": "study-notes/back-end/java/index.html",
    "revision": "9bd72c9d991414e2d5d9448d172484e7"
  },
  {
    "url": "study-notes/back-end/java/javase.html",
    "revision": "07344110dae280562863769bf4826a0e"
  },
  {
    "url": "study-notes/back-end/java/javathread.html",
    "revision": "6f73e6c2c8c6e21147c5968cf80c9b65"
  },
  {
    "url": "study-notes/back-end/java/jvm.html",
    "revision": "2bee80b95388ced680c0205b8f81441c"
  },
  {
    "url": "study-notes/back-end/java/mybatis.html",
    "revision": "ad9fbfbb81b0f55b955f42cc99b7d359"
  },
  {
    "url": "study-notes/back-end/java/mysql.html",
    "revision": "01071106d5fcbb39272258f9412a7353"
  },
  {
    "url": "study-notes/back-end/java/network.html",
    "revision": "a4eca6babee11549e1d2be888be36a6d"
  },
  {
    "url": "study-notes/back-end/java/nixi.html",
    "revision": "a0abed32868714a841e44b3a02858c78"
  },
  {
    "url": "study-notes/back-end/java/os.html",
    "revision": "f3f6ad133adab78496e54850b31a3b6d"
  },
  {
    "url": "study-notes/back-end/java/redis.html",
    "revision": "fb3c6e2baf584c76e43d71894a223c8b"
  },
  {
    "url": "study-notes/back-end/java/rocketmq.html",
    "revision": "37f7ede621597aeeaa226d1a93e54933"
  },
  {
    "url": "study-notes/back-end/java/spring.html",
    "revision": "8cfe35397faaf07bb71e28f8e79bbf73"
  },
  {
    "url": "study-notes/back-end/java/weifuwu.html",
    "revision": "f4efa69dc3fa0e2e9c9542407d4feb02"
  },
  {
    "url": "study-notes/back-end/python/index.html",
    "revision": "b4999823dcd434e955d0a77712a546c7"
  },
  {
    "url": "study-notes/common/common-tools/index.html",
    "revision": "da56b51bc528fff82739e8ecda8c37b3"
  },
  {
    "url": "study-notes/front-end/html/basic/index.html",
    "revision": "3afc89008494f56b7f2eeda96405d254"
  },
  {
    "url": "study-notes/front-end/html/index.html",
    "revision": "4a88b76d0486be6ddebe7e4caae89af6"
  },
  {
    "url": "study-notes/front-end/index.html",
    "revision": "729c53cad2a1d4894335c3969cacbbd1"
  },
  {
    "url": "study-notes/front-end/javaScript/index.html",
    "revision": "ef6cb380e47489192b8b1eeb70b150b9"
  },
  {
    "url": "study-notes/index.html",
    "revision": "577f02344ab7be960f113e79024edb71"
  },
  {
    "url": "vuepress-custom-content-width/index.html",
    "revision": "1f6906f2e09bd93206ceb28a5ddd1f1a"
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
