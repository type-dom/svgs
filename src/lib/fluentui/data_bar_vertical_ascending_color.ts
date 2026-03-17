import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from '@type-dom/framework';
export class FlDataBarVerticalAscendingColorSvg extends TypeSvgSvg {
  className: 'FlDataBarVerticalAscendingColorSvg';
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = 'FlDataBarVerticalAscendingColorSvg';
   addAttrObj(this, {
      name: 'FlDataBarVerticalAscendingColorSvg'
    });
   addAttrObj(this, {
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M17 5C17 3.89543 16.1046 3 15 3C13.8954 3 13 3.89543 13 5V15C13 16.1046 13.8954 17 15 17C16.1046 17 17 16.1046 17 15V5Z',
    );
    this.addChild(path0);
    const path1 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path1.setData(
      'M12 8C12 6.89543 11.1046 6 10 6C8.89543 6 8 6.89543 8 8V15C8 16.1046 8.89543 17 10 17C11.1046 17 12 16.1046 12 15V8Z',
    );
    this.addChild(path1);
    const path2 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path2.setData(
      'M7 11C7 9.89543 6.10457 9 5 9C3.89543 9 3 9.89543 3 11V15C3 16.1046 3.89543 17 5 17C6.10457 17 7 16.1046 7 15V11Z',
    );
    this.addChild(path2);
  }
}
