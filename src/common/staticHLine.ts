import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdStaticHLineSvg extends TypeSvgSvg {
  className: 'TdStaticHLineSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdStaticHLineSvg';
    this.resetSize(24, 24);
    this.childNodes = [];
  }
}
