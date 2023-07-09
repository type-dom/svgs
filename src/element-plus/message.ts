import {SvgPath, TypeHtml, TypeSvgSvg} from "type-dom.ts";
export class MessageSvg extends TypeSvgSvg {
  className: 'MessageSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'MessageSvg';
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData("M128 224v512a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V224H128zm0-64h768a64 64 0 0 1 64 64v512a128 128 0 0 1-128 128H192A128 128 0 0 1 64 736V224a64 64 0 0 1 64-64z");
    this.childNodes.push(path0);
    const path1 = new SvgPath(this);
    path1.setData("M904 224 656.512 506.88a192 192 0 0 1-289.024 0L120 224h784zm-698.944 0 210.56 240.704a128 128 0 0 0 192.704 0L818.944 224H205.056z");
    this.childNodes.push(path1);
  }
}
