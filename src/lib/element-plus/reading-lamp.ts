import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from '@type-dom/framework';
export class ElReadingLampSvg extends TypeSvgSvg {
  className: 'ElReadingLampSvg';
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = 'ElReadingLampSvg';
   addAttrObj(this, {
      name: 'ElReadingLampSvg'
    });
   addAttrObj(this, {
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M352 896h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32zm-44.672-768-99.52 448h608.384l-99.52-448H307.328zm-25.6-64h460.608a32 32 0 0 1 31.232 25.088l113.792 512A32 32 0 0 1 856.128 640H167.872a32 32 0 0 1-31.232-38.912l113.792-512A32 32 0 0 1 281.664 64z',
    );
    this.addChild(path0);
    const path1 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path1.setData(
      'M672 576q32 0 32 32v128q0 32-32 32t-32-32V608q0-32 32-32zm-192-.064h64V960h-64z',
    );
    this.addChild(path1);
  }
}
