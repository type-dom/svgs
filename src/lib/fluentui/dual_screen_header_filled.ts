import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlDualScreenHeaderFilledSvg extends TypeSvgSvg {
  className: 'FlDualScreenHeaderFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlDualScreenHeaderFilledSvg';
    this.attr.addObj({
      name: 'FlDualScreenHeaderFilledSvg',
      title: 'FlDualScreenHeaderFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M16 16H10.5V8H18V14C18 15.1046 17.1046 16 16 16ZM18 7V6C18 4.89543 17.1046 4 16 4H10.5V7H18ZM9.5 7V4H4C2.89543 4 2 4.89543 2 6V7H9.5ZM2 8V14C2 15.1046 2.89543 16 4 16H9.5V8H2Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
