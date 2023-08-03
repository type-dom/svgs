import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdStaticCatalogSvg extends TypeSvgSvg {
  className: 'TdStaticCatalogSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdStaticCatalogSvg';
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M841 317.6H641c-28.7 0-52-23.3-52-52V84h46v181.6c0 3.3 2.7 6 6 6h200v46z',
    );
    this.childNodes.push(path0);
    const path1 = new SvgPath(this);
    path1.setData(
      'M804 968H215c-29.2 0-53-23.8-53-53V121c0-29.2 23.8-53 53-53h41c12.7 0 23 10.3 23 23s-10.3 23-23 23h-41c-3.9 0-7 3.1-7 7v794c0 3.9 3.1 7 7 7h589c3.9 0 7-3.1 7-7V290.5L609.3 114H426c-12.7 0-23-10.3-23-23s10.3-23 23-23h192c5.6 0 11 2 15.1 5.7l216 189c5 4.4 7.9 10.7 7.9 17.3v635c0 29.2-23.8 53-53 53zM364.9 114h-39c-12.7 0-23-10.3-23-23s10.3-23 23-23h39c12.7 0 23 10.3 23 23s-10.3 23-23 23z',
    );
    this.childNodes.push(path1);
    const path2 = new SvgPath(this);
    path2.setData(
      'M308 266h36c7.7 0 14 6.3 14 14v36c0 7.7-6.3 14-14 14h-36c-7.7 0-14-6.3-14-14v-36c0-7.7 6.3-14 14-14zM423 275h101c12.7 0 23 10.3 23 23s-10.3 23-23 23H423c-12.7 0-23-10.3-23-23s10.3-23 23-23zM308 410h36c7.7 0 14 6.3 14 14v36c0 7.7-6.3 14-14 14h-36c-7.7 0-14-6.3-14-14v-36c0-7.7 6.3-14 14-14zM423 419h286c12.7 0 23 10.3 23 23s-10.3 23-23 23H423c-12.7 0-23-10.3-23-23s10.3-23 23-23z',
    );
    this.childNodes.push(path2);
    const path3 = new SvgPath(this);
    path3.setData(
      'M308 554h36c7.7 0 14 6.3 14 14v36c0 7.7-6.3 14-14 14h-36c-7.7 0-14-6.3-14-14v-36c0-7.7 6.3-14 14-14zM423 563h286c12.7 0 23 10.3 23 23s-10.3 23-23 23H423c-12.7 0-23-10.3-23-23s10.3-23 23-23z',
    );
    this.childNodes.push(path3);
    const path4 = new SvgPath(this);
    path4.setData(
      'M308 698h36c7.7 0 14 6.3 14 14v36c0 7.7-6.3 14-14 14h-36c-7.7 0-14-6.3-14-14v-36c0-7.7 6.3-14 14-14zM423 707h286c12.7 0 23 10.3 23 23s-10.3 23-23 23H423c-12.7 0-23-10.3-23-23s10.3-23 23-23z',
    );
    this.childNodes.push(path4);
  }
}
