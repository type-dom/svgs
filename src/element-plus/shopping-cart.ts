import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElShoppingCartSvg extends TypeSvgSvg {
  className: 'ElShoppingCartSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'ElShoppingCartSvg';
    this.addAttrObj({
      name: 'ElShoppingCartSvg',
      title: 'ElShoppingCartSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M432 928a48 48 0 1 1 0-96 48 48 0 0 1 0 96zm320 0a48 48 0 1 1 0-96 48 48 0 0 1 0 96zM96 128a32 32 0 0 1 0-64h160a32 32 0 0 1 31.36 25.728L320.64 256H928a32 32 0 0 1 31.296 38.72l-96 448A32 32 0 0 1 832 768H384a32 32 0 0 1-31.36-25.728L229.76 128H96zm314.24 576h395.904l82.304-384H333.44l76.8 384z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
