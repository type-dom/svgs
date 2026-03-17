import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from '@type-dom/framework';
export class FlDiamondFilledSvg extends TypeSvgSvg {
  className: 'FlDiamondFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = 'FlDiamondFilledSvg';
   addAttrObj(this, {
      name: 'FlDiamondFilledSvg'
    });
   addAttrObj(this, {
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M2.58586 11.414C1.80471 10.633 1.80471 9.36683 2.58586 8.58588L8.58752 2.58571C9.36867 1.80476 10.6352 1.80476 11.4163 2.58571L17.418 8.58588C18.1991 9.36683 18.1991 10.633 17.418 11.414L11.4163 17.4141C10.6352 18.1951 9.36867 18.1951 8.58753 17.4141L2.58586 11.414Z',
    );
    this.addChild(path0);
  }
}
