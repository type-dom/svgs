import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElSwitchButtonSvg extends TypeSvgSvg {
  className: 'ElSwitchButtonSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'ElSwitchButtonSvg';
    this.attr.addObj({
      name: 'ElSwitchButtonSvg',
      title: 'ElSwitchButtonSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M352 159.872V230.4a352 352 0 1 0 320 0v-70.528A416.128 416.128 0 0 1 512 960a416 416 0 0 1-160-800.128z',
    );
    this.addChild(path0);
    const path1 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path1.setData(
      'M512 64q32 0 32 32v320q0 32-32 32t-32-32V96q0-32 32-32z',
    );
    this.addChild(path1);
    this.useParams(params);
  }
}
