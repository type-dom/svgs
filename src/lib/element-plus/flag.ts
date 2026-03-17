import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from '@type-dom/framework';
export class ElFlagSvg extends TypeSvgSvg {
  className: 'ElFlagSvg';
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = 'ElFlagSvg';
   addAttrObj(this, {
      name: 'ElFlagSvg'
    });
   addAttrObj(this, {
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M288 128h608L736 384l160 256H288v320h-96V64h96v64z',
    );
    this.addChild(path0);
  }
}
