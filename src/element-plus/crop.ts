import { SvgPath, TypeHtml, TypeSvgSvg } from '@type-dom/framework';
export class ElCropSvg extends TypeSvgSvg {
  className: 'ElCropSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'ElCropSvg';
    this.addAttrObj({
      name: 'ElCropSvg',
      title: 'ElCropSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M256 768h672a32 32 0 1 1 0 64H224a32 32 0 0 1-32-32V96a32 32 0 0 1 64 0v672z',
    );
    this.childNodes.push(path0);
    const path1 = new SvgPath(this);
    path1.setData(
      'M832 224v704a32 32 0 1 1-64 0V256H96a32 32 0 0 1 0-64h704a32 32 0 0 1 32 32z',
    );
    this.childNodes.push(path1);
  }
}
