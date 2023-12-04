import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class ElIceCreamSvg extends TypeSvgSvg {
  className: 'ElIceCreamSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'ElIceCreamSvg';
    this.addAttrObj({
      name: 'ElIceCreamSvg',
      title: 'ElIceCreamSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M128.64 448a208 208 0 0 1 193.536-191.552 224 224 0 0 1 445.248 15.488A208.128 208.128 0 0 1 894.784 448H896L548.8 983.68a32 32 0 0 1-53.248.704L128 448h.64zm64.256 0h286.208a144 144 0 0 0-286.208 0zm351.36 0h286.272a144 144 0 0 0-286.272 0zm-294.848 64 271.808 396.608L778.24 512H249.408zM511.68 352.64a207.872 207.872 0 0 1 189.184-96.192 160 160 0 0 0-314.752 5.632c52.608 12.992 97.28 46.08 125.568 90.56z',
    );
    this.childNodes.push(path0);
  }
}
