import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlLayoutRowThreeFilledSvg extends TypeSvgSvg {
  className: 'FlLayoutRowThreeFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlLayoutRowThreeFilledSvg';
    this.attr.addObj({
      name: 'FlLayoutRowThreeFilledSvg',
      title: 'FlLayoutRowThreeFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M17 7V6C17 4.34315 15.6569 3 14 3H6C4.34315 3 3 4.34315 3 6V7H17ZM3 8V12H17V8H3ZM3 14V13H17V14C17 15.6569 15.6569 17 14 17H6C4.34315 17 3 15.6569 3 14Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
