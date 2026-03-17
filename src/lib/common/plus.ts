import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from '@type-dom/framework';
export class TdPlusSvg extends TypeSvgSvg {
  className: 'TdPlusSvg';
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = 'TdPlusSvg';
    addAttrObj(this, {
      name: 'TdPlusSvg'
    });
    addAttrObj(this, {
      viewBox: '0 0 16 16',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M7 7V3h2v4h4v2H9v4H7V9H3V7h4z',
    );
    this.addChild(path0);
  }
}
