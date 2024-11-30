import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlCellularData4RegularSvg extends TypeSvgSvg {
  className: 'FlCellularData4RegularSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlCellularData4RegularSvg';
    this.attr.addObj({
      name: 'FlCellularData4RegularSvg',
      title: 'FlCellularData4RegularSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M7.50335 10C7.74881 10 7.95296 10.1769 7.99529 10.4101L8.00335 10.5V15.5003C8.00335 15.7764 7.77949 16.0003 7.50335 16.0003C7.25789 16.0003 7.05374 15.8234 7.0114 15.5901L7.00335 15.5003V10.5C7.00335 10.2239 7.22721 10 7.50335 10ZM4.5 12.0003C4.74546 12.0003 4.94961 12.1771 4.99194 12.4104L5 12.5003V15.5003C5 15.7764 4.77614 16.0003 4.5 16.0003C4.25454 16.0003 4.05039 15.8234 4.00806 15.5901L4 15.5003V12.5003C4 12.2241 4.22386 12.0003 4.5 12.0003Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
