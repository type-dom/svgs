import { ITypeConfig, SvgPath, TypeSvgSvg } from '@type-dom/framework';
export class TdInsertRowSvg extends TypeSvgSvg {
  className: 'TdInsertRowSvg';
  childNodes: SvgPath[];
  constructor(config?: Partial<ITypeConfig>) {
    super();
    this.className = 'TdInsertRowSvg';
    this.addAttrObj({
      name: 'TdInsertRowSvg',
      title: 'TdInsertRowSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 1378 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath({ parent: this });
    path0.setData(
      'M1339.076923 39.384615v945.23077H275.692308V39.384615h1063.384615m0-39.384615H275.692308a39.384615 39.384615 0 0 0-39.384616 39.384615v945.23077a39.384615 39.384615 0 0 0 39.384616 39.384615h1063.384615a39.384615 39.384615 0 0 0 39.384615-39.384615V39.384615a39.384615 39.384615 0 0 0-39.384615-39.384615z',
    );
    this.childNodes.push(path0);
    const path1 = new SvgPath({ parent: this });
    path1.setData(
      'M275.692308 393.846154h1063.384615v39.384615H275.692308zM275.692308 590.769231h1063.384615v39.384615H275.692308zM275.692308 787.692308h1063.384615v39.384615H275.692308zM275.692308 196.923077h1063.384615v39.384615H275.692308z',
    );
    this.childNodes.push(path1);
    const path2 = new SvgPath({ parent: this });
    path2.setData(
      'M551.384615 39.384615v945.23077h-39.384615V39.384615zM827.076923 39.384615v945.23077h-39.384615V39.384615zM1102.769231 39.384615v945.23077h-39.384616V39.384615z',
    );
    this.childNodes.push(path2);
    const path3 = new SvgPath({ parent: this });
    path3.setData(
      'M256 216.615385m19.692308 0l1063.384615 0q19.692308 0 19.692308 19.692307l0 157.538462q0 19.692308-19.692308 19.692308l-1063.384615 0q-19.692308 0-19.692308-19.692308l0-157.538462q0-19.692308 19.692308-19.692307Z',
    );
    this.childNodes.push(path3);
    const path4 = new SvgPath({ parent: this });
    path4.setData(
      'M1339.076923 236.307692v157.538462H275.692308V236.307692h1063.384615m0-39.384615H275.692308a39.384615 39.384615 0 0 0-39.384616 39.384615v157.538462a39.384615 39.384615 0 0 0 39.384616 39.384615h1063.384615a39.384615 39.384615 0 0 0 39.384615-39.384615V236.307692a39.384615 39.384615 0 0 0-39.384615-39.384615z',
    );
    this.childNodes.push(path4);
    const path5 = new SvgPath({ parent: this });
    path5.setData(
      'M196.923077 315.076923L78.769231 196.923077v236.307692l118.153846-118.153846z',
    );
    this.childNodes.push(path5);
    const path6 = new SvgPath({ parent: this });
    path6.setData(
      'M78.769231 275.692308m0 1.575384l0 75.618462q0 1.575385-1.575385 1.575384l-75.618461 0q-1.575385 0-1.575385-1.575384l0-75.618462q0-1.575385 1.575385-1.575384l75.618461 0q1.575385 0 1.575385 1.575384Z',
    );
    this.childNodes.push(path6);
    this.setConfig(config);
  }
}
