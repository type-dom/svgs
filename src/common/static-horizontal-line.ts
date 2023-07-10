import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdStaticHorizontalLineSvg extends TypeSvgSvg {
  className: 'TdStaticHorizontalLineSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdStaticHorizontalLineSvg';
    this.resetSize(24, 24);
    this.childNodes = [];
  }
}
