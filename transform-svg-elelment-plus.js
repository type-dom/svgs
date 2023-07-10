let fs = require('fs');
const SVG_PATH = './public/element-plus';
const INDEX_PATH = './src/element-plus';
const CLASS_PATH = './src/element-plus';
/**
 * @param str 字符串
 * @param separator 分割符(默认"-")
 * @param topIsCapital 开头是否大写(默认是)
 */
function toHump(str, separator = '-', topIsCapital = true) {
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
  files.forEach(file => {
    // 获得文件扩展名
    const fileExtension = file.split('.').pop();
    if (fileExtension !== 'svg') {
      return;
    }
    fs.readFile(SVG_PATH + '/' + file, (err, data) => {
      if (err) {
        return console.error(err);
      }
      const svgStr = data.toString();
      console.log('pathStr is ', svgStr);
      // 使用正则表达式提取path的值
      const pathRegex = /d="([^"]*)"/gi;
      const paths = svgStr.match(pathRegex);
      // 输出匹配到的结果
      console.log('paths is ', paths);
      const fileName = file.replace('.svg', '');
      const className = 'El' + toHump(file.replace('.svg', 'Svg')); // 获取类名
      let template = `import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class ${className} extends TypeSvgSvg {
  className: '${className}';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = '${className}';
    this.resetSize(24, 24);
    this.childNodes = [];`;
      if (Array.isArray(paths)) {
        paths.forEach((path, index) => {
          // const dom = parser.parseFromString(path);
          console.log('path is ', path);
          const data = path.replace('d=', '').replaceAll('"', "'");
          console.log('data is ', data);
          template += `
    const path${index} = new SvgPath(this);
    path${index}.setData(${data});
    this.childNodes.push(path${index});`;
        });
      }
      template += `
  }
}
`;
      fs.writeFile(
        `${CLASS_PATH}/${fileName}.ts`,
        template,
        err => {
          if (err) {
            return console.error(fileName + '转换失败', err);
          }
          console.log(fileName + '转换成功');
        }
      );
    });
  });

  // 生成组件名称列表
  const getSvgIndex = () => {
    let template = '';
    files.forEach(file => {
      const filename = file.replace('.svg', '');
      const className = 'El' + toHump(file.replace('.svg', 'Svg')); // 获取文件名
      template += `export { ${className} } from './${filename}';
`;
    });
    fs.writeFile(INDEX_PATH + '/index.ts', template, err => {
      if (err) {
        return console.error(err);
      }
      console.log('index.js 注册代码重新生成！');
    });
  };
  getSvgIndex();
});
