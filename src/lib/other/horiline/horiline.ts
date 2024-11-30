import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';

export class HorilineSvg extends TypeSvgSvg {
  className: 'HorilineSvg';
  path: SvgPath;
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'HorilineSvg';
    this.attr.addObj({
      viewBox: '0 0 1024 1024',
      name: 'horiline-svg',
    });
    this.resetSize(24, 24);
    this.path = new SvgPath();
    this.path.setData(
      'M1024.11855074 543.8035417l-1024.18760401 0-0.00141421-63.91821038 1024.18972533-0.00070711z'
    );
    this.addChild(this.path);
    this.useParams(params);
  }
}
