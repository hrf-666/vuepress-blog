(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{418:function(s,t,a){s.exports=a.p+"assets/img/12.BigKey删除规范.d99a9582.jpg"},419:function(s,t,a){s.exports=a.p+"assets/img/13.BigKey渐进式删除.f0752a87.jpg"},420:function(s,t,a){s.exports=a.p+"assets/img/14.hscan.198f0c15.jpg"},421:function(s,t,a){s.exports=a.p+"assets/img/15.hash大key阿里手册.f7800423.jpg"},422:function(s,t,a){s.exports=a.p+"assets/img/16.ltrim命令.83d285c8.jpg"},423:function(s,t,a){s.exports=a.p+"assets/img/17.ltrim实操.9a3597c8.jpg"},424:function(s,t,a){s.exports=a.p+"assets/img/18.list大key阿里手册.a9a1d255.jpg"},425:function(s,t,a){s.exports=a.p+"assets/img/19.sscan命令.57a578f9.jpg"},426:function(s,t,a){s.exports=a.p+"assets/img/20.set大key阿里手册.166fdbff.jpg"},427:function(s,t,a){s.exports=a.p+"assets/img/21.zscan命令.04ab67b7.jpg"},428:function(s,t,a){s.exports=a.p+"assets/img/22.zset删除.1e38e9ed.jpg"},429:function(s,t,a){s.exports=a.p+"assets/img/23.zset大key阿里手册.22527d85.jpg"},888:function(s,t,a){"use strict";a.r(t);var i=a(2),e=Object(i.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"大key如何删除"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#大key如何删除"}},[s._v("#")]),s._v(" 大key如何删除")]),s._v(" "),t("h3",{attrs:{id:"参考《阿里云redis开发规范》"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考《阿里云redis开发规范》"}},[s._v("#")]),s._v(" 参考《阿里云Redis开发规范》")]),s._v(" "),t("p",[t("img",{attrs:{src:a(418),alt:""}})]),s._v(" "),t("p",[t("img",{attrs:{src:a(419),alt:""}})]),s._v(" "),t("h3",{attrs:{id:"scan官网说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scan官网说明"}},[s._v("#")]),s._v(" scan官网说明")]),s._v(" "),t("ul",[t("li",[s._v("https://redis.io/commands/scan/")]),s._v(" "),t("li",[s._v("https://redis.com.cn/commands/scan.html")])]),s._v(" "),t("h3",{attrs:{id:"普通命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#普通命令"}},[s._v("#")]),s._v(" 普通命令")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("String")]),s._v(" "),t("p",[s._v("一般用del，如果过于庞大使用unlink key 删除")])]),s._v(" "),t("li",[t("p",[s._v("hash")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("使用hscan每次获取少量field-value，再使用hdel删除每个field")])]),s._v(" "),t("li",[t("p",[s._v("命令")]),s._v(" "),t("p",[t("img",{attrs:{src:a(420),alt:""}})])]),s._v(" "),t("li",[t("p",[s._v("阿里手册")]),s._v(" "),t("p",[t("img",{attrs:{src:a(421),alt:""}})])])])]),s._v(" "),t("li",[t("p",[s._v("list")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("使用ltrim渐进式逐步删除，直到全部删除完成")])]),s._v(" "),t("li",[t("p",[s._v("命令")]),s._v(" "),t("p",[t("img",{attrs:{src:a(422),alt:""}})]),s._v(" "),t("p",[t("img",{attrs:{src:a(423),alt:""}})])]),s._v(" "),t("li",[t("p",[s._v("阿里手册")]),s._v(" "),t("p",[t("img",{attrs:{src:a(424),alt:""}})])])])]),s._v(" "),t("li",[t("p",[s._v("set")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("使用sscan每次获取部分元素，在使用srem命令删除每个元素")])]),s._v(" "),t("li",[t("p",[s._v("命令")]),s._v(" "),t("p",[t("img",{attrs:{src:a(425),alt:""}})])]),s._v(" "),t("li",[t("p",[s._v("阿里手册")]),s._v(" "),t("p",[t("img",{attrs:{src:a(426),alt:""}})])])])]),s._v(" "),t("li",[t("p",[s._v("zset")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("使用zscan每次获取部分元素，在使用zremrangebyrank命令删除每个元素")])]),s._v(" "),t("li",[t("p",[s._v("命令")]),s._v(" "),t("p",[t("img",{attrs:{src:a(427),alt:""}})]),s._v(" "),t("p",[t("img",{attrs:{src:a(428),alt:""}})])]),s._v(" "),t("li",[t("p",[s._v("阿里手册")]),s._v(" "),t("p",[t("img",{attrs:{src:a(429),alt:""}})])])])])])])}),[],!1,null,null,null);t.default=e.exports}}]);