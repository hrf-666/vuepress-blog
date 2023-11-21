---
tags:
  - 配置
  - 主题
  - 索引
---

# 你好java
编程基础自测考试
2、Java发展简介
完善的生态系统
OAK（橡树）平台
HotJava浏览器
sun: Stanford University NetWork

Java 标准开发 J2SE、JAVA SE
Java 嵌入式开发 J2ME、JAVA ME
Java 企开开发 J2EE、JAVA EE

3、Java语言特点
1、行业内通用的技术实现标准
2、面向对象编程语言
3、提供了内存回收处理机制
4、避免了复杂的指针问题
5、支持多线程编程
6、高效的网络处理能力
7、良好的可移植性
8、语言足够简单

4、Java可移植性
JVM Java虚拟机（Java Virtual Machine）
JVM 调优问题

编译型 + 解释型

Java源文件.java -> 字节码.class -> 机器码

5、JDK简介
生产环境使用JDK1.8
JDK Java Development Kit（包含JRE）
JRE Java Runtime Envrinment

6、JDK安装与配置
环境变量配置
Windows： Path

编译命令：javac.exe
解释命令：java.exe

7、编程起步
源代码：Hello.java


public class Hello{
// 中括号[] 可在变量名前，也可以在后
public static void main(String[] args) {
System.out.println("Hello World!");
}
}
编译执行


$ ls
Hello.java

$ javac Hello.java  # 编译文件为字节码文件
$ ls
Hello.class Hello.java

$ java Hello        # JVM执行java程序
Hello World!
1、定义类：


public class 类名 {}   // 类名必须与文件名一致
class 类名 {}          // 类名可以与文件名不一致
在一个.java文件中，可以有多个class定义
一个java文件中，只能有一个public class（推荐）

命名规范：每个单词的首字母大写

2、主方法
程序执行起点，一定要定义在类中
主方法所在类，称为主类

3、系统输出


System.out.println();  // 输出换行  line  
System.out.print();    // 输出不换行
8、JShell工具
JDK > 1.9


$jshell
jshell>
9、CLASSPATH环境属性
默认为当前所在目录


export CLASSPATH=.  # Linux
set CLASSPATH=.     # Windows 可配置为系统变量

PATH       # 操作系统提供的路径配置，定义所有可执行程序路径
CLASSPATH  # JRE提供的加载类的路径
10、注释
编译时不处理注释


// 单行注释  
/* 多行注释 */
/** 文档注释 */
11 标识符与关键字
标识符：


包含：字母、数字、_、$
字母开头
关键字
特殊含义，如class
JDK 1.4 assert 用于异常处理
JDK 1.5 enum 用于枚举定义
未使用：goto、const
特殊含义：true、false、null

12、Java数据类型简介
分类


基本数据类型：具体的数字单元
数值型
-整型：byte-8、short-16、
int-32、long-64          # 默认值 0
-浮点型：float-32、double-64     # 默认值 0
布尔型：boolean                     # 默认值 false
字符型：char-16                     # 默认值 \u0000

引用数据类型：涉及内存关系的使用
数组、类、接口                       # 默认值null
参考原则
描述数字：整数int、小数double
数据传输、文字编码转换：byte（二进制操作）
处理中文：char
描述内存或文件大小，自增主键：使用long

13、整型数据类型
定义


// int 变量名称 = 常量;
int x = 10;
范例：超过int范围
数据溢出


// int int变量 = int数值
int max = Integer.MAX_VALUE;    // 获取int最大值
int min = Integer.MIN_VALUE;    // 获取int最小值
System.out.println("min: " + min);
System.out.println("max: " + max);

// int变量 + int常量 = int结果
System.out.println("max + 1: " + (max + 1));

System.out.println("=================");

// long long变量 = int数值
long long_max = Integer.MAX_VALUE;
long long_min = Integer.MIN_VALUE;
System.out.println("long_min: " + long_min);
System.out.println("long_max: " + long_max);

// long变量 + int常量 = long结果
System.out.println("long_min + 1: " + (long_max + 1));

/*
min: -2147483648
max: 2147483647VAl
max + 1: -2147483648
=================
long_min: -2147483648
long_max: 2147483647
long_min + 1: 2147483648
