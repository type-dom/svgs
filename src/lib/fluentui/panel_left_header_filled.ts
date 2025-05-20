import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlPanelLeftHeaderFilledSvg extends TypeSvgSvg {
  className: 'FlPanelLeftHeaderFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlPanelLeftHeaderFilledSvg';
    this.attr.addObj({
      name: 'FlPanelLeftHeaderFilledSvg',
      title: 'FlPanelLeftHeaderFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M5 3C3.34375 3 2 4.34314 2 6V13C2 14.6569 3.34375 16 5 16H15C16.6562 16 18 14.6569 18 13V6C18 4.34314 16.6562 3 15 3H5ZM17 6V7H8.5V4H15C16.1055 4 17 4.89539 17 6ZM15 15H8.5V8H17V13C17 14.1046 16.1055 15 15 15Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
