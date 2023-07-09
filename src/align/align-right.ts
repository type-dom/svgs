import {SvgPath, TypeHtml, TypeSvgSvg} from "type-dom.ts";
export class AlignRightSvg extends TypeSvgSvg {
  className: 'AlignRightSvg';
  childNodes: [SvgPath];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'AlignRightSvg';
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
      name: 'align-right-svg',
    });
    this.resetSize(24, 24);
    const path = new SvgPath(this);
    path.setData('M162.304 186.88H865.28v63.488H162.304zM330.752 376.832H865.28V440.32H330.752zM162.304 567.296H865.28v63.488H162.304zM330.752 757.248H865.28v63.488H330.752z');
    this.childNodes = [path];
  }
}
