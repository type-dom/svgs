import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from '@type-dom/framework';
export class FlTableSearchFilledSvg extends TypeSvgSvg {
  className: 'FlTableSearchFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = 'FlTableSearchFilledSvg';
   addAttrObj(this, {
      name: 'FlTableSearchFilledSvg'
    });
   addAttrObj(this, {
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M13 17H14.5C15.8807 17 17 15.8807 17 14.5V13H13V17Z',
    );
    this.addChild(path0);
    const path1 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path1.setData(
      'M13 12V8H17V12H13Z',
    );
    this.addChild(path1);
    const path2 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path2.setData(
      'M12 12H8.74394C8.57189 11.5132 8.31846 11.0649 8 10.6713V8H12V12Z',
    );
    this.addChild(path2);
    const path3 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path3.setData(
      'M8.56144 15.4401L10.1213 17H12V13H8.97254C8.99068 13.1642 9 13.331 9 13.5C9 14.1947 8.84257 14.8527 8.56144 15.4401Z',
    );
    this.addChild(path3);
    const path4 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path4.setData(
      'M4.5 9C5.42507 9 6.28495 9.27914 7 9.75777V8H3V9.25606C3.46917 9.09023 3.97405 9 4.5 9Z',
    );
    this.addChild(path4);
    const path5 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path5.setData(
      'M13 7H17V5.5C17 4.11929 15.8807 3 14.5 3H13V7Z',
    );
    this.addChild(path5);
    const path6 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path6.setData(
      'M12 3V7H8V3H12Z',
    );
    this.addChild(path6);
    const path7 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path7.setData(
      'M7 3V7H3V5.5C3 4.11929 4.11929 3 5.5 3H7Z',
    );
    this.addChild(path7);
    const path8 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path8.setData(
      'M4.5 17C5.2862 17 6.01185 16.7408 6.59615 16.3031L9.14644 18.8535C9.3417 19.0488 9.65828 19.0488 9.85355 18.8535C10.0488 18.6583 10.0488 18.3417 9.85356 18.1464L7.30324 15.596C7.74082 15.0117 8 14.2861 8 13.5C8 11.567 6.433 10 4.5 10C2.567 10 1 11.567 1 13.5C1 15.433 2.567 17 4.5 17ZM4.5 16C3.11929 16 2 14.8807 2 13.5C2 12.1193 3.11929 11 4.5 11C5.88071 11 7 12.1193 7 13.5C7 14.8807 5.88071 16 4.5 16Z',
    );
    this.addChild(path8);
  }
}
