import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from '@type-dom/framework';
export class FlBookmarkFilledSvg extends TypeSvgSvg {
  className: 'FlBookmarkFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = 'FlBookmarkFilledSvg';
   addAttrObj(this, {
      name: 'FlBookmarkFilledSvg'
    });
   addAttrObj(this, {
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M4 4.5C4 3.11929 5.11929 2 6.5 2H13.5C14.8807 2 16 3.11929 16 4.5V17.5C16 17.6881 15.8945 17.8602 15.7269 17.9456C15.5593 18.0309 15.358 18.015 15.2059 17.9044L10 14.1183L4.79409 17.9044C4.64199 18.015 4.4407 18.0309 4.27311 17.9456C4.10553 17.8602 4 17.6881 4 17.5V4.5Z',
    );
    this.addChild(path0);
  }
}
