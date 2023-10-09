import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdTransformSvg extends TypeSvgSvg {
  className: 'TdTransformSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdTransformSvg';
    this.addAttrObj({
      name: 'TdTransformSvg',
      title: 'TdTransformSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M123.751 409.147h259.974c15.85 0 25.364-12.682 25.364-25.364 0-15.854-12.682-25.363-25.364-25.363H183.99c60.236-123.646 183.882-209.248 326.551-209.248 180.713 0 332.891 136.328 358.254 310.699h53.898C897.331 256.965 722.958 98.447 510.541 98.447c-155.35 0-288.506 85.602-361.426 212.417V123.809c0-12.681-9.509-25.363-25.364-25.363-12.681 0-25.363 12.682-25.363 25.363v259.974c0.001 25.364 25.363 25.364 25.363 25.364m776.748 206.076h-259.97c-15.854 0-25.363 12.682-25.363 25.364 0 15.848 12.682 25.362 25.363 25.362h196.563C780.025 789.592 653.21 872.026 510.541 872.026c-180.713 0-332.891-136.328-358.254-310.7h-50.725C126.925 767.403 301.293 925.92 510.541 925.92c155.35 0 291.674-85.598 361.427-212.417v187.054c0 15.854 12.682 25.363 25.363 25.363 15.851 0 25.363-12.681 25.363-25.363V640.588c3.169-25.365-22.195-25.365-22.195-25.365m0 0z',
    );
    this.childNodes.push(path0);
  }
}
