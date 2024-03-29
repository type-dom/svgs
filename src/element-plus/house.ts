import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElHouseSvg extends TypeSvgSvg {
  className: 'ElHouseSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'ElHouseSvg';
    this.addAttrObj({
      name: 'ElHouseSvg',
      title: 'ElHouseSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M192 413.952V896h640V413.952L512 147.328 192 413.952zM139.52 374.4l352-293.312a32 32 0 0 1 40.96 0l352 293.312A32 32 0 0 1 896 398.976V928a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V398.976a32 32 0 0 1 11.52-24.576z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
