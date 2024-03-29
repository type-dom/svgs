import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class TdTabSvg extends TypeSvgSvg {
  className: 'TdTabSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'TdTabSvg';
    this.addAttrObj({
      name: 'TdTabSvg',
      title: 'TdTabSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 128 128',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M78.921.052H49.08c-1.865 0-3.198 1.599-3.198 3.464v6.661c0 1.865 1.6 3.464 3.198 3.464h29.84c1.865 0 3.198-1.599 3.198-3.464V3.516C82.385 1.65 80.786.052 78.92.052zm45.563 0H94.642c-1.865 0-3.464 1.599-3.464 3.464v6.661c0 1.865 1.599 3.464 3.464 3.464h29.842c1.865-.266 3.464-1.599 3.464-3.464V3.516c0-1.865-1.599-3.464-3.464-3.464zm0 22.382H40.02c-1.866 0-3.464-1.599-3.464-3.464V3.516c0-1.865-1.599-3.464-3.464-3.464H3.516C1.65.052.052 1.651.052 3.516V124.75c0 1.598 1.599 3.197 3.464 3.197h120.968c1.865 0 3.464-1.599 3.464-3.464V25.898c0-1.865-1.599-3.464-3.464-3.464z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
