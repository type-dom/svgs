import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdMultipleOptionsSvg extends TypeSvgSvg {
  className: 'TdMultipleOptionsSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdMultipleOptionsSvg';
    this.addAttrObj({
      viewBox: '0 0 1026 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M853.276444 1009.436444l-853.333333 0 0-853.333333 853.333333 0L853.276444 1009.436444zM56.832 952.547556l739.555556 0 0-739.555556-739.555556 0L56.832 952.547556z',
    );
    this.childNodes.push(path0);
    const path1 = new SvgPath(this);
    path1.setData(
      'M317.553778 563.825778 243.370667 628.963556 500.110222 919.381333 998.001778 409.884444 936.96 350.094222 501.248 785.464889Z',
    );
    this.childNodes.push(path1);
  }
}
