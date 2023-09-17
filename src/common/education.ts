import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdEducationSvg extends TypeSvgSvg {
  className: 'TdEducationSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdEducationSvg';
    this.addAttrObj({
      name: 'education',
      title: 'education'
    });
    this.addAttrObj({
      viewBox: '0 0 128 128',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M88.883 119.565c-7.284 0-19.434 2.495-21.333 8.25v.127c-4.232.13-5.222 0-7.108 0-1.895-5.76-14.045-8.256-21.333-8.256H0V0h42.523c9.179 0 17.109 5.47 21.47 13.551C68.352 5.475 76.295 0 85.478 0H128v119.57l-39.113-.005h-.004zM60.442 24.763c0-9.651-8.978-16.507-17.777-16.507H7.108V111.43H39.11c7.054-.14 18.177.082 21.333 6.12v-4.628c-.134-5.722-.004-13.522 0-13.832V27.413l.004-2.655-.004.005zm60.442-16.517h-35.55c-8.802 0-17.78 6.856-17.78 16.493v74.259c.004.32.138 8.115 0 13.813v4.627c3.155-6.022 14.279-6.26 21.333-6.114h32V8.25l-.003-.005z',
    );
    this.childNodes.push(path0);
  }
}
