(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{606:function(s,t,a){s.exports=a.p+"assets/img/69.HyperLogLog常用命令.7ea09b23.jpg"},607:function(s,t,a){s.exports=a.p+"assets/img/70.HyperLogLog命令演示.81083874.jpg"},959:function(s,t,a){"use strict";a.r(t);var e=a(2),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"redis基数统计-hyperloglog"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis基数统计-hyperloglog"}},[s._v("#")]),s._v(" Redis基数统计(HyperLogLog)")]),s._v(" "),t("h3",{attrs:{id:"看需求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#看需求"}},[s._v("#")]),s._v(" 看需求：")]),s._v(" "),t("p",[s._v("用户搜索网站关键词的数量")]),s._v(" "),t("p",[s._v("统计用户每天搜索不同词条个数")]),s._v(" "),t("p",[s._v("统计某个网站的UV、统计某个文章的UV")]),s._v(" "),t("p",[s._v("什么是UV？")]),s._v(" "),t("p",[s._v("Unique Visitor，独立访客，一般理解为客户端IP，"),t("strong",[s._v("需要去重考虑")])]),s._v(" "),t("h3",{attrs:{id:"是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#是什么"}},[s._v("#")]),s._v(" 是什么")]),s._v(" "),t("p",[s._v("去重复统计功能的基数估计算法-就是HyperLogLog")]),s._v(" "),t("div",{staticClass:"language-tex line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-tex"}},[t("code",[s._v("Redis在2.8.9版本添加了HyperLogLog 结构。\nRedis HyperLogLog是用来做基数统计的算法，HyperLogLog 的优点是，在输入元素的数量或者体积非常非常大时，计算基数所需的空间总是固定的、并且是很小的。\n在Redis里面，每个 HyperLogLog键只需要花费12KB内存，就可以计算接近2^64个不同元素的基数。这和计算基数时，元素越多耗费\n内存就越多的集合形成鲜明对比。\n但是，因为HyperLogLog只会根据输入元素来计算基数，而不会储存输入元素本身，所以HyperLogLog不能像集合那样，返回输入的各个元素。\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[t("strong",[s._v("基数")]),s._v("：是一种数据集，去重复后的真实个数")]),s._v(" "),t("div",{staticClass:"language-tex line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-tex"}},[t("code",[s._v("(全集)="),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("2,4,6,8,77,39,4,8,10"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n去掉重复的内容\n基数="),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("2,4,6,8,77,39,10"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" = 7\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("基数统计：用于统计一个集合中不重复的元素个数，就是对集合去重复后剩余元素的计算。")]),s._v(" "),t("p",[s._v("一句话：去重脱水后的真实数据")]),s._v(" "),t("p",[s._v("基本命令：")]),s._v(" "),t("p",[t("img",{attrs:{src:a(606),alt:""}})]),s._v(" "),t("p",[t("img",{attrs:{src:a(607),alt:""}})])])}),[],!1,null,null,null);t.default=r.exports}}]);