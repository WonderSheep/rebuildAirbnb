function styleStrToObject(styleStr) {
  const obj = {}
  const s = styleStr.toLowerCase().replace(/-(.)/g, function (m, g) {
    return g.toUpperCase();
  }).replace(/;\s?$/g,"").split(/:|;/g)
  for (var i = 0; i < s.length; i += 2) {
    obj[s[i].replace(/\s/g,"")] = s[i+1].replace(/^\s+|\s+$/g,"")
  }

  return obj
}

export default styleStrToObject

// (property) React.SVGAttributes<SVGSVGElement>.style?: React.CSSProperties 是 TypeScript 中的类型注解。它指定了 React 组件中 SVG 元素的 style 属性的类型。

// 解读该类型注解：

// (property) 表示这是一个属性。
// React.SVGAttributes<SVGSVGElement> 是一个泛型类型，用于指定 SVG 元素的属性类型。
// .style 表示 style 属性。
// ?: 表示该属性是可选的，可以不提供。
// React.CSSProperties 是一个类型，表示 CSS 样式属性的集合。