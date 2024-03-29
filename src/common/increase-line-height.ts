import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class TdIncreaseLineHeightSvg extends TypeSvgSvg {
  className: 'TdIncreaseLineHeightSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'TdIncreaseLineHeightSvg';
    this.addAttrObj({
      name: 'TdIncreaseLineHeightSvg',
      title: 'TdIncreaseLineHeightSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M542.72 391.68c10.24-10.24 10.24-25.6 0-35.84l-176.64-204.8c-5.12-5.12-12.8-7.68-20.48-7.68-7.68 0-15.36 2.56-20.48 7.68l-176.64 204.8c-10.24 10.24-10.24 25.6 0 35.84 10.24 10.24 25.6 10.24 35.84 0l135.68-156.16v624.64h51.2V235.52l135.68 156.16c10.24 10.24 25.6 10.24 35.84 0z m314.88 417.28h-358.4c-15.36 0-25.6 10.24-25.6 25.6s10.24 25.6 25.6 25.6h358.4c15.36 0 25.6-10.24 25.6-25.6s-10.24-25.6-25.6-25.6z m-307.2-563.2h307.2c15.36 0 25.6-12.8 25.6-25.6 0-15.36-10.24-25.6-25.6-25.6h-307.2c-15.36 0-25.6 10.24-25.6 25.6 0 12.8 10.24 25.6 25.6 25.6z m307.2 409.6h-358.4c-15.36 0-25.6 10.24-25.6 25.6s10.24 25.6 25.6 25.6h358.4c15.36 0 25.6-10.24 25.6-25.6s-10.24-25.6-25.6-25.6z m0-309.76h-204.8c-15.36 0-25.6 10.24-25.6 25.6s10.24 25.6 25.6 25.6h204.8c15.36 0 25.6-10.24 25.6-25.6 0-12.8-10.24-25.6-25.6-25.6z m0 156.16h-358.4c-15.36 0-25.6 10.24-25.6 25.6s10.24 25.6 25.6 25.6h358.4c15.36 0 25.6-10.24 25.6-25.6s-10.24-25.6-25.6-25.6z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
