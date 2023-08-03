import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdStaticTextSvg extends TypeSvgSvg {
  className: 'TdStaticTextSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdStaticTextSvg';
    this.addAttrObj({
      viewBox: '0 0 1190 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
  }
}
