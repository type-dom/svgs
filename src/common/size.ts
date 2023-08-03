import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdSizeSvg extends TypeSvgSvg {
  className: 'TdSizeSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdSizeSvg';
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M0 54.857h54.796v18.286H36.531V128H18.265V73.143H0V54.857zm127.857-36.571H91.935V128H72.456V18.286H36.534V0h91.326l-.003 18.286z',
    );
    this.childNodes.push(path0);
  }
}
