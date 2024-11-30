import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlCloudColorSvg extends TypeSvgSvg {
  className: 'FlCloudColorSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlCloudColorSvg';
    this.attr.addObj({
      name: 'FlCloudColorSvg',
      title: 'FlCloudColorSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M10 4C12.8166 4 14.4145 5.92329 14.6469 8.24599L14.7179 8.24599C16.5306 8.24599 18 9.75792 18 11.623C18 13.4881 16.5306 15 14.7179 15H5.28205C3.46942 15 2 13.4881 2 11.623C2 9.75792 3.46942 8.24599 5.28207 8.24599L5.35314 8.24599C5.58687 5.90802 7.18335 4 10 4Z',
    );
    this.addChild(path0);
    const path1 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path1.setData(
      'M9 11.5C9 13.433 7.433 15 5.5 15C3.567 15 2 13.433 2 11.5C2 9.567 3.567 8.25 5.5 8.25C7.433 8.25 9 9.567 9 11.5Z',
    );
    this.addChild(path1);
    const path2 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path2.setData(
      'M9.99998 14C12.7614 14 14.7 11.7614 14.7 9C14.7 6.23858 13.0002 4 9.99998 4C7.27562 4 5.62353 5.84587 5.34277 8.25293C5.39495 8.25098 5.44743 8.25 5.50017 8.25C7.43317 8.25 9.00017 9.567 9.00017 11.5C9.00017 12.3192 8.71872 13.0727 8.24723 13.669C8.7795 13.8828 9.3682 14 9.99998 14Z',
    );
    this.addChild(path2);
    const path3 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path3.setData(
      'M9.99998 14C12.7614 14 14.7 11.7614 14.7 9C14.7 6.23858 13.0002 4 9.99998 4C7.27562 4 5.62353 5.84587 5.34277 8.25293C5.39495 8.25098 5.44743 8.25 5.50017 8.25C7.43317 8.25 9.00017 9.567 9.00017 11.5C9.00017 12.3192 8.71872 13.0727 8.24723 13.669C8.7795 13.8828 9.3682 14 9.99998 14Z',
    );
    this.addChild(path3);
    const path4 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path4.setData(
      'M10 4C12.8166 4 14.4145 5.92329 14.6469 8.24599L14.7179 8.24599C16.5306 8.24599 18 9.75792 18 11.623C18 13.4881 16.5306 15 14.7179 15H5.28205C3.46942 15 2 13.4881 2 11.623C2 9.75792 3.46942 8.24599 5.28207 8.24599L5.35314 8.24599C5.58687 5.90802 7.18335 4 10 4Z',
    );
    this.addChild(path4);
    this.useParams(params);
  }
}
