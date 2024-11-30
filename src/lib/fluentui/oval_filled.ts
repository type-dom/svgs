import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlOvalFilledSvg extends TypeSvgSvg {
  className: 'FlOvalFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlOvalFilledSvg';
    this.attr.addObj({
      name: 'FlOvalFilledSvg',
      title: 'FlOvalFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M2 10C2 6.68629 4.68629 4 8 4H12C15.3137 4 18 6.68629 18 10C18 13.3137 15.3137 16 12 16H8C4.68629 16 2 13.3137 2 10Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
