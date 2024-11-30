import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlWindowColumnOneFourthLeftFocusLeftFilledSvg extends TypeSvgSvg {
  className: 'FlWindowColumnOneFourthLeftFocusLeftFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlWindowColumnOneFourthLeftFocusLeftFilledSvg';
    this.attr.addObj({
      name: 'FlWindowColumnOneFourthLeftFocusLeftFilledSvg',
      title: 'FlWindowColumnOneFourthLeftFocusLeftFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M5.5 3C4.11929 3 3 4.11929 3 5.5V14.5C3 15.8807 4.11929 17 5.5 17H14.5C15.8807 17 17 15.8807 17 14.5V5.5C17 4.11929 15.8807 3 14.5 3H5.5ZM4 5.5C4 4.67157 4.67157 4 5.5 4H14.5C15.3284 4 16 4.67157 16 5.5V6H4V5.5ZM7 7H16V14.5C16 15.3284 15.3284 16 14.5 16H7V7Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
