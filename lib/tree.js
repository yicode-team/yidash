/**
 * @module 树结构
 */

import { keyBy } from "lodash-es";
/**
 * 一维数组生成无限级树结构
 * @param {Array} arrs - 传入的一维数组
 * @param {String} id - 唯一标识字段
 * @param {String} pid - 父级标识字段
 * @param {String} children - 子级标识字段
 * @returns {Array} 返回一个无限级数组结构
 * @summary 应用场景：用于生成无限级菜单结构
 * @example
 * import { tree_Array2Tree } from 'yidash';
 * tree_Array2Tree([
 *      { id:1, pid:0, name:'a' ,age:16 },
 *      { id:2, pid:1, name:'b' ,age:18 },
 *      { id:3, pid:2, name:'c' ,age:22 },
 *      { id:4, pid:2, name:'d' ,age:25 },
 * ])
 * // 结果如下：
 * [{
 *      id:1,
 *      pid:0,
 *      name:'a',
 *      age:16,
 *      children:[{
 *          id:2,
 *          pid:1,
 *          name:'b',
 *          age:18,
 *          children:[
 *              {
 *                  id:3,
 *                  pid:2,
 *                  name:'c',
 *                  age:22,
 *                  children:[]
 *              },
 *              {
 *                  id:4,
 *                  pid:2,
 *                  name:'d',
 *                  age:25,
 *                  children:[]
 *              }
 *          ]
 *      }]
 * }]
 */
export function tree_Array2Tree(arrs, id = "id", pid = "pid", children = "children") {
    // id对象，用于通过映射ID取得对应的对象数据
    let idObject = keyBy(arrs, id);

    // 无限级树结构
    let treeData = [];

    arrs.forEach((item) => {
        // 父级对象数据
        let pData = idObject[item[pid]];
        if (pData) {
            if (!pData[children]) {
                pData[children] = [];
            }
            pData[children].push(item);
        } else {
            treeData.push(item);
        }
    });
    return treeData;
}
