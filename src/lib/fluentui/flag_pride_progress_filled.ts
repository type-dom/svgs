import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlFlagPrideProgressFilledSvg extends TypeSvgSvg {
  className: 'FlFlagPrideProgressFilledSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlFlagPrideProgressFilledSvg';
    this.attr.addObj({
      name: 'FlFlagPrideProgressFilledSvg',
      title: 'FlFlagPrideProgressFilledSvg'
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
      'M11 7.5L7 3.5H4.5V11.5H7L11 7.5Z',
    );
    this.addChild(path6);
    const path7 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path7.setData(
      'M9.5 7.5L5.5 3.5H3V11.5H5.5L9.5 7.5Z',
    );
    this.addChild(path7);
    const path8 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path8.setData(
      'M8 7.5L4 3.5H3.5V11.5H4L8 7.5Z',
    );
    this.addChild(path8);
    const path9 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path9.setData(
      'M6.5 7.5L3.5 4.5V10.5L6.5 7.5Z',
    );
    this.addChild(path9);
    const path10 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path10.setData(
      'M7.50049 12C7.50082 12 7.50016 12 7.50049 12H4L4 17.5C4 17.7761 3.77614 18 3.5 18C3.22386 18 3 17.7761 3 17.5V3.5C3 3.22386 3.22386 3 3.5 3H7.49991C7.49986 3 7.49997 3 7.49991 3H16.5C16.7761 3 17 3.22386 17 3.5V11.5C17 11.7761 16.7761 12 16.5 12H7.50049ZM7.29289 4H4V11H7.29289L10.7929 7.5L7.29289 4ZM8.70711 4L11.8536 7.14645C12.0488 7.34171 12.0488 7.65829 11.8536 7.85355L8.70711 11H16V4H8.70711Z',
    );
    this.addChild(path10);
    this.useParams(params);
  }
}
