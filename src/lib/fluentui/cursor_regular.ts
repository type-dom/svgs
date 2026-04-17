import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";
export class FlCursorRegularSvg extends TypeSvgSvg {
  className: "FlCursorRegularSvg";
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "FlCursorRegularSvg";
    addAttrObj(this, {
      name: "FlCursorRegularSvg",
    });
    addAttrObj(this, {
      viewBox: "0 0 20 20",
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path0.setData(
      "M5 3.05854C5 2.21347 5.98325 1.74939 6.63564 2.28655L17.6418 11.3487C18.3661 11.9451 17.9444 13.1207 17.0061 13.1207H11.4142C10.9788 13.1207 10.5648 13.3099 10.2799 13.6392L6.75622 17.7117C6.15025 18.412 5 17.9835 5 17.0574L5 3.05854ZM17.0061 12.1207L6 3.05854L6 17.0574L9.52369 12.9849C9.99856 12.4361 10.6885 12.1207 11.4142 12.1207H17.0061Z",
    );
    this.addChild(path0);
  }
}
