import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlPhoneStatusBarFilledSvg extends TypeSvgSvg {
  className: 'FlPhoneStatusBarFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlPhoneStatusBarFilledSvg';
    this.attr.addObj({
      name: 'FlPhoneStatusBarFilledSvg',
      title: 'FlPhoneStatusBarFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M5 4C5 2.89543 5.89543 2 7 2H13C14.1046 2 15 2.89543 15 4V16C15 17.1046 14.1046 18 13 18H7C5.89543 18 5 17.1046 5 16V4ZM7.5 4C7.22386 4 7 4.22386 7 4.5C7 4.77614 7.22386 5 7.5 5H12.5C12.7761 5 13 4.77614 13 4.5C13 4.22386 12.7761 4 12.5 4H7.5Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
