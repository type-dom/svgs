import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlDocumentFolderColorSvg extends TypeSvgSvg {
  className: 'FlDocumentFolderColorSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlDocumentFolderColorSvg';
    this.attr.addObj({
      name: 'FlDocumentFolderColorSvg',
      title: 'FlDocumentFolderColorSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M6 6C6 4.89543 6.89543 4 8 4H14C15.1046 4 16 4.89543 16 6V15C16 16.1046 15.1046 17 14 17H8C6.89543 17 6 16.1046 6 15V6Z',
    );
    this.addChild(path0);
    const path1 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path1.setData(
      'M6 6C6 4.89543 6.89543 4 8 4H14C15.1046 4 16 4.89543 16 6V15C16 16.1046 15.1046 17 14 17H8C6.89543 17 6 16.1046 6 15V6Z',
    );
    this.addChild(path1);
    const path2 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path2.setData(
      'M4 4C4 2.89543 4.89543 2 6 2H12C13.1046 2 14 2.89543 14 4V15C14 16.1046 13.1046 17 12 17H6C4.89543 17 4 16.1046 4 15V4Z',
    );
    this.addChild(path2);
    const path3 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path3.setData(
      'M5 7C3.89543 7 3 7.89543 3 9V15.5C3 16.8807 4.11929 18 5.5 18H14.5C15.8807 18 17 16.8807 17 15.5V14C17 12.8954 16.1046 12 15 12H13.1213C12.8561 12 12.6017 11.8946 12.4142 11.7071L8.29289 7.58579C7.91782 7.21071 7.40911 7 6.87868 7H5Z',
    );
    this.addChild(path3);
    this.useParams(params);
  }
}
