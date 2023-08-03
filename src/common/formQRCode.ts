import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdFormQRCodeSvg extends TypeSvgSvg {
  className: 'TdFormQRCodeSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdFormQRCodeSvg';
    this.addAttrObj({
      viewBox: '50 50 974 974',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
  }
}
