import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class TdCrossSvg extends TypeSvgSvg {
  className: 'TdCrossSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'TdCrossSvg';
    this.addAttrObj({
      name: 'TdCrossSvg',
      title: 'TdCrossSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M86.016 0l-83.968 70.656c149.504 111.616 288.768 239.616 411.136 367.616-187.392 188.928-334.336 374.784-411.648 449.536l159.744 133.632c56.832-117.248 180.224-294.912 345.6-481.28 165.376 187.392 289.28 366.08 346.112 483.84 0 0 155.648-165.376 169.472-139.776C962.56 816.64 816.128 620.032 619.52 418.816c112.64-115.712 239.104-230.4 374.272-331.264l-36.864-68.608c-153.088 76.288-299.008 189.44-430.08 309.76-132.096-125.44-281.6-244.736-440.832-328.704z',
    );
    this.childNodes.push(path0);
    this.setConfig(config);
  }
}
