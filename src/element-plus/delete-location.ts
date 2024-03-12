import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElDeleteLocationSvg extends TypeSvgSvg {
  className: 'ElDeleteLocationSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'ElDeleteLocationSvg';
    this.addAttrObj({
      name: 'ElDeleteLocationSvg',
      title: 'ElDeleteLocationSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M288 896h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z',
    );
    this.childNodes.push(path0);
    const path1 = new SvgPath({ parent: this });
    path1.setData(
      'M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z',
    );
    this.childNodes.push(path1);
    const path2 = new SvgPath({ parent: this });
    path2.setData(
      'M384 384h256q32 0 32 32t-32 32H384q-32 0-32-32t32-32z',
    );
    this.childNodes.push(path2);
    this.setConfig(config);
  }
}
