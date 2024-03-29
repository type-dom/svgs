import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElFailedSvg extends TypeSvgSvg {
  className: 'ElFailedSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'ElFailedSvg';
    this.addAttrObj({
      name: 'ElFailedSvg',
      title: 'ElFailedSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'm557.248 608 135.744-135.744-45.248-45.248-135.68 135.744-135.808-135.68-45.248 45.184L466.752 608l-135.68 135.68 45.184 45.312L512 653.248l135.744 135.744 45.248-45.248L557.312 608zM704 192h160v736H160V192h160v64h384v-64zm-320 0V96h256v96H384z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
