import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from '@type-dom/framework';
export class FlAlignStartVerticalFilledSvg extends TypeSvgSvg {
  className: 'FlAlignStartVerticalFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = 'FlAlignStartVerticalFilledSvg';
   addAttrObj(this, {
      name: 'FlAlignStartVerticalFilledSvg'
    });
   addAttrObj(this, {
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M2.5 3C2.22386 3 2 3.22386 2 3.5C2 3.77614 2.22386 4 2.5 4H17.5C17.7761 4 18 3.77614 18 3.5C18 3.22386 17.7761 3 17.5 3H2.5Z',
    );
    this.addChild(path0);
    const path1 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path1.setData(
      'M6 6C4.89543 6 4 6.89543 4 8V10C4 11.1046 4.89543 12 6 12H14C15.1046 12 16 11.1046 16 10V8C16 6.89543 15.1046 6 14 6H6Z',
    );
    this.addChild(path1);
  }
}
