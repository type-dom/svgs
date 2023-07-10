import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdStaticVerticalLineSvg extends TypeSvgSvg {
  className: 'TdStaticVerticalLineSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdStaticVerticalLineSvg';
    this.resetSize(24, 24);
    this.childNodes = [];
  }
}
