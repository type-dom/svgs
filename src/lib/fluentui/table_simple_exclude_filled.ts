import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";
export class FlTableSimpleExcludeFilledSvg extends TypeSvgSvg {
  className: "FlTableSimpleExcludeFilledSvg";
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "FlTableSimpleExcludeFilledSvg";
    addAttrObj(this, {
      name: "FlTableSimpleExcludeFilledSvg",
    });
    addAttrObj(this, {
      viewBox: "0 0 20 20",
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path0.setData(
      "M4.5 2H8V8H2V4.5C2 3.11929 3.11929 2 4.5 2ZM2 9V12.5C2 13.8807 3.11929 15 4.5 15H8V9H2ZM15 8V4.5C15 3.11929 13.8807 2 12.5 2H9V8H15ZM11 13C11 11.8954 11.8954 11 13 11H17C18.1046 11 19 11.8954 19 13V17C19 18.1046 18.1046 19 17 19H13C11.8954 19 11 18.1046 11 17V13Z",
    );
    this.addChild(path0);
  }
}
