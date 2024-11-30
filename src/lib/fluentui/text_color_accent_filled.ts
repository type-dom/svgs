import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlTextColorAccentFilledSvg extends TypeSvgSvg {
  className: 'FlTextColorAccentFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlTextColorAccentFilledSvg';
    this.attr.addObj({
      name: 'FlTextColorAccentFilledSvg',
      title: 'FlTextColorAccentFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M3.5 13.125C3.5 12.7798 3.74251 12.5 4.04167 12.5H15.9583C16.2575 12.5 16.5 12.7798 16.5 13.125V16.875C16.5 17.2202 16.2575 17.5 15.9583 17.5H4.04167C3.74251 17.5 3.5 17.2202 3.5 16.875V13.125Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
