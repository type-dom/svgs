import * as fs from 'fs';
import { TypeNodeParser } from '@type-dom/parser';
import { toHump } from './utils.mjs';

const SVG_PATH = './trans-svgs/element-plus/svg-files';
const INDEX_PATH = './src/lib';
const CLASS_PATH = './src/lib/element-plus';

async function generateSvgClasses() {
  fs.readdir(SVG_PATH, (err, files) => {
    if (err) {
      return console.error(err);
    }
    // console.log('files is ', files);
    // 将 svg 转换成 ts 文件
    files.forEach((file) => {
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
        // console.log('pathStr is ', svgStr);
        // const parser = new Parser({});
        const parser = new TypeNodeParser({});
        const svgDom = parser.parseFromString(svgStr);
        // console.log('svgDom is ', svgDom);
        // 使用正则表达式提取path的值
        const pathRegex = /d="([^"]*)"/gi;
        const paths = svgStr.match(pathRegex);
        // 输出匹配到的结果
        // console.log('paths is ', paths);
        const fileName = file.replace('.svg', '');
        const className =
          'El' +
          toHump(fileName) // 获取类名
            .replaceAll('+', 'Plus') +
          'Svg';
        // .replaceAll('-', 'Minus');
        let template = `import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from '@type-dom/framework';
export class ${className} extends TypeSvgSvg {
  className: '${className}';
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = '${className}';
   addAttrObj(this, {
      name: '${className}'
    });`;
        svgDom.attributes.forEach((item) => {
          if (item.name === 'viewBox') {
            template += `
   addAttrObj(this, {
      viewBox: '${item.value}',
    });`;
          }
        });
        template += `
    this.resetSize(24, 24);
    this.childNodes = [];`;
        if (Array.isArray(paths)) {
          paths.forEach((path, index) => {
            // const dom = parser.parseFromString(path);
            // console.log('path is ', path);
            const data = path.replace('d=', '').replaceAll('"', '\'');
            // console.log('data is ', data);
            template += `
    const path${index} = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path${index}.setData(
      ${data},
    );
    this.addChild(path${index});`;
          });
        }
        template += `
  }
}
`;
        fs.writeFile(`${CLASS_PATH}/${fileName}.ts`, template, (err) => {
          if (err) {
            return console.error(fileName + '转换失败', err);
          }
          console.log(fileName + '转换成功');
        });
      });
    });
  });
  return '生成svg文件成功！';
}

// 导出目录
async function generateSvgIndexes() {
  fs.readdir(SVG_PATH, (err, files) => {
    if (err) {
      return console.error(err);
    }
    // console.log('files is ', files);
    let template = '';
    files.forEach((file) => {
      const fileName = file.replace('.svg', ''); // 获取文件名
      const className =
        'El' + toHump(fileName).replaceAll('+', 'Plus') + 'Svg';
      template += `export { ${className} } from './element-plus/${fileName}';
`;
    });
    fs.writeFile(INDEX_PATH + '/element-plus-index.ts', template, (err) => {
      if (err) {
        return console.error(err);
      }
      console.log('index.ts 注册代码重新生成！');
    });
  });
}

// 生成展示列表页
function generateSvgList() {
  fs.readdir(SVG_PATH, (err, files) => {
    if (err) {
      return console.error(err);
    }
    // console.log('files is ', files);
    let template = `import { TypeDiv, CSSProperties } from '@type-dom/framework';
import {`;
    files.forEach((file) => {
      const fileName = file.replace('.svg', ''); // 获取文件名
      const className =
        'El' + toHump(fileName).replaceAll('+', 'Plus') + 'Svg';
      template += `
  ${className},`;
    });

    template += `
} from './index';
export class ElementPlusSvgList extends TypeDiv {
  className: 'ElementPlusSvgList';
  constructor() {
    super();
    console.log('ElementPlusSvgList constructor . ');
    this.className = 'ElementPlusSvgList';
    const $svgStyle: CSSProperties = {
      padding: '10px',
      border: '1px solid #ddd'
    };
    this.addChildren(`;
    files.forEach((file) => {
      const fileName = file.replace('.svg', ''); // 获取文件名
      const className =
        'El' + toHump(fileName).replaceAll('+', 'Plus') + 'Svg';
      template += `
      new ${className}({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),`;
    });
    template += `
    );
  }
}`;
    fs.writeFile('./src/element-plus-svg-list.ts', template, (err) => {
      if (err) {
        return console.error(err);
      }
      console.log('element-plus-svg-list.ts 注册代码重新生成！');
    });
  });
}

generateSvgClasses();
generateSvgIndexes();
generateSvgList();
