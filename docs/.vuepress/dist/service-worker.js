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
    "revision": "89684b0fb483b530927e1fb9e507e4fb"
  },
  {
    "url": "aboutme/index.html",
    "revision": "5b9d39e5307d2634d9b8c0f959d1b542"
  },
  {
    "url": "assets/css/0.styles.1bf64073.css",
    "revision": "4794647782fc00617da8ad5da3eaebc1"
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
    "url": "assets/js/1.f96aea38.js",
    "revision": "328756ee8648dd5c9d5d105af961416f"
  },
  {
    "url": "assets/js/10.19d26c8e.js",
    "revision": "b7a03b354fdd2e750a7a765cd5517096"
  },
  {
    "url": "assets/js/11.3fcac4c1.js",
    "revision": "496ffa08ff4596bf2d2599bccf1abc97"
  },
  {
    "url": "assets/js/12.a66f929b.js",
    "revision": "8f5d4b00647ca8730cbf827e6bb5d7e3"
  },
  {
    "url": "assets/js/13.aef69fc6.js",
    "revision": "7a0ca46ffaf8e380e109a8db0a0089b2"
  },
  {
    "url": "assets/js/14.4fbf4491.js",
    "revision": "f76226665216a20814cf10071798170a"
  },
  {
    "url": "assets/js/15.8fdb9298.js",
    "revision": "9f25403e10604c9d226f797feadfddbc"
  },
  {
    "url": "assets/js/16.f0f3b7c4.js",
    "revision": "3f03742caf2e2db49479f3049d02ca29"
  },
  {
    "url": "assets/js/17.52713d65.js",
    "revision": "6f690cb0213d4341ac4d5cfbeab6828b"
  },
  {
    "url": "assets/js/18.a80a3904.js",
    "revision": "da5a0eae4bcd71730ceeb65d1d9a3299"
  },
  {
    "url": "assets/js/19.3126a92c.js",
    "revision": "c2c8b664ca0d3fb389f695f7e3c7889d"
  },
  {
    "url": "assets/js/2.749997fe.js",
    "revision": "efec89d36abc2c7e8751fc4ce267bb9d"
  },
  {
    "url": "assets/js/20.1d871025.js",
    "revision": "798c2d507e5806ce8e816f810bce950b"
  },
  {
    "url": "assets/js/21.255ca6e0.js",
    "revision": "f198b204989a8d5e96e340b6b68fd50f"
  },
  {
    "url": "assets/js/22.d3ee2dc1.js",
    "revision": "f4a90c5f2144a8a67706080fba39ebfd"
  },
  {
    "url": "assets/js/23.ed8a65d0.js",
    "revision": "cb734f5d5ee49ca6aaeaee0f1b59f543"
  },
  {
    "url": "assets/js/24.8a68de59.js",
    "revision": "82f9d1260605b48db2adc4e9719aea0b"
  },
  {
    "url": "assets/js/25.ab4ffe6b.js",
    "revision": "69cbe81365286a5bb20173213c3917d1"
  },
  {
    "url": "assets/js/26.5ca5d693.js",
    "revision": "f4d51cc66a4e12fcc6f3ec7c95114463"
  },
  {
    "url": "assets/js/27.0c9e9e12.js",
    "revision": "5b41674b04d4dc2845177318deea2532"
  },
  {
    "url": "assets/js/28.52bf6fd2.js",
    "revision": "89221f0ded8c1eaf0a028fa28d91ffd5"
  },
  {
    "url": "assets/js/29.94ed2b18.js",
    "revision": "18af51f744b8ed1d82cfdd96dcdc638e"
  },
  {
    "url": "assets/js/3.94f3f0ba.js",
    "revision": "2a7b0db3f7b63345e7d8934b5044dc4e"
  },
  {
    "url": "assets/js/30.bf9bcb89.js",
    "revision": "1e3115597d69f5cd0223fee33dff7128"
  },
  {
    "url": "assets/js/31.1198dbed.js",
    "revision": "f08eb3fd97814fb5b81760fa567dca08"
  },
  {
    "url": "assets/js/32.8ad2ae73.js",
    "revision": "eb237a191989b998eab2554c63cf495c"
  },
  {
    "url": "assets/js/33.83bfa77b.js",
    "revision": "1232bd776b144314285e72c8dcccaa0c"
  },
  {
    "url": "assets/js/34.f7339b7c.js",
    "revision": "b1a74e8556c74d61fd8ea2e85d6c5de2"
  },
  {
    "url": "assets/js/35.7f41edb0.js",
    "revision": "9515d063af8da56039e85bcf5cd7e7cd"
  },
  {
    "url": "assets/js/36.479e92a2.js",
    "revision": "0f448a8b0354640c2e1ecaf6823dc708"
  },
  {
    "url": "assets/js/37.0c8be41c.js",
    "revision": "43b27a040f0d0acc4d51d456e09d6af2"
  },
  {
    "url": "assets/js/38.8966e95a.js",
    "revision": "3a643171633aaaabdade4fc588a4813e"
  },
  {
    "url": "assets/js/39.6c28e656.js",
    "revision": "91454833be21f58098828a6a1f89ef0e"
  },
  {
    "url": "assets/js/4.dfaec272.js",
    "revision": "f115471324135cb7713039656387df1f"
  },
  {
    "url": "assets/js/40.e1b7acae.js",
    "revision": "0121348adc17f315cbbe2ac938331940"
  },
  {
    "url": "assets/js/41.8414c977.js",
    "revision": "43491fffdf3d3cb85c2cbf86df9601a4"
  },
  {
    "url": "assets/js/42.819cd3c9.js",
    "revision": "ed3da453ef8ce58517f07bdb565d9d82"
  },
  {
    "url": "assets/js/43.2cb8fbc3.js",
    "revision": "0d2a2416cc2d1ccc7da985b0ac987dc6"
  },
  {
    "url": "assets/js/44.47d5fc1b.js",
    "revision": "b1ae63a151ec8168de22b005596ad81b"
  },
  {
    "url": "assets/js/45.194e94f4.js",
    "revision": "859ae9624e5126002d7dc0a805bd656b"
  },
  {
    "url": "assets/js/46.4d882f31.js",
    "revision": "73551536692f0afc4d7971c5d48bb340"
  },
  {
    "url": "assets/js/47.4cbedd5a.js",
    "revision": "5a5d46c2f89e9467e983eb47661d0b62"
  },
  {
    "url": "assets/js/48.b1fd443c.js",
    "revision": "82debd4a7e416afef0a5390476618c4a"
  },
  {
    "url": "assets/js/49.53514e04.js",
    "revision": "445c29f999c6556c208af81c14b7d659"
  },
  {
    "url": "assets/js/5.a5fd9bc1.js",
    "revision": "6d5f66cce5042b57fda7b5b96d41adb0"
  },
  {
    "url": "assets/js/50.8200cbe4.js",
    "revision": "33e110625ef84e2aa7596b592ae2d740"
  },
  {
    "url": "assets/js/51.908ad166.js",
    "revision": "9ccec232aad60465d251f43a4cdcc4ab"
  },
  {
    "url": "assets/js/52.597c1bd5.js",
    "revision": "6f02f7cbb4b95f70db49cc22aa713456"
  },
  {
    "url": "assets/js/53.dea1ada4.js",
    "revision": "a9ff5a03edce57b44e280a31f72a5371"
  },
  {
    "url": "assets/js/54.35f7ac17.js",
    "revision": "56abf77bddba9bb070ab53afbb486f7b"
  },
  {
    "url": "assets/js/55.d0853bba.js",
    "revision": "fb6dfc8f2c84cb95185b19c00b6350eb"
  },
  {
    "url": "assets/js/56.48c9ed29.js",
    "revision": "c2df8f5a88058369501217b88a009ae5"
  },
  {
    "url": "assets/js/57.c99cff50.js",
    "revision": "5324f535f64949dd081d65bcf9327f62"
  },
  {
    "url": "assets/js/58.381aa74c.js",
    "revision": "651b9a2edcc32f6fc6f023ba6182494b"
  },
  {
    "url": "assets/js/59.456afcf8.js",
    "revision": "80f8e46478caa024b3bc7b7c4faec124"
  },
  {
    "url": "assets/js/6.519fe0b1.js",
    "revision": "1ce841424468888f2cde3fc5a5830e19"
  },
  {
    "url": "assets/js/60.b1e5c4ad.js",
    "revision": "654c905416f29c90550bc088684f8874"
  },
  {
    "url": "assets/js/61.ff88d171.js",
    "revision": "c598dd28bda0a4309cd613d6119a2ce9"
  },
  {
    "url": "assets/js/62.bdba44f8.js",
    "revision": "0e297c510f79b69ac8409445c9ec9ab1"
  },
  {
    "url": "assets/js/63.d65e867e.js",
    "revision": "58aeddcd486b389f2b1c696823b4c7ec"
  },
  {
    "url": "assets/js/64.f7d9f2a7.js",
    "revision": "5e0549bf9ccc55c98b78b18d1e16d477"
  },
  {
    "url": "assets/js/65.b997d6ab.js",
    "revision": "21138916b49de1733f412873c266f4e8"
  },
  {
    "url": "assets/js/66.1672bfad.js",
    "revision": "c3d4f4aa8daf1a8edc07a2ea79cce7fd"
  },
  {
    "url": "assets/js/67.1bc8debd.js",
    "revision": "50a2ce9751e6967d4e9f17042519357b"
  },
  {
    "url": "assets/js/68.1f05b2ba.js",
    "revision": "c702cd68283491d6f7d384d663284c44"
  },
  {
    "url": "assets/js/69.1e10cd3a.js",
    "revision": "231b976840f241e6070084b30e1cfe07"
  },
  {
    "url": "assets/js/7.4390378b.js",
    "revision": "a761b14f9c78e3728b34aa8c2fda5d04"
  },
  {
    "url": "assets/js/70.c409757a.js",
    "revision": "bb4d7f90b47ac7b2926974fca2c5e2ac"
  },
  {
    "url": "assets/js/71.0d1177fc.js",
    "revision": "ec38f43ad75800f3570e2a3330fa450e"
  },
  {
    "url": "assets/js/72.0e2e777a.js",
    "revision": "fd6000d13f67761eeec27f74fda3149c"
  },
  {
    "url": "assets/js/73.d9968630.js",
    "revision": "0eb87fadb88b17269a19cf55962f3e60"
  },
  {
    "url": "assets/js/app.831fbd8f.js",
    "revision": "ca1460bf6cb30035570a0c94fd262d4e"
  },
  {
    "url": "assets/js/vendors~docsearch.c0b6abca.js",
    "revision": "b402d2bc893a4d169f4f431a43b9a54d"
  },
  {
    "url": "blog-article/drawing-bed/index.html",
    "revision": "e230037d8996f5aa77b49189f4a3e5a9"
  },
  {
    "url": "blog-article/drawing-bed/picGo+gitee.html",
    "revision": "79a7e18b5cb1dcf2be7f14ecc75b36d9"
  },
  {
    "url": "blog-article/front-end/easyui-tree-combotree.html",
    "revision": "4f8ab9f568ab098dd200a018a723c123"
  },
  {
    "url": "blog-article/front-end/index.html",
    "revision": "e5e37a26e5ee2983eba57896b71344d1"
  },
  {
    "url": "blog-article/front-end/js-array-object-contain-duplicate-values.html",
    "revision": "2d4044af79062c6efbbd41be7d2a2ddb"
  },
  {
    "url": "blog-article/front-end/vuepress-auto-sidebar.html",
    "revision": "489ac2060676d74f4dfec3182a738a53"
  },
  {
    "url": "blog-article/front-end/vuePress-loads-network-images.html",
    "revision": "8d7eb5fe5eff4f8a1bdebdfae3fb2764"
  },
  {
    "url": "blog-article/index.html",
    "revision": "b9e92dcb870003adf840f2e85e735721"
  },
  {
    "url": "blog-article/java/index.html",
    "revision": "8f150486b07f0ee52e3841f5358734e1"
  },
  {
    "url": "blog-article/mybatis/index.html",
    "revision": "62847431a677ec15d822fda42cb1dc59"
  },
  {
    "url": "blog-article/mybatis/mybatis-list-map-array.html",
    "revision": "d2376e95eb5620e03899a7a47c662814"
  },
  {
    "url": "blog-article/mybatis/mybatis-List-map.html",
    "revision": "8d32d1dcf900c44eb0816ec673d1addd"
  },
  {
    "url": "blog-article/mysql/index.html",
    "revision": "23ae31467df97b205db6522f2897d689"
  },
  {
    "url": "blog-article/other/index.html",
    "revision": "c824e040f71cbfb21b376303c84f5cd3"
  },
  {
    "url": "blog-article/python/index.html",
    "revision": "5c9c867a9f81d76618b8a90692ce0cfb"
  },
  {
    "url": "code-demo/back-end-code/index.html",
    "revision": "5db7c06c0fbd42b71bfcbd3d7d85406f"
  },
  {
    "url": "code-demo/front-end-code/index.html",
    "revision": "7e4bbcf5cd6f7265da7e0b89f9745891"
  },
  {
    "url": "code-demo/index.html",
    "revision": "7c56e39eac605218f43416680f4fa045"
  },
  {
    "url": "code-demo/other.html",
    "revision": "5ac38b2787f3492a716462179aba5ce9"
  },
  {
    "url": "friendly-chain/index.html",
    "revision": "25185ad11cac85e654a5842504a260e1"
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
    "revision": "a310ce2e47316c8aecc6aeb07756b06f"
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
    "revision": "117fac137b8bf41cc68d18810c4cb23a"
  },
  {
    "url": "other/index.html",
    "revision": "a36e9acb0fb71ce858e0018e94cd03d9"
  },
  {
    "url": "other/notes-on-tomb-robbery.html",
    "revision": "014278f7a34216cd4304831c3070fb17"
  },
  {
    "url": "read/index.html",
    "revision": "5e9f836b600510cedd30bd6b65295387"
  },
  {
    "url": "study-notes/back-end/index.html",
    "revision": "7263f4a5eb469b52fe3ad4138dd430ae"
  },
  {
    "url": "study-notes/back-end/java/collection.html",
    "revision": "be2bf1f6397df25f2146b84326de9fc6"
  },
  {
    "url": "study-notes/back-end/java/fenbushi.html",
    "revision": "a219133d705f2e72302a04f03c4b6636"
  },
  {
    "url": "study-notes/back-end/java/index.html",
    "revision": "65c6930dd4921a43ac2c56ce59ac8651"
  },
  {
    "url": "study-notes/back-end/java/javase.html",
    "revision": "930c52713719739638e58835ce677a35"
  },
  {
    "url": "study-notes/back-end/java/javathread.html",
    "revision": "5a52b5bd24e696829432a1c154ab417c"
  },
  {
    "url": "study-notes/back-end/java/jvm.html",
    "revision": "d74a80e71d64330df09b0666b4cd5a14"
  },
  {
    "url": "study-notes/back-end/java/mybatis.html",
    "revision": "392a4395bc1752a4789e5d3834021807"
  },
  {
    "url": "study-notes/back-end/java/mysql.html",
    "revision": "54c3d7c54b91cee00513f2f697592b8b"
  },
  {
    "url": "study-notes/back-end/java/network.html",
    "revision": "d96bcb4439274b16ad0aa464436ed803"
  },
  {
    "url": "study-notes/back-end/java/nixi.html",
    "revision": "14f164d1cca228e65993240092363565"
  },
  {
    "url": "study-notes/back-end/java/os.html",
    "revision": "a27d2fcfb9dab41cf3c5beeec700ea1b"
  },
  {
    "url": "study-notes/back-end/java/redis.html",
    "revision": "49e41ecdaa9dcc9694fb8ce7bc2d7dd9"
  },
  {
    "url": "study-notes/back-end/java/rocketmq.html",
    "revision": "f0e1909770e89eb4822379b7926509be"
  },
  {
    "url": "study-notes/back-end/java/spring.html",
    "revision": "0ff024b6cdaf50bf1e5085822210bfb7"
  },
  {
    "url": "study-notes/back-end/java/weifuwu.html",
    "revision": "6b9762354bed8d067a77ad30619ddf25"
  },
  {
    "url": "study-notes/back-end/python/index.html",
    "revision": "d0b7cb468cff605cf94f5cd658503568"
  },
  {
    "url": "study-notes/common/common-tools/index.html",
    "revision": "e112e63adb5a90e800b9b0c6b37098a3"
  },
  {
    "url": "study-notes/front-end/html/basic/index.html",
    "revision": "905f184395b5c52ffd61c768a0e95433"
  },
  {
    "url": "study-notes/front-end/html/index.html",
    "revision": "1d5bc62479f13dddfea48a4c9a47b043"
  },
  {
    "url": "study-notes/front-end/index.html",
    "revision": "2eff4ef4998200ed7abb603d792f70b1"
  },
  {
    "url": "study-notes/front-end/javaScript/index.html",
    "revision": "59d77dd3895162400a9c3a2c1e517fff"
  },
  {
    "url": "study-notes/index.html",
    "revision": "bd0bfe67c1420f5bdeaffa55ef10f8ce"
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
