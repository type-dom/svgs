import { SvgPath, TypeHtml, TypeSvgSvg } from '@type-dom/framework';
export class ElFlagSvg extends TypeSvgSvg {
  className: 'ElFlagSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'ElFlagSvg';
    this.addAttrObj({
      name: 'ElFlagSvg',
      title: 'ElFlagSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M288 128h608L736 384l160 256H288v320h-96V64h96v64z',
    );
    this.childNodes.push(path0);
  }
}
