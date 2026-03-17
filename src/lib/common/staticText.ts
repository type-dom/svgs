import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from '@type-dom/framework';
export class TdStaticTextSvg extends TypeSvgSvg {
  className: 'TdStaticTextSvg';
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = 'TdStaticTextSvg';
    addAttrObj(this, {
      name: 'TdStaticTextSvg'
    });
    addAttrObj(this, {
      viewBox: '0 0 1190 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M426.888782 956.230872V120.862886H60.431443A60.431443 60.431443 0 0 1 0 60.431443 60.431443 60.431443 0 0 1 60.431443 0h870.452908a60.431443 60.431443 0 0 1 60.431443 60.431443 60.431443 60.431443 0 0 1-60.431443 60.431443h-368.191575v835.367986a67.768594 67.768594 0 0 1-67.768594 67.768594 67.768594 67.768594 0 0 1-68.0354-67.768594zM1147.263602 927.549282H699.830797a48.558599 48.558599 0 0 0 0 96.450184H1147.263602a48.558599 48.558599 0 0 0 0-96.450184z',
    );
    this.addChild(path0);
    const path1 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path1.setData(
      'M1147.263602 667.013722H699.830797a48.425196 48.425196 0 0 0 0 96.316782H1147.263602A48.425196 48.425196 0 0 0 1147.263602 667.013722z',
    );
    this.addChild(path1);
  }
}
