import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdImportSvg extends TypeSvgSvg {
  className: 'TdImportSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdImportSvg';
    this.addAttrObj({
      name: 'import',
      title: 'import'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M111.6 148.8c7.9 0 16.9 17.9 21.6 32.2 25.9 88.7 143 182.6 248.6 194.2v-1.1c0-29.6 10.6-50.7 31.7-64.4 11.1-6.9 22.7-10.6 34.8-10.6 13.7 0 27.4 4.8 39.1 13.7L645.8 438c17.9 13.2 28.5 34.8 28.5 57.5 0 22.2-10.6 43.8-28 57L487.4 678.2c-1.6 1.1-2.6 2.1-4.2 2.6-7.4 4.2-19.5 9.5-34.3 9.5-12.1 0-23.7-3.2-34.3-10-26.4-16.9-30.6-43.8-32.2-55.4l-0.5-2.1c-0.5-1.6-0.5-3.7-0.5-5.3v-5.3c-162.6-26.9-314.1-192.6-314.1-352 0-29.6 4.2-59.6 12.7-88.1 4.2-13.8 18.4-26.5 31.6-23.3z m335.2 467.1c0.5 2.6 1.1 6.9 2.1 8.4l156.2-123.5c1.6-1.1 2.6-3.2 2.6-5.3 0-2.1-0.5-3.7-2.6-5.3L447.8 365.7c0 1.1-0.5 3.2-0.5 7.9v34.8c0 17.4-13.2 31.7-30.6 32.7-104.5 7.4-213.8-61.2-280.3-145.7 22.2 123 154.1 247.5 279.7 254.4 17.4 1.1 31.1 15.3 31.1 32.7v32.7l-0.4 0.7z m0.5-0.5',
    );
    this.childNodes.push(path0);
    const path1 = new SvgPath(this);
    path1.setData(
      'M309 916.3c-67 0-121.4-54.9-121.4-121.4V593.2h69.1v201.6c0 29 23.8 52.3 52.3 52.3h527.3c29 0 52.3-23.8 52.3-52.3V226.4c0-29-23.8-52.3-52.3-52.3H399.8v-69.7h436.5c67 0 121.9 54.9 121.9 121.9v567.9c0 67-54.9 121.9-121.9 121.9H309v0.2z m0 0',
    );
    this.childNodes.push(path1);
    const path2 = new SvgPath(this);
    path2.setData(
      'M841.6 626H729.1v-59.1h112.4V626z m0 154.1H545.5V721h296.1v59.1z m0-425.4h-237v-59.1h237v59.1z m0 140.9H729.1v-59.1h112.4v59.1z m0-59.1',
    );
    this.childNodes.push(path2);
  }
}
