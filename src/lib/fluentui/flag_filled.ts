import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlFlagFilledSvg extends TypeSvgSvg {
  className: 'FlFlagFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlFlagFilledSvg';
    this.attr.addObj({
      name: 'FlFlagFilledSvg',
      title: 'FlFlagFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M5 13H16.5C16.8993 13 17.1375 12.5549 16.916 12.2226L14.1009 8L16.916 3.77735C17.1375 3.44507 16.8993 3 16.5 3H4.5C4.22386 3 4 3.22386 4 3.5V17.5C4 17.7761 4.22386 18 4.5 18C4.77614 18 5 17.7761 5 17.5V13Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
