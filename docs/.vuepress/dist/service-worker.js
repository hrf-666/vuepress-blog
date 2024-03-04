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
    "revision": "903f6e92b2173f0311665fc2faf32653"
  },
  {
    "url": "aboutme/index.html",
    "revision": "65662d69bf22386c506f872136598810"
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
    "url": "assets/js/32.5abef779.js",
    "revision": "c92878db0448e506e3f02f1d2e7c2716"
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
    "url": "assets/js/35.a5f9ae8c.js",
    "revision": "2b9ca5322bb2d2a639060135d140a0b3"
  },
  {
    "url": "assets/js/36.f5dc6d4c.js",
    "revision": "cfc1cb9b0f2c1f395ff83632c57842dd"
  },
  {
    "url": "assets/js/37.bddd155f.js",
    "revision": "cb0fd166de9bf3a7fd6c972eae9ea17c"
  },
  {
    "url": "assets/js/38.886691e6.js",
    "revision": "c6b8c3c0a36581a0c995417c91c869e9"
  },
  {
    "url": "assets/js/39.ae3b1088.js",
    "revision": "0a6780f49f80a75b173b50537eace5d1"
  },
  {
    "url": "assets/js/4.da81c3e9.js",
    "revision": "2a872627bbbf86e7c9394eb39e887ba3"
  },
  {
    "url": "assets/js/40.f60399ec.js",
    "revision": "bda75e48fa98e2ba74082c15e3462b2b"
  },
  {
    "url": "assets/js/41.250a544f.js",
    "revision": "25d888e1810b9e47a24d17a319f39046"
  },
  {
    "url": "assets/js/42.8b8bfd05.js",
    "revision": "42b80cc262e90fea0c323f4da6103e11"
  },
  {
    "url": "assets/js/43.36a3cd88.js",
    "revision": "17e44e62f32e31f5eebba66108f7c14c"
  },
  {
    "url": "assets/js/44.bc4eb36a.js",
    "revision": "79bf5d3cf596a516458dab006b50dc2b"
  },
  {
    "url": "assets/js/45.3eebbe33.js",
    "revision": "c84f376b544e067c9c4d2a49beecfc08"
  },
  {
    "url": "assets/js/46.17ef4235.js",
    "revision": "8ab8fb57c6d2f54856189af0e422b28d"
  },
  {
    "url": "assets/js/47.f5f5fe3d.js",
    "revision": "efc7b36504f1ffe93ce15c7634fa06ae"
  },
  {
    "url": "assets/js/48.0afe8c96.js",
    "revision": "21bac4365751f7ffe212c1f7f2c3b473"
  },
  {
    "url": "assets/js/49.0b5db921.js",
    "revision": "c20b5b39a9dafab5bc49d465bf2d660b"
  },
  {
    "url": "assets/js/5.841b10ce.js",
    "revision": "d18bb96742b1a16c268c21ff55cee40c"
  },
  {
    "url": "assets/js/50.5344193e.js",
    "revision": "1d1b19a675f268a0172be8a1ddb1c9ab"
  },
  {
    "url": "assets/js/51.5ba48e31.js",
    "revision": "1c4aa951f75f8abc50306a040202b6fb"
  },
  {
    "url": "assets/js/52.1d352594.js",
    "revision": "fabb8d42c484b7f3e20909bfcd5f2bc1"
  },
  {
    "url": "assets/js/53.a72260ef.js",
    "revision": "fc379543429625fa6828161c1345cba2"
  },
  {
    "url": "assets/js/54.98b75469.js",
    "revision": "c88c745839b050406dd3f75e4deffd24"
  },
  {
    "url": "assets/js/55.2441716a.js",
    "revision": "aab0f4ed0f663b730cf6e8750ff3eb11"
  },
  {
    "url": "assets/js/56.2cb56dad.js",
    "revision": "06ccdb592e194d96f49ca903d24395cb"
  },
  {
    "url": "assets/js/57.9256e8cf.js",
    "revision": "70fc97c0700d0b262c188bc00c52dd59"
  },
  {
    "url": "assets/js/58.18d09cfa.js",
    "revision": "7bcc26f9991ccfb0c54b4b8b7e4b5f98"
  },
  {
    "url": "assets/js/59.11ea8323.js",
    "revision": "4df019f16fe03e4dd4f06646fe324ace"
  },
  {
    "url": "assets/js/6.508a846c.js",
    "revision": "341974fd34eaf41eedec21b55d7dfabd"
  },
  {
    "url": "assets/js/60.02fd3550.js",
    "revision": "5c123c59502acc3e216cee99caee13f8"
  },
  {
    "url": "assets/js/61.2cdc8554.js",
    "revision": "279eb34b480cb201ca1f2f83acddf3c2"
  },
  {
    "url": "assets/js/62.f94200fd.js",
    "revision": "717a12de57d43a79455c39764e81f63e"
  },
  {
    "url": "assets/js/63.eca4f4ee.js",
    "revision": "3a40db85bc3dbcaf5dd787cb61198da5"
  },
  {
    "url": "assets/js/64.9d0332d8.js",
    "revision": "f502efc6e5010af38b889e103aba3a3a"
  },
  {
    "url": "assets/js/65.6c9c47c0.js",
    "revision": "54108773f2e7e1f6597e56b11bfc2fb6"
  },
  {
    "url": "assets/js/66.c79e498c.js",
    "revision": "ff40c7785b777988eaf0636142903882"
  },
  {
    "url": "assets/js/67.2da197a9.js",
    "revision": "d54118ac85777a13c46c99413dd742ba"
  },
  {
    "url": "assets/js/68.63aa04b7.js",
    "revision": "38cb579ad423adb11fc155ccf00faa6f"
  },
  {
    "url": "assets/js/69.0ce2229e.js",
    "revision": "dabc946ad41ab745bf0cf012f828d14e"
  },
  {
    "url": "assets/js/7.9f58c0f5.js",
    "revision": "c6808306ac52e461010b2e4b5a36f1e0"
  },
  {
    "url": "assets/js/70.df8e6716.js",
    "revision": "f8e9ec9a684127995cc1ccf93a1332b0"
  },
  {
    "url": "assets/js/71.9cea489b.js",
    "revision": "5a8e9b0c82bab3cc948269dc1eebbcbe"
  },
  {
    "url": "assets/js/72.99c866b1.js",
    "revision": "7b63751d05cd8e9a300f1e93245c9c96"
  },
  {
    "url": "assets/js/73.96b6a729.js",
    "revision": "563cb1577c5a16ee9e7a16bfb4d3b701"
  },
  {
    "url": "assets/js/74.7f1f72d4.js",
    "revision": "08972972021dfb6368c9a0e18e80dfa1"
  },
  {
    "url": "assets/js/75.df55d06f.js",
    "revision": "35e76496a0f8610a82b666a652fedc82"
  },
  {
    "url": "assets/js/76.4ca39bb5.js",
    "revision": "ff88c5e379bf8c77844a5b03005a322f"
  },
  {
    "url": "assets/js/77.7408a54d.js",
    "revision": "fae92fe19750ba515d286e13972b348a"
  },
  {
    "url": "assets/js/78.27884aca.js",
    "revision": "e4264ce77027ddce54bc530a10129c5f"
  },
  {
    "url": "assets/js/79.37bc82fb.js",
    "revision": "69a02f0fe45466703d9ccf8e8176476f"
  },
  {
    "url": "assets/js/80.339088f6.js",
    "revision": "51f0433b740ee70f5998062952d20af4"
  },
  {
    "url": "assets/js/81.1146c585.js",
    "revision": "54541aee060b984ee78eea8a4d2491a0"
  },
  {
    "url": "assets/js/82.b97e9e89.js",
    "revision": "03e0cbe06f9517754a98e315708891e5"
  },
  {
    "url": "assets/js/83.4eff15b5.js",
    "revision": "63e7f99fb7a1145a529546276b5b1ba0"
  },
  {
    "url": "assets/js/84.17613a76.js",
    "revision": "52ba83c3332c9bc0ef7efaf6f833d665"
  },
  {
    "url": "assets/js/85.f06ead4c.js",
    "revision": "1df7dda61fa9e7678273a01cf727813d"
  },
  {
    "url": "assets/js/86.05ba8965.js",
    "revision": "a5b81b47ce5980bc180d2feb62f4c8ed"
  },
  {
    "url": "assets/js/87.f653ec65.js",
    "revision": "8608a60510424fb19b95e02c98a4c743"
  },
  {
    "url": "assets/js/88.766593f0.js",
    "revision": "550d41e1647427a551a1cc5d58e79c30"
  },
  {
    "url": "assets/js/89.b8164d1a.js",
    "revision": "c77d722ab60e8b4b951e0e010417d6dc"
  },
  {
    "url": "assets/js/90.98f296bd.js",
    "revision": "edb47e97523da7cc9bd9272893017297"
  },
  {
    "url": "assets/js/91.05f30409.js",
    "revision": "f1817f6fcd1f96b0beadb2c06e558a83"
  },
  {
    "url": "assets/js/92.703b0b1c.js",
    "revision": "9165b2b7052d9f71730b1ca64eaa9168"
  },
  {
    "url": "assets/js/93.b1dd208d.js",
    "revision": "5abde74084a8b15395c01ffbe83c7156"
  },
  {
    "url": "assets/js/94.8939e52b.js",
    "revision": "f67ebbf3e7f9becee4ffdcf591a81b0b"
  },
  {
    "url": "assets/js/app.bd462cb7.js",
    "revision": "97e66bd954613cc0b8bf429e3788a5b6"
  },
  {
    "url": "assets/js/vendors~docsearch.7bcd5e47.js",
    "revision": "fedb91d1e1e352065427033e9b8e5dc1"
  },
  {
    "url": "blog-article/drawing-bed/index.html",
    "revision": "459f350e7d04e23ca690d3840e18abb3"
  },
  {
    "url": "blog-article/drawing-bed/picGo+gitee.html",
    "revision": "49d367a3cff1d78639a2c0e5d8d3dc85"
  },
  {
    "url": "blog-article/front-end/easyui/easyui-tree-combotree.html",
    "revision": "c948b258e9c98e6da58009919d6c3d42"
  },
  {
    "url": "blog-article/front-end/index.html",
    "revision": "80b94117b408bffc8bc2cbeda77ad993"
  },
  {
    "url": "blog-article/front-end/js/js-array-object-contain-duplicate-values.html",
    "revision": "dbf48d6547e8fe459072a42c4eaa4215"
  },
  {
    "url": "blog-article/front-end/vuepress/vuepress-auto-sidebar.html",
    "revision": "c4707dda28571a2d8a3befaebea98025"
  },
  {
    "url": "blog-article/front-end/vuepress/vuepress-back-last-read.html",
    "revision": "b886e5e8293591b108c6d0f77b8aeb2b"
  },
  {
    "url": "blog-article/front-end/vuepress/vuepress-custom-navigation.html",
    "revision": "aa475c3324cb08c0fc18824c5992a8d6"
  },
  {
    "url": "blog-article/front-end/vuepress/vuepress-fix-search.html",
    "revision": "4ad3e920961e5515fa6472811ec5cf2b"
  },
  {
    "url": "blog-article/front-end/vuepress/vuepress-loads-network-images.html",
    "revision": "d74180e2180bcfb197892539e9dcfef1"
  },
  {
    "url": "blog-article/front-end/vuepress/vuepress-pwa.html",
    "revision": "3b04ccc8e81807ee7ade9caaac207ce9"
  },
  {
    "url": "blog-article/front-end/vuepress/vuepress-right-sidebar.html",
    "revision": "62654a57f029595717a7b35e88a63525"
  },
  {
    "url": "blog-article/front-end/vuepress/vuepress-sakura-plugin.html",
    "revision": "4faf56d09456fbe575b14e564f75a8f0"
  },
  {
    "url": "blog-article/index.html",
    "revision": "7e72f4f38b24ea153a1abcd76805aa5e"
  },
  {
    "url": "blog-article/java/byte-array-and-string.html",
    "revision": "2fd802430fe0dade54b4d2c8352dfdf2"
  },
  {
    "url": "blog-article/java/index.html",
    "revision": "bc340647405049a0e7c4bb88005fadd7"
  },
  {
    "url": "blog-article/java/list-string-remove-duplicate.html",
    "revision": "173d2e5c6380a777ac9854b1f5120920"
  },
  {
    "url": "blog-article/java/software/idea-maven.html",
    "revision": "18c3b4541b061e983d32bca25ecce4f0"
  },
  {
    "url": "blog-article/java/software/jdk-install.html",
    "revision": "9e2665f06826607b1e91f26293e7ae39"
  },
  {
    "url": "blog-article/java/software/maven-install.html",
    "revision": "d59eefb969d8576de905127ed39997fd"
  },
  {
    "url": "blog-article/java/stream-extract-id.html",
    "revision": "9f88a2a32e8d2de2f763530888441011"
  },
  {
    "url": "blog-article/mybatis/index.html",
    "revision": "fe886e62105df0bfe277f1e15705d3e4"
  },
  {
    "url": "blog-article/mybatis/mybatis-list-map-array.html",
    "revision": "7f8a7576fff7cfdde970b1cf1ba1d83e"
  },
  {
    "url": "blog-article/mybatis/mybatis-List-map.html",
    "revision": "d9d4ecf32edd79fa9ac3d985c663237c"
  },
  {
    "url": "blog-article/mysql/index.html",
    "revision": "f115bc0bea3fb784168554f6e012922a"
  },
  {
    "url": "blog-article/other/index.html",
    "revision": "db8929479e200bcaac9c317c307ff230"
  },
  {
    "url": "blog-article/python/first-acquaintance-python.html",
    "revision": "eedf8b2aaf5c3cbebcd4850b2df39242"
  },
  {
    "url": "blog-article/python/index.html",
    "revision": "35dcc8ca8c4bad8fb0081e3f9e31d551"
  },
  {
    "url": "blog-article/python/python-basic.html",
    "revision": "df15d7260ff8faa59be680e9808172c1"
  },
  {
    "url": "code-demo/back-end-code/index.html",
    "revision": "5527346057fe758e5c2361124ef5f2cf"
  },
  {
    "url": "code-demo/front-end-code/index.html",
    "revision": "f78d6102bfde8f1d6fa7d8ec55b5f875"
  },
  {
    "url": "code-demo/index.html",
    "revision": "1ef594f5113214157494508bbdb757ea"
  },
  {
    "url": "code-demo/other.html",
    "revision": "7946e925aaffa84552b063c8f3fcb994"
  },
  {
    "url": "friendly-chain/index.html",
    "revision": "fc94771f7655a51d37fe8584492c5224"
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
    "revision": "6bae6478367f6b637897a2a650a9b498"
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
    "revision": "8a5b7787f6fa22b834935e0952f83e45"
  },
  {
    "url": "other/index.html",
    "revision": "9d851fa962a60956250dcd48f127c4d6"
  },
  {
    "url": "other/notes-on-tomb-robbery.html",
    "revision": "643a65feb5ae20d90e19014a3bd2da90"
  },
  {
    "url": "read/books/fanshiyaochenzao.html",
    "revision": "c68e2d3bf249f11fd193a830818b1975"
  },
  {
    "url": "read/classic-sentences/ruyizhuan.html",
    "revision": "890e4600f3b30722b8290c52d1e56944"
  },
  {
    "url": "read/classic-sentences/saniti.html",
    "revision": "b524a269a965a70a171eb91d0394ec47"
  },
  {
    "url": "read/classic-sentences/zhenhuanzhuan.html",
    "revision": "b7c7636f9f063c0c1819112dd418957d"
  },
  {
    "url": "read/classic-sentences/zhifou.html",
    "revision": "42b05403b2f099cd9b6c7e1b5b127f8d"
  },
  {
    "url": "read/compile/struggle.html",
    "revision": "565da9dc186ff3da27fa51ab747a70d8"
  },
  {
    "url": "read/index.html",
    "revision": "96bd3e00a33d04eadcc62797c2d1ee0d"
  },
  {
    "url": "study-notes/back-end/index.html",
    "revision": "0e09932886c9a8659c2b9de554245cac"
  },
  {
    "url": "study-notes/back-end/java/collection.html",
    "revision": "6cd5719241e3064ed4d707ad08001d62"
  },
  {
    "url": "study-notes/back-end/java/fenbushi.html",
    "revision": "919bbb5beb0af6a7736f6e882c5bbbc0"
  },
  {
    "url": "study-notes/back-end/java/index.html",
    "revision": "7d1f9ddfd88c9d1a28bf46339782229a"
  },
  {
    "url": "study-notes/back-end/java/javase.html",
    "revision": "d4ee5f6d9cd4940fd7a7f23d04a38d24"
  },
  {
    "url": "study-notes/back-end/java/javathread.html",
    "revision": "7d34fc7722daf9ce4defc3cfc8fc0061"
  },
  {
    "url": "study-notes/back-end/java/jvm.html",
    "revision": "03d2aa83393361fdfed1a766442d6a35"
  },
  {
    "url": "study-notes/back-end/java/mybatis.html",
    "revision": "ac3218c97998754b87a94c61ca321a6e"
  },
  {
    "url": "study-notes/back-end/java/mysql.html",
    "revision": "6654e54fcdbde60e3fd52fd658f5347e"
  },
  {
    "url": "study-notes/back-end/java/network.html",
    "revision": "3c41ff3d99f086b926f7cf6699dafef2"
  },
  {
    "url": "study-notes/back-end/java/nixi.html",
    "revision": "03198a1158304b884afa72cca28e4c1d"
  },
  {
    "url": "study-notes/back-end/java/os.html",
    "revision": "bc98df5b01d00f9cece989055f39639b"
  },
  {
    "url": "study-notes/back-end/java/redis.html",
    "revision": "7f87312baacdd9e477d16895e4e8c5a1"
  },
  {
    "url": "study-notes/back-end/java/rocketmq.html",
    "revision": "4fdc077146172e2f160ce0e458b407f9"
  },
  {
    "url": "study-notes/back-end/java/spring.html",
    "revision": "1344aebf066efb86ecda155e95f0a575"
  },
  {
    "url": "study-notes/back-end/java/weifuwu.html",
    "revision": "1047213273cf05ca52b55d78df16e5af"
  },
  {
    "url": "study-notes/back-end/python/index.html",
    "revision": "eb29b9d749540f7d84820cf3dc0f6bab"
  },
  {
    "url": "study-notes/common/common-tools/index.html",
    "revision": "9837dad90c4c2389ee5a8bfb6d1e8c2f"
  },
  {
    "url": "study-notes/front-end/html/basic/index.html",
    "revision": "2cc1fbf9441ae4b27d76c9286e006d7a"
  },
  {
    "url": "study-notes/front-end/html/index.html",
    "revision": "69299ef714eab4cdee947337c2655564"
  },
  {
    "url": "study-notes/front-end/index.html",
    "revision": "3550362ea1748d99ffedac512a9c2b4a"
  },
  {
    "url": "study-notes/front-end/javaScript/index.html",
    "revision": "436de2e866b93b594f3445875feb6d7a"
  },
  {
    "url": "study-notes/index.html",
    "revision": "7d7a01215e59d93ff252dd7319f28f00"
  },
  {
    "url": "vuepress-custom-content-width/index.html",
    "revision": "93030dbf8fe35c4fc1fa62e4f83db776"
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
