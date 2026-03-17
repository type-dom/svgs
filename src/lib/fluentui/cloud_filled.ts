import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from '@type-dom/framework';
export class FlCloudFilledSvg extends TypeSvgSvg {
  className: 'FlCloudFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = 'FlCloudFilledSvg';
   addAttrObj(this, {
      name: 'FlCloudFilledSvg'
    });
   addAttrObj(this, {
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M10 4C12.8166 4 14.4145 5.92329 14.6469 8.24599L14.7179 8.24599C16.5306 8.24599 18 9.75792 18 11.623C18 13.4881 16.5306 15 14.7179 15H5.28205C3.46942 15 2 13.4881 2 11.623C2 9.75792 3.46942 8.24599 5.28207 8.24599L5.35314 8.24599C5.58687 5.90802 7.18335 4 10 4Z',
    );
    this.addChild(path0);
  }
}
