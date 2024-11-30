import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlPeopleHomeColorSvg extends TypeSvgSvg {
  className: 'FlPeopleHomeColorSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlPeopleHomeColorSvg';
    this.attr.addObj({
      name: 'FlPeopleHomeColorSvg',
      title: 'FlPeopleHomeColorSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    this.useParams(params);
  }
}
