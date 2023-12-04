import { SvgPath, TypeHtml, TypeSvgSvg } from '@type-dom/framework';
export class ElArrowUpSvg extends TypeSvgSvg {
  className: 'ElArrowUpSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'ElArrowUpSvg';
    this.addAttrObj({
      name: 'ElArrowUpSvg',
      title: 'ElArrowUpSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'm488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z',
    );
    this.childNodes.push(path0);
  }
}
