import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlFlagCheckeredRegularSvg extends TypeSvgSvg {
  className: 'FlFlagCheckeredRegularSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlFlagCheckeredRegularSvg';
    this.attr.addObj({
      name: 'FlFlagCheckeredRegularSvg',
      title: 'FlFlagCheckeredRegularSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M5 3.5C5 3.22386 5.22386 3 5.5 3H15.5C15.7761 3 16 3.22386 16 3.5V13.5C16 13.7761 15.7761 14 15.5 14H6V17.5C6 17.7761 5.77614 18 5.5 18C5.22386 18 5 17.7761 5 17.5V3.5ZM6 13H9V10H12V13H15V10H12V7H15V4H12V7H9V4H6V7H9V10H6V13Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
