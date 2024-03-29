import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class TdTimeSvg extends TypeSvgSvg {
  className: 'TdTimeSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'TdTimeSvg';
    this.addAttrObj({
      name: 'TdTimeSvg',
      title: 'TdTimeSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M512 64c-256 0-460.8 208-460.8 460.8s208 460.8 460.8 460.8 460.8-208 460.8-460.8S768 64 512 64zM512 940.8c-227.2 0-412.8-185.6-412.8-412.8s185.6-412.8 412.8-412.8 412.8 185.6 412.8 412.8S742.4 940.8 512 940.8z',
    );
    this.childNodes.push(path0);
    const path1 = new SvgPath({ parent: this });
    path1.setData(
      'M809.6 544l-278.4 0 0-281.6c0-12.8-9.6-22.4-22.4-22.4-12.8 0-22.4 9.6-22.4 22.4l0 307.2c0 12.8 9.6 22.4 22.4 22.4 0 0 3.2 0 3.2 0l297.6 0c12.8 0 22.4-9.6 22.4-22.4C832 553.6 822.4 544 809.6 544z',
    );
    this.childNodes.push(path1);
    this.setConfig(config);
  }
}
