import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlShiftsColorSvg extends TypeSvgSvg {
  className: 'FlShiftsColorSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlShiftsColorSvg';
    this.attr.addObj({
      name: 'FlShiftsColorSvg',
      title: 'FlShiftsColorSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M3 6C3 4.34315 4.34315 3 6 3H14C15.6569 3 17 4.34315 17 6V14C17 15.6569 15.6569 17 14 17H6C4.34315 17 3 15.6569 3 14V6Z',
    );
    this.addChild(path0);
    const path1 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path1.setData(
      'M9.5 6C9.77614 6 10 6.22386 10 6.5V10H12.5C12.7761 10 13 10.2239 13 10.5C13 10.7761 12.7761 11 12.5 11H9.5C9.22386 11 9 10.7761 9 10.5V6.5C9 6.22386 9.22386 6 9.5 6Z',
    );
    this.addChild(path1);
    this.useParams(params);
  }
}
