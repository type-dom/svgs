import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlPeopleColorSvg extends TypeSvgSvg {
  className: 'FlPeopleColorSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlPeopleColorSvg';
    this.attr.addObj({
      name: 'FlPeopleColorSvg',
      title: 'FlPeopleColorSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M10.5 12.5C10.5 11.6716 11.1822 11 12.0238 11H16.9762C17.8178 11 18.5 11.6716 18.5 12.5C18.5 12.5 18.5 15.5 14.5 15.5C10.5 15.5 10.5 12.5 10.5 12.5Z',
    );
    this.addChild(path0);
    const path1 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path1.setData(
      'M10.5 12.5C10.5 11.6716 11.1822 11 12.0238 11H16.9762C17.8178 11 18.5 11.6716 18.5 12.5C18.5 12.5 18.5 15.5 14.5 15.5C10.5 15.5 10.5 12.5 10.5 12.5Z',
    );
    this.addChild(path1);
    const path2 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path2.setData(
      'M1.5 13C1.5 11.8954 2.39543 11 3.5 11H10C11.1046 11 12 11.8954 12 13C12 13 12 17 6.75 17C1.5 17 1.5 13 1.5 13Z',
    );
    this.addChild(path2);
    const path3 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path3.setData(
      'M1.5 13C1.5 11.8954 2.39543 11 3.5 11H10C11.1046 11 12 11.8954 12 13C12 13 12 17 6.75 17C1.5 17 1.5 13 1.5 13Z',
    );
    this.addChild(path3);
    const path4 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path4.setData(
      'M14.5 10C15.8807 10 17 8.88071 17 7.5C17 6.11929 15.8807 5 14.5 5C13.1193 5 12 6.11929 12 7.5C12 8.88071 13.1193 10 14.5 10Z',
    );
    this.addChild(path4);
    const path5 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path5.setData(
      'M6.75 10C8.54493 10 10 8.54493 10 6.75C10 4.95507 8.54493 3.5 6.75 3.5C4.95507 3.5 3.5 4.95507 3.5 6.75C3.5 8.54493 4.95507 10 6.75 10Z',
    );
    this.addChild(path5);
    this.useParams(params);
  }
}
