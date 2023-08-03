import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class ElUserFilledSvg extends TypeSvgSvg {
  className: 'ElUserFilledSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'ElUserFilledSvg';
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M288 320a224 224 0 1 0 448 0 224 224 0 1 0-448 0zm544 608H160a32 32 0 0 1-32-32v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 0 1-32 32z',
    );
    this.childNodes.push(path0);
  }
}
