import { SvgPath, TypeHtml, TypeSvgSvg } from '@type-dom/framework';
export class TdSplitCellSvg extends TypeSvgSvg {
  className: 'TdSplitCellSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdSplitCellSvg';
    this.addAttrObj({
      name: 'TdSplitCellSvg',
      title: 'TdSplitCellSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M576 0h384c35.34336 0 64 28.65664 64 64v896s-28.65664 64-64 64h-384v-64h384v-896h-384.15872M320 448h128v128h-128v128L128 512l192-192v128z m257.92-384H64v896h514.13504l-0.85504 64H64C28.65664 1024 0 995.34336 0 960v-896S28.65664 0 64 0h516.16256M896 512l-192 192v-128h-128v-128h128v-128L896 512z',
    );
    this.childNodes.push(path0);
  }
}
