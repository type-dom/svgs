import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElTopRightSvg extends TypeSvgSvg {
  className: 'ElTopRightSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'ElTopRightSvg';
    this.attr.addObj({
      name: 'ElTopRightSvg',
      title: 'ElTopRightSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M768 256H353.6a32 32 0 1 1 0-64H800a32 32 0 0 1 32 32v448a32 32 0 0 1-64 0V256z',
    );
    this.addChild(path0);
    const path1 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path1.setData(
      'M777.344 201.344a32 32 0 0 1 45.312 45.312l-544 544a32 32 0 0 1-45.312-45.312l544-544z',
    );
    this.addChild(path1);
    this.useParams(params);
  }
}
