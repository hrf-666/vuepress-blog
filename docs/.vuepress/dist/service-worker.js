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
    "revision": "8880fc4d27a23f9feb417a25ac2d7cee"
  },
  {
    "url": "aboutme/index.html",
    "revision": "37036d40761959b62f63500bc5107f6d"
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
    "url": "assets/js/24.edc90165.js",
    "revision": "70358c60b40846fed7c80991a9202288"
  },
  {
    "url": "assets/js/25.ab4ffe6b.js",
    "revision": "69cbe81365286a5bb20173213c3917d1"
  },
  {
    "url": "assets/js/26.71c83563.js",
    "revision": "b7c11868889bd3a398e8593dd57ec34f"
  },
  {
    "url": "assets/js/27.1690c15c.js",
    "revision": "ea882807ddbc52033436143a83c4357a"
  },
  {
    "url": "assets/js/28.ec6af6d2.js",
    "revision": "d15c1116856fe891d54449af7a30b049"
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
    "url": "assets/js/30.bf9bcb89.js",
    "revision": "1e3115597d69f5cd0223fee33dff7128"
  },
  {
    "url": "assets/js/31.576ff8d4.js",
    "revision": "c8a4944da2539308be5ad8e1559e57ca"
  },
  {
    "url": "assets/js/32.08838d7f.js",
    "revision": "268d3773aa25a9c965fc0a51112b8b20"
  },
  {
    "url": "assets/js/33.16262693.js",
    "revision": "a9c7dfb95490eba59407a2ffa23bb364"
  },
  {
    "url": "assets/js/34.9e22d155.js",
    "revision": "1ba3b799bbfee145f656d16d76ed7084"
  },
  {
    "url": "assets/js/35.3e492482.js",
    "revision": "523e531a709d575683b06f822353b0fa"
  },
  {
    "url": "assets/js/36.5cb20236.js",
    "revision": "021cd36ebffba54c9a51f63a691c62ea"
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
    "url": "assets/js/39.6913feba.js",
    "revision": "0dc72eb04de398e7bf3f28988b1e8166"
  },
  {
    "url": "assets/js/4.dfaec272.js",
    "revision": "f115471324135cb7713039656387df1f"
  },
  {
    "url": "assets/js/40.44f171eb.js",
    "revision": "ed19a8bb1d67efe49356239856000c68"
  },
  {
    "url": "assets/js/41.4405c552.js",
    "revision": "a10f4c93fd9d150acb8371a5dc3b4d73"
  },
  {
    "url": "assets/js/42.8090189c.js",
    "revision": "90e528bf86c7a2543068c61f18687b97"
  },
  {
    "url": "assets/js/43.30b94a31.js",
    "revision": "cc0115795b4211b3f13c9ef6713300fe"
  },
  {
    "url": "assets/js/44.5be5bf2c.js",
    "revision": "d9f9804703ede1ed9f90f154bf68c58c"
  },
  {
    "url": "assets/js/45.b7c1fe6a.js",
    "revision": "059e5be467b81af16ebe27ff0a11b5ad"
  },
  {
    "url": "assets/js/46.7be67328.js",
    "revision": "623cf64e70adc5ed3e98d1820464a063"
  },
  {
    "url": "assets/js/47.0293565b.js",
    "revision": "a507deeed3d24f603e9bc9f7f9b91eb6"
  },
  {
    "url": "assets/js/48.a2b2ec9a.js",
    "revision": "6d3f2a962bba8b2d6a6ab5c934d749c0"
  },
  {
    "url": "assets/js/49.494627da.js",
    "revision": "4fbe787b984107f519ae5df133913622"
  },
  {
    "url": "assets/js/5.a5fd9bc1.js",
    "revision": "6d5f66cce5042b57fda7b5b96d41adb0"
  },
  {
    "url": "assets/js/50.5c0931f3.js",
    "revision": "0dd3afed4d1d302df2ecc8b06473f2d8"
  },
  {
    "url": "assets/js/51.b601d11a.js",
    "revision": "3c3f211a64d20cc3ad29018663607d1a"
  },
  {
    "url": "assets/js/52.7e9946a6.js",
    "revision": "309d85abe64f681d5a463508ff384729"
  },
  {
    "url": "assets/js/53.0f992f67.js",
    "revision": "8ecbc216da8989d9504f3fdd76c804dc"
  },
  {
    "url": "assets/js/54.6f949878.js",
    "revision": "d51cc6df2f674084cb0033963ef99e80"
  },
  {
    "url": "assets/js/55.6809cad8.js",
    "revision": "ff593f179839eec5e1bf3a53bd886610"
  },
  {
    "url": "assets/js/56.ce5f8ec5.js",
    "revision": "789547183431d3b502dad8f59141b4c6"
  },
  {
    "url": "assets/js/57.8dcb6e1a.js",
    "revision": "4e1b7484d9a54c2e3329de9744c5ee74"
  },
  {
    "url": "assets/js/58.5279928f.js",
    "revision": "134e8fb294d981d566d31db38ebedeae"
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
    "url": "assets/js/60.028f753a.js",
    "revision": "217aa81e7a71cd4db438f2a314247fbe"
  },
  {
    "url": "assets/js/61.b89634db.js",
    "revision": "f812afe5839f99743e2613c7a19eaabf"
  },
  {
    "url": "assets/js/62.a4ffa167.js",
    "revision": "9f51635498c485ab00795749a7890cd0"
  },
  {
    "url": "assets/js/63.2d05832e.js",
    "revision": "25d6d61f772b880d9e651d8b34041f53"
  },
  {
    "url": "assets/js/64.404d0be7.js",
    "revision": "945172649a4cbb3cb1411e61c4b2b1c1"
  },
  {
    "url": "assets/js/65.1a88bba4.js",
    "revision": "c22a662a2568e8dc23a81dbba5c9cd10"
  },
  {
    "url": "assets/js/66.69cfdd5d.js",
    "revision": "d0066cc08fc0c8638b475f6afeeb43cc"
  },
  {
    "url": "assets/js/67.1e465b48.js",
    "revision": "96f6e3d3caab74366f653c5f8a2b6c11"
  },
  {
    "url": "assets/js/68.e761a400.js",
    "revision": "0e72cf82492fd8330291c9aa93958ab4"
  },
  {
    "url": "assets/js/69.da4a3464.js",
    "revision": "f6f57188c2b431e02b45ded684f552ec"
  },
  {
    "url": "assets/js/7.4390378b.js",
    "revision": "a761b14f9c78e3728b34aa8c2fda5d04"
  },
  {
    "url": "assets/js/70.c846c81a.js",
    "revision": "9a54ee1aea6d2b597c0b3c9df1a893fa"
  },
  {
    "url": "assets/js/71.e038d457.js",
    "revision": "0ce256bc97ab85b93798dac19cf13205"
  },
  {
    "url": "assets/js/72.99986f22.js",
    "revision": "d1541219c4a5f50770cb3b8add6e0d5a"
  },
  {
    "url": "assets/js/app.6baa95a0.js",
    "revision": "590ebff2b2b2594f520a7add93311451"
  },
  {
    "url": "assets/js/vendors~docsearch.c0b6abca.js",
    "revision": "b402d2bc893a4d169f4f431a43b9a54d"
  },
  {
    "url": "blog-article/drawing-bed/index.html",
    "revision": "bdc0a0cf346c4f82c046449a266b282d"
  },
  {
    "url": "blog-article/drawing-bed/picGo+gitee.html",
    "revision": "b88cab13dcf927b43f0bf0574c8b4070"
  },
  {
    "url": "blog-article/front-end/easyui-tree-combotree.html",
    "revision": "f6c3d90bb505b8ce18ce223751dc532e"
  },
  {
    "url": "blog-article/front-end/index.html",
    "revision": "770a2e2b41fcbf8812d8d929bef5f5d2"
  },
  {
    "url": "blog-article/front-end/vuePress-loads-network-images.html",
    "revision": "1bdf7145209fa7f551bbe66a79b249ad"
  },
  {
    "url": "blog-article/index.html",
    "revision": "780adc132309cd58e1ab3b2ed80f731a"
  },
  {
    "url": "blog-article/java/index.html",
    "revision": "0e7de9f1fa407bed2e6368b624bef036"
  },
  {
    "url": "blog-article/mybatis/index.html",
    "revision": "0084d6697c9d5b8be3958509d1c48061"
  },
  {
    "url": "blog-article/mybatis/mybatis-list-map-array.html",
    "revision": "1f704defd28c18e56a4fd63fba4f4448"
  },
  {
    "url": "blog-article/mybatis/mybatis-List-map.html",
    "revision": "cf338312d4f88e561c17db5b917bfbe0"
  },
  {
    "url": "blog-article/mysql/index.html",
    "revision": "8e11e3b0c3f9fe0496196db07c084d2c"
  },
  {
    "url": "blog-article/other/index.html",
    "revision": "031626df1dc4245646ec67a5b1e2f21f"
  },
  {
    "url": "blog-article/python/index.html",
    "revision": "49c32230aec22ccee573a2abde656eb6"
  },
  {
    "url": "code-demo/back-end-code/index.html",
    "revision": "b09a755ddbb3c705ae3ef7a9cfcc7275"
  },
  {
    "url": "code-demo/front-end-code/index.html",
    "revision": "9135c20783ca96384e3475ec9c5bce22"
  },
  {
    "url": "code-demo/index.html",
    "revision": "6342b43c2577b9712dd57466f4ad18a4"
  },
  {
    "url": "code-demo/other.html",
    "revision": "405d40122e198e8b3a71213c1666431e"
  },
  {
    "url": "config.html",
    "revision": "66466b006d11f64eaca7666ffb9d2f59"
  },
  {
    "url": "friendly-chain/index.html",
    "revision": "a0a73c26bc4b620f4f954fc02644fd33"
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
    "revision": "1f842fe4d708bdaafdc722f70b86631a"
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
    "revision": "7a6b8f6026a85534bc994eae401d2b48"
  },
  {
    "url": "other/index.html",
    "revision": "796466a716ef3e0d914298e1b23cfb42"
  },
  {
    "url": "other/notes-on-tomb-robbery.html",
    "revision": "68058e3c4dfccd0cc508143d3334a0e5"
  },
  {
    "url": "read/index.html",
    "revision": "542cb167a2cf6a0a926abd2cc355778e"
  },
  {
    "url": "study-notes/back-end/index.html",
    "revision": "cd28564ddad257e2e2d0fb9ff86642ed"
  },
  {
    "url": "study-notes/back-end/java/collection.html",
    "revision": "e725e626a7132c1f52098c6c210fed9f"
  },
  {
    "url": "study-notes/back-end/java/fenbushi.html",
    "revision": "17b90cf2b1cffd6e03a0fcc6c3204e0b"
  },
  {
    "url": "study-notes/back-end/java/index.html",
    "revision": "e393275c2e36a0129162ffbde9f19868"
  },
  {
    "url": "study-notes/back-end/java/javase.html",
    "revision": "3d641ac26ab0bf54c5a0bffa676c69d3"
  },
  {
    "url": "study-notes/back-end/java/javathread.html",
    "revision": "93fdd7a2333d00d501dc5760ee474159"
  },
  {
    "url": "study-notes/back-end/java/jvm.html",
    "revision": "926fcb8d27bbd49edb1ff1dc11ff1b60"
  },
  {
    "url": "study-notes/back-end/java/mybatis.html",
    "revision": "08aa07366266194624a465221ff1400a"
  },
  {
    "url": "study-notes/back-end/java/mysql.html",
    "revision": "0984fb3a6a5eb257d1c6459503be22ca"
  },
  {
    "url": "study-notes/back-end/java/network.html",
    "revision": "f0c67e40a475d0597c8b3bc07f0d1b09"
  },
  {
    "url": "study-notes/back-end/java/nixi.html",
    "revision": "2003bd701cc96a704710a6eb30d86df9"
  },
  {
    "url": "study-notes/back-end/java/os.html",
    "revision": "d24489e314a08551f495101d77ca86ad"
  },
  {
    "url": "study-notes/back-end/java/redis.html",
    "revision": "2e0377f8dbf5007c283e77d59b13eaea"
  },
  {
    "url": "study-notes/back-end/java/rocketmq.html",
    "revision": "e118fc8ceeb1d0684b11a947891e2957"
  },
  {
    "url": "study-notes/back-end/java/spring.html",
    "revision": "940bafdd663c4005e4854c536cab3a85"
  },
  {
    "url": "study-notes/back-end/java/weifuwu.html",
    "revision": "d96e380e3c59eef904b2e89bca7e67ab"
  },
  {
    "url": "study-notes/back-end/python/index.html",
    "revision": "aa69e6897ead6c827b5da7ec58689b8e"
  },
  {
    "url": "study-notes/common/common-tools/index.html",
    "revision": "0ee910a283cae3c098c160851f7156e1"
  },
  {
    "url": "study-notes/front-end/html/basic/index.html",
    "revision": "bfca7790542700db8fb85c14343df395"
  },
  {
    "url": "study-notes/front-end/html/index.html",
    "revision": "5162c1657f42c8afc0c4365b76cf7bb9"
  },
  {
    "url": "study-notes/front-end/index.html",
    "revision": "4c24785a649e7b49ee0fe065bc603b3e"
  },
  {
    "url": "study-notes/front-end/javaScript/index.html",
    "revision": "8459a4db7af3c828e059045648a1c841"
  },
  {
    "url": "study-notes/index.html",
    "revision": "73241e775e16a2ad766cbc55822bb8ad"
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
