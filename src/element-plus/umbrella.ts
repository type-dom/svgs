import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class ElUmbrellaSvg extends TypeSvgSvg {
  className: 'ElUmbrellaSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'ElUmbrellaSvg';
    this.addAttrObj({
      name: 'ElUmbrellaSvg',
      title: 'ElUmbrellaSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M320 768a32 32 0 1 1 64 0 64 64 0 0 0 128 0V512H64a448 448 0 1 1 896 0H576v256a128 128 0 1 1-256 0zm570.688-320a384.128 384.128 0 0 0-757.376 0h757.376z',
    );
    this.childNodes.push(path0);
  }
}
