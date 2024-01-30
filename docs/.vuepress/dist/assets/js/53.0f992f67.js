(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{348:function(e,v,t){"use strict";t.r(v);var _=t(6),a=Object(_.a)({},(function(){var e=this,v=e._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h2",{attrs:{id:"分布式理论"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分布式理论"}},[e._v("#")]),e._v(" 分布式理论")]),e._v(" "),v("h3",{attrs:{id:"_1-说说cap原则"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-说说cap原则"}},[e._v("#")]),e._v(" 1. 说说CAP原则？")]),e._v(" "),v("p",[e._v("CAP原则又称CAP定理，指的是在一个分布式系统中，Consistency（一致性）、 Availability（可用性）、Partition tolerance（分区容错性）这3个基本需求，最多只能同时满足其中的2个。")]),e._v(" "),v("p",[v("img",{attrs:{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/sidebar/sanfene//fenbushi-6b0609de-e2ce-4778-b76f-018af80c617f.jpg",alt:""}})]),e._v(" "),v("table",[v("thead",[v("tr",[v("th",[e._v("选项")]),e._v(" "),v("th",[e._v("描述")])])]),e._v(" "),v("tbody",[v("tr",[v("td",[e._v("Consistency（一致性）")]),e._v(" "),v("td",[e._v("指数据在多个副本之间能够保持一致的特性（严格的一致性）")])]),e._v(" "),v("tr",[v("td",[e._v("Availability（可用性）")]),e._v(" "),v("td",[e._v("指系统提供的服务必须一直处于可用的状态，每次请求都能获取到非错的响应（不保证获取的数据为最新数据）")])]),e._v(" "),v("tr",[v("td",[e._v("Partition tolerance（分区容错性）")]),e._v(" "),v("td",[e._v("分布式系统在遇到任何网络分区故障的时候，仍然能够对外提供满足一致性和可用性的服务，除非整个网络环境都发生了故障")])])])]),e._v(" "),v("h3",{attrs:{id:"_2-为什么cap不可兼得呢"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-为什么cap不可兼得呢"}},[e._v("#")]),e._v(" 2. 为什么CAP不可兼得呢？")]),e._v(" "),v("p",[e._v("首先对于分布式系统，分区是必然存在的，所谓分区指的是分布式系统可能出现的字区域网络不通，成为孤立区域的的情况。")]),e._v(" "),v("p",[v("img",{attrs:{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/sidebar/sanfene//fenbushi-49bf971a-63ae-4b45-bb9e-8af84dff7219.jpg",alt:""}})]),e._v(" "),v("p",[e._v("那么分区容错性（"),v("strong",[e._v("P")]),e._v("）就必须要满足，因为如果要牺牲分区容错性，就得把服务和资源放到一个机器，或者一个“同生共死”的集群，那就违背了分布式的初衷。")]),e._v(" "),v("p",[e._v("那么满足分区容错的基础上，能不能同时满足"),v("code",[e._v("一致性")]),e._v("和"),v("code",[e._v("可用性")]),e._v("？")]),e._v(" "),v("p",[e._v("假如现在有两个分区"),v("code",[e._v("N1")]),e._v("和"),v("code",[e._v("N2")]),e._v("，N1和N2分别有不同的分区存储D1和D2，以及不同的服务S1和S2。")]),e._v(" "),v("ul",[v("li",[e._v("在满足"),v("code",[e._v("一致性")]),e._v(" 的时候，N1和N2的数据要求值一样的，D1=D2。")]),e._v(" "),v("li",[e._v("在满足"),v("code",[e._v("可用性")]),e._v("的时候，无论访问N1还是N2，都能获取及时的响应。")])]),e._v(" "),v("p",[v("img",{attrs:{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/sidebar/sanfene//fenbushi-428f55c0-368d-4d07-a5a5-a17f7bd327b7.jpg",alt:""}})]),e._v(" "),v("p",[e._v("假如现在有这样的场景：")]),e._v(" "),v("ul",[v("li",[e._v("用户访问了N1，修改了D1的数据。")]),e._v(" "),v("li",[e._v("用户再次访问，请求落在了N2。此时D1和D2的数据不一致。")])]),e._v(" "),v("p",[e._v("接下来：")]),e._v(" "),v("ul",[v("li",[e._v("保证"),v("code",[e._v("一致性")]),e._v("：此时D1和D2数据不一致，要保证一致性就不能返回不一致的数据，"),v("code",[e._v("可用性")]),e._v("无法保证。")]),e._v(" "),v("li",[e._v("保证"),v("code",[e._v("可用性")]),e._v("：立即响应，可用性得到了保证，但是此时响应的数据和D1不一致，"),v("code",[e._v("一致性")]),e._v("无法保证。")])]),e._v(" "),v("p",[e._v("所以，可以看出，分区容错的前提下，"),v("code",[e._v("一致性")]),e._v("和"),v("code",[e._v("可用性")]),e._v("是矛盾的。")]),e._v(" "),v("h3",{attrs:{id:"_3-cap对应的模型和应用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-cap对应的模型和应用"}},[e._v("#")]),e._v(" 3. CAP对应的模型和应用？")]),e._v(" "),v("p",[v("strong",[e._v("CA without P")])]),e._v(" "),v("p",[e._v("理论上放弃P（分区容错性），则C（强一致性）和A（可用性）是可以保证的。实际上分区是不可避免的，严格上CA指的是允许分区后各子系统依然保持CA。")]),e._v(" "),v("p",[e._v("CA模型的常见应用：")]),e._v(" "),v("ul",[v("li",[e._v("集群数据库")]),e._v(" "),v("li",[e._v("xFS文件系统")])]),e._v(" "),v("p",[v("strong",[e._v("CP without A")])]),e._v(" "),v("p",[e._v("放弃A（可用），相当于每个请求都需要在Server之间强一致，而P（分区）会导致同步时间无限延长，如此CP也是可以保证的。很多传统的数据库分布式事务都属于这种模式。")]),e._v(" "),v("p",[e._v("CP模型的常见应用：")]),e._v(" "),v("ul",[v("li",[e._v("分布式数据库")]),e._v(" "),v("li",[e._v("分布式锁")])]),e._v(" "),v("p",[v("strong",[e._v("AP wihtout C")])]),e._v(" "),v("p",[e._v("要高可用并允许分区，则需放弃一致性。一旦分区发生，节点之间可能会失去联系，为了高可用，每个节点只能用本地数据提供服务，而这样会导致全局数据的不一致性。现在众多的NoSQL都属于此类。")]),e._v(" "),v("p",[e._v("AP模型常见应用：")]),e._v(" "),v("ul",[v("li",[e._v("Web缓存")]),e._v(" "),v("li",[e._v("DNS")])]),e._v(" "),v("p",[e._v("举个大家更熟悉的例子，像我们熟悉的注册中心"),v("code",[e._v("ZooKeeper")]),e._v("、"),v("code",[e._v("Eureka")]),e._v("、"),v("code",[e._v("Nacos")]),e._v("中：")]),e._v(" "),v("ul",[v("li",[e._v("ZooKeeper 保证的是 CP")]),e._v(" "),v("li",[e._v("Eureka 保证的则是 AP")]),e._v(" "),v("li",[e._v("Nacos 不仅支持 CP 也支持 AP")])]),e._v(" "),v("h3",{attrs:{id:"_4-base理论了解吗"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-base理论了解吗"}},[e._v("#")]),e._v(" 4. BASE理论了解吗？")]),e._v(" "),v("p",[e._v("BASE（Basically Available、Soft state、Eventual consistency）是基于CAP理论逐步演化而来的，核心思想是即便不能达到强一致性（Strong consistency），也可以根据应用特点采用适当的方式来达到最终一致性（Eventual consistency）的效果。")]),e._v(" "),v("p",[v("img",{attrs:{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/sidebar/sanfene//fenbushi-6220689c-2cbc-447c-a313-2435943df0fe.jpg",alt:""}})]),e._v(" "),v("p",[e._v("BASE的主要含义：")]),e._v(" "),v("ul",[v("li",[v("strong",[e._v("Basically Available（基本可用）")])])]),e._v(" "),v("p",[e._v("什么是基本可用呢？假设系统出现了不可预知的故障，但还是能用，只是相比较正常的系统而言，可能会有响应时间上的损失，或者功能上的降级。")]),e._v(" "),v("ul",[v("li",[v("strong",[e._v("Soft State（软状态）")])])]),e._v(" "),v("p",[e._v("什么是硬状态呢？要求多个节点的数据副本都是一致的，这是一种“硬状态”。")]),e._v(" "),v("p",[e._v("软状态也称为弱状态，相比较硬状态而言，允许系统中的数据存在中间状态，并认为该状态不影响系统的整体可用性，即允许系统在多个不同节点的数据副本存在数据延时。")]),e._v(" "),v("ul",[v("li",[v("strong",[e._v("Eventually Consistent（最终一致性）")])])]),e._v(" "),v("p",[e._v("上面说了软状态，但是不应该一直都是软状态。在一定时间后，应该到达一个最终的状态，保证所有副本保持数据一致性，从而达到数据的最终一致性。这个时间取决于网络延时、系统负载、数据复制方案设计等等因素。")]),e._v(" "),v("h2",{attrs:{id:"分布式锁"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分布式锁"}},[e._v("#")]),e._v(" 分布式锁")]),e._v(" "),v("p",[e._v("单体时代，可以直接用本地锁来实现对竞争资源的加锁，分布式环境下就要用到分布式锁了。")]),e._v(" "),v("h3",{attrs:{id:"_5-有哪些分布式锁的实现方案呢"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-有哪些分布式锁的实现方案呢"}},[e._v("#")]),e._v(" 5. 有哪些分布式锁的实现方案呢？")]),e._v(" "),v("p",[e._v("常见的分布式锁实现方案有三种："),v("code",[e._v("MySQL分布式锁")]),e._v("、"),v("code",[e._v("ZooKepper分布式锁")]),e._v("、"),v("code",[e._v("Redis分布式锁")]),e._v("。")]),e._v(" "),v("p",[v("img",{attrs:{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/sidebar/sanfene//fenbushi-dba9586e-1e4c-44c9-9825-f117d5c10228.jpg",alt:""}})]),e._v(" "),v("h4",{attrs:{id:"_5-1-mysql分布式锁如何实现呢"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-mysql分布式锁如何实现呢"}},[e._v("#")]),e._v(" 5.1 MySQL分布式锁如何实现呢？")]),e._v(" "),v("p",[e._v("用数据库实现分布式锁比较简单，就是创建一张锁表，数据库对字段作唯一性约束。")]),e._v(" "),v("p",[e._v("加锁的时候，在锁表中增加一条记录即可；释放锁的时候删除记录就行。")]),e._v(" "),v("p",[e._v("如果有并发请求同时提交到数据库，数据库会保证只有一个请求能够得到锁。")]),e._v(" "),v("p",[e._v("这种属于数据库 IO 操作，效率不高，而且频繁操作会增大数据库的开销，因此这种方式在高并发、高性能的场景中用的不多。")]),e._v(" "),v("h4",{attrs:{id:"_5-2-zookeeper如何实现分布式锁"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-zookeeper如何实现分布式锁"}},[e._v("#")]),e._v(" 5.2 ZooKeeper如何实现分布式锁？")]),e._v(" "),v("p",[e._v("ZooKeeper也是常见分布式锁实现方法。")]),e._v(" "),v("p",[e._v("ZooKeeper的数据节点和文件目录类似，例如有一个lock节点，在此节点下建立子节点是可以保证先后顺序的，即便是两个进程同时申请新建节点，也会按照先后顺序建立两个节点。")]),e._v(" "),v("p",[v("img",{attrs:{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/sidebar/sanfene//fenbushi-726d933e-3fa7-4458-ab70-41d09218535c.jpg",alt:""}})]),e._v(" "),v("p",[e._v("所以我们可以用此特性实现分布式锁。以某个资源为目录，然后这个目录下面的节点就是我们需要获取锁的客户端，每个服务在目录下创建节点，如果它的节点，序号在目录下最小，那么就获取到锁，否则等待。释放锁，就是删除服务创建的节点。")]),e._v(" "),v("p",[e._v("ZK实际上是一个比较重的分布式组件，实际上应用没那么多了，所以用ZK实现分布式锁，其实相对也比较少。")]),e._v(" "),v("h4",{attrs:{id:"_5-3-redis怎么实现分布式锁"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-redis怎么实现分布式锁"}},[e._v("#")]),e._v(" 5.3 Redis怎么实现分布式锁？")]),e._v(" "),v("p",[e._v("Redis实现分布式锁，是当前应用最广泛的分布式锁实现方式。")]),e._v(" "),v("p",[e._v("Redis执行命令是单线程的，Redis实现分布式锁就是利用这个特性。")]),e._v(" "),v("p",[e._v("实现分布式锁最简单的一个命令：setNx(set if not exist)，如果不存在则更新：")]),e._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("setNx resourceName value\n")])]),e._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[e._v("1")]),v("br")])]),v("p",[e._v("加锁了之后如果机器宕机，那我这个锁就无法释放，所以需要加入过期时间，而且过期时间需要和setNx同一个原子操作，在Redis2.8之前需要用lua脚本，但是redis2.8之后redis支持nx和ex操作是同一原子操作。")]),e._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("set resourceName value ex 5 nx\n")])]),e._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[e._v("1")]),v("br")])]),v("ul",[v("li",[v("strong",[e._v("Redission")])])]),e._v(" "),v("p",[e._v("当然，一般生产中都是使用Redission客户端，非常良好地封装了分布式锁的api，而且支持RedLock。")]),e._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png",alt:""}})]),e._v(" "),v("h2",{attrs:{id:"分布式事务"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分布式事务"}},[e._v("#")]),e._v(" 分布式事务")]),e._v(" "),v("h3",{attrs:{id:"_6-什么是分布式事务"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-什么是分布式事务"}},[e._v("#")]),e._v(" 6.什么是分布式事务?")]),e._v(" "),v("p",[e._v("分布式事务是相对本地事务而言的，对于本地事务，利用数据库本身的事务机制，就可以保证事务的ACID特性。")]),e._v(" "),v("p",[v("img",{attrs:{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/sidebar/sanfene//fenbushi-b3eeb567-0493-49e2-a21e-dd8d64f347fa.jpg",alt:""}})]),e._v(" "),v("p",[e._v("而在分布式环境下，会涉及到多个数据库。")]),e._v(" "),v("p",[v("img",{attrs:{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/sidebar/sanfene//fenbushi-7e6aab86-57d4-49d5-91fd-14349b07a4c3.jpg",alt:""}})]),e._v(" "),v("p",[e._v("分布式事务其实就是将对同一库事务的概念扩大到了对多个库的事务。目的是为了保证分布式系统中的数据一致性。")]),e._v(" "),v("p",[e._v("分布式事务处理的关键是：")]),e._v(" "),v("ol",[v("li",[e._v("需要记录事务在任何节点所做的所有动作；")]),e._v(" "),v("li",[e._v("事务进行的所有操作要么全部提交，要么全部回滚。")])]),e._v(" "),v("h3",{attrs:{id:"_7-分布式事务有哪些常见的实现方案"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_7-分布式事务有哪些常见的实现方案"}},[e._v("#")]),e._v(" 7.分布式事务有哪些常见的实现方案？")]),e._v(" "),v("p",[e._v("分布式常见的实现方案有 "),v("strong",[e._v("2PC")]),e._v("、"),v("strong",[e._v("3PC")]),e._v("、"),v("strong",[e._v("TCC")]),e._v("、"),v("strong",[e._v("本地消息表")]),e._v("、"),v("strong",[e._v("MQ消息事务")]),e._v("、"),v("strong",[e._v("最大努力通知")]),e._v("、"),v("strong",[e._v("SAGA事务")]),e._v(" 等等。")]),e._v(" "),v("h4",{attrs:{id:"_7-1-说说2pc两阶段提交"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-说说2pc两阶段提交"}},[e._v("#")]),e._v(" 7.1 说说2PC两阶段提交？")]),e._v(" "),v("p",[e._v("说到2PC，就不得先说分布式事务中的 XA 协议。")]),e._v(" "),v("p",[e._v("在这个协议里，有三个角色：")]),e._v(" "),v("ul",[v("li",[v("strong",[e._v("AP（Application）")]),e._v("：应用系统（服务）")]),e._v(" "),v("li",[v("strong",[e._v("TM（Transaction Manager）")]),e._v("：事务管理器（全局事务管理）")]),e._v(" "),v("li",[v("strong",[e._v("RM（Resource Manager）")]),e._v("：资源管理器（数据库）")])]),e._v(" "),v("p",[v("img",{attrs:{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/sidebar/sanfene//fenbushi-7898a153-42a6-4133-be1e-1ccbe9f12540.jpg",alt:""}})]),e._v(" "),v("p",[e._v("XA协议采用"),v("strong",[e._v("两阶段提交")]),e._v("方式来管理分布式事务。XA接口提供资源管理器与事务管理器之间进行通信的标准接口。")]),e._v(" "),v("p",[e._v("两阶段提交的思路可以概括为：参与者将操作成败通知协调者，再由协调者根据所有参与者的反馈情况决定各参与者是否要提交操作还是回滚操作。")]),e._v(" "),v("p",[v("img",{attrs:{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/sidebar/sanfene//fenbushi-d7288027-b0c9-41ec-9ed4-c9d9091be7b9.jpg",alt:""}})]),e._v(" "),v("ul",[v("li",[e._v("准备阶段：事务管理器要求每个涉及到事务的数据库预提交(precommit)此操作，并反映是否可以提交")]),e._v(" "),v("li",[e._v("提交阶段：事务协调器要求每个数据库提交数据，或者回滚数据。")])]),e._v(" "),v("p",[e._v("优点：尽量保证了数据的强一致，实现成本较低，在各大主流数据库都有自己实现，对于MySQL是从5.5开始支持。")]),e._v(" "),v("p",[e._v("缺点:")]),e._v(" "),v("ul",[v("li",[e._v("单点问题：事务管理器在整个流程中扮演的角色很关键，如果其宕机，比如在第一阶段已经完成，在第二阶段正准备提交的时候事务管理器宕机，资源管理器就会一直阻塞，导致数据库无法使用。")]),e._v(" "),v("li",[e._v("同步阻塞：在准备就绪之后，资源管理器中的资源一直处于阻塞，直到提交完成，释放资源。")]),e._v(" "),v("li",[e._v("数据不一致：两阶段提交协议虽然为分布式数据强一致性所设计，但仍然存在数据不一致性的可能，比如在第二阶段中，假设协调者发出了事务commit的通知，但是因为网络问题该通知仅被一部分参与者所收到并执行了commit操作，其余的参与者则因为没有收到通知一直处于阻塞状态，这时候就产生了数据的不一致性。")])]),e._v(" "),v("h4",{attrs:{id:"_7-2-3pc-三阶段提交-了解吗"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_7-2-3pc-三阶段提交-了解吗"}},[e._v("#")]),e._v(" 7.2 3PC（三阶段提交）了解吗？")]),e._v(" "),v("p",[e._v("三阶段提交（"),v("code",[e._v("3PC")]),e._v("）是二阶段提交（"),v("code",[e._v("2PC")]),e._v("）的一种改进版本 ，为解决两阶段提交协议的单点故障和同步阻塞问题。")]),e._v(" "),v("p",[e._v("三阶段提交有这么三个阶段："),v("code",[e._v("CanCommit")]),e._v("，"),v("code",[e._v("PreCommit")]),e._v("，"),v("code",[e._v("DoCommit")]),e._v("三个阶段")]),e._v(" "),v("p",[v("img",{attrs:{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/sidebar/sanfene//fenbushi-73061466-8f9c-44eb-9a3f-a41f4de98668.jpg",alt:""}})]),e._v(" "),v("ul",[v("li",[v("p",[v("strong",[e._v("CanCommit")]),e._v("：准备阶段。协调者向参与者发送commit请求，参与者如果可以提交就返回Yes响应，否则返回No响应。")])]),e._v(" "),v("li",[v("p",[v("strong",[e._v("PreCommit")]),e._v("：预提交阶段。协调者根据参与者在"),v("strong",[e._v("准备阶段")]),e._v("的响应判断是否执行事务还是中断事务，参与者执行完操作之后返回ACK响应，同时开始等待最终指令。")])]),e._v(" "),v("li",[v("p",[v("strong",[e._v("DoCommit")]),e._v("：提交阶段。协调者根据参与者在"),v("strong",[e._v("准备阶段")]),e._v("的响应判断是否执行事务还是中断事务：")])]),e._v(" "),v("li",[v("p",[e._v("如果所有参与者都返回正确的"),v("code",[e._v("ACK")]),e._v("响应，则提交事务")])]),e._v(" "),v("li",[v("p",[e._v("如果参与者有一个或多个参与者收到错误的"),v("code",[e._v("ACK")]),e._v("响应或者超时，则中断事务")])]),e._v(" "),v("li",[v("p",[e._v("如果参与者无法及时接收到来自协调者的提交或者中断事务请求时，在等待超时之后，会继续进行事务提交")])])]),e._v(" "),v("p",[e._v("可以看出，三阶段提交解决的只是两阶段提交中"),v("strong",[e._v("单体故障")]),e._v("和"),v("strong",[e._v("同步阻塞")]),e._v("的问题，因为加入了超时机制，这里的超时的机制作用于 "),v("strong",[e._v("预提交阶段")]),e._v(" 和 "),v("strong",[e._v("提交阶段")]),e._v("。如果等待 "),v("strong",[e._v("预提交请求")]),e._v(" 超时，参与者直接回到准备阶段之前。如果等到"),v("strong",[e._v("提交请求")]),e._v("超时，那参与者就会提交事务了。")]),e._v(" "),v("p",[v("strong",[e._v("无论是2PC还是3PC都不能保证分布式系统中的数据100%一致")]),e._v("。")]),e._v(" "),v("h4",{attrs:{id:"_7-3-tcc了解吗"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_7-3-tcc了解吗"}},[e._v("#")]),e._v(" 7.3 TCC了解吗？")]),e._v(" "),v("p",[v("strong",[e._v("TCC（Try Confirm Cancel）")]),e._v(" ，是两阶段提交的一个变种，针对每个操作，都需要有一个其对应的确认和取消操作，当操作成功时调用确认操作，当操作失败时调用取消操作，类似于二阶段提交，只不过是这里的提交和回滚是针对业务上的，所以基于TCC实现的分布式事务也可以看做是对业务的一种补偿机制。")]),e._v(" "),v("p",[v("img",{attrs:{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/sidebar/sanfene//fenbushi-719faa5d-9709-43ff-8831-c6fa42c5d424.jpg",alt:""}})]),e._v(" "),v("ul",[v("li",[v("strong",[e._v("Try")]),e._v("：尝试待执行的业务。订单系统将当前订单状态设置为支付中，库存系统校验当前剩余库存数量是否大于1，然后将可用库存数量设置为库存剩余数量-1，。")]),e._v(" "),v("li",[v("strong",[e._v("Confirm")]),e._v("：确认执行业务，如果Try阶段执行成功，接着执行Confirm 阶段，将订单状态修改为支付成功，库存剩余数量修改为可用库存数量。")]),e._v(" "),v("li",[v("strong",[e._v("Cancel")]),e._v("：取消待执行的业务，如果Try阶段执行失败，执行Cancel 阶段，将订单状态修改为支付失败，可用库存数量修改为库存剩余数量。")])]),e._v(" "),v("p",[v("strong",[e._v("TCC")]),e._v(" 是业务层面的分布式事务，保证最终一致性，不会一直持有资源的锁。")]),e._v(" "),v("ul",[v("li",[v("strong",[e._v("优点：")]),e._v(" 把数据库层的二阶段提交交给应用层来实现，规避了数据库的 2PC 性能低下问题")]),e._v(" "),v("li",[v("strong",[e._v("缺点")]),e._v("：TCC 的 Try、Confirm 和 Cancel 操作功能需业务提供，开发成本高。TCC 对业务的侵入较大和业务紧耦合，需要根据特定的场景和业务逻辑来设计相应的操作")])]),e._v(" "),v("h4",{attrs:{id:"_7-4-本地消息表了解吗"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_7-4-本地消息表了解吗"}},[e._v("#")]),e._v(" 7.4 本地消息表了解吗？")]),e._v(" "),v("p",[e._v("本地消息表的核心思想是将分布式事务拆分成本地事务进行处理。")]),e._v(" "),v("p",[e._v("例如，可以在订单库新增一个消息表，将新增订单和新增消息放到一个事务里完成，然后通过轮询的方式去查询消息表，将消息推送到MQ，库存服务去消费MQ。")]),e._v(" "),v("p",[v("img",{attrs:{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/sidebar/sanfene//fenbushi-73a460d6-90d7-493f-9fe9-1c6120952c47.jpg",alt:""}})]),e._v(" "),v("p",[v("strong",[e._v("执行流程：")])]),e._v(" "),v("ol",[v("li",[e._v("订单服务，添加一条订单和一条消息，在一个事务里提交")]),e._v(" "),v("li",[e._v("订单服务，使用定时任务轮询查询状态为未同步的消息表，发送到MQ，如果发送失败，就重试发送")]),e._v(" "),v("li",[e._v("库存服务，接收MQ消息，修改库存表，需要保证幂等操作")]),e._v(" "),v("li",[e._v("如果修改成功，调用rpc接口修改订单系统消息表的状态为已完成或者直接删除这条消息")]),e._v(" "),v("li",[e._v("如果修改失败，可以不做处理，等待重试")])]),e._v(" "),v("p",[e._v("订单服务中的消息有可能由于业务问题会一直重复发送，所以为了避免这种情况可以记录一下发送次数，当达到次数限制之后报警，人工接入处理；库存服务需要保证幂等，避免同一条消息被多次消费造成数据不一致。")]),e._v(" "),v("p",[e._v("本地消息表这种方案实现了最终一致性，需要在业务系统里增加消息表，业务逻辑中多一次插入的DB操作，所以性能会有损耗，而且最终一致性的间隔主要有定时任务的间隔时间决定")]),e._v(" "),v("h4",{attrs:{id:"_7-5-mq消息事务了解吗"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_7-5-mq消息事务了解吗"}},[e._v("#")]),e._v(" 7.5 MQ消息事务了解吗？")]),e._v(" "),v("p",[e._v("消息事务的原理是"),v("strong",[e._v("将两个事务通过消息中间件进行异步解耦")]),e._v("。")]),e._v(" "),v("p",[e._v("订单服务执行自己的本地事务，并发送MQ消息，库存服务接收消息，执行自己的本地事务，乍一看，好像跟本地消息表的实现方案类似，只是省去 了对本地消息表的操作和轮询发送MQ的操作，但实际上两种方案的实现是不一样的。")]),e._v(" "),v("p",[e._v("消息事务一定要保证业务操作与消息发送的一致性，如果业务操作成功，这条消息也一定投递成功。")]),e._v(" "),v("p",[v("img",{attrs:{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/sidebar/sanfene//fenbushi-b4cad82c-f9f9-407e-9e60-a2a35dd09b2f.jpg",alt:""}})]),e._v(" "),v("p",[v("strong",[e._v("执行流程：")])]),e._v(" "),v("ol",[v("li",[e._v("发送prepare消息到消息中间件")]),e._v(" "),v("li",[e._v("发送成功后，执行本地事务")]),e._v(" "),v("li",[e._v("如果事务执行成功，则commit，消息中间件将消息下发至消费端")]),e._v(" "),v("li",[e._v("如果事务执行失败，则回滚，消息中间件将这条prepare消息删除")]),e._v(" "),v("li",[e._v("消费端接收到消息进行消费，如果消费失败，则不断重试")])]),e._v(" "),v("p",[e._v("消息事务依赖于消息中间件的事务消息，例如我们熟悉的RocketMQ就支持事务消息（半消息），也就是只有收到发送方确定才会正常投递的消息。")]),e._v(" "),v("p",[e._v("这种方案也是实现了最终一致性，对比本地消息表实现方案，不需要再建消息表，对性能的损耗和业务的入侵更小。")]),e._v(" "),v("h4",{attrs:{id:"_7-6-最大努力通知了解吗"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_7-6-最大努力通知了解吗"}},[e._v("#")]),e._v(" 7.6 最大努力通知了解吗？")]),e._v(" "),v("p",[e._v("最大努力通知相比实现会简单一些，适用于一些对最终一致性实时性要求没那么高的业务，比如支付通知，短信通知。")]),e._v(" "),v("p",[e._v("以支付通知为例，业务系统调用支付平台进行支付，支付平台进行支付，进行操作支付之后支付平台会去同步通知业务系统支付操作是否成功，如果不成功，会一直异步重试，但是会有一个最大通知次数，如果超过这个次数后还是通知失败，就不再通知，业务系统自行调用支付平台提供一个查询接口，供业务系统进行查询支付操作是否成功。")]),e._v(" "),v("p",[v("img",{attrs:{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/sidebar/sanfene//fenbushi-14edc9f7-2cbe-4790-95f4-97a3d0176c2c.jpg",alt:""}})]),e._v(" "),v("p",[v("strong",[e._v("执行流程：")])]),e._v(" "),v("ol",[v("li",[e._v("业务系统调用支付平台支付接口， 并在本地进行记录，支付状态为支付中")]),e._v(" "),v("li",[e._v("支付平台进行支付操作之后，无论成功还是失败，同步给业务系统一个结果通知")]),e._v(" "),v("li",[e._v("如果通知一直失败则根据重试规则异步进行重试，达到最大通知次数后，不再通知")]),e._v(" "),v("li",[e._v("支付平台提供查询订单支付操作结果接口")]),e._v(" "),v("li",[e._v("业务系统根据一定业务规则去支付平台查询支付结果")])]),e._v(" "),v("h3",{attrs:{id:"_8-你们用什么-能说一下seata吗"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_8-你们用什么-能说一下seata吗"}},[e._v("#")]),e._v(" 8.你们用什么？能说一下Seata吗？")]),e._v(" "),v("p",[e._v("我们用比较常用的是Seata——自己去实现分布式事务调度还是比较麻烦的。")]),e._v(" "),v("p",[v("strong",[e._v("Seata")]),e._v(" 的设计目标是对业务无侵入，因此它是从业务无侵入的两阶段提交（全局事务）着手，在传统的两阶段上进行改进，他把一个分布式事务理解成一个包含了若干分支事务的全局事务。而全局事务的职责是协调它管理的分支事务达成一致性，要么一起成功提交，要么一起失败回滚。也就是一荣俱荣一损俱损~")]),e._v(" "),v("p",[v("img",{attrs:{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/sidebar/sanfene//fenbushi-4ecb026d-2604-4fe4-9e7c-b2d328ce4356.jpg",alt:""}})]),e._v(" "),v("p",[v("strong",[e._v("Seata")]),e._v(" 中存在这么几种重要角色：")]),e._v(" "),v("ul",[v("li",[v("strong",[e._v("TC（Transaction Coordinator）")]),e._v("：事务协调者。管理全局的分支事务的状态，用于全局性事务的提交和回滚。")]),e._v(" "),v("li",[v("strong",[e._v("TM（Transaction Manager）")]),e._v("：事务管理者。用于开启、提交或回滚事务。")]),e._v(" "),v("li",[v("strong",[e._v("RM（Resource Manager）")]),e._v("：资源管理器。用于分支事务上的资源管理，向 "),v("strong",[e._v("TC")]),e._v(" 注册分支事务，上报分支事务的状态，接收 "),v("strong",[e._v("TC")]),e._v(" 的命令来提交或者回滚分支事务。")])]),e._v(" "),v("p",[v("img",{attrs:{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/sidebar/sanfene//fenbushi-68593970-056f-4334-864a-1f153a4278b1.jpg",alt:""}})]),e._v(" "),v("p",[e._v("S'eata整体执行流程：")]),e._v(" "),v("ol",[v("li",[e._v("服务A中的 "),v("strong",[e._v("TM")]),e._v(" 向 "),v("strong",[e._v("TC")]),e._v(" 申请开启一个全局事务，"),v("strong",[e._v("TC")]),e._v(" 就会创建一个全局事务并返回一个唯一的 "),v("strong",[e._v("XID")])]),e._v(" "),v("li",[e._v("服务A中的 "),v("strong",[e._v("RM")]),e._v(" 向 "),v("strong",[e._v("TC")]),e._v(" 注册分支事务，然后将这个分支事务纳入 "),v("strong",[e._v("XID")]),e._v(" 对应的全局事务管辖中")]),e._v(" "),v("li",[e._v("服务A开始执行分支事务")]),e._v(" "),v("li",[e._v("服务A开始远程调用B服务，此时 "),v("strong",[e._v("XID")]),e._v(" 会根据调用链传播")]),e._v(" "),v("li",[e._v("服务B中的 "),v("strong",[e._v("RM")]),e._v(" 也向 "),v("strong",[e._v("TC")]),e._v(" 注册分支事务，然后将这个分支事务纳入 "),v("strong",[e._v("XID")]),e._v(" 对应的全局事务管辖中")]),e._v(" "),v("li",[e._v("服务B开始执行分支事务")]),e._v(" "),v("li",[e._v("全局事务调用处理结束后，"),v("strong",[e._v("TM")]),e._v(" 会根据有误异常情况，向 "),v("strong",[e._v("TC")]),e._v(" 发起全局事务的提交或回滚")]),e._v(" "),v("li",[v("strong",[e._v("TC")]),e._v(" 协调其管辖之下的所有分支事务，决定是提交还是回滚")])]),e._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png",alt:""}})]),e._v(" "),v("h2",{attrs:{id:"分布式一致性算法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分布式一致性算法"}},[e._v("#")]),e._v(" 分布式一致性算法")]),e._v(" "),v("h3",{attrs:{id:"_9-分布式算法paxos了解么"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_9-分布式算法paxos了解么"}},[e._v("#")]),e._v(" 9.分布式算法paxos了解么 ？")]),e._v(" "),v("p",[v("code",[e._v("Paxos")]),e._v(" 有点类似前面说的 "),v("code",[e._v("2PC")]),e._v("，"),v("code",[e._v("3PC")]),e._v("，但比这两种算法更加完善。在很多多大厂都得到了工程实践，比如阿里的 "),v("code",[e._v("OceanBase")]),e._v(" 的 "),v("strong",[e._v("分布式数据库")]),e._v("， "),v("code",[e._v("Google")]),e._v(" 的 "),v("code",[e._v("chubby")]),e._v(" "),v("strong",[e._v("分布式锁")]),e._v(" 。")]),e._v(" "),v("h4",{attrs:{id:"paxos算法是什么"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#paxos算法是什么"}},[e._v("#")]),e._v(" Paxos算法是什么？")]),e._v(" "),v("p",[v("code",[e._v("Paxos")]),e._v(" 算法是 "),v("strong",[e._v("基于消息传递")]),e._v(" 且具有 "),v("strong",[e._v("高效容错特性")]),e._v(" 的一致性算法，目前公认的解决 "),v("strong",[e._v("分布式一致性问题")]),e._v(" 最有效的算法之一。")]),e._v(" "),v("h4",{attrs:{id:"paxos算法的工作流程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#paxos算法的工作流程"}},[e._v("#")]),e._v(" Paxos算法的工作流程？")]),e._v(" "),v("h5",{attrs:{id:"角色"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#角色"}},[e._v("#")]),e._v(" 角色")]),e._v(" "),v("p",[e._v("在Paxos中有这么几个角色：")]),e._v(" "),v("ol",[v("li",[v("strong",[e._v("Proposer（提议者）")]),e._v(" : 提议者提出提案，用于投票表决。")]),e._v(" "),v("li",[v("strong",[e._v("Accecptor（接受者）")]),e._v(" : 对提案进行投票，并接受达成共识的提案。")]),e._v(" "),v("li",[v("strong",[e._v("Learner（学习者）")]),e._v(" : 被告知投票的结果，接受达成共识的提案。")])]),e._v(" "),v("p",[e._v("在实际中，一个节点可以同时充当不同角色。")]),e._v(" "),v("p",[v("img",{attrs:{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/sidebar/sanfene//fenbushi-e791ca85-9d8b-4beb-b7dd-8e23ed5c9ec4.jpg",alt:""}})]),e._v(" "),v("p",[e._v("提议者提出提案，提案=编号+value，可以表示为[M,V]，每个提案都有唯一编号，而且编号的大小是趋势递增的。")]),e._v(" "),v("h5",{attrs:{id:"算法流程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#算法流程"}},[e._v("#")]),e._v(" 算法流程")]),e._v(" "),v("p",[e._v("Paxos算法包含两个阶段，第一阶段 "),v("strong",[e._v("Prepare(准备)")]),e._v(" 、第二阶段 "),v("strong",[e._v("Accept(接受)")]),e._v(" 。")]),e._v(" "),v("p",[v("img",{attrs:{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/sidebar/sanfene//fenbushi-89545387-0043-4cb6-a178-5bd7330ee4ba.jpg",alt:""}})]),e._v(" "),v("h6",{attrs:{id:"prepare-准备-阶段"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#prepare-准备-阶段"}},[e._v("#")]),e._v(" Prepare(准备)阶段")]),e._v(" "),v("ol",[v("li",[e._v("提议者提议一个新的提案 P[Mn,?]，然后向接受者的某个超过半数的子集成员发送编号为Mn的准备请求")]),e._v(" "),v("li",[e._v("如果一个接受者收到一个编号为Mn的准备请求，并且编号Mn大于它已经响应的所有准备请求的编号，那么它就会将它已经批准过的最大编号的提案作为响应反馈给提议者，同时该接受者会承诺不会再批准任何编号小于Mn的提案。")])]),e._v(" "),v("p",[e._v("总结一下，接受者在收到提案后，会给与提议者"),v("strong",[e._v("两个承诺")]),e._v("与"),v("strong",[e._v("一个应答")]),e._v("：")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("两个承诺：")])]),e._v(" "),v("li",[v("p",[e._v("承诺不会再接受提案号小于或等于 Mn 的 Prepare 请求")])]),e._v(" "),v("li",[v("p",[e._v("承诺不会再接受提案号小于Mn 的 Accept 请求")])]),e._v(" "),v("li",[v("p",[e._v("一个应答：")])]),e._v(" "),v("li",[v("p",[e._v("不违背以前作出的承诺的前提下，回复已经通过的提案中提案号最大的那个提案所设定的值和提案号Mmax，如果这个值从来没有被任何提案设定过，则返回空值。如果不满足已经做出的承诺，即收到的提案号并不是决策节点收到过的最大的，那允许直接对此 Prepare 请求不予理会。")])])]),e._v(" "),v("h6",{attrs:{id:"accept-接受-阶段"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#accept-接受-阶段"}},[e._v("#")]),e._v(" Accept(接受)阶段")]),e._v(" "),v("ol",[v("li",[e._v("如果提议者收到来自半数以上的接受者对于它发出的编号为Mn的准备请求的响应，那么它就会发送一个针对[Mn,Vn]的接受请求给接受者，注意Vn的值就是收到的响应中编号最大的提案的值，如果响应中不包含任何提案，那么它可以随意选定一个值。")]),e._v(" "),v("li",[e._v("如果接受者收到这个针对[Mn,Vn]提案的接受请求，只要该接受者尚未对编号大于Mn的准备请求做出响应，它就可以通过这个提案。")])]),e._v(" "),v("p",[e._v("当提议者收到了多数接受者的接受应答后，协商结束，共识决议形成，将形成的决议发送给所有学习节点进行学习。")]),e._v(" "),v("p",[e._v("所以Paxos算法的整体详细流程如下：")]),e._v(" "),v("p",[v("img",{attrs:{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/sidebar/sanfene//fenbushi-53377006-1d4d-4b55-93d1-d4138339044c.jpg",alt:""}})]),e._v(" "),v("h4",{attrs:{id:"paxos算法有什么缺点吗-怎么优化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#paxos算法有什么缺点吗-怎么优化"}},[e._v("#")]),e._v(" Paxos算法有什么缺点吗？怎么优化？")]),e._v(" "),v("p",[e._v("前面描述的可以称之为Basic Paxos 算法，在单提议者的前提下是没有问题的，但是假如有多个提议者互不相让，那么就可能导致整个提议的过程进入了死循环。")]),e._v(" "),v("p",[e._v("Lamport 提出了 Multi Paxos 的算法思想。")]),e._v(" "),v("p",[e._v("Multi Paxos算法思想，简单说就是在多个提议者的情况下，选出一个Leader（领导者），由领导者作为唯一的提议者，这样就可以解决提议者冲突的问题。")]),e._v(" "),v("h3",{attrs:{id:"_10-说说raft算法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_10-说说raft算法"}},[e._v("#")]),e._v(" 10.说说Raft算法？")]),e._v(" "),v("h4",{attrs:{id:"raft算法是什么"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#raft算法是什么"}},[e._v("#")]),e._v(" Raft算法是什么？")]),e._v(" "),v("p",[v("code",[e._v("Raft")]),e._v(" 也是一个 "),v("strong",[e._v("一致性算法")]),e._v("，和 "),v("code",[e._v("Paxos")]),e._v(" 目标相同。但它还有另一个名字 - "),v("strong",[e._v("易于理解的一致性算法")]),e._v("。"),v("code",[e._v("Paxos")]),e._v(" 和 "),v("code",[e._v("Raft")]),e._v(" 都是为了实现 "),v("strong",[e._v("一致性")]),e._v(" 产生的。这个过程如同选举一样，"),v("strong",[e._v("参选者")]),e._v(" 需要说服 "),v("strong",[e._v("大多数选民")]),e._v(" (Server) 投票给他，一旦选定后就跟随其操作。"),v("code",[e._v("Paxos")]),e._v(" 和 "),v("code",[e._v("Raft")]),e._v(" 的区别在于选举的 "),v("strong",[e._v("具体过程")]),e._v(" 不同。")]),e._v(" "),v("h4",{attrs:{id:"raft算法的工作流程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#raft算法的工作流程"}},[e._v("#")]),e._v(" Raft算法的工作流程？")]),e._v(" "),v("h5",{attrs:{id:"raft算法的角色"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#raft算法的角色"}},[e._v("#")]),e._v(" Raft算法的角色")]),e._v(" "),v("p",[v("code",[e._v("Raft")]),e._v(" 协议将 "),v("code",[e._v("Server")]),e._v(" 进程分为三种角色：")]),e._v(" "),v("ul",[v("li",[v("strong",[e._v("Leader（领导者）")])]),e._v(" "),v("li",[v("strong",[e._v("Follower（跟随者）")])]),e._v(" "),v("li",[v("strong",[e._v("Candidate（候选人）")])])]),e._v(" "),v("p",[e._v("就像一个民主社会，领导者由跟随者投票选出。刚开始没有 "),v("strong",[e._v("领导者")]),e._v("，所有集群中的 "),v("strong",[e._v("参与者")]),e._v(" 都是 "),v("strong",[e._v("跟随者")]),e._v("。")]),e._v(" "),v("p",[e._v("那么首先开启一轮大选。在大选期间 "),v("strong",[e._v("所有跟随者")]),e._v(" 都能参与竞选，这时所有跟随者的角色就变成了 "),v("strong",[e._v("候选人")]),e._v("，民主投票选出领袖后就开始了这届领袖的任期，然后选举结束，所有除 "),v("strong",[e._v("领导者")]),e._v(" 的 "),v("strong",[e._v("候选人")]),e._v(" 又变回 "),v("strong",[e._v("跟随者")]),e._v(" 服从领导者领导。")]),e._v(" "),v("p",[e._v("这里提到一个概念 "),v("strong",[e._v("「任期」")]),e._v("，用术语 "),v("code",[e._v("Term")]),e._v(" 表达。")]),e._v(" "),v("p",[e._v("三类角色的变迁图如下：")]),e._v(" "),v("p",[v("img",{attrs:{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/sidebar/sanfene//fenbushi-ef4dd655-1693-485f-aca6-494b89dfb57b.jpg",alt:""}})]),e._v(" "),v("h5",{attrs:{id:"leader选举过程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#leader选举过程"}},[e._v("#")]),e._v(" Leader选举过程")]),e._v(" "),v("p",[e._v("Raft 使用心跳（heartbeat）触发Leader选举。当Server启动时，初始化为Follower。Leader向所有Followers周期性发送heartbeat。如果Follower在选举超时时间内没有收到Leader的heartbeat，就会等待一段随机的时间后发起一次Leader选举。")]),e._v(" "),v("p",[e._v("Follower将其当前term加一然后转换为Candidate。它首先给自己投票并且给集群中的其他服务器发送 RequestVote RPC 。结果有以下三种情况：")]),e._v(" "),v("ul",[v("li",[e._v("赢得了多数（超过1/2）的选票，成功选举为Leader；")]),e._v(" "),v("li",[e._v("收到了Leader的消息，表示有其它服务器已经抢先当选了Leader；")]),e._v(" "),v("li",[e._v("没有Server赢得多数的选票，Leader选举失败，等待选举时间超时（"),v("code",[e._v("Election Timeout")]),e._v("）后发起下一次选举。")])]),e._v(" "),v("p",[v("img",{attrs:{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/sidebar/sanfene//fenbushi-996430a8-29f7-4c40-82b6-e4e33316289c.jpg",alt:""}})]),e._v(" "),v("p",[e._v("选出 "),v("code",[e._v("Leader")]),e._v(" 后，"),v("code",[e._v("Leader")]),e._v(" 通过 "),v("strong",[e._v("定期")]),e._v(" 向所有 "),v("code",[e._v("Follower")]),e._v(" 发送 "),v("strong",[e._v("心跳信息")]),e._v(" 维持其统治。若 "),v("code",[e._v("Follower")]),e._v(" 一段时间未收到 "),v("code",[e._v("Leader")]),e._v(" 的 "),v("strong",[e._v("心跳")]),e._v("，则认为 "),v("code",[e._v("Leader")]),e._v(" 可能已经挂了，然后再次发起 "),v("strong",[e._v("选举")]),e._v(" 过程。")]),e._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png",alt:""}})]),e._v(" "),v("h2",{attrs:{id:"分布式设计"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分布式设计"}},[e._v("#")]),e._v(" 分布式设计")]),e._v(" "),v("h3",{attrs:{id:"_11-说说什么是幂等性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_11-说说什么是幂等性"}},[e._v("#")]),e._v(" 11.说说什么是幂等性？")]),e._v(" "),v("blockquote",[v("p",[e._v("什么是幂等性？")])]),e._v(" "),v("p",[e._v("幂等性是一个数学概念，用在接口上：用在接口上就可以理解为："),v("strong",[e._v("同一个接口，多次发出同一个请求，请求的结果是一致的。")])]),e._v(" "),v("p",[e._v("简单说，就是多次调用如一次。")]),e._v(" "),v("blockquote",[v("p",[e._v("什么是幂等性问题？")])]),e._v(" "),v("p",[e._v("在系统的运行中，可能会出现这样的问题：")]),e._v(" "),v("ol",[v("li",[e._v("用户在填写某些"),v("code",[e._v("form表单")]),e._v("时，保存按钮不小心快速点了两次，表中竟然产生了两条重复的数据，只是id不一样。")]),e._v(" "),v("li",[e._v("开发人员在项目中为了解决"),v("code",[e._v("接口超时")]),e._v("问题，通常会引入了"),v("code",[e._v("重试机制")]),e._v("。第一次请求接口超时了，请求方没能及时获取返回结果（此时有可能已经成功了），于是会对该请求重试几次，这样也会产生重复的数据。")]),e._v(" "),v("li",[e._v("mq消费者在读取消息时，有时候会读取到"),v("code",[e._v("重复消息")]),e._v("，也会产生重复的数据。")])]),e._v(" "),v("p",[e._v("这些都是常见的幂等性问题。")]),e._v(" "),v("p",[e._v("在分布式系统里，只要下游服务有写（保存、更新）的操作，都有可能会产生幂等性问题。")]),e._v(" "),v("p",[e._v("PS:幂等和防重有些不同，防重强调的防止数据重复，幂等强调的是多次调用如一次，防重包含幂等。")]),e._v(" "),v("h3",{attrs:{id:"怎么保证接口幂等性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#怎么保证接口幂等性"}},[e._v("#")]),e._v(" 怎么保证接口幂等性？")]),e._v(" "),v("p",[v("img",{attrs:{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/sidebar/sanfene//fenbushi-91db1e86-9bc6-4b58-9c42-e6541d04c5b8.jpg",alt:""}})]),e._v(" "),v("ol",[v("li",[e._v("insert前先select")])]),e._v(" "),v("p",[e._v("在保存数据的接口中，在"),v("code",[e._v("insert")]),e._v("前，先根据"),v("code",[e._v("requestId")]),e._v("等字段先"),v("code",[e._v("select")]),e._v("一下数据。如果该数据已存在，则直接返回，如果不存在，才执行  "),v("code",[e._v("insert")]),e._v("操作。")]),e._v(" "),v("ol",{attrs:{start:"2"}},[v("li",[e._v("加唯一索引")])]),e._v(" "),v("p",[e._v("加唯一索引是个非常简单但很有效的办法，如果重复插入数据的话，就会抛出异常，为了保证幂等性，一般需要捕获这个异常。")]),e._v(" "),v("p",[e._v("如果是"),v("code",[e._v("java")]),e._v("程序需要捕获："),v("code",[e._v("DuplicateKeyException")]),e._v("异常，如果使用了"),v("code",[e._v("spring")]),e._v("框架还需要捕获："),v("code",[e._v("MySQLIntegrityConstraintViolationException")]),e._v("异常。")]),e._v(" "),v("ol",{attrs:{start:"3"}},[v("li",[e._v("加悲观锁")])]),e._v(" "),v("p",[e._v("更新逻辑，比如更新用户账户余额，可以加悲观锁，把对应用户的哪一行数据锁住。同一时刻只允许一个请求获得锁，其他请求则等待。")]),e._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("select * from user id=123 for update;\n")])]),e._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[e._v("1")]),v("br")])]),v("p",[e._v("这种方式有一个缺点，获取不到锁的请求一般只能报失败，比较难保证接口返回相同值。")]),e._v(" "),v("ol",{attrs:{start:"4"}},[v("li",[e._v("加乐观锁")])]),e._v(" "),v("p",[e._v("更新逻辑，也可以用乐观锁，性能更好。可以在表中增加一个"),v("code",[e._v("timestamp")]),e._v("或者"),v("code",[e._v("version")]),e._v("字段，例如"),v("code",[e._v("version")]),e._v(":")]),e._v(" "),v("p",[e._v("在更新前，先查询一下数据，将version也作为更新的条件，同时也更新version：")]),e._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("update user set amount=amount+100,version=version+1 where id=123 and version=1;\n")])]),e._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[e._v("1")]),v("br")])]),v("p",[e._v("更新成功后，version增加，重复更新请求进来就无法更新了。")]),e._v(" "),v("ol",{attrs:{start:"5"}},[v("li",[e._v("建防重表")])]),e._v(" "),v("p",[e._v("有时候表中并非所有的场景都不允许产生重复的数据，只有某些特定场景才不允许。这时候，就可以使用防重表的方式。")]),e._v(" "),v("p",[e._v("例如消息消费中，创建防重表，存储消息的唯一ID，消费时先去查询是否已经消费，已经消费直接返回成功。")]),e._v(" "),v("ol",{attrs:{start:"6"}},[v("li",[e._v("状态机")])]),e._v(" "),v("p",[e._v("有些业务表是有状态的，比如订单表中有：1-下单、2-已支付、3-完成、4-撤销等状态，可以通过限制状态的流动来完成幂等。")]),e._v(" "),v("ol",{attrs:{start:"7"}},[v("li",[e._v("分布式锁")])]),e._v(" "),v("p",[e._v("直接在数据库上加锁的做法性能不够友好，可以使用分布式锁的方式，目前最流行的分布式锁实现是通过Redis，具体实现一般都是使用Redission框架。")]),e._v(" "),v("ol",{attrs:{start:"8"}},[v("li",[e._v("token机制")])]),e._v(" "),v("p",[e._v("请求接口之前，需要先获取一个唯一的token，再带着这个token去完成业务操作，服务端根据这个token是否存在，来判断是否是重复的请求。")]),e._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png",alt:""}})]),e._v(" "),v("h2",{attrs:{id:"分布式限流"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分布式限流"}},[e._v("#")]),e._v(" 分布式限流")]),e._v(" "),v("h3",{attrs:{id:"_12-你了解哪些限流算法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_12-你了解哪些限流算法"}},[e._v("#")]),e._v(" 12.你了解哪些限流算法？")]),e._v(" "),v("ul",[v("li",[e._v("计数器")])]),e._v(" "),v("p",[e._v("计数器比较简单粗暴，比如我们要限制1s能够通过的请求数，实现的思路就是从第一个请求进来开始计时，在接下来的1s内，每个请求进来请求数就+1，超过最大请求数的请求会被拒绝，等到1s结束后计数清零，重新开始计数。")]),e._v(" "),v("p",[e._v("这种方式有个很大的弊端：比如前10ms已经通过了最大的请求数，那么后面的990ms的请求只能拒绝，这种现象叫做“突刺现象”。")]),e._v(" "),v("ul",[v("li",[e._v("漏桶算法")])]),e._v(" "),v("p",[e._v("就是桶底出水的速度恒定，进水的速度可能快慢不一，但是当进水量大于出水量的时候，水会被装在桶里，不会直接被丢弃；但是桶也是有容量限制的，当桶装满水后溢出的部分还是会被丢弃的。")]),e._v(" "),v("p",[v("strong",[e._v("算法实现")]),e._v("：可以准备一个队列来保存暂时处理不了的请求，然后通过一个线程池定期从队列中获取请求来执行。")]),e._v(" "),v("p",[v("img",{attrs:{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/sidebar/sanfene//fenbushi-32b12c10-9b9a-45f1-af72-a6446223fb21.jpg",alt:""}})]),e._v(" "),v("ul",[v("li",[e._v("令牌桶算法")])]),e._v(" "),v("p",[e._v("令牌桶就是生产访问令牌的一个地方，生产的速度恒定，用户访问的时候当桶中有令牌时就可以访问，否则将触发限流。")]),e._v(" "),v("p",[v("strong",[e._v("实现方案")]),e._v("：Guava RateLimiter限流")]),e._v(" "),v("p",[e._v("Guava RateLimiter是一个谷歌提供的限流，其基于令牌桶算法，比较适用于单实例的系统。")]),e._v(" "),v("p",[v("img",{attrs:{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/sidebar/sanfene//fenbushi-b80e74ed-9b0a-4327-9ea0-3bef4da76634.jpg",alt:""}})]),e._v(" "),v("p",[e._v("这一期的分布式面试题就整理到这里了，主要是偏理论的一些问题，分布式其实是个很大的类型，比如分布式调用、分布式治理……")]),e._v(" "),v("p",[e._v("所以，这篇文章只是个开始，后面还会有分布式调用（RPC）、微服务相关的主题文章，敬请期待。")]),e._v(" "),v("hr"),e._v(" "),v("p",[v("em",[e._v("没有什么使我停留——除了目的，纵然岸旁有玫瑰、有绿荫、有宁静的港湾，我是不系之舟")]),e._v("。")]),e._v(" "),v("p",[v("strong",[e._v("系列内容")]),e._v("：")]),e._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"https://javabetter.cn/sidebar/sanfene/javase.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("面渣逆袭 Java SE 篇👍"),v("OutboundLink")],1)]),e._v(" "),v("li",[v("a",{attrs:{href:"https://javabetter.cn/sidebar/sanfene/javathread.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("面渣逆袭 Java 集合框架篇👍"),v("OutboundLink")],1)]),e._v(" "),v("li",[v("a",{attrs:{href:"https://javabetter.cn/sidebar/sanfene/collection.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("面渣逆袭 Java 并发编程篇👍"),v("OutboundLink")],1)]),e._v(" "),v("li",[v("a",{attrs:{href:"https://javabetter.cn/sidebar/sanfene/jvm.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("面渣逆袭 JVM 篇👍"),v("OutboundLink")],1)]),e._v(" "),v("li",[v("a",{attrs:{href:"https://javabetter.cn/sidebar/sanfene/spring.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("面渣逆袭 Spring 篇👍"),v("OutboundLink")],1)]),e._v(" "),v("li",[v("a",{attrs:{href:"https://javabetter.cn/sidebar/sanfene/redis.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("面渣逆袭 Redis 篇👍"),v("OutboundLink")],1)]),e._v(" "),v("li",[v("a",{attrs:{href:"https://javabetter.cn/sidebar/sanfene/mybatis.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("面渣逆袭 MyBatis 篇👍"),v("OutboundLink")],1)]),e._v(" "),v("li",[v("a",{attrs:{href:"https://javabetter.cn/sidebar/sanfene/mysql.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("面渣逆袭 MySQL 篇👍"),v("OutboundLink")],1)]),e._v(" "),v("li",[v("a",{attrs:{href:"https://javabetter.cn/sidebar/sanfene/os.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("面渣逆袭操作系统篇👍"),v("OutboundLink")],1)]),e._v(" "),v("li",[v("a",{attrs:{href:"https://javabetter.cn/sidebar/sanfene/network.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("面渣逆袭计算机网络篇👍"),v("OutboundLink")],1)]),e._v(" "),v("li",[v("a",{attrs:{href:"https://javabetter.cn/sidebar/sanfene/rocketmq.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("面渣逆袭RocketMQ篇👍"),v("OutboundLink")],1)]),e._v(" "),v("li",[v("a",{attrs:{href:"https://javabetter.cn/sidebar/sanfene/fenbushi.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("面渣逆袭分布式篇👍"),v("OutboundLink")],1)]),e._v(" "),v("li",[v("a",{attrs:{href:"https://javabetter.cn/sidebar/sanfene/weifuwu.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("面渣逆袭微服务篇👍"),v("OutboundLink")],1)])]),e._v(" "),v("hr")])}),[],!1,null,null,null);v.default=a.exports}}]);