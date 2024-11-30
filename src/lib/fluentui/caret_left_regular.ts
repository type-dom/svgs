import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlCaretLeftRegularSvg extends TypeSvgSvg {
  className: 'FlCaretLeftRegularSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlCaretLeftRegularSvg';
    this.attr.addObj({
      name: 'FlCaretLeftRegularSvg',
      title: 'FlCaretLeftRegularSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M11.372 14.9816C12.026 15.5098 13.0003 15.0444 13.0003 14.2037L13.0003 5.79681C13.0003 4.95613 12.026 4.49063 11.372 5.01887L6.64929 8.83333C5.90597 9.43371 5.90597 10.5668 6.64929 11.1672L11.372 14.9816ZM12.0003 5.79681L12.0003 14.2037L7.27763 10.3892C7.02985 10.1891 7.02985 9.81139 7.27763 9.61127L12.0003 5.79681Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
