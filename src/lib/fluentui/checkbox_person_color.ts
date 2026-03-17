import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from '@type-dom/framework';
export class FlCheckboxPersonColorSvg extends TypeSvgSvg {
  className: 'FlCheckboxPersonColorSvg';
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = 'FlCheckboxPersonColorSvg';
   addAttrObj(this, {
      name: 'FlCheckboxPersonColorSvg'
    });
   addAttrObj(this, {
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M3 6.25C3 4.45507 4.45507 3 6.25 3H13.75C15.5449 3 17 4.45507 17 6.25V13.75C17 15.5449 15.5449 17 13.75 17H6.25C4.45507 17 3 15.5449 3 13.75V6.25Z',
    );
    this.addChild(path0);
    const path1 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path1.setData(
      'M3 6.25C3 4.45507 4.45507 3 6.25 3H13.75C15.5449 3 17 4.45507 17 6.25V13.75C17 15.5449 15.5449 17 13.75 17H6.25C4.45507 17 3 15.5449 3 13.75V6.25Z',
    );
    this.addChild(path1);
    const path2 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path2.setData(
      'M3 6.25C3 4.45507 4.45507 3 6.25 3H13.75C15.5449 3 17 4.45507 17 6.25V13.75C17 15.5449 15.5449 17 13.75 17H6.25C4.45507 17 3 15.5449 3 13.75V6.25Z',
    );
    this.addChild(path2);
    const path3 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path3.setData(
      'M13.8536 7.85355C14.0488 7.65829 14.0488 7.34171 13.8536 7.14645C13.6583 6.95118 13.3417 6.95118 13.1464 7.14645L8.5 11.7929L6.85355 10.1464C6.65829 9.95118 6.34171 9.95118 6.14645 10.1464C5.95118 10.3417 5.95118 10.6583 6.14645 10.8536L8.14645 12.8536C8.34171 13.0488 8.65829 13.0488 8.85355 12.8536L13.8536 7.85355Z',
    );
    this.addChild(path3);
    const path4 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path4.setData(
      'M19 16.5C19 17.7452 18 19 15.5 19C13 19 12 17.7499 12 16.5C12 15.6716 12.6716 15 13.5 15H17.5C18.3284 15 19 15.6716 19 16.5Z',
    );
    this.addChild(path4);
    const path5 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path5.setData(
      'M19 16.5C19 17.7452 18 19 15.5 19C13 19 12 17.7499 12 16.5C12 15.6716 12.6716 15 13.5 15H17.5C18.3284 15 19 15.6716 19 16.5Z',
    );
    this.addChild(path5);
    const path6 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path6.setData(
      'M17.5 12C17.5 13.1046 16.6046 14 15.5 14C14.3954 14 13.5 13.1046 13.5 12C13.5 10.8954 14.3954 10 15.5 10C16.6046 10 17.5 10.8954 17.5 12Z',
    );
    this.addChild(path6);
  }
}
