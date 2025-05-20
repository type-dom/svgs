import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlArrowReplyRegularSvg extends TypeSvgSvg {
  className: 'FlArrowReplyRegularSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlArrowReplyRegularSvg';
    this.attr.addObj({
      name: 'FlArrowReplyRegularSvg',
      title: 'FlArrowReplyRegularSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M7.35355 3.64645C7.54882 3.84171 7.54882 4.15829 7.35355 4.35355L3.70711 8H10.5C14.6421 8 18 11.3579 18 15.5C18 15.7761 17.7761 16 17.5 16C17.2239 16 17 15.7761 17 15.5C17 11.9101 14.0899 9 10.5 9H3.70711L7.35355 12.6464C7.54882 12.8417 7.54882 13.1583 7.35355 13.3536C7.15829 13.5488 6.84171 13.5488 6.64645 13.3536L2.14645 8.85355C1.95118 8.65829 1.95118 8.34171 2.14645 8.14645L6.64645 3.64645C6.84171 3.45118 7.15829 3.45118 7.35355 3.64645Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
