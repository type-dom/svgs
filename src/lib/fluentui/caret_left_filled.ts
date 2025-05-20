import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlCaretLeftFilledSvg extends TypeSvgSvg {
  className: 'FlCaretLeftFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlCaretLeftFilledSvg';
    this.attr.addObj({
      name: 'FlCaretLeftFilledSvg',
      title: 'FlCaretLeftFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M13.0003 14.2037C13.0003 15.0444 12.026 15.5098 11.372 14.9816L6.64929 11.1671C5.90597 10.5668 5.90597 9.4337 6.64929 8.83333L11.372 5.01887C12.026 4.49064 13.0003 4.95613 13.0003 5.79681L13.0003 14.2037Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
