import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdStaticSLLabelSvg extends TypeSvgSvg {
  className: 'TdStaticSLLabelSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdStaticSLLabelSvg';
    this.resetSize(24, 24);
    this.childNodes = [];
  }
}
