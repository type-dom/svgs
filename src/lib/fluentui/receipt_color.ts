import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlReceiptColorSvg extends TypeSvgSvg {
  className: 'FlReceiptColorSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlReceiptColorSvg';
    this.attr.addObj({
      name: 'FlReceiptColorSvg',
      title: 'FlReceiptColorSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M5 3C3.89543 3 3 3.89543 3 5V14C3 15.6569 4.34315 17 6 17H14V5C14 3.89543 13.1046 3 12 3H5Z',
    );
    this.addChild(path0);
    const path1 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path1.setData(
      'M6 6.5C6 6.22386 6.22386 6 6.5 6H10.5C10.7761 6 11 6.22386 11 6.5C11 6.77614 10.7761 7 10.5 7H6.5C6.22386 7 6 6.77614 6 6.5Z',
    );
    this.addChild(path1);
    const path2 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path2.setData(
      'M6 9.5C6 9.22386 6.22386 9 6.5 9H10.5C10.7761 9 11 9.22386 11 9.5C11 9.77614 10.7761 10 10.5 10H6.5C6.22386 10 6 9.77614 6 9.5Z',
    );
    this.addChild(path2);
    const path3 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path3.setData(
      'M6 12.5C6 12.2239 6.22386 12 6.5 12H8.5C8.77614 12 9 12.2239 9 12.5C9 12.7761 8.77614 13 8.5 13H6.5C6.22386 13 6 12.7761 6 12.5Z',
    );
    this.addChild(path3);
    const path4 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path4.setData(
      'M14 12H17V14C17 15.6569 15.6569 17 14 17V12Z',
    );
    this.addChild(path4);
    this.useParams(params);
  }
}
