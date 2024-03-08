(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{366:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"mybatis-mapper-xml类型判断"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mybatis-mapper-xml类型判断"}},[t._v("#")]),t._v(" mybatis Mapper.xml类型判断")]),t._v(" "),s("h2",{attrs:{id:"_1-判断string是否为空"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-判断string是否为空"}},[t._v("#")]),t._v(" 1. 判断String是否为空")]),t._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("test")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v('str!=null and str=="" '),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("或者\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("test")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("str!=null and str==''"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("h2",{attrs:{id:"_2-判断integer是否大于0"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-判断integer是否大于0"}},[t._v("#")]),t._v(" 2.判断Integer是否大于0")]),t._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("test")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("idParam !=null and idParam>0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("h2",{attrs:{id:"_3-判断integer不等于0"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-判断integer不等于0"}},[t._v("#")]),t._v(" 3.判断Integer不等于0")]),t._v(" "),s("p",[t._v("Mybatis将Integer=0或者int=0的入参会默认为''（空串） ,selectKey查询出来的count==0 不受此限制\n以下是两种解决方案")]),t._v(" "),s("h3",{attrs:{id:"_3-1-去掉空字符串判断"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-去掉空字符串判断"}},[t._v("#")]),t._v(" 3.1 去掉空字符串判断")]),t._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("test")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("version != null"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("h3",{attrs:{id:"_3-2-添加0值判断-增强判断添加-or-eq-isvalid-0"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-添加0值判断-增强判断添加-or-eq-isvalid-0"}},[t._v("#")]),t._v(" 3.2 添加0值判断,增强判断添加 or eq_isValid ==0")]),t._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("test")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("version != null and version != '' or version == 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("这两种方法都是可以的，在我看来是这样，如果这个version类型和我的情况一样，是包装类型而不是基本数据类型的话， 第一种就足够了，而且更贴近实际，")]),t._v(" "),s("p",[t._v('因为包装类型除了有值的情况就是null，不会为""空字符串的，String类型不在')]),t._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("choose")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("when")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("test")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("count >0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        select 1\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("when")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("otherwise")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        select 2\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("otherwise")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("choose")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("h3",{attrs:{id:"_4-判断list是否不为空"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-判断list是否不为空"}},[t._v("#")]),t._v(" 4 判断List是否不为空")]),t._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("test")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("listParam !=null and listParam.size >0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("h3",{attrs:{id:"_5-判断string是否以某特定字符-比如此处的-string-开头"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-判断string是否以某特定字符-比如此处的-string-开头"}},[t._v("#")]),t._v(' 5 判断String是否以某特定字符(比如此处的"string")开头')]),t._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("test")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("stringParam.indexOf('string') != -1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("h3",{attrs:{id:"_6-判断字符串是否等于特定字符-比如此处的user"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-判断字符串是否等于特定字符-比如此处的user"}},[t._v("#")]),t._v(" 6 判断字符串是否等于特定字符(比如此处的user)")]),t._v(" "),s("p",[t._v("mybatis 映射文件中，if标签判断字符串相等,sex是string类型，原因是：mybatis是用OGNL表达式来解析的,在OGNL的表达式中，’1’会被解析成字符，java是强类型的，char 和 一个string\n会导致不等，所以if标签中的sql不会被解析。\n错解: "),s("if",{attrs:{test:"sex=='Y' "}},[t._v(" 此写法会报java.lang.NumberFormatException异常,单个字符会转成数值型\n正解: "),s("if",{attrs:{test:"sex=='Y'.toString()"}},[t._v(" 或者"),s("if",{attrs:{test:'sex== "Y"'}},[t._v(" 单个的字符要写到双引号里面或者使用.toString()\n才行！多个字符不受限制"),s("when",{attrs:{test:"count =='TT' "}},[t._v(", 最好写成  ' count==\"TT\" '\n正解:  "),s("if",{attrs:{test:"indentify==0 "}},[t._v("或者 "),s("if",{attrs:{test:'indentify=="0" '}},[t._v("   ( 数值型字符串判断,mybatis会自动转换成数值类型)")])],1)],1)],1)],1)],1)],1),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("           `<if test='indentify>0 '>`\n")])])]),s("p",[t._v("给变量加 .toString() 是不行的，至少实际在所使用的myBatis版本（mybatis-3.2.5.jar,mybatis-spring-1.2.1.jar）是不可以，以后版本不知道，这应该是在经过 myBatis\n时，影响到其转换操作，故出现错误")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://blog.csdn.net/qq_31459039/article/details/79961116",target:"_blank",rel:"noopener noreferrer"}},[t._v("原文链接"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);