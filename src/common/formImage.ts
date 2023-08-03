import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdFormImageSvg extends TypeSvgSvg {
  className: 'TdFormImageSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdFormImageSvg';
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
  }
}
