/**
 * @category 浏览器
 * @module 复制数据
 */

/**
 * 复制数据
 * @param { String } copyText 待复制的数据
 * @returns { String } 返回字符串
 * @example
 * copyData('123456)
 */
export function copyData(copyText) {
    if (navigator.clipboard) {
        // clipboard api 复制
        navigator.clipboard.writeText(copyText);
    } else {
        let textarea = document.createElement("textarea");
        document.body.appendChild(textarea);
        // 隐藏此输入框
        textarea.style.position = "fixed";
        textarea.style.clip = "rect(0 0 0 0)";
        textarea.style.top = "10px";
        // 赋值
        textarea.value = copyText;
        // 选中
        textarea.select();
        // 复制
        document.execCommand("copy", true);
        // 移除输入框
        document.body.removeChild(textarea);
    }
}
