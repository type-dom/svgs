import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class TdPagingSvg extends TypeSvgSvg {
  className: 'TdPagingSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'TdPagingSvg';
    this.attr.addObj({
      name: 'TdPagingSvg',
      title: 'TdPagingSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M912 64v256H112V64h66.688v192h666.688V64zM112 960v-256h800v256h-66.624v-192H178.688v192zM64 448h896v128H64z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
