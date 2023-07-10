import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdFormTextSvg extends TypeSvgSvg {
  className: 'TdFormTextSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdFormTextSvg';
    this.resetSize(24, 24);
    this.childNodes = [];
  }
}
