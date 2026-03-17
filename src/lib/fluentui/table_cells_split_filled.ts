import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from '@type-dom/framework';
export class FlTableCellsSplitFilledSvg extends TypeSvgSvg {
  className: 'FlTableCellsSplitFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = 'FlTableCellsSplitFilledSvg';
   addAttrObj(this, {
      name: 'FlTableCellsSplitFilledSvg'
    });
   addAttrObj(this, {
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M10 6H17V5.5C17 4.11929 15.8807 3 14.5 3H10V6ZM17 13V7H3V13H17ZM10 8V12H9V8H10ZM10 17H14.5C15.8807 17 17 15.8807 17 14.5V14H10V17ZM9 14H3V14.5C3 15.8807 4.11929 17 5.5 17H9V14ZM9 6V3H5.5C4.11929 3 3 4.11929 3 5.5V6H9Z',
    );
    this.addChild(path0);
  }
}
