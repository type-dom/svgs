import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from '@type-dom/framework';
export class FlCaretUpRegularSvg extends TypeSvgSvg {
  className: 'FlCaretUpRegularSvg';
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = 'FlCaretUpRegularSvg';
   addAttrObj(this, {
      name: 'FlCaretUpRegularSvg'
    });
   addAttrObj(this, {
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M5.01887 12.2799C4.49064 12.9339 4.95612 13.9082 5.79681 13.9082H14.2037C15.0444 13.9082 15.5098 12.9339 14.9816 12.2799L11.1672 7.5572C10.5668 6.81387 9.43371 6.81387 8.83333 7.5572L5.01887 12.2799ZM14.2037 12.9082L5.79681 12.9082L9.61127 8.18554C9.81139 7.93776 10.1891 7.93776 10.3892 8.18554L14.2037 12.9082Z',
    );
    this.addChild(path0);
  }
}
