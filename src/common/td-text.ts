import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdTdTextSvg extends TypeSvgSvg {
  className: 'TdTdTextSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdTdTextSvg';
    this.resetSize(24, 24);
    this.childNodes = [];
  }
}
