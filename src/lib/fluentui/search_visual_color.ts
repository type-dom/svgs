import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlSearchVisualColorSvg extends TypeSvgSvg {
  className: 'FlSearchVisualColorSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlSearchVisualColorSvg';
    this.attr.addObj({
      name: 'FlSearchVisualColorSvg',
      title: 'FlSearchVisualColorSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M4.5 4C4.22386 4 4 4.22386 4 4.5V7C4 7.55228 3.55228 8 3 8C2.44772 8 2 7.55228 2 7V4.5C2 3.11929 3.11929 2 4.5 2H7C7.55228 2 8 2.44772 8 3C8 3.55228 7.55228 4 7 4H4.5ZM12 3C12 2.44772 12.4477 2 13 2H15.5C16.8807 2 18 3.11929 18 4.5V7C18 7.55228 17.5523 8 17 8C16.4477 8 16 7.55228 16 7V4.5C16 4.22386 15.7761 4 15.5 4H13C12.4477 4 12 3.55228 12 3ZM3 12C3.55228 12 4 12.4477 4 13V15.5C4 15.7761 4.22386 16 4.5 16H7C7.55228 16 8 16.4477 8 17C8 17.5523 7.55228 18 7 18H4.5C3.11929 18 2 16.8807 2 15.5V13C2 12.4477 2.44772 12 3 12ZM17 12C17.5523 12 18 12.4477 18 13V15.5C18 16.8807 16.8807 18 15.5 18H13C12.4477 18 12 17.5523 12 17C12 16.4477 12.4477 16 13 16H15.5C15.7761 16 16 15.7761 16 15.5V13C16 12.4477 16.4477 12 17 12Z',
    );
    this.addChild(path0);
    const path1 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path1.setData(
      'M10 12C11.1046 12 12 11.1046 12 10C12 8.89543 11.1046 8 10 8C8.89543 8 8 8.89543 8 10C8 11.1046 8.89543 12 10 12ZM7 8C7.55228 8 8 7.55228 8 7C8 6.44772 7.55228 6 7 6C6.44772 6 6 6.44772 6 7C6 7.55228 6.44772 8 7 8Z',
    );
    this.addChild(path1);
    this.useParams(params);
  }
}
