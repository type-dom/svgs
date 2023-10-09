import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class ElArrowDownSvg extends TypeSvgSvg {
  className: 'ElArrowDownSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'ElArrowDownSvg';
    this.addAttrObj({
      name: 'ElArrowDownSvg',
      title: 'ElArrowDownSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z',
    );
    this.childNodes.push(path0);
  }
}
