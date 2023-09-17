import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdCloseSvg extends TypeSvgSvg {
  className: 'TdCloseSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdCloseSvg';
    this.addAttrObj({
      name: 'close',
      title: 'close'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M282.517333 213.376l-45.354666 45.162667L489.472 512 237.162667 765.461333l45.354666 45.162667L534.613333 557.354667l252.096 253.269333 45.354667-45.162667-252.288-253.44 252.288-253.482666-45.354667-45.162667L534.613333 466.624l-252.096-253.226667z',
    );
    this.childNodes.push(path0);
  }
}
