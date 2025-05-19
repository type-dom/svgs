import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlTextboxAlignTopRightFilledSvg extends TypeSvgSvg {
  className: 'FlTextboxAlignTopRightFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlTextboxAlignTopRightFilledSvg';
    this.attr.addObj({
      name: 'FlTextboxAlignTopRightFilledSvg',
      title: 'FlTextboxAlignTopRightFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M5.5 3C4.11929 3 3 4.11929 3 5.5V14.5C3 15.8807 4.11929 17 5.5 17H14.5C15.8807 17 17 15.8807 17 14.5V5.5C17 4.11929 15.8807 3 14.5 3H5.5ZM13.5 6C13.7761 6 14 6.22386 14 6.5C14 6.77614 13.7761 7 13.5 7H6.5C6.22386 7 6 6.77614 6 6.5C6 6.22386 6.22386 6 6.5 6H13.5ZM13.5 9C13.7761 9 14 9.22386 14 9.5C14 9.77614 13.7761 10 13.5 10H8.5C8.22386 10 8 9.77614 8 9.5C8 9.22386 8.22386 9 8.5 9H13.5Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
