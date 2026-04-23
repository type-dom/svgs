import * as fs from "fs";
import { TypeNodeParser } from "@type-dom/parser";
import { toHump } from "./utils.mjs";

const SVG_PATH = "./trans-svgs/mis/svg-files";
const INDEX_PATH = "./src/lib";
const CLASS_PATH = "./src/lib/mis";

async function generateSvgClasses() {
  fs.readdir(SVG_PATH, (err, files) => {
    if (err) {
      return console.error(err);
    }
    // console.log('files is ', files);
    // 将 svg 转换成 ts 文件
    files.forEach((file) => {
      // 获得文件扩展名
      const fileExtension = file.split(".").pop();
      if (fileExtension !== "svg") {
        return;
      }
      fs.readFile(SVG_PATH + "/" + file, (err, data) => {
        if (err) {
          return console.error(err);
        }
        const svgStr = data.toString();
        // console.log('svgStr is ', svgStr);
        const parser = new TypeNodeParser({});
        // const parser = new Parser();
        const svgDom = parser.parseFromString(svgStr);
        // console.log('svgDom is ', svgDom);
        const paths = [];
        svgDom?.children.forEach((child) => {
          // console.log('child is ', child);
          // console.log('path.attributes is ', child.attributes);
          if (child.nodeName === "path") {
            paths.push(child);
            // console.log('child.attributes is ', child.attributes);
          }
        });
        // 输出匹配到的结果
        // console.log('paths is ', paths);
        const fileName = file.replace(".svg", "");
        const className =
          "Mis" +
          toHump(fileName) // 获取类名
            .replaceAll("+", "Plus") +
          "Svg";
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
        const viewBoxItem = svgDom.attributes.find((item) => item.name === "viewBox");
        if (viewBoxItem) {
          template += `
    addAttrObj(this, {
      viewBox: '${viewBoxItem.value}',
    });`;
        } else {
          const width = svgDom.attributes.find((item) => item.name === "width").value;
          const height = svgDom.attributes.find((item) => item.name === "height").value;
          if (width && height) {
            template += `
    addAttrObj(this, {
      viewBox: '0 0 ${width} ${height}',
    });`;
          }
        }
        template += `
    this.resetSize(24, 24);
    this.childNodes = [];`;
        if (Array.isArray(paths)) {
          paths.forEach((path, index) => {
            // const dom = parser.parseFromString(path);
            // console.log('path is ', path);
            const data = path.attributes.find((item) => item.name === "d").value;
            // console.log('data is ', data);
            template += `
    const path${index} = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path${index}.setData(
      '${data}',
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
            return console.error(fileName + "转换失败", err);
          }
          console.log(fileName + "转换成功");
        });
      });
    });
    // getSvgIndex(files);
    // generateSvgMisList(files);
  });
  return "生成svg文件成功！";
}

// 导出目录
async function generateSvgIndexes() {
  fs.readdir(SVG_PATH, (err, files) => {
    if (err) {
      return console.error(err);
    }
    // console.log('files is ', files);
    let template = "";
    files.forEach((file) => {
      const fileName = file.replace(".svg", ""); // 获取文件名
      const className = "Mis" + toHump(fileName).replaceAll("+", "Plus") + "Svg";
      template += `export { ${className} } from './mis/${fileName}';
`;
    });
    fs.writeFile(INDEX_PATH + "/mis-index.ts", template, (err) => {
      if (err) {
        return console.error(err);
      }
      console.log("index.ts 注册代码重新生成！");
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
      const fileName = file.replace(".svg", ""); // 获取文件名
      const className = "Mis" + toHump(fileName).replaceAll("+", "Plus") + "Svg";
      template += `
  ${className},`;
    });

    template += `
} from './index';
export class MisSvgList extends TypeDiv {
  className: 'MisSvgList';
  constructor() {
    super();
    // console.log('MisSvgList constructor . ');
    this.className = 'MisSvgList';
    const $svgStyle: Partial<CSSProperties> = {
      padding: '10px',
      border: '1px solid #ddd'
    };
    this.addChildren(`;
    files.forEach((file) => {
      const fileName = file.replace(".svg", ""); // 获取文件名
      const className = "Mis" + toHump(fileName).replaceAll("+", "Plus") + "Svg";
      template += `
      new ${className}({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),`;
    });
    template += `
    );
  }
}`;
    fs.writeFile("./src/mis-svg-list.ts", template, (err) => {
      if (err) {
        return console.error(err);
      }
      console.log("mis-svg-list.ts 注册代码重新生成！");
    });
  });
}

generateSvgClasses();
generateSvgIndexes();
generateSvgList();
