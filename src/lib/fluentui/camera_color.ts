import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";
export class FlCameraColorSvg extends TypeSvgSvg {
  className: "FlCameraColorSvg";
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "FlCameraColorSvg";
    addAttrObj(this, {
      name: "FlCameraColorSvg",
    });
    addAttrObj(this, {
      viewBox: "0 0 20 20",
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path0.setData(
      "M6.77897 2.82643C7.0336 2.31977 7.55219 2 8.11924 2H11.8834C12.4516 2 12.9711 2.32106 13.2251 2.8293L13.8101 3.9994H15.5C16.8807 3.9994 18 5.11869 18 6.4994V14.5C18 15.8807 16.8807 17 15.5 17H4.5C3.11929 17 2 15.8807 2 14.5V6.4994C2 5.11868 3.11929 3.9994 4.5 3.9994H6.18948L6.77897 2.82643Z",
    );
    this.addChild(path0);
    const path1 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path1.setData(
      "M6.77897 2.82643C7.0336 2.31977 7.55219 2 8.11924 2H11.8834C12.4516 2 12.9711 2.32106 13.2251 2.8293L13.8101 3.9994H15.5C16.8807 3.9994 18 5.11869 18 6.4994V14.5C18 15.8807 16.8807 17 15.5 17H4.5C3.11929 17 2 15.8807 2 14.5V6.4994C2 5.11868 3.11929 3.9994 4.5 3.9994H6.18948L6.77897 2.82643Z",
    );
    this.addChild(path1);
    const path2 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path2.setData(
      "M13.9954 10C13.9954 12.2091 12.2045 14 9.99536 14C7.78622 14 5.99536 12.2091 5.99536 10C5.99536 7.79086 7.78622 6 9.99536 6C12.2045 6 13.9954 7.79086 13.9954 10Z",
    );
    this.addChild(path2);
    const path3 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path3.setData(
      "M13 10C13 11.6569 11.6569 13 10 13C8.34315 13 7 11.6569 7 10C7 8.34315 8.34315 7 10 7C11.6569 7 13 8.34315 13 10Z",
    );
    this.addChild(path3);
    const path4 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path4.setData(
      "M15 8C15.5523 8 16 7.55228 16 7C16 6.44772 15.5523 6 15 6C14.4477 6 14 6.44772 14 7C14 7.55228 14.4477 8 15 8Z",
    );
    this.addChild(path4);
  }
}
