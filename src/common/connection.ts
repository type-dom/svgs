import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class TdConnectionSvg extends TypeSvgSvg {
  className: 'TdConnectionSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'TdConnectionSvg';
    this.addAttrObj({
      name: 'TdConnectionSvg',
      title: 'TdConnectionSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M192.037 576.046h64.013v63.919H128.025V128.031l576.112-0.041v511.975H512.099v-63.919h128.025V191.784h-448.34z',
    );
    this.childNodes.push(path0);
    const path1 = new SvgPath({ parent: this });
    path1.setData(
      'M768.149 383.79v64.419h64.013v383.512H384.075V448.209h128.024V383.79H320.062v511.849h576.112V383.79z',
    );
    this.childNodes.push(path1);
    this.setConfig(config);
  }
}
