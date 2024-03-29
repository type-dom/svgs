import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElCameraFilledSvg extends TypeSvgSvg {
  className: 'ElCameraFilledSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'ElCameraFilledSvg';
    this.addAttrObj({
      name: 'ElCameraFilledSvg',
      title: 'ElCameraFilledSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M160 224a64 64 0 0 0-64 64v512a64 64 0 0 0 64 64h704a64 64 0 0 0 64-64V288a64 64 0 0 0-64-64H748.416l-46.464-92.672A64 64 0 0 0 644.736 96H379.328a64 64 0 0 0-57.216 35.392L275.776 224H160zm352 435.2a115.2 115.2 0 1 0 0-230.4 115.2 115.2 0 0 0 0 230.4zm0 140.8a256 256 0 1 1 0-512 256 256 0 0 1 0 512z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
