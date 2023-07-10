let fs = require('fs');
const SVG_PATH = './public/common';
const INDEX_PATH = './src/common';
const CLASS_PATH = './src/common';
/**
 * @param str 字符串
 * @param separator 分割符(默认"-")
 * @param topIsCapital 开头是否大写(默认是)
 */
function toHump(str, separator = '-', topIsCapital = true) {
  if (str.endsWith(separator)) { // 最后是减号的处理
    str = str + 'minus';
  }
  let strAry = str.split(separator);
  return strAry.map((item, index) => {
    if (!topIsCapital && index === 0) return item;
    return item.replace(/^./, item.match(/^./)[0].toLocaleUpperCase());
  }).join('');
}
fs.readdir(SVG_PATH, (err, files) => {
  if (err) {
    return console.error(err);
  }
  console.log('files is ', files);
  // 将 svg 转换成 ts 文件
//   files.forEach(file => {
//     // 获得文件扩展名
//     const fileExtension = file.split('.').pop();
//     if (fileExtension !== 'svg') {
//       return;
//     }
//     fs.readFile(SVG_PATH + '/' + file, (err, data) => {
//       if (err) {
//         return console.error(err);
//       }
//       const svgStr = data.toString();
//       console.log('pathStr is ', svgStr);
//       // 使用正则表达式提取path的值
//       const pathRegex = /d="([^"]*)"/gi;
//       const paths = svgStr.match(pathRegex);
//       // 输出匹配到的结果
//       console.log('paths is ', paths);
//       const fileName = file.replace('.svg', '');
//       const className = 'Td' + toHump(fileName) // 获取类名
//         .replaceAll('+', 'Plus') + 'Svg';
//         // .replaceAll('-', 'Minus');
//       let template = `import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
// export class ${className} extends TypeSvgSvg {
//   className: '${className}';
//   childNodes: SvgPath[];
//   constructor(public parent: TypeHtml) {
//     super();
//     this.className = '${className}';
//     this.resetSize(24, 24);
//     this.childNodes = [];`;
//       if (Array.isArray(paths)) {
//         paths.forEach((path, index) => {
//           // const dom = parser.parseFromString(path);
//           console.log('path is ', path);
//           const data = path.replace('d=', '').replaceAll('"', "'");
//           console.log('data is ', data);
//           template += `
//     const path${index} = new SvgPath(this);
//     path${index}.setData(${data});
//     this.childNodes.push(path${index});`;
//         });
//       }
//       template += `
//   }
// }
// `;
//       fs.writeFile(
//         `${CLASS_PATH}/${fileName}.ts`,
//         template,
//         err => {
//           if (err) {
//             return console.error(fileName + '转换失败', err);
//           }
//           console.log(fileName + '转换成功');
//         }
//       );
//     });
//   });

  // 生成组件名称列表
  const getSvgIndex = () => {
    let template = '';
    files.forEach(file => {
      const fileName = file.replace('.svg', '');  // 获取文件名
      const className = 'Td' + toHump(fileName)
        .replaceAll('+', 'Plus') + 'Svg';
      template += `export { ${className} } from './${fileName}';
`;
    });
    fs.writeFile(INDEX_PATH + '/index.ts', template, err => {
      if (err) {
        return console.error(err);
      }
      console.log('index.js 注册代码重新生成！');
    });
  };
  // getSvgIndex();
  function setSvgCommonView() {
    let template = `export class CommonSvgRoot extends TypeRoot {
  className: 'SVGSRoot';
  constructor(editorEl: HTMLElement) {
    super(editorEl);
    console.log('SVGSView constructor . ');
    this.className = 'SVGSRoot';
    this.addStyleObj({
      padding: '30px'
    });
    const $svgStyle: Partial<IStyle> = {
      padding: '10px',
      border: '1px solid #ddd'
    };
    this.createItems(this, [
      {
        TypeClass: Division,
        childNodes: [`;
    files.forEach(file => {
      const fileName = file.replace('.svg', '');  // 获取文件名
      const className = 'Td' + toHump(fileName)
        .replaceAll('+', 'Plus') + 'Svg';
      template += `{
            TypeClass: ${className},
            propObj: {
              attrObj: {
                width: '2em',
                height: '2em',
              },
              styleObj: $svgStyle
            }
          },`;
    });
    template += `
    {
      TypeClass: ElAlarmClockSvg,
        propObj: {
      attrObj: {
        width: '2em',
          height: '2em',
      },
      styleObj: $svgStyle
    }
    },
  ]
  },
  {
    TypeClass: Br
  }
]);
  this.render();
}
}`;
    fs.writeFile('./public/common-svg-root.ts', template, err => {
      if (err) {
        return console.error(err);
      }
      console.log('common-svg-root.ts 注册代码重新生成！');
    });
  }
  setSvgCommonView();
});
