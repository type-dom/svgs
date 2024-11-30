import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlPhonePageHeaderRegularSvg extends TypeSvgSvg {
  className: 'FlPhonePageHeaderRegularSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlPhonePageHeaderRegularSvg';
    this.attr.addObj({
      name: 'FlPhonePageHeaderRegularSvg',
      title: 'FlPhonePageHeaderRegularSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M7 2C5.89543 2 5 2.89543 5 4V16C5 17.1046 5.89543 18 7 18H13C14.1046 18 15 17.1046 15 16V4C15 2.89543 14.1046 2 13 2H7ZM6 5H14V16C14 16.5523 13.5523 17 13 17H7C6.44772 17 6 16.5523 6 16V5Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
