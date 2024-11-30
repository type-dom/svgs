import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlSpeaker0FilledSvg extends TypeSvgSvg {
  className: 'FlSpeaker0FilledSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlSpeaker0FilledSvg';
    this.attr.addObj({
      name: 'FlSpeaker0FilledSvg',
      title: 'FlSpeaker0FilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M12 3.00588C12 2.13286 10.9597 1.67903 10.3198 2.27288L6.4476 5.86626C6.35513 5.95208 6.23364 5.99976 6.10749 5.99976H3.5C2.67157 5.99976 2 6.67134 2 7.49976V12.4998C2 13.3282 2.67157 13.9998 3.5 13.9998H6.10749C6.23364 13.9998 6.35513 14.0474 6.4476 14.1333L10.3198 17.7266C10.9597 18.3205 12 17.8667 12 16.9936V3.00588Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
