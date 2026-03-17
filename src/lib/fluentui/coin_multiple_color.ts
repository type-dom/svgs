import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from '@type-dom/framework';
export class FlCoinMultipleColorSvg extends TypeSvgSvg {
  className: 'FlCoinMultipleColorSvg';
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = 'FlCoinMultipleColorSvg';
   addAttrObj(this, {
      name: 'FlCoinMultipleColorSvg'
    });
   addAttrObj(this, {
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M16.0001 15.5C16.0001 17.433 13.3138 19 10.0001 19C6.68636 19 4.00007 17.433 4.00007 15.5C4.00007 13.567 4 13.5 4 13.5H16.0001C16.0001 13.5 16.0001 14.5963 16.0001 15.5Z',
    );
    this.addChild(path0);
    const path1 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path1.setData(
      'M16 13.5C16 15.433 13.3137 17 10 17C6.68629 17 4 15.433 4 13.5C4 11.567 6.68629 10 10 10C13.3137 10 16 11.567 16 13.5Z',
    );
    this.addChild(path1);
    const path2 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path2.setData(
      'M16.0001 11.5C16.0001 13.433 13.3138 15 10.0001 15C6.68636 15 4.00007 13.433 4.00007 11.5C4.00007 9.567 4 9.5 4 9.5H16.0001C16.0001 9.5 16.0001 10.5963 16.0001 11.5Z',
    );
    this.addChild(path2);
    const path3 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path3.setData(
      'M16 9.5C16 11.433 13.3137 13 10 13C6.68629 13 4 11.433 4 9.5C4 7.567 6.68629 6 10 6C13.3137 6 16 7.567 16 9.5Z',
    );
    this.addChild(path3);
    const path4 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path4.setData(
      'M16.0001 7.5C16.0001 9.433 13.3138 11 10.0001 11C6.68636 11 4.00007 9.433 4.00007 7.5C4.00007 5.567 4 5.5 4 5.5H16.0001C16.0001 5.5 16.0001 6.59628 16.0001 7.5Z',
    );
    this.addChild(path4);
    const path5 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path5.setData(
      'M16 5.5C16 7.433 13.3137 9 10 9C6.68629 9 4 7.433 4 5.5C4 3.567 6.68629 2 10 2C13.3137 2 16 3.567 16 5.5Z',
    );
    this.addChild(path5);
  }
}
