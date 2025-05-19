import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlLayoutCellFourFilledSvg extends TypeSvgSvg {
  className: 'FlLayoutCellFourFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlLayoutCellFourFilledSvg';
    this.attr.addObj({
      name: 'FlLayoutCellFourFilledSvg',
      title: 'FlLayoutCellFourFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M14 17H10.5V10.5H17V14C17 15.6569 15.6569 17 14 17ZM17 9.5H10.5V3H14C15.6569 3 17 4.34315 17 6V9.5ZM9.5 9.5V3H6C4.34315 3 3 4.34315 3 6V9.5H9.5ZM3 10.5V14C3 15.6569 4.34315 17 6 17H9.5V10.5H3Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
