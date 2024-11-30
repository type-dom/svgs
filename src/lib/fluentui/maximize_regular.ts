import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlMaximizeRegularSvg extends TypeSvgSvg {
  className: 'FlMaximizeRegularSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlMaximizeRegularSvg';
    this.attr.addObj({
      name: 'FlMaximizeRegularSvg',
      title: 'FlMaximizeRegularSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M3 5C3 3.89543 3.89543 3 5 3H15C16.1046 3 17 3.89543 17 5V15C17 16.1046 16.1046 17 15 17H5C3.89543 17 3 16.1046 3 15V5ZM5 4C4.44772 4 4 4.44772 4 5V15C4 15.5523 4.44772 16 5 16H15C15.5523 16 16 15.5523 16 15V5C16 4.44772 15.5523 4 15 4H5Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
