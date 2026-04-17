import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";
export class FlArrowTurnLeftDownFilledSvg extends TypeSvgSvg {
  className: "FlArrowTurnLeftDownFilledSvg";
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "FlArrowTurnLeftDownFilledSvg";
    addAttrObj(this, {
      name: "FlArrowTurnLeftDownFilledSvg",
    });
    addAttrObj(this, {
      viewBox: "0 0 20 20",
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path0.setData(
      "M3.21967 10.7197C2.92678 11.0126 2.92678 11.4874 3.21967 11.7803L7.21967 15.7803C7.51256 16.0732 7.98744 16.0732 8.28033 15.7803L12.2803 11.7803C12.5732 11.4874 12.5732 11.0126 12.2803 10.7197C11.9874 10.4268 11.5126 10.4268 11.2197 10.7197L8.5 13.4393V7C8.5 6.17157 9.17157 5.5 10 5.5L16.25 5.5C16.6642 5.5 17 5.16421 17 4.75C17 4.33579 16.6642 4 16.25 4L10 4C8.34315 4 7 5.34315 7 7L7 13.4393L4.28033 10.7197C3.98744 10.4268 3.51256 10.4268 3.21967 10.7197Z",
    );
    this.addChild(path0);
  }
}
