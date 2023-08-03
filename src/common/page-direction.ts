import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdPageDirectionSvg extends TypeSvgSvg {
  className: 'TdPageDirectionSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdPageDirectionSvg';
    this.addAttrObj({
      viewBox: '0 0 1080 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M0 0h625.777778v739.555556H0z',
    );
    this.childNodes.push(path0);
    const path1 = new SvgPath(this);
    path1.setData(
      'M0 739.555556V0h625.777778v739.555556H0zM568.888889 56.888889H56.888889v625.777778h512V56.888889z',
    );
    this.childNodes.push(path1);
    const path2 = new SvgPath(this);
    path2.setData(
      'M398.222222 455.111111h682.666667v568.888889H398.222222z',
    );
    this.childNodes.push(path2);
    const path3 = new SvgPath(this);
    path3.setData(
      'M398.222222 1024V455.111111h682.666667v568.888889H398.222222z m625.777778-512H455.111111v455.111111h568.888889V512z',
    );
    this.childNodes.push(path3);
    const path4 = new SvgPath(this);
    path4.setData(
      'M1080.888889 56.888889v142.222222a28.444444 28.444444 0 0 1-56.888889 0V56.888889h-142.222222a28.444444 28.444444 0 0 1 0-56.888889H1080.888889v56.888889zM199.111111 1024H0v-28.444444-170.951112a28.444444 28.444444 0 0 1 56.888889 0V967.111111h142.222222a28.444444 28.444444 0 0 1 0 56.888889z',
    );
    this.childNodes.push(path4);
  }
}
