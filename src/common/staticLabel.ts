import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdStaticLabelSvg extends TypeSvgSvg {
  className: 'TdStaticLabelSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdStaticLabelSvg';
    this.resetSize(24, 24);
    this.childNodes = [];
  }
}
