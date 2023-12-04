import { SvgPath, TypeHtml, TypeSvgSvg } from '@type-dom/framework';
export class TdAlignJustifiedSvg extends TypeSvgSvg {
  className: 'TdAlignJustifiedSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdAlignJustifiedSvg';
    this.addAttrObj({
      name: 'TdAlignJustifiedSvg',
      title: 'TdAlignJustifiedSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M864 160h-704a32 32 0 0 1 0-64h704a32 32 0 0 1 0 64zM864 672h-704a32 32 0 0 1 0-64h704a32 32 0 0 1 0 64zM864 928h-704a32 32 0 0 1 0-64h704a32 32 0 0 1 0 64zM864 416h-704a32 32 0 0 1 0-64h704a32 32 0 0 1 0 64z',
    );
    this.childNodes.push(path0);
  }
}
