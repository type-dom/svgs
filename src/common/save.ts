import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdSaveSvg extends TypeSvgSvg {
  className: 'TdSaveSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdSaveSvg';
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData('M804.141176 39.152941H39.152941v963.764706h963.764706V201.788235l-198.776471-162.635294z m-493.929411 60.235294h391.529411v180.705883h-391.529411v-180.705883z m481.882353 843.294118h-542.117647v-331.294118h542.117647v331.294118z m150.588235 0h-90.352941v-391.529412h-662.588236v391.529412h-90.352941v-843.294118h150.588236v240.941177h512v-240.941177h18.070588l162.635294 129.505883v713.788235z');
    this.childNodes.push(path0);
    const path1 = new SvgPath(this);
    path1.setData('M310.211765 671.623529h331.294117v60.235295h-331.294117zM310.211765 792.094118h210.823529v60.235294h-210.823529zM611.388235 129.505882h60.235294v120.470589h-60.235294z');
    this.childNodes.push(path1);
  }
}
