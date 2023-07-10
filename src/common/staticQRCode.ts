import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdStaticQRCodeSvg extends TypeSvgSvg {
  className: 'TdStaticQRCodeSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdStaticQRCodeSvg';
    this.resetSize(24, 24);
    this.childNodes = [];
  }
}
