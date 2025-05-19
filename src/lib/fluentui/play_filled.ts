import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlPlayFilledSvg extends TypeSvgSvg {
  className: 'FlPlayFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlPlayFilledSvg';
    this.attr.addObj({
      name: 'FlPlayFilledSvg',
      title: 'FlPlayFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M17.2221 8.68458C18.2586 9.25438 18.2586 10.7437 17.2221 11.3135L7.22259 16.8105C6.22292 17.36 5 16.6367 5 15.496L5 4.50214C5 3.36137 6.22292 2.63812 7.22259 3.18766L17.2221 8.68458Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
