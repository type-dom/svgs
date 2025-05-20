import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlEditColorSvg extends TypeSvgSvg {
  className: 'FlEditColorSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlEditColorSvg';
    this.attr.addObj({
      name: 'FlEditColorSvg',
      title: 'FlEditColorSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M12.2511 3.54199C12.2511 3.54199 8.24014 7.55284 3.99902 11.7938L5.05017 14.9497L8.22264 15.9843L16.458 7.74886L12.2511 3.54199Z',
    );
    this.addChild(path0);
    const path1 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path1.setData(
      'M4.11949 11.6738L3.54545 12.2475C3.21763 12.5753 2.99008 12.9898 2.88953 13.4424L2.01191 17.3923C1.97483 17.5592 2.02559 17.7335 2.14649 17.8543C2.26739 17.9752 2.44166 18.0259 2.60855 17.9888L6.53494 17.1157C7.00237 17.0117 7.43048 16.7767 7.76907 16.4381L8.32636 15.8807C8.32636 15.8807 6.7205 15.4007 5.65998 14.3402C4.59947 13.2797 4.11949 11.6738 4.11949 11.6738Z',
    );
    this.addChild(path1);
    const path2 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path2.setData(
      'M12.9204 2.87317C14.1029 1.69077 16.0273 1.71505 17.1795 2.92689C18.2914 4.09631 18.2682 5.93899 17.1272 7.08003L15.044 9.16323L10.8372 4.95639L12.9204 2.87317Z',
    );
    this.addChild(path2);
    const path3 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path3.setData(
      'M10.2629 5.53032L11.8976 3.896C11.8976 3.896 12.3748 5.50458 13.4354 6.56511C14.4959 7.62565 16.1045 8.10286 16.1045 8.10286L14.4866 9.72089C14.4866 9.72089 12.8697 9.2519 11.8091 8.19129C10.7484 7.13058 10.2629 5.53032 10.2629 5.53032Z',
    );
    this.addChild(path3);
    this.useParams(params);
  }
}
