import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class TdMinusSvg extends TypeSvgSvg {
  className: 'TdMinusSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'TdMinusSvg';
    this.attr.addObj({
      name: 'TdMinusSvg',
      title: 'TdMinusSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 16 16',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M3 7h10v2H3z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
