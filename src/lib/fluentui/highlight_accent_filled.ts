import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlHighlightAccentFilledSvg extends TypeSvgSvg {
  className: 'FlHighlightAccentFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlHighlightAccentFilledSvg';
    this.attr.addObj({
      name: 'FlHighlightAccentFilledSvg',
      title: 'FlHighlightAccentFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M16.5 3V7C16.5 7.27614 16.2761 7.5 16 7.5H4C3.72386 7.5 3.5 7.27614 3.5 7V3H16.5ZM6.5 10.5V17.5L12.9472 14.3944C13.286 14.225 13.5 13.8788 13.5 13.5V10.5H6.5Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
