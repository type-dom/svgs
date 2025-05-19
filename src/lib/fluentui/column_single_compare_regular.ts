import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlColumnSingleCompareRegularSvg extends TypeSvgSvg {
  className: 'FlColumnSingleCompareRegularSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlColumnSingleCompareRegularSvg';
    this.attr.addObj({
      name: 'FlColumnSingleCompareRegularSvg',
      title: 'FlColumnSingleCompareRegularSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M4 4C4 2.89543 4.89543 2 6 2H14C15.1046 2 16 2.89543 16 4V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4ZM6 3C5.44772 3 5 3.44772 5 4V6H15V4C15 3.44772 14.5523 3 14 3H6ZM5 11H15V7H5V11ZM5 14V16C5 16.5523 5.44772 17 6 17H14C14.5523 17 15 16.5523 15 16V14H5Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
