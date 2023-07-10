import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class ElTopLeftSvg extends TypeSvgSvg {
  className: 'ElTopLeftSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'ElTopLeftSvg';
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData('M256 256h416a32 32 0 1 0 0-64H224a32 32 0 0 0-32 32v448a32 32 0 0 0 64 0V256z');
    this.childNodes.push(path0);
    const path1 = new SvgPath(this);
    path1.setData('M246.656 201.344a32 32 0 0 0-45.312 45.312l544 544a32 32 0 0 0 45.312-45.312l-544-544z');
    this.childNodes.push(path1);
  }
}
