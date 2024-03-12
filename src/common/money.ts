import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class TdMoneySvg extends TypeSvgSvg {
  className: 'TdMoneySvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'TdMoneySvg';
    this.addAttrObj({
      name: 'TdMoneySvg',
      title: 'TdMoneySvg'
    });
    this.addAttrObj({
      viewBox: '0 0 128 128',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M54.122 127.892v-28.68H7.513V87.274h46.609v-12.4H7.513v-12.86h38.003L.099 0h22.6l32.556 45.07c3.617 5.144 6.44 9.611 8.487 13.385 1.788-3.05 4.89-7.779 9.301-14.186L103.93 0h24.01L82.385 62.013h38.34v12.862h-46.41v12.4h46.41v11.937h-46.41v28.68H54.123z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
