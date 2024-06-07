(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{558:function(s,e,r){s.exports=r.p+"assets/img/17.启动3主3从.5ec87b99.jpg"},559:function(s,e,r){s.exports=r.p+"assets/img/18.3主3从.58acf16d.jpg"},560:function(s,e,r){s.exports=r.p+"assets/img/19.集群节点状态.6d5a09ef.jpg"},561:function(s,e,r){s.exports=r.p+"assets/img/20.集群节点状态查看.6cdbc18a.jpg"},946:function(s,e,r){"use strict";r.r(e);var t=r(2),a=Object(t.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"_3主3从redis集群配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3主3从redis集群配置"}},[s._v("#")]),s._v(" 3主3从Redis集群配置")]),s._v(" "),e("h3",{attrs:{id:"找3台真实虚拟机-各自新建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#找3台真实虚拟机-各自新建"}},[s._v("#")]),s._v(" 找3台真实虚拟机，各自新建")]),s._v(" "),e("p",[s._v("mkdir -p /myredis/cluster")]),s._v(" "),e("h3",{attrs:{id:"新建6个独立的redis实例服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#新建6个独立的redis实例服务"}},[s._v("#")]),s._v(" 新建6个独立的Redis实例服务")]),s._v(" "),e("p",[s._v("IP： 192.168.0.100 + 端口6381/6382")]),s._v(" "),e("p",[s._v("​\tvim /myredis/cluster/redisCluster6381.conf")]),s._v(" "),e("div",{staticClass:"language-conf line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('bind 0.0.0.0\ndaemonize yes\nprotected-mode no\nport 6381\nlogfile "/myredis/cluster/cluster6381.log"\npidfile /myredis/cluster6381.pid\ndir /myredis/cluster\ndbfilename dump6381.rdb\nappendonly yes\nappendfilename "appendonly6381.aof"\nrequirepass 123456\nmasterauth 123456\n\ncluster-enabled yes\ncluster-config-file nodes-6381.conf\ncluster-node-timeout 5000\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br")])]),e("p",[s._v("​\tvim /myredis/cluster/redisCluster6382.conf")]),s._v(" "),e("p",[s._v("IP：192.168.0.100 + 端口6383/6384")]),s._v(" "),e("p",[s._v("​\tvim /myredis/cluster/redisCluster6383.conf")]),s._v(" "),e("p",[s._v("​\tvim /myredis/cluster/redisCluster6384.conf")]),s._v(" "),e("p",[s._v("IP：192.168.0.100 + 端口6385/6386")]),s._v(" "),e("p",[s._v("​\tvim /myredis/cluster/redisCluster6385.conf")]),s._v(" "),e("p",[s._v("​\tvim /myredis/cluster/redisCluster6386.conf")]),s._v(" "),e("p",[s._v("启动6台主机实例")]),s._v(" "),e("p",[s._v("​\tredis-server /myredis/cluster/redisCluster6381.conf")]),s._v(" "),e("p",[s._v("​\t...")]),s._v(" "),e("p",[s._v("​\tredis-server /myredis/cluster/redisCluster6386.conf")]),s._v(" "),e("h3",{attrs:{id:"通过redis-cli-命令为6台机器构建集群关系"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#通过redis-cli-命令为6台机器构建集群关系"}},[s._v("#")]),s._v(" 通过redis-cli 命令为6台机器构建集群关系")]),s._v(" "),e("p",[e("strong",[s._v("构建主从关系命令")])]),s._v(" "),e("div",{staticClass:"language-conf line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("// 一定要注意，此处要修改自己的IP为真实IP\nredis-cli -a 123456 --cluster create --cluster-replicas 1 192.168.111.175:6381 192.168.111.175:6382 192:168.111.172:6383 192.168.111.172:6384 192.168.111.174:6385 192.168.111.174:6386\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("--cluster- replicas 1 表示为每个master创建一一个slave节点")]),s._v(" "),e("p",[e("img",{attrs:{src:r(558),alt:""}})]),s._v(" "),e("p",[e("strong",[s._v("一切OK的话，3主3从搞定")])]),s._v(" "),e("p",[e("img",{attrs:{src:r(559),alt:""}})]),s._v(" "),e("h3",{attrs:{id:"_6381作为切入点-查看并检验集群状态"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6381作为切入点-查看并检验集群状态"}},[s._v("#")]),s._v(" 6381作为切入点，查看并检验集群状态")]),s._v(" "),e("p",[e("strong",[s._v("连接进6381作为切入点，$\\textcolor{red}{\\large 查看节点状态}$")])]),s._v(" "),e("p",[e("img",{attrs:{src:r(560),alt:""}})]),s._v(" "),e("p",[e("strong",[s._v("cluster nodes")])]),s._v(" "),e("p",[e("img",{attrs:{src:r(561),alt:""}})]),s._v(" "),e("p",[e("strong",[s._v("CLUSTER INFO")])]),s._v(" "),e("p",[s._v("![](images/21.cluster info.jpg)")])])}),[],!1,null,null,null);e.default=a.exports}}]);