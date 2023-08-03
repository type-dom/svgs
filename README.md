## TypeDomSvgs

> 这是一个基于前端框架TypeDom创建的svg组件库。

## Usage

### Install the lib

```bash
# or pnpm or yarn
npm install type-dom-svgs
```

```ts
// Typescript Webpack
import {Br, Division, TypeRoot, TextNode} from 'type-dom.ts';
import {AddSvg} from 'type-dom-svgs';
// app-root.ts 项目根节点
export class AppRoot extends TypeRoot {
  className: 'AppRoot';
  constructor(editorEl: HTMLElement) {
    super(editorEl);
    this.className = 'AppRoot'; 
    this.addAttrObj({ // 设置根节点的属性
      name: 'app-root'
    })
    this.addStyleObj({ // 设置根节点样式
      padding: '30px',
      border: '20px solid #dddddd'
    });
    this.createItems(this, [ // 添加子节点
      {
        TypeClass: Division, // 具体类
        childNodes: [
          {
            TypeClass: AddSvg, // 加号图标
          },
        ]
      },
      {
        TypeClass: Br // 换行
      }
    ]);
    this.render(); // 渲染
  }
}

// main.ts 项目主程序
import {fromEvent} from 'rxjs';
import {AppRoot} from "./app-root";
fromEvent(document, 'DOMContentLoaded').subscribe(() => {
  const uiEl = document.querySelector('#example-ref') as HTMLElement;
  if (uiEl) {
    const view = new AppRoot(uiEl);
  }
});
```
```html
// index.html
<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/html">
  <head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
    <title>type dom example</title>
  </head>
  <body>
    <div id="example-ref"></div>
  </body> 
</html>
```
