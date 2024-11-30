import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlStopFilledSvg extends TypeSvgSvg {
  className: 'FlStopFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlStopFilledSvg';
    this.attr.addObj({
      name: 'FlStopFilledSvg',
      title: 'FlStopFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M4.5 3C3.67157 3 3 3.67157 3 4.5V15.5C3 16.3284 3.67157 17 4.5 17H15.5C16.3284 17 17 16.3284 17 15.5V4.5C17 3.67157 16.3284 3 15.5 3H4.5Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
