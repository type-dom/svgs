import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlDocumentAddColorSvg extends TypeSvgSvg {
  className: 'FlDocumentAddColorSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlDocumentAddColorSvg';
    this.attr.addObj({
      name: 'FlDocumentAddColorSvg',
      title: 'FlDocumentAddColorSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M10 2H5.5C4.67157 2 4 2.67157 4 3.5V16.5C4 17.3284 4.67157 18 5.5 18H14.5C15.3284 18 16 17.3284 16 16.5V8L12 6L10 2Z',
    );
    this.addChild(path0);
    const path1 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path1.setData(
      'M10 2H5.5C4.67157 2 4 2.67157 4 3.5V16.5C4 17.3284 4.67157 18 5.5 18H14.5C15.3284 18 16 17.3284 16 16.5V8L12 6L10 2Z',
    );
    this.addChild(path1);
    const path2 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path2.setData(
      'M10 2H5.5C4.67157 2 4 2.67157 4 3.5V16.5C4 17.3284 4.67157 18 5.5 18H14.5C15.3284 18 16 17.3284 16 16.5V8L12 6L10 2Z',
    );
    this.addChild(path2);
    const path3 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path3.setData(
      'M10.01 6.5V2L16.01 8H11.51C10.6816 8 10.01 7.32843 10.01 6.5Z',
    );
    this.addChild(path3);
    const path4 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path4.setData(
      'M10 14.5C10 12.0147 7.98528 10 5.5 10C3.01472 10 1 12.0147 1 14.5C1 16.9853 3.01472 19 5.5 19C7.98528 19 10 16.9853 10 14.5Z',
    );
    this.addChild(path4);
    const path5 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path5.setData(
      'M5.01268 12.5C5.01268 12.2239 5.23653 12 5.51268 12C5.78882 12 6.01268 12.2239 6.01268 12.5V16.5C6.01268 16.7761 5.78882 17 5.51268 17C5.23653 17 5.01268 16.7761 5.01268 16.5V12.5Z',
    );
    this.addChild(path5);
    const path6 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path6.setData(
      'M7.50982 13.9887C7.78595 13.9872 8.01107 14.2098 8.01262 14.4859C8.01418 14.762 7.79159 14.9871 7.51545 14.9887L3.51551 15.0112C3.23937 15.0128 3.01426 14.7902 3.0127 14.5141C3.01115 14.2379 3.23374 14.0128 3.50988 14.0113L7.50982 13.9887Z',
    );
    this.addChild(path6);
    this.useParams(params);
  }
}
