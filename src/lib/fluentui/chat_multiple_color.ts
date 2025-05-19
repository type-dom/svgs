import { TypeProps, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class FlChatMultipleColorSvg extends TypeSvgSvg {
  className: 'FlChatMultipleColorSvg';
  override childNodes: SvgPath[];
  constructor(params: TypeProps = {}) {
    super();
    this.className = 'FlChatMultipleColorSvg';
    this.attr.addObj({
      name: 'FlChatMultipleColorSvg',
      title: 'FlChatMultipleColorSvg'
    });
    this.attr.addObj({
      viewBox: '0 0 20 20',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path0.setData(
      'M11.5 5C15.0899 5 18 7.91015 18 11.5C18 12.651 17.7004 13.7334 17.1748 14.6719L17.9705 16.7542C18.2638 17.5216 17.5578 18.2957 16.7667 18.0741L14.2793 17.3774C13.4361 17.7768 12.4935 18 11.5 18C7.91015 18 5 15.0899 5 11.5C5 7.91015 7.91015 5 11.5 5Z',
    );
    this.addChild(path0);
    const path1 = new SvgPath({ attrObj: { fill: 'currentColor' }});
    path1.setData(
      'M8.53828 2C4.94843 2 2.03828 4.91015 2.03828 8.5C2.03828 9.65101 2.33787 10.7334 2.86353 11.6719L2.06779 13.7542C1.7745 14.5216 2.48048 15.2957 3.2716 15.0741L5.75898 14.3774C6.60219 14.7768 7.5448 15 8.53828 15C12.1281 15 15.0383 12.0899 15.0383 8.5C15.0383 4.91015 12.1281 2 8.53828 2Z',
    );
    this.addChild(path1);
    this.useParams(params);
  }
}
