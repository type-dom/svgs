import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class TdUndoSvg extends TypeSvgSvg {
  className: 'TdUndoSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'TdUndoSvg';
    this.addAttrObj({
      name: 'TdUndoSvg',
      title: 'TdUndoSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M379.776 635.904c39.36 35.968 48.32 41.344 50.496-25.856 3.968-49.152 0-103.552 0-103.552 1.408-3.072 86.464-35.008 227.072 25.856 140.544 60.928 235.456 251.008 252.16 310.528 1.344 34.368 46.144 100.736 50.432-1.344 0.576-166.656-64.512-341.12-230.336-441.152C574.976 307.072 446.4 316.608 432.192 321.472c-0.256 1.344-0.64 1.856-1.344 1.024-0.192-0.256 0.384-0.64 1.344-1.024 1.216-6.208-2.496-38.272-2.88-98.56 2.368-54.144-12.096-55.808-49.536-26.944C311.168 252.288 128 427.264 128 427.264S311.168 580.608 379.776 635.904z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
