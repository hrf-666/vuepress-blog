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
    "revision": "6b811513953ee4b46e3540bcd2f670f9"
  },
  {
    "url": "aboutme/index.html",
    "revision": "07c5a8b6fd353ca4aceb64817de9c7fa"
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
    "url": "assets/js/1.a4c9c66f.js",
    "revision": "da6993eab4cfc7ccefc163f61a8bc8a7"
  },
  {
    "url": "assets/js/10.53ae7a03.js",
    "revision": "22fd630a9337c1fdf7ca05f792eb7db7"
  },
  {
    "url": "assets/js/11.641321ae.js",
    "revision": "cefe2063526b7c302228fd2629b3540a"
  },
  {
    "url": "assets/js/12.526e8975.js",
    "revision": "39875ee0cd975561ae47d93b6e36d828"
  },
  {
    "url": "assets/js/13.93c5bf6d.js",
    "revision": "4b0f36c2fabb85acd0be03b5dd94e652"
  },
  {
    "url": "assets/js/14.33b67e3c.js",
    "revision": "08e57b169c506269ac3a22dc689b817d"
  },
  {
    "url": "assets/js/15.fadf33db.js",
    "revision": "ba3fc7bf49e4e4c9050edd9df4d6efbd"
  },
  {
    "url": "assets/js/16.4f9d2f9e.js",
    "revision": "713263fe9aef78d047f9aba9f708ba00"
  },
  {
    "url": "assets/js/17.e02fbbf0.js",
    "revision": "30347fdc8b5a193f67df4a1a044c7224"
  },
  {
    "url": "assets/js/18.a80a3904.js",
    "revision": "da5a0eae4bcd71730ceeb65d1d9a3299"
  },
  {
    "url": "assets/js/19.898823cb.js",
    "revision": "ca6e9bc5c836e342f37ec475c5c48c1d"
  },
  {
    "url": "assets/js/2.e8d52134.js",
    "revision": "2b774da2d1925a5270f347de8f51df9a"
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
    "url": "assets/js/23.1c501cb1.js",
    "revision": "3250198b92ff0c4299e59c66d5ff1c0c"
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
    "url": "assets/js/27.63a6e616.js",
    "revision": "6e98d60a297d34aa498df98e6dc95260"
  },
  {
    "url": "assets/js/28.5ec6e5e9.js",
    "revision": "a9a8d137a98a9d5dd04e17d728c330b4"
  },
  {
    "url": "assets/js/29.3ec6b7ef.js",
    "revision": "38c7e32b02bca6733224a3733d0292aa"
  },
  {
    "url": "assets/js/3.e4de6cba.js",
    "revision": "b909849beac2cf227610047bd99ed8b1"
  },
  {
    "url": "assets/js/30.62c396e8.js",
    "revision": "c5878a672b2d9d647b58c48d3620c9a8"
  },
  {
    "url": "assets/js/31.a1fb88df.js",
    "revision": "8fbdaa03e386f88c45c271e5c6e3d8de"
  },
  {
    "url": "assets/js/32.fc965f20.js",
    "revision": "0e92250918142d5cb48046f6e0da99bb"
  },
  {
    "url": "assets/js/33.16262693.js",
    "revision": "a9c7dfb95490eba59407a2ffa23bb364"
  },
  {
    "url": "assets/js/34.c843f1b8.js",
    "revision": "c528bb0c4b73916815c01c17a4286d0d"
  },
  {
    "url": "assets/js/35.b932c4a5.js",
    "revision": "fd9b51cdf82dfcaa1c240a875985baa6"
  },
  {
    "url": "assets/js/36.2d05b479.js",
    "revision": "4fa4672d994001262d42d4a34da23632"
  },
  {
    "url": "assets/js/37.4e87b9f9.js",
    "revision": "3ac416334f526039a4bb75a78592186b"
  },
  {
    "url": "assets/js/38.ff5a9848.js",
    "revision": "0786c0bab37cd7099b8555bcfa3aa5ad"
  },
  {
    "url": "assets/js/39.1242467f.js",
    "revision": "61e4b437b927342e1ff63bba158dfa2d"
  },
  {
    "url": "assets/js/4.dfaec272.js",
    "revision": "f115471324135cb7713039656387df1f"
  },
  {
    "url": "assets/js/40.d9922a80.js",
    "revision": "22b9a6e0fdf06899c81f2db8591403ec"
  },
  {
    "url": "assets/js/41.86956326.js",
    "revision": "d53a8ef532f2c85e01021c49482b19b5"
  },
  {
    "url": "assets/js/42.1bfa419a.js",
    "revision": "dc8ab32d02bfeb403115c1828c483321"
  },
  {
    "url": "assets/js/43.c04566b0.js",
    "revision": "6de1c9595b2765b765d5e970848afbe4"
  },
  {
    "url": "assets/js/44.80914e8c.js",
    "revision": "7a3664da9eff34134b03fcf676c9764c"
  },
  {
    "url": "assets/js/45.9c2dc42a.js",
    "revision": "e4aff7286096089c2b87ee0eee9b5062"
  },
  {
    "url": "assets/js/46.dcbb611b.js",
    "revision": "efea6fce9ca6d438d780a235a7edfe9d"
  },
  {
    "url": "assets/js/47.7542b569.js",
    "revision": "0bc9dd308decb3e675692f52478e72d2"
  },
  {
    "url": "assets/js/48.68158540.js",
    "revision": "f22b095d75b2b6b38e83402319a8fbc6"
  },
  {
    "url": "assets/js/49.e2f7c7ff.js",
    "revision": "56f8546effb61940b69cb1ccc9483e9d"
  },
  {
    "url": "assets/js/5.a5fd9bc1.js",
    "revision": "6d5f66cce5042b57fda7b5b96d41adb0"
  },
  {
    "url": "assets/js/50.702ffea9.js",
    "revision": "8f652d5f50b3032df2d15219347d6f69"
  },
  {
    "url": "assets/js/51.898531d9.js",
    "revision": "ffefce845d62948360004e490ccf8837"
  },
  {
    "url": "assets/js/52.7ce5ef07.js",
    "revision": "a3570b3e1cc4c1f57b16ac7fb7797593"
  },
  {
    "url": "assets/js/53.46dc7026.js",
    "revision": "c67c3b8febd2f379da12d8239cb3f984"
  },
  {
    "url": "assets/js/54.2aacf8dd.js",
    "revision": "456d116f202042d1aec85714ca5a9fba"
  },
  {
    "url": "assets/js/55.3d14121c.js",
    "revision": "24f8aea83e1819ebf3a37515bad1b0e7"
  },
  {
    "url": "assets/js/56.9e8e39a6.js",
    "revision": "084b8e893aa566723449ed2ad0adc5e8"
  },
  {
    "url": "assets/js/57.18ec7a52.js",
    "revision": "80fb0f11c658d0a765f6e3b5d165610c"
  },
  {
    "url": "assets/js/58.c8cf81ce.js",
    "revision": "bf63edd7118549fa878dd1ff7ac991d0"
  },
  {
    "url": "assets/js/59.84794f80.js",
    "revision": "739d5585c35837cdce4f232a81e8e177"
  },
  {
    "url": "assets/js/6.519fe0b1.js",
    "revision": "1ce841424468888f2cde3fc5a5830e19"
  },
  {
    "url": "assets/js/60.6fbfb9a7.js",
    "revision": "e23c3d5ea604a5f5a6c07b321e8d5ff5"
  },
  {
    "url": "assets/js/61.b89634db.js",
    "revision": "f812afe5839f99743e2613c7a19eaabf"
  },
  {
    "url": "assets/js/62.7e41fa99.js",
    "revision": "ab4d5b19276f85637a6bfdd196d487af"
  },
  {
    "url": "assets/js/63.c0f831aa.js",
    "revision": "a8170ddf3179b8009b2e91569221710f"
  },
  {
    "url": "assets/js/64.8ebad772.js",
    "revision": "24abba41de54caca40502e278b3c04ba"
  },
  {
    "url": "assets/js/65.35ff6326.js",
    "revision": "741245dbe723522d6d8f3d0ec59d45a3"
  },
  {
    "url": "assets/js/66.d98fbeea.js",
    "revision": "a29a2edc14bb3fe05cab13e7adfef426"
  },
  {
    "url": "assets/js/67.02f53631.js",
    "revision": "93f41ab2f9008855a0157d32ef7196b5"
  },
  {
    "url": "assets/js/68.871a712d.js",
    "revision": "60760aa91b12405dfa00a7887439efb1"
  },
  {
    "url": "assets/js/69.c0cad6a9.js",
    "revision": "99ca1dfa635884bfc15d73ccd22efa87"
  },
  {
    "url": "assets/js/7.4390378b.js",
    "revision": "a761b14f9c78e3728b34aa8c2fda5d04"
  },
  {
    "url": "assets/js/70.8f6d841c.js",
    "revision": "91ccffbe0d7b184a220f0a7b7adc0e68"
  },
  {
    "url": "assets/js/71.33a858ce.js",
    "revision": "d74d2218c1cb6b0b28b537eed9dc61a7"
  },
  {
    "url": "assets/js/72.99986f22.js",
    "revision": "d1541219c4a5f50770cb3b8add6e0d5a"
  },
  {
    "url": "assets/js/app.45d6aa53.js",
    "revision": "07a3b3e94168063b8d928c066310e9ed"
  },
  {
    "url": "assets/js/vendors~docsearch.c0b6abca.js",
    "revision": "b402d2bc893a4d169f4f431a43b9a54d"
  },
  {
    "url": "blog-article/drawing-bed/index.html",
    "revision": "2de5c4099bb95f35291f257bf1182ad2"
  },
  {
    "url": "blog-article/drawing-bed/picGo+gitee.html",
    "revision": "930ed4abb32b10d396629506c5f9f62f"
  },
  {
    "url": "blog-article/front-end/easyui-tree-combotree.html",
    "revision": "ce540196bc8ae4b8ba3b8dfd6b9f501a"
  },
  {
    "url": "blog-article/front-end/index.html",
    "revision": "12b8fdea36be3eb321da8e6a27642d92"
  },
  {
    "url": "blog-article/front-end/vuePress-loads-network-images.html",
    "revision": "4b15b4705dee315187912e67e3b90a8e"
  },
  {
    "url": "blog-article/index.html",
    "revision": "3d20322f0055693baba6f5dff5ae03e6"
  },
  {
    "url": "blog-article/java/index.html",
    "revision": "c3df8f94902d555b77df3dcf4d36e600"
  },
  {
    "url": "blog-article/mybatis/index.html",
    "revision": "ff3ace1c85678c72f862d82e665d4304"
  },
  {
    "url": "blog-article/mybatis/mybatis-list-map-array.html",
    "revision": "aa7fa1754f0fa5e99b3d7439ca8fc8a6"
  },
  {
    "url": "blog-article/mybatis/mybatis-List-map.html",
    "revision": "19bacebadffb5f5f2dd78b8de265ef6d"
  },
  {
    "url": "blog-article/mysql/index.html",
    "revision": "9b14ea78c5acc0de226f01cefb794bae"
  },
  {
    "url": "blog-article/other/index.html",
    "revision": "6eec7140f4f2ff6f5af26a374b78accf"
  },
  {
    "url": "blog-article/python/index.html",
    "revision": "313757a5aa97b611ac4ab3b6413a122e"
  },
  {
    "url": "code-demo/back-end-code/index.html",
    "revision": "1886117d519a732c08a2d1b686817e26"
  },
  {
    "url": "code-demo/front-end-code/index.html",
    "revision": "97ecaefa0e47c33ba30811ce55a42e72"
  },
  {
    "url": "code-demo/index.html",
    "revision": "3dd7cd08aea96460a0374b49f2af9de9"
  },
  {
    "url": "code-demo/other.html",
    "revision": "1b849aaa2b33a32c197b9c228194fb00"
  },
  {
    "url": "config.html",
    "revision": "bc223ffb5ca8223128c9d4f7d1c2d8f6"
  },
  {
    "url": "friendly-chain/index.html",
    "revision": "fedafd70ff30c054f6692083e01abe90"
  },
  {
    "url": "index.html",
    "revision": "c167863381522935e9ea2ebc4c84b00d"
  },
  {
    "url": "navigation/index.html",
    "revision": "76e95ef840622856168af6fca4a3d73c"
  },
  {
    "url": "other/index.html",
    "revision": "14bb51acb6b5a2e7a47d7fef09e5b048"
  },
  {
    "url": "other/notes-on-tomb-robbery.html",
    "revision": "7f8d3d85d34f7f7dd7c08c8fb7e2bf97"
  },
  {
    "url": "read/index.html",
    "revision": "cfb9193f97598829e4655cf084b14224"
  },
  {
    "url": "study-notes/back-end/index.html",
    "revision": "1973fee63475d0ed0840bb376be34011"
  },
  {
    "url": "study-notes/back-end/java/collection.html",
    "revision": "f99bdfd9aeabc5ef235638d8c6b16d7b"
  },
  {
    "url": "study-notes/back-end/java/fenbushi.html",
    "revision": "537f65aaf4f3542d0e64b814b397a5f6"
  },
  {
    "url": "study-notes/back-end/java/index.html",
    "revision": "88f746999c3c31519c40aaae718519a4"
  },
  {
    "url": "study-notes/back-end/java/javase.html",
    "revision": "16a9ca057f71fbb8b13fa57014c669e4"
  },
  {
    "url": "study-notes/back-end/java/javathread.html",
    "revision": "311c28d6f9e71ce2976fcd5308fcc040"
  },
  {
    "url": "study-notes/back-end/java/jvm.html",
    "revision": "a75a803f008c601d63eac8ed94f2af78"
  },
  {
    "url": "study-notes/back-end/java/mybatis.html",
    "revision": "e8dec268461f75653f481209898e3a9b"
  },
  {
    "url": "study-notes/back-end/java/mysql.html",
    "revision": "bfbda3c152b5745ee98dadcf8d4afcb2"
  },
  {
    "url": "study-notes/back-end/java/network.html",
    "revision": "f1d82abc3be6cadba4058025e7efb9fc"
  },
  {
    "url": "study-notes/back-end/java/nixi.html",
    "revision": "4934cdf227596dda2013d9552adf9cad"
  },
  {
    "url": "study-notes/back-end/java/os.html",
    "revision": "81fbd0569d3d7b40f1d33ff4d15fadc7"
  },
  {
    "url": "study-notes/back-end/java/redis.html",
    "revision": "fa6e1d10601c4d7c86996fe5620b6590"
  },
  {
    "url": "study-notes/back-end/java/rocketmq.html",
    "revision": "d6597786c640b4ee2f941dfb68573ab9"
  },
  {
    "url": "study-notes/back-end/java/spring.html",
    "revision": "d16157702c5b5ef8517b928f0401ae3e"
  },
  {
    "url": "study-notes/back-end/java/weifuwu.html",
    "revision": "7da93f1a5c292e66f8389446de4b5a1c"
  },
  {
    "url": "study-notes/back-end/python/index.html",
    "revision": "b3f61990b5411a3a222726c370a6e1e4"
  },
  {
    "url": "study-notes/common/common-tools/index.html",
    "revision": "d60a168ab83c82b86452fc6e987d905a"
  },
  {
    "url": "study-notes/front-end/html/basic/index.html",
    "revision": "d0828c9c5ebe204548bf3942bca71d0e"
  },
  {
    "url": "study-notes/front-end/html/index.html",
    "revision": "27c2957c1d7ce16c1c5049bd9983c27d"
  },
  {
    "url": "study-notes/front-end/index.html",
    "revision": "68103aedc3d213ec1835fc7ba3c92e6c"
  },
  {
    "url": "study-notes/front-end/javaScript/index.html",
    "revision": "03d00317e196102526c0173034baab93"
  },
  {
    "url": "study-notes/index.html",
    "revision": "6dedc7943b1d53d7153f36f732b17393"
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
