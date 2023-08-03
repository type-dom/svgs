import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdProcessSvg extends TypeSvgSvg {
  className: 'TdProcessSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdProcessSvg';
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M503.104 251.264a125.504 125.504 0 1 0 0-251.008 125.504 125.504 0 0 0 0 251.008z m0-188.16a62.72 62.72 0 0 1 0 125.248 62.72 62.72 0 0 1 0-125.184zM125.632 584.576a125.504 125.504 0 1 0 0 251.008 125.504 125.504 0 0 0 0-251.008z m0 188.16a62.72 62.72 0 0 1 0-125.248 62.72 62.72 0 0 1 0 125.184z m755.2-188.16a125.504 125.504 0 1 0 0 251.008 125.504 125.504 0 0 0 0-251.008z m0 188.16a62.72 62.72 0 0 1 0-125.248 62.72 62.72 0 0 1 0 125.184z',
    );
    this.childNodes.push(path0);
    const path1 = new SvgPath(this);
    path1.setData(
      'M502.208 918.72a387.52 387.52 0 0 1-246.08-88.32l-40.064 48.448a450.496 450.496 0 0 0 286.144 102.784 450.368 450.368 0 0 0 288.064-104.32l-40.32-48.32a387.392 387.392 0 0 1-247.68 89.728zM889.152 531.776h62.912a451.712 451.712 0 0 0-259.968-407.936l-26.56 56.96a388.608 388.608 0 0 1 223.616 350.976zM338.944 180.864l-26.624-57.024A451.712 451.712 0 0 0 52.352 531.776h62.976a388.608 388.608 0 0 1 223.616-350.912z',
    );
    this.childNodes.push(path1);
  }
}
