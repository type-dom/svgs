import {SvgPath, TypeHtml, TypeSvgSvg} from "type-dom.ts";
export class AlignTopSvg extends TypeSvgSvg {
  className: 'AlignTopSvg';
  childNodes: [SvgPath];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'AlignTopSvg';
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
      name: 'align-left-svg',
    });
    this.resetSize(24, 24);
    const path = new SvgPath(this);
    path.setData('M655.36 433.066667A21.333333 21.333333 0 0 1 640 469.333333h-85.333333v405.333334a21.333333 21.333333 0 0 1-21.333334 21.333333h-42.666666a21.333333 21.333333 0 0 1-21.333334-21.333333V469.333333H384a21.333333 21.333333 0 0 1-14.933333-36.266666l128-128a21.76 21.76 0 0 1 30.293333 0zM874.666667 128h-725.333334a21.333333 21.333333 0 0 0-21.333333 21.333333v42.666667a21.333333 21.333333 0 0 0 21.333333 21.333333h725.333334a21.333333 21.333333 0 0 0 21.333333-21.333333v-42.666667a21.333333 21.333333 0 0 0-21.333333-21.333333z');
    this.childNodes = [path];
  }
}
