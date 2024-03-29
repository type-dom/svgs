import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ArrangementTopSvg extends TypeSvgSvg {
  className: 'ArrangementTopSvg';
  childNodes: [SvgPath];
  constructor(config?: ITypeConfig) {
    super();
    this.className = 'ArrangementTopSvg';
    this.addAttrObj({
      viewBox: '0 0 1291 1024',
      name: 'arrangement-top-svg',
    });
    this.resetSize(24, 24);
    const path = new SvgPath({ parent: this });
    path.setData('M1028.665421 200.971963H196.306542c-5.383178 0-9.68972 4.306542-9.68972 9.570093v71.775701c0 5.263551 4.306542 9.570093 9.68972 9.570093h832.358879c5.383178 0 9.68972-4.306542 9.689719-9.570093v-71.775701c0-5.263551-4.306542-9.570093-9.689719-9.570093zM620.02243 424.672897c-3.828037-4.904673-11.24486-4.904673-15.072897 0l-133.981309 169.510281c-4.904673 6.220561-0.478505 15.431776 7.536449 15.431775h88.403738V1014.429907c0 5.263551 4.306542 9.570093 9.570094 9.570093h71.775701c5.263551 0 9.570093-4.306542 9.570093-9.570093V609.734579H746.46729c8.014953 0 12.441121-9.211215 7.536448-15.431775L620.02243 424.672897z');
    this.childNodes = [path];
    this.setConfig(config);
  }
}
