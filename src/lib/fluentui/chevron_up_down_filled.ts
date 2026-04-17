import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";
export class FlChevronUpDownFilledSvg extends TypeSvgSvg {
  className: "FlChevronUpDownFilledSvg";
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "FlChevronUpDownFilledSvg";
    addAttrObj(this, {
      name: "FlChevronUpDownFilledSvg",
    });
    addAttrObj(this, {
      viewBox: "0 0 20 20",
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path0.setData(
      "M10.5303 2.71967C10.2374 2.42678 9.76256 2.42678 9.46967 2.71967L5.21967 6.96967C4.92678 7.26256 4.92678 7.73744 5.21967 8.03033C5.51256 8.32322 5.98744 8.32322 6.28033 8.03033L10 4.31066L13.7197 8.03033C14.0126 8.32322 14.4874 8.32322 14.7803 8.03033C15.0732 7.73744 15.0732 7.26256 14.7803 6.96967L10.5303 2.71967ZM14.7803 13.0303L10.5303 17.2803C10.2374 17.5732 9.76256 17.5732 9.46967 17.2803L5.21967 13.0303C4.92678 12.7374 4.92678 12.2626 5.21967 11.9697C5.51256 11.6768 5.98744 11.6768 6.28033 11.9697L10 15.6893L13.7197 11.9697C14.0126 11.6768 14.4874 11.6768 14.7803 11.9697C15.0732 12.2626 15.0732 12.7374 14.7803 13.0303Z",
    );
    this.addChild(path0);
  }
}
