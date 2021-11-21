/**
 * 通用一级数组生成树结构
 * @param {Array} arrs - 传入的一维数组
 * @param {String} self - 唯一标识字段
 * @param {String} parent - 父级标识字段
 * @param {String} children - 子级标识字段
 * @returns
 */
export function array2Tree(arrs, self = "id", parent = "pid", children = "children") {
    let menuObject = _.keyBy(arrs, self);
    let menuArray = [];

    arrs.forEach((item) => {
        let pData = menuObject[item[parent]];
        if (pData) {
            if (!pData[children]) {
                pData[children] = [];
            }
            pData[children].push(item);
        } else {
            menuArray.push(item);
        }
    });
    return menuArray;
}
