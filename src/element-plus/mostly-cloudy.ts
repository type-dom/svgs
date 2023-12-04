import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class ElMostlyCloudySvg extends TypeSvgSvg {
  className: 'ElMostlyCloudySvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'ElMostlyCloudySvg';
    this.addAttrObj({
      name: 'ElMostlyCloudySvg',
      title: 'ElMostlyCloudySvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M737.216 357.952 704 349.824l-11.776-32a192.064 192.064 0 0 0-367.424 23.04l-8.96 39.04-39.04 8.96A192.064 192.064 0 0 0 320 768h368a207.808 207.808 0 0 0 207.808-208 208.32 208.32 0 0 0-158.592-202.048zm15.168-62.208A272.32 272.32 0 0 1 959.744 560a271.808 271.808 0 0 1-271.552 272H320a256 256 0 0 1-57.536-505.536 256.128 256.128 0 0 1 489.92-30.72z',
    );
    this.childNodes.push(path0);
  }
}
