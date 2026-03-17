import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from '@type-dom/framework';
export class FlCaretDownRightRegularSvg extends TypeSvgSvg {
  className: 'FlCaretDownRightRegularSvg';
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = 'FlCaretDownRightRegularSvg';
   addAttrObj(this, {
      name: 'FlCaretDownRightRegularSvg'
    });
   addAttrObj(this, {
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M13.2929 5.24998C13.9228 4.62001 15 5.06618 15 5.95708V13.5C15 14.3284 14.3284 15 13.5 15H5.95708C5.06618 15 4.62001 13.9228 5.24998 13.2929L13.2929 5.24998ZM14 5.95708L5.95708 14H13.5C13.7761 14 14 13.7761 14 13.5V5.95708Z',
    );
    this.addChild(path0);
  }
}
