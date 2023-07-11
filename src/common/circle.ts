import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdCircleSvg extends TypeSvgSvg {
  className: 'TdCircleSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdCircleSvg';
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData('M62 512c0 248.528 201.472 450 450 450s450-201.472 450-450c0-248.528-201.472-450-450-450-248.528 0-450 201.472-450 450z');
    this.childNodes.push(path0);
  }
}