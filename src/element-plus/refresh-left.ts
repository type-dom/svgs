import { SvgPath, TypeHtml, TypeSvgSvg } from '@type-dom/framework';
export class ElRefreshLeftSvg extends TypeSvgSvg {
  className: 'ElRefreshLeftSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'ElRefreshLeftSvg';
    this.addAttrObj({
      name: 'ElRefreshLeftSvg',
      title: 'ElRefreshLeftSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M289.088 296.704h92.992a32 32 0 0 1 0 64H232.96a32 32 0 0 1-32-32V179.712a32 32 0 0 1 64 0v50.56a384 384 0 0 1 643.84 282.88 384 384 0 0 1-383.936 384 384 384 0 0 1-384-384h64a320 320 0 1 0 640 0 320 320 0 0 0-555.712-216.448z',
    );
    this.childNodes.push(path0);
  }
}
