import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";
export class FlCaretDownFilledSvg extends TypeSvgSvg {
  className: "FlCaretDownFilledSvg";
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "FlCaretDownFilledSvg";
    addAttrObj(this, {
      name: "FlCaretDownFilledSvg",
    });
    addAttrObj(this, {
      viewBox: "0 0 20 20",
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path0.setData(
      "M5.79681 7C4.95612 7 4.49064 7.97434 5.01887 8.62834L8.83333 13.351C9.43371 14.0943 10.5668 14.0943 11.1672 13.351L14.9816 8.62834C15.5098 7.97434 15.0444 7 14.2037 7H5.79681Z",
    );
    this.addChild(path0);
  }
}
