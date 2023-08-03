import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class ElPresentSvg extends TypeSvgSvg {
  className: 'ElPresentSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'ElPresentSvg';
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M480 896V640H192v-64h288V320H192v576h288zm64 0h288V320H544v256h288v64H544v256zM128 256h768v672a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V256z',
    );
    this.childNodes.push(path0);
    const path1 = new SvgPath(this);
    path1.setData(
      'M96 256h832q32 0 32 32t-32 32H96q-32 0-32-32t32-32z',
    );
    this.childNodes.push(path1);
    const path2 = new SvgPath(this);
    path2.setData(
      'M416 256a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z',
    );
    this.childNodes.push(path2);
    const path3 = new SvgPath(this);
    path3.setData(
      'M608 256a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z',
    );
    this.childNodes.push(path3);
  }
}
