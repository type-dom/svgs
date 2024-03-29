import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ElPictureFilledSvg extends TypeSvgSvg {
  className: 'ElPictureFilledSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'ElPictureFilledSvg';
    this.addAttrObj({
      name: 'ElPictureFilledSvg',
      title: 'ElPictureFilledSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M96 896a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h832a32 32 0 0 1 32 32v704a32 32 0 0 1-32 32H96zm315.52-228.48-68.928-68.928a32 32 0 0 0-45.248 0L128 768.064h778.688l-242.112-290.56a32 32 0 0 0-49.216 0L458.752 665.408a32 32 0 0 1-47.232 2.112zM256 384a96 96 0 1 0 192.064-.064A96 96 0 0 0 256 384z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
