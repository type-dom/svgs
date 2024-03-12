import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElCollectionTagSvg extends TypeSvgSvg {
  className: 'ElCollectionTagSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'ElCollectionTagSvg';
    this.addAttrObj({
      name: 'ElCollectionTagSvg',
      title: 'ElCollectionTagSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M256 128v698.88l196.032-156.864a96 96 0 0 1 119.936 0L768 826.816V128H256zm-32-64h576a32 32 0 0 1 32 32v797.44a32 32 0 0 1-51.968 24.96L531.968 720a32 32 0 0 0-39.936 0L243.968 918.4A32 32 0 0 1 192 893.44V96a32 32 0 0 1 32-32z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
