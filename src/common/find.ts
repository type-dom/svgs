import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdFindSvg extends TypeSvgSvg {
  className: 'TdFindSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdFindSvg';
    this.addAttrObj({
      name: 'TdFindSvg',
      title: 'TdFindSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1165 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M1107.30913719 909.45959375l-186.86323313-145.37686875a479.97811781 479.97811781 0 1 0-69.42107062 87.6783975q13.80107531-13.80107531 26.30518125-28.51668l185.08405875 143.96350594a36.58116281 36.58116281 0 1 0 44.89506375-57.73172719z m-594.79308657 9.37807969c-223.66055812 0-405.63521719-181.95803156-405.63521718-405.63521719S288.80560906 107.56723906 512.46616719 107.56723906 918.10138437 289.59178156 918.10138437 513.20245625 736.14335281 918.83767344 512.46616719 918.83767344z',
    );
    this.childNodes.push(path0);
  }
}
