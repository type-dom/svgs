import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlCircleSmallFilledSvg extends TypeSvgSvg {
  className: 'FlCircleSmallFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlCircleSmallFilledSvg';
    this.attr.addObj({
      name: 'FlCircleSmallFilledSvg',
      title: 'FlCircleSmallFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M13 10C13 11.6569 11.6569 13 10 13C8.34315 13 7 11.6569 7 10C7 8.34315 8.34315 7 10 7C11.6569 7 13 8.34315 13 10Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
