import {SvgPath, TypeHtml, TypeSvgSvg} from "type-dom.ts";
export class UploadSvg extends TypeSvgSvg {
  className: 'UploadSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'UploadSvg';
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData("M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64zm384-578.304V704h-64V247.296L237.248 490.048 192 444.8 508.8 128l316.8 316.8-45.312 45.248L544 253.696z");
    this.childNodes.push(path0);
  }
}
