import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdStrikethroughSvg extends TypeSvgSvg {
  className: 'TdStrikethroughSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdStrikethroughSvg';
    this.addAttrObj({
      name: 'TdStrikethroughSvg',
      title: 'TdStrikethroughSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M1024 511.81H687.11c-38.48-16.41-94.03-35.49-167.45-57.37-77.09-22.34-126.25-39.09-146.36-50.27-45.8-24.57-68.14-56.98-68.14-97.18 0-45.82 18.98-79.32 56.98-101.66 33.5-20.11 79.32-29.07 138.52-29.07 64.8 0 115.07 13.41 150.82 42.45 34.64 27.93 56.98 70.39 67.05 128.48H809c-7.82-83.77-37.98-147.45-91.61-189.91C666 115.94 594.5 95.83 505.14 95.83c-82.68 0-150.82 17.89-203.34 53.64-59.2 37.98-88.25 92.73-88.25 161.98 0 67.05 30.16 118.43 91.61 154.18 19.87 10.38 61.41 26.15 123.58 46.19H0v93.09h681.64c35.63 26.24 54.75 59.59 54.75 100.93 0 42.43-20.11 75.95-60.32 100.55-40.23 24.57-93.84 36.86-158.66 36.86-71.5 0-125.11-15.64-161.98-44.68-40.23-32.41-64.8-83.8-72.61-153.07h-90.5c6.7 98.32 41.34 170.93 103.91 218.98 53.61 40.2 127.34 60.32 221.18 60.32 94.98 0 169.82-20.11 225.68-59.2 55.86-40.23 83.8-96.09 83.8-165.34 0-35.82-8.24-67.53-24.42-95.34H1024v-93.11z',
    );
    this.childNodes.push(path0);
  }
}
