import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElCloseBoldSvg extends TypeSvgSvg {
  className: 'ElCloseBoldSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'ElCloseBoldSvg';
    this.addAttrObj({
      name: 'ElCloseBoldSvg',
      title: 'ElCloseBoldSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
