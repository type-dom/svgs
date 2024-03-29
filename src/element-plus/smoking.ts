import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElSmokingSvg extends TypeSvgSvg {
  className: 'ElSmokingSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'ElSmokingSvg';
    this.addAttrObj({
      name: 'ElSmokingSvg',
      title: 'ElSmokingSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M256 576v128h640V576H256zm-32-64h704a32 32 0 0 1 32 32v192a32 32 0 0 1-32 32H224a32 32 0 0 1-32-32V544a32 32 0 0 1 32-32z',
    );
    this.childNodes.push(path0);
    const path1 = new SvgPath({ parent: this });
    path1.setData(
      'M704 576h64v128h-64zM256 64h64v320h-64zM128 192h64v192h-64zM64 512h64v256H64z',
    );
    this.childNodes.push(path1);
    this.setConfig(config);
  }
}
