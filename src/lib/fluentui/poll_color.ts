import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from '@type-dom/framework';
export class FlPollColorSvg extends TypeSvgSvg {
  className: 'FlPollColorSvg';
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = 'FlPollColorSvg';
   addAttrObj(this, {
      name: 'FlPollColorSvg'
    });
   addAttrObj(this, {
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M8 4C8 2.89543 8.89543 2 10 2C11.1046 2 12 2.89543 12 4V16C12 17.1046 11.1046 18 10 18C8.89543 18 8 17.1046 8 16V4Z',
    );
    this.addChild(path0);
    const path1 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path1.setData(
      'M14 8C14 6.89543 14.8954 6 16 6C17.1046 6 18 6.89543 18 8V16C18 17.1046 17.1046 18 16 18C14.8954 18 14 17.1046 14 16V8Z',
    );
    this.addChild(path1);
    const path2 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path2.setData(
      'M2 12C2 10.8954 2.89543 10 4 10C5.10457 10 6 10.8954 6 12V16C6 17.1046 5.10457 18 4 18C2.89543 18 2 17.1046 2 16V12Z',
    );
    this.addChild(path2);
  }
}
