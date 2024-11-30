import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlTriangleDownFilledSvg extends TypeSvgSvg {
  className: 'FlTriangleDownFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlTriangleDownFilledSvg';
    this.attr.addObj({
      name: 'FlTriangleDownFilledSvg',
      title: 'FlTriangleDownFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M11.3195 17.2145C10.7522 18.2619 9.24903 18.2619 8.68166 17.2145L2.1822 5.21594C1.64081 4.21649 2.36446 3.0015 3.50113 3.0015H16.5C17.6367 3.0015 18.3604 4.21649 17.819 5.21594L11.3195 17.2145Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
