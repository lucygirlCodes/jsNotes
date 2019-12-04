var ary = [1, 2, 3, 2, 2, 3, 4, 3, 4, 5];
/*
 * 基于对象的属性名不能重复,我们实现高性能的数组去重
 * 1.创建一个空对象
 * 2.依次遍历数组中的每一项,把每一项存储的值，当做对象的属性名和属性值存储起来
 *
 *  第一次循环 1  {1:1}
 *  第二次循环 2  {1:1,2:2}
 *  第三次循环 3  {1:1,2:2,3:3}
 *  第四次循环 2  我们在存储之前做一个判断，判断当前对象中是否已经存在这个属性名了，如果存在，说明之前有这一项存储的操作，进一步说明之前数组中出现过这个数值了（也就是重复了，此时我们把当前项在数组中移除即可）
 *  ...
 *
 *  如何判断对象中是否存在这个属性：如果没有这个属性，获取的属性值是undefined
 */
var obj = {};
for (var i = 0; i < ary.length; i++) {
    var item = ary[i];//=>每一次循环从数组中拿出来的这一项

    //=>存储之前需要做判断：如果对象中已经存在这个属性了，说明当前ITEM在之前出现过，也就是当前项重复了，我们把当前项删掉
    if (typeof obj[item] !== 'undefined') {
        /* ary.splice(i, 1);
         * i--;//=>防止数组塌陷
         *
         * 这种删除方式不好，如果数组很长，我们删除某一项，后面索引都需要重新计算，非常耗性能
        */

        /*
         * 1.我们把数组最后一项的结果获取到，替换当前项内容
         * 2.在把数组最后一项删除
         * [12,23,34,56] 想要删除23
         *    先让56替换23 [12,56,34,56]
         *    在把最后一项删除 [12,56,34]
         */
        ary[i] = ary[ary.length - 1];
        ary.length--;
        i--;
        continue;
    }
    //=>把这一项作为对象的属性名和属性值存储进去
    obj[item] = item;//=>obj[1]=1 =>{1:1}
}
console.log(ary);