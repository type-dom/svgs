import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlPortUsbCRegularSvg extends TypeSvgSvg {
  className: 'FlPortUsbCRegularSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlPortUsbCRegularSvg';
    this.attr.addObj({
      name: 'FlPortUsbCRegularSvg',
      title: 'FlPortUsbCRegularSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M4.5 10C4.5 8.89543 5.39543 8 6.5 8H13.5C14.6046 8 15.5 8.89543 15.5 10C15.5 11.1046 14.6046 12 13.5 12H6.5C5.39543 12 4.5 11.1046 4.5 10ZM6.5 9C5.94772 9 5.5 9.44772 5.5 10C5.5 10.5523 5.94772 11 6.5 11H13.5C14.0523 11 14.5 10.5523 14.5 10C14.5 9.44772 14.0523 9 13.5 9H6.5Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
