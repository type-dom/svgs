import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlLayoutColumnFourFilledSvg extends TypeSvgSvg {
  className: 'FlLayoutColumnFourFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlLayoutColumnFourFilledSvg';
    this.attr.addObj({
      name: 'FlLayoutColumnFourFilledSvg',
      title: 'FlLayoutColumnFourFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M14 17C15.6569 17 17 15.6569 17 14V6C17 4.34315 15.6569 3 14 3V17ZM13 3H10.5V17H13V3ZM7 3H9.5V17H7V3ZM6 3C4.34315 3 3 4.34315 3 6V14C3 15.6569 4.34315 17 6 17L6 3Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
