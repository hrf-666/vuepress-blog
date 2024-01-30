(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{347:function(e,t,a){"use strict";a.r(t);var v=a(4),_=Object(v.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"引论"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#引论"}},[e._v("#")]),e._v(" 引论")]),e._v(" "),t("h3",{attrs:{id:"_01、什么是操作系统"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_01、什么是操作系统"}},[e._v("#")]),e._v(" 01、什么是操作系统？")]),e._v(" "),t("p",[e._v("可以这么说，操作系统是一种运行在内核态的软件。")]),e._v(" "),t("p",[e._v("它是应用程序和硬件之间的媒介，向应用程序提供硬件的抽象，以及管理硬件资源。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/sidebar/sanfene/os-be55aec1-e7ab-433f-97f1-14d99960b6bf.png",alt:"操作系统是什么"}})]),e._v(" "),t("h3",{attrs:{id:"_02、操作系统主要有哪些功能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_02、操作系统主要有哪些功能"}},[e._v("#")]),e._v(" 02、操作系统主要有哪些功能？")]),e._v(" "),t("p",[e._v("操作系统最主要的功能：")]),e._v(" "),t("ul",[t("li",[e._v("处理器（CPU）管理：CPU的管理和分配，主要指的是进程管理。")]),e._v(" "),t("li",[e._v("内存管理：内存的分配和管理，主要利用了虚拟内存的方式。")]),e._v(" "),t("li",[e._v("外存管理：外存（磁盘等）的分配和管理，将外存以文件的形式提供出去。")]),e._v(" "),t("li",[e._v("I/O管理：对输入/输出设备的统一管理。")])]),e._v(" "),t("p",[e._v("除此之外，还有保证自身正常运行的健壮性管理，防止非法操作和入侵的安全性管理。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/sidebar/sanfene/os-eee82952-c96f-45c9-835e-29db37c0f6d8.png",alt:"操作系统主要功能"}})]),e._v(" "),t("h2",{attrs:{id:"操作系统结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#操作系统结构"}},[e._v("#")]),e._v(" 操作系统结构")]),e._v(" "),t("h3",{attrs:{id:"_03、什么是内核"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_03、什么是内核"}},[e._v("#")]),e._v(" 03、什么是内核？")]),e._v(" "),t("p",[e._v("可以这么说，内核是一个计算机程序，它是操作系统的核心，提供了操作系统最核心的能力，可以控制操作系统中所有的内容。")]),e._v(" "),t("h3",{attrs:{id:"_04、什么是用户态和内核态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_04、什么是用户态和内核态"}},[e._v("#")]),e._v(" 04、什么是用户态和内核态？")]),e._v(" "),t("p",[e._v("内核具有很⾼的权限，可以控制 cpu、内存、硬盘等硬件，出于权限控制的考虑，因此⼤多数操作系统，把内存分成了两个区域：")]),e._v(" "),t("ul",[t("li",[e._v("内核空间，这个内存空间只有内核程序可以访问；")]),e._v(" "),t("li",[e._v("⽤户空间，这个内存空间专⻔给应⽤程序使⽤，权限比较小；")])]),e._v(" "),t("p",[e._v("⽤户空间的代码只能访问⼀个局部的内存空间，⽽内核空间的代码可以访问所有内存空间。因此，当程序使⽤⽤户空间时，我们常说该程序在"),t("strong",[e._v("⽤户态")]),e._v("执⾏，⽽当程序使内核空间时，程序则在"),t("strong",[e._v("内核态")]),e._v("执⾏。")]),e._v(" "),t("h3",{attrs:{id:"_05、用户态和内核态是如何切换的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_05、用户态和内核态是如何切换的"}},[e._v("#")]),e._v(" 05、用户态和内核态是如何切换的？")]),e._v(" "),t("p",[e._v("应⽤程序如果需要进⼊内核空间，就需要通过系统调⽤，来进入内核态：")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/sidebar/sanfene/os-b358cdae-18b6-45d4-8a5b-4ea3a7cfc273.png",alt:"用户态&内核态切换"}})]),e._v(" "),t("p",[e._v("内核程序执⾏在内核态，⽤户程序执⾏在⽤户态。当应⽤程序使⽤系统调⽤时，会产⽣⼀个中断。发⽣中断后， CPU 会中断当前在执⾏的⽤户程序，转⽽跳转到中断处理程序，也就是开始执⾏内核程序。内核处理完后，主动触发中断，把 CPU 执⾏权限交回给⽤户程序，回到⽤户态继续⼯作。")]),e._v(" "),t("h2",{attrs:{id:"进程和线程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#进程和线程"}},[e._v("#")]),e._v(" 进程和线程")]),e._v(" "),t("h3",{attrs:{id:"_06、并行和并发有什么区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_06、并行和并发有什么区别"}},[e._v("#")]),e._v(" 06、并行和并发有什么区别？")]),e._v(" "),t("p",[e._v("并发就是在一段时间内，多个任务都会被处理；但在某一时刻，只有一个任务在执行。单核处理器做到的并发，其实是利用时间片的轮转，例如有两个进程A和B，A运行一个时间片之后，切换到B，B运行一个时间片之后又切换到A。因为切换速度足够快，所以宏观上表现为在一段时间内能同时运行多个程序。")]),e._v(" "),t("p",[e._v("并行就是在同一时刻，有多个任务在执行。这个需要多核处理器才能完成，在微观上就能同时执行多条指令，不同的程序被放到不同的处理器上运行，这个是物理上的多个进程同时进行。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/sidebar/sanfene/os-fb7891d8-8330-494b-9bc1-cf829b5cc82d.png",alt:"并发和并行"}})]),e._v(" "),t("h3",{attrs:{id:"_07、什么是进程上下文切换"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_07、什么是进程上下文切换"}},[e._v("#")]),e._v(" 07、什么是进程上下文切换？")]),e._v(" "),t("p",[e._v("对于单核单线程 CPU 而言，在某一时刻只能执行一条 CPU 指令。上下文切换 (Context Switch) 是一种将 CPU 资源从一个进程分配给另一个进程的机制。从用户角度看，计算机能够并行运行多个进程，这恰恰是操作系统通过快速上下文切换造成的结果。在切换的过程中，操作系统需要先存储当前进程的状态 (包括内存空间的指针，当前执行完的指令等等)，再读入下一个进程的状态，然后执行此进程。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/sidebar/sanfene/os-187d1cf9-971d-4395-b888-5e6eaf2be5f1.png",alt:"进程上下文切换-来源参考[3]"}})]),e._v(" "),t("h3",{attrs:{id:"_08、进程有哪些状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_08、进程有哪些状态"}},[e._v("#")]),e._v(" 08、进程有哪些状态？")]),e._v(" "),t("p",[e._v("当一个进程开始运行时，它可能会经历下面这几种状态：")]),e._v(" "),t("p",[e._v("上图中各个状态的意义：")]),e._v(" "),t("ul",[t("li",[e._v("运⾏状态（"),t("em",[e._v("Runing")]),e._v("）：该时刻进程占⽤ CPU；")]),e._v(" "),t("li",[e._v("就绪状态（"),t("em",[e._v("Ready")]),e._v("）：可运⾏，由于其他进程处于运⾏状态⽽暂时停⽌运⾏；")]),e._v(" "),t("li",[e._v("阻塞状态（"),t("em",[e._v("Blocked")]),e._v("）：该进程正在等待某⼀事件发⽣（如等待输⼊/输出操作的完成）⽽暂时停⽌运⾏，这时，即使给它CPU控制权，它也⽆法运⾏；")])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/sidebar/sanfene/os-5df30631-ad7d-4c65-af20-50b7b615eca8.png",alt:"进程3种状态"}})]),e._v(" "),t("p",[e._v("当然，进程还有另外两个基本状态：")]),e._v(" "),t("ul",[t("li",[e._v("创建状态（"),t("em",[e._v("new")]),e._v("）：进程正在被创建时的状态；")]),e._v(" "),t("li",[e._v("结束状态（"),t("em",[e._v("Exit")]),e._v("）：进程正在从系统中消失时的状态；")])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/sidebar/sanfene/os-ae17a9dc-f555-481a-ba4a-caca06120be7.png",alt:"进程5种状态"}})]),e._v(" "),t("h3",{attrs:{id:"_09、什么是僵尸进程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_09、什么是僵尸进程"}},[e._v("#")]),e._v(" 09、什么是僵尸进程？")]),e._v(" "),t("p",[e._v("僵尸进程是已完成且处于终止状态，但在进程表中却仍然存在的进程。")]),e._v(" "),t("p",[e._v("僵尸进程一般发生有父子关系的进程中，一个子进程的进程描述符在子进程退出时不会释放，只有当父进程通过 wait() 或 waitpid() 获取了子进程信息后才会释放。如果子进程退出，而父进程并没有调用 wait() 或 waitpid()，那么子进程的进程描述符仍然保存在系统中。")]),e._v(" "),t("h3",{attrs:{id:"_10、什么是孤儿进程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10、什么是孤儿进程"}},[e._v("#")]),e._v(" 10、什么是孤儿进程？")]),e._v(" "),t("p",[e._v("一个父进程退出，而它的一个或多个子进程还在运行，那么这些子进程将成为孤儿进程。孤儿进程将被 init 进程 (进程 ID 为 1 的进程) 所收养，并由 init 进程对它们完成状态收集工作。因为孤儿进程会被 init 进程收养，所以孤儿进程不会对系统造成危害。")]),e._v(" "),t("h3",{attrs:{id:"_11、进程有哪些调度算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_11、进程有哪些调度算法"}},[e._v("#")]),e._v(" 11、进程有哪些调度算法？")]),e._v(" "),t("p",[e._v("进程调度就是确定某一个时刻CPU运行哪个进程，常见的进程调度算法有：")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/sidebar/sanfene/os-18911b0a-7326-467f-94fb-8c01a6980578.png",alt:"进程调度算法"}})]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("先来先服务")])])]),e._v(" "),t("p",[e._v("非抢占式的调度算法，按照请求的顺序进行调度。有利于长作业，但不利于短作业，因为短作业必须一直等待前面的长作业执行完毕才能执行，而长作业又需要执行很长时间，造成了短作业等待时间过长。另外，对I/O密集型进程也不利，因为这种进程每次进行I/O操作之后又得重新排队。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/sidebar/sanfene/os-93088d03-80c9-46c5-9eaf-eead2adb6e12.png",alt:"先来先服务"}})]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("短作业优先")])])]),e._v(" "),t("p",[e._v("非抢占式的调度算法，按估计运行时间最短的顺序进行调度。长作业有可能会饿死，处于一直等待短作业执行完毕的状态。因为如果一直有短作业到来，那么长作业永远得不到调度。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/sidebar/sanfene/os-517e8392-64fe-4de3-9e1c-b3a944822aba.png",alt:"短作业优先"}})]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("优先级调度")])])]),e._v(" "),t("p",[e._v("为每个进程分配一个优先级，按优先级进行调度。为了防止低优先级的进程永远等不到调度，可以随着时间的推移增加等待进程的优先级。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/sidebar/sanfene/os-7c4441cf-7b8c-4660-8ba8-29b8076e2da1.png",alt:"优先级调度"}})]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("时间片轮转")])])]),e._v(" "),t("p",[e._v("将所有就绪进程按 先来先服务的原则排成一个队列，每次调度时，把 CPU 时间分配给队首进程，该进程可以执行一个时间片。当时间片用完时，由计时器发出时钟中断，调度程序便停止该进程的执行，并将它送往就绪队列的末尾，同时继续把 CPU 时间分配给队首的进程。")]),e._v(" "),t("p",[e._v("时间片轮转算法的效率和时间片的大小有很大关系：因为进程切换都要保存进程的信息并且载入新进程的信息，如果时间片太小，会导致进程切换得太频繁，在进程切换上就会花过多时间。 而如果时间片过长，那么实时性就不能得到保证。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/sidebar/sanfene/os-ad224c3a-8ac9-4230-84e4-ec434d5b49f9.png",alt:"时间片轮转"}})]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("最短剩余时间优先")])])]),e._v(" "),t("p",[e._v("最短作业优先的抢占式版本，按剩余运行时间的顺序进行调度。 当一个新的作业到达时，其整个运行时间与当前进程的剩余时间作比较。如果新的进程需要的时间更少，则挂起当前进程，运行新的进程。否则新的进程等待。")]),e._v(" "),t("h3",{attrs:{id:"_12、进程间通信有哪些方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_12、进程间通信有哪些方式"}},[e._v("#")]),e._v(" 12、进程间通信有哪些方式？")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/sidebar/sanfene/os-34b8635f-ec27-46c6-87c3-91440fea662d.png",alt:"进程间通信方式"}})]),e._v(" "),t("ul",[t("li",[t("p",[e._v("管道：管道可以理解成不同进程之间的对白，一方发声，一方接收，声音的介质可是是空气或者电缆，进程之间就可以通过管道，"),t("strong",[e._v("所谓的管道就是内核中的一串缓存")]),e._v("，从管道的一端写入数据，就是缓存在了内核里，另一端读取，也是从内核中读取这段数据。")]),e._v(" "),t("p",[e._v("管道可以分为两类："),t("strong",[e._v("匿名管道")]),e._v("和"),t("strong",[e._v("命名管道")]),e._v("。匿名管道是单向的，只能在有亲缘关系的进程间通信；命名管道是双向的，可以实现本机任意两个进程通信。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/sidebar/sanfene/os-5994e202-0d59-4a86-8f79-a17a5d0bd3d3.png",alt:"“奉先我儿”"}})])]),e._v(" "),t("li",[t("p",[e._v("信号 ： 信号可以理解成一种电报，发送方发送内容，指定接收进程，然后发出特定的软件中断，操作系统接到中断请求后，找到接收进程，通知接收进程处理信号。")]),e._v(" "),t("p",[e._v("比如"),t("code",[e._v("kill -9 1050")]),e._v("就表示给PID为1050的进程发送"),t("code",[e._v("SIGKIL")]),e._v("信号。Linux系统中常用信号：")]),e._v(" "),t("p",[e._v("（1）SIGHUP：用户从终端注销，所有已启动进程都将收到该进程。系统缺省状态下对该信号的处理是终止进程。\n（2）SIGINT：程序终止信号。程序运行过程中，按Ctrl+C键将产生该信号。\n（3）SIGQUIT：程序退出信号。程序运行过程中，按Ctrl+\\键将产生该信号。\n（4）SIGBUS和SIGSEGV：进程访问非法地址。\n（5）SIGFPE：运算中出现致命错误，如除零操作、数据溢出等。\n（6）SIGKILL：用户终止进程执行信号。shell下执行kill -9发送该信号。\n（7）SIGTERM：结束进程信号。shell下执行kill 进程pid发送该信号。\n（8）SIGALRM：定时器信号。\n（9）SIGCLD：子进程退出信号。如果其父进程没有忽略该信号也没有处理该信号，则子进程退出后将形成僵尸进程。")])]),e._v(" "),t("li",[t("p",[e._v("消息队列："),t("strong",[e._v("消息队列就是保存在内核中的消息链表")]),e._v("，包括Posix消息队列和System V消息队列。有足够权限的进程可以向队列中添加消息，被赋予读权限的进程则可以读走队列中的消息。消息队列克服了信号承载信息量少，管道只能承载无格式字节流以及缓冲区大小受限等缺点。")])])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/sidebar/sanfene/os-d3d8bef5-ae32-487f-828d-aaddb93867c4.png",alt:"消息队列"}})]),e._v(" "),t("ul",[t("li",[e._v("共享内存："),t("strong",[e._v("共享内存的机制，就是拿出⼀块虚拟地址空间来，映射到相同的物理内存中")]),e._v("。这样这个进程写⼊的东西，另外的进程⻢上就能看到。共享内存是最快的 IPC 方式，它是针对其他进程间通信方式运行效率低而专门设计的。它往往与其他通信机制，如信号量，配合使用，来实现进程间的同步和通信。")])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/sidebar/sanfene/os-d9e3cfaf-01e7-42ff-9290-94ef4a5c7d5e.png",alt:"共享内存"}})]),e._v(" "),t("ul",[t("li",[t("p",[e._v("信号量：信号量我们可以理解成红绿灯，红灯行，绿灯停。"),t("strong",[e._v("它本质上是一个整数计数器")]),e._v("，可以用来控制多个进程对共享资源的访问。它常作为一种锁机制，防止某进程正在访问共享资源时，其他进程也访问该资源。因此，主要作为进程间以及同一进程内不同线程之间的同步手段。")]),e._v(" "),t("p",[e._v("信号量表示资源的数量，控制信号量的⽅式有两种原⼦操作：")]),e._v(" "),t("ul",[t("li",[e._v("⼀个是 "),t("strong",[e._v("P")]),e._v(" "),t("strong",[e._v("操作")]),e._v("，这个操作会把信号量减去 1，相减后如果信号量 < 0，则表明资源已被占⽤，进程需阻塞等待；相减后如果信号量 >= 0，则表明还有资源可使⽤，进程可正常继续执⾏。")]),e._v(" "),t("li",[e._v("另⼀个是 "),t("strong",[e._v("V")]),e._v(" "),t("strong",[e._v("操作")]),e._v("，这个操作会把信号量加上 1，相加后如果信号量 <= 0，则表明当前有阻塞中的进程，于是会将该进程唤醒运⾏；相加后如果信号量 > 0，则表明当前没有阻塞中的进程；")])]),e._v(" "),t("p",[e._v("P 操作是⽤在进⼊共享资源之前，V 操作是⽤在离开共享资源之后，这两个操作是必须成对出现的。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/sidebar/sanfene/os-5fb765af-918c-4037-a3ad-4cad4d985e16.png",alt:"信号量"}})])]),e._v(" "),t("li",[t("p",[e._v("Socket：与其他通信机制不同的是，它可用于不同机器间的进程通信。")])])]),e._v(" "),t("p",[e._v("优缺点：")]),e._v(" "),t("ul",[t("li",[e._v("管道：简单；效率低，容量有限；")]),e._v(" "),t("li",[e._v("消息队列：不及时，写入和读取需要用户态、内核态拷贝。")]),e._v(" "),t("li",[e._v("共享内存区：能够很容易控制容量，速度快，但需要注意不同进程的同步问题。")]),e._v(" "),t("li",[e._v("信号量：不能传递复杂消息，一般用来实现进程间的同步；")]),e._v(" "),t("li",[e._v("信号：它是进程间通信的唯一异步机制。")]),e._v(" "),t("li",[e._v("Socket：用于不同主机进程间的通信。")])]),e._v(" "),t("h3",{attrs:{id:"_13、进程和线程的联系和区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_13、进程和线程的联系和区别"}},[e._v("#")]),e._v(" 13、进程和线程的联系和区别？")]),e._v(" "),t("p",[e._v("线程和进程的联系：")]),e._v(" "),t("p",[t("strong",[e._v("线程是进程当中的⼀条执⾏流程。")])]),e._v(" "),t("p",[e._v("同⼀个进程内多个线程之间可以共享代码段、数据段、打开的⽂件等资源，但每个线程各⾃都有⼀套独⽴的寄存器和栈，这样可以确保线程的控制流是相对独⽴的。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/sidebar/sanfene/os-271e450b-66ef-4f6c-b823-8e0b73347825.png",alt:"多线程-来源参考[3]"}})]),e._v(" "),t("p",[e._v("线程与进程的⽐较如下：")]),e._v(" "),t("ul",[t("li",[e._v("调度："),t("strong",[e._v("进程是资源（包括内存、打开的⽂件等）分配的单位")]),e._v("，"),t("strong",[e._v("线程是 CPU 调度的单位")]),e._v("；")]),e._v(" "),t("li",[e._v("资源：进程拥有⼀个完整的资源平台，⽽线程只独享必不可少的资源，如寄存器和栈；")]),e._v(" "),t("li",[e._v("拥有资源：线程同样具有就绪、阻塞、执⾏三种基本状态，同样具有状态之间的转换关系；")]),e._v(" "),t("li",[e._v("系统开销：线程能减少并发执⾏的时间和空间开销——创建或撤销进程时，系统都要为之分配或回收系统资源，如内存空间，I/O设备等，OS所付出的开销显著大于在创建或撤销线程时的开销，进程切换的开销也远大于线程切换的开销。")])]),e._v(" "),t("h3",{attrs:{id:"_14、线程上下文切换了解吗"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_14、线程上下文切换了解吗"}},[e._v("#")]),e._v(" 14、线程上下文切换了解吗？")]),e._v(" "),t("p",[e._v("这还得看线程是不是属于同⼀个进程：")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("当两个线程不是属于同⼀个进程，则切换的过程就跟进程上下⽂切换⼀样；")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("当两个线程是属于同⼀个进程，因为虚拟内存是共享的，所以在切换时，虚拟内存这些资源就保持不动，只需要切换线程的私有数据、寄存器等不共享的数据")]),e._v("；")])])]),e._v(" "),t("p",[e._v("所以，线程的上下⽂切换相⽐进程，开销要⼩很多。")]),e._v(" "),t("h3",{attrs:{id:"_15、线程有哪些实现方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_15、线程有哪些实现方式"}},[e._v("#")]),e._v(" 15、线程有哪些实现方式？")]),e._v(" "),t("p",[e._v("主要有三种线程的实现⽅式：")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("内核态线程实现")]),e._v("：在内核空间实现的线程，由内核直接管理直接管理线程。")])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/sidebar/sanfene/os-30b84285-8027-4720-b50b-3b0fb18c756f.png",alt:"内核态线程实现"}})]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("⽤户态线程实现")]),e._v("：在⽤户空间实现线程，不需要内核的参与，内核对线程无感知。")])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/sidebar/sanfene/os-57886181-56fe-42bf-85e1-4d062455788a.png",alt:"用户态线程"}})]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("混合线程实现")]),e._v("：现代操作系统基本都是将两种方式结合起来使用。用户态的执行系统负责进程内部线程在非阻塞时的切换；内核态的操作系统负责阻塞线程的切换。即我们同时实现内核态和用户态线程管理。其中内核态线程数量较少，而用户态线程数量较多。每个内核态线程可以服务一个或多个用户态线程。")])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/sidebar/sanfene/os-1597d159-1b07-48ae-ac86-7e9b9cb85876.png",alt:"混合线程实现"}})]),e._v(" "),t("h3",{attrs:{id:"_16、线程间如何同步"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_16、线程间如何同步"}},[e._v("#")]),e._v(" 16、线程间如何同步？")]),e._v(" "),t("p",[e._v("同步解决的多线程操作共享资源的问题，目的是不管线程之间的执行如何穿插，最后的结果都是正确的。")]),e._v(" "),t("p",[e._v("我们前面知道线程和进程的关系：线程是进程当中的⼀条执⾏流程。所以说下面的一些同步机制不止针对线程，同样也可以针对进程。")]),e._v(" "),t("p",[t("strong",[e._v("临界区")]),e._v("：我们把对共享资源访问的程序片段称为"),t("code",[e._v("临界区")]),e._v("，我们希望这段代码是"),t("code",[e._v("互斥")]),e._v("的，保证在某时刻只能被一个线程执行，也就是说一个线程在临界区执行时，其它线程应该被阻止进入临界区。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/sidebar/sanfene/os-48a5b48b-2474-4460-ac5b-9502883b353f.png",alt:"临界区互斥-来源参考[3]"}})]),e._v(" "),t("p",[e._v("临界区不仅针对线程，同样针对进程。")]),e._v(" "),t("p",[e._v("临界区同步的一些实现方式：")]),e._v(" "),t("p",[e._v("1、"),t("strong",[e._v("锁")])]),e._v(" "),t("p",[e._v("使⽤加锁操作和解锁操作可以解决并发线程/进程的互斥问题。")]),e._v(" "),t("p",[e._v("任何想进⼊临界区的线程，必须先执⾏加锁操作。若加锁操作顺利通过，则线程可进⼊临界区；在完成对临界资源的访问后再执⾏解锁操作，以释放该临界资源。")]),e._v(" "),t("p",[e._v("加锁和解锁锁住的是什么呢？可以是"),t("code",[e._v("临界区对象")]),e._v("，也可以只是一个简单的"),t("code",[e._v("互斥量")]),e._v("，例如互斥量是"),t("code",[e._v("0")]),e._v("无锁，"),t("code",[e._v("1")]),e._v("表示加锁。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/sidebar/sanfene/os-4bd37c12-992d-4660-8b63-15c3b35d105f.png",alt:"加锁和解锁-来源参考[3]"}})]),e._v(" "),t("p",[e._v("根据锁的实现不同，可以分为"),t("code",[e._v("忙等待锁和")]),e._v("和"),t("code",[e._v("⽆忙等待锁")]),e._v("。")]),e._v(" "),t("p",[t("code",[e._v("忙等待锁和")]),e._v("就是加锁失败的线程，会不断尝试获取锁，也被称为自旋锁，它会一直占用CPU。")]),e._v(" "),t("p",[t("code",[e._v("⽆忙等待锁")]),e._v("就是加锁失败的线程，会进入阻塞状态，放弃CPU，等待被调度。")]),e._v(" "),t("p",[e._v("2、"),t("strong",[e._v("信号量")])]),e._v(" "),t("p",[e._v("信号量是操作系统提供的⼀种协调共享资源访问的⽅法。")]),e._v(" "),t("p",[e._v("通常"),t("strong",[e._v("信号量表示资源的数量")]),e._v("，对应的变量是⼀个整型（ sem ）变量。")]),e._v(" "),t("p",[e._v("另外，还有"),t("strong",[e._v("两个原⼦操作的系统调⽤函数来控制信号量的")]),e._v("，分别是：")]),e._v(" "),t("ul",[t("li",[t("p",[t("em",[e._v("P")]),e._v(" 操作：将 sem 减 1 ，相减后，如果 sem < 0 ，则进程/线程进⼊阻塞等待，否则继续，表明 P操作可能会阻塞；")])]),e._v(" "),t("li",[t("p",[t("em",[e._v("V")]),e._v(" 操作：将 sem 加 1 ，相加后，如果 sem <= 0 ，唤醒⼀个等待中的进程/线程，表明 V 操作不会阻塞；")])])]),e._v(" "),t("p",[e._v("P 操作是⽤在进⼊临界区之前，V 操作是⽤在离开临界区之后，这两个操作是必须成对出现的。")]),e._v(" "),t("h3",{attrs:{id:"_17、什么是死锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_17、什么是死锁"}},[e._v("#")]),e._v(" 17、什么是死锁？")]),e._v(" "),t("p",[e._v("在两个或者多个并发线程中，如果每个线程持有某种资源，而又等待其它线程释放它或它们现在保持着的资源，在未改变这种状态之前都不能向前推进，称这一组线程产生了死锁。通俗的讲就是两个或多个线程无限期的阻塞、相互等待的一种状态。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/sidebar/sanfene/os-e0069c37-d758-4df0-a2fd-3722ec93c61a.png",alt:"死锁"}})]),e._v(" "),t("h3",{attrs:{id:"_18、死锁产生有哪些条件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_18、死锁产生有哪些条件"}},[e._v("#")]),e._v(" 18、死锁产生有哪些条件？")]),e._v(" "),t("p",[e._v("死锁产生需要"),t("strong",[e._v("同时")]),e._v("满足四个条件：")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("互斥条件")]),e._v("：指线程对己经获取到的资源进行它性使用，即该资源同时只由一个线程占用。如果此时还有其它线程请求获取获取该资源，则请求者只能等待，直至占有资源的线程释放该资源。")]),e._v(" "),t("li",[t("strong",[e._v("请求并持有条件")]),e._v("：指一个 线程己经持有了至少一个资源，但又提出了新的资源请求，而新资源己被其它线程占有，所以当前线程会被阻塞，但阻塞 的同时并不释放自己已经获取的资源。")]),e._v(" "),t("li",[t("strong",[e._v("不可剥夺条件")]),e._v("：指线程获取到的资源在自己使用完之前不能被其它线程抢占，只有在自己使用完毕后才由自己释放该资源。")]),e._v(" "),t("li",[t("strong",[e._v("环路等待条件")]),e._v("：指在发生死锁时，必然存在一个线程——资源的环形链，即线程集合 {T0，T1，T2,…… ，Tn} 中 T0 正在等待一 T1 占用的资源，Tl1正在等待 T2用的资源，…… Tn 在等待己被 T0占用的资源。")])]),e._v(" "),t("h3",{attrs:{id:"_19、如何避免死锁呢"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_19、如何避免死锁呢"}},[e._v("#")]),e._v(" 19、如何避免死锁呢？")]),e._v(" "),t("p",[e._v("产⽣死锁的有四个必要条件：互斥条件、持有并等待条件、不可剥夺条件、环路等待条件。")]),e._v(" "),t("p",[e._v("避免死锁，破坏其中的一个就可以。")]),e._v(" "),t("p",[t("strong",[e._v("消除互斥条件")])]),e._v(" "),t("p",[e._v("这个是没法实现，因为很多资源就是只能被一个线程占用，例如锁。")]),e._v(" "),t("p",[t("strong",[e._v("消除请求并持有条件")])]),e._v(" "),t("p",[e._v("消除这个条件的办法很简单，就是一个线程一次请求其所需要的所有资源。")]),e._v(" "),t("p",[t("strong",[e._v("消除不可剥夺条件")])]),e._v(" "),t("p",[e._v("占用部分资源的线程进一步申请其他资源时，如果申请不到，可以主动释放它占有的资源，这样不可剥夺这个条件就破坏掉了。")]),e._v(" "),t("p",[t("strong",[e._v("消除环路等待条件")])]),e._v(" "),t("p",[e._v("可以靠按序申请资源来预防。所谓按序申请，是指资源是有线性顺序的，申请的时候可以先申请资源序号小的，再申请资源序号大的，这样线性化后就不存在环路了。")]),e._v(" "),t("h3",{attrs:{id:"_20、活锁和饥饿锁了解吗"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_20、活锁和饥饿锁了解吗"}},[e._v("#")]),e._v(" 20、活锁和饥饿锁了解吗？")]),e._v(" "),t("p",[t("strong",[e._v("饥饿锁：")])]),e._v(" "),t("p",[e._v("饥饿锁，这个饥饿指的是资源饥饿，某个线程一直等不到它所需要的资源，从而无法向前推进，就像一个人因为饥饿无法成长。")]),e._v(" "),t("p",[t("strong",[e._v("活锁：")])]),e._v(" "),t("p",[e._v("在活锁状态下，处于活锁线程组里的线程状态可以改变，但是整个活锁组的线程无法推进。")]),e._v(" "),t("p",[e._v("活锁可以用两个人过一条很窄的小桥来比喻：为了让对方先过，两个人都往旁边让，但两个人总是让到同一边。这样，虽然两个人的状态一直在变化，但却都无法往前推进。")]),e._v(" "),t("h2",{attrs:{id:"内存管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内存管理"}},[e._v("#")]),e._v(" 内存管理")]),e._v(" "),t("h3",{attrs:{id:"_21、什么是虚拟内存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_21、什么是虚拟内存"}},[e._v("#")]),e._v(" 21、什么是虚拟内存？")]),e._v(" "),t("p",[e._v("我们实际的物理内存主要是主存，但是物理主存空间有限，所以一般现代操作系统都会想办法把一部分内存块放到磁盘中，用到的时候再装入主存，但是对用户程序而言，是不需要注意实际的物理内存的，为什么呢？因为有"),t("code",[e._v("虚拟内存")]),e._v("的机制。")]),e._v(" "),t("p",[t("strong",[e._v("简单说，虚拟内存是操作系统提供的⼀种机制，将不同进程的虚拟地址和不同内存的物理地址映射起来。")])]),e._v(" "),t("p",[e._v("每个进程都有自己独立的地址空间，再由操作系统映射到到实际的物理内存。")]),e._v(" "),t("p",[e._v("于是，这⾥就引出了两种地址的概念：")]),e._v(" "),t("p",[e._v("程序所使⽤的内存地址叫做"),t("strong",[e._v("虚拟内存地址")]),e._v("（"),t("em",[e._v("Virtual Memory Address")]),e._v("）")]),e._v(" "),t("p",[e._v("实际存在硬件⾥⾯的空间地址叫"),t("strong",[e._v("物理内存地址")]),e._v("（"),t("em",[e._v("Physical Memory Address")]),e._v("）。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/sidebar/sanfene/os-ec171cea-0046-4709-a390-7babf3272c49.png",alt:"虚拟内存"}})]),e._v(" "),t("h3",{attrs:{id:"_22、什么是内存分段"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_22、什么是内存分段"}},[e._v("#")]),e._v(" 22、什么是内存分段？")]),e._v(" "),t("p",[e._v("程序是由若⼲个逻辑分段组成的，如可由代码分段、数据分段、栈段、堆段组成。不同的段是有不同的属性的，所以就⽤分段（Segmentation）的形式把这些段分离出来。")]),e._v(" "),t("p",[e._v("分段机制下的虚拟地址由两部分组成，"),t("strong",[e._v("段号")]),e._v("和"),t("strong",[e._v("段内偏移量")]),e._v("。")]),e._v(" "),t("p",[e._v("虚拟地址和物理地址通过段表映射，段表主要包括"),t("strong",[e._v("段号")]),e._v("、"),t("code",[e._v("段的界限")]),e._v("。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/sidebar/sanfene/os-075df152-7b77-40c7-abdb-1aa0280d958b.png",alt:"虚拟地址、段表、物理地址"}})]),e._v(" "),t("p",[e._v("我们来看一个映射，虚拟地址：段3、段偏移量500  ----\x3e  段基地址7000+段偏移量500 ----\x3e 物理地址：8700+。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/sidebar/sanfene/os-a57baf1c-9612-49dd-8b23-8b00a0c63cef.png",alt:"段虚拟地址映射"}})]),e._v(" "),t("h3",{attrs:{id:"_23、什么是内存分页"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_23、什么是内存分页"}},[e._v("#")]),e._v(" 23、什么是内存分页？")]),e._v(" "),t("p",[t("strong",[e._v("分⻚是把整个虚拟和物理内存空间切成⼀段段固定尺⼨的⼤⼩")]),e._v("。这样⼀个连续并且尺⼨固定的内存空间，我们叫"),t("strong",[e._v("⻚")]),e._v("（"),t("em",[e._v("Page")]),e._v("）。在 Linux 下，每⼀⻚的⼤⼩为 4KB 。")]),e._v(" "),t("p",[e._v("访问分页系统中内存数据需要两次的内存访问 ：一次是从内存中访问页表，从中找到指定的物理页号，加上页内偏移得到实际物理地址，第二次就是根据第一次得到的物理地址访问内存取出数据。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/sidebar/sanfene/os-4cdd5179-4b88-4aa6-b9c2-9ef8fdc745dc.png",alt:"内存分页"}})]),e._v(" "),t("h3",{attrs:{id:"_24、多级页表知道吗"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_24、多级页表知道吗"}},[e._v("#")]),e._v(" 24、多级页表知道吗？")]),e._v(" "),t("p",[e._v("操作系统可能会有非常多进程，如果只是使用简单分页，可能导致的后果就是页表变得非常庞大。")]),e._v(" "),t("p",[e._v("所以，引入了多级页表的解决方案。")]),e._v(" "),t("p",[e._v("所谓的多级页表，就是把我们原来的单级页表再次分页，这里利用了"),t("code",[e._v("局部性原理")]),e._v("，除了顶级页表，其它级别的页表一来可以在需要的时候才被创建，二来内存紧张的时候还可以被置换到磁盘中。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/sidebar/sanfene/os-3021f22f-b9a3-49d9-9e80-6d3abaf5a61a.png",alt:"多级页表示意图"}})]),e._v(" "),t("h3",{attrs:{id:"_25、什么是块表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_25、什么是块表"}},[e._v("#")]),e._v(" 25、什么是块表？")]),e._v(" "),t("p",[e._v("同样利用了"),t("code",[e._v("局部性原理")]),e._v("，即在⼀段时间内，整个程序的执⾏仅限于程序中的某⼀部分。相应地，执⾏所访问的存储空间也局限于某个内存区域。")]),e._v(" "),t("p",[e._v("利⽤这⼀特性，把最常访问的⼏个⻚表项存储到访问速度更快的硬件，于是计算机科学家们，就在 CPU 芯⽚中，加⼊了⼀个专⻔存放程序最常访问的⻚表项的 Cache，这个 Cache 就是 TLB（"),t("em",[e._v("Translation Lookaside Buffer")]),e._v("） ，通常称为⻚表缓存、转址旁路缓存、快表等。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/sidebar/sanfene/os-cdc02a2f-59bf-45dc-8531-83b46f77bd65.png",alt:"TLB示意图-来源参考[3]"}})]),e._v(" "),t("h3",{attrs:{id:"_26、分页和分段有什么区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_26、分页和分段有什么区别"}},[e._v("#")]),e._v(" 26、分页和分段有什么区别？")]),e._v(" "),t("ul",[t("li",[e._v("段是信息的逻辑单位，它是根据用户的需要划分的，因此段对用户是可见的 ；页是信息的物理单位，是为了管理主存的方便而划分的，对用户是透明的。")]),e._v(" "),t("li",[e._v("段的大小不固定，有它所完成的功能决定；页的大小固定，由系统决定")]),e._v(" "),t("li",[e._v("段向用户提供二维地址空间；页向用户提供的是一维地址空间")]),e._v(" "),t("li",[e._v("段是信息的逻辑单位，便于存储保护和信息的共享，页的保护和共享受到限制。")])]),e._v(" "),t("h3",{attrs:{id:"_27、什么是交换空间"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_27、什么是交换空间"}},[e._v("#")]),e._v(" 27、什么是交换空间？")]),e._v(" "),t("p",[e._v("操作系统把物理内存(Physical RAM)分成一块一块的小内存，每一块内存被称为页(page)。当内存资源不足时，Linux把某些页的内容转移至磁盘上的一块空间上，以释放内存空间。磁盘上的那块空间叫做交换空间(swap space),而这一过程被称为交换(swapping)。物理内存和交换空间的总容量就是虚拟内存的可用容量。")]),e._v(" "),t("p",[e._v("用途：")]),e._v(" "),t("ul",[t("li",[e._v("物理内存不足时一些不常用的页可以被交换出去，腾给系统。")]),e._v(" "),t("li",[e._v("程序启动时很多内存页被用来初始化，之后便不再需要，可以交换出去。")])]),e._v(" "),t("h3",{attrs:{id:"_28、页面置换算法有哪些"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_28、页面置换算法有哪些"}},[e._v("#")]),e._v(" 28、页面置换算法有哪些？")]),e._v(" "),t("p",[e._v("在分页系统里，一个虚拟的页面可能在主存里，也可能在磁盘中，如果CPU发现虚拟地址对应的物理页不在主存里，就会产生一个缺页中断，然后从磁盘中把该页调入主存中。")]),e._v(" "),t("p",[e._v("如果内存里没有空间，就需要从主存里选择一个页面来置换。")]),e._v(" "),t("p",[e._v("常见的页面置换算法：")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/sidebar/sanfene/os-6effefb6-67d2-4155-a3fc-4b27a319391a.png",alt:"常见页面置换算法"}})]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("最佳⻚⾯置换算法（"),t("em",[e._v("OPT")]),e._v("）")])])]),e._v(" "),t("p",[e._v("最佳⻚⾯置换算法是一个理想的算法，基本思路是，"),t("strong",[e._v("置换在未来最⻓时间不访问的⻚⾯")]),e._v("。")]),e._v(" "),t("p",[e._v("所以，该算法实现需要计算内存中每个逻辑⻚⾯的下⼀次访问时间，然后⽐较，选择未来最⻓时间不访问的⻚⾯。")]),e._v(" "),t("p",[e._v("但这个算法是无法实现的，因为当缺页中断发生时，操作系统无法知道各个页面下一次将在什么时候被访问。")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("先进先出置换算法（FIFO）")])])]),e._v(" "),t("p",[e._v("既然我们⽆法预知⻚⾯在下⼀次访问前所需的等待时间，那可以"),t("strong",[e._v("选择在内存驻留时间很⻓的⻚⾯进⾏中置换")]),e._v("，这个就是「先进先出置换」算法的思想。")]),e._v(" "),t("p",[e._v("FIFO的实现机制是使用链表将所有在内存的页面按照进入时间的早晚链接起来，然后每次置换链表头上的页面就行了，新加进来的页面则挂在链表的末端。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/sidebar/sanfene/os-8cccc78d-ba25-4c0a-8ee8-0913e80af7b7.png",alt:"按照进入内存早晚构建的页面链表 "}})]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("最近最久未使⽤的置换算法（LRU）")])])]),e._v(" "),t("p",[e._v("最近最久未使⽤（"),t("em",[e._v("LRU")]),e._v("）的置换算法的基本思路是，发⽣缺⻚时，"),t("strong",[e._v("选择最⻓时间没有被访问的⻚⾯进⾏置换")]),e._v("，也就是说，该算法假设已经很久没有使⽤的⻚⾯很有可能在未来较⻓的⼀段时间内仍然不会被使⽤。")]),e._v(" "),t("p",[e._v("这种算法近似最优置换算法，最优置换算法是通过「未来」的使⽤情况来推测要淘汰的⻚⾯，⽽ LRU 则是通过"),t("code",[e._v("历史")]),e._v("的使⽤情况来推测要淘汰的⻚⾯。")]),e._v(" "),t("p",[e._v("LRU 在理论上是可以实现的，但代价很⾼。为了完全实现 LRU，需要在内存中维护⼀个所有⻚⾯的链表，最近最多使⽤的⻚⾯在表头，最近最少使⽤的⻚⾯在表尾。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/sidebar/sanfene/os-90810f7f-aa5b-4626-9761-c2c622b5e561.png",alt:"LRU实现"}})]),e._v(" "),t("p",[e._v("困难的是，在每次访问内存时都必须要更新整个链表。在链表中找到⼀个⻚⾯，删除它，然后把它移动到表头是⼀个⾮常费时的操作。")]),e._v(" "),t("p",[e._v("所以，LRU 虽然看上去不错，但是由于开销⽐较⼤，实际应⽤中⽐较少使⽤。")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("时钟页面置换算法")])])]),e._v(" "),t("p",[e._v("这个算法的思路是，把所有的⻚⾯都保存在⼀个类似钟⾯的环形链表中，⼀个表针指向最⽼的⻚⾯。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/sidebar/sanfene/os-3646408f-999e-48a1-84e9-113525778aca.png",alt:"时钟页面置换算法"}})]),e._v(" "),t("p",[e._v("当发⽣缺⻚中断时，算法⾸先检查表针指向的⻚⾯：")]),e._v(" "),t("p",[e._v("如果它的访问位位是 0 就淘汰该⻚⾯，并把新的⻚⾯插⼊这个位置，然后把表针前移⼀个位置；")]),e._v(" "),t("p",[e._v("如果访问位是 1 就清除访问位，并把表针前移⼀个位置，重复这个过程直到找到了⼀个访问位为 0 的⻚⾯为⽌；")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("最不常⽤置换算法")])])]),e._v(" "),t("p",[e._v("最不常用算法（LFU），"),t("strong",[e._v("当发⽣缺⻚中断时，选择访问次数最少的那个⻚⾯，将其置换")]),e._v("。")]),e._v(" "),t("p",[e._v("它的实现⽅式是，对每个⻚⾯设置⼀个「访问计数器」，每当⼀个⻚⾯被访问时，该⻚⾯的访问计数器就累加 1。在发⽣缺⻚中断时，淘汰计数器值最⼩的那个⻚⾯。")]),e._v(" "),t("h2",{attrs:{id:"文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件"}},[e._v("#")]),e._v(" 文件")]),e._v(" "),t("h3",{attrs:{id:"_29、硬链接和软链接有什么区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_29、硬链接和软链接有什么区别"}},[e._v("#")]),e._v(" 29、硬链接和软链接有什么区别？")]),e._v(" "),t("ul",[t("li",[e._v("硬链接就是在目录下创建一个条目，记录着文件名与 inode 编号，这个 inode 就是源文件的 inode。删除任意一个条目，文件还是存在，只要引用数量不为 0。但是硬链接有限制，它不能跨越文件系统，也不能对目录进行链接。")])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/sidebar/sanfene/os-d3f778f9-506b-4b93-9fb7-40eb0a79874e.png",alt:"硬链接-来源参考[3]"}})]),e._v(" "),t("ul",[t("li",[t("p",[e._v("软链接相当于重新创建⼀个⽂件，这个⽂件有"),t("strong",[e._v("独⽴的")]),e._v(" "),t("strong",[e._v("inode")]),e._v("，但是这个"),t("strong",[e._v("⽂件的内容是另外⼀个⽂件的路径")]),e._v("，所以访问软链接的时候，实际上相当于访问到了另外⼀个⽂件，所以"),t("strong",[e._v("软链接是可以跨⽂件系统的")]),e._v("，甚⾄"),t("strong",[e._v("⽬标⽂件被删除了，链接⽂件还是在的，只不过打不开指向的文件了而已。")])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/sidebar/sanfene/os-81abf13c-5c60-4263-8fcb-c79c33d865e8.png",alt:"软链接-来源参考[3]"}})])])]),e._v(" "),t("h2",{attrs:{id:"io"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#io"}},[e._v("#")]),e._v(" IO")]),e._v(" "),t("h3",{attrs:{id:"_30、零拷贝了解吗"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_30、零拷贝了解吗"}},[e._v("#")]),e._v(" 30、零拷贝了解吗？")]),e._v(" "),t("p",[e._v("假如需要文件传输，使用传统I/O，数据读取和写入是用户空间到内核空间来回赋值，而内核空间的数据是通过操作系统的I/O接口从磁盘读取或者写入，这期间发生了多次用户态和内核态的上下文切换，以及多次数据拷贝。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/sidebar/sanfene/os-1e595664-6585-4d56-8939-08b7ce510218.png",alt:"传统文件传输示意图-来源参考[3]"}})]),e._v(" "),t("p",[e._v("为了提升I/O性能，就需要"),t("strong",[e._v("减少用户态与内核态的上下文切换")]),e._v("和"),t("strong",[e._v("内存拷贝的次数")]),e._v("。")]),e._v(" "),t("p",[e._v("这就用到了我们零拷贝的技术，零拷贝技术实现主要有两种：")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("mmap + write")])])]),e._v(" "),t("p",[e._v("mmap() 系统调⽤函数会直接把内核缓冲区⾥的数据「"),t("strong",[e._v("映射")]),e._v("」到⽤户空间，这样，操作系统内核与⽤户空间就不需要再进⾏任何的数据拷⻉操作。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/sidebar/sanfene/os-6dc49f9d-0bc3-4956-a650-7c7236f234a2.png",alt:"mmap示意图-来源参考[3]"}})]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("sendfile")])])]),e._v(" "),t("p",[e._v("在 Linux 内核版本 2.1 中，提供了⼀个专⻔发送⽂件的系统调⽤函数 sendfile() 。")]),e._v(" "),t("p",[e._v("⾸先，它可以替代前⾯的 read() 和 write() 这两个系统调⽤，这样就可以减少⼀次系统调⽤，也就减少了 2 次上下⽂切换的开销。")]),e._v(" "),t("p",[e._v("其次，该系统调⽤，可以直接把内核缓冲区⾥的数据拷⻉到 socket 缓冲区⾥，不再拷⻉到⽤户态，这样就只有 2 次上下⽂切换，和 3 次数据拷⻉。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/sidebar/sanfene/os-0b087b8a-8d51-4aad-898d-d99c38d36592.png",alt:"sendfile示意图-来源参考[3]"}})]),e._v(" "),t("p",[e._v("很多开源项目如Kafka、RocketMQ都采用了零拷贝技术来提升IO效率。")]),e._v(" "),t("h3",{attrs:{id:"_31、聊聊阻塞与非阻塞-io、-同步与异步io"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_31、聊聊阻塞与非阻塞-io、-同步与异步io"}},[e._v("#")]),e._v(" 31、聊聊阻塞与⾮阻塞 IO、 同步与异步IO？")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("阻塞I/O")])])]),e._v(" "),t("p",[e._v("先来看看"),t("strong",[e._v("阻塞")]),e._v(" "),t("strong",[e._v("I/O")]),e._v("，当⽤户程序执⾏ read ，线程会被阻塞，⼀直等到内核数据准备好，并把数据从内核缓冲区拷⻉到应⽤程序的缓冲区中，当拷⻉过程完成， read 才会返回。")]),e._v(" "),t("p",[e._v("注意，"),t("strong",[e._v("阻塞等待的是"),t("code",[e._v("内核数据准备好")]),e._v("和"),t("code",[e._v("数据从内核态拷⻉到⽤户态")]),e._v("这两个过程")]),e._v("。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/sidebar/sanfene/os-f06db5ff-661c-4ddf-9115-4ed9c9a21d01.png",alt:"阻塞I/O"}})]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("非阻塞I/O")])])]),e._v(" "),t("p",[e._v("⾮阻塞的 read 请求在数据未准备好的情况下⽴即返回，可以继续往下执⾏，此时应⽤程序不断轮询内核，直到数据准备好，内核将数据拷⻉到应⽤程序缓冲区， read 调⽤才可以获取到结果。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/sidebar/sanfene/os-771e014e-7ed9-4101-8bb5-4413b8069fd6.png",alt:"非阻塞I/O"}})]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("基于非阻塞的I/O多路复用")])])]),e._v(" "),t("p",[e._v("我们上面的非阻塞I/O有一个问题，什么问题呢？应用程序要一直轮询，这个过程没法干其它事情，所以引入了"),t("strong",[e._v("I/O")]),e._v(" "),t("strong",[e._v("多路复⽤")]),e._v("技术。")]),e._v(" "),t("p",[e._v("当内核数据准备好时，以事件通知应⽤程序进⾏操作。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/sidebar/sanfene/os-86e54fa3-ad36-43c7-9d2d-5a68139c310f.png",alt:"基于非阻塞的I/O多路复用"}})]),e._v(" "),t("p",[t("strong",[e._v("注意："),t("strong",[e._v("⽆论是阻塞 I/O、还是⾮阻塞 I/O、非阻塞I/O多路复用，都是同步调⽤。因为它们在read调⽤时，内核将数据从内核空间拷⻉到应⽤程序空间，过程都是需要等待的，也就是说这个过程是")]),e._v("同步")]),e._v("的，如果内核实现的拷⻉效率不⾼，read调⽤就会在这个同步过程中等待⽐较⻓的时间。")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("异步I/O")])])]),e._v(" "),t("p",[e._v("真正的"),t("strong",[e._v("异步")]),e._v(" "),t("strong",[e._v("I/O")]),e._v(" 是"),t("code",[e._v("内核数据准备好")]),e._v("和"),t("code",[e._v("数据从内核态拷⻉到⽤户态")]),e._v("这两个过程都不⽤等待。")]),e._v(" "),t("p",[e._v("发起 aio_read 之后，就⽴即返回，内核⾃动将数据从内核空间拷⻉到应⽤程序空间，这个拷⻉过程同样是异步的，内核⾃动完成的，和前⾯的同步操作不⼀样，应⽤程序并不需要主动发起拷⻉动作。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/sidebar/sanfene/os-869021ed-5e4e-4490-9174-7291d8ddf55c.png",alt:"异步/IO"}})]),e._v(" "),t("blockquote",[t("p",[e._v("拿例子理解几种I/O模型")])]),e._v(" "),t("p",[e._v("老三关注了很多UP主，有些UP主是老鸽子，到了更新的时间：")]),e._v(" "),t("p",[e._v("阻塞I/O就是，老三不干别的，就干等着，盯着UP的更新。")]),e._v(" "),t("p",[e._v("非阻塞I/O就是，老三发现UP没更，就去喝个茶什么的，过一会儿来盯一次，一直等到UP更新。")]),e._v(" "),t("p",[e._v("基于⾮阻塞的 I/O 多路复⽤好⽐，老三发现UP没更，就去干别的，过了一会儿B站推送消息了，老三一看，有很多条，就去翻动态，看看等的UP是不是更新了。")]),e._v(" "),t("p",[e._v("异步I/O就是，老三说UP你该更了，UP赶紧爆肝把视频做出来，然后把视频亲自呈到老三面前，这个过程不用等待。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/sidebar/sanfene/os-54c60eb2-2a1c-4268-88b5-6b462e00144c.png",alt:"鸽宗"}})]),e._v(" "),t("h3",{attrs:{id:"_32、详细讲一讲i-o多路复用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_32、详细讲一讲i-o多路复用"}},[e._v("#")]),e._v(" 32、详细讲一讲I/O多路复用？")]),e._v(" "),t("blockquote",[t("p",[e._v("我们先了解什么是I/O多路复用？")])]),e._v(" "),t("p",[e._v("我们在传统的I/O模型中，如果服务端需要支持多个客户端，我们可能要为每个客户端分配一个进程/线程。")]),e._v(" "),t("p",[e._v("不管是基于重一点的进程模型，还是轻一点的线程模型，假如连接多了，操作系统是扛不住的。")]),e._v(" "),t("p",[e._v("所以就引入了"),t("strong",[e._v("I/O多路复用")]),e._v(" 技术。")]),e._v(" "),t("p",[e._v("简单说，就是一个进程/线程维护多个Socket，这个多路复用就是多个连接复用一个进程/线程。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/sidebar/sanfene/os-9b276b14-eb1b-47bf-b2aa-25212e1bbdf8.png",alt:"I/O多路复用"}})]),e._v(" "),t("p",[e._v("我们来看看I/O多路复用三种实现机制：")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("select")])])]),e._v(" "),t("p",[e._v("select 实现多路复⽤的⽅式是：")]),e._v(" "),t("p",[e._v("将已连接的 Socket 都放到⼀个"),t("strong",[e._v("⽂件描述符集合")]),e._v("fd_set，然后调⽤ select 函数将fd_set集合拷⻉到内核⾥，让内核来检查是否有⽹络事件产⽣，检查的⽅式很粗暴，就是通过遍历fd_set的⽅式，当检查到有事件产⽣后，将此 Socket 标记为可读或可写， 接着再把整个fd_set拷⻉回⽤户态⾥，然后⽤户态还需要再通过遍历的⽅法找到可读或可写的 Socket，再对其处理。")]),e._v(" "),t("p",[e._v("select 使⽤固定⻓度的 BitsMap，表示⽂件描述符集合，⽽且所⽀持的⽂件描述符的个数是有限制的，在Linux 系统中，由内核中的 FD_SETSIZE 限制， 默认最⼤值为 1024 ，只能监听 0~1023 的⽂件描述符。")]),e._v(" "),t("blockquote",[t("p",[e._v("select机制的缺点：")])]),e._v(" "),t("p",[e._v("（1）每次调用select，都需要把fd_set集合从用户态拷贝到内核态，如果fd_set集合很大时，那这个开销也很大，比如百万连接却只有少数活跃连接时这样做就太没有效率。")]),e._v(" "),t("p",[e._v("（2）每次调用select都需要在内核遍历传递进来的所有fd_set，如果fd_set集合很大时，那这个开销也很大。")]),e._v(" "),t("p",[e._v("（3）为了减少数据拷贝带来的性能损坏，内核对被监控的fd_set集合大小做了限制，一般为1024，如果想要修改会比较麻烦，可能还需要编译内核。")]),e._v(" "),t("p",[e._v("（4）每次调用select之前都需要遍历设置监听集合，重复工作。")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("poll")])])]),e._v(" "),t("p",[e._v("poll 不再⽤ BitsMap 来存储所关注的⽂件描述符，取⽽代之⽤动态数组，以链表形式来组织，突破了select 的⽂件描述符个数限制，当然还会受到系统⽂件描述符限制。")]),e._v(" "),t("p",[e._v("但是 poll 和 select 并没有太⼤的本质区别，都是使⽤线性结构存储进程关注的Socket集合，因此都需要遍历⽂件描述符集合来找到可读或可写的Socke，时间复杂度为O(n)，⽽且也需要在⽤户态与内核态之间拷⻉⽂件描述符集合，这种⽅式随着并发数上来，性能的损耗会呈指数级增⻓。")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("epoll")])])]),e._v(" "),t("p",[e._v("epoll 通过两个⽅⾯，很好解决了 select/poll 的问题。")]),e._v(" "),t("p",[e._v("第⼀点，epoll 在内核⾥使⽤"),t("strong",[e._v("红⿊树来跟踪进程所有待检测的⽂件描述字")]),e._v("，把需要监控的 socket 通过epoll_ctl() 函数加⼊内核中的红⿊树⾥，红⿊树是个⾼效的数据结构，增删查⼀般时间复杂度是O(logn) ，通过对这棵⿊红树进⾏操作，这样就不需要像 select/poll 每次操作时都传⼊整个 socket 集合，只需要传⼊⼀个待检测的 socket，"),t("strong",[e._v("减少了内核和⽤户空间⼤量的数据拷⻉和内存分配")]),e._v("。")]),e._v(" "),t("p",[e._v("第⼆点， epoll 使⽤事件驱动的机制，内核⾥"),t("strong",[e._v("维护了⼀个链表来记录就绪事件")]),e._v("，当某个 socket 有事件发⽣时，通过回调函数，内核会将其加⼊到这个就绪事件列表中，当⽤户调⽤ epoll_wait() 函数时，只会返回有事件发⽣的⽂件描述符的个数，不需要像 select/poll 那样轮询扫描整个 socket 集合，⼤⼤提⾼了检测的效率。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/sidebar/sanfene/os-cca76ac4-cfb4-4374-8fc6-256cd4d3893f.png",alt:"epoll接口作用-来源参考[3]"}})]),e._v(" "),t("p",[e._v("epoll 的⽅式即使监听的 Socket 数量越多的时候，效率不会⼤幅度降低，能够同时监听的 Socket 的数⽬也⾮常的多了，上限就为系统定义的进程打开的最⼤⽂件描述符个数。因⽽，"),t("strong",[e._v("epoll")]),e._v(" "),t("strong",[e._v("被称为解决")]),e._v(" "),t("strong",[e._v("C10K")]),e._v(" "),t("strong",[e._v("问题的利器")]),e._v("。")]),e._v(" "),t("p",[t("em",[e._v("没有什么使我停留——除了目的，纵然岸旁有玫瑰、有绿荫、有宁静的港湾，我是不系之舟")]),e._v("。")]),e._v(" "),t("p",[t("strong",[e._v("系列内容")]),e._v("：")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://javabetter.cn/sidebar/sanfene/javase.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("面渣逆袭 Java SE 篇👍"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://javabetter.cn/sidebar/sanfene/javathread.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("面渣逆袭 Java 集合框架篇👍"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://javabetter.cn/sidebar/sanfene/collection.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("面渣逆袭 Java 并发编程篇👍"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://javabetter.cn/sidebar/sanfene/jvm.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("面渣逆袭 JVM 篇👍"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://javabetter.cn/sidebar/sanfene/spring.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("面渣逆袭 Spring 篇👍"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://javabetter.cn/sidebar/sanfene/redis.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("面渣逆袭 Redis 篇👍"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://javabetter.cn/sidebar/sanfene/mybatis.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("面渣逆袭 MyBatis 篇👍"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://javabetter.cn/sidebar/sanfene/mysql.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("面渣逆袭 MySQL 篇👍"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://javabetter.cn/sidebar/sanfene/os.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("面渣逆袭操作系统篇👍"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://javabetter.cn/sidebar/sanfene/network.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("面渣逆袭计算机网络篇👍"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://javabetter.cn/sidebar/sanfene/rocketmq.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("面渣逆袭RocketMQ篇👍"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://javabetter.cn/sidebar/sanfene/fenbushi.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("面渣逆袭分布式篇👍"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://javabetter.cn/sidebar/sanfene/weifuwu.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("面渣逆袭微服务篇👍"),t("OutboundLink")],1)])]),e._v(" "),t("hr")])}),[],!1,null,null,null);t.default=_.exports}}]);