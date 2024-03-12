import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ArrangementBottomSvg extends TypeSvgSvg {
  className: 'ArrangementBottomSvg';
  childNodes: [SvgPath];
  constructor(config?: ITypeConfig) {
    super();
    this.className = 'ArrangementBottomSvg';
    this.addAttrObj({
      viewBox: '0 0 1291 1024',
      name: 'arrangement-bottom-svg',
    });
    this.resetSize(24, 24);
    const path = new SvgPath({ parent: this });
    path.setData('M1028.665421 933.084112H196.306542c-5.383178 0-9.68972 4.306542-9.68972 9.570094v71.775701c0 5.263551 4.306542 9.570093 9.68972 9.570093h832.358879c5.383178 0 9.68972-4.306542 9.689719-9.570093v-71.775701c0-5.263551-4.306542-9.570093-9.689719-9.570094zM604.949533 800.299065c3.828037 4.904673 11.24486 4.904673 15.072897 0l133.981308-169.51028c4.904673-6.220561 0.478505-15.431776-7.536448-15.431776h-88.642991V210.542056c0-5.263551-4.306542-9.570093-9.570093-9.570093h-71.775701c-5.263551 0-9.570093 4.306542-9.570094 9.570093v404.695327H478.504673c-8.014953 0-12.441121 9.211215-7.536449 15.431776l133.981309 169.629906z');
    this.childNodes = [path];
    this.setConfig(config);
  }
}
