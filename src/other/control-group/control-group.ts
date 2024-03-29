import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class ControlGroupSvg extends TypeSvgSvg {
  className: 'ControlGroupSvg';
  childNodes: [SvgPath];
  constructor(config?: ITypeConfig) {
    super();
    this.className = 'ControlGroupSvg';
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
      name: 'control-group-svg',
    });
    this.resetSize(24, 24);
    const path = new SvgPath({ parent: this });
    path.setData('M241.28 208h-192a35.2 35.2 0 0 1-38.4-35.2 35.2 35.2 0 0 1 35.2-34.56h195.2a34.56 34.56 0 0 1 34.56 34.56 35.2 35.2 0 0 1-34.56 35.2zM984.32 208H463.36a35.2 35.2 0 0 1-34.56-35.2 34.56 34.56 0 0 1 34.56-34.56h520.96a35.2 35.2 0 0 1 35.2 34.56 35.2 35.2 0 0 1-35.2 35.2z',
      'M356.48 300.8a128 128 0 1 1 128-128 128 128 0 0 1-128 128z m0-176.64a48.64 48.64 0 0 0-49.28 48.64 49.28 49.28 0 1 0 97.92 0 48.64 48.64 0 0 0-48.64-48.64zM241.28 876.16h-192a35.2 35.2 0 0 1-35.2-34.56 35.2 35.2 0 0 1 35.2-35.2h192a35.2 35.2 0 0 1 34.56 35.2 34.56 34.56 0 0 1-34.56 34.56zM984.32 876.16H463.36a34.56 34.56 0 0 1-34.56-34.56 35.2 35.2 0 0 1 34.56-35.2h520.96a35.2 35.2 0 0 1 35.2 35.2 35.2 35.2 0 0 1-35.2 34.56z',
      'M356.48 968.96a128 128 0 1 1 128-128 128 128 0 0 1-128 128z m0-176a48.64 48.64 0 1 0 48.64 48.64 48.64 48.64 0 0 0-48.64-48.64zM789.76 543.36h192a35.2 35.2 0 1 0 0-69.76h-192a35.2 35.2 0 1 0 0 69.76zM46.08 543.36h520.96a35.2 35.2 0 0 0 0-69.76H46.08a35.2 35.2 0 1 0 0 69.76z',
      'M546.56 512a128 128 0 1 1 128 128 128 128 0 0 1-128-128z m78.72 0a49.28 49.28 0 1 0 49.28-49.28 49.28 49.28 0 0 0-49.28 49.28z');
    this.childNodes = [path];
    this.setConfig(config);
  }
}
