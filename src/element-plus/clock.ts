import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class ElClockSvg extends TypeSvgSvg {
  className: 'ElClockSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'ElClockSvg';
    this.addAttrObj({
      name: 'ElClockSvg',
      title: 'ElClockSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z',
    );
    this.childNodes.push(path0);
    const path1 = new SvgPath(this);
    path1.setData(
      'M480 256a32 32 0 0 1 32 32v256a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32z',
    );
    this.childNodes.push(path1);
    const path2 = new SvgPath(this);
    path2.setData(
      'M480 512h256q32 0 32 32t-32 32H480q-32 0-32-32t32-32z',
    );
    this.childNodes.push(path2);
  }
}
