import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from '@type-dom/framework';
export class FlSlashForwardFilledSvg extends TypeSvgSvg {
  className: 'FlSlashForwardFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = 'FlSlashForwardFilledSvg';
   addAttrObj(this, {
      name: 'FlSlashForwardFilledSvg'
    });
   addAttrObj(this, {
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M13.0162 2.04877C13.4035 2.19567 13.5984 2.62872 13.4515 3.01601L7.95145 17.516C7.80455 17.9033 7.3715 18.0982 6.98421 17.9513C6.59692 17.8044 6.40205 17.3713 6.54895 16.984L12.049 2.48403C12.1959 2.09674 12.6289 1.90187 13.0162 2.04877Z',
    );
    this.addChild(path0);
  }
}
