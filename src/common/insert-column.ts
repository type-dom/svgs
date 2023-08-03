import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdInsertColumnSvg extends TypeSvgSvg {
  className: 'TdInsertColumnSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdInsertColumnSvg';
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M944 224v768H80V224h864m0-32H80a32 32 0 0 0-32 32v768a32 32 0 0 0 32 32h864a32 32 0 0 0 32-32V224a32 32 0 0 0-32-32z',
    );
    this.childNodes.push(path0);
    const path1 = new SvgPath(this);
    path1.setData(
      'M80 512h864v32H80zM80 672h864v32H80zM80 832h864v32H80zM80 352h864v32H80z',
    );
    this.childNodes.push(path1);
    const path2 = new SvgPath(this);
    path2.setData(
      'M304 224v768H272V224zM528 224v768h-32V224zM752 224v768h-32V224z',
    );
    this.childNodes.push(path2);
    const path3 = new SvgPath(this);
    path3.setData(
      'M400 160l96-96H304l96 96z',
    );
    this.childNodes.push(path3);
    const path4 = new SvgPath(this);
    path4.setData(
      'M432 64m-1.28 0l-61.44 0q-1.28 0-1.28-1.28l0-61.44q0-1.28 1.28-1.28l61.44 0q1.28 0 1.28 1.28l0 61.44q0 1.28-1.28 1.28Z',
    );
    this.childNodes.push(path4);
    const path5 = new SvgPath(this);
    path5.setData(
      'M288 208m16 0l192 0q16 0 16 16l0 768q0 16-16 16l-192 0q-16 0-16-16l0-768q0-16 16-16Z',
    );
    this.childNodes.push(path5);
    const path6 = new SvgPath(this);
    path6.setData(
      'M496 224v768H304V224h192m0-32H304a32 32 0 0 0-32 32v768a32 32 0 0 0 32 32h192a32 32 0 0 0 32-32V224a32 32 0 0 0-32-32z',
    );
    this.childNodes.push(path6);
  }
}
