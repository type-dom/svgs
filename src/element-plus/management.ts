import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class ElManagementSvg extends TypeSvgSvg {
  className: 'ElManagementSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'ElManagementSvg';
    this.addAttrObj({
      name: 'ElManagementSvg',
      title: 'ElManagementSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M576 128v288l96-96 96 96V128h128v768H320V128h256zm-448 0h128v768H128V128z',
    );
    this.childNodes.push(path0);
  }
}
