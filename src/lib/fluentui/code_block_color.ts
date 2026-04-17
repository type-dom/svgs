import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";
export class FlCodeBlockColorSvg extends TypeSvgSvg {
  className: "FlCodeBlockColorSvg";
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "FlCodeBlockColorSvg";
    addAttrObj(this, {
      name: "FlCodeBlockColorSvg",
    });
    addAttrObj(this, {
      viewBox: "0 0 20 20",
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path0.setData(
      "M3 6C3 4.34315 4.34315 3 6 3H14C15.6569 3 17 4.34315 17 6V14C17 15.6569 15.6569 17 14 17H6C4.34315 17 3 15.6569 3 14V6Z",
    );
    this.addChild(path0);
    const path1 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path1.setData(
      "M8.85355 7.85355L6.70711 10L8.85355 12.1464C9.04882 12.3417 9.04882 12.6583 8.85355 12.8536C8.65829 13.0488 8.34171 13.0488 8.14645 12.8536L5.64645 10.3536C5.45118 10.1583 5.45118 9.84171 5.64645 9.64645L8.14645 7.14645C8.34171 6.95118 8.65829 6.95118 8.85355 7.14645C9.04882 7.34171 9.04882 7.65829 8.85355 7.85355ZM11.8536 7.14645L14.3536 9.64645C14.5488 9.84171 14.5488 10.1583 14.3536 10.3536L11.8536 12.8536C11.6583 13.0488 11.3417 13.0488 11.1464 12.8536C10.9512 12.6583 10.9512 12.3417 11.1464 12.1464L13.2929 10L11.1464 7.85355C10.9512 7.65829 10.9512 7.34171 11.1464 7.14645C11.3417 6.95118 11.6583 6.95118 11.8536 7.14645Z",
    );
    this.addChild(path1);
  }
}
