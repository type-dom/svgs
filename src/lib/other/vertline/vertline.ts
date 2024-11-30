import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';

export class VertlineSvg extends TypeSvgSvg {
  className: 'VertlineSvg';
  path: SvgPath;
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'VertlineSvg';
    this.attr.addObj({
      viewBox: '0 0 1024 1024',
      name: 'verti-line-svg',
    });
    this.resetSize(24, 24);
    this.path = new SvgPath();
    this.path.setData(
      'M480.1964583 1024.11855074l0-1024.18760401 63.91821038-0.00141421 0.00070711 1024.18972533z'
    );
    this.addChild(this.path);
    this.useParams(params);
  }
}
