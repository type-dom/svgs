import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from '@type-dom/framework';
export class FlCaretDownRegularSvg extends TypeSvgSvg {
  className: 'FlCaretDownRegularSvg';
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = 'FlCaretDownRegularSvg';
   addAttrObj(this, {
      name: 'FlCaretDownRegularSvg'
    });
   addAttrObj(this, {
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M5.01887 8.62834C4.49064 7.97434 4.95612 7 5.79681 7H14.2037C15.0444 7 15.5098 7.97434 14.9816 8.62834L11.1672 13.351C10.5668 14.0943 9.43371 14.0943 8.83333 13.351L5.01887 8.62834ZM14.2037 8L5.79681 8L9.61127 12.7227C9.81139 12.9704 10.1891 12.9704 10.3892 12.7227L14.2037 8Z',
    );
    this.addChild(path0);
  }
}
