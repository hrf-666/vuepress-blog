(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{335:function(n,a,v){"use strict";v.r(a);var t=v(10),_=Object(t.a)({},(function(){var n=this,a=n._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"rrrr"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rrrr"}},[n._v("#")]),n._v(" rrrr")]),n._v(" "),a("p",[n._v("编程基础自测考试\n2、Java发展简介\n完善的生态系统\nOAK（橡树）平台\nHotJava浏览器\nsun: Stanford University NetWork")]),n._v(" "),a("h1",{attrs:{id:"java-标准开发-j2se、java-se"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java-标准开发-j2se、java-se"}},[n._v("#")]),n._v(" Java 标准开发 J2SE、JAVA SE")]),n._v(" "),a("p",[n._v("Java 嵌入式开发 J2ME、JAVA ME\nJava 企开开发 J2EE、JAVA EE")]),n._v(" "),a("p",[n._v("3、Java语言特点\n1、行业内通用的技术实现标准\n2、面向对象编程语言\n3、提供了内存回收处理机制\n4、避免了复杂的指针问题\n5、支持多线程编程\n6、高效的网络处理能力\n7、良好的可移植性\n8、语言足够简单")]),n._v(" "),a("p",[n._v("4、Java可移植性\nJVM Java虚拟机（Java Virtual Machine）\nJVM 调优问题")]),n._v(" "),a("p",[n._v("编译型 + 解释型")]),n._v(" "),a("p",[n._v("Java源文件.java -> 字节码.class -> 机器码")]),n._v(" "),a("h1",{attrs:{id:"_5、jdk简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、jdk简介"}},[n._v("#")]),n._v(" 5、JDK简介")]),n._v(" "),a("p",[n._v("生产环境使用JDK1.8\nJDK Java Development Kit（包含JRE）\nJRE Java Runtime Envrinment")]),n._v(" "),a("p",[n._v("6、JDK安装与配置\n环境变量配置\nWindows： Path")]),n._v(" "),a("p",[n._v("编译命令：javac.exe\n解释命令：java.exe")]),n._v(" "),a("p",[n._v("7、编程起步\n源代码：Hello.java")]),n._v(" "),a("p",[n._v('public class Hello{\n// 中括号[] 可在变量名前，也可以在后\npublic static void main(String[] args) {\nSystem.out.println("Hello World!");\n}\n}\n编译执行')]),n._v(" "),a("h1",{attrs:{id:"ls"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ls"}},[n._v("#")]),n._v(" $ ls")]),n._v(" "),a("p",[n._v("Hello.java")]),n._v(" "),a("p",[n._v("$ javac Hello.java  # 编译文件为字节码文件\n$ ls\nHello.class Hello.java")]),n._v(" "),a("p",[n._v("$ java Hello        # JVM执行java程序\nHello World!\n1、定义类：")]),n._v(" "),a("p",[n._v("public class 类名 {}   // 类名必须与文件名一致\nclass 类名 {}          // 类名可以与文件名不一致\n在一个.java文件中，可以有多个class定义\n一个java文件中，只能有一个public class（推荐）")]),n._v(" "),a("p",[n._v("命名规范：每个单词的首字母大写")]),n._v(" "),a("p",[n._v("2、主方法\n程序执行起点，一定要定义在类中\n主方法所在类，称为主类")]),n._v(" "),a("p",[n._v("3、系统输出")]),n._v(" "),a("p",[n._v("System.out.println();  // 输出换行  line"),a("br"),n._v("\nSystem.out.print();    // 输出不换行\n8、JShell工具\nJDK > 1.9")]),n._v(" "),a("p",[n._v("$jshell\njshell>\n9、CLASSPATH环境属性\n默认为当前所在目录")]),n._v(" "),a("p",[n._v("export CLASSPATH=.  # Linux\nset CLASSPATH=.     # Windows 可配置为系统变量")]),n._v(" "),a("p",[n._v("PATH       # 操作系统提供的路径配置，定义所有可执行程序路径\nCLASSPATH  # JRE提供的加载类的路径\n10、注释\n编译时不处理注释")]),n._v(" "),a("p",[n._v("// 单行注释"),a("br"),n._v("\n/* 多行注释 "),a("em",[n._v("/\n/")]),n._v("* 文档注释 */\n11 标识符与关键字\n标识符：")]),n._v(" "),a("p",[n._v("包含：字母、数字、_、$\n字母开头\n关键字\n特殊含义，如class\nJDK 1.4 assert 用于异常处理\nJDK 1.5 enum 用于枚举定义\n未使用：goto、const\n特殊含义：true、false、null")]),n._v(" "),a("p",[n._v("12、Java数据类型简介\n分类")]),n._v(" "),a("p",[n._v("基本数据类型：具体的数字单元\n数值型\n-整型：byte-8、short-16、\nint-32、long-64          # 默认值 0\n-浮点型：float-32、double-64     # 默认值 0\n布尔型：boolean                     # 默认值 false\n字符型：char-16                     # 默认值 \\u0000")]),n._v(" "),a("p",[n._v("引用数据类型：涉及内存关系的使用\n数组、类、接口                       # 默认值null\n参考原则\n描述数字：整数int、小数double\n数据传输、文字编码转换：byte（二进制操作）\n处理中文：char\n描述内存或文件大小，自增主键：使用long")]),n._v(" "),a("p",[n._v("13、整型数据类型\n定义")]),n._v(" "),a("p",[n._v("// int 变量名称 = 常量;\nint x = 10;\n范例：超过int范围\n数据溢出")]),n._v(" "),a("p",[n._v('// int int变量 = int数值\nint max = Integer.MAX_VALUE;    // 获取int最大值\nint min = Integer.MIN_VALUE;    // 获取int最小值\nSystem.out.println("min: " + min);\nSystem.out.println("max: " + max);')]),n._v(" "),a("p",[n._v('// int变量 + int常量 = int结果\nSystem.out.println("max + 1: " + (max + 1));')]),n._v(" "),a("p",[n._v('System.out.println("=================");')]),n._v(" "),a("p",[n._v('// long long变量 = int数值\nlong long_max = Integer.MAX_VALUE;\nlong long_min = Integer.MIN_VALUE;\nSystem.out.println("long_min: " + long_min);\nSystem.out.println("long_max: " + long_max);')]),n._v(" "),a("p",[n._v('// long变量 + int常量 = long结果\nSystem.out.println("long_min + 1: " + (long_max + 1));')]),n._v(" "),a("h1",{attrs:{id:"min-2147483648max-2147483647valmax-1-2147483648"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#min-2147483648max-2147483647valmax-1-2147483648"}},[n._v("#")]),n._v(" /*\nmin: -2147483648\nmax: 2147483647VAl\nmax + 1: -2147483648")]),n._v(" "),a("p",[n._v("long_min: -2147483648\nlong_max: 2147483647\nlong_min + 1: 2147483648")])])}),[],!1,null,null,null);a.default=_.exports}}]);