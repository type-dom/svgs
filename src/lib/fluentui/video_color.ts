import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlVideoColorSvg extends TypeSvgSvg {
  className: 'FlVideoColorSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlVideoColorSvg';
    this.attr.addObj({
      name: 'FlVideoColorSvg',
      title: 'FlVideoColorSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M16.0394 14.7774L14.0018 13.3705L9.19995 9.79992L13.3999 6.99993L16.0394 5.22366C16.8687 4.65105 17.9999 5.24466 17.9999 6.25243V13.7486C17.9999 14.7564 16.8687 15.35 16.0394 14.7774Z',
    );
    this.addChild(path0);
    const path1 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path1.setData(
      'M16.0394 14.7774L14.0018 13.3705L9.19995 9.79992L13.3999 6.99993L16.0394 5.22366C16.8687 4.65105 17.9999 5.24466 17.9999 6.25243V13.7486C17.9999 14.7564 16.8687 15.35 16.0394 14.7774Z',
    );
    this.addChild(path1);
    const path2 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path2.setData(
      'M2 7.00045C2 5.34335 3.34335 4 5.00045 4H10.0012C11.6583 4 13.0016 5.34335 13.0016 7.00045V13.0013C13.0016 14.6584 11.6583 16.0018 10.0012 16.0018H5.00045C3.34335 16.0018 2 14.6584 2 13.0013V7.00045Z',
    );
    this.addChild(path2);
    const path3 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path3.setData(
      'M3 12C3 10.8954 3.89543 10 5 10H10C11.1046 10 12 10.8954 12 12C12 13.1046 11.1046 14 10 14H5C3.89543 14 3 13.1046 3 12Z',
    );
    this.addChild(path3);
    const path4 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path4.setData(
      'M5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H7C7.55228 13 8 12.5523 8 12C8 11.4477 7.55228 11 7 11H5Z',
    );
    this.addChild(path4);
    const path5 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path5.setData(
      'M10 13C10.5523 13 11 12.5523 11 12C11 11.4477 10.5523 11 10 11C9.44772 11 9 11.4477 9 12C9 12.5523 9.44772 13 10 13Z',
    );
    this.addChild(path5);
    this.useParams(params);
  }
}
