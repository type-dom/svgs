import { SvgPath, TypeHtml, TypeSvgSvg } from '@type-dom/framework';
export class ElBackSvg extends TypeSvgSvg {
  className: 'ElBackSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'ElBackSvg';
    this.addAttrObj({
      name: 'ElBackSvg',
      title: 'ElBackSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z',
    );
    this.childNodes.push(path0);
    const path1 = new SvgPath(this);
    path1.setData(
      'm237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z',
    );
    this.childNodes.push(path1);
  }
}
