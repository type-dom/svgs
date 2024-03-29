import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class TdStaticQRCodeSvg extends TypeSvgSvg {
  className: 'TdStaticQRCodeSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'TdStaticQRCodeSvg';
    this.addAttrObj({
      name: 'TdStaticQRCodeSvg',
      title: 'TdStaticQRCodeSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M368 560H176c-52.8 0-96 43.2-96 96v192c0 52.8 43.2 96 96 96h192c52.8 0 96-43.2 96-96V656c0-52.8-43.2-96-96-96z m32 288c0 17.6-14.4 32-32 32H176c-17.6 0-32-14.4-32-32V656c0-17.6 14.4-32 32-32h192c17.6 0 32 14.4 32 32v192zM368 80H176c-52.8 0-96 43.2-96 96v192c0 52.8 43.2 96 96 96h192c52.8 0 96-43.2 96-96V176c0-52.8-43.2-96-96-96z m32 288c0 17.6-14.4 32-32 32H176c-17.6 0-32-14.4-32-32V176c0-17.6 14.4-32 32-32h192c17.6 0 32 14.4 32 32v192z m496 192c-17.6 0-32 14.4-32 32v320c0 17.6 14.4 32 32 32s32-14.4 32-32V592c0-17.6-14.4-32-32-32zM848 80H656c-52.8 0-96 43.2-96 96v192c0 52.8 43.2 96 96 96h192c52.8 0 96-43.2 96-96V176c0-52.8-43.2-96-96-96z m32 288c0 17.6-14.4 32-32 32H656c-17.6 0-32-14.4-32-32V176c0-17.6 14.4-32 32-32h192c17.6 0 32 14.4 32 32v192zM608 608c-17.6 0-32 14.4-32 32v272c0 17.6 14.4 32 32 32s32-14.4 32-32V640c0-17.6-14.4-32-32-32z m144 96c-17.6 0-32 14.4-32 32v176c0 17.6 14.4 32 32 32s32-14.4 32-32V736c0-17.6-14.4-32-32-32z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
