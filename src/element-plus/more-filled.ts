import { SvgPath, TypeHtml, TypeSvgSvg } from '@type-dom/framework';
export class ElMoreFilledSvg extends TypeSvgSvg {
  className: 'ElMoreFilledSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'ElMoreFilledSvg';
    this.addAttrObj({
      name: 'ElMoreFilledSvg',
      title: 'ElMoreFilledSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M176 416a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224z',
    );
    this.childNodes.push(path0);
  }
}
