import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from '@type-dom/framework';
export class FlBenchRegularSvg extends TypeSvgSvg {
  className: 'FlBenchRegularSvg';
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = 'FlBenchRegularSvg';
   addAttrObj(this, {
      name: 'FlBenchRegularSvg'
    });
   addAttrObj(this, {
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M3 6C3 4.89543 3.89543 4 5 4H15C16.1046 4 17 4.89543 17 6V10C18.1046 10 19 10.8954 19 12C19 13.1046 18.1046 14 17 14V15.5C17 15.7761 16.7761 16 16.5 16C16.2239 16 16 15.7761 16 15.5V14H4V15.5C4 15.7761 3.77614 16 3.5 16C3.22386 16 3 15.7761 3 15.5L3 14C1.89543 14 1 13.1046 1 12C1 10.8954 1.89543 10 3 10V6ZM17 13C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11H3C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H17ZM16 6C16 5.44772 15.5523 5 15 5H5C4.44772 5 4 5.44772 4 6V10H16V6Z',
    );
    this.addChild(path0);
  }
}
