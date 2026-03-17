import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from '@type-dom/framework';
export class FlTextAlignJustifyLowRotate90FilledSvg extends TypeSvgSvg {
  className: 'FlTextAlignJustifyLowRotate90FilledSvg';
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = 'FlTextAlignJustifyLowRotate90FilledSvg';
   addAttrObj(this, {
      name: 'FlTextAlignJustifyLowRotate90FilledSvg'
    });
   addAttrObj(this, {
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M15.5 9C15.9142 9 16.25 9.33579 16.25 9.75V17.25C16.25 17.6642 15.9142 18 15.5 18C15.0858 18 14.75 17.6642 14.75 17.25V9.75C14.75 9.33579 15.0858 9 15.5 9ZM10.5 9C10.9142 9 11.25 9.33579 11.25 9.75V17.25C11.25 17.6642 10.9142 18 10.5 18C10.0858 18 9.75 17.6642 9.75 17.25V9.75C9.75 9.33579 10.0858 9 10.5 9ZM6.25 2.75C6.25 2.33579 5.91421 2 5.5 2C5.08579 2 4.75 2.33579 4.75 2.75V17.25C4.75 17.6642 5.08579 18 5.5 18C5.91421 18 6.25 17.6642 6.25 17.25V2.75Z',
    );
    this.addChild(path0);
  }
}
