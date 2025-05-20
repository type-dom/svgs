import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlStepFilledSvg extends TypeSvgSvg {
  className: 'FlStepFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlStepFilledSvg';
    this.attr.addObj({
      name: 'FlStepFilledSvg',
      title: 'FlStepFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M13 2C12.4477 2 12 2.44772 12 3V7H8C7.44772 7 7 7.44771 7 8V12H3C2.44772 12 2 12.4477 2 13V17C2 17.5523 2.44772 18 3 18H15C16.6569 18 18 16.6569 18 15V3C18 2.44772 17.5523 2 17 2H13Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
