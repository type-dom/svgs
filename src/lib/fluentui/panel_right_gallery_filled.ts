import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlPanelRightGalleryFilledSvg extends TypeSvgSvg {
  className: 'FlPanelRightGalleryFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlPanelRightGalleryFilledSvg';
    this.attr.addObj({
      name: 'FlPanelRightGalleryFilledSvg',
      title: 'FlPanelRightGalleryFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M18 6C18 4.34314 16.6562 3 15 3H5C3.34375 3 2 4.34314 2 6V13C2 14.6569 3.34375 16 5 16H15C16.6562 16 18 14.6569 18 13V12H13V15H5C3.89453 15 3 14.1046 3 13V6C3 4.89539 3.89453 4 5 4H13V7H18V6ZM18 8H13V11H18V8Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
