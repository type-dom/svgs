import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";
export class FlArrowReplyDownFilledSvg extends TypeSvgSvg {
  className: "FlArrowReplyDownFilledSvg";
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "FlArrowReplyDownFilledSvg";
    addAttrObj(this, {
      name: "FlArrowReplyDownFilledSvg",
    });
    addAttrObj(this, {
      viewBox: "0 0 20 20",
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path0.setData(
      "M17.25 4C17.6642 4 18 4.33579 18 4.75C18 8.75406 14.7541 12 10.75 12H4.56066L7.78033 15.2197C8.07322 15.5126 8.07322 15.9874 7.78033 16.2803C7.48744 16.5732 7.01256 16.5732 6.71967 16.2803L2.21967 11.7803C1.92678 11.4874 1.92678 11.0126 2.21967 10.7197L6.71967 6.21967C7.01256 5.92678 7.48744 5.92678 7.78033 6.21967C8.07322 6.51256 8.07322 6.98744 7.78033 7.28033L4.56066 10.5H10.75C13.9256 10.5 16.5 7.92564 16.5 4.75C16.5 4.33579 16.8358 4 17.25 4Z",
    );
    this.addChild(path0);
  }
}
