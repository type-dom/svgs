import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlCaretDownRightFilledSvg extends TypeSvgSvg {
  className: 'FlCaretDownRightFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlCaretDownRightFilledSvg';
    this.attr.addObj({
      name: 'FlCaretDownRightFilledSvg',
      title: 'FlCaretDownRightFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M15 5.95708C15 5.06618 13.9228 4.62001 13.2929 5.24998L5.24998 13.2929C4.62001 13.9228 5.06618 15 5.95708 15H13.5C14.3284 15 15 14.3284 15 13.5V5.95708Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
