import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElDocumentDeleteSvg extends TypeSvgSvg {
  className: 'ElDocumentDeleteSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'ElDocumentDeleteSvg';
    this.addAttrObj({
      name: 'ElDocumentDeleteSvg',
      title: 'ElDocumentDeleteSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M805.504 320 640 154.496V320h165.504zM832 384H576V128H192v768h640V384zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm308.992 546.304-90.496-90.624 45.248-45.248 90.56 90.496 90.496-90.432 45.248 45.248-90.496 90.56 90.496 90.496-45.248 45.248-90.496-90.496-90.56 90.496-45.248-45.248 90.496-90.496z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
