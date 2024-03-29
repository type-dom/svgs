import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class TdTable1Svg extends TypeSvgSvg {
  className: 'TdTable1Svg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'TdTable1Svg';
    this.addAttrObj({
      name: 'TdTable1Svg',
      title: 'TdTable1Svg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M781.3 64.2H242.2c-98.3 0-178 79.1-178 176.7v555.4c0 97.6 79.7 176.7 178 176.7h539.1c98.3 0 178-79.1 178-176.7V240.9c0-97.6-79.7-176.7-178-176.7zM919.5 244v42.4H389.7V104.6h389.4c77.6 0 140.4 62.4 140.4 139.4zM349 533.8v176.7H104V533.8h245z m-245-40.4V326.8h245v166.6H104z m285.7 40.4h529.8v176.7H389.7V533.8z m0-40.4V326.8h529.8v166.6H389.7zM244.4 104.6H349v181.8H104V244c0-77 62.9-139.4 140.4-139.4zM104 793.3v-42.4h245v181.8H244.4c-77.5 0-140.4-62.4-140.4-139.4z m675.2 139.4H389.7V750.9h529.8v42.4c0 77-62.8 139.4-140.3 139.4z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
