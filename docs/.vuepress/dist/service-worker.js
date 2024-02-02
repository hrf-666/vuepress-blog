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
    "revision": "40df5299557c411105350ebeaa44a6b9"
  },
  {
    "url": "aboutme/index.html",
    "revision": "2d3bcf6ed2cc17e0277250b3711c42e5"
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
    "url": "assets/js/18.499f9695.js",
    "revision": "ed64cfaa547c1f6b4a3828d995081ec5"
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
    "url": "assets/js/24.c8f04e51.js",
    "revision": "d84cdbb8c7aa81e09ad34ec40999b9a1"
  },
  {
    "url": "assets/js/25.de6089e1.js",
    "revision": "3b92fd610416e038348a0c3bd7775fa3"
  },
  {
    "url": "assets/js/26.71c83563.js",
    "revision": "b7c11868889bd3a398e8593dd57ec34f"
  },
  {
    "url": "assets/js/27.3d228705.js",
    "revision": "48d45fe34d07b4e7bb86c33b1f3e88dc"
  },
  {
    "url": "assets/js/28.e4b4476e.js",
    "revision": "561ecaef12417fa8dbc931e242db3694"
  },
  {
    "url": "assets/js/29.7aba9700.js",
    "revision": "6b0302f81e19231a12339f198238f8b2"
  },
  {
    "url": "assets/js/3.94f3f0ba.js",
    "revision": "2a7b0db3f7b63345e7d8934b5044dc4e"
  },
  {
    "url": "assets/js/30.e7f2f1d0.js",
    "revision": "6bf7e9a4dab4935cb08d4cbc7ef7d09e"
  },
  {
    "url": "assets/js/31.a016e7a1.js",
    "revision": "8fabefe3282c3c462a5ca80cc4418f5a"
  },
  {
    "url": "assets/js/32.b2de0d98.js",
    "revision": "70f320c450e0801a2ac9329aac355e1c"
  },
  {
    "url": "assets/js/33.1dd23f21.js",
    "revision": "49efd24c856903ee5ec988c6e1af5cd3"
  },
  {
    "url": "assets/js/34.ae2d070e.js",
    "revision": "2f537feca67164ce869e0c479337e7ac"
  },
  {
    "url": "assets/js/35.1e41d081.js",
    "revision": "95c8412ec01446ccc6902af05f86bd23"
  },
  {
    "url": "assets/js/36.169b4945.js",
    "revision": "33cc5a764a6b42a7ee6b962efe1cb5a6"
  },
  {
    "url": "assets/js/37.c6aed58c.js",
    "revision": "66891980af844701ac6b902c689aa129"
  },
  {
    "url": "assets/js/38.436c60c1.js",
    "revision": "bdc8c1b61648867f05987028807b3a33"
  },
  {
    "url": "assets/js/39.e7fe89eb.js",
    "revision": "0a544cae1321f5ef07140513034a94e0"
  },
  {
    "url": "assets/js/4.dfaec272.js",
    "revision": "f115471324135cb7713039656387df1f"
  },
  {
    "url": "assets/js/40.471edde4.js",
    "revision": "373ad956b60e8d68ee7c1d83b4f93464"
  },
  {
    "url": "assets/js/41.b29c7f27.js",
    "revision": "7030bae34d2e6ba07f3892d28663bc16"
  },
  {
    "url": "assets/js/42.22c214c8.js",
    "revision": "6dbb370e26c2f95bba7a30d2b00267ad"
  },
  {
    "url": "assets/js/43.5679eb65.js",
    "revision": "58089b3a726044fc1daf6f90249ad4b5"
  },
  {
    "url": "assets/js/44.dac5dfdf.js",
    "revision": "cfd25c0516f4793cb88fb4f7d4d59837"
  },
  {
    "url": "assets/js/45.96e59ea3.js",
    "revision": "8c468cb1bbc964da15914b4598fc3625"
  },
  {
    "url": "assets/js/46.964f8bb2.js",
    "revision": "36cebd693fc7cd76adfa57aa485b8199"
  },
  {
    "url": "assets/js/47.8d4081c8.js",
    "revision": "ed478451cf5e11623f5660474d0bed5c"
  },
  {
    "url": "assets/js/48.2145e932.js",
    "revision": "eba5ed361c2df7f93398fb37a3500dd5"
  },
  {
    "url": "assets/js/49.daebb05e.js",
    "revision": "c5292814ab3adb76279868bbf1046eb1"
  },
  {
    "url": "assets/js/5.a5fd9bc1.js",
    "revision": "6d5f66cce5042b57fda7b5b96d41adb0"
  },
  {
    "url": "assets/js/50.441bc842.js",
    "revision": "69ada0ac39fd7766b97d4d9747856830"
  },
  {
    "url": "assets/js/51.b769f47d.js",
    "revision": "98b2070b92ad162f6e1ec7648fe1fa9c"
  },
  {
    "url": "assets/js/52.17e969b4.js",
    "revision": "1f25b9d31dbbf9ddd04c7ba24af6a7ca"
  },
  {
    "url": "assets/js/53.be5c14fb.js",
    "revision": "fa513f26f02536f8fa0baf535666614d"
  },
  {
    "url": "assets/js/54.e57922ed.js",
    "revision": "630cc57a4c6a666c893ef10ce406efc8"
  },
  {
    "url": "assets/js/55.61c802e7.js",
    "revision": "7cd389d2e329cd25a4ea60707d064914"
  },
  {
    "url": "assets/js/56.7fb506be.js",
    "revision": "167d68cab9bf1993ca831f00ceea3948"
  },
  {
    "url": "assets/js/57.89cd6c87.js",
    "revision": "170ccab71167a8cc7220d41e907c35c1"
  },
  {
    "url": "assets/js/58.50bc3c56.js",
    "revision": "f2d1f41cd0703f201b89e7034824cea9"
  },
  {
    "url": "assets/js/59.8d7d25c1.js",
    "revision": "a52d55878958e9aaf422fb658ff7dfc2"
  },
  {
    "url": "assets/js/6.519fe0b1.js",
    "revision": "1ce841424468888f2cde3fc5a5830e19"
  },
  {
    "url": "assets/js/60.65762648.js",
    "revision": "22a609d1feb2a509e143908d5950b3bc"
  },
  {
    "url": "assets/js/61.9e823bb0.js",
    "revision": "d62050f730a421ce4c3a4bbb71de42f0"
  },
  {
    "url": "assets/js/62.0037b68b.js",
    "revision": "f3ba225b001c004cd222027701c42df0"
  },
  {
    "url": "assets/js/63.3aa9b418.js",
    "revision": "3c48bf70c76e7cfde16bf30ce2fec1e1"
  },
  {
    "url": "assets/js/64.1d4530ba.js",
    "revision": "760f27d9d05d6200ca354a5fd466e055"
  },
  {
    "url": "assets/js/65.af40bb84.js",
    "revision": "d5f52784b87c20442cfb60b186471185"
  },
  {
    "url": "assets/js/66.1cc6b919.js",
    "revision": "c494b581d3419d833a6e3ea71fb0b02a"
  },
  {
    "url": "assets/js/67.f2b70dfa.js",
    "revision": "3d4e96d20d27613a90f7d5e39dddbb74"
  },
  {
    "url": "assets/js/68.d9c389f3.js",
    "revision": "c2e1843e7efb887f95fb5d5c9f8e5351"
  },
  {
    "url": "assets/js/69.e65620a6.js",
    "revision": "8312bc5463f0244b5158ba5943a3dfb1"
  },
  {
    "url": "assets/js/7.4390378b.js",
    "revision": "a761b14f9c78e3728b34aa8c2fda5d04"
  },
  {
    "url": "assets/js/70.48d338b6.js",
    "revision": "78295f80b114a27c7d303e59a784bb90"
  },
  {
    "url": "assets/js/71.bbb1151f.js",
    "revision": "d9124d0060c0c8b23165b12c281d3a02"
  },
  {
    "url": "assets/js/72.ace38f84.js",
    "revision": "c245a9d55007dc43abfefedbb0ae1650"
  },
  {
    "url": "assets/js/73.b655d04a.js",
    "revision": "3a18ae3694899467038d9cafde544668"
  },
  {
    "url": "assets/js/74.5e528dca.js",
    "revision": "7c65dc3a0940b0ceb999b40eb462abd8"
  },
  {
    "url": "assets/js/75.f655a8a5.js",
    "revision": "b388c76f0da42dce222fd6ab85c29cf5"
  },
  {
    "url": "assets/js/76.afdcf766.js",
    "revision": "edab0679fe289094c9df55cdde40135f"
  },
  {
    "url": "assets/js/app.74eaab86.js",
    "revision": "fae8e702f9fbf2a803c26cbda3940c5b"
  },
  {
    "url": "assets/js/vendors~docsearch.c0b6abca.js",
    "revision": "b402d2bc893a4d169f4f431a43b9a54d"
  },
  {
    "url": "blog-article/drawing-bed/index.html",
    "revision": "47134c5daba333582123fce092f8b3f0"
  },
  {
    "url": "blog-article/drawing-bed/picGo+gitee.html",
    "revision": "725a9e032f87d0d894afda71453bda47"
  },
  {
    "url": "blog-article/front-end/easyui-tree-combotree.html",
    "revision": "ef3b047ce3ccc93ca9d86b342f9c327f"
  },
  {
    "url": "blog-article/front-end/index.html",
    "revision": "2b5d493d3c048626587c85869871906c"
  },
  {
    "url": "blog-article/front-end/js-array-object-contain-duplicate-values.html",
    "revision": "8f14a35b0e5fae0a4d35503772045bd6"
  },
  {
    "url": "blog-article/front-end/vuepress/vuepress-auto-sidebar.html",
    "revision": "16affce4933dbf7d18520debca9d2532"
  },
  {
    "url": "blog-article/front-end/vuepress/vuepress-custom-navigation.html",
    "revision": "51950c287a2051995555402e65b5d6ec"
  },
  {
    "url": "blog-article/front-end/vuepress/vuepress-loads-network-images.html",
    "revision": "b755cb4cde2351a3b674ecd4eab5e6bd"
  },
  {
    "url": "blog-article/front-end/vuepress/vuepress-pwa.html",
    "revision": "697f44fe879f98f662d7615d5a537a6a"
  },
  {
    "url": "blog-article/index.html",
    "revision": "88df510ebee5f790db6307e42796eb34"
  },
  {
    "url": "blog-article/java/index.html",
    "revision": "d55c86280ad2bedef42121a0b08ca355"
  },
  {
    "url": "blog-article/mybatis/index.html",
    "revision": "853cb22c03d65a6f8140babfadefb2f3"
  },
  {
    "url": "blog-article/mybatis/mybatis-list-map-array.html",
    "revision": "053cb45b4ccc0a214d6be4ce63a9b326"
  },
  {
    "url": "blog-article/mybatis/mybatis-List-map.html",
    "revision": "29214148ff2e204571b4f83903a83c22"
  },
  {
    "url": "blog-article/mysql/index.html",
    "revision": "57f9d69c3c727c6e7a83ecba4a8dc7b4"
  },
  {
    "url": "blog-article/other/index.html",
    "revision": "08c04701b75c7dc4d6a7d359db9bd8ab"
  },
  {
    "url": "blog-article/python/index.html",
    "revision": "5a76a299ff4cd10e26cc1f5b180156eb"
  },
  {
    "url": "code-demo/back-end-code/index.html",
    "revision": "1f2fb6b33ff2afad1f9b209b348c0517"
  },
  {
    "url": "code-demo/front-end-code/index.html",
    "revision": "a8d9a33cab359a19ed08339c24f0978e"
  },
  {
    "url": "code-demo/index.html",
    "revision": "3ec4896f22e0d35fc7b01b1001bda83a"
  },
  {
    "url": "code-demo/other.html",
    "revision": "7c5ed3161d58182105f2b115e87d816e"
  },
  {
    "url": "friendly-chain/index.html",
    "revision": "f693de751e0bfdaa533c88d756fe87de"
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
    "revision": "3f631d03306f9de40af80580da0c4509"
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
    "revision": "2e5aeb7a3c2aef617fe4750fa94c75ac"
  },
  {
    "url": "other/index.html",
    "revision": "ca196b8c854f549db2261e91ad65ee4f"
  },
  {
    "url": "other/notes-on-tomb-robbery.html",
    "revision": "c801f714a777d98e8f8c676f24f44515"
  },
  {
    "url": "read/index.html",
    "revision": "c6af712fc77b5cd909531c929cf561f0"
  },
  {
    "url": "study-notes/back-end/index.html",
    "revision": "397da4dc395b95110f1bd710f594c6b8"
  },
  {
    "url": "study-notes/back-end/java/collection.html",
    "revision": "e80f882dbe6242a9a0530813f62a43e9"
  },
  {
    "url": "study-notes/back-end/java/fenbushi.html",
    "revision": "b69a718b5cd31c7289665e5fa565c4a7"
  },
  {
    "url": "study-notes/back-end/java/index.html",
    "revision": "984088cd900bd57f2d3a36faac2250d5"
  },
  {
    "url": "study-notes/back-end/java/javase.html",
    "revision": "d1cbd4224a2964ad718ba6b40593fb67"
  },
  {
    "url": "study-notes/back-end/java/javathread.html",
    "revision": "18e6afa85073c4773bdc407621e5545e"
  },
  {
    "url": "study-notes/back-end/java/jvm.html",
    "revision": "0c5eef026726159c19d2d9caf64d3240"
  },
  {
    "url": "study-notes/back-end/java/mybatis.html",
    "revision": "870f80cd3850bcfe0db5371e792d868c"
  },
  {
    "url": "study-notes/back-end/java/mysql.html",
    "revision": "ab597d318708343bfc77d6b5755cf64a"
  },
  {
    "url": "study-notes/back-end/java/network.html",
    "revision": "49e2194b34c6f57c4532db393af1f55c"
  },
  {
    "url": "study-notes/back-end/java/nixi.html",
    "revision": "a008e9d82270c65d0734fc3bf786d057"
  },
  {
    "url": "study-notes/back-end/java/os.html",
    "revision": "6b6a0b2de5eb519ca9590c94dbc13e8b"
  },
  {
    "url": "study-notes/back-end/java/redis.html",
    "revision": "a8db31ec2ebd0e3d9f5ec5aa3d57269b"
  },
  {
    "url": "study-notes/back-end/java/rocketmq.html",
    "revision": "9f8245cab4b18d6c80cd7fe5a8502686"
  },
  {
    "url": "study-notes/back-end/java/spring.html",
    "revision": "e14b15c8caa8c76a66e73c5d3428eafa"
  },
  {
    "url": "study-notes/back-end/java/weifuwu.html",
    "revision": "8525c1a5821dd8c71009a58cf770f2f3"
  },
  {
    "url": "study-notes/back-end/python/index.html",
    "revision": "8dee8fe4dd00fc4c43848751c57229ab"
  },
  {
    "url": "study-notes/common/common-tools/index.html",
    "revision": "de61888f1a98ec4c821434b3a7ae8233"
  },
  {
    "url": "study-notes/front-end/html/basic/index.html",
    "revision": "43fb53d919b8f03c1f6b33d2a107b8be"
  },
  {
    "url": "study-notes/front-end/html/index.html",
    "revision": "e9fea8c53b576194d414737670d58227"
  },
  {
    "url": "study-notes/front-end/index.html",
    "revision": "b7012116e2ebdfa814145ec81c2bb0e7"
  },
  {
    "url": "study-notes/front-end/javaScript/index.html",
    "revision": "9d0590328906999370a6890df5132b80"
  },
  {
    "url": "study-notes/index.html",
    "revision": "70e383d7182c36fbedbe06275f89bec7"
  },
  {
    "url": "vuepress-custom-content-width/index.html",
    "revision": "c5bb5cd855839979c8e61026c4898108"
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
