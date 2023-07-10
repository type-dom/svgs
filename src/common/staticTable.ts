import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdStaticTableSvg extends TypeSvgSvg {
  className: 'TdStaticTableSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdStaticTableSvg';
    this.resetSize(24, 24);
    this.childNodes = [];
  }
}
