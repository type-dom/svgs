import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class TdInsertColumnSvg extends TypeSvgSvg {
  className: 'TdInsertColumnSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'TdInsertColumnSvg';
    this.attr.addObj({
      name: 'TdInsertColumnSvg',
      title: 'TdInsertColumnSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M944 224v768H80V224h864m0-32H80a32 32 0 0 0-32 32v768a32 32 0 0 0 32 32h864a32 32 0 0 0 32-32V224a32 32 0 0 0-32-32z',
    );
    this.addChild(path0);
    const path1 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path1.setData(
      'M80 512h864v32H80zM80 672h864v32H80zM80 832h864v32H80zM80 352h864v32H80z',
    );
    this.addChild(path1);
    const path2 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path2.setData(
      'M304 224v768H272V224zM528 224v768h-32V224zM752 224v768h-32V224z',
    );
    this.addChild(path2);
    const path3 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path3.setData(
      'M400 160l96-96H304l96 96z',
    );
    this.addChild(path3);
    const path4 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path4.setData(
      'M432 64m-1.28 0l-61.44 0q-1.28 0-1.28-1.28l0-61.44q0-1.28 1.28-1.28l61.44 0q1.28 0 1.28 1.28l0 61.44q0 1.28-1.28 1.28Z',
    );
    this.addChild(path4);
    const path5 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path5.setData(
      'M288 208m16 0l192 0q16 0 16 16l0 768q0 16-16 16l-192 0q-16 0-16-16l0-768q0-16 16-16Z',
    );
    this.addChild(path5);
    const path6 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path6.setData(
      'M496 224v768H304V224h192m0-32H304a32 32 0 0 0-32 32v768a32 32 0 0 0 32 32h192a32 32 0 0 0 32-32V224a32 32 0 0 0-32-32z',
    );
    this.addChild(path6);
    this.useParams(params);
  }
}
