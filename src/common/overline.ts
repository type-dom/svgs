import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdOverlineSvg extends TypeSvgSvg {
  className: 'TdOverlineSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdOverlineSvg';
    this.addAttrObj({
      name: 'overline',
      title: 'overline'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M928 0H96A32 32 0 0 0 64 32v32a32 32 0 0 0 32 32h832a32 32 0 0 0 32-32V32a32 32 0 0 0-32-32zM512 192A352 352 0 0 0 160 544v128a352 352 0 0 0 704 0v-128A352 352 0 0 0 512 192z m224 480a224 224 0 0 1-448 0v-128a224 224 0 0 1 448 0z',
    );
    this.childNodes.push(path0);
  }
}
