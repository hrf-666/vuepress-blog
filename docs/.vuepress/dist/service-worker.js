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
    "revision": "61b7d90e530766f97622b19d2a9abde8"
  },
  {
    "url": "aboutme/index.html",
    "revision": "695d044fe1708674f4e1a13b2da38cb6"
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
    "url": "assets/js/26.eb5d4750.js",
    "revision": "4247d578eb7e44d78f978a2f8ba6705d"
  },
  {
    "url": "assets/js/27.dfff57df.js",
    "revision": "56b3ff916f8d67e008a65afe78cce20a"
  },
  {
    "url": "assets/js/28.52e9aae2.js",
    "revision": "081a64aab0e61e03fb586b1408afbbff"
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
    "url": "assets/js/30.4266ec19.js",
    "revision": "f7de86cd3c856a5b08a65c6fcf0fed06"
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
    "url": "assets/js/33.e45144db.js",
    "revision": "16d4aca016c35b25a9872c85c2c3b747"
  },
  {
    "url": "assets/js/34.e0c43c42.js",
    "revision": "9e36ad702e53a628af19c72e9ef53945"
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
    "url": "assets/js/37.96c9b10f.js",
    "revision": "9d3ca319961c1d9f2911ee2e2f1d2389"
  },
  {
    "url": "assets/js/38.13b3bf43.js",
    "revision": "d5614477a81497ac6f4fec11f63961cb"
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
    "url": "assets/js/40.4b06b6a5.js",
    "revision": "acb8fda4cb24fe1fe45d94027e3e0e81"
  },
  {
    "url": "assets/js/41.fce7314d.js",
    "revision": "76aa04019f41d098fbc34a22023f3341"
  },
  {
    "url": "assets/js/42.816622c0.js",
    "revision": "15a4daa8bd773c1df8af9353a8b2e98b"
  },
  {
    "url": "assets/js/43.3b5b6d08.js",
    "revision": "8b799f5d88e75ee15ce21ae5e00d0f92"
  },
  {
    "url": "assets/js/44.db2cbde7.js",
    "revision": "053d1b4ae0f9c6f1627b1a2cd139fb31"
  },
  {
    "url": "assets/js/45.5240f19b.js",
    "revision": "03d6303193eb329c29236ef30632170e"
  },
  {
    "url": "assets/js/46.2ede6f64.js",
    "revision": "52839b0476749b284bdb2e02f8ed06f2"
  },
  {
    "url": "assets/js/47.0efa7b90.js",
    "revision": "ec41da7854b1c71f094467f0efc506a0"
  },
  {
    "url": "assets/js/48.8a75868f.js",
    "revision": "cc7f18fb69be6f9f56d50f63f34992fd"
  },
  {
    "url": "assets/js/49.cfc219b0.js",
    "revision": "c497a8b4d06c6892171cffba2c0c6819"
  },
  {
    "url": "assets/js/5.841b10ce.js",
    "revision": "d18bb96742b1a16c268c21ff55cee40c"
  },
  {
    "url": "assets/js/50.a449f2f5.js",
    "revision": "820f49055ac630f5a54c11afe42297ae"
  },
  {
    "url": "assets/js/51.2163954d.js",
    "revision": "9cb9388f86a3ab4eadda799ada0e9ac4"
  },
  {
    "url": "assets/js/52.fb69280d.js",
    "revision": "fabb8d42c484b7f3e20909bfcd5f2bc1"
  },
  {
    "url": "assets/js/53.3e6a750e.js",
    "revision": "5ee84f24da71ce47961913c4ebfb6717"
  },
  {
    "url": "assets/js/54.8772d5c1.js",
    "revision": "fc3b25f69ff7bf0d27b46781029de06f"
  },
  {
    "url": "assets/js/55.326e1c43.js",
    "revision": "36cbe4b4a557e71f6a95a8f73cdcbdc5"
  },
  {
    "url": "assets/js/56.61059222.js",
    "revision": "1eb4bb2909815a8cbfa6b8496976e70d"
  },
  {
    "url": "assets/js/57.a87af683.js",
    "revision": "6ac9af7bd1cd4f3ff985b3cf7d50b67d"
  },
  {
    "url": "assets/js/58.fde3d81a.js",
    "revision": "0f4840939d7fa851a37e6c6a78f279c3"
  },
  {
    "url": "assets/js/59.28eb407d.js",
    "revision": "c4b4ed0a4470879dc7885383fe9edd58"
  },
  {
    "url": "assets/js/6.508a846c.js",
    "revision": "341974fd34eaf41eedec21b55d7dfabd"
  },
  {
    "url": "assets/js/60.6b5dd4fd.js",
    "revision": "c06d3b260dc1b5d4fb7074228d4c7c8a"
  },
  {
    "url": "assets/js/61.5a60e632.js",
    "revision": "deba8898f5374278ac41c9bf0bd041ce"
  },
  {
    "url": "assets/js/62.b5b0ccd6.js",
    "revision": "0228b3f3c1e065c7a92614a72c4b0c4e"
  },
  {
    "url": "assets/js/63.e3a80858.js",
    "revision": "1f4f150232f9749ea1d2ea4a7d6dab8c"
  },
  {
    "url": "assets/js/64.acb01f5f.js",
    "revision": "9e74accaa32acbfd46c11c88b68e720b"
  },
  {
    "url": "assets/js/65.2749fedb.js",
    "revision": "f5a5f65a3674d5dfd37b44ce5b11cbb0"
  },
  {
    "url": "assets/js/66.d29c1ffc.js",
    "revision": "6be2fa4e3065487a7668995eeb07a69d"
  },
  {
    "url": "assets/js/67.5488fe45.js",
    "revision": "e1ecd9ccfd56ed1c65da8ab501cd7643"
  },
  {
    "url": "assets/js/68.89f42462.js",
    "revision": "b6a0a218dcc83be4d369dec06925eb44"
  },
  {
    "url": "assets/js/69.f8bb83d6.js",
    "revision": "bb084faa075e5528c360eb97ad126861"
  },
  {
    "url": "assets/js/7.9f58c0f5.js",
    "revision": "c6808306ac52e461010b2e4b5a36f1e0"
  },
  {
    "url": "assets/js/70.a08ee004.js",
    "revision": "ab6d593fb84ffcc6b6ac21234ca99f13"
  },
  {
    "url": "assets/js/71.11253480.js",
    "revision": "a43e823bc25d5331ad5f5b1e490b8036"
  },
  {
    "url": "assets/js/72.73535bd1.js",
    "revision": "8d70a657d683d6836216cdcbad54255b"
  },
  {
    "url": "assets/js/73.04b05355.js",
    "revision": "0517faf1cb0e7af798bcd91854182be9"
  },
  {
    "url": "assets/js/74.2a520abd.js",
    "revision": "ba2dc90051db060a002c74fc817f6ea0"
  },
  {
    "url": "assets/js/75.e5263e91.js",
    "revision": "38e31a064384b01c2cfeb0c6c791eb24"
  },
  {
    "url": "assets/js/76.b69242c8.js",
    "revision": "f137d3770780933615a9d89cbfe41dd8"
  },
  {
    "url": "assets/js/77.0e3fc59a.js",
    "revision": "5ebf87c08a6dd502aba276adb120dac0"
  },
  {
    "url": "assets/js/78.6d68c05b.js",
    "revision": "8c8e11203bdfbd1c0374bce24cfb9782"
  },
  {
    "url": "assets/js/79.acd4d9dd.js",
    "revision": "5156d4d86db443c83000bc96bcdc1ca4"
  },
  {
    "url": "assets/js/80.6840a415.js",
    "revision": "bc4b8a01c725206f7228631a14bf8b24"
  },
  {
    "url": "assets/js/81.3f0eb370.js",
    "revision": "5d4f476edfed4dd00cc67ce1d19b72e7"
  },
  {
    "url": "assets/js/82.e082cb7a.js",
    "revision": "f8472d84782ceaa4a286d7471ae0ec99"
  },
  {
    "url": "assets/js/83.71772ab2.js",
    "revision": "9855cf26f53c690a4378a71aaaea74a6"
  },
  {
    "url": "assets/js/84.37847ee4.js",
    "revision": "a482fe2abc1c3515de1fb1eca124da35"
  },
  {
    "url": "assets/js/85.f6f51325.js",
    "revision": "01e48a0890191926e0183965054d0e07"
  },
  {
    "url": "assets/js/86.f9bc3f96.js",
    "revision": "c49ff724b8d1bea224e628a45749bf28"
  },
  {
    "url": "assets/js/87.eb27d3dc.js",
    "revision": "027ba030441b670e634c9c1b8e386001"
  },
  {
    "url": "assets/js/88.fe218468.js",
    "revision": "8e23023381eadddc89e0941e0fcf20a5"
  },
  {
    "url": "assets/js/89.e101f34a.js",
    "revision": "6a59cf8fdb19111670c50e9d276bb663"
  },
  {
    "url": "assets/js/90.22ee4d9f.js",
    "revision": "b46ee527e1a4e94e25178778d78c15e7"
  },
  {
    "url": "assets/js/91.19547d3f.js",
    "revision": "d1b8f7ec8508b0e5bad9395716cd2840"
  },
  {
    "url": "assets/js/92.ebf5842c.js",
    "revision": "107be5d08eb0831477a061e53ac1b033"
  },
  {
    "url": "assets/js/93.adcc3749.js",
    "revision": "ee0b31d8d6c444f4dd9908482bce8def"
  },
  {
    "url": "assets/js/94.64acfde5.js",
    "revision": "b5b88663a1d18d8187d0a705a72e1ed4"
  },
  {
    "url": "assets/js/95.8da48575.js",
    "revision": "73ae34c93ab4f7f128450cbb6d533386"
  },
  {
    "url": "assets/js/app.dac40e47.js",
    "revision": "e0f37e25e278a882c29fdc3f5633c02d"
  },
  {
    "url": "assets/js/vendors~docsearch.7bcd5e47.js",
    "revision": "fedb91d1e1e352065427033e9b8e5dc1"
  },
  {
    "url": "blog-article/drawing-bed/index.html",
    "revision": "d8ec7c7f0ba6ebfb6a26c1f5b90bf42e"
  },
  {
    "url": "blog-article/drawing-bed/picGo+gitee.html",
    "revision": "82b61958cacd58c6e69ba4c81fae92f7"
  },
  {
    "url": "blog-article/front-end/easyui/easyui-tree-combotree.html",
    "revision": "7d6748677229cc3eb0322952ae05deda"
  },
  {
    "url": "blog-article/front-end/index.html",
    "revision": "76ce87389503e2bba0e9aa4d7f4cb1dd"
  },
  {
    "url": "blog-article/front-end/js/js-array-object-contain-duplicate-values.html",
    "revision": "abbaa2d60a43eda289f462a90f9975dc"
  },
  {
    "url": "blog-article/front-end/vuepress/vuepress-auto-sidebar.html",
    "revision": "0d044f6be2804d522432d7d830e04bc5"
  },
  {
    "url": "blog-article/front-end/vuepress/vuepress-back-last-read.html",
    "revision": "815f2ecf05cd645dfe8c90646a898352"
  },
  {
    "url": "blog-article/front-end/vuepress/vuepress-custom-navigation.html",
    "revision": "62a21315685dc275e0f57bed2d3ec47b"
  },
  {
    "url": "blog-article/front-end/vuepress/vuepress-fix-search.html",
    "revision": "a1e3df220bd9129c92ccb39266017d81"
  },
  {
    "url": "blog-article/front-end/vuepress/vuepress-loads-network-images.html",
    "revision": "330d3964a648db3bafe25cfa9df8252d"
  },
  {
    "url": "blog-article/front-end/vuepress/vuepress-pwa.html",
    "revision": "c520778c704c1cefaf506a479af5487d"
  },
  {
    "url": "blog-article/front-end/vuepress/vuepress-right-sidebar.html",
    "revision": "f12917107a396889bdbf71fc7fbf20d1"
  },
  {
    "url": "blog-article/front-end/vuepress/vuepress-sakura-plugin.html",
    "revision": "ce52d203d086d50cee8c7b1875b9b1bc"
  },
  {
    "url": "blog-article/index.html",
    "revision": "712afaa82fc7e02723cb83d7ffed9570"
  },
  {
    "url": "blog-article/java/basic/byte-array-and-string.html",
    "revision": "0c54e57bfab30ac41a39e56bec024854"
  },
  {
    "url": "blog-article/java/basic/list-string-remove-duplicate.html",
    "revision": "12c0dd629886b5ebc8be3a83bc734c59"
  },
  {
    "url": "blog-article/java/basic/stream-extract-id.html",
    "revision": "12d0b81a3b89b476e30dbfaa317cff14"
  },
  {
    "url": "blog-article/java/index.html",
    "revision": "3160c38ec3610ecc67a744f8af83bd5a"
  },
  {
    "url": "blog-article/java/software/idea-maven.html",
    "revision": "0ebe42bb6eff746e049eb9fd65d791e3"
  },
  {
    "url": "blog-article/java/software/jdk-install.html",
    "revision": "0fa22dbdac1e39d125993e8fbefa3dfa"
  },
  {
    "url": "blog-article/java/software/maven-install.html",
    "revision": "26918f727cc6af884ca8d1abb6359f39"
  },
  {
    "url": "blog-article/java/springboot/ip-blacklist.html",
    "revision": "3b9482a09969f0f841d0d0858761009d"
  },
  {
    "url": "blog-article/mybatis/index.html",
    "revision": "e91285da1770de6dd80d598fe8c8b449"
  },
  {
    "url": "blog-article/mybatis/mybatis-list-map-array.html",
    "revision": "9b288386f8397bb66b9413ab36a5ea67"
  },
  {
    "url": "blog-article/mybatis/mybatis-List-map.html",
    "revision": "64814fdc029bb3998854be5855e4358b"
  },
  {
    "url": "blog-article/mysql/index.html",
    "revision": "cba7986c44afba813023c2372086babc"
  },
  {
    "url": "blog-article/other/index.html",
    "revision": "e9d2213eea8a934d1669d7af1494d940"
  },
  {
    "url": "blog-article/python/first-acquaintance-python.html",
    "revision": "7e72315c112864b9de612876871d3f77"
  },
  {
    "url": "blog-article/python/index.html",
    "revision": "fcbd693834e9dfec0efeb47a05e68661"
  },
  {
    "url": "blog-article/python/python-basic.html",
    "revision": "dc57ae86ec3ee44208678b0b45929772"
  },
  {
    "url": "code-demo/back-end-code/index.html",
    "revision": "720537b8e10ef5bc0a96a4f94e020a8d"
  },
  {
    "url": "code-demo/front-end-code/index.html",
    "revision": "6a58f64bd6b0a1d296c44f1820628e2a"
  },
  {
    "url": "code-demo/index.html",
    "revision": "563f2d6f276498a7ee7ea115d30d9aa9"
  },
  {
    "url": "code-demo/other.html",
    "revision": "6d5d693f72826253f0b69ba7aa32c73b"
  },
  {
    "url": "friendly-chain/index.html",
    "revision": "6432df15db00de60df4b372d2bed8004"
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
    "revision": "e90b2eeec10180bb1e371d5417ea5c10"
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
    "revision": "24b8adaa69103b9179dec648ac93705f"
  },
  {
    "url": "other/index.html",
    "revision": "774b577aa2a9de9e7bd5f1024776b9a8"
  },
  {
    "url": "other/notes-on-tomb-robbery.html",
    "revision": "4db0d1c817ba4c184f24116452b2a21d"
  },
  {
    "url": "read/books/fanshiyaochenzao.html",
    "revision": "1ae188d771b81d73170cb4df58dec803"
  },
  {
    "url": "read/classic-sentences/ruyizhuan.html",
    "revision": "92a5f5e00806c1a1620da07d0c3c5807"
  },
  {
    "url": "read/classic-sentences/saniti.html",
    "revision": "b48224134f1115bc699913f981ce397c"
  },
  {
    "url": "read/classic-sentences/zhenhuanzhuan.html",
    "revision": "c2be44754f8c57bc1f909f238da1a8fb"
  },
  {
    "url": "read/classic-sentences/zhifou.html",
    "revision": "311a52cfe955b654554f7f897ea7c565"
  },
  {
    "url": "read/compile/struggle.html",
    "revision": "b6d10b249e3f392aac115ec07df817d4"
  },
  {
    "url": "read/index.html",
    "revision": "f3d29349ef99e7b5d851bd1803875d0e"
  },
  {
    "url": "study-notes/back-end/index.html",
    "revision": "7becc45a43b97e05451d02c7801c240b"
  },
  {
    "url": "study-notes/back-end/java/collection.html",
    "revision": "5f2d517c5265ca0310997dcf619366e9"
  },
  {
    "url": "study-notes/back-end/java/fenbushi.html",
    "revision": "5e7887868b4488a130741d5a5c51f089"
  },
  {
    "url": "study-notes/back-end/java/index.html",
    "revision": "c4fd62ff1aaa52232ff93ea97838b450"
  },
  {
    "url": "study-notes/back-end/java/javase.html",
    "revision": "5fcf02359cadd43fc6042483f5bd547e"
  },
  {
    "url": "study-notes/back-end/java/javathread.html",
    "revision": "43c2ee5a71d3a6381fc646edbb9cd12c"
  },
  {
    "url": "study-notes/back-end/java/jvm.html",
    "revision": "c5fe1ea448bc7755823168cabb0b8335"
  },
  {
    "url": "study-notes/back-end/java/mybatis.html",
    "revision": "51243f6ffc6ef52174757f9d817e9755"
  },
  {
    "url": "study-notes/back-end/java/mysql.html",
    "revision": "cdbd3f3472493905adea781be19390f0"
  },
  {
    "url": "study-notes/back-end/java/network.html",
    "revision": "0fd3caf25c847634da4cb100431fabf9"
  },
  {
    "url": "study-notes/back-end/java/nixi.html",
    "revision": "79d6650aaa327ec232d00cf6b2768ece"
  },
  {
    "url": "study-notes/back-end/java/os.html",
    "revision": "797a124871da2d4e50fd7716ccf2aac2"
  },
  {
    "url": "study-notes/back-end/java/redis.html",
    "revision": "80a958d3d2163f8bdb6892d878cefcd3"
  },
  {
    "url": "study-notes/back-end/java/rocketmq.html",
    "revision": "552f5b79bb496e9e6e14cbe6b0cd26f7"
  },
  {
    "url": "study-notes/back-end/java/spring.html",
    "revision": "70e8d2254ef4847f1ebf3f85843bdeb4"
  },
  {
    "url": "study-notes/back-end/java/weifuwu.html",
    "revision": "0b7c2bb5102a482851b5764dadcd892a"
  },
  {
    "url": "study-notes/back-end/python/index.html",
    "revision": "555ef9e3380a4ce4049d58f1dbf9c3ad"
  },
  {
    "url": "study-notes/common/common-tools/index.html",
    "revision": "616c572ecb7ee295c6151a090fc8f3db"
  },
  {
    "url": "study-notes/front-end/html/basic/index.html",
    "revision": "ef8778f5d399feb10e8adef22b328111"
  },
  {
    "url": "study-notes/front-end/html/index.html",
    "revision": "6e36675d4e23c671dcadda590a1cb2c0"
  },
  {
    "url": "study-notes/front-end/index.html",
    "revision": "9e1ddbd971e7d34f36aceead6f4a95ea"
  },
  {
    "url": "study-notes/front-end/javaScript/index.html",
    "revision": "79c6fc571506635ce2902ed47df55e47"
  },
  {
    "url": "study-notes/index.html",
    "revision": "140d9824b37f0edc0811d5f5d16d7549"
  },
  {
    "url": "vuepress-custom-content-width/index.html",
    "revision": "1a7c98fc256615b5e173a7053f4a275f"
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
