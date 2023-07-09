import {SvgPath, TypeHtml, TypeSvgSvg} from "type-dom.ts";
export class AlignLeftSvg extends TypeSvgSvg {
  className: 'AlignLeftSvg';
  childNodes: [SvgPath];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'AlignLeftSvg';
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
      name: 'align-left-svg',
    });
    this.resetSize(24, 24);
    const path = new SvgPath(this);
    path.setData('M162.304 186.88H865.28v63.488H162.304zM162.304 376.832h534.528V440.32H162.304zM162.304 567.296H865.28v63.488H162.304zM162.304 757.248h534.528v63.488H162.304z');
    this.childNodes = [path];
  }
}
