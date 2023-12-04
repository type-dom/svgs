import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdLanguageSvg extends TypeSvgSvg {
  className: 'TdLanguageSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdLanguageSvg';
    this.addAttrObj({
      name: 'TdLanguageSvg',
      title: 'TdLanguageSvg'
    });
    this.addAttrObj({
      viewBox: '0 0 128 128',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M84.742 36.8c2.398 7.2 5.595 12.8 11.19 18.4 4.795-4.8 7.992-11.2 10.39-18.4h-21.58zm-52.748 40h20.78l-10.39-28-10.39 28z',
    );
    this.childNodes.push(path0);
    const path1 = new SvgPath(this);
    path1.setData(
      'M111.916 0H16.009C7.218 0 .025 7.2.025 16v96c0 8.8 7.193 16 15.984 16h95.907c8.791 0 15.984-7.2 15.984-16V16c0-8.8-6.394-16-15.984-16zM72.754 103.2c-1.598 1.6-3.197 1.6-4.795 1.6-.8 0-2.398 0-3.197-.8-.8-.8-1.599 0-1.599-.8s-.799-1.6-1.598-3.2c-.8-1.6-.8-2.4-1.599-4l-3.196-8.8H28.797L25.6 96c-1.598 3.2-2.398 5.6-3.197 7.2-.8 1.6-2.398 1.6-4.795 1.6-1.599 0-3.197-.8-4.796-1.6-1.598-1.6-2.397-2.4-2.397-4 0-.8 0-1.6.799-3.2.8-1.6.8-2.4 1.598-4l17.583-44.8c.8-1.6.8-3.2 1.599-4.8.799-1.6 1.598-3.2 2.397-4 .8-.8 1.599-2.4 3.197-3.2 1.599-.8 3.197-.8 4.796-.8 1.598 0 3.196 0 4.795.8 1.598.8 2.398 1.6 3.197 3.2.799.8 1.598 2.4 2.397 4 .8 1.6 1.599 3.2 2.398 5.6l17.583 44c1.598 3.2 2.398 5.6 2.398 7.2-.8.8-1.599 2.4-2.398 4zM116.711 72c-8.791-3.2-15.185-7.2-20.78-12-5.594 5.6-12.787 9.6-21.579 12l-2.397-4c8.791-2.4 15.984-5.6 21.579-11.2C87.939 51.2 83.144 44 81.545 36h-7.992v-3.2h21.58c-1.6-2.4-3.198-5.6-4.796-8l2.397-.8c1.599 2.4 3.997 5.6 5.595 8.8h19.98v4h-7.992c-2.397 8-6.393 15.2-11.189 20 5.595 4.8 11.988 8.8 20.78 11.2l-3.197 4z',
    );
    this.childNodes.push(path1);
  }
}
