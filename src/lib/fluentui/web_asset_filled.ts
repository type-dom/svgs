import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlWebAssetFilledSvg extends TypeSvgSvg {
  className: 'FlWebAssetFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlWebAssetFilledSvg';
    this.attr.addObj({
      name: 'FlWebAssetFilledSvg',
      title: 'FlWebAssetFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M3 6C3 4.34315 4.34315 3 6 3H14C15.6569 3 17 4.34315 17 6V14C17 15.6569 15.6569 17 14 17H6C4.34315 17 3 15.6569 3 14V6ZM6.5 6C6.22386 6 6 6.22386 6 6.5C6 6.77614 6.22386 7 6.5 7H13.5C13.7761 7 14 6.77614 14 6.5C14 6.22386 13.7761 6 13.5 6H6.5Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
