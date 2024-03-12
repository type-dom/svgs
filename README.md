## TypeDomSvgs

> 这是一个基于前端框架TypeDom创建的svg组件库。

## Usage

### Install the lib

```bash
# or pnpm or yarn
npm install @type-dom/svgs
```

```ts
// Typescript Webpack
import {Br, Division, TypeRoot, TextNode} from '@type-dom/framework';
import {AddSvg} from '@type-dom/svgs';
// svgs-root.ts 项目根节点
export class AppElement extends TypeRoot {
  className: 'AppElement';
  constructor(editorEl: HTMLElement) {
    super();
    this.className = 'AppElement'; 
    this.addAttrObj({ // 设置根节点的属性
      name: 'app-root'
    })
    this.addStyleObj({ // 设置根节点样式
      padding: '30px',
      border: '20px solid #dddddd'
    });
    this.addChild(
      new Division({ // 子节点
        childNodes: [
          new AddSvg(), // 加号图标
        ]
      }),
      new Br()
    );
    this.render(); // 渲染
  }
}

// main.ts 项目主程序
import {fromEvent} from 'rxjs';
import {AppElement} from "./app-root";
fromEvent(document, 'DOMContentLoaded').subscribe(() => {
  const uiEl = document.querySelector('#example-ref') as HTMLElement;
  if (uiEl) {
    const view = new AppElement(uiEl);
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
    <title>type dom svgs </title>
  </head>
  <body>
    <div id="example-ref"></div>
  </body> 
</html>
```
