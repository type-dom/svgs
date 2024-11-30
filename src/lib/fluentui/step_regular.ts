import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlStepRegularSvg extends TypeSvgSvg {
  className: 'FlStepRegularSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlStepRegularSvg';
    this.attr.addObj({
      name: 'FlStepRegularSvg',
      title: 'FlStepRegularSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M12 3C12 2.44772 12.4477 2 13 2H17C17.5523 2 18 2.44772 18 3V15C18 16.6569 16.6569 18 15 18H3C2.44772 18 2 17.5523 2 17V13C2 12.4477 2.44772 12 3 12H7V8C7 7.44772 7.44772 7 8 7H12V3ZM17 3H13V7C13 7.55228 12.5523 8 12 8H8V12C8 12.5523 7.55228 13 7 13H3V17H15C16.1046 17 17 16.1046 17 15V3Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
