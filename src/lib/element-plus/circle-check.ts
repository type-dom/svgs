import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElCircleCheckSvg extends TypeSvgSvg {
  className: 'ElCircleCheckSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'ElCircleCheckSvg';
    this.attr.addObj({
      name: 'ElCircleCheckSvg',
      title: 'ElCircleCheckSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z',
    );
    this.addChild(path0);
    const path1 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path1.setData(
      'M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z',
    );
    this.addChild(path1);
    this.useParams(params);
  }
}
