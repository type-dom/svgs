import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdTdQRCodeSvg extends TypeSvgSvg {
  className: 'TdTdQRCodeSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdTdQRCodeSvg';
    this.addAttrObj({
      name: 'tdQRCode',
      title: 'tdQRCode'
    });
    this.addAttrObj({
      viewBox: '50 50 974 974',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M256 256h73.143v73.143H256V256zM841.143 841.143h73.143v73.143h-73.143v-73.143zM841.143 694.857H768V548.571H548.571V914.286h73.143V621.714h73.143V768h219.429V548.571h-73.143z',
    );
    this.childNodes.push(path0);
    const path1 = new SvgPath(this);
    path1.setData(
      'M694.857 841.143H768v73.143h-73.143v-73.143zM109.714 475.429H475.43V109.714H109.714V475.43z m73.143-292.572h219.429v219.429H182.857V182.857zM256 694.857h73.143V768H256v-73.143z',
    );
    this.childNodes.push(path1);
    const path2 = new SvgPath(this);
    path2.setData(
      'M109.714 914.286H475.43V548.57H109.714v365.715z m73.143-292.572h219.429v219.429H182.857V621.714zM694.857 256H768v73.143h-73.143V256z',
    );
    this.childNodes.push(path2);
    const path3 = new SvgPath(this);
    path3.setData(
      'M548.571 109.714V475.43h365.715V109.714H548.57z m292.572 292.572H621.714V182.857h219.429v219.429z',
    );
    this.childNodes.push(path3);
  }
}
