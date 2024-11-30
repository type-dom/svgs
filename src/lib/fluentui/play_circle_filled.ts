import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlPlayCircleFilledSvg extends TypeSvgSvg {
  className: 'FlPlayCircleFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlPlayCircleFilledSvg';
    this.attr.addObj({
      name: 'FlPlayCircleFilledSvg',
      title: 'FlPlayCircleFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10ZM8 7.83309V12.1668C8 12.7443 8.62522 13.1051 9.12521 12.8162L13.2501 10.4329C13.4048 10.3436 13.5 10.1785 13.5 9.99996C13.5 9.82139 13.4048 9.65637 13.2501 9.56703L9.12521 7.18369C8.62521 6.8948 8 7.25563 8 7.83309Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
