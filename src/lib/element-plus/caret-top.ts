import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from '@type-dom/framework';
export class ElCaretTopSvg extends TypeSvgSvg {
  className: 'ElCaretTopSvg';
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = 'ElCaretTopSvg';
   addAttrObj(this, {
      name: 'ElCaretTopSvg'
    });
   addAttrObj(this, {
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M512 320 192 704h639.936z',
    );
    this.addChild(path0);
  }
}
