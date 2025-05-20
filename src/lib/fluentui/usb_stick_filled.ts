import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlUsbStickFilledSvg extends TypeSvgSvg {
  className: 'FlUsbStickFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlUsbStickFilledSvg';
    this.attr.addObj({
      name: 'FlUsbStickFilledSvg',
      title: 'FlUsbStickFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M7 2.5C7 2.22386 7.22386 2 7.5 2H12.5C12.7761 2 13 2.22386 13 2.5V6C14.1046 6 15 6.89543 15 8V16C15 17.1046 14.1046 18 13 18H7C5.89543 18 5 17.1046 5 16V8C5 6.89543 5.89543 6 7 6V2.5ZM8 6H12V3H8V6Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
