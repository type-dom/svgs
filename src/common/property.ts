import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdPropertySvg extends TypeSvgSvg {
  className: 'TdPropertySvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdPropertySvg';
    this.addAttrObj({
      name: 'property',
      title: 'property'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M190.111 129.928h704.137v63.794H190.111zM830.236 193.722h64.012v673.881h-64.012z',
    );
    this.childNodes.push(path0);
    const path1 = new SvgPath(this);
    path1.setData(
      'M127.241 130.548l0.035 767.649h768.149v32.579-96.498H191.289v-703.73',
    );
    this.childNodes.push(path1);
    const path2 = new SvgPath(this);
    path2.setData(
      'M190.111 193.722h193.963v126.502H190.111z',
    );
    this.childNodes.push(path2);
    const path3 = new SvgPath(this);
    path3.setData(
      'M190.111 320.223h649.521v63.567H190.111zM320.062 512.127v191.811l192.037-0.055V512.099l-192.037 0.028z m129.369 127.838h-65.077v-63.919h65.077v63.919z',
    );
    this.childNodes.push(path3);
    const path4 = new SvgPath(this);
    path4.setData(
      'M256.05 576.046h70.978v63.919H256.05zM512 576.046h256.149v63.919H512z',
    );
    this.childNodes.push(path4);
  }
}
