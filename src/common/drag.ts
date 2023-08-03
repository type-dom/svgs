import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdDragSvg extends TypeSvgSvg {
  className: 'TdDragSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdDragSvg';
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M73.137 29.08h-9.209 29.7L63.886.093 34.373 29.08h20.49v27.035H27.238v17.948h27.625v27.133h18.274V74.063h27.41V56.115h-27.41V29.08zm-9.245 98.827l27.518-26.711H36.59l27.302 26.71zM.042 64.982l27.196 27.029V38.167L.042 64.982zm100.505-26.815V92.01l27.41-27.029-27.41-26.815z',
    );
    this.childNodes.push(path0);
  }
}
