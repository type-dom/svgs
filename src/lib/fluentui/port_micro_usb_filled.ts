import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlPortMicroUsbFilledSvg extends TypeSvgSvg {
  className: 'FlPortMicroUsbFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlPortMicroUsbFilledSvg';
    this.attr.addObj({
      name: 'FlPortMicroUsbFilledSvg',
      title: 'FlPortMicroUsbFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M6.43333 8.3C6.69298 8.10527 7.00878 8 7.33333 8H12.6667C12.9912 8 13.307 8.10527 13.5667 8.3L14.9 9.3C15.2777 9.58328 15.5 10.0279 15.5 10.5C15.5 11.3284 14.8284 12 14 12H6C5.17157 12 4.5 11.3284 4.5 10.5C4.5 10.0279 4.72229 9.58328 5.1 9.3L6.43333 8.3Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
