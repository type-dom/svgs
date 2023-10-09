import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class ElBellFilledSvg extends TypeSvgSvg {
  className: 'ElBellFilledSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'ElBellFilledSvg';
    this.addAttrObj({
      name: 'ElBellFilledSvg',
      title: 'ElBellFilledSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M640 832a128 128 0 0 1-256 0h256zm192-64H134.4a38.4 38.4 0 0 1 0-76.8H192V448c0-154.88 110.08-284.16 256.32-313.6a64 64 0 1 1 127.36 0A320.128 320.128 0 0 1 832 448v243.2h57.6a38.4 38.4 0 0 1 0 76.8H832z',
    );
    this.childNodes.push(path0);
  }
}
