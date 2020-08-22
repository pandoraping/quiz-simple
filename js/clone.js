// * 代码开发过程中有一个常见的技术需求，对简单的数据对象进行克隆
// * 那么你实际是怎么做的？

// * ---------------- 解决下文中缺少 clone 函数的问题……
// 在这里写代码……
function clone(obj) {
  var jsTypeList = [Boolean, Number, String, Date, RegExp];
  var constructorList = {};
  var self = this;
  for (var i = 0; i < jsTypeList.length; i++) {
    constructorList[jsTypeList[i]] = function(obj) {
      // 基本类型拷贝
      return new jsTypeList[i](obj);
    };
  }
  // 对象类型拷贝处理
  constructorList[Object] = function(obj) {
    var clonedObject = new obj.constructor();
    for (var attr in obj) {
      clonedObject[attr] = typeof obj[attr] == 'object' ? constructorList[Object](obj[attr]) : obj[attr];
    }
    return clonedObject;
  };
  // 数组类型拷贝处理
  constructorList[Array] = function(obj) {
    var clonedArray = [];
    for (var i = 0; i < obj.length; i++) {
      clonedArray[i] = typeof obj[i] == 'object' ? constructorList[Object](obj[i]) : obj[i];
    }
    return clonedArray;
  };
  // 向构造函数列表中添加对象，数组
  jsTypeList.push(Object, Array);
  // 克隆处理
  for (var i = 0; i < jsTypeList.length; i++) {
    if (obj instanceof jsTypeList[i]) {
      return constructorList[jsTypeList[i]](obj);
    }
  }
  return obj;
}
// * ---------------- 实现的效果：true true

{
  const data = {
    person: [
      {
        id: 114514,
        age: 24,
        type: 'student',
      },
    ],
  };

  const mirrorData = clone(data);

  mirrorData.person[0].age = 19;

  console.log(mirrorData.person[0].age === 19);
  console.log(data.person[0].age === 24);
}
