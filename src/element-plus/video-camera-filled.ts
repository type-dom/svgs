import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElVideoCameraFilledSvg extends TypeSvgSvg {
  className: 'ElVideoCameraFilledSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'ElVideoCameraFilledSvg';
    this.addAttrObj({
      name: 'ElVideoCameraFilledSvg',
      title: 'ElVideoCameraFilledSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'm768 576 192-64v320l-192-64v96a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V480a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32v96zM192 768v64h384v-64H192zm192-480a160 160 0 0 1 320 0 160 160 0 0 1-320 0zm64 0a96 96 0 1 0 192.064-.064A96 96 0 0 0 448 288zm-320 32a128 128 0 1 1 256.064.064A128 128 0 0 1 128 320zm64 0a64 64 0 1 0 128 0 64 64 0 0 0-128 0z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
