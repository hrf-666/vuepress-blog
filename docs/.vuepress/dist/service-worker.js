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
    "revision": "7123913377560bec509c578a5ccfd7f4"
  },
  {
    "url": "aboutme/index.html",
    "revision": "22de7a3528e1f9e2bbef0565669d5052"
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
    "url": "assets/js/24.c22bc628.js",
    "revision": "e48733320b60475e371669a6f7a54a5d"
  },
  {
    "url": "assets/js/25.45039e9e.js",
    "revision": "d0655b7c121b52173fa4d730b7539928"
  },
  {
    "url": "assets/js/26.75c27ee5.js",
    "revision": "8e3b615f93894db73a1397b2a7c0ccae"
  },
  {
    "url": "assets/js/27.0990bf8d.js",
    "revision": "0ee82f8912eb3de8169267a8d7e71094"
  },
  {
    "url": "assets/js/28.c94fce2f.js",
    "revision": "1612d0576bda9f9f17f0c027f2cea49b"
  },
  {
    "url": "assets/js/29.09746e1b.js",
    "revision": "f4d2e231b249887dc06a9b6716aae8ce"
  },
  {
    "url": "assets/js/3.d5b2439e.js",
    "revision": "664b842bbfb373fbf53f9c867206d673"
  },
  {
    "url": "assets/js/30.1fcd9673.js",
    "revision": "f8397497d96091c920b93e6f1d243d0b"
  },
  {
    "url": "assets/js/31.e3b7826c.js",
    "revision": "6caa0060b68e44535081c2011074bf07"
  },
  {
    "url": "assets/js/32.071a0baa.js",
    "revision": "ff8b9c2ec5648d76682d6b360a38f589"
  },
  {
    "url": "assets/js/33.d7e83215.js",
    "revision": "94cbb127c8f7e046223cbd242cfa8d05"
  },
  {
    "url": "assets/js/34.5342458c.js",
    "revision": "1718406bc650db6ac56506b3602b784b"
  },
  {
    "url": "assets/js/35.7b49ea89.js",
    "revision": "43f7da6fea2785435a3c53a90dadeafd"
  },
  {
    "url": "assets/js/36.7e04a44f.js",
    "revision": "90ed529bde78adcb9c952fd8f55158d0"
  },
  {
    "url": "assets/js/37.3adaf4eb.js",
    "revision": "85ae72f9364bf27321dfc88194786c1b"
  },
  {
    "url": "assets/js/38.865c9fbc.js",
    "revision": "6de8a571a689c8844429f3c04ed251b8"
  },
  {
    "url": "assets/js/39.71f5b364.js",
    "revision": "a4cdfc32788db6fc7a0182825e5d7a81"
  },
  {
    "url": "assets/js/4.da81c3e9.js",
    "revision": "2a872627bbbf86e7c9394eb39e887ba3"
  },
  {
    "url": "assets/js/40.97369aa1.js",
    "revision": "9d98f7db588d0b414ee07c9095818649"
  },
  {
    "url": "assets/js/41.f4498d80.js",
    "revision": "a026540e77fa3ec8469abd65c5e5d257"
  },
  {
    "url": "assets/js/42.44b3f1a3.js",
    "revision": "86dd6bff0b311e0b1d36796f9ecc17dd"
  },
  {
    "url": "assets/js/43.920faa81.js",
    "revision": "308ce7e59497d5d9555d430259c90776"
  },
  {
    "url": "assets/js/44.c2ff24fd.js",
    "revision": "13fe584a72c7322da51025a36a96e92d"
  },
  {
    "url": "assets/js/45.00e7ab45.js",
    "revision": "bcde5f9f811ef8613b3c9ba57c776bc0"
  },
  {
    "url": "assets/js/46.baa054b0.js",
    "revision": "0f4894241dc6b4fab2081aa059a9fca3"
  },
  {
    "url": "assets/js/47.2a384649.js",
    "revision": "ba79aacab89ca5ab53fbe72e3726ff14"
  },
  {
    "url": "assets/js/48.ffab981d.js",
    "revision": "506f442e52b0ea7299fde273dfa1c781"
  },
  {
    "url": "assets/js/49.5671573a.js",
    "revision": "81cd1e2c1138dd5c0816e18cce3df80c"
  },
  {
    "url": "assets/js/5.841b10ce.js",
    "revision": "d18bb96742b1a16c268c21ff55cee40c"
  },
  {
    "url": "assets/js/50.f052503a.js",
    "revision": "2e0a2f4f7390ca2a4bab594c94a7e44e"
  },
  {
    "url": "assets/js/51.8fc7cc4a.js",
    "revision": "82ffd427e87932144110ead71e0ad5c4"
  },
  {
    "url": "assets/js/52.448a3b0a.js",
    "revision": "8a50d4094f44f5fd8797aeb08a95552c"
  },
  {
    "url": "assets/js/53.8637db2a.js",
    "revision": "a920574f2bf576c22ef0aaf01c4c72ac"
  },
  {
    "url": "assets/js/54.630486a2.js",
    "revision": "1b3fa4ca621700bd2f6f9c6fe0ff334c"
  },
  {
    "url": "assets/js/55.9b8dcb16.js",
    "revision": "701f6c899f5563ad10c1d48d72fd67f1"
  },
  {
    "url": "assets/js/56.61b6196e.js",
    "revision": "7562ab0869b46949a0359205a44db431"
  },
  {
    "url": "assets/js/57.2b543047.js",
    "revision": "1f5d41e0d252c75a2d4a629c5313b637"
  },
  {
    "url": "assets/js/58.9d367ef7.js",
    "revision": "e25e93582c83a0ec3ac633f3303e85df"
  },
  {
    "url": "assets/js/59.ad2152c4.js",
    "revision": "9978892da6dd687c91938e44f68a92fd"
  },
  {
    "url": "assets/js/6.508a846c.js",
    "revision": "341974fd34eaf41eedec21b55d7dfabd"
  },
  {
    "url": "assets/js/60.42c44ea1.js",
    "revision": "cf4faea620054b546b9de51ef3b611fa"
  },
  {
    "url": "assets/js/61.998f07c9.js",
    "revision": "990a669b02c8f49911bacff523041748"
  },
  {
    "url": "assets/js/62.3e20d402.js",
    "revision": "48b2c9f4d52afc723c5ea916c1083841"
  },
  {
    "url": "assets/js/63.0d0d6528.js",
    "revision": "b712afd26f08067b6167439326ad6058"
  },
  {
    "url": "assets/js/64.f7181cdd.js",
    "revision": "73ec43347c9b1cdb467895605a4fb977"
  },
  {
    "url": "assets/js/65.d4300085.js",
    "revision": "f6ec4d48f5b41657e22dff35387bc43e"
  },
  {
    "url": "assets/js/66.b4682a88.js",
    "revision": "4121249e47f73c08fc86e82693555f83"
  },
  {
    "url": "assets/js/67.6357b6ca.js",
    "revision": "324b4a94b325bff48691507151cca88a"
  },
  {
    "url": "assets/js/68.6695d13c.js",
    "revision": "f3488efcfc0e7f064ecd32981eeb3fda"
  },
  {
    "url": "assets/js/69.04208484.js",
    "revision": "8df272783444596c15d9e2cb0429d62d"
  },
  {
    "url": "assets/js/7.9f58c0f5.js",
    "revision": "c6808306ac52e461010b2e4b5a36f1e0"
  },
  {
    "url": "assets/js/70.25628a88.js",
    "revision": "b410f1a72643ccfbd78532a2febe1c51"
  },
  {
    "url": "assets/js/71.4ecb2366.js",
    "revision": "894fa208b68c44dcde48a5bd4a352578"
  },
  {
    "url": "assets/js/72.a949c149.js",
    "revision": "c6fcb5935b397ba17d05155f31b1b283"
  },
  {
    "url": "assets/js/73.a92678ef.js",
    "revision": "6169fa4a887f4358a5669672d4c61738"
  },
  {
    "url": "assets/js/74.8587d0ef.js",
    "revision": "a9d4661b2e7b5687b12e580ea6f9d9dd"
  },
  {
    "url": "assets/js/75.a4fcb27c.js",
    "revision": "997f6f695520d332c05f79b086363362"
  },
  {
    "url": "assets/js/76.a6ec957a.js",
    "revision": "258b4ef06c7085a17caeb2c47e6205fc"
  },
  {
    "url": "assets/js/77.eb79801d.js",
    "revision": "7d9dbe19cdbacd2e87f967d954f6c22a"
  },
  {
    "url": "assets/js/78.873bcdf1.js",
    "revision": "c3151ce4e64d32b95a89c13f08f67b8b"
  },
  {
    "url": "assets/js/79.176c2174.js",
    "revision": "72ad2ee8c8a5eee017224a199c8ba1ba"
  },
  {
    "url": "assets/js/80.a7689f68.js",
    "revision": "d556013f7b06ecb73446f4c81fec5df2"
  },
  {
    "url": "assets/js/81.ae01a91c.js",
    "revision": "7fc5fe1875ff647d5389dceb43bd9122"
  },
  {
    "url": "assets/js/82.be8d1453.js",
    "revision": "1b1db13ca521864d45b386536ef76d7a"
  },
  {
    "url": "assets/js/83.7f4f787c.js",
    "revision": "087e750da9c51572fbe7e9e21a24bc8f"
  },
  {
    "url": "assets/js/84.a750164e.js",
    "revision": "653ed1b3e007523b295e3d5846713bd5"
  },
  {
    "url": "assets/js/85.d84d31a4.js",
    "revision": "a6000743d9a2b0eb06c49bd6bea7a4a7"
  },
  {
    "url": "assets/js/86.06dfe127.js",
    "revision": "049cac46023dec74593aab66a5741e2a"
  },
  {
    "url": "assets/js/87.b2d2e078.js",
    "revision": "4f4a8c586328d384f13b70217c5a9561"
  },
  {
    "url": "assets/js/88.aa09184b.js",
    "revision": "6ddcdf52b5989bd69d438f1a07b57bc2"
  },
  {
    "url": "assets/js/89.c7bf6922.js",
    "revision": "657ee8dfcf967b3b83130726b49fb140"
  },
  {
    "url": "assets/js/90.c3641793.js",
    "revision": "a30f7eb8e16ab2c2a79493059de38dc1"
  },
  {
    "url": "assets/js/91.ddb0b164.js",
    "revision": "c16f9d0a5f953d91c01e11fa3316c653"
  },
  {
    "url": "assets/js/92.d7c6f78d.js",
    "revision": "b2dc549b03d0cf89aba815c378ce6089"
  },
  {
    "url": "assets/js/93.396f4b7a.js",
    "revision": "23219fa9b2f1520d6ed9e04ee7224b9b"
  },
  {
    "url": "assets/js/94.c7d4ed81.js",
    "revision": "cc36b778b3a1b84ec37f3c0faab18c3e"
  },
  {
    "url": "assets/js/95.4858a979.js",
    "revision": "68db8c00c93bd44c57f227dacc247e8b"
  },
  {
    "url": "assets/js/96.80d4250b.js",
    "revision": "c650bc92bdff93248a6fe90d9312f76d"
  },
  {
    "url": "assets/js/97.68bf8da8.js",
    "revision": "6a41e9b400e4e469ca084153539d2055"
  },
  {
    "url": "assets/js/98.f7a66ec0.js",
    "revision": "86585ef444d803ecb5427e73a1d52d77"
  },
  {
    "url": "assets/js/app.c65e245c.js",
    "revision": "2d0121793da8fd5c802339ec1918518a"
  },
  {
    "url": "assets/js/vendors~docsearch.7bcd5e47.js",
    "revision": "fedb91d1e1e352065427033e9b8e5dc1"
  },
  {
    "url": "blog-article/database/derby/derby.html",
    "revision": "c7f33f98c6bb1bfd03e4740a4b3051e7"
  },
  {
    "url": "blog-article/database/index.html",
    "revision": "7980dee98c4999fe579b8d5ccf47f997"
  },
  {
    "url": "blog-article/drawing-bed/index.html",
    "revision": "c568ac344d866419dbfb1a25301e5557"
  },
  {
    "url": "blog-article/drawing-bed/picGo+gitee.html",
    "revision": "9e2afbf8a7ddb1d964e26deeebc1ec02"
  },
  {
    "url": "blog-article/front-end/easyui/easyui-tree-combotree.html",
    "revision": "0a026dc30c71e9e2aeaacc921af03b20"
  },
  {
    "url": "blog-article/front-end/index.html",
    "revision": "4255ceda2c98d0c36b0f0207ff898661"
  },
  {
    "url": "blog-article/front-end/js/js-array-object-contain-duplicate-values.html",
    "revision": "47d35eadabc3efa3c74096b2cdb8afd1"
  },
  {
    "url": "blog-article/front-end/vuepress/vuepress-auto-sidebar.html",
    "revision": "a0ae0a8ba48688d62c3285eeb726c7ce"
  },
  {
    "url": "blog-article/front-end/vuepress/vuepress-back-last-read.html",
    "revision": "760a036f55cec85d8c05be47b06806a5"
  },
  {
    "url": "blog-article/front-end/vuepress/vuepress-custom-navigation.html",
    "revision": "da3a47b73fcc6b665acc6a7c7bc0bd2e"
  },
  {
    "url": "blog-article/front-end/vuepress/vuepress-fix-search.html",
    "revision": "2901ea9fbe20fefbb560de6c442f3b78"
  },
  {
    "url": "blog-article/front-end/vuepress/vuepress-loads-network-images.html",
    "revision": "fc5b97ee7ea29fd61b0e7e3a7d25cbbd"
  },
  {
    "url": "blog-article/front-end/vuepress/vuepress-pwa.html",
    "revision": "817a75e2776d3a48c471a2ee1423b7d2"
  },
  {
    "url": "blog-article/front-end/vuepress/vuepress-right-sidebar.html",
    "revision": "7a4ef59807995b41c08cec51c356786c"
  },
  {
    "url": "blog-article/front-end/vuepress/vuepress-sakura-plugin.html",
    "revision": "dccf26fc08fb0cdd29e280afaadb4a49"
  },
  {
    "url": "blog-article/index.html",
    "revision": "f558be07667767213c47dd58c9a8933e"
  },
  {
    "url": "blog-article/java/basic/byte-array-and-string.html",
    "revision": "ba327769b6fd64275d22d6e76cd76d77"
  },
  {
    "url": "blog-article/java/basic/list-string-remove-duplicate.html",
    "revision": "d0bb96c5b45c2789b240649345722bd7"
  },
  {
    "url": "blog-article/java/basic/stream-extract-id.html",
    "revision": "531825a163cab406edbbab7e217966f6"
  },
  {
    "url": "blog-article/java/index.html",
    "revision": "f1c444fc6afe5fef623d81a809bb2076"
  },
  {
    "url": "blog-article/java/software/idea-maven.html",
    "revision": "291060ca8c2ec4e31c1d64d6bdd8031d"
  },
  {
    "url": "blog-article/java/software/jdk-install.html",
    "revision": "7cbec9ea98d81eab80297fc285e5bf1f"
  },
  {
    "url": "blog-article/java/software/maven-install.html",
    "revision": "be6b031421279a208d0602e925f6dbb6"
  },
  {
    "url": "blog-article/java/springboot/ip-blacklist.html",
    "revision": "eb431f1e4e85e1fde35d2d4529b90844"
  },
  {
    "url": "blog-article/mybatis/index.html",
    "revision": "2f388ade3a9e518fb3aa0dd6fd9ec19c"
  },
  {
    "url": "blog-article/mybatis/mybatis-Integer.html",
    "revision": "4eed3e372d1c2f5b73385d7b9f9714cc"
  },
  {
    "url": "blog-article/mybatis/mybatis-list-map-array.html",
    "revision": "10736a58afe76791b26b98108041dfcc"
  },
  {
    "url": "blog-article/mybatis/mybatis-List-map.html",
    "revision": "b907a19a4bd56a489204fa0a3c510147"
  },
  {
    "url": "blog-article/mybatis/mybatis-type-handler.html",
    "revision": "e2e519a3234c3d57f546e8fdfd9accdd"
  },
  {
    "url": "blog-article/other/index.html",
    "revision": "fafaad43008d1666163ade615c003b9f"
  },
  {
    "url": "blog-article/python/first-acquaintance-python.html",
    "revision": "90293b853f752ef0e1ffff59e9c1682a"
  },
  {
    "url": "blog-article/python/index.html",
    "revision": "53420fcc9f4e1daeca415b2c63bad5be"
  },
  {
    "url": "blog-article/python/python-basic.html",
    "revision": "64527d8252aed1b62a398fb795248897"
  },
  {
    "url": "code-demo/back-end-code/index.html",
    "revision": "3045220d934f4855b7d7c0ed73c7f389"
  },
  {
    "url": "code-demo/front-end-code/index.html",
    "revision": "e787937cd716e78bcbff5e85f47d7873"
  },
  {
    "url": "code-demo/index.html",
    "revision": "0be47eee1ac28673a64cf31a23da3dba"
  },
  {
    "url": "code-demo/other.html",
    "revision": "6193a77a317ce2c259bfe2384a3a981b"
  },
  {
    "url": "friendly-chain/index.html",
    "revision": "a7c4392be7deebd8c4cae62da2b754c8"
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
    "revision": "aefdffa856082914af48c677777df2a5"
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
    "revision": "021051564e8b83d57421097c190f1cd2"
  },
  {
    "url": "other/index.html",
    "revision": "c70b21ba6ea8a8f9b84c210a738ac258"
  },
  {
    "url": "other/notes-on-tomb-robbery.html",
    "revision": "b3428a5f271cbd0bd30d1c89b75c0fae"
  },
  {
    "url": "read/books/fanshiyaochenzao.html",
    "revision": "025744a4c75fd28ff1d8b6ed0cf8eae0"
  },
  {
    "url": "read/classic-sentences/ruyizhuan.html",
    "revision": "6512a2d610148a444d24490d0ad86e9a"
  },
  {
    "url": "read/classic-sentences/saniti.html",
    "revision": "cc5fa4deffd06f1112bb90dac74b4d17"
  },
  {
    "url": "read/classic-sentences/zhenhuanzhuan.html",
    "revision": "d9bac53d346ca14e496e27fd48654174"
  },
  {
    "url": "read/classic-sentences/zhifou.html",
    "revision": "2172557b0b104292b2ea451f35a4ef52"
  },
  {
    "url": "read/compile/struggle.html",
    "revision": "43a02416b34eae7b0e09e8ab6f9cd4f5"
  },
  {
    "url": "read/index.html",
    "revision": "b730536129b119ad55f7d13638ff0c1b"
  },
  {
    "url": "study-notes/back-end/index.html",
    "revision": "46b6a47c4639933e0fa478161c091753"
  },
  {
    "url": "study-notes/back-end/java/collection.html",
    "revision": "ba14ca89ff71cb397a3377e82c40a35b"
  },
  {
    "url": "study-notes/back-end/java/fenbushi.html",
    "revision": "239c3179223106510804b6a46c04f6de"
  },
  {
    "url": "study-notes/back-end/java/index.html",
    "revision": "68f5d8f9c68cc183b137182151f42bdb"
  },
  {
    "url": "study-notes/back-end/java/javase.html",
    "revision": "82f258a052beb48d0e9454e0e9583bd1"
  },
  {
    "url": "study-notes/back-end/java/javathread.html",
    "revision": "adcb8cbfce5dace38282aca48750ce6e"
  },
  {
    "url": "study-notes/back-end/java/jvm.html",
    "revision": "cdad7a2b4c610d94a5d72d7d53c490eb"
  },
  {
    "url": "study-notes/back-end/java/mybatis.html",
    "revision": "729cb2ae1b82e1a33b15382b880805a3"
  },
  {
    "url": "study-notes/back-end/java/mysql.html",
    "revision": "4e468d48542f0e352ff95661269f08f0"
  },
  {
    "url": "study-notes/back-end/java/network.html",
    "revision": "e5442944cfb6a882ae2bc809ef8fe4e9"
  },
  {
    "url": "study-notes/back-end/java/nixi.html",
    "revision": "56d8457ec01c05e4aa95f59cc9b99dc5"
  },
  {
    "url": "study-notes/back-end/java/os.html",
    "revision": "a314add5f536bb48245ee5551b8a6da1"
  },
  {
    "url": "study-notes/back-end/java/redis.html",
    "revision": "07918e4292fdd8c0f6309205705f9ce3"
  },
  {
    "url": "study-notes/back-end/java/rocketmq.html",
    "revision": "e2575b1274cddb9faf1f4f98ad5196a6"
  },
  {
    "url": "study-notes/back-end/java/spring.html",
    "revision": "ce288edbdfe2cdd78675ae5e7bbfef14"
  },
  {
    "url": "study-notes/back-end/java/weifuwu.html",
    "revision": "2756560a4cbdccfa6fd65da3118f9a4a"
  },
  {
    "url": "study-notes/back-end/python/index.html",
    "revision": "0bc0eaa4425a45929c4ee84fd1d6be19"
  },
  {
    "url": "study-notes/common/common-tools/index.html",
    "revision": "1698af1a4da177ab22e6a018ff12b316"
  },
  {
    "url": "study-notes/front-end/html/basic/index.html",
    "revision": "3949ae39c1309717506c7afcea036629"
  },
  {
    "url": "study-notes/front-end/html/index.html",
    "revision": "1c147a4759949af8d6db07f1bc724fa4"
  },
  {
    "url": "study-notes/front-end/index.html",
    "revision": "493d790f35dd55d3951b50f267f8ed6b"
  },
  {
    "url": "study-notes/front-end/javaScript/index.html",
    "revision": "9ab933864db2dd24456d985618a038da"
  },
  {
    "url": "study-notes/index.html",
    "revision": "59ffaa3d84d4f7bb9eb130bd06d94fea"
  },
  {
    "url": "vuepress-custom-content-width/index.html",
    "revision": "c65c3eb9bbf7973a5ccc4abadc1e227b"
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
