import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdStaticImageSvg extends TypeSvgSvg {
  className: 'TdStaticImageSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdStaticImageSvg';
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
  }
}
