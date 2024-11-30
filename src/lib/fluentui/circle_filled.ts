import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlCircleFilledSvg extends TypeSvgSvg {
  className: 'FlCircleFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlCircleFilledSvg';
    this.attr.addObj({
      name: 'FlCircleFilledSvg',
      title: 'FlCircleFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
