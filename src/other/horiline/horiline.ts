import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class HorilineSvg extends TypeSvgSvg {
  className: 'HorilineSvg';
  childNodes: [SvgPath];
  constructor(config?: ITypeConfig) {
    super();
    this.className = 'HorilineSvg';
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
      name: 'horiline-svg',
    });
    this.resetSize(24, 24);
    const path = new SvgPath({ parent: this });
    path.setData('M1024.11855074 543.8035417l-1024.18760401 0-0.00141421-63.91821038 1024.18972533-0.00070711z');
    this.childNodes = [path];
    this.setConfig(config);
  }
}
