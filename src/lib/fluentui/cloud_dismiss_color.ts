import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlCloudDismissColorSvg extends TypeSvgSvg {
  className: 'FlCloudDismissColorSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlCloudDismissColorSvg';
    this.attr.addObj({
      name: 'FlCloudDismissColorSvg',
      title: 'FlCloudDismissColorSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M10 2C12.8166 2 14.4145 3.92329 14.6469 6.24599L14.7179 6.24599C16.5306 6.24599 18 7.75792 18 9.62299C18 11.4881 16.5306 13 14.7179 13H5.28205C3.46942 13 2 11.4881 2 9.62299C2 7.75792 3.46942 6.24599 5.28207 6.24599L5.35314 6.24599C5.58687 3.90802 7.18335 2 10 2Z',
    );
    this.addChild(path0);
    const path1 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path1.setData(
      'M9 9.5C9 11.433 7.433 13 5.5 13C3.567 13 2 11.433 2 9.5C2 7.567 3.567 6.25 5.5 6.25C7.433 6.25 9 7.567 9 9.5Z',
    );
    this.addChild(path1);
    const path2 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path2.setData(
      'M9.99998 12C12.7614 12 14.7 9.76142 14.7 7C14.7 4.23858 13.0002 2 9.99998 2C7.27562 2 5.62353 3.84587 5.34277 6.25293C5.39495 6.25098 5.44743 6.25 5.50017 6.25C7.43317 6.25 9.00017 7.567 9.00017 9.5C9.00017 10.3192 8.71872 11.0727 8.24723 11.669C8.7795 11.8828 9.3682 12 9.99998 12Z',
    );
    this.addChild(path2);
    const path3 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path3.setData(
      'M9.99998 12C12.7614 12 14.7 9.76142 14.7 7C14.7 4.23858 13.0002 2 9.99998 2C7.27562 2 5.62353 3.84587 5.34277 6.25293C5.39495 6.25098 5.44743 6.25 5.50017 6.25C7.43317 6.25 9.00017 7.567 9.00017 9.5C9.00017 10.3192 8.71872 11.0727 8.24723 11.669C8.7795 11.8828 9.3682 12 9.99998 12Z',
    );
    this.addChild(path3);
    const path4 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path4.setData(
      'M14.6469 6.24599C14.4145 3.92329 12.8166 2 10 2C7.18335 2 5.58687 3.90802 5.35314 6.24599L5.28207 6.24599C3.46942 6.24599 2 7.75792 2 9.62299C2 11.4881 3.46942 13 5.28205 13H14.7179C16.5306 13 18 11.4881 18 9.62299C18 7.75792 16.5306 6.24599 14.7179 6.24599L14.6469 6.24599Z',
    );
    this.addChild(path4);
    const path5 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path5.setData(
      'M14.6469 6.24599C14.4145 3.92329 12.8166 2 10 2C7.18335 2 5.58687 3.90802 5.35314 6.24599L5.28207 6.24599C3.46942 6.24599 2 7.75792 2 9.62299C2 11.4881 3.46942 13 5.28205 13H14.7179C16.5306 13 18 11.4881 18 9.62299C18 7.75792 16.5306 6.24599 14.7179 6.24599L14.6469 6.24599Z',
    );
    this.addChild(path5);
    const path6 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path6.setData(
      'M18 13.5C18 15.9853 15.9853 18 13.5 18C11.0147 18 9 15.9853 9 13.5C9 11.0147 11.0147 9 13.5 9C15.9853 9 18 11.0147 18 13.5Z',
    );
    this.addChild(path6);
    const path7 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path7.setData(
      'M11.6464 11.6464C11.8417 11.4512 12.1583 11.4512 12.3536 11.6464L13.5 12.7929L14.6464 11.6464C14.8417 11.4512 15.1583 11.4512 15.3536 11.6464C15.5488 11.8417 15.5488 12.1583 15.3536 12.3536L14.2071 13.5L15.3536 14.6464C15.5488 14.8417 15.5488 15.1583 15.3536 15.3536C15.1583 15.5488 14.8417 15.5488 14.6464 15.3536L13.5 14.2071L12.3536 15.3536C12.1583 15.5488 11.8417 15.5488 11.6464 15.3536C11.4512 15.1583 11.4512 14.8417 11.6464 14.6464L12.7929 13.5L11.6464 12.3536C11.4512 12.1583 11.4512 11.8417 11.6464 11.6464Z',
    );
    this.addChild(path7);
    this.useParams(params);
  }
}
