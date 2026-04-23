import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";
export class MisMessageSvg extends TypeSvgSvg {
  className: "MisMessageSvg";
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "MisMessageSvg";
    addAttrObj(this, {
      name: "MisMessageSvg",
    });
    addAttrObj(this, {
      viewBox: "0 0 1024 1024",
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path0.setData(
      "M392.297931 841.021793a130.01269 128.635586 90 1 0 257.271172 0 130.01269 128.635586 90 1 0-257.271172 0Z",
    );
    this.addChild(path0);
    const path1 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path1.setData(
      "M456.174345 52.965517m50.458483 0l-0.035311 0q50.458483 0 50.458483 50.458483l0 59.568552q0 50.458483-50.458483 50.458482l0.035311 0q-50.458483 0-50.458483-50.458482l0-59.568552q0-50.458483 50.458483-50.458483Z",
    );
    this.addChild(path1);
    const path2 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path2.setData(
      "M520.933517 1006.344828c-90.641655 0-163.945931-74.081103-163.945931-165.323035 0-91.206621 73.304276-165.323034 163.945931-165.323034 90.606345 0 163.945931 74.116414 163.945931 165.323034 0 91.241931-73.339586 165.323034-163.945931 165.323035z m0-70.62069c51.447172 0 93.325241-42.301793 93.325242-94.702345 0-52.365241-41.878069-94.702345-93.325242-94.702345-51.482483 0-93.325241 42.337103-93.325241 94.702345 0 52.400552 41.842759 94.702345 93.325241 94.702345z",
    );
    this.addChild(path2);
    const path3 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path3.setData(
      "M506.632828 88.275862a15.148138 15.148138 0 0 0-15.148138 15.148138v59.603862a15.148138 15.148138 0 0 0 30.296276 0V103.424a15.148138 15.148138 0 0 0-15.183449-15.148138z m85.768827 15.148138v59.603862a85.768828 85.768828 0 1 1-171.537655 0V103.424a85.768828 85.768828 0 1 1 171.537655 0z",
    );
    this.addChild(path3);
    const path4 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path4.setData(
      "M177.893517 494.344828c0-183.472552 147.173517-332.270345 328.739311-332.270345 181.530483 0 346.394483 148.797793 346.394482 332.270345v260.025379l100.034207 129.977379H77.85931l100.034207-129.977379V494.344828z",
    );
    this.addChild(path4);
  }
}
