import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class ElUnlockSvg extends TypeSvgSvg {
  className: 'ElUnlockSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'ElUnlockSvg';
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M224 448a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32h576a32 32 0 0 0 32-32V480a32 32 0 0 0-32-32H224zm0-64h576a96 96 0 0 1 96 96v384a96 96 0 0 1-96 96H224a96 96 0 0 1-96-96V480a96 96 0 0 1 96-96z',
    );
    this.childNodes.push(path0);
    const path1 = new SvgPath(this);
    path1.setData(
      'M512 544a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V576a32 32 0 0 1 32-32zm178.304-295.296A192.064 192.064 0 0 0 320 320v64h352l96 38.4V448H256V320a256 256 0 0 1 493.76-95.104l-59.456 23.808z',
    );
    this.childNodes.push(path1);
  }
}
