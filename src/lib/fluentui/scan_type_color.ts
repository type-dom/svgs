import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlScanTypeColorSvg extends TypeSvgSvg {
  className: 'FlScanTypeColorSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlScanTypeColorSvg';
    this.attr.addObj({
      name: 'FlScanTypeColorSvg',
      title: 'FlScanTypeColorSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M8 8C8 8.55228 7.55228 9 7 9C6.44772 9 6 8.55228 6 8V7.25C6 6.55964 6.55964 6 7.25 6H12.75C13.4404 6 14 6.55964 14 7.25V8C14 8.55228 13.5523 9 13 9C12.4477 9 12 8.55228 12 8H11V12H11.5C12.0523 12 12.5 12.4477 12.5 13C12.5 13.5523 12.0523 14 11.5 14H8.5C7.94772 14 7.5 13.5523 7.5 13C7.5 12.4477 7.94772 12 8.5 12H9V8H8Z',
    );
    this.addChild(path0);
    const path1 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path1.setData(
      'M4.5 4C4.22386 4 4 4.22386 4 4.5V7C4 7.55228 3.55228 8 3 8C2.44772 8 2 7.55228 2 7V4.5C2 3.11929 3.11929 2 4.5 2H7C7.55228 2 8 2.44772 8 3C8 3.55228 7.55228 4 7 4H4.5ZM12 3C12 2.44772 12.4477 2 13 2H15.5C16.8807 2 18 3.11929 18 4.5V7C18 7.55228 17.5523 8 17 8C16.4477 8 16 7.55228 16 7V4.5C16 4.22386 15.7761 4 15.5 4H13C12.4477 4 12 3.55228 12 3ZM3 12C3.55228 12 4 12.4477 4 13V15.5C4 15.7761 4.22386 16 4.5 16H7C7.55228 16 8 16.4477 8 17C8 17.5523 7.55228 18 7 18H4.5C3.11929 18 2 16.8807 2 15.5V13C2 12.4477 2.44772 12 3 12ZM17 12C17.5523 12 18 12.4477 18 13V15.5C18 16.8807 16.8807 18 15.5 18H13C12.4477 18 12 17.5523 12 17C12 16.4477 12.4477 16 13 16H15.5C15.7761 16 16 15.7761 16 15.5V13C16 12.4477 16.4477 12 17 12Z',
    );
    this.addChild(path1);
    this.useParams(params);
  }
}
