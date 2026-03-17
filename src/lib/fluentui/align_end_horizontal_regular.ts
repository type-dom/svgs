import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from '@type-dom/framework';
export class FlAlignEndHorizontalRegularSvg extends TypeSvgSvg {
  className: 'FlAlignEndHorizontalRegularSvg';
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = 'FlAlignEndHorizontalRegularSvg';
   addAttrObj(this, {
      name: 'FlAlignEndHorizontalRegularSvg'
    });
   addAttrObj(this, {
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M16.5 18C16.2239 18 16 17.7761 16 17.5V2.5C16 2.22386 16.2239 2 16.5 2C16.7761 2 17 2.22386 17 2.5V17.5C17 17.7761 16.7761 18 16.5 18Z',
    );
    this.addChild(path0);
    const path1 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path1.setData(
      'M10 4C8.89543 4 8 4.89543 8 6V14C8 15.1046 8.89543 16 10 16H12C13.1046 16 14 15.1046 14 14V6C14 4.89543 13.1046 4 12 4H10ZM9 6C9 5.44772 9.44772 5 10 5H12C12.5523 5 13 5.44772 13 6V14C13 14.5523 12.5523 15 12 15H10C9.44772 15 9 14.5523 9 14V6Z',
    );
    this.addChild(path1);
  }
}
