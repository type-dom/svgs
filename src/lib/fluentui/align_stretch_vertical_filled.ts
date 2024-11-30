import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlAlignStretchVerticalFilledSvg extends TypeSvgSvg {
  className: 'FlAlignStretchVerticalFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlAlignStretchVerticalFilledSvg';
    this.attr.addObj({
      name: 'FlAlignStretchVerticalFilledSvg',
      title: 'FlAlignStretchVerticalFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M2.5 3C2.22386 3 2 3.22386 2 3.5C2 3.77614 2.22386 4 2.5 4H17.5C17.7761 4 18 3.77614 18 3.5C18 3.22386 17.7761 3 17.5 3H2.5Z',
    );
    this.addChild(path0);
    const path1 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path1.setData(
      'M2.5 16C2.22386 16 2 16.2239 2 16.5C2 16.7761 2.22386 17 2.5 17H17.5C17.7761 17 18 16.7761 18 16.5C18 16.2239 17.7761 16 17.5 16H2.5Z',
    );
    this.addChild(path1);
    const path2 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path2.setData(
      'M4 13C4 14.1046 4.89543 15 6 15H7C8.10457 15 9 14.1046 9 13V7C9 5.89543 8.10457 5 7 5H6C4.89543 5 4 5.89543 4 7V13Z',
    );
    this.addChild(path2);
    const path3 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path3.setData(
      'M13 15C11.8954 15 11 14.1046 11 13V7C11 5.89543 11.8954 5 13 5H14C15.1046 5 16 5.89543 16 7V13C16 14.1046 15.1046 15 14 15H13Z',
    );
    this.addChild(path3);
    this.useParams(params);
  }
}
