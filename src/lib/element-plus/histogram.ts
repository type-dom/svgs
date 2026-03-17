import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from '@type-dom/framework';
export class ElHistogramSvg extends TypeSvgSvg {
  className: 'ElHistogramSvg';
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = 'ElHistogramSvg';
   addAttrObj(this, {
      name: 'ElHistogramSvg'
    });
   addAttrObj(this, {
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M416 896V128h192v768H416zm-288 0V448h192v448H128zm576 0V320h192v576H704z',
    );
    this.addChild(path0);
  }
}
