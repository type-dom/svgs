import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";
export class FlWindowPlayFilledSvg extends TypeSvgSvg {
  className: "FlWindowPlayFilledSvg";
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "FlWindowPlayFilledSvg";
    addAttrObj(this, {
      name: "FlWindowPlayFilledSvg",
    });
    addAttrObj(this, {
      viewBox: "0 0 20 20",
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path0.setData(
      "M17 5.5C17 4.11929 15.8807 3 14.5 3H5.5C4.11929 3 3 4.11929 3 5.5V6H17V5.5ZM17 9.59971V7H3V14.5C3 15.8807 4.11929 17 5.5 17H9.59971C9.21628 16.2499 9 15.4002 9 14.5C9 11.4624 11.4624 9 14.5 9C15.4002 9 16.2499 9.21628 17 9.59971ZM19 14.5C19 16.9853 16.9853 19 14.5 19C12.0147 19 10 16.9853 10 14.5C10 12.0147 12.0147 10 14.5 10C16.9853 10 19 12.0147 19 14.5ZM16.7133 14.0629L13.7428 12.4127C13.4096 12.2275 13 12.4685 13 12.8498L13 16.1502C13 16.5315 13.4096 16.7725 13.7428 16.5873L16.7133 14.9371C17.0562 14.7466 17.0562 14.2534 16.7133 14.0629Z",
    );
    this.addChild(path0);
  }
}
