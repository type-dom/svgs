import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";
export class FlPinColorSvg extends TypeSvgSvg {
  className: "FlPinColorSvg";
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "FlPinColorSvg";
    addAttrObj(this, {
      name: "FlPinColorSvg",
    });
    addAttrObj(this, {
      viewBox: "0 0 20 20",
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path0.setData(
      "M8.03033 11.9697C8.32322 12.2626 8.32322 12.7374 8.03033 13.0303L4.28033 16.7803C3.98744 17.0732 3.51256 17.0732 3.21967 16.7803C2.92678 16.4874 2.92678 16.0126 3.21967 15.7197L6.96967 11.9697C7.26256 11.6768 7.73744 11.6768 8.03033 11.9697Z",
    );
    this.addChild(path0);
    const path1 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path1.setData(
      "M13.3254 2.61785C12.3601 1.65257 10.7328 1.91665 10.1223 3.13764L8.39307 6.59609C8.22877 6.92468 7.94961 7.18155 7.60851 7.31799L4.01856 8.75397C3.35199 9.0206 3.1752 9.88191 3.68284 10.3896L9.61049 16.3172C10.1181 16.8248 10.9794 16.648 11.2461 15.9815L12.6821 12.3915C12.8185 12.0504 13.0754 11.7713 13.4039 11.607L16.8624 9.87775C18.0834 9.26725 18.3475 7.63996 17.3822 6.67468L13.3254 2.61785Z",
    );
    this.addChild(path1);
    const path2 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path2.setData(
      "M13.3254 2.61785C12.3601 1.65257 10.7328 1.91665 10.1223 3.13764L8.39307 6.59609C8.22877 6.92468 7.94961 7.18155 7.60851 7.31799L4.01856 8.75397C3.35199 9.0206 3.1752 9.88191 3.68284 10.3896L9.61049 16.3172C10.1181 16.8248 10.9794 16.648 11.2461 15.9815L12.6821 12.3915C12.8185 12.0504 13.0754 11.7713 13.4039 11.607L16.8624 9.87775C18.0834 9.26725 18.3475 7.63996 17.3822 6.67468L13.3254 2.61785Z",
    );
    this.addChild(path2);
  }
}
