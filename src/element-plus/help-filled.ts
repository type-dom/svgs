import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElHelpFilledSvg extends TypeSvgSvg {
  className: 'ElHelpFilledSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'ElHelpFilledSvg';
    this.addAttrObj({
      name: 'ElHelpFilledSvg',
      title: 'ElHelpFilledSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M926.784 480H701.312A192.512 192.512 0 0 0 544 322.688V97.216A416.064 416.064 0 0 1 926.784 480zm0 64A416.064 416.064 0 0 1 544 926.784V701.312A192.512 192.512 0 0 0 701.312 544h225.472zM97.28 544h225.472A192.512 192.512 0 0 0 480 701.312v225.472A416.064 416.064 0 0 1 97.216 544zm0-64A416.064 416.064 0 0 1 480 97.216v225.472A192.512 192.512 0 0 0 322.688 480H97.216z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
