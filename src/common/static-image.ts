import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdStaticImageSvg extends TypeSvgSvg {
  className: 'TdStaticImageSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdStaticImageSvg';
    this.resetSize(24, 24);
    this.childNodes = [];
  }
}
