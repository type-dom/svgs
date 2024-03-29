import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class TdPaginateSvg extends TypeSvgSvg {
  className: 'TdPaginateSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'TdPaginateSvg';
    this.addAttrObj({
      name: 'TdPaginateSvg',
      title: 'TdPaginateSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M132.98 509.253h94.916v47.458h-94.917v-47.458z m142.375 0H417.73v47.458H275.355v-47.458z m189.834 0h94.916v47.458H465.19v-47.458z m142.376 0H749.94v47.458H607.565v-47.458z m189.833 0h94.916v47.458h-94.916v-47.458z m-0.579-379.458l0.579 331.999H227.896l-0.888-331.999 48.266-0.17 0.08 284.71H749.94l-0.193-284.54h47.073z m-569.725 758.61l0.802-284.237 568.923-0.071v284.82h-47.243l0.363-237.289H275.355l0.09 236.778h-48.351z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
