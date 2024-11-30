import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlCircleLineFilledSvg extends TypeSvgSvg {
  className: 'FlCircleLineFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlCircleLineFilledSvg';
    this.attr.addObj({
      name: 'FlCircleLineFilledSvg',
      title: 'FlCircleLineFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M17.9849 10.5H2.01563C2.27372 14.6854 5.7499 18 10.0003 18C14.2506 18 17.7268 14.6854 17.9849 10.5ZM17.9849 9.5H2.01562C2.27372 5.31464 5.7499 2 10.0003 2C14.2506 2 17.7268 5.31464 17.9849 9.5Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
