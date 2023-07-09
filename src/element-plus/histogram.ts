import {SvgPath, TypeHtml, TypeSvgSvg} from "type-dom.ts";
export class HistogramSvg extends TypeSvgSvg {
  className: 'HistogramSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'HistogramSvg';
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData("M416 896V128h192v768H416zm-288 0V448h192v448H128zm576 0V320h192v576H704z");
    this.childNodes.push(path0);
  }
}
