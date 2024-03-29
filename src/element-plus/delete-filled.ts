import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElDeleteFilledSvg extends TypeSvgSvg {
  className: 'ElDeleteFilledSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'ElDeleteFilledSvg';
    this.addAttrObj({
      name: 'ElDeleteFilledSvg',
      title: 'ElDeleteFilledSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M352 192V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64H96a32 32 0 0 1 0-64h256zm64 0h192v-64H416v64zM192 960a32 32 0 0 1-32-32V256h704v672a32 32 0 0 1-32 32H192zm224-192a32 32 0 0 0 32-32V416a32 32 0 0 0-64 0v320a32 32 0 0 0 32 32zm192 0a32 32 0 0 0 32-32V416a32 32 0 0 0-64 0v320a32 32 0 0 0 32 32z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
