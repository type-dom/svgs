import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";
export class FlReOrderRegularSvg extends TypeSvgSvg {
  className: "FlReOrderRegularSvg";
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "FlReOrderRegularSvg";
    addAttrObj(this, {
      name: "FlReOrderRegularSvg",
    });
    addAttrObj(this, {
      viewBox: "0 0 20 20",
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path0.setData(
      "M2.5 8C2.22386 8 2 8.22386 2 8.5C2 8.77614 2.22386 9 2.5 9H17.5C17.7761 9 18 8.77614 18 8.5C18 8.22386 17.7761 8 17.5 8H2.5ZM2.5 11C2.22386 11 2 11.2239 2 11.5C2 11.7761 2.22386 12 2.5 12H17.5C17.7761 12 18 11.7761 18 11.5C18 11.2239 17.7761 11 17.5 11H2.5Z",
    );
    this.addChild(path0);
  }
}
