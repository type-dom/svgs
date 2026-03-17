import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from '@type-dom/framework';
export class FlPanelLeftRegularSvg extends TypeSvgSvg {
  className: 'FlPanelLeftRegularSvg';
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = 'FlPanelLeftRegularSvg';
   addAttrObj(this, {
      name: 'FlPanelLeftRegularSvg'
    });
   addAttrObj(this, {
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M2 6C2 4.34315 3.34315 3 5 3H15C16.6569 3 18 4.34315 18 6V13C18 14.6569 16.6569 16 15 16H5C3.34315 16 2 14.6569 2 13V6ZM8.5 4V15H15C16.1046 15 17 14.1046 17 13V6C17 4.89543 16.1046 4 15 4H8.5ZM7.5 4H5C3.89543 4 3 4.89543 3 6V13C3 14.1046 3.89543 15 5 15H7.5V4Z',
    );
    this.addChild(path0);
  }
}
