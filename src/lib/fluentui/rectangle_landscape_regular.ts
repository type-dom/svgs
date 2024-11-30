import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlRectangleLandscapeRegularSvg extends TypeSvgSvg {
  className: 'FlRectangleLandscapeRegularSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlRectangleLandscapeRegularSvg';
    this.attr.addObj({
      name: 'FlRectangleLandscapeRegularSvg',
      title: 'FlRectangleLandscapeRegularSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M2 7C2 5.34315 3.34315 4 5 4H15C16.6569 4 18 5.34315 18 7V13C18 14.6569 16.6569 16 15 16H5C3.34315 16 2 14.6569 2 13V7ZM5 5C3.89543 5 3 5.89543 3 7V13C3 14.1046 3.89543 15 5 15H15C16.1046 15 17 14.1046 17 13V7C17 5.89543 16.1046 5 15 5H5Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
