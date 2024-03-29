import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElShareSvg extends TypeSvgSvg {
  className: 'ElShareSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'ElShareSvg';
    this.addAttrObj({
      name: 'ElShareSvg',
      title: 'ElShareSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'm679.872 348.8-301.76 188.608a127.808 127.808 0 0 1 5.12 52.16l279.936 104.96a128 128 0 1 1-22.464 59.904l-279.872-104.96a128 128 0 1 1-16.64-166.272l301.696-188.608a128 128 0 1 1 33.92 54.272z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
