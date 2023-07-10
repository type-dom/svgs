import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdFormatBrushNewSvg extends TypeSvgSvg {
  className: 'TdFormatBrushNewSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdFormatBrushNewSvg';
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData('M366.336 742.336h91.328v130.56h95.744v-186.944h91.328v186.944h192V609.28H187.264v263.68h179.008V742.4zM187.328 522.112h649.344V422.592H187.328v99.52z m362.688-186.624V151.104H471.808v184.384h78.208z m-169.536 0V64h260.864v271.488H928V960h-832V335.488h284.48z');
    this.childNodes.push(path0);
  }
}
