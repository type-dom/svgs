import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class TdSortValueSvg extends TypeSvgSvg {
  className: 'TdSortValueSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'TdSortValueSvg';
    this.addAttrObj({
      name: 'TdSortValueSvg',
      title: 'TdSortValueSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M800.256 741.888l47.616-47.616a31.744 31.744 0 0 1 45.056 45.056l-102.4 102.4a31.744 31.744 0 0 1-54.272-22.528V204.8a32.256 32.256 0 0 1 64 0zM153.6 237.056a32.256 32.256 0 0 1 0-64h460.8a32.256 32.256 0 0 1 0 64z m0 307.2a32.256 32.256 0 0 1 0-64h460.8a32.256 32.256 0 0 1 0 64z m0 307.2a32.256 32.256 0 0 1 0-64h460.8a32.256 32.256 0 0 1 0 64z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
