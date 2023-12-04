import { SvgPath, TypeHtml, TypeSvgSvg } from '@type-dom/framework';
export class ElDishSvg extends TypeSvgSvg {
  className: 'ElDishSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'ElDishSvg';
    this.addAttrObj({
      name: 'ElDishSvg',
      title: 'ElDishSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M480 257.152V192h-96a32 32 0 0 1 0-64h256a32 32 0 1 1 0 64h-96v65.152A448 448 0 0 1 955.52 768H68.48A448 448 0 0 1 480 257.152zM128 704h768a384 384 0 1 0-768 0zM96 832h832a32 32 0 1 1 0 64H96a32 32 0 1 1 0-64z',
    );
    this.childNodes.push(path0);
  }
}
