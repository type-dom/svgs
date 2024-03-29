import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class TdMergeCellSvg extends TypeSvgSvg {
  className: 'TdMergeCellSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'TdMergeCellSvg';
    this.addAttrObj({
      name: 'TdMergeCellSvg',
      title: 'TdMergeCellSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M485.052632 970.105263H53.894737V53.894737h431.157895v296.421052H431.157895V107.789474H107.789474v808.421052h323.368421v-242.526315h53.894737zM538.947368 970.105263h431.157895V53.894737h-431.157895v296.421052h53.894737V107.789474h323.368421v808.421052h-323.368421v-242.526315h-53.894737z',
    );
    this.childNodes.push(path0);
    const path1 = new SvgPath({ parent: this });
    path1.setData(
      'M485.052632 484.513684L367.023158 366.484211l-38.265263 38.265263L409.061053 485.052632H161.684211v53.894736h247.376842L328.757895 619.250526l38.265263 38.265263L485.052632 539.486316 484.513684 538.947368H485.052632V485.052632h-0.538948zM862.315789 485.052632h-247.376842l80.303158-80.303158-38.265263-38.265263L538.947368 484.513684l0.538948 0.538948H538.947368v53.894736h0.538948l-0.538948 0.538948 118.029474 118.029473 38.265263-38.265263L614.938947 538.947368H862.315789z',
    );
    this.childNodes.push(path1);
    this.setConfig(config);
  }
}
