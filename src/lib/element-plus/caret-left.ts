import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from '@type-dom/framework';
export class ElCaretLeftSvg extends TypeSvgSvg {
  className: 'ElCaretLeftSvg';
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = 'ElCaretLeftSvg';
   addAttrObj(this, {
      name: 'ElCaretLeftSvg'
    });
   addAttrObj(this, {
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M672 192 288 511.936 672 832z',
    );
    this.addChild(path0);
  }
}
