import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlPersonAvailableColorSvg extends TypeSvgSvg {
  className: 'FlPersonAvailableColorSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlPersonAvailableColorSvg';
    this.attr.addObj({
      name: 'FlPersonAvailableColorSvg',
      title: 'FlPersonAvailableColorSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M3 13C3 11.8869 3.90315 11 5.00873 11L15 11C16.1045 11 17 11.8956 17 13C17 14.6912 16.1672 15.9663 14.865 16.7966C13.583 17.614 11.8547 18 10 18C8.14526 18 6.41697 17.614 5.13499 16.7966C3.83281 15.9663 3 14.6912 3 13Z',
    );
    this.addChild(path0);
    const path1 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path1.setData(
      'M3 13C3 11.8869 3.90315 11 5.00873 11L15 11C16.1045 11 17 11.8956 17 13C17 14.6912 16.1672 15.9663 14.865 16.7966C13.583 17.614 11.8547 18 10 18C8.14526 18 6.41697 17.614 5.13499 16.7966C3.83281 15.9663 3 14.6912 3 13Z',
    );
    this.addChild(path1);
    const path2 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path2.setData(
      'M3 13C3 11.8869 3.90315 11 5.00873 11L15 11C16.1045 11 17 11.8956 17 13C17 14.6912 16.1672 15.9663 14.865 16.7966C13.583 17.614 11.8547 18 10 18C8.14526 18 6.41697 17.614 5.13499 16.7966C3.83281 15.9663 3 14.6912 3 13Z',
    );
    this.addChild(path2);
    const path3 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path3.setData(
      'M10 2C7.79086 2 6 3.79086 6 6C6 8.20914 7.79086 10 10 10C12.2091 10 14 8.20914 14 6C14 3.79086 12.2091 2 10 2Z',
    );
    this.addChild(path3);
    const path4 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path4.setData(
      'M19 14.5C19 12.0147 16.9853 10 14.5 10C12.0147 10 10 12.0147 10 14.5C10 16.9853 12.0147 19 14.5 19C16.9853 19 19 16.9853 19 14.5Z',
    );
    this.addChild(path4);
    const path5 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path5.setData(
      'M16.8536 12.6464C17.0488 12.8417 17.0488 13.1583 16.8536 13.3536L13.8536 16.3536C13.6583 16.5488 13.3417 16.5488 13.1464 16.3536L12.1464 15.3536C11.9512 15.1583 11.9512 14.8417 12.1464 14.6464C12.3417 14.4512 12.6583 14.4512 12.8536 14.6464L13.5 15.2929L16.1464 12.6464C16.3417 12.4512 16.6583 12.4512 16.8536 12.6464Z',
    );
    this.addChild(path5);
    this.useParams(params);
  }
}
