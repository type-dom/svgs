import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class ElBottomLeftSvg extends TypeSvgSvg {
  className: 'ElBottomLeftSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'ElBottomLeftSvg';
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M256 768h416a32 32 0 1 1 0 64H224a32 32 0 0 1-32-32V352a32 32 0 0 1 64 0v416z',
    );
    this.childNodes.push(path0);
    const path1 = new SvgPath(this);
    path1.setData(
      'M246.656 822.656a32 32 0 0 1-45.312-45.312l544-544a32 32 0 0 1 45.312 45.312l-544 544z',
    );
    this.childNodes.push(path1);
  }
}
