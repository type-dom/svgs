import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlTableFreezeColumnAndRowFilledSvg extends TypeSvgSvg {
  className: 'FlTableFreezeColumnAndRowFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlTableFreezeColumnAndRowFilledSvg';
    this.attr.addObj({
      name: 'FlTableFreezeColumnAndRowFilledSvg',
      title: 'FlTableFreezeColumnAndRowFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M17 5.5C17 4.11929 15.8807 3 14.5 3H5.5C4.11929 3 3 4.11929 3 5.5L3 12H7V8H4V5.5C4 4.67157 4.67157 4 5.5 4H14.5C15.3284 4 16 4.67157 16 5.5V14.5C16 15.3284 15.3284 16 14.5 16L12 16V13H8V17L14.5 17C15.8807 17 17 15.8807 17 14.5V5.5ZM3 14.5V13H7V17H5.5C4.11929 17 3 15.8807 3 14.5ZM8 8V12H12V8H8Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
