import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlCompassNorthwestFilledSvg extends TypeSvgSvg {
  className: 'FlCompassNorthwestFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlCompassNorthwestFilledSvg';
    this.attr.addObj({
      name: 'FlCompassNorthwestFilledSvg',
      title: 'FlCompassNorthwestFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM10.5102 7.87264C11.2505 8.16767 11.8431 8.7452 12.1571 9.47776L13.7563 13.2094C13.9045 13.5551 13.5549 13.9047 13.2092 13.7565L9.47756 12.1572C8.74502 11.8433 8.1675 11.2507 7.87246 10.5104L6.48356 7.02511C6.34813 6.68529 6.68504 6.34838 7.02486 6.4838L10.5102 7.87264Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
