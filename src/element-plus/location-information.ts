import {SvgPath, TypeHtml, TypeSvgSvg} from "type-dom.ts";
export class LocationInformationSvg extends TypeSvgSvg {
  className: 'LocationInformationSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'LocationInformationSvg';
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData("M288 896h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z");
    this.childNodes.push(path0);
    const path1 = new SvgPath(this);
    path1.setData("M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z");
    this.childNodes.push(path1);
    const path2 = new SvgPath(this);
    path2.setData("M512 512a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm0 64a160 160 0 1 1 0-320 160 160 0 0 1 0 320z");
    this.childNodes.push(path2);
  }
}
