import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElWalletFilledSvg extends TypeSvgSvg {
  className: 'ElWalletFilledSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'ElWalletFilledSvg';
    this.addAttrObj({
      name: 'ElWalletFilledSvg',
      title: 'ElWalletFilledSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M688 512a112 112 0 1 0 0 224h208v160H128V352h768v160H688zm32 160h-32a48 48 0 0 1 0-96h32a48 48 0 0 1 0 96zm-80-544 128 160H384l256-160z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
