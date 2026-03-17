import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from '@type-dom/framework';
export class FlAddRegularSvg extends TypeSvgSvg {
  className: 'FlAddRegularSvg';
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = 'FlAddRegularSvg';
   addAttrObj(this, {
      name: 'FlAddRegularSvg'
    });
   addAttrObj(this, {
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M10 2.5C10 2.22386 9.77614 2 9.5 2C9.22386 2 9 2.22386 9 2.5V9H2.5C2.22386 9 2 9.22386 2 9.5C2 9.77614 2.22386 10 2.5 10H9V16.5C9 16.7761 9.22386 17 9.5 17C9.77614 17 10 16.7761 10 16.5V10H16.5C16.7761 10 17 9.77614 17 9.5C17 9.22386 16.7761 9 16.5 9H10V2.5Z',
    );
    this.addChild(path0);
  }
}
