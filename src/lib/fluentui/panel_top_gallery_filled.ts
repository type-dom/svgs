import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from '@type-dom/framework';
export class FlPanelTopGalleryFilledSvg extends TypeSvgSvg {
  className: 'FlPanelTopGalleryFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = 'FlPanelTopGalleryFilledSvg';
   addAttrObj(this, {
      name: 'FlPanelTopGalleryFilledSvg'
    });
   addAttrObj(this, {
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M7 4H5C3.34315 4 2 5.34315 2 7V13C2 14.6569 3.34315 16 5 16H15C16.6569 16 18 14.6569 18 13V7C18 5.34315 16.6569 4 15 4H13V9H17V13C17 14.1046 16.1046 15 15 15H5C3.89543 15 3 14.1046 3 13V9H7V4ZM8 9H12V4H8V9Z',
    );
    this.addChild(path0);
  }
}
