import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlAppTitleRegularSvg extends TypeSvgSvg {
  className: 'FlAppTitleRegularSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlAppTitleRegularSvg';
    this.attr.addObj({
      name: 'FlAppTitleRegularSvg',
      title: 'FlAppTitleRegularSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M4 6C4 4.34315 5.34315 3 7 3H13C14.6569 3 16 4.34315 16 6V12C16 13.6569 14.6569 15 13 15H7C5.34315 15 4 13.6569 4 12V6ZM7 4C5.89543 4 5 4.89543 5 6V12C5 13.1046 5.89543 14 7 14H13C14.1046 14 15 13.1046 15 12V6C15 4.89543 14.1046 4 13 4H7ZM4 17.5C4 17.2239 4.22386 17 4.5 17H15.5C15.7761 17 16 17.2239 16 17.5C16 17.7761 15.7761 18 15.5 18H4.5C4.22386 18 4 17.7761 4 17.5Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
