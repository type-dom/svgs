import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class SwitchSvg extends TypeSvgSvg {
  className: 'SwitchSvg';
  childNodes: [SvgPath];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'SwitchSvg';
    this.addAttrObj({
      viewBox: '0 0 1536 1024',
      name: 'switch-svg',
    });
    this.resetSize(24, 24);
    const path = new SvgPath(this);
    path.setData('M1024 0a512 512 0 1 1 0 1024H512A512 512 0 1 1 512 0h512z',
      'm0 128H512a384 384 0 0 0-14.4 767.744L512 896h512a384 384 0 0 0 14.4-767.744L1024 128z',
      'M512 512m-320 0a320 320 0 1 0 640 0 320 320 0 1 0-640 0Z');
    this.childNodes = [path];
  }
}
