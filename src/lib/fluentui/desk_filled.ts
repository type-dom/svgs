import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlDeskFilledSvg extends TypeSvgSvg {
  className: 'FlDeskFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlDeskFilledSvg';
    this.attr.addObj({
      name: 'FlDeskFilledSvg',
      title: 'FlDeskFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M4 4C2.89543 4 2 4.89543 2 6V7H17V15.5C17 15.7761 17.2239 16 17.5 16C17.7761 16 18 15.7761 18 15.5V6C18 4.89543 17.1046 4 16 4H4ZM10 8H2V14C2 15.1046 2.89543 16 4 16H8C9.10457 16 10 15.1046 10 14V8ZM4.5 10.5C4.5 10.2239 4.72386 10 5 10H7C7.27614 10 7.5 10.2239 7.5 10.5C7.5 10.7761 7.27614 11 7 11H5C4.72386 11 4.5 10.7761 4.5 10.5Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
