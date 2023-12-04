import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class ElNoSmokingSvg extends TypeSvgSvg {
  className: 'ElNoSmokingSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'ElNoSmokingSvg';
    this.addAttrObj({
      name: 'ElNoSmokingSvg',
      title: 'ElNoSmokingSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M440.256 576H256v128h56.256l-64 64H224a32 32 0 0 1-32-32V544a32 32 0 0 1 32-32h280.256l-64 64zm143.488 128H704V583.744L775.744 512H928a32 32 0 0 1 32 32v192a32 32 0 0 1-32 32H519.744l64-64zM768 576v128h128V576H768zm-29.696-207.552 45.248 45.248-497.856 497.856-45.248-45.248zM256 64h64v320h-64zM128 192h64v192h-64zM64 512h64v256H64z',
    );
    this.childNodes.push(path0);
  }
}
