import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class TdCatalogSvg extends TypeSvgSvg {
  className: 'TdCatalogSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'TdCatalogSvg';
    this.addAttrObj({
      name: 'TdCatalogSvg',
      title: 'TdCatalogSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M622.592 984.064H220.672c-59.392 0-108.032-48.64-108.032-108.032V191.488c0-59.392 48.64-108.032 108.032-108.032h582.656c59.392 0 108.032 48.64 108.032 108.032v502.272c-5.12 141.312-142.336 279.04-288.256 289.792l-0.512 0.512zM220.672 128.512c-34.816 0-62.976 28.16-62.976 62.976V875.52c0 34.816 28.16 62.976 62.976 62.976h399.872c122.368-9.216 241.664-128.512 245.76-245.76v-501.76c0-34.816-28.16-62.976-62.976-62.976H220.672z',
    );
    this.childNodes.push(path0);
    const path1 = new SvgPath({ parent: this });
    path1.setData(
      'M669.696 544.768H264.704c-12.288 0-22.528-10.24-22.528-22.528 0-12.288 10.24-22.528 22.528-22.528h404.992c12.288 0 22.528 10.24 22.528 22.528 0 12.8-10.24 22.528-22.528 22.528zM804.352 342.528H219.648c-12.288 0-22.528-10.24-22.528-22.528s10.24-22.528 22.528-22.528h585.216c12.288 0 22.528 10.24 22.528 22.528s-10.24 22.528-23.04 22.528z',
    );
    this.childNodes.push(path1);
    const path2 = new SvgPath({ parent: this });
    path2.setData(
      'M804.352 544.768H219.648c-12.288 0-22.528-10.24-22.528-22.528 0-12.288 10.24-22.528 22.528-22.528h585.216c12.288 0 22.528 10.24 22.528 22.528-0.512 12.8-10.24 22.528-23.04 22.528zM804.352 770.048H219.648c-12.288 0-22.528-10.24-22.528-22.528 0-12.288 10.24-22.528 22.528-22.528h585.216c12.288 0 22.528 10.24 22.528 22.528-0.512 12.288-10.24 22.528-23.04 22.528z',
    );
    this.childNodes.push(path2);
    this.setConfig(config);
  }
}
