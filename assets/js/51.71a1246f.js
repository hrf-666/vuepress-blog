(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{727:function(s,r,t){s.exports=t.p+"assets/img/19.RDB快照禁用.86ea52d8.jpg"},728:function(s,r,t){s.exports=t.p+"assets/img/20.stop-writes-on-bgsave-error.9be1d20d.jpg"},729:function(s,r,t){s.exports=t.p+"assets/img/21.rdbcompression.dc6ddfdf.jpg"},730:function(s,r,t){s.exports=t.p+"assets/img/22.rdbchecksum.b47b6f05.jpg"},731:function(s,r,t){s.exports=t.p+"assets/img/23.rdb-del-sync-files.1ac818f6.jpg"},732:function(s,r,t){s.exports=t.p+"assets/img/24.RDB小总结.94e88c4c.jpg"},976:function(s,r,t){"use strict";t.r(r);var e=t(2),a=Object(e.a)({},(function(){var s=this,r=s._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[r("h1",{attrs:{id:"rdb快照文件-md"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rdb快照文件-md"}},[s._v("#")]),s._v(" RDB快照文件.md")]),s._v(" "),r("h3",{attrs:{id:"如何检查修复dump-rdb文件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#如何检查修复dump-rdb文件"}},[s._v("#")]),s._v(" 如何检查修复dump.rdb文件？")]),s._v(" "),r("p",[s._v("进入到redis安装目录，执行redis-check-rdb命令 redis-check-rdb ./redisconfig/dump.rdb")]),s._v(" "),r("h3",{attrs:{id:"哪些情况会触发rdb快照"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#哪些情况会触发rdb快照"}},[s._v("#")]),s._v(" 哪些情况会触发RDB快照")]),s._v(" "),r("ol",[r("li",[s._v("配置文件中默认的快照配置")]),s._v(" "),r("li",[s._v("手动save/bgsave命令")]),s._v(" "),r("li",[s._v("执行flushdb/fulshall命令也会产生dump.rdb文件，但是也会将命令记录到dump.rdb文件中，恢复后依旧是空，无意义")]),s._v(" "),r("li",[s._v("执行shutdown且没有设置开启AOF持久化")]),s._v(" "),r("li",[s._v("主从复制时，主节点自动触发")])]),s._v(" "),r("h3",{attrs:{id:"如何禁用快照"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#如何禁用快照"}},[s._v("#")]),s._v(" 如何禁用快照")]),s._v(" "),r("ol",[r("li",[s._v('动态所有停止RDB保存规则的方法：redis-cli config set value ""')]),s._v(" "),r("li",[s._v("手动修改配置文件")])]),s._v(" "),r("p",[r("img",{attrs:{src:t(727),alt:""}})]),s._v(" "),r("h3",{attrs:{id:"rdb优化配置项详解"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rdb优化配置项详解"}},[s._v("#")]),s._v(" RDB优化配置项详解")]),s._v(" "),r("p",[s._v("配置文件SNAPSHOTTING模块")]),s._v(" "),r("ul",[r("li",[r("p",[s._v("save <seconds> <changes>：配置快照保存条件")])]),s._v(" "),r("li",[r("p",[s._v("dir：配置快照保存目录地址")])]),s._v(" "),r("li",[r("p",[s._v("dbfilename：配置快照的文件名")])]),s._v(" "),r("li",[r("p",[s._v("stop-writes-on-bgsave-error：")]),s._v(" "),r("p",[r("img",{attrs:{src:t(728),alt:""}})]),s._v(" "),r("p",[s._v("默认yes，如果配置成no，表示不在乎数据不一致或者有其他的手段发现和控制这种不一致，那么在快照写入失败时，也能确保redis继续接受新的请求")])]),s._v(" "),r("li",[r("p",[s._v("rdbcompression：")]),s._v(" "),r("p",[r("img",{attrs:{src:t(729),alt:""}})]),s._v(" "),r("p",[s._v("默认yes，对于存储到磁盘中的快照，可以设置是否进行压缩存储。如果是的话，Redis会采用LZF算法进行压缩。如果你不想消耗CPU来进行压缩的话，可以设置为关闭此功能")])]),s._v(" "),r("li",[r("p",[s._v("rdbchecksum：")]),s._v(" "),r("p",[r("img",{attrs:{src:t(730),alt:""}})]),s._v(" "),r("p",[s._v("默认yes，在存储快照后，还可以让redis使用CRC64算法来进行数据校验，但是这样做会增加大约10%的性能消耗，如果希望获取到最大的性能提升，可以关闭此功能")])]),s._v(" "),r("li",[r("p",[s._v("rdb-del-sync-files：")])])]),s._v(" "),r("p",[r("img",{attrs:{src:t(731),alt:""}})]),s._v(" "),r("p",[s._v("在没有持久化的情况下删除复制中使用的RDB文件。默认情况下no，此选项是禁用的。")]),s._v(" "),r("p",[s._v("小总结：")]),s._v(" "),r("p",[r("img",{attrs:{src:t(732),alt:""}})])])}),[],!1,null,null,null);r.default=a.exports}}]);