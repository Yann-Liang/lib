/**
 * 移除元素的拼写检查
 */

export default (eleName) => {
    const doms = document.getElementsByTagName(eleName);
    for (const item of doms) {
        item.setAttribute('spellcheck', false);
    }
};