import * as fs from 'fs';
import * as path from 'path';
// import { Parser } from '@type-dom/framework';
import { TypeNodeParser } from '@type-dom/parser';
import { toHump } from './utils.mjs';

const BASE_PATH = './trans-svgs/fluentui';
const ASSETS_PATH = './trans-svgs/fluentui/assets'; // SVG文件夹
const SVG_PATH = './trans-svgs/fluentui/svg-files'; // SVG文件夹
const INDEX_PATH = './src/lib';
const CLASS_PATH = './src/lib/fluentui';

const PDF_FOLDER_NAME = 'PDF'; // 要删除的子文件夹名称
const METADATA_FILE = 'metadata.json'; // 要删除的文件
const SVG_FOLDER_NAME = 'SVG'; // 要处理的文件夹名称

// 将文件命中的 ic_fluent_ 前缀， 和 中间 _20_ 去掉。
//   同名的文件， 会被覆盖。
//   统一保留带有 _20_的同名文件，如果没有_20_,则向前或向后查找。
function renameFile() {
  fs.readdir(SVG_PATH, (err, files) => {
    if (err) {
      return console.error(err);
    }
    // console.log('files is ', files.length);
    const fileNameSet = new Set();
    // 将 svg 转换成 ts 文件
    files.forEach((file) => {
        // fileNameSet.add(file.replace(/_(\d{2})(_(filled|regular|light|dark|color|ltr|rtl))?\.svg$/, "$2"));
        // fileNameSet.add(file.replace(/_\d{2}_\w+\.svg$/, ""));
      const newName = file.replace('_20_', '_');
      // console.log('newName is ', newName);
      // 重命名文件
      const sourcePath = path.join(SVG_PATH, file);
      const destinationPath = path.join(SVG_PATH, newName);
      // console.log('sourcePath is ', sourcePath, ' destinationPath is ', destinationPath);
      fs.rename(sourcePath, destinationPath, (err) => {
        if (err) {
          return console.error(`重命名文件错误: ${file}`, err);
        }
        console.log(`已成功重命名: ${file} -> ${newName}`);
      });
    });
    // console.log('fileNameSet.size is ', fileNameSet.size);
    //
    // fileNameSet.forEach(fileName => {
    //   // console.log('fileName is ', fileName);
    //   // 获取同名文件
    //   const sameNameFiles = files.filter(file => file.startsWith(fileName));
    //   if (sameNameFiles) {
    //     // 如果有同名文件，则删除
    //     // fs.unlink(path.join(SVG_PATH, sameNameFile), (err) => {})
    //     // 判断是否存在 _20_ 的文件
    //     const has20 = sameNameFiles.find(file => /_20_/.test-dts(file));
    //     if (has20) {
    //       sameNameFiles.forEach(file => {
    //         if (/_20_/.test-dts(file)) {
    //
    //         } else {
    //           console.log('file is ', file);
    //           fs.unlink(path.join(SVG_PATH, file), (err) => {
    //             if (err) {
    //               return console.error('删除文件错误:', err);
    //             }
    //             console.log(`已成功删除: ${file}`);
    //           })
    //         }
    //       });
    //     } else {
    //       console.log('sameNameFiles is ', sameNameFiles);
    //     }
    //   }
    // });
    // // const file16s = files.filter(file => /_16_/.test-dts(file));
    // // console.log('file16s.length is ', file16s.length);
    // const file20s = files.filter(file => /_20_/.test-dts(file));
    // console.log('file20s.length is ', file20s.length);
    // 要将已经包含的 _20_ 的同名其它文件删除，要保留_20_的文件


    // file20s.forEach(file20 => {
    //   const fileName = file20.replace(/_(\d{2})(_(filled|regular|light|dark|color|ltr|rtl))?\.svg$/, "$2");
    //   if (fileNameSet.has(fileName)) {
    //     // 如果有同名文件，则删除
    //     fs.unlink(path.join(SVG_PATH, file20), (err) => {
    //       if (err) {
    //         return console.error('删除文件错误:', err);
    //       }
    //       console.log(`已成功删除: ${file20}`);
    //     })
    //   }
    // })
    // const file24s = files.filter(file => /_24_/.test-dts(file));
    // console.log('file24s.length is ', file24s.length);
    // const file32s = files.filter(file => /_32_/.test-dts(file));
    // console.log('file32s.length is ', file32s.length);
    // const extractedStyles = files.map(icon => {
    //   // 使用正则表达式匹配 _数字_ 和 .svg 之间的部分
    //   const match = icon.match(/_(\d{2})_(\w+)\.svg$/);
    //   if (match) {
    //     return match[2]; // 返回匹配到的 filled、regular 或 light
    //   }
    //   return null; // 如果没有匹配到，返回 null
    // }).filter(style => style !== null); // 过滤掉 null 值
    //
    // console.log(new Set(extractedStyles));
  })
}
function cleanDir() {
  fs.readdir(ASSETS_PATH, (err, folders) => {
    if (err) {
      return console.error('读取文件夹错误:', err);
    }
    folders.forEach(folder => {
      const pdfFolderPath = path.join(ASSETS_PATH, folder + '/' + PDF_FOLDER_NAME);
      const metadataFilePath = path.join(ASSETS_PATH, folder + '/' + METADATA_FILE);
      // // console.log('metadataFilePath is ', metadataFilePath);
      const svgFolderPath = path.join(ASSETS_PATH, folder + '/' + SVG_FOLDER_NAME);
      // 读取 svg 文件夹，并移动到 svgFolderPath 中
      fs.readdir(svgFolderPath, (err, files) => {
        if (err) {
          return console.error('读取文件夹错误:', err);
        }
        files.forEach(file => {
          const sourceFilePath = path.join(svgFolderPath, file);
          const destinationFilePath = path.join(SVG_PATH, file);

          fs.copyFile(sourceFilePath, destinationFilePath, (err) => {
            if (err) {
              return console.error('移动文件错误:', err);
            }
            console.log(`已成功移动: ${file}`);
          });
        });

        // 删除空的 svg 文件夹
        // fs.rmdir(svgFolderPath, (err) => {
        //   if (err) {
        //     return console.error('删除文件夹错误:', err);
        //   }
        //   console.log(`已成功删除文件夹: ${SVG_FOLDER_NAME}`);
        // });
      });
      // 删除 PDF 子文件夹
      fs.stat(pdfFolderPath, (err, stats) => {
        if (err) {
          if (err.code === 'ENOENT') {
            console.log(`文件夹 ${PDF_FOLDER_NAME} 不存在`);
          } else {
            console.error('检查文件夹状态错误:', err);
          }
          return;
        }

        if (stats.isDirectory()) {
          deleteFolderRecursive(pdfFolderPath);
        } else {
          console.log(`${PDF_FOLDER_NAME} 不是一个文件夹`);
        }
      });
      // 检查并删除 metadata.json 文件
      fs.stat(metadataFilePath, (err, stats) => {
        if (err) {
          if (err.code === 'ENOENT') {
            console.log(`文件 ${METADATA_FILE} 不存在`);
          } else {
            console.error('检查文件状态错误:', err);
          }
        } else if (stats.isFile()) {
          fs.unlink(metadataFilePath, (err) => {
            if (err) {
              return console.error('删除文件错误:', err);
            }
            console.log(`已成功删除: ${METADATA_FILE}`);
          });
        } else {
          console.log(`${METADATA_FILE} 不是一个文件`);
        }
      });
    });
  });
}

