import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from '@type-dom/framework';
export class FlAlignEndVerticalRegularSvg extends TypeSvgSvg {
  className: 'FlAlignEndVerticalRegularSvg';
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = 'FlAlignEndVerticalRegularSvg';
   addAttrObj(this, {
      name: 'FlAlignEndVerticalRegularSvg'
    });
   addAttrObj(this, {
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M6 8C4.89543 8 4 8.89543 4 10V12C4 13.1046 4.89543 14 6 14H14C15.1046 14 16 13.1046 16 12V10C16 8.89543 15.1046 8 14 8H6ZM5 10C5 9.44772 5.44772 9 6 9H14C14.5523 9 15 9.44772 15 10V12C15 12.5523 14.5523 13 14 13H6C5.44772 13 5 12.5523 5 12V10Z',
    );
    this.addChild(path0);
    const path1 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path1.setData(
      'M2 16.5C2 16.2239 2.22386 16 2.5 16H17.5C17.7761 16 18 16.2239 18 16.5C18 16.7761 17.7761 17 17.5 17H2.5C2.22386 17 2 16.7761 2 16.5Z',
    );
    this.addChild(path1);
  }
}
