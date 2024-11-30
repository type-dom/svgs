import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlFlagPrideFilledSvg extends TypeSvgSvg {
  className: 'FlFlagPrideFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: ITypeConfig = {}) {
    super();
    this.className = 'FlFlagPrideFilledSvg';
    this.attr.addObj({
      name: 'FlFlagPrideFilledSvg',
      title: 'FlFlagPrideFilledSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M3.75 3.75H16.25V5.25H3.75V3.75Z',
    );
    this.addChild(path0);
    const path1 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path1.setData(
      'M3.75 5H16.25V6.5H3.75V5Z',
    );
    this.addChild(path1);
    const path2 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path2.setData(
      'M3.75 6H16.25V7.75H3.75V6Z',
    );
    this.addChild(path2);
    const path3 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path3.setData(
      'M3.75 7.5H16.25V9.25H3.75V7.5Z',
    );
    this.addChild(path3);
    const path4 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path4.setData(
      'M3.75 9H16.25V10.25H3.75V9Z',
    );
    this.addChild(path4);
    const path5 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path5.setData(
      'M3.75 10H16.25V11.25H3.75V10Z',
    );
    this.addChild(path5);
    const path6 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path6.setData(
      'M3.5 3H16.5C16.7761 3 17 3.22386 17 3.5V11.5C17 11.7761 16.7761 12 16.5 12H4L4 17.5C4 17.7761 3.77614 18 3.5 18C3.22386 18 3 17.7761 3 17.5V3.5C3 3.22386 3.22386 3 3.5 3ZM4 4V11H16V4H4Z',
    );
    this.addChild(path6);
    this.useParams(params);
  }
}
