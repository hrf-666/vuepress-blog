(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{332:function(a,s,t){"use strict";t.r(s);var e=t(2),n=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"derby数据库基本语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#derby数据库基本语法"}},[a._v("#")]),a._v(" derby数据库基本语法")]),a._v(" "),s("h2",{attrs:{id:"_1-表操作语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-表操作语法"}},[a._v("#")]),a._v(" 1. 表操作语法")]),a._v(" "),s("h3",{attrs:{id:"_1-1-创建-连接数据库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-创建-连接数据库"}},[a._v("#")]),a._v(" 1.1 创建/连接数据库")]),a._v(" "),s("p",[a._v("网络服务器模式")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("connect "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'jdbc:derby://localhost:1527/MYDB;create=true;user=root;password=123'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("（1）“jdbc:derby:”derby数据库URL的头部，必须有；\n（2）“//localhost:1527/MYDB”网络服务器模式必有的主机IP、derby数据库端口号、数据库名（数据库会被创建在derby数据库解压包的bin目录下）；\n（3） “create=true”如果数据库不存在是否创建数据库；\n（4）“user=root;password=123”用户名和密码；")]),a._v(" "),s("p",[a._v("内嵌模式")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("connect "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'jdbc:derby:D:/MYDB;create=true;user=root;password=123'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("（1）“D:/MYDB”内嵌模式没有IP和端口，数据库会被创建在指定的路径下，若不在connect连接命令下指定则创建在当前的工作目录下。")]),a._v(" "),s("h3",{attrs:{id:"_1-2查看表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2查看表"}},[a._v("#")]),a._v(" 1.2查看表")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("show tables\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"_1-3创建-修改表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3创建-修改表"}},[a._v("#")]),a._v(" 1.3创建/修改表")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("CREATE TABLE\n    mytable\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("id")]),a._v("         VARCHAR"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" NOT NULL,\n    name       VARCHAR"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(",\n    sex        CHAR"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(",\n    createtime DATE,\n    age        INTEGER,\n    oid        VARCHAR"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(",\n    CONSTRAINT id_pk PRIMARY KEY "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br")])]),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rename")]),a._v(" table mytable to emp1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"_1-4修改表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-4修改表"}},[a._v("#")]),a._v(" 1.4修改表")]),a._v(" "),s("p",[a._v("（1）增加字段：alter table 表名 add 字段名 类型;")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("alter table mytable "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" newcolumn bigint"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("（2）删除字段：alter table 表名 drop column 字段名")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("alter table mytable drop "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("column")]),a._v(" newcolumn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("（3）修改字段")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rename")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("column")]),a._v(" mytable.mid to "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" //修改字段名 会破坏主键\nalter table mytable alter NAME "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" data "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("type")]),a._v(" varchar "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" //修改数据类型\nalter table mytable alter NAME not null"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" //修改字段不为空\nalter table mytable alter NAME default "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'aaa'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" //修改字段的初始值\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("h3",{attrs:{id:"_1-5查看表结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-5查看表结构"}},[a._v("#")]),a._v(" 1.5查看表结构")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("describe mytable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"_1-6删除整个表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-6删除整个表"}},[a._v("#")]),a._v(" 1.6删除整个表")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("drop table mytable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"_2数据操作语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2数据操作语法"}},[a._v("#")]),a._v(" 2数据操作语法")]),a._v(" "),s("h3",{attrs:{id:"_2-1-插入数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-插入数据"}},[a._v("#")]),a._v(" 2.1 插入数据")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("insert into mytable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("id,name,sex,createtime,age,oid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" values"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'1001'")]),a._v(","),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'李**'")]),a._v(","),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'男'")]),a._v(",date"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'2017-01-06'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(",22,"),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'1234'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"_2-2-更新数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-更新数据"}},[a._v("#")]),a._v(" 2.2 更新数据")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("update mytable "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("name")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'刘**'")]),a._v(" where "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("id")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'1001'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"_2-3删除数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3删除数据"}},[a._v("#")]),a._v(" 2.3删除数据")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("delete from mytable where "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("id")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'1001'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"_2-4查看数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-4查看数据"}},[a._v("#")]),a._v(" 2.4查看数据")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("select")]),a._v(" name,age\nfrom mytable\ngroup by age,name,oid\nhaving "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("oid")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'1234'")]),a._v("\norder by age asc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("desc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("h2",{attrs:{id:"_3-数据类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-数据类型"}},[a._v("#")]),a._v(" 3 数据类型")]),a._v(" "),s("p",[s("a",{attrs:{href:"http://db.apache.org/ddlutils/databases/derby.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://db.apache.org/ddlutils/databases/derby.html"),s("OutboundLink")],1)]),a._v(" "),s("p",[a._v("bigint 返回给定字符串或数字的 64-bit 整数常量。\nchar 返回给定值的固定长度的字符表示，最大长度为 254 个字节，该给定值必须是内置的 Apache Derby 类型之一。可以提供可选的第二个参数以指定字符串的长度。\ndate 返回输入值的日期表示。\ndouble 返回输入数字或字符串的双精度浮点表示。\ninteger 返回给定字符串、日期、时间或数字的整数常量。\nsmallint 返回给定字符串或数字的小整数常量。\ntime 返回输入值的时间表示。\ntimestamp 返回输入值的时间戳表示。\nvarchar 返回给定日期、时间、时间戳或字符串值的长度可变的字符表示，最大长度为 32,672 个字节。")]),a._v(" "),s("h2",{attrs:{id:"_4-函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-函数"}},[a._v("#")]),a._v(" 4 函数")]),a._v(" "),s("h3",{attrs:{id:"_4-1数据类型对应的函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1数据类型对应的函数"}},[a._v("#")]),a._v(" 4.1数据类型对应的函数")]),a._v(" "),s("p",[a._v("函数 返回值\nbigint(123.45) 123\nchar(‘123.45’) ‘123.45’\ndate(‘time’) ‘yyyy-MM-dd’\ndouble(123.45) 123.45\nInteger(123.45) 123\nsmallInt(123.45) 123\ntime(‘time’) ‘hh:mm:ss’\ntimeStamp(‘time’) ‘yyyy-MM-dd hh:mm:ss’\nvarchar(‘123.45’) ‘123.45’")]),a._v(" "),s("h3",{attrs:{id:"_4-2聚合函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2聚合函数"}},[a._v("#")]),a._v(" 4.2聚合函数")]),a._v(" "),s("p",[a._v("avg() 平均值\ncount()总行\nmax() 最大值\nmin() 最小值\nsum() 和")]),a._v(" "),s("h3",{attrs:{id:"_4-3数学函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-3数学函数"}},[a._v("#")]),a._v(" 4.3数学函数")]),a._v(" "),s("p",[a._v("abs() or absval() 绝对值\nmod(paramter1,parmeter2) 参数1除以参数2的余数\nsort() 平方根")]),a._v(" "),s("h3",{attrs:{id:"_4-4日期-和-时间函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-4日期-和-时间函数"}},[a._v("#")]),a._v(" 4.4日期 和 时间函数")]),a._v(" "),s("p",[a._v("函数 返回值\nday(time) 每月的第几天\nhour(time) 时\nminute(time) 分\nmonth(time) 月\nsecond(time) 秒\nyear(time) 年")]),a._v(" "),s("h3",{attrs:{id:"_4-5字符串函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-5字符串函数"}},[a._v("#")]),a._v(" 4.5字符串函数")]),a._v(" "),s("p",[a._v("|| 连接符号\nlcase() or lower() 转化小写\nucase() or upper() 转化大写\nlength() 长度\nlocate() 返回一个子字符串在搜索字符串中第一次出现的起始位置，如果没找到子字符串，则返回0。第一个参数是子字符串，第二个参数是搜索字符串，可选的起始位置可以提供作为第三个参数。\nrtrim() 去掉右空格\nltrim() 去掉左空格\nsubstr() 返回 VARCHAR 类型的输入字符串的一部分，在指定位置处开始，一直延续到字符串末尾，或延续到可选的第三个参数指定的位置。如果起始位置是正值，则它相对于字符串的开头；如果是负值，则是相对于字符串的末尾")]),a._v(" "),s("h3",{attrs:{id:"_4-6虚表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-6虚表"}},[a._v("#")]),a._v(" 4.6虚表")]),a._v(" "),s("p",[a._v("derby没有类似oracle的虚表，可以用 values 来达到虚表效果")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("values current_date"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("//返回当前的日期\nvalues current_time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("//返回当前的时间\nvalues current_timestamp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("//返回当前的时间戳\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("h3",{attrs:{id:"_4-7-去重-distinct"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-7-去重-distinct"}},[a._v("#")]),a._v(" 4.7 去重 distinct")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("select")]),a._v(" distinct name from mytable where "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("age")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("22")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"_5-索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-索引"}},[a._v("#")]),a._v(" 5 索引")]),a._v(" "),s("h3",{attrs:{id:"_5-1-创建索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-创建索引"}},[a._v("#")]),a._v(" 5.1 创建索引")]),a._v(" "),s("p",[a._v("create index 索引名 on 表名(字段1，字段2…….);")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("create index indexName on mytable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("id,name,sex,createtime,age,oid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"_5-2删除索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-2删除索引"}},[a._v("#")]),a._v(" 5.2删除索引")]),a._v(" "),s("p",[a._v("drop index 索引名;")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("drop index indexName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("注：主键和唯一键都会在创建的时候自动创建一个索引，再创建会出警告")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("Code: "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10000")]),a._v(" SQL State: 01504 --- The new index is a duplicate of an existing index: SQL170106111016840.\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"_6-自动加值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-自动加值"}},[a._v("#")]),a._v(" 6 自动加值")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("create table mytable1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("mid int generated by default as identity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("start with "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(",increment by "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(",\nmname varchar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("50")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("))")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("create table mytable1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("mid int generated by default as identity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("start with "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(",increment by "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(",\nmname varchar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("50")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("))")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("ul",[s("li",[s("a",{attrs:{href:"https://blog.csdn.net/qq_34928887/article/details/54138305",target:"_blank",rel:"noopener noreferrer"}},[a._v("原文链接"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=n.exports}}]);