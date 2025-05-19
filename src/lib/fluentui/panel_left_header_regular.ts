import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlPanelLeftHeaderRegularSvg extends TypeSvgSvg {
  className: 'FlPanelLeftHeaderRegularSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlPanelLeftHeaderRegularSvg';
    this.attr.addObj({
      name: 'FlPanelLeftHeaderRegularSvg',
      title: 'FlPanelLeftHeaderRegularSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M5 3C3.34315 3 2 4.34315 2 6V13C2 14.6569 3.34315 16 5 16H15C16.6569 16 18 14.6569 18 13V6C18 4.34315 16.6569 3 15 3H5ZM8.5 7V4H15C16.1046 4 17 4.89543 17 6V7H8.5ZM8.5 8H17V13C17 14.1046 16.1046 15 15 15H8.5V8ZM5 4H7.5V15H5C3.89543 15 3 14.1046 3 13V6C3 4.89543 3.89543 4 5 4Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
