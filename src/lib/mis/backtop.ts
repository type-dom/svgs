import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";
export class MisBacktopSvg extends TypeSvgSvg {
  className: "MisBacktopSvg";
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "MisBacktopSvg";
    addAttrObj(this, {
      name: "MisBacktopSvg",
    });
    addAttrObj(this, {
      viewBox: "0 0 24 24",
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path0.setData("M0 0h24v24H0z");
    this.addChild(path0);
    const path1 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path1.setData(
      "M2.88 18.054a35.9 35.9 0 0 1 8.531-16.32.8.8 0 0 1 1.178 0q.25.27.413.455a35.9 35.9 0 0 1 8.118 15.865c-2.141.451-4.34.747-6.584.874l-2.089 4.178a.5.5 0 0 1-.894 0l-2.089-4.178a44 44 0 0 1-6.584-.874m6.698-1.123 1.157.066L12 19.527l1.265-2.53 1.157-.066a42 42 0 0 0 4.227-.454A33.9 33.9 0 0 0 12 4.09a33.9 33.9 0 0 0-6.649 12.387q2.093.334 4.227.454M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2",
    );
    this.addChild(path1);
  }
}
