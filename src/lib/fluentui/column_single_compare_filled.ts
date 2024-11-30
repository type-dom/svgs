import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlColumnSingleCompareFilledSvg extends TypeSvgSvg {
  className: 'FlColumnSingleCompareFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlColumnSingleCompareFilledSvg';
    this.attr.addObj({
      name: 'FlColumnSingleCompareFilledSvg',
      title: 'FlColumnSingleCompareFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M6 2C4.89543 2 4 2.89543 4 4V16C4 17.0355 4.787 17.8873 5.79551 17.9897C5.86275 17.9965 5.93096 18 6 18H14C15.1046 18 16 17.1046 16 16V4C16 2.89543 15.1046 2 14 2H6ZM5 6H15V7H5V6ZM5 11H15V14H5V11Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
