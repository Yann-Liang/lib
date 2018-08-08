/**
 * @description 数组去重
 *
 * @param {any} arr
 * @returns
 */
function unique(arr) {
    return Array.from(new Set(arr))
}