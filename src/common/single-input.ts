import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class TdSingleInputSvg extends TypeSvgSvg {
  className: 'TdSingleInputSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'TdSingleInputSvg';
    this.addAttrObj({
      name: 'TdSingleInputSvg',
      title: 'TdSingleInputSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M0 171.885714h1024v69.485715H0V171.885714z m0 614.4h1024v69.485715H0v-69.485715z m0 0',
    );
    this.childNodes.push(path0);
    const path1 = new SvgPath({ parent: this });
    path1.setData(
      'M0 171.885714h69.485714v683.885715H0V171.885714z m135.314286 168.228572h69.485714v340.114285H135.314286V340.114286z m819.2-168.228572H1024v683.885715h-69.485714V171.885714z m0 0',
    );
    this.childNodes.push(path1);
    this.setConfig(config);
  }
}
