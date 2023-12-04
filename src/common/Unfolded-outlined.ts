import { SvgPath, TypeHtml, TypeSvgSvg } from '@type-dom/framework';
export class TdUnfoldedOutlinedSvg extends TypeSvgSvg {
  className: 'TdUnfoldedOutlinedSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdUnfoldedOutlinedSvg';
    this.addAttrObj({
      name: 'TdUnfoldedOutlinedSvg',
      title: 'TdUnfoldedOutlinedSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M848 128A48 48 0 0 1 896 176v672a48 48 0 0 1-48 48h-672A48 48 0 0 1 128 848v-672A48 48 0 0 1 176 128h672zM832 192H192v640h640V192zM512 288a32 32 0 0 1 32 32v160h160a32 32 0 0 1 0 64h-160v160a32 32 0 0 1-64 0v-160h-160a32 32 0 0 1 0-64h160v-160a32 32 0 0 1 32-32z',
    );
    this.childNodes.push(path0);
  }
}
