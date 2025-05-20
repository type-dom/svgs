import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlAddCircleColorSvg extends TypeSvgSvg {
  className: 'FlAddCircleColorSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlAddCircleColorSvg';
    this.attr.addObj({
      name: 'FlAddCircleColorSvg',
      title: 'FlAddCircleColorSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10Z',
    );
    this.addChild(path0);
    const path1 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path1.setData(
      'M6 10C6 9.72386 6.22386 9.5 6.5 9.5H9.5V6.5C9.5 6.22386 9.72386 6 10 6C10.2761 6 10.5 6.22386 10.5 6.5V9.5H13.5C13.7761 9.5 14 9.72386 14 10C14 10.2761 13.7761 10.5 13.5 10.5H10.5V13.5C10.5 13.7761 10.2761 14 10 14C9.72386 14 9.5 13.7761 9.5 13.5V10.5H6.5C6.22386 10.5 6 10.2761 6 10Z',
    );
    this.addChild(path1);
    this.useParams(params);
  }
}
