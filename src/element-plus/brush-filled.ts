import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class ElBrushFilledSvg extends TypeSvgSvg {
  className: 'ElBrushFilledSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'ElBrushFilledSvg';
    this.addAttrObj({
      name: 'brush-filled',
      title: 'brush-filled'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M608 704v160a96 96 0 0 1-192 0V704h-96a128 128 0 0 1-128-128h640a128 128 0 0 1-128 128h-96zM192 512V128.064h640V512H192z',
    );
    this.childNodes.push(path0);
  }
}
