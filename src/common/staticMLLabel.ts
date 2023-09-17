import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdStaticMLLabelSvg extends TypeSvgSvg {
  className: 'TdStaticMLLabelSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdStaticMLLabelSvg';
    this.addAttrObj({
      name: 'staticMLLabel',
      title: 'staticMLLabel'
    });
    this.addAttrObj({
      viewBox: '0 0 1190 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M426.888782 956.230872V120.862886H60.431443A60.431443 60.431443 0 0 1 0 60.431443 60.431443 60.431443 0 0 1 60.431443 0h870.452908a60.431443 60.431443 0 0 1 60.431443 60.431443 60.431443 60.431443 0 0 1-60.431443 60.431443h-368.191575v835.367986a67.768594 67.768594 0 0 1-67.768594 67.768594 67.768594 67.768594 0 0 1-68.0354-67.768594zM1147.263602 927.549282H699.830797a48.558599 48.558599 0 0 0 0 96.450184H1147.263602a48.558599 48.558599 0 0 0 0-96.450184z',
    );
    this.childNodes.push(path0);
    const path1 = new SvgPath(this);
    path1.setData(
      'M1147.263602 667.013722H699.830797a48.425196 48.425196 0 0 0 0 96.316782H1147.263602A48.425196 48.425196 0 0 0 1147.263602 667.013722z',
    );
    this.childNodes.push(path1);
  }
}
