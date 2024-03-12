import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class TdSingleOptionSvg extends TypeSvgSvg {
  className: 'TdSingleOptionSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'TdSingleOptionSvg';
    this.addAttrObj({
      name: 'TdSingleOptionSvg',
      title: 'TdSingleOptionSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M512 1024C229.230208 1024 0 794.769792 0 512 0 229.230208 229.230208 0 512 0 794.769792 0 1024 229.230208 1024 512 1024 794.769792 794.769792 1024 512 1024ZM512 960C759.423565 960 960 759.423565 960 512 960 264.576432 759.423565 64 512 64 264.576432 64 64 264.576432 64 512 64 759.423565 264.576432 960 512 960ZM512 832C688.731117 832 832 688.731117 832 512 832 335.26888 688.731117 192 512 192 335.26888 192 192 335.26888 192 512 192 688.731117 335.26888 832 512 832Z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
