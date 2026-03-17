import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from '@type-dom/framework';
export class FlNotebookSectionRegularSvg extends TypeSvgSvg {
  className: 'FlNotebookSectionRegularSvg';
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = 'FlNotebookSectionRegularSvg';
   addAttrObj(this, {
      name: 'FlNotebookSectionRegularSvg'
    });
   addAttrObj(this, {
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M14 2.5C14 2.22386 13.7761 2 13.5 2C13.2239 2 13 2.22386 13 2.5V3H8C6.89543 3 6 3.89543 6 5V15C6 16.1046 6.89543 17 8 17H13V17.5C13 17.7761 13.2239 18 13.5 18C13.7761 18 14 17.7761 14 17.5V2.5ZM13 16H8C7.44772 16 7 15.5523 7 15V5C7 4.44772 7.44772 4 8 4H13V16Z',
    );
    this.addChild(path0);
  }
}
