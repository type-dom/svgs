import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdSortSvg extends TypeSvgSvg {
  className: 'TdSortSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdSortSvg';
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M368 706.72l-64 64V576h-64v194.72l-64-64L130.72 752 272 893.28 413.28 752 368 706.72zM272 130.72L130.72 272 176 317.28l64-64V448h64V253.28l64 64L413.28 272 272 130.72zM480 192h416v64H480zM480 384h416v64H480zM480 576h416v64H480zM480 768h416v64H480z',
    );
    this.childNodes.push(path0);
  }
}
