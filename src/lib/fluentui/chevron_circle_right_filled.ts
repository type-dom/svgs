import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlChevronCircleRightFilledSvg extends TypeSvgSvg {
  className: 'FlChevronCircleRightFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlChevronCircleRightFilledSvg';
    this.attr.addObj({
      name: 'FlChevronCircleRightFilledSvg',
      title: 'FlChevronCircleRightFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18ZM8.14645 13.1464C7.95118 13.3417 7.95118 13.6583 8.14645 13.8536C8.34171 14.0488 8.65829 14.0488 8.85355 13.8536L12.3536 10.3536C12.4473 10.2598 12.5 10.1326 12.5 10C12.5 9.86739 12.4473 9.74022 12.3536 9.64645L8.85355 6.14645C8.65829 5.95118 8.34171 5.95118 8.14645 6.14645C7.95118 6.34171 7.95118 6.65829 8.14645 6.85355L11.2929 10L8.14645 13.1464Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
