import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdDropdownBoxSvg extends TypeSvgSvg {
  className: 'TdDropdownBoxSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdDropdownBoxSvg';
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M946.986 372.374L558.08 797.651a61.202 61.202 0 0 1-45.972 20.801 61.202 61.202 0 0 1-45.976-20.801L77.226 372.374c-18.985-20.052-24.852-49.279-15.04-75.093s33.493-43.84 61.014-46.292h777.494c27.627 2.347 51.412 20.265 61.226 46.187 9.92 25.92 4.054 55.038-14.934 75.198z',
    );
    this.childNodes.push(path0);
  }
}
