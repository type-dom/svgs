import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";
export class FlPresenceDndRegularSvg extends TypeSvgSvg {
  className: "FlPresenceDndRegularSvg";
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "FlPresenceDndRegularSvg";
    addAttrObj(this, {
      name: "FlPresenceDndRegularSvg",
    });
    addAttrObj(this, {
      viewBox: "0 0 20 20",
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path0.setData(
      "M9.99538 0C4.47508 0 0 4.47508 0 9.99538C0 15.5157 4.47508 19.9908 9.99538 19.9908C15.5157 19.9908 19.9908 15.5157 19.9908 9.99538C19.9908 4.47508 15.5157 0 9.99538 0ZM2 9.99538C2 5.57965 5.57965 2 9.99538 2C14.4111 2 17.9908 5.57965 17.9908 9.99538C17.9908 14.4111 14.4111 17.9908 9.99538 17.9908C5.57965 17.9908 2 14.4111 2 9.99538ZM6 10C6 9.44772 6.44772 9 7 9H13C13.5523 9 14 9.44772 14 10C14 10.5523 13.5523 11 13 11H7C6.44772 11 6 10.5523 6 10Z",
    );
    this.addChild(path0);
  }
}
