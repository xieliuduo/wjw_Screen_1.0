// 数字格式化方法
export function numFormat(num) {
  var NUM,
    rules; //判断规则
  if (num === undefined || num === null) return '0';
  NUM = Number(num);
  if (NUM < 10000) return NUM;
  rules = [{
      //大于一万
      match: function (param) {
        return param >= 10000 && param < 10000000;
      },
      action: function (param) {
        param = (Math.round(param / 1000)) / 10 + '万';
        return param;
      }
    },
    {
      //大于1000万
      match: function (param) {
        return param >= 10000000 && param < 1000000000;
      },
      action: function (param) {
        param = (Math.round(param / 1000000)) / 10 + '千万';
        return param;
      }
    },
    {
      //大于1亿
      match: function (param) {
        return param >= 1000000000;
      },
      action: function (param) {
        param = (Math.round(param / 10000000)) / 10 + '亿';
        return param;
      }
    }
  ]
  for (var i = 0; i < rules.length; i++) {
    if (rules[i].match(NUM)) {
      return rules[i].action(NUM);
    }
  }
};

//首頁签约数字格式化
export function signNumFormat(num){
    num = num + '';
    if( num == 'undefined' || num == 'null')num = '0';
    var length = num.length;
    var zero_len = 9 - num.length;
    length < 9 ? num = ( Math.pow(10, zero_len) + '' ).substring(1) + num : null;
    return num.substring(0, 3) + ',' + num.substring(3, 6) + ',' + num.substring(6);
}
// 左边地图导航的数据处理

function addFirstObj(item) {
  return {
    name: "全部",
    code: item.code
  }
}
export function mapDataHandle(data) {
  data.forEach(function (item) {
    !item.code && (item.code = item.name)
    if (item.children && item.children.length > 0) {
      var firstCode = item.code;
      item.children.unshift(addFirstObj(item));
      item.children.forEach(function (item) {
        !item.code && (item.code = (firstCode + '-' + item.name))
        if (item.children && item.children.length > 0) {
          var secondCode = item.code;
          item.children.unshift(addFirstObj(item));
          item.children.forEach(function (item) {
            !item.code && (item.code = (secondCode + '-' + item.name))
          })
        }
      })
    }
  })
  return data
}
export default {
  mapDataHandle
}
