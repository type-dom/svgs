import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from '@type-dom/framework';
export class FlArrowTurnUpDownRegularSvg extends TypeSvgSvg {
  className: 'FlArrowTurnUpDownRegularSvg';
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = 'FlArrowTurnUpDownRegularSvg';
   addAttrObj(this, {
      name: 'FlArrowTurnUpDownRegularSvg'
    });
   addAttrObj(this, {
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M15.5658 16.9961C15.6041 16.9911 15.642 16.9816 15.6788 16.9676C15.8095 16.9179 15.9134 16.8157 15.9653 16.6859L17.9644 11.6859C18.0669 11.4295 17.9422 11.1385 17.6858 11.036C17.4293 10.9335 17.1384 11.0582 17.0359 11.3146L15.5015 15.1523L10.9118 3.62805C10.582 2.79999 9.41553 2.78451 9.06389 3.60353L4.04068 15.3032C3.93174 15.5569 4.04912 15.8509 4.30287 15.9599C4.55661 16.0688 4.85063 15.9514 4.95957 15.6977L9.98277 3.99805L14.55 15.4658L10.7237 13.553C10.4767 13.4296 10.1764 13.5297 10.0529 13.7767C9.92942 14.0237 10.0296 14.324 10.2766 14.4475L15.2585 16.938C15.3507 16.9888 15.4583 17.0104 15.5658 16.9961Z',
    );
    this.addChild(path0);
  }
}
