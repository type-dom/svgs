import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlHomeColorSvg extends TypeSvgSvg {
  className: 'FlHomeColorSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlHomeColorSvg';
    this.attr.addObj({
      name: 'FlHomeColorSvg',
      title: 'FlHomeColorSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M7 11H13V17H7V11Z',
    );
    this.addChild(path0);
    const path1 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path1.setData(
      'M11.0025 3.38421C10.4323 2.87193 9.56767 2.87193 8.9975 3.38421L3.4975 8.32574C3.18086 8.61023 3 9.01586 3 9.44154V15.4957C3 16.3241 3.67157 16.9957 4.5 16.9957H6V17H8V11.4957C8 11.2195 8.22386 10.9957 8.5 10.9957H11.5C11.7761 10.9957 12 11.2195 12 11.4957V17H15V16.9957H15.5C16.3284 16.9957 17 16.3241 17 15.4957V9.44154C17 9.01586 16.8191 8.61023 16.5025 8.32574L11.0025 3.38421Z',
    );
    this.addChild(path1);
    const path2 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path2.setData(
      'M10.6435 2.23904C10.2764 1.92032 9.72363 1.92032 9.35649 2.23904L2.32596 8.34245C1.92551 8.69009 1.88899 9.28945 2.24439 9.68116C2.59978 10.0729 3.21252 10.1086 3.61297 9.76095L10 4.21619L16.387 9.76095C16.7875 10.1086 17.4002 10.0729 17.7556 9.68116C18.111 9.28945 18.0745 8.69009 17.674 8.34245L10.6435 2.23904Z',
    );
    this.addChild(path2);
    const path3 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path3.setData(
      'M9.35649 2.23904C9.72363 1.92032 10.2764 1.92032 10.6435 2.23904L17.674 8.34245C18.0745 8.69009 18.111 9.28945 17.7556 9.68116C17.4002 10.0729 16.7875 10.1086 16.387 9.76095L10 4.21619L3.61297 9.76095C3.21252 10.1086 2.59978 10.0729 2.24439 9.68116C1.88899 9.28945 1.92551 8.69009 2.32596 8.34245L9.35649 2.23904Z',
    );
    this.addChild(path3);
    this.useParams(params);
  }
}
