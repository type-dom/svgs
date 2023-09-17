import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdFlowSvg extends TypeSvgSvg {
  className: 'TdFlowSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdFlowSvg';
    this.addAttrObj({
      name: 'flow',
      title: 'flow'
    });
    this.addAttrObj({
      viewBox: '0 0 1088 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M646.464 115.52c27.968 0 50.368 23.104 50.368 52.032 0 28.8-22.4 51.968-50.368 51.968H408.64a51.008 51.008 0 0 1-50.304-51.968c0-28.928 22.4-52.032 50.304-52.032h237.824z m0-57.728H408.64c-58.752 0-106.24 49.088-106.24 109.76 0 60.608 47.488 109.696 106.24 109.696h237.824c58.752 0 106.368-49.088 106.368-109.696 0-60.672-50.368-109.76-106.368-109.76z m8.384 412.992c28.032 0 50.368 23.04 50.368 51.968 0 28.864-22.4 51.968-50.368 51.968H417.088a51.008 51.008 0 0 1-50.368-51.968c0-28.864 22.4-51.968 50.368-51.968h237.76z m0-57.792H417.088c-58.752 0-106.368 49.088-106.368 109.76 0 60.672 47.616 109.76 106.368 109.76h237.76c58.816 0 106.368-49.088 106.368-109.76 0-60.672-47.552-109.76-106.368-109.76z m-8.32 410.112c27.904 0 50.304 23.104 50.304 51.968 0 28.928-22.4 52.032-50.368 52.032H408.64a51.008 51.008 0 0 1-50.304-52.032c0-28.8 22.4-51.968 50.304-51.968h237.824z m0-57.728H408.576c-58.752 0-106.24 49.088-106.24 109.696 0 60.672 47.488 109.76 106.24 109.76h237.824c58.752 0 106.368-49.088 106.368-109.76 0-60.608-50.368-109.696-106.368-109.696zM296.704 514.112L196.032 456.32c-2.816-2.88-8.384 0-8.384 5.76v23.104c-41.984-14.4-111.936-54.848-111.936-147.264 0-129.92 137.088-153.088 142.72-155.968a29.952 29.952 0 0 0 22.4-34.624c0-17.344-14.016-28.928-28.032-25.984C145.664 129.92 19.84 190.656 19.84 335.04c0 129.92 100.736 190.592 167.872 210.816v34.688c0 5.76 5.568 5.76 8.384 5.76l100.736-60.672c5.568-2.88 5.568-8.64 0-11.52z m467.2 363.904l100.736-60.672c2.816-2.88 8.384 0 8.384 5.76v23.104c41.984-14.4 111.936-54.848 111.936-147.264 0-129.92-137.088-153.088-142.72-155.968a29.952 29.952 0 0 1-22.4-34.688c2.816-17.28 16.832-28.8 30.848-25.984 67.136 11.52 193.024 69.312 193.024 216.64 0 129.92-100.736 190.592-167.872 210.816v34.624c0 5.76-5.568 5.76-8.384 5.76l-103.552-60.608c-2.752-2.88-2.752-8.64 0-11.52z',
    );
    this.childNodes.push(path0);
  }
}
