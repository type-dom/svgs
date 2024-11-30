import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlArrowTrendingLinesColorSvg extends TypeSvgSvg {
  className: 'FlArrowTrendingLinesColorSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlArrowTrendingLinesColorSvg';
    this.attr.addObj({
      name: 'FlArrowTrendingLinesColorSvg',
      title: 'FlArrowTrendingLinesColorSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M17 10C17 9.44772 16.5523 9 16 9C15.4477 9 15 9.44772 15 10V17C15 17.5523 15.4477 18 16 18C16.5523 18 17 17.5523 17 17V10Z',
    );
    this.addChild(path0);
    const path1 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path1.setData(
      'M9 12C9 11.4477 8.55228 11 8 11C7.44772 11 7 11.4477 7 12V17C7 17.5523 7.44772 18 8 18C8.55228 18 9 17.5523 9 17V12Z',
    );
    this.addChild(path1);
    const path2 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path2.setData(
      'M5 15C5 14.4477 4.55228 14 4 14C3.44772 14 3 14.4477 3 15V17C3 17.5523 3.44772 18 4 18C4.55228 18 5 17.5523 5 17V15Z',
    );
    this.addChild(path2);
    const path3 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path3.setData(
      'M12 13C12.5523 13 13 13.4477 13 14V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V14C11 13.4477 11.4477 13 12 13Z',
    );
    this.addChild(path3);
    const path4 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path4.setData(
      'M14 4C13.4477 4 13 3.55228 13 3C13 2.44772 13.4477 2 14 2H17C17.5523 2 18 2.44772 18 3V6C18 6.55228 17.5523 7 17 7C16.4477 7 16 6.55228 16 6V5.41421L12.2071 9.20711C11.8166 9.59763 11.1834 9.59763 10.7929 9.20711L8.5 6.91421L4.20711 11.2071C3.81658 11.5976 3.18342 11.5976 2.79289 11.2071C2.40237 10.8166 2.40237 10.1834 2.79289 9.79289L7.79289 4.79289C8.18342 4.40237 8.81658 4.40237 9.20711 4.79289L11.5 7.08579L14.5858 4H14Z',
    );
    this.addChild(path4);
    this.useParams(params);
  }
}
