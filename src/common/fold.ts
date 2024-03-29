import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class TdFoldSvg extends TypeSvgSvg {
  className: 'TdFoldSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'TdFoldSvg';
    this.addAttrObj({
      name: 'TdFoldSvg',
      title: 'TdFoldSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M815.2 911.696H210.8c-55.408 0-100.704-45.296-100.704-100.704v-604.48c0-55.408 45.312-100.72 100.704-100.72h604.496c55.408 0 100.704 45.312 100.704 100.704v604.512c0 55.296-45.296 100.688-100.8 100.688z m-604.4-755.6c-30.208 0-50.4 20.096-50.4 50.4v604.512c0 30.192 20.096 50.4 50.4 50.4h604.496c30.208 0 50.4-20.112 50.4-50.4V206.496c0-30.192-20.096-50.4-50.4-50.4H210.8zM714.496 533.92H311.52c-15.104 0-25.2-10.112-25.2-25.2 0-15.104 10.096-25.2 25.2-25.2h402.992c15.104 0 25.2 10.096 25.2 25.2 0 15.088-10.096 25.2-25.2 25.2z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
