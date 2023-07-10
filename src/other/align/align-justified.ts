import {SvgPath, TypeHtml, TypeSvgSvg} from "type-dom.ts";

export class AlignJustifiedSvg extends TypeSvgSvg {
  className: 'AlignJustifiedSvg';
  childNodes: [SvgPath];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'AlignJustifiedSvg';
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
      name: 'align-justified-svg',
    });
    this.resetSize(24, 24);
    const path = new SvgPath(this);
    path.setData('M864 160h-704a32 32 0 0 1 0-64h704a32 32 0 0 1 0 64zM864 672h-704a32 32 0 0 1 0-64h704a32 32 0 0 1 0 64zM864 928h-704a32 32 0 0 1 0-64h704a32 32 0 0 1 0 64zM864 416h-704a32 32 0 0 1 0-64h704a32 32 0 0 1 0 64z');
    this.childNodes = [path];
  }
}
