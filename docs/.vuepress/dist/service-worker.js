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
    "revision": "c3277d0292783b52f17e7c930e749c8a"
  },
  {
    "url": "aboutme/index.html",
    "revision": "acf0c41ded2f5f6b332466a14f99c207"
  },
  {
    "url": "assets/css/0.styles.e81f44f9.css",
    "revision": "6f65c37563a19157e740b71e8ee36995"
  },
  {
    "url": "assets/img/home.png",
    "revision": "565987a677f8403e1cde61ff039f6d8f"
  },
  {
    "url": "assets/img/iconfont.117d8006.svg",
    "revision": "117d8006a3c478fbc8c4ce04a36ddb5a"
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
    "url": "assets/js/1.a32c7159.js",
    "revision": "bea792e189a31eed55d9723d0f59aa84"
  },
  {
    "url": "assets/js/10.563007b3.js",
    "revision": "d558856eda1ec09c05e615c1c1321a18"
  },
  {
    "url": "assets/js/11.292d81bd.js",
    "revision": "d116d3518195d31c47cf4ec2a354fcea"
  },
  {
    "url": "assets/js/12.6220fd01.js",
    "revision": "356c9f6289cc83b1faee76fd657ccb30"
  },
  {
    "url": "assets/js/13.95ef480b.js",
    "revision": "6607b7052dedd1c6289506efa5c97e47"
  },
  {
    "url": "assets/js/14.1ebd323a.js",
    "revision": "3f9f700834d26162016a2ab44f2d0340"
  },
  {
    "url": "assets/js/15.5f908ef3.js",
    "revision": "8bd3ce52d8e623432f7dd3439ded7fb0"
  },
  {
    "url": "assets/js/16.9aada3e2.js",
    "revision": "b9fe1bd5a0172dfd509abb77680791b2"
  },
  {
    "url": "assets/js/17.5e4e5d25.js",
    "revision": "0c0c0d31ba75f71f31ac04a4b9af43b5"
  },
  {
    "url": "assets/js/18.3cd63971.js",
    "revision": "49e339249ce594d0d522c1ed6f149600"
  },
  {
    "url": "assets/js/19.bc93ee32.js",
    "revision": "650ee9131fcad657b1b0f9c35b293a01"
  },
  {
    "url": "assets/js/2.12f66b37.js",
    "revision": "67dc475d287e57987398a83dce554d75"
  },
  {
    "url": "assets/js/20.9fb10cc7.js",
    "revision": "2467045a27ebbc9dfd11710b1e61b767"
  },
  {
    "url": "assets/js/21.73233f72.js",
    "revision": "46088d288a0b659badee88b607914e89"
  },
  {
    "url": "assets/js/22.3fcffe4b.js",
    "revision": "6307f04865a4bb84043926095202d3ff"
  },
  {
    "url": "assets/js/23.e88d9311.js",
    "revision": "a9b8642ea116ff7e4c258eb5fc89c1fe"
  },
  {
    "url": "assets/js/24.eae84251.js",
    "revision": "d328ad2e9dce2dedfd990805a48f11fc"
  },
  {
    "url": "assets/js/25.6a1766e8.js",
    "revision": "2493824b2c735d40ae350c4b451fbbb9"
  },
  {
    "url": "assets/js/26.eac91bb3.js",
    "revision": "c02fa347fff5a7b8ae210cabe8098984"
  },
  {
    "url": "assets/js/27.6c36869e.js",
    "revision": "dd1304b7cb1b52f31066398870d2168b"
  },
  {
    "url": "assets/js/28.d8f4a41f.js",
    "revision": "ced32c1de8bdeecd0da0022799a5110d"
  },
  {
    "url": "assets/js/29.713ee9eb.js",
    "revision": "144a0cba6283c493d65e8735c61b3b86"
  },
  {
    "url": "assets/js/3.f4d78037.js",
    "revision": "78dfe885106306ad6f9a2d60a76dfd06"
  },
  {
    "url": "assets/js/30.4266ec19.js",
    "revision": "f7de86cd3c856a5b08a65c6fcf0fed06"
  },
  {
    "url": "assets/js/31.64e3ded7.js",
    "revision": "bee8f3e8533bb0d1d83f618d27ba5a26"
  },
  {
    "url": "assets/js/32.c7228690.js",
    "revision": "ea37c1281cdf5375a73c9999bccc7003"
  },
  {
    "url": "assets/js/33.e45144db.js",
    "revision": "16d4aca016c35b25a9872c85c2c3b747"
  },
  {
    "url": "assets/js/34.fbd1c263.js",
    "revision": "915c226c3cf86e6000c677b8075dcc70"
  },
  {
    "url": "assets/js/35.da0d1ca6.js",
    "revision": "6b7af422455d66e356cb421cfb854a12"
  },
  {
    "url": "assets/js/36.4d377dd1.js",
    "revision": "a16a355ed9e65fc43ebbd0390d962472"
  },
  {
    "url": "assets/js/37.8062a798.js",
    "revision": "a92210214a3fcaa8afb3eaca42b855b2"
  },
  {
    "url": "assets/js/38.3f32c953.js",
    "revision": "99023b6aad1e708cd44a9bf7b5a277dc"
  },
  {
    "url": "assets/js/39.cfd921ad.js",
    "revision": "70859160ba118ede39620f89708d15be"
  },
  {
    "url": "assets/js/4.549915e7.js",
    "revision": "db56c71b6d56fe60c0e0e6af476c6f9b"
  },
  {
    "url": "assets/js/40.7465eef8.js",
    "revision": "ac0f36fd77de8c2114ff89e45a252855"
  },
  {
    "url": "assets/js/41.2bc4b2d8.js",
    "revision": "a9b2621b689b158de76378999bf16b1d"
  },
  {
    "url": "assets/js/42.c7281cca.js",
    "revision": "ff7b9d69680af5977df826bc92443477"
  },
  {
    "url": "assets/js/43.2bd85a3d.js",
    "revision": "b7ce0fc699f5dbd6dd2327664f77d33c"
  },
  {
    "url": "assets/js/44.0ae7438a.js",
    "revision": "d838d89a59f586c8e1566fb70d25500b"
  },
  {
    "url": "assets/js/45.1d176bdc.js",
    "revision": "91137d5a17b9d526f47ff9e65e29c6c6"
  },
  {
    "url": "assets/js/46.3353ed67.js",
    "revision": "d0df83f67f645540e157c936093d6b32"
  },
  {
    "url": "assets/js/47.72045e77.js",
    "revision": "e8fb0a03f50f4a936bdcd9f04be38af3"
  },
  {
    "url": "assets/js/48.991c8260.js",
    "revision": "ddf7f450ddb180293deb5c264c5df4b2"
  },
  {
    "url": "assets/js/49.b86f74c2.js",
    "revision": "5ea660a612d2f4fd113282d7bbdc72bb"
  },
  {
    "url": "assets/js/5.0584bc2e.js",
    "revision": "042c3864ba781858b8306069460e7222"
  },
  {
    "url": "assets/js/50.3b74c8b1.js",
    "revision": "dd19092092d707687b76db85dfa9b754"
  },
  {
    "url": "assets/js/51.346337b8.js",
    "revision": "43a409a3b05c89fbbdd9bfdc08aff731"
  },
  {
    "url": "assets/js/52.510b4d3b.js",
    "revision": "f4991a1452e3081b344c80ef342a3b13"
  },
  {
    "url": "assets/js/53.c81644dd.js",
    "revision": "cc41dad15442955f0eeac4b85acfdffd"
  },
  {
    "url": "assets/js/54.78fd09a4.js",
    "revision": "fc8bd64ee479ca38458735eeec49dc01"
  },
  {
    "url": "assets/js/55.6e98669a.js",
    "revision": "ae530f3f4f551fd942bccb8bcd649d54"
  },
  {
    "url": "assets/js/56.b5c40b60.js",
    "revision": "a25185399307990d62eaa5683ef724de"
  },
  {
    "url": "assets/js/57.cfd2906d.js",
    "revision": "34459a91b11903f0656d29702d9daa91"
  },
  {
    "url": "assets/js/58.01a2a025.js",
    "revision": "4851a907e583b14290c9f642ec1af8e6"
  },
  {
    "url": "assets/js/59.6f0185c4.js",
    "revision": "c65a7c122a4f7cee24478de67e381b65"
  },
  {
    "url": "assets/js/6.82557661.js",
    "revision": "32090e1fba5aef3fcbc95bdf9bd99527"
  },
  {
    "url": "assets/js/60.11c62a1e.js",
    "revision": "b25bdc6af8d60a6507c6bb9975088d75"
  },
  {
    "url": "assets/js/61.37226b43.js",
    "revision": "922e7462bdfdac8f14e2aa98525451d6"
  },
  {
    "url": "assets/js/62.0350f2ac.js",
    "revision": "66f9e786e908b354a1acc34772a06d38"
  },
  {
    "url": "assets/js/63.b8e5c46f.js",
    "revision": "a145b539413e5844e68052fb758a67e0"
  },
  {
    "url": "assets/js/64.d4afb605.js",
    "revision": "67ec14680e97db90961b8623fc1d3fee"
  },
  {
    "url": "assets/js/65.511200e9.js",
    "revision": "3a1ce5e14324b3c73a52db54dd1224ba"
  },
  {
    "url": "assets/js/66.8a2014ab.js",
    "revision": "cda954685f308cf03ff166e06f3b156b"
  },
  {
    "url": "assets/js/67.075e50fe.js",
    "revision": "0bbd0aa8b65c784b28f3c7682ebaa47a"
  },
  {
    "url": "assets/js/68.659d2b37.js",
    "revision": "92a042cbf9097c899fc2a03d77fdf6dc"
  },
  {
    "url": "assets/js/69.30b2c7bd.js",
    "revision": "8317f370ede97bc63744921669b799fa"
  },
  {
    "url": "assets/js/7.2ed1d472.js",
    "revision": "c8b3d57e7c0f53239f5bbc2311a39503"
  },
  {
    "url": "assets/js/70.5c183e7d.js",
    "revision": "02239184621823003d71e677b4b08ad1"
  },
  {
    "url": "assets/js/71.d1b03e41.js",
    "revision": "d616c9454bdf14e445a960d0240e67d0"
  },
  {
    "url": "assets/js/72.392d3212.js",
    "revision": "00e98a0a91f2217e60775db7cc4329a8"
  },
  {
    "url": "assets/js/73.dd7400fc.js",
    "revision": "3ebc4f19eb3a179bc9622d5288dfe4e0"
  },
  {
    "url": "assets/js/74.daca2677.js",
    "revision": "1aa19e87af9471c6c62d153927584b1c"
  },
  {
    "url": "assets/js/75.c2ef6af9.js",
    "revision": "dfddc8bc79ba5021b31c71089e30c103"
  },
  {
    "url": "assets/js/76.9f8f4c1e.js",
    "revision": "e9980bfb4f0ddb0a3350f7c217cdaa08"
  },
  {
    "url": "assets/js/77.fb8fda1e.js",
    "revision": "72668344ee026226b039bf236c03bb1d"
  },
  {
    "url": "assets/js/78.b88b2c34.js",
    "revision": "79f228c18ec31d383f03450f8fb986b4"
  },
  {
    "url": "assets/js/79.8fe5dc94.js",
    "revision": "33ebc464681b814c720144778478db59"
  },
  {
    "url": "assets/js/app.75bcaf97.js",
    "revision": "46ca8ee1d37ee029d3ea8ac24683e3b3"
  },
  {
    "url": "assets/js/vendors~docsearch.bd3cdb54.js",
    "revision": "43ba7dd333899afdf3998c9a4a7618d8"
  },
  {
    "url": "blog-article/drawing-bed/index.html",
    "revision": "a25ed37f71badeb3da8548e95257c6c8"
  },
  {
    "url": "blog-article/drawing-bed/picGo+gitee.html",
    "revision": "40e39bad92552c41600d48652647bfb0"
  },
  {
    "url": "blog-article/front-end/easyui/easyui-tree-combotree.html",
    "revision": "1611cf3c86662d8d7d0f50e01ca5524e"
  },
  {
    "url": "blog-article/front-end/index.html",
    "revision": "bd899bd33b62474b18bff004dcbd7829"
  },
  {
    "url": "blog-article/front-end/js/js-array-object-contain-duplicate-values.html",
    "revision": "9390339744eb2b7410debb53bcc7fe6e"
  },
  {
    "url": "blog-article/front-end/vuepress/vuepress-auto-sidebar.html",
    "revision": "f297391830e14f5b7798ee6f87d08654"
  },
  {
    "url": "blog-article/front-end/vuepress/vuepress-back-last-read.html",
    "revision": "ee077781b97237da8fe775840d467ddc"
  },
  {
    "url": "blog-article/front-end/vuepress/vuepress-custom-navigation.html",
    "revision": "6043bd90d5215403cf23fb76cda018c9"
  },
  {
    "url": "blog-article/front-end/vuepress/vuepress-loads-network-images.html",
    "revision": "7ef9d9871ae9fb8df1f7c60b0e101306"
  },
  {
    "url": "blog-article/front-end/vuepress/vuepress-pwa.html",
    "revision": "1b05782d2dba38a803efb592a7b0f3b9"
  },
  {
    "url": "blog-article/front-end/vuepress/vuepress-right-sidebar.html",
    "revision": "eadc7c097572407b016923a8c8f8ed87"
  },
  {
    "url": "blog-article/index.html",
    "revision": "b3769f6f46180c499c61a3434a9f3642"
  },
  {
    "url": "blog-article/java/index.html",
    "revision": "f6a37412a48cd843b72d147f4ab71395"
  },
  {
    "url": "blog-article/mybatis/index.html",
    "revision": "f88800e6b4b6ab503a2eb414e29a1285"
  },
  {
    "url": "blog-article/mybatis/mybatis-list-map-array.html",
    "revision": "f089d36cd602c1beb8dbd8e6c7e2a617"
  },
  {
    "url": "blog-article/mybatis/mybatis-List-map.html",
    "revision": "8d3e102aaa81bdbd8e12e23c5ab60895"
  },
  {
    "url": "blog-article/mysql/index.html",
    "revision": "998b84ee4a025432d15b7ac620d760f8"
  },
  {
    "url": "blog-article/other/index.html",
    "revision": "dcd9cfe2bbfab524ff3ec306d515033d"
  },
  {
    "url": "blog-article/python/first-acquaintance-python.html",
    "revision": "138497ad3e97b21005b9349faac6fbcf"
  },
  {
    "url": "blog-article/python/index.html",
    "revision": "0838edc120ba7087768ce1d968d9a2b2"
  },
  {
    "url": "code-demo/back-end-code/index.html",
    "revision": "5678db76fc5d7c8f0c8f2251afd25b23"
  },
  {
    "url": "code-demo/front-end-code/index.html",
    "revision": "62fa6413fb42c2593c7f542f2044e914"
  },
  {
    "url": "code-demo/index.html",
    "revision": "fdee1c0c30362dd2431e2639b98926ff"
  },
  {
    "url": "code-demo/other.html",
    "revision": "9e4edcc7aa21628cc748cebc9a8e13ea"
  },
  {
    "url": "friendly-chain/index.html",
    "revision": "eaf1ffb783e8e2aeb818286a59031da4"
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
    "revision": "87b09e1676452e906a4701e8d99e0714"
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
    "revision": "565387f9098c1fbd845cc66ae5d3283f"
  },
  {
    "url": "other/index.html",
    "revision": "c57ef1c9b85b9d1f5fc4bce6751fd51c"
  },
  {
    "url": "other/notes-on-tomb-robbery.html",
    "revision": "ecec7b659bebae7094430f6e907b2f97"
  },
  {
    "url": "read/index.html",
    "revision": "4fa09cd68190358a9532b152e5308107"
  },
  {
    "url": "study-notes/back-end/index.html",
    "revision": "0d35027d82d2c3bdd1d6b57940312ab1"
  },
  {
    "url": "study-notes/back-end/java/collection.html",
    "revision": "433f4539b2d9a8dea9dc8ba3649d8435"
  },
  {
    "url": "study-notes/back-end/java/fenbushi.html",
    "revision": "ee610a3e704c1bac6c6530d167ee7730"
  },
  {
    "url": "study-notes/back-end/java/index.html",
    "revision": "601592727414dd9549eab7ed28ff23c2"
  },
  {
    "url": "study-notes/back-end/java/javase.html",
    "revision": "c586aaf96f1299b6e63821307cd445d1"
  },
  {
    "url": "study-notes/back-end/java/javathread.html",
    "revision": "146befa7d59648352f1cf56cb715fdb6"
  },
  {
    "url": "study-notes/back-end/java/jvm.html",
    "revision": "3f0f7cc906eaf63ae3eef97d1c8c1894"
  },
  {
    "url": "study-notes/back-end/java/mybatis.html",
    "revision": "bd04c167c41ced5732c4cbe701bd0f9f"
  },
  {
    "url": "study-notes/back-end/java/mysql.html",
    "revision": "faf3b304ea93c10fcb0e681cdb22fd1a"
  },
  {
    "url": "study-notes/back-end/java/network.html",
    "revision": "97d2c1a4beaba52fe7e551c34b5e5392"
  },
  {
    "url": "study-notes/back-end/java/nixi.html",
    "revision": "e46a5ae092054257576a88c9b3737859"
  },
  {
    "url": "study-notes/back-end/java/os.html",
    "revision": "7822637aefb2e449eec086aff9e91a99"
  },
  {
    "url": "study-notes/back-end/java/redis.html",
    "revision": "9ce80d05558bd71974056abfd32f6b6a"
  },
  {
    "url": "study-notes/back-end/java/rocketmq.html",
    "revision": "2260494abdb43610be1ded9dc4c8d8f9"
  },
  {
    "url": "study-notes/back-end/java/spring.html",
    "revision": "30c3cd4dccdf8c21cd5eac251a9d168c"
  },
  {
    "url": "study-notes/back-end/java/weifuwu.html",
    "revision": "80f35ca4b53969d3112611b474549678"
  },
  {
    "url": "study-notes/back-end/python/index.html",
    "revision": "f7dc4fbde9e98dab0f5151716cd13604"
  },
  {
    "url": "study-notes/common/common-tools/index.html",
    "revision": "65a04b345b6a6b357a2ef85de28a075e"
  },
  {
    "url": "study-notes/front-end/html/basic/index.html",
    "revision": "c6e811ebd306587b0b5d623b6a270c35"
  },
  {
    "url": "study-notes/front-end/html/index.html",
    "revision": "3f65064647d2d1fc213e7526923f31ab"
  },
  {
    "url": "study-notes/front-end/index.html",
    "revision": "bc311a77c29be75805f62cc2fdfa5a02"
  },
  {
    "url": "study-notes/front-end/javaScript/index.html",
    "revision": "8bdda9c54efeadc671ab9e932ceedb86"
  },
  {
    "url": "study-notes/index.html",
    "revision": "a22e8980f4d845a7f38bc7aefe2dccb4"
  },
  {
    "url": "vuepress-custom-content-width/index.html",
    "revision": "a8c7ff639ef0be120a09f4f937c4c145"
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
