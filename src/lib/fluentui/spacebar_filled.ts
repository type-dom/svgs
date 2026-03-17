import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from '@type-dom/framework';
export class FlSpacebarFilledSvg extends TypeSvgSvg {
  className: 'FlSpacebarFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = 'FlSpacebarFilledSvg';
   addAttrObj(this, {
      name: 'FlSpacebarFilledSvg'
    });
   addAttrObj(this, {
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M2.75 7.75C3.16421 7.75 3.5 8.08579 3.5 8.5V10.5H16.5V8.5C16.5 8.08579 16.8358 7.75 17.25 7.75C17.6642 7.75 18 8.08579 18 8.5V10.5C18 11.3284 17.3284 12 16.5 12H3.5C2.67157 12 2 11.3284 2 10.5V8.5C2 8.08579 2.33579 7.75 2.75 7.75Z',
    );
    this.addChild(path0);
  }
}
