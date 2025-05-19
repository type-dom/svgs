import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlPhoneFilledSvg extends TypeSvgSvg {
  className: 'FlPhoneFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlPhoneFilledSvg';
    this.attr.addObj({
      name: 'FlPhoneFilledSvg',
      title: 'FlPhoneFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M6.5 2C5.67157 2 5 2.67157 5 3.5V16.5C5 17.3284 5.67157 18 6.5 18H13.5C14.3284 18 15 17.3284 15 16.5V3.5C15 2.67157 14.3284 2 13.5 2H6.5ZM9 14H11C11.2761 14 11.5 14.2239 11.5 14.5C11.5 14.7761 11.2761 15 11 15H9C8.72386 15 8.5 14.7761 8.5 14.5C8.5 14.2239 8.72386 14 9 14Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
