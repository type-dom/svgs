import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElDocumentCheckedSvg extends TypeSvgSvg {
  className: 'ElDocumentCheckedSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'ElDocumentCheckedSvg';
    this.addAttrObj({
      name: 'ElDocumentCheckedSvg',
      title: 'ElDocumentCheckedSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M805.504 320 640 154.496V320h165.504zM832 384H576V128H192v768h640V384zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm318.4 582.144 180.992-180.992L704.64 510.4 478.4 736.64 320 578.304l45.248-45.312L478.4 646.144z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
