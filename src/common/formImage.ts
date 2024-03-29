import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class TdFormImageSvg extends TypeSvgSvg {
  className: 'TdFormImageSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'TdFormImageSvg';
    this.addAttrObj({
      name: 'TdFormImageSvg',
      title: 'TdFormImageSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M64.285706 148.246369l0 727.507262 895.429611 0L959.715317 148.246369 64.285706 148.246369zM903.750455 819.791062 120.249545 819.791062 120.249545 204.208938l783.50091 0L903.750455 819.791062zM679.893052 344.114338c0-46.362934 37.58246-83.942831 83.94627-83.942831 46.362787 0 83.94627 37.58092 83.94627 83.942831 0 46.360887-37.584507 83.942831-83.94627 83.942831C717.475512 428.057169 679.893052 390.474202 679.893052 344.114338zM847.786616 763.829516l-671.572209 0 167.893564-447.696462 223.857403 279.8108 111.928701-83.942831L847.786616 763.829516z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
