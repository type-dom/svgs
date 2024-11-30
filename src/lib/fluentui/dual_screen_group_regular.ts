import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlDualScreenGroupRegularSvg extends TypeSvgSvg {
  className: 'FlDualScreenGroupRegularSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlDualScreenGroupRegularSvg';
    this.attr.addObj({
      name: 'FlDualScreenGroupRegularSvg',
      title: 'FlDualScreenGroupRegularSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M4 4C2.89543 4 2 4.89543 2 6V14C2 15.1046 2.89543 16 4 16H16C17.1046 16 18 15.1046 18 14V6C18 4.89543 17.1046 4 16 4H4ZM3 6C3 5.44772 3.44772 5 4 5H9.5V15H4C3.44772 15 3 14.5523 3 14V6ZM10.5 15V5H16C16.5523 5 17 5.44772 17 6V14C17 14.5523 16.5523 15 16 15H10.5Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
