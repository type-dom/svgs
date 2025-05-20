import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlSlashForwardRegularSvg extends TypeSvgSvg {
  className: 'FlSlashForwardRegularSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlSlashForwardRegularSvg';
    this.attr.addObj({
      name: 'FlSlashForwardRegularSvg',
      title: 'FlSlashForwardRegularSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M12.6582 2.02567C12.9202 2.113 13.0618 2.39616 12.9745 2.65813L7.97448 17.6581C7.88715 17.9201 7.60399 18.0617 7.34202 17.9744C7.08005 17.887 6.93847 17.6039 7.02579 17.3419L12.0258 2.3419C12.1131 2.07993 12.3963 1.93835 12.6582 2.02567Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
