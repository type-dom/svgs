import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdTableNewSvg extends TypeSvgSvg {
  className: 'TdTableNewSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdTableNewSvg';
    this.addAttrObj({
      name: 'TdTableNewSvg',
      title: 'TdTableNewSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M704 960a314.88 314.88 0 0 1-248.96-108.16 30.72 30.72 0 0 1 0-39.68A314.88 314.88 0 0 1 704 704a314.88 314.88 0 0 1 248.96 108.16 30.72 30.72 0 0 1 0 39.68A314.88 314.88 0 0 1 704 960z m-180.48-128A269.44 269.44 0 0 0 704 896a269.44 269.44 0 0 0 180.48-64A269.44 269.44 0 0 0 704 768a269.44 269.44 0 0 0-180.48 64z',
    );
    this.childNodes.push(path0);
    const path1 = new SvgPath(this);
    path1.setData(
      'M704 832m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z',
    );
    this.childNodes.push(path1);
    const path2 = new SvgPath(this);
    path2.setData(
      'M384 928H128a32 32 0 0 1-32-32V128a32 32 0 0 1 32-32h768a32 32 0 0 1 32 32v512a32 32 0 0 1-64 0V160h-704v704H384a32 32 0 0 1 0 64z',
    );
    this.childNodes.push(path2);
    const path3 = new SvgPath(this);
    path3.setData(
      'M896 416H128a32 32 0 0 1 0-64h768a32 32 0 0 1 0 64zM896 672H128a32 32 0 0 1 0-64h768a32 32 0 0 1 0 64z',
    );
    this.childNodes.push(path3);
    const path4 = new SvgPath(this);
    path4.setData(
      'M384 928a32 32 0 0 1-32-32V384a32 32 0 0 1 64 0v512a32 32 0 0 1-32 32zM640 672a32 32 0 0 1-32-32V384a32 32 0 0 1 64 0v256a32 32 0 0 1-32 32z',
    );
    this.childNodes.push(path4);
  }
}
