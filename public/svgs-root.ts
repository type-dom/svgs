import { Br, Division, IStyle, TypeRoot } from 'type-dom.ts';
import { CommonSvgList } from "./common-svg-list";
import { ElementPlusSvgList } from './element-plus-svg-list';
export class SVGSRoot extends TypeRoot {
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
        TypeClass: CommonSvgList,
      },
      {
        TypeClass: ElementPlusSvgList,
      },
      {
        TypeClass: Br
      }
    ]);
    this.render();
  }
}