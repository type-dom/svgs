import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";
export class FlEraserToolFilledSvg extends TypeSvgSvg {
  className: "FlEraserToolFilledSvg";
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "FlEraserToolFilledSvg";
    addAttrObj(this, {
      name: "FlEraserToolFilledSvg",
    });
    addAttrObj(this, {
      viewBox: "0 0 20 20",
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path0.setData(
      "M4 2.5C4 2.22386 3.77614 2 3.5 2C3.22386 2 3 2.22386 3 2.5V14.5C3 16.433 4.567 18 6.5 18H13.5C15.433 18 17 16.433 17 14.5V2.5C17 2.22386 16.7761 2 16.5 2C16.2239 2 16 2.22386 16 2.5V6H4V2.5ZM4 10V7H16V10H4Z",
    );
    this.addChild(path0);
  }
}
