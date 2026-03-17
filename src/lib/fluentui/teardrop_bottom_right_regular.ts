import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from '@type-dom/framework';
export class FlTeardropBottomRightRegularSvg extends TypeSvgSvg {
  className: 'FlTeardropBottomRightRegularSvg';
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = 'FlTeardropBottomRightRegularSvg';
   addAttrObj(this, {
      name: 'FlTeardropBottomRightRegularSvg'
    });
   addAttrObj(this, {
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10V16C18 17.1046 17.1046 18 16 18H10C5.58172 18 2 14.4183 2 10ZM10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17H16C16.5523 17 17 16.5523 17 16V10C17 6.13401 13.866 3 10 3Z',
    );
    this.addChild(path0);
  }
}
