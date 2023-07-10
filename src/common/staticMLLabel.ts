import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdStaticMLLabelSvg extends TypeSvgSvg {
  className: 'TdStaticMLLabelSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdStaticMLLabelSvg';
    this.resetSize(24, 24);
    this.childNodes = [];
  }
}
