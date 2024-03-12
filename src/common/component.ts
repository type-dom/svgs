import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class TdComponentSvg extends TypeSvgSvg {
  className: 'TdComponentSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'TdComponentSvg';
    this.addAttrObj({
      name: 'TdComponentSvg',
      title: 'TdComponentSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 128 128',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M0 0h54.857v54.857H0V0zm0 73.143h54.857V128H0V73.143zm73.143 0H128V128H73.143V73.143zm27.428-18.286C115.72 54.857 128 42.577 128 27.43 128 12.28 115.72 0 100.571 0 85.423 0 73.143 12.28 73.143 27.429c0 15.148 12.28 27.428 27.428 27.428z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
