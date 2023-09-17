import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdAMinusSvg extends TypeSvgSvg {
  className: 'TdAMinusSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdAMinusSvg';
    this.addAttrObj({
      name: 'A-',
      title: 'A-'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M631.1 266.9h345.4v41H631.1zM368.5 150.5L57.2 855.2h73.2l101.3-236.8h346.7l98.9 236.8h78.1L444.2 150.5h-75.7zM559 572H251.3l54.9-127.6c35.4-82.2 65.9-156.6 96.4-241.7h4.9c31.7 85.1 61 159.5 97.7 241.7L559 572z',
    );
    this.childNodes.push(path0);
  }
}
