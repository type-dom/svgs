import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";
export class FlLineRegularSvg extends TypeSvgSvg {
  className: "FlLineRegularSvg";
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "FlLineRegularSvg";
    addAttrObj(this, {
      name: "FlLineRegularSvg",
    });
    addAttrObj(this, {
      viewBox: "0 0 20 20",
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path0.setData(
      "M17.8536 2.14938C18.0488 2.34464 18.0488 2.66122 17.8536 2.85648L2.85355 17.8565C2.65829 18.0517 2.34171 18.0517 2.14645 17.8565C1.95118 17.6612 1.95118 17.3446 2.14645 17.1494L17.1464 2.14938C17.3417 1.95411 17.6583 1.95411 17.8536 2.14938Z",
    );
    this.addChild(path0);
  }
}
