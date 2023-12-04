import { SvgPath, TypeHtml, TypeSvgSvg } from '@type-dom/framework';
export class ElMonitorSvg extends TypeSvgSvg {
  className: 'ElMonitorSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'ElMonitorSvg';
    this.addAttrObj({
      name: 'ElMonitorSvg',
      title: 'ElMonitorSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M544 768v128h192a32 32 0 1 1 0 64H288a32 32 0 1 1 0-64h192V768H192A128 128 0 0 1 64 640V256a128 128 0 0 1 128-128h640a128 128 0 0 1 128 128v384a128 128 0 0 1-128 128H544zM192 192a64 64 0 0 0-64 64v384a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H192z',
    );
    this.childNodes.push(path0);
  }
}
