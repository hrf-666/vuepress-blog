(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{498:function(t,s,v){t.exports=v.p+"assets/img/3.nginx负载均衡.4c9eaadf.png"},499:function(t,s,v){t.exports=v.p+"assets/img/5.Nginx配置负载均衡.a3734287.png"},500:function(t,s,v){t.exports=v.p+"assets/img/4.Nginx启动指定配置文件.9b809bc9.png"},501:function(t,s,v){t.exports=v.p+"assets/img/6.创建一个线程组.9662c3d0.jpg"},502:function(t,s,v){t.exports=v.p+"assets/img/7.配置线程组.f9757adc.jpg"},503:function(t,s,v){t.exports=v.p+"assets/img/8.创建一个http请求.464725c6.jpg"},504:function(t,s,v){t.exports=v.p+"assets/img/9.http请求参数配置.dd88b3b5.jpg"},505:function(t,s,v){t.exports=v.p+"assets/img/10.创建一个并发请求.8d7c806d.jpg"},506:function(t,s,v){t.exports=v.p+"assets/img/11.创建并发查看报告.ebd0778a.jpg"},507:function(t,s,v){t.exports=v.p+"assets/img/12.并发结果.217d2450.png"},508:function(t,s,v){t.exports=v.p+"assets/img/13.分布式锁.3e06e370.jpg"},926:function(t,s,v){"use strict";v.r(s);var n=v(2),_=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"手写分布式锁思路分析2023"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#手写分布式锁思路分析2023"}},[t._v("#")]),t._v(" 手写分布式锁思路分析2023")]),t._v(" "),s("p",[s("font",{attrs:{color:"red"}},[t._v("上述笔记代码的不足\n")])],1),t._v(" "),s("ol",[s("li",[s("p",[t._v("初始化版本简单添加")]),t._v(" "),s("p",[t._v("业务类，将上面7777的业务逻辑代码原样拷贝到8888，加上synchronized或者Lock")])]),t._v(" "),s("li",[s("p",[t._v("nginx分布式微服务架构")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("v2.0版本代码分布式部署后，单机锁还是出现超卖现象，需要分布式锁")]),t._v(" "),s("p",[s("img",{attrs:{src:v(498),alt:""}})])]),t._v(" "),s("li",[s("p",[t._v("Nginx配置负载均衡")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("命令地址+配置地址")]),t._v(" "),s("p",[t._v("命令地址：/usr/local/nginx/sbin")]),t._v(" "),s("p",[t._v("配置地址：/usr/local/nginx/conf")])]),t._v(" "),s("li",[s("p",[t._v("启动")]),t._v(" "),s("p",[t._v("/usr/local/nginx/sbin\t执行./nginx")]),t._v(" "),s("p",[t._v("启动Nginx并测试通过，浏览器看到Nginx欢迎welcome页面")])]),t._v(" "),s("li",[s("p",[t._v("/usr/local/nginx/conf目录下修改配置文件nginx.conf新增反向代理和负载均衡配置")]),t._v(" "),s("p",[s("img",{attrs:{src:v(499),alt:""}})])]),t._v(" "),s("li",[s("p",[t._v("关闭")]),t._v(" "),s("p",[t._v("/usr/local/nginx/sbin  执行./nginx -s stop")])]),t._v(" "),s("li",[s("p",[t._v("指定配置启动")]),t._v(" "),s("p",[t._v("在/usr/local/nginx/sbin 路径下执行命令 ./nginx -c nginx.conf全路径")]),t._v(" "),s("p",[s("img",{attrs:{src:v(500),alt:""}})])]),t._v(" "),s("li",[s("p",[t._v("重启")]),t._v(" "),s("p",[t._v("在/usr/local/nginx/sbin  执行./nginx -s reload")])])])]),t._v(" "),s("li",[s("p",[t._v("v2.0版本代码修改+启动两个微服务")]),t._v(" "),s("p",[t._v("​\t通过Nginx访问，自己Linux服务器IP地址，反向代理+负载均衡")]),t._v(" "),s("p",[t._v("​\t可以点击查看效果，可以看到一边一个，通过配置的权重来轮询")]),t._v(" "),s("p",[t._v("​    http://1270.0.1/inventory/sale")])]),t._v(" "),s("li",[s("p",[t._v("上面纯手工点击验证OK，下面高并发模拟")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("使用jmeter进行压测")])]),t._v(" "),s("li",[s("p",[t._v("创建线程组Redis")]),t._v(" "),s("p",[s("img",{attrs:{src:v(501),alt:""}})]),t._v(" "),s("p",[s("img",{attrs:{src:v(502),alt:""}})])]),t._v(" "),s("li",[s("p",[t._v("创建一个http请求")]),t._v(" "),s("p",[s("img",{attrs:{src:v(503),alt:""}})]),t._v(" "),s("p",[s("img",{attrs:{src:v(504),alt:""}})])]),t._v(" "),s("li",[s("p",[t._v("jmeter压测")]),t._v(" "),s("p",[s("img",{attrs:{src:v(505),alt:""}})]),t._v(" "),s("p",[t._v("查看报告")]),t._v(" "),s("p",[s("img",{attrs:{src:v(506),alt:""}})]),t._v(" "),s("p",[t._v("执行绿色执行按钮，开始并发请求程序")])]),t._v(" "),s("li",[s("p",[t._v("发现商品出现超卖")]),t._v(" "),s("p",[s("img",{attrs:{src:v(507),alt:""}})])])])]),t._v(" "),s("li",[s("p",[t._v("Bug？why？")]),t._v(" "),s("p",[t._v("synchronized和ReentrantLock是单机锁，只能管住当前自己的jvm。")]),t._v(" "),s("p",[t._v("在"),s("font",{attrs:{color:"red"}},[t._v("单机环境")]),t._v("下，可以使用synchronized或Lock来实现")],1),t._v(" "),s("p",[t._v("但是在分布式系统中，因为竞争的线程可能不在同一个节点上(同一个jvm中)，所以需要一个让所有进程都能访问到的锁来实现"),s("font",{attrs:{color:"red"}},[t._v("(比如redis或者zookeeper来构建)")])],1),t._v(" "),s("p",[t._v("不同进程ivm层面的锁就不管用了，那么可以利用第三方的一个组件，来获取锁，未获取到锁，则阻塞当前想要运行的线程")])]),t._v(" "),s("li",[s("p",[t._v("分布式锁出现")]),t._v(" "),s("p",[t._v("跨进程+跨服务")]),t._v(" "),s("p",[t._v("解决超卖")]),t._v(" "),s("p",[t._v("防止缓存击穿")])])])]),t._v(" "),s("li",[s("p",[t._v("解决")]),t._v(" "),s("p",[t._v("上Redis分布式锁setnx；Redis具有极高的性能,且其命令对分布式锁支持友好,借助SET 命令即可实现加锁处理。")]),t._v(" "),s("p",[s("img",{attrs:{src:v(508),alt:""}})])])])])}),[],!1,null,null,null);s.default=_.exports}}]);