import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlAlignStretchVerticalRegularSvg extends TypeSvgSvg {
  className: 'FlAlignStretchVerticalRegularSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlAlignStretchVerticalRegularSvg';
    this.attr.addObj({
      name: 'FlAlignStretchVerticalRegularSvg',
      title: 'FlAlignStretchVerticalRegularSvg'
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
      'M4 13C4 14.1046 4.89543 15 6 15H7C8.10457 15 9 14.1046 9 13V7C9 5.89543 8.10457 5 7 5H6C4.89543 5 4 5.89543 4 7V13ZM6 14C5.44772 14 5 13.5523 5 13V7C5 6.44772 5.44772 6 6 6H7C7.55228 6 8 6.44772 8 7V13C8 13.5523 7.55228 14 7 14H6Z',
    );
    this.addChild(path2);
    const path3 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path3.setData(
      'M13 15H14C15.1046 15 16 14.1046 16 13V7C16 5.89543 15.1046 5 14 5H13C11.8954 5 11 5.89543 11 7V13C11 14.1046 11.8954 15 13 15ZM12 13V7C12 6.44772 12.4477 6 13 6H14C14.5523 6 15 6.44772 15 7V13C15 13.5523 14.5523 14 14 14H13C12.4477 14 12 13.5523 12 13Z',
    );
    this.addChild(path3);
    this.useParams(params);
  }
}
