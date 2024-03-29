import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElTakeawayBoxSvg extends TypeSvgSvg {
  className: 'ElTakeawayBoxSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'ElTakeawayBoxSvg';
    this.addAttrObj({
      name: 'ElTakeawayBoxSvg',
      title: 'ElTakeawayBoxSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M832 384H192v448h640V384zM96 320h832V128H96v192zm800 64v480a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V384H64a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32h896a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32h-64zM416 512h192a32 32 0 0 1 0 64H416a32 32 0 0 1 0-64z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
