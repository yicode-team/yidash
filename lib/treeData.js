// 通用一级数组生成树结构
import keyBy from "lodash/keyBy";
function treeData(arrays, idName = "id", pidName = "pid", children = "children") {
    // 将数组以id键进行映射
    let menuObject = _keyBy(arrays, idName);

    // 菜单数组
    let menuArray = [];

    arrays.forEach((item) => {
        let parent = menuObject[item[pidName]];
        if (parent) {
            if (!parent[children]) {
                parent[children] = [];
            }
            parent[children].push(item);
        } else {
            menuArray.push(item);
        }
    });
    return menuArray;
}
export default treeData;
