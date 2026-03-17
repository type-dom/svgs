import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from '@type-dom/framework';
export class FlDocumentMarginsFilledSvg extends TypeSvgSvg {
  className: 'FlDocumentMarginsFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = 'FlDocumentMarginsFilledSvg';
   addAttrObj(this, {
      name: 'FlDocumentMarginsFilledSvg'
    });
   addAttrObj(this, {
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M6 2C4.89543 2 4 2.89543 4 4V16C4 17.1046 4.89543 18 6 18L6 14.5C6 14.2239 6.22386 14 6.5 14C6.77614 14 7 14.2239 7 14.5V18H13V14.5C13 14.2239 13.2239 14 13.5 14C13.7761 14 14 14.2239 14 14.5V18C15.1046 18 16 17.1046 16 16V4C16 2.89543 15.1046 2 14 2V5.5C14 5.77614 13.7761 6 13.5 6C13.2239 6 13 5.77614 13 5.5V2H7V5.5C7 5.77614 6.77614 6 6.5 6C6.22386 6 6 5.77614 6 5.5V2ZM6.5 13C6.22386 13 6 12.7761 6 12.5V7.5C6 7.22386 6.22386 7 6.5 7C6.77614 7 7 7.22386 7 7.5V12.5C7 12.7761 6.77614 13 6.5 13ZM13.5 13C13.2239 13 13 12.7761 13 12.5V7.5C13 7.22386 13.2239 7 13.5 7C13.7761 7 14 7.22386 14 7.5V12.5C14 12.7761 13.7761 13 13.5 13Z',
    );
    this.addChild(path0);
  }
}
