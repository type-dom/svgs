import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdStaticVLineSvg extends TypeSvgSvg {
  className: 'TdStaticVLineSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdStaticVLineSvg';
    this.resetSize(24, 24);
    this.childNodes = [];
  }
}
