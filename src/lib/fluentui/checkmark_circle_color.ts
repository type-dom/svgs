import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlCheckmarkCircleColorSvg extends TypeSvgSvg {
  className: 'FlCheckmarkCircleColorSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlCheckmarkCircleColorSvg';
    this.attr.addObj({
      name: 'FlCheckmarkCircleColorSvg',
      title: 'FlCheckmarkCircleColorSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10Z',
    );
    this.addChild(path0);
    const path1 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path1.setData(
      'M13.3536 7.64645C13.5488 7.84171 13.5488 8.15829 13.3536 8.35355L9.35355 12.3536C9.15829 12.5488 8.84171 12.5488 8.64645 12.3536L6.64645 10.3536C6.45118 10.1583 6.45118 9.84171 6.64645 9.64645C6.84171 9.45118 7.15829 9.45118 7.35355 9.64645L9 11.2929L12.6464 7.64645C12.8417 7.45118 13.1583 7.45118 13.3536 7.64645Z',
    );
    this.addChild(path1);
    this.useParams(params);
  }
}
