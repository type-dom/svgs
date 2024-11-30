import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlPortUsbARegularSvg extends TypeSvgSvg {
  className: 'FlPortUsbARegularSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlPortUsbARegularSvg';
    this.attr.addObj({
      name: 'FlPortUsbARegularSvg',
      title: 'FlPortUsbARegularSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M4.5 7C3.67157 7 3 7.67157 3 8.5V11.5C3 12.3284 3.67157 13 4.5 13H15.5C16.3284 13 17 12.3284 17 11.5V8.5C17 7.67157 16.3284 7 15.5 7H4.5ZM4 8.5C4 8.22386 4.22386 8 4.5 8H15.5C15.7761 8 16 8.22386 16 8.5V10H4V8.5Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
