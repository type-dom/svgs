import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlNumberCircle4FilledSvg extends TypeSvgSvg {
  className: 'FlNumberCircle4FilledSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlNumberCircle4FilledSvg';
    this.attr.addObj({
      name: 'FlNumberCircle4FilledSvg',
      title: 'FlNumberCircle4FilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10ZM11.9949 6.30866C11.9946 5.57105 11.0414 5.27697 10.6255 5.88616L7.09225 11.0617C6.82037 11.46 7.10557 12 7.58779 12H10.9977L10.9984 13.5002C10.9986 13.7764 11.2225 14.0001 11.4987 14C11.7748 13.9999 11.9986 13.7759 11.9984 13.4998L11.9977 12H13C13.2761 12 13.5 11.7761 13.5 11.5C13.5 11.2239 13.2761 11 13 11H11.9972L11.9949 6.30866ZM10.9953 7.11805L10.9972 11H8.34518L10.9953 7.11805Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
