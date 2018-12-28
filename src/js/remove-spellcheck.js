/**
 * 移除元素的拼写检查
 * eleName string 标签元素
 */

export default (eleName) => {
    if (!eleName) throw Error('eleName 不能为空')
    const doms = document.getElementsByTagName(eleName);
    for (const item of doms) {
        item.setAttribute('spellcheck', false);
    }
};