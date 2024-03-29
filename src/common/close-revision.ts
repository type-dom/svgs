import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class TdCloseRevisionSvg extends TypeSvgSvg {
  className: 'TdCloseRevisionSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'TdCloseRevisionSvg';
    this.addAttrObj({
      name: 'TdCloseRevisionSvg',
      title: 'TdCloseRevisionSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M839 152v596c0 32.9-13 64-36.5 87.5S747.9 872 715 872H185V152h654m8-72H177c-35.2 0-64 28.8-64 64v736c0 35.2 28.8 64 64 64h538c107.8 0 196-88.2 196-196V144c0-35.2-28.8-64-64-64z',
    );
    this.childNodes.push(path0);
    const path1 = new SvgPath({ parent: this });
    path1.setData(
      'M282.7 228h210c22 0 40 18 40 40s-18 40-40 40h-210c-22 0-40-18-40-40s18-40 40-40zM278.7 412h288c19.8 0 36 18 36 40s-16.2 40-36 40h-288c-19.8 0-36-18-36-40s16.2-40 36-40zM362.7 829.1h-80c-22 0-40-18-40-40s18-40 40-40h80c22 0 40 18 40 40s-18 40-40 40z',
    );
    this.childNodes.push(path1);
    this.setConfig(config);
  }
}
