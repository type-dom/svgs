import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlCouchFilledSvg extends TypeSvgSvg {
  className: 'FlCouchFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlCouchFilledSvg';
    this.attr.addObj({
      name: 'FlCouchFilledSvg',
      title: 'FlCouchFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M14 4H6C4.89543 4 4 4.89543 4 6V7C5.3072 7 6.41713 7.83525 6.82899 9H13.171C13.5829 7.83525 14.6928 7 16 7V6C16 4.89543 15.1046 4 14 4ZM16 8C15.0663 8 14.282 8.63988 14.0617 9.50506C13.9936 9.77267 13.7761 10 13.5 10H6.5C6.22386 10 6.00641 9.77267 5.93829 9.50506C5.71803 8.63988 4.93374 8 4 8C2.89543 8 2 8.89543 2 10V12C2 13.1046 2.89543 14 4 14V15.5C4 15.7761 4.22386 16 4.5 16C4.77614 16 5 15.7761 5 15.5V14H15V15.5C15 15.7761 15.2239 16 15.5 16C15.7761 16 16 15.7761 16 15.5L16 14C17.1046 14 18 13.1046 18 12V10C18 8.89543 17.1046 8 16 8Z',
    );
    this.addChild(path0);
    this.useParams(params);
  }
}
