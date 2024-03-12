import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class TdCheckSvg extends TypeSvgSvg {
  className: 'TdCheckSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'TdCheckSvg';
    this.addAttrObj({
      name: 'TdCheckSvg',
      title: 'TdCheckSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1038 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M1037.550182 160.028672 974.227456 97.617306l0.01536-50.190131L78.906281 47.427174 78.906281 942.454776l895.063253 0 0.21801-718.286234L1037.550182 160.028672zM910.934323 879.403725 143.62998 879.403725 143.62998 110.694101l721.785854 0L440.885965 535.53705 281.173094 361.596518l-119.557734 114.487501 270.700134 278.707712 5.45239 12.380979 473.165517-478.972826L910.933402 879.403764z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