function deleteFolderRecursive(folderPath) {
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      return console.error('读取文件夹内容错误:', err);
    }

    for (const file of files) {
      const filePath = path.join(folderPath, file);

      fs.stat(filePath, (err, stats) => {
        if (err) {
          return console.error('检查文件状态错误:', err);
        }

        if (stats.isDirectory()) {
          deleteFolderRecursive(filePath);
        } else {
          fs.unlink(filePath, (err) => {
            if (err) {
              return console.error('删除文件错误:', err);
            }
            console.log(`已成功删除: ${filePath}`);
          });
        }
      });
    }

    fs.rmdir(folderPath, (err) => {
      if (err) {
        return console.error('删除文件夹错误:', err);
      }
      console.log(`已成功删除文件夹: ${folderPath}`);
    });
  });
}

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
        // console.log('svgStr is ', svgStr);
        const parser = new TypeNodeParser({});
        // const parser = new Parser();
        const svgDom = parser.parseFromString(svgStr);
        // console.log('svgDom is ', svgDom);
        const paths = [];
        svgDom?.children.forEach((child) => {
          // console.log('child is ', child);
          // console.log('path.attributes is ', child.attributes);
          if (child.nodeName === 'path') {
            paths.push(child);
            // console.log('child.attributes is ', child.attributes);
          }
        });
        // 输出匹配到的结果
        // console.log('paths is ', paths);
        const fileName = file.replace('.svg', '');
        const className =
          'Fl' +
          toHump(fileName, '_') // 获取类名
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
        const viewBoxItem = svgDom.attributes.find(
          (item) => item.name === 'viewBox'
        );
        if (viewBoxItem) {
          template += `
   addAttrObj(this, {
      viewBox: '${viewBoxItem.value}',
    });`;
        } else {
          const width = svgDom.attributes.find(
            (item) => item.name === 'width'
          ).value;
          const height = svgDom.attributes.find(
            (item) => item.name === 'height'
          ).value;
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
            const data = path.attributes.find(
              (item) => item.name === 'd'
            ).value;
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
        'Fl' + toHump(fileName, '_').replaceAll('+', 'Plus') + 'Svg';
      template += `export { ${className} } from './fluentui/${fileName}';
`;
    });
    fs.writeFile(INDEX_PATH + '/fluentui-index.ts', template, (err) => {
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
        'Fl' + toHump(fileName, '_').replaceAll('+', 'Plus') + 'Svg';
      template += `
  ${className},`;
    });

    template += `
} from './index';
export class FluentuiSvgList extends TypeDiv {
  className: 'FluentuiSvgList';
  constructor() {
    super();
    // console.log('FluentuiSvgList constructor . ');
    this.className = 'FluentuiSvgList';
    const $svgStyle: Partial<CSSProperties> = {
      padding: '10px',
      border: '1px solid #ddd'
    };
    this.addChildren(`;
    files.forEach((file) => {
      const fileName = file.replace('.svg', ''); // 获取文件名
      const className =
        'Fl' + toHump(fileName, '_').replaceAll('+', 'Plus') + 'Svg';
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
    fs.writeFile('./src/fluentui-svg-list.ts', template, (err) => {
      if (err) {
        return console.error(err);
      }
      console.log('fluentui-svg-list.ts 注册代码重新生成！');
    });
  });
}

// cleanDir();
// renameFile();
generateSvgClasses();
generateSvgIndexes();
generateSvgList();
