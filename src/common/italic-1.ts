import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdItalic1Svg extends TypeSvgSvg {
  className: 'TdItalic1Svg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdItalic1Svg';
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData('2178');
    this.childNodes.push(path0);
    const path1 = new SvgPath(this);
    path1.setData('M460.8 798.72l153.6-573.44h81.92v-40.96h-204.8v40.96h79.872l-153.6 573.44h-90.112v40.96h204.8v-40.96h-71.68z');
    this.childNodes.push(path1);
    const path2 = new SvgPath(this);
    path2.setData('2179');
    this.childNodes.push(path2);
  }
}
