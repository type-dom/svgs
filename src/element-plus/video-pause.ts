import { SvgPath, TypeHtml, TypeSvgSvg } from '@type-dom/framework';
export class ElVideoPauseSvg extends TypeSvgSvg {
  className: 'ElVideoPauseSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'ElVideoPauseSvg';
    this.addAttrObj({
      name: 'ElVideoPauseSvg',
      title: 'ElVideoPauseSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm-96-544q32 0 32 32v256q0 32-32 32t-32-32V384q0-32 32-32zm192 0q32 0 32 32v256q0 32-32 32t-32-32V384q0-32 32-32z',
    );
    this.childNodes.push(path0);
  }
}
