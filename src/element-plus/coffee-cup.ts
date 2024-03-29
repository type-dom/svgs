import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElCoffeeCupSvg extends TypeSvgSvg {
  className: 'ElCoffeeCupSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'ElCoffeeCupSvg';
    this.addAttrObj({
      name: 'ElCoffeeCupSvg',
      title: 'ElCoffeeCupSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M768 192a192 192 0 1 1-8 383.808A256.128 256.128 0 0 1 512 768H320A256 256 0 0 1 64 512V160a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32v32zm0 64v256a128 128 0 1 0 0-256zM96 832h640a32 32 0 1 1 0 64H96a32 32 0 1 1 0-64zm32-640v320a192 192 0 0 0 192 192h192a192 192 0 0 0 192-192V192H128z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
