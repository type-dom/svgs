import {SvgPath, TypeHtml, TypeSvgSvg} from "type-dom.ts";
export class AlignBottomSvg extends TypeSvgSvg {
  className: 'AlignBottomSvg';
  childNodes: [SvgPath];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'AlignBottomSvg';
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
      name: 'align-bottom-svg',
    });
    this.resetSize(24, 24);
    const path = new SvgPath(this);
    path.setData('M368.64 590.933333A21.333333 21.333333 0 0 1 384 554.666667h85.333333V149.333333a21.333333 21.333333 0 0 1 21.333334-21.333333h42.666666a21.333333 21.333333 0 0 1 21.333334 21.333333V554.666667h85.333333a21.333333 21.333333 0 0 1 14.933333 36.266666l-128 128a21.76 21.76 0 0 1-30.293333 0zM149.333333 896h725.333334a21.333333 21.333333 0 0 0 21.333333-21.333333v-42.666667a21.333333 21.333333 0 0 0-21.333333-21.333333h-725.333334a21.333333 21.333333 0 0 0-21.333333 21.333333v42.666667a21.333333 21.333333 0 0 0 21.333333 21.333333z');
    this.childNodes = [path];
  }
}
