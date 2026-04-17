import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";
export class FlCellularData5FilledSvg extends TypeSvgSvg {
  className: "FlCellularData5FilledSvg";
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "FlCellularData5FilledSvg";
    addAttrObj(this, {
      name: "FlCellularData5FilledSvg",
    });
    addAttrObj(this, {
      viewBox: "0 0 20 20",
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path0.setData(
      "M4.75037 12C5.12711 12 5.439 12.2776 5.4926 12.6395L5.50073 12.7504V15.2528C5.50073 15.6673 5.16478 16.0032 4.75037 16.0032C4.37362 16.0032 4.06173 15.7256 4.00814 15.3637L4 15.2528V12.7504C4 12.336 4.33595 12 4.75037 12Z",
    );
    this.addChild(path0);
  }
}
