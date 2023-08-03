import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdStaticMLLabelSvg extends TypeSvgSvg {
  className: 'TdStaticMLLabelSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdStaticMLLabelSvg';
    this.addAttrObj({
      viewBox: '0 0 1190 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
  }
}
