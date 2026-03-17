import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from '@type-dom/framework';
export class FlPresenceUnknownRegularSvg extends TypeSvgSvg {
  className: 'FlPresenceUnknownRegularSvg';
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = 'FlPresenceUnknownRegularSvg';
   addAttrObj(this, {
      name: 'FlPresenceUnknownRegularSvg'
    });
   addAttrObj(this, {
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M9.99738 2C5.58055 2 2 5.58055 2 9.99738C2 14.4142 5.58055 17.9948 9.99738 17.9948C14.4142 17.9948 17.9948 14.4142 17.9948 9.99738C17.9948 5.58055 14.4142 2 9.99738 2ZM0 9.99738C0 4.47598 4.47598 0 9.99738 0C15.5188 0 19.9948 4.47598 19.9948 9.99738C19.9948 15.5188 15.5188 19.9948 9.99738 19.9948C4.47598 19.9948 0 15.5188 0 9.99738Z',
    );
    this.addChild(path0);
  }
}
