import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdTdQRCodeSvg extends TypeSvgSvg {
  className: 'TdTdQRCodeSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdTdQRCodeSvg';
    this.addAttrObj({
      viewBox: '50 50 974 974',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
  }
}
