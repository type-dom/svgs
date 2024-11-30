import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlSpacebarRegularSvg extends TypeSvgSvg {
  className: 'FlSpacebarRegularSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlSpacebarRegularSvg';
    this.attr.addObj({
      name: 'FlSpacebarRegularSvg',
      title: 'FlSpacebarRegularSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M2.5 8C2.77614 8 3 8.22386 3 8.5V10.5C3 10.7761 3.22386 11 3.5 11H16.5C16.7761 11 17 10.7761 17 10.5V8.5C17 8.22386 17.2239 8 17.5 8C17.7761 8 18 8.22386 18 8.5V10.5C18 11.3284 17.3284 12 16.5 12H3.5C2.67157 12 2 11.3284 2 10.5V8.5C2 8.22386 2.22386 8 2.5 8Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
