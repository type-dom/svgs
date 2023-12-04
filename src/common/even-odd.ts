import { SvgPath, TypeHtml, TypeSvgSvg } from '@type-dom/framework';
export class TdEvenOddSvg extends TypeSvgSvg {
  className: 'TdEvenOddSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdEvenOddSvg';
    this.addAttrObj({
      viewBox: '0 0 16 16',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
  }
}
