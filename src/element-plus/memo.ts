import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class ElMemoSvg extends TypeSvgSvg {
  className: 'ElMemoSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'ElMemoSvg';
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M480 320h192c21.33 0 32-10.67 32-32s-10.67-32-32-32H480c-21.33 0-32 10.67-32 32s10.67 32 32 32z',
    );
    this.childNodes.push(path0);
    const path1 = new SvgPath(this);
    path1.setData(
      'M887.01 72.99C881.01 67 873.34 64 864 64H160c-9.35 0-17.02 3-23.01 8.99C131 78.99 128 86.66 128 96v832c0 9.35 2.99 17.02 8.99 23.01S150.66 960 160 960h704c9.35 0 17.02-2.99 23.01-8.99S896 937.34 896 928V96c0-9.35-3-17.02-8.99-23.01zM192 896V128h96v768h-96zm640 0H352V128h480v768z',
    );
    this.childNodes.push(path1);
    const path2 = new SvgPath(this);
    path2.setData(
      'M480 512h192c21.33 0 32-10.67 32-32s-10.67-32-32-32H480c-21.33 0-32 10.67-32 32s10.67 32 32 32zm0 192h192c21.33 0 32-10.67 32-32s-10.67-32-32-32H480c-21.33 0-32 10.67-32 32s10.67 32 32 32z',
    );
    this.childNodes.push(path2);
  }
}
