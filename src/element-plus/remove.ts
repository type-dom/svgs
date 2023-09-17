import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class ElRemoveSvg extends TypeSvgSvg {
  className: 'ElRemoveSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'ElRemoveSvg';
    this.addAttrObj({
      name: 'remove',
      title: 'remove'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M352 480h320a32 32 0 1 1 0 64H352a32 32 0 0 1 0-64z',
    );
    this.childNodes.push(path0);
    const path1 = new SvgPath(this);
    path1.setData(
      'M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z',
    );
    this.childNodes.push(path1);
  }
}
