import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";
export class FlPreviousFrameFilledSvg extends TypeSvgSvg {
  className: "FlPreviousFrameFilledSvg";
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "FlPreviousFrameFilledSvg";
    addAttrObj(this, {
      name: "FlPreviousFrameFilledSvg",
    });
    addAttrObj(this, {
      viewBox: "0 0 20 20",
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path0.setData(
      "M15.5002 3C15.2241 3 15.0002 3.22386 15.0002 3.5V16.5C15.0002 16.7761 15.2241 17 15.5002 17C15.7764 17 16.0002 16.7761 16.0002 16.5V3.5C16.0002 3.22386 15.7764 3 15.5002 3ZM10.0534 3.21436C10.8838 2.65676 12.0002 3.25186 12.0002 4.25211V15.7521C12.0002 16.7562 10.876 17.3505 10.0462 16.785L1.54698 10.9921C0.815925 10.4938 0.819658 9.41464 1.55415 8.92144L10.0534 3.21436Z",
    );
    this.addChild(path0);
  }
}
