import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";
export class FlTextIndentIncreaseLtrRotate270RegularSvg extends TypeSvgSvg {
  className: "FlTextIndentIncreaseLtrRotate270RegularSvg";
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "FlTextIndentIncreaseLtrRotate270RegularSvg";
    addAttrObj(this, {
      name: "FlTextIndentIncreaseLtrRotate270RegularSvg",
    });
    addAttrObj(this, {
      viewBox: "0 0 20 20",
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path0.setData(
      "M10 2C10.2761 2 10.5 2.22386 10.5 2.5V12.5C10.5 12.7761 10.2761 13 10 13C9.72386 13 9.5 12.7761 9.5 12.5V2.5C9.5 2.22386 9.72386 2 10 2ZM6 5.5C6 5.22386 5.77614 5 5.5 5C5.22386 5 5 5.22386 5 5.5V12.5C5 12.7761 5.22386 13 5.5 13C5.77614 13 6 12.7761 6 12.5V5.5ZM15 5.5C15 5.22386 14.7761 5 14.5 5C14.2239 5 14 5.22386 14 5.5V12.5C14 12.7761 14.2239 13 14.5 13C14.7761 13 15 12.7761 15 12.5V5.5ZM11.1464 17.3536C11.3417 17.5488 11.6583 17.5488 11.8536 17.3536C12.0488 17.1583 12.0488 16.8417 11.8536 16.6464L10.3536 15.1464C10.1583 14.9512 9.84171 14.9512 9.64645 15.1464L8.14645 16.6464C7.95118 16.8417 7.95118 17.1583 8.14645 17.3536C8.34171 17.5488 8.65829 17.5488 8.85355 17.3536L10 16.2071L11.1464 17.3536Z",
    );
    this.addChild(path0);
  }
}
