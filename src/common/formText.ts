import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdFormTextSvg extends TypeSvgSvg {
  className: 'TdFormTextSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdFormTextSvg';
    this.addAttrObj({
      name: 'formText',
      title: 'formText'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M716.8 800a31.36 31.36 0 0 1-29.44-19.84L512 342.4l-175.36 437.76a32 32 0 1 1-58.88-24.32l204.8-512a32.64 32.64 0 0 1 58.88 0l204.8 512a31.36 31.36 0 0 1-17.28 41.6 27.52 27.52 0 0 1-12.16 2.56z',
    );
    this.childNodes.push(path0);
    const path1 = new SvgPath(this);
    path1.setData(
      'M627.2 608H409.6a32 32 0 0 1 0-64h217.6a32 32 0 0 1 0 64z',
    );
    this.childNodes.push(path1);
    const path2 = new SvgPath(this);
    path2.setData(
      'M928 960h-832a32 32 0 0 1-32-32v-832a32 32 0 0 1 32-32h832a32 32 0 0 1 32 32v832a32 32 0 0 1-32 32zM128 896h768V128H128z',
    );
    this.childNodes.push(path2);
  }
}
