import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdAlignLeftSvg extends TypeSvgSvg {
  className: 'TdAlignLeftSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdAlignLeftSvg';
    this.addAttrObj({
      name: 'TdAlignLeftSvg',
      title: 'TdAlignLeftSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M162.304 186.88H865.28v63.488H162.304zM162.304 376.832h534.528V440.32H162.304zM162.304 567.296H865.28v63.488H162.304zM162.304 757.248h534.528v63.488H162.304z',
    );
    this.childNodes.push(path0);
  }
}
