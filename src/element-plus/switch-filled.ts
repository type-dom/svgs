import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class ElSwitchFilledSvg extends TypeSvgSvg {
  className: 'ElSwitchFilledSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'ElSwitchFilledSvg';
    this.addAttrObj({
      name: 'switch-filled',
      title: 'switch-filled'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M247.47 358.4v.04c.07 19.17 7.72 37.53 21.27 51.09s31.92 21.2 51.09 21.27c39.86 0 72.41-32.6 72.41-72.4s-32.6-72.36-72.41-72.36-72.36 32.55-72.36 72.36z',
    );
    this.childNodes.push(path0);
    const path1 = new SvgPath(this);
    path1.setData(
      'M492.38 128H324.7c-52.16 0-102.19 20.73-139.08 57.61a196.655 196.655 0 0 0-57.61 139.08V698.7c-.01 25.84 5.08 51.42 14.96 75.29s24.36 45.56 42.63 63.83 39.95 32.76 63.82 42.65a196.67 196.67 0 0 0 75.28 14.98h167.68c3.03 0 5.46-2.43 5.46-5.42V133.42c.6-2.99-1.83-5.42-5.46-5.42zm-56.11 705.88H324.7c-17.76.13-35.36-3.33-51.75-10.18s-31.22-16.94-43.61-29.67c-25.3-25.35-39.81-59.1-39.81-95.32V324.69c-.13-17.75 3.33-35.35 10.17-51.74a131.695 131.695 0 0 1 29.64-43.62c25.39-25.3 59.14-39.81 95.36-39.81h111.57v644.36zm402.12-647.67a196.655 196.655 0 0 0-139.08-57.61H580.48c-3.03 0-4.82 2.43-4.82 4.82v757.16c-.6 2.99 1.79 5.42 5.42 5.42h118.23a196.69 196.69 0 0 0 139.08-57.61A196.655 196.655 0 0 0 896 699.31V325.29a196.69 196.69 0 0 0-57.61-139.08zm-111.3 441.92c-42.83 0-77.82-34.99-77.82-77.82s34.98-77.82 77.82-77.82c42.83 0 77.82 34.99 77.82 77.82s-34.99 77.82-77.82 77.82z',
    );
    this.childNodes.push(path1);
  }
}
