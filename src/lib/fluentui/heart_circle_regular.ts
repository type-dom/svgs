import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";
export class FlHeartCircleRegularSvg extends TypeSvgSvg {
  className: "FlHeartCircleRegularSvg";
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "FlHeartCircleRegularSvg";
    addAttrObj(this, {
      name: "FlHeartCircleRegularSvg",
    });
    addAttrObj(this, {
      viewBox: "0 0 20 20",
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path0.setData(
      "M9.59941 7.61414L9.99004 8.00001L10.3894 7.60719C11.4223 6.59134 13.1472 6.88785 13.7816 8.19031C14.1661 8.97969 14.0241 9.9244 13.4246 10.5659L10.3652 13.8395C10.1676 14.051 9.83223 14.051 9.6346 13.8395L6.5703 10.5606C5.9736 9.92205 5.83147 8.98213 6.2127 8.19574C6.8443 6.89291 8.56934 6.59667 9.59941 7.61414ZM2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10ZM10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3Z",
    );
    this.addChild(path0);
  }
}
