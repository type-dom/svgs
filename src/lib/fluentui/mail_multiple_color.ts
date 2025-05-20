import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlMailMultipleColorSvg extends TypeSvgSvg {
  className: 'FlMailMultipleColorSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlMailMultipleColorSvg';
    this.attr.addObj({
      name: 'FlMailMultipleColorSvg',
      title: 'FlMailMultipleColorSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M4 7.5V8.5V14.5C4 15.8807 5.11929 17 6.5 17H13.5C15.9853 17 18 14.9856 18 12.5003V7.5C18 6.11929 16.8807 5 15.5 5H6.5C5.11929 5 4 6.11929 4 7.5Z',
    );
    this.addChild(path0);
    const path1 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path1.setData(
      'M2 5.5V12.5C2 13.8807 3.11929 15 4.5 15H13.5C14.8807 15 16 13.8807 16 12.5V5.5H2Z',
    );
    this.addChild(path1);
    const path2 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path2.setData(
      'M2 5.5V12.5C2 13.8807 3.11929 15 4.5 15H13.5C14.8807 15 16 13.8807 16 12.5V5.5H2Z',
    );
    this.addChild(path2);
    const path3 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path3.setData(
      'M2 5.5V12.5C2 13.8807 3.11929 15 4.5 15H13.5C14.8807 15 16 13.8807 16 12.5V5.5H2Z',
    );
    this.addChild(path3);
    const path4 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path4.setData(
      'M2 5.5V12.5C2 13.8807 3.11929 15 4.5 15H13.5C14.8807 15 16 13.8807 16 12.5V5.5H2Z',
    );
    this.addChild(path4);
    const path5 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path5.setData(
      'M2 5.5V12.5C2 13.8807 3.11929 15 4.5 15H13.5C14.8807 15 16 13.8807 16 12.5V5.5H2Z',
    );
    this.addChild(path5);
    const path6 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path6.setData(
      'M16 5.5C16 4.11929 14.8807 3 13.5 3H4.5C3.11929 3 2 4.11929 2 5.5V6.5L8.74649 9.93097L8.82751 9.96932C8.96661 10.0205 9.12312 10.0077 9.25351 9.93097L16 6.5V5.5Z',
    );
    this.addChild(path6);
    this.useParams(params);
  }
}
