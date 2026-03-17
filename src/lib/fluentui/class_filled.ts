import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from '@type-dom/framework';
export class FlClassFilledSvg extends TypeSvgSvg {
  className: 'FlClassFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = 'FlClassFilledSvg';
   addAttrObj(this, {
      name: 'FlClassFilledSvg'
    });
   addAttrObj(this, {
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M6 2C4.89543 2 4 2.89543 4 4V16C4 17.1046 4.89543 18 6 18H14C15.1046 18 16 17.1046 16 16V4C16 2.89543 15.1046 2 14 2H11V8.5C11 8.68939 10.893 8.86252 10.7236 8.94721C10.5542 9.03191 10.3515 9.01363 10.2 8.9L8.5 7.625L6.8 8.9C6.64849 9.01363 6.44579 9.03191 6.27639 8.94721C6.107 8.86252 6 8.68939 6 8.5V2ZM10 2H7V7.5L8.2 6.6C8.37778 6.46667 8.62222 6.46667 8.8 6.6L10 7.5V2Z',
    );
    this.addChild(path0);
  }
}
