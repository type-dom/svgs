import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElWarnTriangleFilledSvg extends TypeSvgSvg {
  className: 'ElWarnTriangleFilledSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'ElWarnTriangleFilledSvg';
    this.addAttrObj({
      name: 'ElWarnTriangleFilledSvg',
      title: 'ElWarnTriangleFilledSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M928.99 755.83 574.6 203.25c-12.89-20.16-36.76-32.58-62.6-32.58s-49.71 12.43-62.6 32.58L95.01 755.83c-12.91 20.12-12.9 44.91.01 65.03 12.92 20.12 36.78 32.51 62.59 32.49h708.78c25.82.01 49.68-12.37 62.59-32.49 12.91-20.12 12.92-44.91.01-65.03zM554.67 768h-85.33v-85.33h85.33V768zm0-426.67v298.66h-85.33V341.32l85.33.01z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
