import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlPanelBottomFilledSvg extends TypeSvgSvg {
  className: 'FlPanelBottomFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlPanelBottomFilledSvg';
    this.attr.addObj({
      name: 'FlPanelBottomFilledSvg',
      title: 'FlPanelBottomFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M2 6C2 4.34315 3.34315 3 5 3H15C16.6569 3 18 4.34315 18 6V13C18 14.6569 16.6569 16 15 16H5C3.34315 16 2 14.6569 2 13V6ZM5 4C3.89543 4 3 4.89543 3 6V11H17V6C17 4.89543 16.1046 4 15 4H5Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
