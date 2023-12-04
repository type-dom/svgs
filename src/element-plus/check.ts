import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class ElCheckSvg extends TypeSvgSvg {
  className: 'ElCheckSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'ElCheckSvg';
    this.addAttrObj({
      name: 'ElCheckSvg',
      title: 'ElCheckSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z',
    );
    this.childNodes.push(path0);
  }
}
