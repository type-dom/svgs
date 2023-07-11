import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdFontColorSvg extends TypeSvgSvg {
  className: 'TdFontColorSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdFontColorSvg';
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData('M470.975 137l-214.462 562.5h102l44.513-131.25h217.949l48.038 131.25h102.002l-214.501-562.5h-85.5zM512 256.55l78.525 233.175h-160.538l82.013-233.212zM212 774.5v112.5h599.999v-112.5h-599.999z');
    this.childNodes.push(path0);
  }
}