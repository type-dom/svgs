import { SvgPath, TypeHtml, TypeSvgSvg } from '@type-dom/framework';
export class TdBookmarkListSvg extends TypeSvgSvg {
  className: 'TdBookmarkListSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdBookmarkListSvg';
    this.addAttrObj({
      name: 'TdBookmarkListSvg',
      title: 'TdBookmarkListSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M896 0a42.666667 42.666667 0 0 1 42.666667 42.666667v938.666666a42.666667 42.666667 0 0 1-42.666667 42.666667H128a42.666667 42.666667 0 0 1-42.666667-42.666667V42.666667a42.666667 42.666667 0 0 1 42.666667-42.666667h768z m-42.666667 85.333333h-85.333333v426.666667l-128-85.333333-128 85.333333V85.333333H170.666667v853.333334h682.666666V85.333333z m-170.666666 0h-85.333334v267.178667l42.666667-28.416 42.666667 28.416V85.333333z',
    );
    this.childNodes.push(path0);
  }
}
