import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from '@type-dom/framework';
export class FlDocumentColorSvg extends TypeSvgSvg {
  className: 'FlDocumentColorSvg';
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = 'FlDocumentColorSvg';
   addAttrObj(this, {
      name: 'FlDocumentColorSvg'
    });
   addAttrObj(this, {
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M10 2L12 6L16 8V16.5C16 17.3284 15.3284 18 14.5 18H5.5C4.67157 18 4 17.3284 4 16.5V3.5C4 2.67157 4.67157 2 5.5 2H10Z',
    );
    this.addChild(path0);
    const path1 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path1.setData(
      'M10 2L12 6L16 8V16.5C16 17.3284 15.3284 18 14.5 18H5.5C4.67157 18 4 17.3284 4 16.5V3.5C4 2.67157 4.67157 2 5.5 2H10Z',
    );
    this.addChild(path1);
    const path2 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path2.setData(
      'M10.01 6.5V2L16.01 8H11.51C10.6816 8 10.01 7.32843 10.01 6.5Z',
    );
    this.addChild(path2);
  }
}
