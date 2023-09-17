import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdPageHeaderFooterSvg extends TypeSvgSvg {
  className: 'TdPageHeaderFooterSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdPageHeaderFooterSvg';
    this.addAttrObj({
      name: 'page-header-footer',
      title: 'page-header-footer'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M871.305648 168.393553H149.142408a31.398402 31.398402 0 0 0-31.398402 31.398402v659.366436a31.398402 31.398402 0 0 0 31.398402 31.398402h722.16324a31.398402 31.398402 0 0 0 31.398401-31.398402v-659.366436a31.398402 31.398402 0 0 0-31.398401-31.398402z m-23.548802 667.216037H172.691209v-400.329622h675.065637z m0-455.276825H172.691209v-156.992009h675.065637z',
    );
    this.childNodes.push(path0);
    const path1 = new SvgPath(this);
    path1.setData(
      'M235.488013 270.438359m7.8496 0l47.097603 0q7.8496 0 7.8496 7.8496l0 47.097603q0 7.8496-7.8496 7.8496l-47.097603 0q-7.8496 0-7.8496-7.8496l0-47.097603q0-7.8496 7.8496-7.8496Z',
    );
    this.childNodes.push(path1);
    const path2 = new SvgPath(this);
    path2.setData(
      'M361.08162 270.438359m7.8496 0l47.097603 0q7.8496 0 7.8496 7.8496l0 47.097603q0 7.8496-7.8496 7.8496l-47.097603 0q-7.8496 0-7.8496-7.8496l0-47.097603q0-7.8496 7.8496-7.8496Z',
    );
    this.childNodes.push(path2);
    const path3 = new SvgPath(this);
    path3.setData(
      'M235.488013 694.316782m15.699201 0l188.39041 0q15.699201 0 15.699201 15.699201l0 23.548801q0 15.699201-15.699201 15.699201l-188.39041 0q-15.699201 0-15.699201-15.699201l0-23.548801q0-15.699201 15.699201-15.699201Z',
    );
    this.childNodes.push(path3);
    const path4 = new SvgPath(this);
    path4.setData(
      'M235.488013 592.271976m15.699201 0l188.39041 0q15.699201 0 15.699201 15.699201l0 23.548802q0 15.699201-15.699201 15.6992l-188.39041 0q-15.699201 0-15.699201-15.6992l0-23.548802q0-15.699201 15.699201-15.699201Z',
    );
    this.childNodes.push(path4);
    const path5 = new SvgPath(this);
    path5.setData(
      'M235.488013 498.076771m15.699201 0l188.39041 0q15.699201 0 15.699201 15.699201l0 23.548801q0 15.699201-15.699201 15.699201l-188.39041 0q-15.699201 0-15.699201-15.699201l0-23.548801q0-15.699201 15.699201-15.699201Z',
    );
    this.childNodes.push(path5);
  }
}
