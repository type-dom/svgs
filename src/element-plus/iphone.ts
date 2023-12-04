import { SvgPath, TypeHtml, TypeSvgSvg } from '@type-dom/framework';
export class ElIphoneSvg extends TypeSvgSvg {
  className: 'ElIphoneSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'ElIphoneSvg';
    this.addAttrObj({
      name: 'ElIphoneSvg',
      title: 'ElIphoneSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M224 768v96.064a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64V768H224zm0-64h576V160a64 64 0 0 0-64-64H288a64 64 0 0 0-64 64v544zm32 288a96 96 0 0 1-96-96V128a96 96 0 0 1 96-96h512a96 96 0 0 1 96 96v768a96 96 0 0 1-96 96H256zm304-144a48 48 0 1 1-96 0 48 48 0 0 1 96 0z',
    );
    this.childNodes.push(path0);
  }
}
