import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from '@type-dom/framework';
export class FlRectangleLandscapeFilledSvg extends TypeSvgSvg {
  className: 'FlRectangleLandscapeFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = 'FlRectangleLandscapeFilledSvg';
   addAttrObj(this, {
      name: 'FlRectangleLandscapeFilledSvg'
    });
   addAttrObj(this, {
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M5 4C3.34315 4 2 5.34315 2 7V13C2 14.6569 3.34315 16 5 16H15C16.6569 16 18 14.6569 18 13V7C18 5.34315 16.6569 4 15 4H5Z',
    );
    this.addChild(path0);
  }
}
