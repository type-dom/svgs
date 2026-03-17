import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from '@type-dom/framework';
export class FlAddFilledSvg extends TypeSvgSvg {
  className: 'FlAddFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = 'FlAddFilledSvg';
   addAttrObj(this, {
      name: 'FlAddFilledSvg'
    });
   addAttrObj(this, {
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M10.5 2.75C10.5 2.33579 10.1642 2 9.75 2C9.33579 2 9 2.33579 9 2.75V9H2.75C2.33579 9 2 9.33579 2 9.75C2 10.1642 2.33579 10.5 2.75 10.5H9V16.75C9 17.1642 9.33579 17.5 9.75 17.5C10.1642 17.5 10.5 17.1642 10.5 16.75V10.5H16.75C17.1642 10.5 17.5 10.1642 17.5 9.75C17.5 9.33579 17.1642 9 16.75 9H10.5V2.75Z',
    );
    this.addChild(path0);
  }
}
