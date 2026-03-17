import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from '@type-dom/framework';
export class FlCursorFilledSvg extends TypeSvgSvg {
  className: 'FlCursorFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = 'FlCursorFilledSvg';
   addAttrObj(this, {
      name: 'FlCursorFilledSvg'
    });
   addAttrObj(this, {
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M6.63564 2.28655C5.98325 1.74939 5 2.21347 5 3.05854V17.0574C5 17.9835 6.15025 18.412 6.75622 17.7117L10.2799 13.6392C10.5648 13.3099 10.9788 13.1207 11.4142 13.1207L17.0061 13.1207C17.9444 13.1207 18.3661 11.9451 17.6418 11.3487L6.63564 2.28655Z',
    );
    this.addChild(path0);
  }
}
