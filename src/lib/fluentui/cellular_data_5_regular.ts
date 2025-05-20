import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlCellularData5RegularSvg extends TypeSvgSvg {
  className: 'FlCellularData5RegularSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlCellularData5RegularSvg';
    this.attr.addObj({
      name: 'FlCellularData5RegularSvg',
      title: 'FlCellularData5RegularSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M4.5 12C4.74546 12 4.94961 12.1769 4.99194 12.4101L5 12.5V15.5C5 15.7761 4.77614 16 4.5 16C4.25454 16 4.05039 15.8231 4.00806 15.5899L4 15.5V12.5C4 12.2239 4.22386 12 4.5 12Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
