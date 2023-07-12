import { Br, TypeRoot } from 'type-dom.ts';
import { CommonSvgList } from './common-svg-list';
import { ElementPlusSvgList } from './element-plus-svg-list';
import { OtherSvgList } from './other-svg-list';
export class SVGSRoot extends TypeRoot {
  className: 'SVGSRoot';
  constructor(editorEl: HTMLElement) {
    super(editorEl);
    console.log('SVGSView constructor . ');
    this.className = 'SVGSRoot';
    this.addStyleObj({
      padding: '30px'
    });
    this.createItems(this, [
      {
        TypeClass: CommonSvgList,
      },
      {
        TypeClass: ElementPlusSvgList,
      },
      {
        TypeClass: OtherSvgList,
      },
      {
        TypeClass: Br
      }
    ]);
    this.render();
  }
}
