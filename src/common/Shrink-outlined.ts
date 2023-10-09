import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdShrinkOutlinedSvg extends TypeSvgSvg {
  className: 'TdShrinkOutlinedSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdShrinkOutlinedSvg';
    this.addAttrObj({
      name: 'TdShrinkOutlinedSvg',
      title: 'TdShrinkOutlinedSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M848 128A48 48 0 0 1 896 176v672a48 48 0 0 1-48 48h-672A48 48 0 0 1 128 848v-672A48 48 0 0 1 176 128h672zM832 192H192v640h640V192z m-128 288a32 32 0 0 1 0 64H320a32 32 0 0 1 0-64h384z',
    );
    this.childNodes.push(path0);
  }
}
