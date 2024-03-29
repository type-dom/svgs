import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class TdDatepickerSvg extends TypeSvgSvg {
  className: 'TdDatepickerSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'TdDatepickerSvg';
    this.addAttrObj({
      name: 'TdDatepickerSvg',
      title: 'TdDatepickerSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1025 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M513.479856 1023.997431A511.815946 511.815946 0 0 1 313.551752 40.351159a512.245792 512.245792 0 0 1 398.856568 943.660651 508.817025 508.817025 0 0 1-198.928464 39.985621z m0-943.660651C274.565772 80.33678 81.635152 274.267041 81.635152 512.181485s192.93062 431.844705 431.844704 431.844704 431.844705-193.930261 431.844705-431.844704S751.3943 80.33678 513.479856 80.33678z',
    );
    this.childNodes.push(path0);
    const path1 = new SvgPath({ parent: this });
    path1.setData(
      'M704.411195 575.158837H491.487765a39.985621 39.985621 0 0 1-39.985621-39.98562V184.299394a39.985621 39.985621 0 0 1 79.971242 0v310.888202h172.937809a39.985621 39.985621 0 0 1 0 79.971241zM125.619334 556.165668H57.643779a39.985621 39.985621 0 0 1 0-79.971242h67.975555a39.985621 39.985621 0 0 1 0 79.971242zM967.316652 556.165668h-67.975555a39.985621 39.985621 0 0 1 0-79.971242h67.975555a39.985621 39.985621 0 0 1 0 79.971242zM513.479856 1020.998509a39.985621 39.985621 0 0 1-39.985621-39.98562v-72.973758a39.985621 39.985621 0 0 1 79.971242 0v72.973758a39.985621 39.985621 0 0 1-39.985621 39.98562z',
    );
    this.childNodes.push(path1);
    this.setConfig(config);
  }
}
