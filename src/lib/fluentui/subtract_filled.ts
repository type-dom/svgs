import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlSubtractFilledSvg extends TypeSvgSvg {
  className: 'FlSubtractFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlSubtractFilledSvg';
    this.attr.addObj({
      name: 'FlSubtractFilledSvg',
      title: 'FlSubtractFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M3 10C3 9.58579 3.33579 9.25 3.75 9.25H16.25C16.6642 9.25 17 9.58579 17 10C17 10.4142 16.6642 10.75 16.25 10.75H3.75C3.33579 10.75 3 10.4142 3 10Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
