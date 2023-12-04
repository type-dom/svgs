import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdInventorySvg extends TypeSvgSvg {
  className: 'TdInventorySvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdInventorySvg';
    this.addAttrObj({
      name: 'TdInventorySvg',
      title: 'TdInventorySvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M885.333333 981.333333H181.333333a53.393333 53.393333 0 0 1-53.333333-53.333333V224a53.393333 53.393333 0 0 1 53.333333-53.333333h53.333334a21.333333 21.333333 0 0 1 0 42.666666h-53.333334a10.666667 10.666667 0 0 0-10.666666 10.666667v704a10.666667 10.666667 0 0 0 10.666666 10.666667h704a10.666667 10.666667 0 0 0 10.666667-10.666667V224a10.666667 10.666667 0 0 0-10.666667-10.666667h-53.333333a21.333333 21.333333 0 0 1 0-42.666666h53.333333a53.393333 53.393333 0 0 1 53.333334 53.333333v704a53.393333 53.393333 0 0 1-53.333334 53.333333z m-522.666666-170.666666a21.266667 21.266667 0 0 1-15.086667-6.246667l-42.666667-42.666667a21.333333 21.333333 0 0 1 30.173334-30.173333l27.58 27.586667 70.246666-70.253334a21.333333 21.333333 0 0 1 30.173334 30.173334l-85.333334 85.333333A21.266667 21.266667 0 0 1 362.666667 810.666667z m384-42.666667H533.333333a21.333333 21.333333 0 0 1 0-42.666667h213.333334a21.333333 21.333333 0 0 1 0 42.666667zM362.666667 640a21.266667 21.266667 0 0 1-15.086667-6.246667l-42.666667-42.666666a21.333333 21.333333 0 0 1 30.173334-30.173334L362.666667 588.5l70.246666-70.253333a21.333333 21.333333 0 0 1 30.173334 30.173333l-85.333334 85.333333A21.266667 21.266667 0 0 1 362.666667 640z m384-42.666667H533.333333a21.333333 21.333333 0 0 1 0-42.666666h213.333334a21.333333 21.333333 0 0 1 0 42.666666zM362.666667 469.333333a21.266667 21.266667 0 0 1-15.086667-6.246666l-42.666667-42.666667a21.333333 21.333333 0 0 1 30.173334-30.173333L362.666667 417.833333l70.246666-70.253333a21.333333 21.333333 0 0 1 30.173334 30.173333l-85.333334 85.333334A21.266667 21.266667 0 0 1 362.666667 469.333333z m384-42.666666H533.333333a21.333333 21.333333 0 0 1 0-42.666667h213.333334a21.333333 21.333333 0 0 1 0 42.666667z m0-170.666667H320a21.333333 21.333333 0 0 1-21.333333-21.333333c0-26.046667 13.273333-50.786667 38.38-71.546667 19.54-16.153333 46.053333-29.666667 77.186666-39.38a129.22 129.22 0 0 1 41.453334-54.84 128 128 0 0 1 155.293333 0 129.22 129.22 0 0 1 41.453333 54.84c31.133333 9.713333 57.653333 23.226667 77.186667 39.38C754.726667 183.88 768 208.62 768 234.666667a21.333333 21.333333 0 0 1-21.333333 21.333333z m-398.38-42.666667h370.093333c-4.493333-6.926667-10.493333-12.82-15.953333-17.333333-17.166667-14.193333-42.14-26.066667-72.226667-34.32a21.333333 21.333333 0 0 1-14.853333-14.666667C604.893333 110.666667 571.166667 85.333333 533.333333 85.333333s-71.56 25.333333-82 61.673334a21.333333 21.333333 0 0 1-14.853333 14.666666c-30.1 8.26-55.073333 20.133333-72.24 34.326667-5.46 4.513333-11.46 10.406667-15.953333 17.333333z',
    );
    this.childNodes.push(path0);
  }
}
