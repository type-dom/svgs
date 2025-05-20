import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlShieldCheckmarkColorSvg extends TypeSvgSvg {
  className: 'FlShieldCheckmarkColorSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlShieldCheckmarkColorSvg';
    this.attr.addObj({
      name: 'FlShieldCheckmarkColorSvg',
      title: 'FlShieldCheckmarkColorSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M9.72265 2.08397C9.8906 1.97201 10.1094 1.97201 10.2774 2.08397C12.2155 3.3761 14.3117 4.1823 16.5707 4.50503C16.817 4.54021 17 4.75117 17 5V9.5C17 13.3913 14.693 16.2307 10.1795 17.9667C10.064 18.0111 9.93605 18.0111 9.82051 17.9667C5.30699 16.2307 3 13.3913 3 9.5V5C3 4.75117 3.18296 4.54021 3.42929 4.50503C5.68833 4.1823 7.78446 3.3761 9.72265 2.08397Z',
    );
    this.addChild(path0);
    const path1 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path1.setData(
      'M9.72265 2.08397C9.8906 1.97201 10.1094 1.97201 10.2774 2.08397C12.2155 3.3761 14.3117 4.1823 16.5707 4.50503C16.817 4.54021 17 4.75117 17 5V9.5C17 13.3913 14.693 16.2307 10.1795 17.9667C10.064 18.0111 9.93605 18.0111 9.82051 17.9667C5.30699 16.2307 3 13.3913 3 9.5V5C3 4.75117 3.18296 4.54021 3.42929 4.50503C5.68833 4.1823 7.78446 3.3761 9.72265 2.08397Z',
    );
    this.addChild(path1);
    const path2 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path2.setData(
      'M19 14.5C19 12.0147 16.9853 10 14.5 10C12.0147 10 10 12.0147 10 14.5C10 16.9853 12.0147 19 14.5 19C16.9853 19 19 16.9853 19 14.5Z',
    );
    this.addChild(path2);
    const path3 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path3.setData(
      'M16.8536 12.6464C17.0488 12.8417 17.0488 13.1583 16.8536 13.3536L13.8536 16.3536C13.6583 16.5488 13.3417 16.5488 13.1464 16.3536L12.1464 15.3536C11.9512 15.1583 11.9512 14.8417 12.1464 14.6464C12.3417 14.4512 12.6583 14.4512 12.8536 14.6464L13.5 15.2929L16.1464 12.6464C16.3417 12.4512 16.6583 12.4512 16.8536 12.6464Z',
    );
    this.addChild(path3);
    this.useParams(params);
  }
}
