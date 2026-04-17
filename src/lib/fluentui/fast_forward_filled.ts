import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";
export class FlFastForwardFilledSvg extends TypeSvgSvg {
  className: "FlFastForwardFilledSvg";
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "FlFastForwardFilledSvg";
    addAttrObj(this, {
      name: "FlFastForwardFilledSvg",
    });
    addAttrObj(this, {
      viewBox: "0 0 20 20",
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path0.setData(
      "M10.0183 5.48617C10.0183 4.66707 10.9491 4.19538 11.6097 4.67976L17.4893 8.99146C18.1703 9.4909 18.1703 10.508 17.4893 11.0075L11.6097 15.3192C10.9491 15.8036 10.0183 15.3319 10.0183 14.5128V11.3528L4.60967 15.3192C3.94915 15.8036 3.01831 15.3319 3.01831 14.5128V5.48617C3.01831 4.66707 3.94915 4.19538 4.60967 4.67976L10.0183 8.6461V5.48617Z",
    );
    this.addChild(path0);
  }
}
