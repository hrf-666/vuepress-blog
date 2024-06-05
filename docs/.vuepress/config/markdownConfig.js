const markdownConfig = {
    lineNumbers: true, //行号
    // plugins: [
    //     '@org/foo', // 等价于 @org/markdown-it-foo，如果对应的包存在
    //     ['markdown-it-bar', {
    //         // 提供你的选项
    //     }]
    // ]
    // 图片路径相对路径显示
    extendMarkdown: md => {
        md.use(require("markdown-it-disable-url-encode"));
    }
}

exports.markdownConfig = markdownConfig;
