import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdAPlusSvg extends TypeSvgSvg {
  className: 'TdAPlusSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdAPlusSvg';
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M631.1 266.9h152.2v41H631.1zM824.3 266.9h152.2v41H824.3zM783.3 307.8h41V460h-41zM783.3 114.6h41v152.2h-41z',
    );
    this.childNodes.push(path0);
    const path1 = new SvgPath(this);
    path1.setData(
      'M783.3 266.9h41v41h-41zM368.5 150.5L57.2 855.2h73.2l101.3-236.8h346.7l98.9 236.8h78.1L444.2 150.5h-75.7zM559 572H251.3l54.9-127.6c35.4-82.2 65.9-156.6 96.4-241.7h4.9c31.7 85.1 61 159.5 97.7 241.7L559 572z',
    );
    this.childNodes.push(path1);
  }
}
