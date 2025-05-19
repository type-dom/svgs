import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlPhoneRegularSvg extends TypeSvgSvg {
  className: 'FlPhoneRegularSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlPhoneRegularSvg';
    this.attr.addObj({
      name: 'FlPhoneRegularSvg',
      title: 'FlPhoneRegularSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M9 14C8.72386 14 8.5 14.2239 8.5 14.5C8.5 14.7761 8.72386 15 9 15H11C11.2761 15 11.5 14.7761 11.5 14.5C11.5 14.2239 11.2761 14 11 14H9ZM7 2C5.89543 2 5 2.89543 5 4V16C5 17.1046 5.89543 18 7 18H13C14.1046 18 15 17.1046 15 16V4C15 2.89543 14.1046 2 13 2H7ZM6 4C6 3.44772 6.44772 3 7 3H13C13.5523 3 14 3.44772 14 4V16C14 16.5523 13.5523 17 13 17H7C6.44772 17 6 16.5523 6 16V4Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
