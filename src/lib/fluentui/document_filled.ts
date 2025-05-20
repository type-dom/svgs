import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlDocumentFilledSvg extends TypeSvgSvg {
  className: 'FlDocumentFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlDocumentFilledSvg';
    this.attr.addObj({
      name: 'FlDocumentFilledSvg',
      title: 'FlDocumentFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M10 2V6.5C10 7.32843 10.6716 8 11.5 8H16V16.5C16 17.3284 15.3284 18 14.5 18H5.5C4.67157 18 4 17.3284 4 16.5V3.5C4 2.67157 4.67157 2 5.5 2H10ZM11 2.25V6.5C11 6.77614 11.2239 7 11.5 7H15.75L11 2.25Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
