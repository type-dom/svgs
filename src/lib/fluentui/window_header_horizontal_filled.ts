import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlWindowHeaderHorizontalFilledSvg extends TypeSvgSvg {
  className: 'FlWindowHeaderHorizontalFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlWindowHeaderHorizontalFilledSvg';
    this.attr.addObj({
      name: 'FlWindowHeaderHorizontalFilledSvg',
      title: 'FlWindowHeaderHorizontalFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M3 5.5C3 4.11929 4.11929 3 5.5 3H14.5C15.8807 3 17 4.11929 17 5.5V14.5C17 15.8807 15.8807 17 14.5 17H5.5C4.11929 17 3 15.8807 3 14.5V5.5ZM4.5 7V14.5C4.5 15.0523 4.94771 15.5 5.5 15.5H14.5C15.0523 15.5 15.5 15.0523 15.5 14.5V7H4.5Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
