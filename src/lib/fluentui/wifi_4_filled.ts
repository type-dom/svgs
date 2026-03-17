import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from '@type-dom/framework';
export class FlWifi4FilledSvg extends TypeSvgSvg {
  className: 'FlWifi4FilledSvg';
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = 'FlWifi4FilledSvg';
   addAttrObj(this, {
      name: 'FlWifi4FilledSvg'
    });
   addAttrObj(this, {
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M10.9215 13.8814C11.4067 14.3666 11.4067 15.1532 10.9215 15.6383C10.4364 16.1235 9.64979 16.1235 9.16464 15.6383C8.67949 15.1532 8.67949 14.3666 9.16464 13.8814C9.64979 13.3963 10.4364 13.3963 10.9215 13.8814Z',
    );
    this.addChild(path0);
  }
}
