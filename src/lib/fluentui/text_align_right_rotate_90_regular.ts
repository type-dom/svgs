import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from '@type-dom/framework';
export class FlTextAlignRightRotate90RegularSvg extends TypeSvgSvg {
  className: 'FlTextAlignRightRotate90RegularSvg';
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = 'FlTextAlignRightRotate90RegularSvg';
   addAttrObj(this, {
      name: 'FlTextAlignRightRotate90RegularSvg'
    });
   addAttrObj(this, {
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M15.5 6C15.7761 6 16 6.22386 16 6.5V17.5C16 17.7761 15.7761 18 15.5 18C15.2239 18 15 17.7761 15 17.5V6.5C15 6.22386 15.2239 6 15.5 6ZM10.5 2C10.7761 2 11 2.22386 11 2.5V17.5C11 17.7761 10.7761 18 10.5 18C10.2239 18 10 17.7761 10 17.5V2.5C10 2.22386 10.2239 2 10.5 2ZM6 9.5C6 9.22386 5.77614 9 5.5 9C5.22386 9 5 9.22386 5 9.5V17.5C5 17.7761 5.22386 18 5.5 18C5.77614 18 6 17.7761 6 17.5V9.5Z',
    );
    this.addChild(path0);
  }
}
