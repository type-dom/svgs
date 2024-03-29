import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class TdForbidEditSvg extends TypeSvgSvg {
  className: 'TdForbidEditSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'TdForbidEditSvg';
    this.addAttrObj({
      name: 'TdForbidEditSvg',
      title: 'TdForbidEditSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M384 433.152l276.736-275.392c19.904-19.84 44.8-29.76 69.76-29.76 24.832 0 49.728 9.92 69.632 29.76l69.76 69.312c34.816 39.68 34.816 104.064 0 143.744l-276.16 272.064-57.152-57.088 173.952-175.36-94.592-99.072-177.28 176.448-54.72-54.656z m-48.256 48l54.656 54.592-162.816 162.048-9.984 108.992 109.568-9.856 161.536-162.88 56.576 56.576-183.296 180.608L128 896l24.896-232.896 182.848-181.952z m429.568-125.248l44.8-44.544a14.016 14.016 0 0 0 0-24.832l-64.704-74.24c-4.992-4.992-9.984-4.992-14.976-4.992-4.992 0-9.92 0-14.912 4.928l-44.8 44.608 94.592 99.072z',
    );
    this.childNodes.push(path0);
    const path1 = new SvgPath({ parent: this });
    path1.setData(
      'M757.888 808.512L214.848 265.472a16 16 0 0 1 0-22.656l25.472-25.408a16 16 0 0 1 22.592 0l543.04 543.04a16 16 0 0 1 0 22.592l-25.408 25.472a16 16 0 0 1-22.656 0z',
    );
    this.childNodes.push(path1);
    this.setConfig(config);
  }
}
