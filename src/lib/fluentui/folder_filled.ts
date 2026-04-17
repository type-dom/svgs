import { SvgProps, SvgPath, TypeSvgSvg, addAttrObj } from "@type-dom/framework";
export class FlFolderFilledSvg extends TypeSvgSvg {
  className: "FlFolderFilledSvg";
  override childNodes: SvgPath[];
  constructor(params: SvgProps = {}) {
    super(params);
    this.className = "FlFolderFilledSvg";
    addAttrObj(this, {
      name: "FlFolderFilledSvg",
    });
    addAttrObj(this, {
      viewBox: "0 0 20 20",
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: "currentColor" } });
    path0.setData(
      "M2 5.5C2 4.11929 3.11929 3 4.5 3H6.98223C7.44636 3 7.89148 3.18437 8.21967 3.51256L9.5 4.79289L7.43934 6.85355C7.34557 6.94732 7.21839 7 7.08579 7H2V5.5ZM2 8V14.5C2 15.8807 3.11929 17 4.5 17H15.5C16.8807 17 18 15.8807 18 14.5V7.5C18 6.11929 16.8807 5 15.5 5H10.7071L8.14645 7.56066C7.86514 7.84196 7.48361 8 7.08579 8H2Z",
    );
    this.addChild(path0);
  }
}
