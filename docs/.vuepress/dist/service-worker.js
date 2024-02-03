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
    "revision": "013ccf863264db9d0d25b0ad404ebefb"
  },
  {
    "url": "aboutme/index.html",
    "revision": "4792778c6468ce17ca436aaa9e859824"
  },
  {
    "url": "assets/css/0.styles.0255afcf.css",
    "revision": "b6c185919b0a36913f067f21a4baabc5"
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
    "url": "assets/img/sakura.5e4a2cfb.png",
    "revision": "5e4a2cfbc3aae83420146d71ee06ba17"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.8a1ac086.js",
    "revision": "807f79f2e8dd20dce548b6a2bef93ff3"
  },
  {
    "url": "assets/js/10.c364e571.js",
    "revision": "496f1b587123fb08a889d3d577a9c9eb"
  },
  {
    "url": "assets/js/11.af904bce.js",
    "revision": "bdf8a754fbd4e989a4629c009992c0fe"
  },
  {
    "url": "assets/js/12.a7b7b95a.js",
    "revision": "f546463deaaa137d2be6043e066b416c"
  },
  {
    "url": "assets/js/13.6178a4b5.js",
    "revision": "f2d78801d415f8cba2524595c5ab9c42"
  },
  {
    "url": "assets/js/14.e8ae2a16.js",
    "revision": "e5708c68fc6efee66e5bec5dd926f81b"
  },
  {
    "url": "assets/js/15.2300314e.js",
    "revision": "e888bbaeb7ce6f37dd2cfd170c454292"
  },
  {
    "url": "assets/js/16.a0f4d60f.js",
    "revision": "fc6cbd52c0796d577c3808cfb535e58c"
  },
  {
    "url": "assets/js/17.a6cf2850.js",
    "revision": "a43587db1f26fc7735e46fe2065527ef"
  },
  {
    "url": "assets/js/18.f69be758.js",
    "revision": "057b647ef88ab83078a8c1b06a2901be"
  },
  {
    "url": "assets/js/19.953bca40.js",
    "revision": "d3f7c226cdf42ae92aa31c6b337bcbf5"
  },
  {
    "url": "assets/js/2.d62d7002.js",
    "revision": "da3dff739d4b586ad2998c08b79a0b60"
  },
  {
    "url": "assets/js/20.0f261fbe.js",
    "revision": "222e968b83f141004c7a320e2c8bec78"
  },
  {
    "url": "assets/js/21.c578f173.js",
    "revision": "a064ef5c29f6e6a2f4522f3e7b7108a6"
  },
  {
    "url": "assets/js/22.6f5d52d8.js",
    "revision": "b10b75e6428581132889c208b59acb7e"
  },
  {
    "url": "assets/js/23.98339ca6.js",
    "revision": "94b57db03ba0fa568fe55f8737d25ecc"
  },
  {
    "url": "assets/js/24.e2c880fd.js",
    "revision": "9d0e3b4b24098c6fa6d3d8f119add94f"
  },
  {
    "url": "assets/js/25.75c3d252.js",
    "revision": "5ecc3b6899bbc220f4b81378a011e86a"
  },
  {
    "url": "assets/js/26.44496724.js",
    "revision": "fbe40809731a18a6943202cdbcbc8145"
  },
  {
    "url": "assets/js/27.30a89b61.js",
    "revision": "10c258036470588d0af265e82c40bdf5"
  },
  {
    "url": "assets/js/28.6cd351de.js",
    "revision": "2ab92b862ae1be1428804313df36bf86"
  },
  {
    "url": "assets/js/29.72e00ef2.js",
    "revision": "c988636ffafd00fbf307677e5f8ff703"
  },
  {
    "url": "assets/js/3.2a1ca0a9.js",
    "revision": "b8b955caaf4c349fe9db0b0179747f2f"
  },
  {
    "url": "assets/js/30.4f09cd2d.js",
    "revision": "e0450f16db2161ee7903b93fcf149481"
  },
  {
    "url": "assets/js/31.64e3ded7.js",
    "revision": "bee8f3e8533bb0d1d83f618d27ba5a26"
  },
  {
    "url": "assets/js/32.4c610a0e.js",
    "revision": "41a58675e19671e28bbc53a3180c8f15"
  },
  {
    "url": "assets/js/33.cb6d2128.js",
    "revision": "0538a35763c35968d0bcb2561fb2f75b"
  },
  {
    "url": "assets/js/34.aad7efcc.js",
    "revision": "d923b4f52f16e1751270c6a7f1100caf"
  },
  {
    "url": "assets/js/35.70233a52.js",
    "revision": "85e3a20c93fb8ffd92c274871ea98e28"
  },
  {
    "url": "assets/js/36.5866f274.js",
    "revision": "4034056f081cbab0f9d5e00b1c4bdc48"
  },
  {
    "url": "assets/js/37.80f3444a.js",
    "revision": "04c7a6defe5ca3f8cd9b1fce105724d1"
  },
  {
    "url": "assets/js/38.dfad26d6.js",
    "revision": "b0443e9f9565ee73c58b62bcc36d4a1b"
  },
  {
    "url": "assets/js/39.8be9f7eb.js",
    "revision": "99d870bb6cd97524140bf11d29f4bba2"
  },
  {
    "url": "assets/js/4.abda362f.js",
    "revision": "c9fe80b102a9e52db3247e3db9d33c2b"
  },
  {
    "url": "assets/js/40.54df6f49.js",
    "revision": "79dd2f7f5ba0df35855507e561e05ed6"
  },
  {
    "url": "assets/js/41.ceef47af.js",
    "revision": "f96d5ad1daed7aa05ab4b42fd7b85c56"
  },
  {
    "url": "assets/js/42.c661ddae.js",
    "revision": "7b865f8d00b65e4fc9af837e1ff305c7"
  },
  {
    "url": "assets/js/43.58ca76a0.js",
    "revision": "19be19f3e87fb55af24a64f643dc0c90"
  },
  {
    "url": "assets/js/44.3969e6a4.js",
    "revision": "939aa984586085a31966ee278035e382"
  },
  {
    "url": "assets/js/45.0410ad1d.js",
    "revision": "197e3565fef222b55edb964e3afd5255"
  },
  {
    "url": "assets/js/46.14b0d369.js",
    "revision": "09c748439bc65e285e5d8d94fc333727"
  },
  {
    "url": "assets/js/47.3a580e43.js",
    "revision": "dcc37dcf258e5e2821a49efb82f254b6"
  },
  {
    "url": "assets/js/48.803c5390.js",
    "revision": "00d605036baaf074ff4666fcd5df490d"
  },
  {
    "url": "assets/js/49.811675b6.js",
    "revision": "cb749be06d8eb58da44028656eb8b8b7"
  },
  {
    "url": "assets/js/5.36a547ba.js",
    "revision": "146bde0fd93e072da191e080f12fbfc4"
  },
  {
    "url": "assets/js/50.5568bc5f.js",
    "revision": "71c4b1cbb822a7729a87ad6eb0ffe529"
  },
  {
    "url": "assets/js/51.58916e39.js",
    "revision": "d5d5a595195c2370a62129bd74e79273"
  },
  {
    "url": "assets/js/52.d01b4734.js",
    "revision": "ebdba85be4b4219fc01e6acefa1e97eb"
  },
  {
    "url": "assets/js/53.cfcb8a87.js",
    "revision": "dc78620a244ce80971a2fba7f4d914e9"
  },
  {
    "url": "assets/js/54.dafe2509.js",
    "revision": "9f96d057d0f0314eeb63f5c01c3f5953"
  },
  {
    "url": "assets/js/55.5e174ad1.js",
    "revision": "4caa2a4719210daa5f4fc8256df70517"
  },
  {
    "url": "assets/js/56.761fc2e3.js",
    "revision": "3cfa7d9df8ea8f20fcb6e05721fafe19"
  },
  {
    "url": "assets/js/57.fded36f8.js",
    "revision": "5d9fa42d35ea0e34735ac9e4512a8f5d"
  },
  {
    "url": "assets/js/58.93088333.js",
    "revision": "6d15beac0fe0ecfbff9b1430538c2500"
  },
  {
    "url": "assets/js/59.907cbc8b.js",
    "revision": "9a981beb6456bfd9a0003485d8e37269"
  },
  {
    "url": "assets/js/6.2d778cac.js",
    "revision": "d8ab2b7d79a8d0057063da90e84785ed"
  },
  {
    "url": "assets/js/60.c8c8852c.js",
    "revision": "7751510e2ff1b2caa4353c74e11b0f41"
  },
  {
    "url": "assets/js/61.0276c5b2.js",
    "revision": "48e5051df168ead6ed0f67402b869dc7"
  },
  {
    "url": "assets/js/62.3e8f37b1.js",
    "revision": "269be67cb39912251d293e882914a1aa"
  },
  {
    "url": "assets/js/63.802e8cde.js",
    "revision": "3cb6f4a68ec8a3ce21c710a5eb527562"
  },
  {
    "url": "assets/js/64.0278be1d.js",
    "revision": "99db3d442ee3cdaad1b97aba250252fe"
  },
  {
    "url": "assets/js/65.f9c9a7cb.js",
    "revision": "0fefbd3167f975b0b53a7e9b7d1c32bb"
  },
  {
    "url": "assets/js/66.762d5cd2.js",
    "revision": "f7659fc21767ecd7442608eb8c34d19d"
  },
  {
    "url": "assets/js/67.69dec7dd.js",
    "revision": "8641fe5722cc4aa28e62686717da8c1b"
  },
  {
    "url": "assets/js/68.79b435ed.js",
    "revision": "ecff8286b1e5f678c3a4cc710337c633"
  },
  {
    "url": "assets/js/69.664d8136.js",
    "revision": "7475f64fc49f4a3ce57d239acf928cde"
  },
  {
    "url": "assets/js/7.d4ac98ab.js",
    "revision": "7fbfe618d9194e1f6c44add338983250"
  },
  {
    "url": "assets/js/70.1803343a.js",
    "revision": "5df927441268f189fc6b78d4402ec76b"
  },
  {
    "url": "assets/js/71.b6e747a5.js",
    "revision": "8f076bb5255cac78ca30905a0c6f1a42"
  },
  {
    "url": "assets/js/72.a6b70831.js",
    "revision": "69d7fa93e56f34ecc138a000a74f648a"
  },
  {
    "url": "assets/js/73.d9b0a65f.js",
    "revision": "416c038b223c0c6a519ff00bc854f787"
  },
  {
    "url": "assets/js/74.85408baf.js",
    "revision": "001efe917be9828710cbe35410b642c3"
  },
  {
    "url": "assets/js/75.dfd18a60.js",
    "revision": "73de6fbabbd670d41707afe5dc5a57c4"
  },
  {
    "url": "assets/js/76.9679d862.js",
    "revision": "a6354ce2787626b03d9debc037c712e4"
  },
  {
    "url": "assets/js/77.b4fe23b0.js",
    "revision": "e18188addb6e87b7ae76d518e93c72a2"
  },
  {
    "url": "assets/js/78.1632fa09.js",
    "revision": "aac4c232476fa96862b1a7328ea5ce08"
  },
  {
    "url": "assets/js/79.e3fdb800.js",
    "revision": "5fead698533ba40edc68988ec58f8763"
  },
  {
    "url": "assets/js/80.7179f575.js",
    "revision": "d0dd318bf0ed608164c8f0edfbfe8191"
  },
  {
    "url": "assets/js/81.41e922d2.js",
    "revision": "e4232109592e66f45b80a45e03d1872b"
  },
  {
    "url": "assets/js/app.1279a07f.js",
    "revision": "9b61028b6cd4869e6fd64442e17c0eac"
  },
  {
    "url": "assets/js/vendors~docsearch.3f1b6593.js",
    "revision": "429f61e5ebae6820b754283e32f0902f"
  },
  {
    "url": "blog-article/drawing-bed/index.html",
    "revision": "b2c65722329481800c0e1db133a5c523"
  },
  {
    "url": "blog-article/drawing-bed/picGo+gitee.html",
    "revision": "28aee531ed2a57205d84ae01064afd67"
  },
  {
    "url": "blog-article/front-end/easyui/easyui-tree-combotree.html",
    "revision": "3db32ac8bc4266150cfa53fd3e2de260"
  },
  {
    "url": "blog-article/front-end/index.html",
    "revision": "8a44bad5ba7022207adc95c7d814520c"
  },
  {
    "url": "blog-article/front-end/js/js-array-object-contain-duplicate-values.html",
    "revision": "a942e4505151c2f04400e7dab90e802e"
  },
  {
    "url": "blog-article/front-end/vuepress/vuepress-auto-sidebar.html",
    "revision": "b00176a13f9825c6814c52500836b2a3"
  },
  {
    "url": "blog-article/front-end/vuepress/vuepress-back-last-read.html",
    "revision": "ffc5f55b14ff5aaa51a446df6b0ad22c"
  },
  {
    "url": "blog-article/front-end/vuepress/vuepress-custom-navigation.html",
    "revision": "d59e76c2c2459744098c353f7473505c"
  },
  {
    "url": "blog-article/front-end/vuepress/vuepress-loads-network-images.html",
    "revision": "213e097b681b5be8a5a697ba4f06c487"
  },
  {
    "url": "blog-article/front-end/vuepress/vuepress-pwa.html",
    "revision": "4a977674c906cf685f9fe3b591ada893"
  },
  {
    "url": "blog-article/front-end/vuepress/vuepress-right-sidebar.html",
    "revision": "49ad5f821e7b41bd4651b7efc1c356be"
  },
  {
    "url": "blog-article/front-end/vuepress/vuepress-sakura-plugin.html",
    "revision": "757f820b77db38feed1d118acd992649"
  },
  {
    "url": "blog-article/index.html",
    "revision": "26d0c14d6add735c0a0685cd261c1a4a"
  },
  {
    "url": "blog-article/java/index.html",
    "revision": "82bdf0b1171704ccfcd757a14ee715e8"
  },
  {
    "url": "blog-article/mybatis/index.html",
    "revision": "f862e864768813d28771c9dbab033dd8"
  },
  {
    "url": "blog-article/mybatis/mybatis-list-map-array.html",
    "revision": "9c36c830feabd1fbb1ed5a0f0c523536"
  },
  {
    "url": "blog-article/mybatis/mybatis-List-map.html",
    "revision": "9fe40186f4e0c016553e106d1ef5d904"
  },
  {
    "url": "blog-article/mysql/index.html",
    "revision": "2f6e29739bf1b991ddbbff528ad8f488"
  },
  {
    "url": "blog-article/other/index.html",
    "revision": "96ec4ab1a80d13fc497dc22c3659b0ff"
  },
  {
    "url": "blog-article/python/first-acquaintance-python.html",
    "revision": "80666738f57c547c5ae701f6ad707bb7"
  },
  {
    "url": "blog-article/python/index.html",
    "revision": "9e6bd686090f9c7a904d05d8330d9437"
  },
  {
    "url": "blog-article/python/python-basic.html",
    "revision": "9b03d172c0668559820625f963e4dc67"
  },
  {
    "url": "code-demo/back-end-code/index.html",
    "revision": "4536d27cf771d2b192c7d27d61db53d9"
  },
  {
    "url": "code-demo/front-end-code/index.html",
    "revision": "636fb28dcb2757523922d2fbf5e79736"
  },
  {
    "url": "code-demo/index.html",
    "revision": "03db0496f1f66ea5eabf0d44823f6166"
  },
  {
    "url": "code-demo/other.html",
    "revision": "fa13341c6fba1d6bf2106b64d87d2adc"
  },
  {
    "url": "friendly-chain/index.html",
    "revision": "7d69f12714d7e96704e208fcbcbb7525"
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
    "revision": "495e8786ae2892a39016808ef9db8703"
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
    "revision": "9e1ebb5da810cf931cbe680e6151f12d"
  },
  {
    "url": "other/index.html",
    "revision": "f56e9e447cc95b032c719d3b6d604e44"
  },
  {
    "url": "other/notes-on-tomb-robbery.html",
    "revision": "a7c7d31ebb70356e8df88d8cce761600"
  },
  {
    "url": "read/index.html",
    "revision": "dc8ef486613140197ccb45a2958581cd"
  },
  {
    "url": "study-notes/back-end/index.html",
    "revision": "c9eac5e9e64d0b3b8a39a448c7c355d5"
  },
  {
    "url": "study-notes/back-end/java/collection.html",
    "revision": "1962d50ef930a8d08061e79431a2a765"
  },
  {
    "url": "study-notes/back-end/java/fenbushi.html",
    "revision": "959d4334125d87d3f4da66aece4fed98"
  },
  {
    "url": "study-notes/back-end/java/index.html",
    "revision": "eed82245de6aab5d670c5e4fac90bb89"
  },
  {
    "url": "study-notes/back-end/java/javase.html",
    "revision": "bbe85af4c931d127d889fa1d1dbe209f"
  },
  {
    "url": "study-notes/back-end/java/javathread.html",
    "revision": "c7cef2bc7ca798d463112ac540c4845d"
  },
  {
    "url": "study-notes/back-end/java/jvm.html",
    "revision": "30ab5159e1ca8a3cb33ab4b82fbccbc1"
  },
  {
    "url": "study-notes/back-end/java/mybatis.html",
    "revision": "734f177fd84ddc9c09450d65a18c9d4b"
  },
  {
    "url": "study-notes/back-end/java/mysql.html",
    "revision": "e667168f9267f654f13d97fec7706734"
  },
  {
    "url": "study-notes/back-end/java/network.html",
    "revision": "979f033a13aef68b12f8878a1114748e"
  },
  {
    "url": "study-notes/back-end/java/nixi.html",
    "revision": "793db18de33341c0e552a768ef957e0c"
  },
  {
    "url": "study-notes/back-end/java/os.html",
    "revision": "385b9516850fb93832067bed511b1efe"
  },
  {
    "url": "study-notes/back-end/java/redis.html",
    "revision": "debdff840a88b475ed1357dcc0456089"
  },
  {
    "url": "study-notes/back-end/java/rocketmq.html",
    "revision": "bd256230062f1fca611a1f29d5a2bb49"
  },
  {
    "url": "study-notes/back-end/java/spring.html",
    "revision": "a030b45ae9a7f5e1666938b734bf972d"
  },
  {
    "url": "study-notes/back-end/java/weifuwu.html",
    "revision": "1f3036515ad369a5a1dd00a7d39589c1"
  },
  {
    "url": "study-notes/back-end/python/index.html",
    "revision": "41c803e50628798951cca7bfb9e20495"
  },
  {
    "url": "study-notes/common/common-tools/index.html",
    "revision": "c319d2121b92f44f2aa2a70b7e168e1d"
  },
  {
    "url": "study-notes/front-end/html/basic/index.html",
    "revision": "c0e1262ab6edb152c3dae7f08b8e2804"
  },
  {
    "url": "study-notes/front-end/html/index.html",
    "revision": "20307a9532880ace3138aec735e02996"
  },
  {
    "url": "study-notes/front-end/index.html",
    "revision": "4de2c7ba692af7c902e9670983208189"
  },
  {
    "url": "study-notes/front-end/javaScript/index.html",
    "revision": "34f13115dd7a1217746f2ce2241f26e5"
  },
  {
    "url": "study-notes/index.html",
    "revision": "c82733320fe289db000bb1fa0e78dc2f"
  },
  {
    "url": "vuepress-custom-content-width/index.html",
    "revision": "6b42c212a61a6892a12b4f56e4ff166b"
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
