import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from '@type-dom/framework';
export class FlBeakerFilledSvg extends TypeSvgSvg {
  className: 'FlBeakerFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = 'FlBeakerFilledSvg';
   addAttrObj(this, {
      name: 'FlBeakerFilledSvg'
    });
   addAttrObj(this, {
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M5.5 3.5C5.5 3.22386 5.72386 3 6 3H14C14.2761 3 14.5 3.22386 14.5 3.5C14.5 3.77614 14.2761 4 14 4H13.0044V8.68387C13.0044 9.26343 13.1484 9.83392 13.4233 10.3441L14.3155 12H5.68488L6.57568 10.3466C6.85055 9.83647 6.99444 9.26603 6.99444 8.68653V4H6C5.72386 4 5.5 3.77614 5.5 3.5ZM5.1461 13L4.18161 14.7901C3.6434 15.7891 4.3659 17.0016 5.50156 17.0016H14.4985C15.6338 17.0016 16.3574 15.7894 15.8189 14.7901L14.8544 13H5.1461Z',
    );
    this.addChild(path0);
  }
}
