import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlPresenceDndFilledSvg extends TypeSvgSvg {
  className: 'FlPresenceDndFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlPresenceDndFilledSvg';
    this.attr.addObj({
      name: 'FlPresenceDndFilledSvg',
      title: 'FlPresenceDndFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM7 9H13C13.5523 9 14 9.44771 14 10C14 10.5523 13.5523 11 13 11H7C6.44772 11 6 10.5523 6 10C6 9.44771 6.44772 9 7 9Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
