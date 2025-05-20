import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlLibraryColorSvg extends TypeSvgSvg {
  className: 'FlLibraryColorSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlLibraryColorSvg';
    this.attr.addObj({
      name: 'FlLibraryColorSvg',
      title: 'FlLibraryColorSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M2 3.49786C2 2.67062 2.67135 2 3.49951 2H4.49918C5.32733 2 5.99869 2.67062 5.99869 3.49786V16.4793C5.99869 17.3066 5.32733 17.9772 4.49918 17.9772H3.49951C2.67135 17.9772 2 17.3066 2 16.4793V3.49786Z',
    );
    this.addChild(path0);
    const path1 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path1.setData(
      'M7 3.49786C7 2.67062 7.67135 2 8.49951 2H9.49918C10.3273 2 10.9987 2.67062 10.9987 3.49786V16.4793C10.9987 17.3066 10.3273 17.9772 9.49918 17.9772H8.49951C7.67135 17.9772 7 17.3066 7 16.4793V3.49786Z',
    );
    this.addChild(path1);
    const path2 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path2.setData(
      'M15.718 6.1567C15.5261 5.32172 14.6734 4.81739 13.8481 5.05074L13.103 5.26142C12.3478 5.47498 11.8852 6.23422 12.0423 7.00244L14.0461 16.8013C14.2175 17.6392 15.0552 18.164 15.885 17.9532L16.87 17.7029C17.6593 17.5023 18.1441 16.709 17.9618 15.916L15.718 6.1567Z',
    );
    this.addChild(path2);
    const path3 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path3.setData(
      'M6 7H2V5H6V7Z',
    );
    this.addChild(path3);
    const path4 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path4.setData(
      'M12.3193 8.35743L16.0488 7.5957L16.4981 9.54983L12.7188 10.3108L12.3193 8.35743Z',
    );
    this.addChild(path4);
    const path5 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path5.setData(
      'M7 7H11V5H7V7Z',
    );
    this.addChild(path5);
    this.useParams(params);
  }
}
