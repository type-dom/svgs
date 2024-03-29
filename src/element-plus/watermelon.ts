import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElWatermelonSvg extends TypeSvgSvg {
  className: 'ElWatermelonSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'ElWatermelonSvg';
    this.addAttrObj({
      name: 'ElWatermelonSvg',
      title: 'ElWatermelonSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'm683.072 600.32-43.648 162.816-61.824-16.512 53.248-198.528L576 493.248l-158.4 158.4-45.248-45.248 158.4-158.4-55.616-55.616-198.528 53.248-16.512-61.824 162.816-43.648L282.752 200A384 384 0 0 0 824 741.248L683.072 600.32zm231.552 141.056a448 448 0 1 1-632-632l632 632z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
