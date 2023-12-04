import { SvgPath, TypeHtml, TypeSvgSvg } from '@type-dom/framework';
export class ElArrowRightSvg extends TypeSvgSvg {
  className: 'ElArrowRightSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'ElArrowRightSvg';
    this.addAttrObj({
      name: 'ElArrowRightSvg',
      title: 'ElArrowRightSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z',
    );
    this.childNodes.push(path0);
  }
}
