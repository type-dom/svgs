import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElSearchSvg extends TypeSvgSvg {
  className: 'ElSearchSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'ElSearchSvg';
    this.addAttrObj({
      name: 'ElSearchSvg',
      title: 'ElSearchSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'm795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
