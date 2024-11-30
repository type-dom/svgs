import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlBorderOutsideThickRegularSvg extends TypeSvgSvg {
  className: 'FlBorderOutsideThickRegularSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlBorderOutsideThickRegularSvg';
    this.attr.addObj({
      name: 'FlBorderOutsideThickRegularSvg',
      title: 'FlBorderOutsideThickRegularSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M3 6C3 4.34315 4.34315 3 6 3H14C15.6569 3 17 4.34315 17 6V14C17 15.6569 15.6569 17 14 17H6C4.34315 17 3 15.6569 3 14V6ZM6 4.5C5.17157 4.5 4.5 5.17157 4.5 6V14C4.5 14.8284 5.17157 15.5 6 15.5H14C14.8284 15.5 15.5 14.8284 15.5 14V6C15.5 5.17157 14.8284 4.5 14 4.5H6Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
