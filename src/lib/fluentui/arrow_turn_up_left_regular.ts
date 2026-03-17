import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from '@type-dom/framework';
export class FlArrowTurnUpLeftRegularSvg extends TypeSvgSvg {
  className: 'FlArrowTurnUpLeftRegularSvg';
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = 'FlArrowTurnUpLeftRegularSvg';
   addAttrObj(this, {
      name: 'FlArrowTurnUpLeftRegularSvg'
    });
   addAttrObj(this, {
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M8.85355 3.14645C8.65829 2.95118 8.34171 2.95118 8.14645 3.14645L4.14645 7.14645C3.95118 7.34171 3.95118 7.65829 4.14645 7.85355L8.14645 11.8536C8.34171 12.0488 8.65829 12.0488 8.85355 11.8536C9.04882 11.6583 9.04882 11.3417 8.85355 11.1464L5.70711 8H12C13.1046 8 14 8.89543 14 10V16.5C14 16.7761 14.2239 17 14.5 17C14.7761 17 15 16.7761 15 16.5V10C15 8.34315 13.6569 7 12 7H5.70711L8.85355 3.85355C9.04882 3.65829 9.04882 3.34171 8.85355 3.14645Z',
    );
    this.addChild(path0);
  }
}
