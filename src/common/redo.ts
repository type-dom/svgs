import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class TdRedoSvg extends TypeSvgSvg {
  className: 'TdRedoSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'TdRedoSvg';
    this.addAttrObj({
      name: 'TdRedoSvg',
      title: 'TdRedoSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M708.16 635.904c-39.36 35.968-48.32 41.344-50.496-25.856-3.968-49.152 0-103.552 0-103.552-1.408-3.072-86.464-35.008-227.072 25.856C290.048 593.28 195.2 783.36 178.432 842.88 177.088 877.248 132.288 943.616 128 841.472c-0.576-166.656 64.512-341.12 230.336-441.152 154.624-93.248 283.264-83.776 297.408-78.848 0.256 1.344 0.64 1.856 1.344 1.024 0.192-0.256-0.384-0.64-1.344-1.024-1.216-6.208 2.496-38.272 2.88-98.56-2.368-54.144 12.096-55.808 49.536-26.944 68.544 56.32 251.776 231.36 251.776 231.36S776.768 580.608 708.16 635.904z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
