import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlStreamInputFilledSvg extends TypeSvgSvg {
  className: 'FlStreamInputFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlStreamInputFilledSvg';
    this.attr.addObj({
      name: 'FlStreamInputFilledSvg',
      title: 'FlStreamInputFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    this.useParams(params);
  }
}
