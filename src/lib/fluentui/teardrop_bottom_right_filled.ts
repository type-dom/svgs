import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from '@type-dom/framework';
export class FlTeardropBottomRightFilledSvg extends TypeSvgSvg {
  className: 'FlTeardropBottomRightFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = 'FlTeardropBottomRightFilledSvg';
   addAttrObj(this, {
      name: 'FlTeardropBottomRightFilledSvg'
    });
   addAttrObj(this, {
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10V16C18 17.1046 17.1046 18 16 18H10C5.58172 18 2 14.4183 2 10Z',
    );
    this.addChild(path0);
  }
}
