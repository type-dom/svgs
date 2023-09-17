import { SvgPath, TypeHtml, TypeSvgSvg } from 'type-dom.ts';
export class TdStaticImageSvg extends TypeSvgSvg {
  className: 'TdStaticImageSvg';
  childNodes: SvgPath[];
  constructor(public parent: TypeHtml) {
    super();
    this.className = 'TdStaticImageSvg';
    this.addAttrObj({
      name: 'static-image',
      title: 'static-image'
    });
    this.addAttrObj({
      viewBox: '0 0 1024 1024',
    });
    this.resetSize(24, 24);
    this.childNodes = [];
    const path0 = new SvgPath(this);
    path0.setData(
      'M871.898 123.085 149.702 123.085c-46.045 0-83.375 37.327-83.375 83.375l0 611.078c0 46.04 37.33 83.37 83.375 83.37l722.186 0c46.05 0 83.38-37.33 83.38-83.37L955.268 206.459C955.268 160.415 917.938 123.085 871.898 123.085L871.898 123.085 871.898 123.085zM149.682 178.642l722.236 0c15.35 0 27.79 12.45 27.79 27.792l0 327.194c-44.77-36.747-122.38-86.27-215.479-86.27-85.85 0-170.482 66.522-252.319 130.86-62.712 49.28-127.562 100.26-173.06 100.26-63.822 0-118.447-46.92-136.965-64.83L121.885 206.434C121.885 191.092 134.335 178.642 149.682 178.642L149.682 178.642 149.682 178.642zM871.918 845.348 149.682 845.348c-15.347 0-27.797-12.44-27.797-27.79l0-131.87c33.315 23.6 81.482 48.37 136.967 48.37 64.727 0 134.032-54.48 207.399-112.14 74.417-58.49 151.357-118.975 217.977-118.975 119.4 0 214.099 105.105 215.039 106.175l0.44-0.39 0 208.829C899.708 832.908 887.268 845.348 871.918 845.348L871.918 845.348 871.918 845.348zM343.839 512.299c61.455 0 111.267-49.815 111.267-111.267s-49.812-111.267-111.267-111.267c-61.452 0-111.267 49.815-111.267 111.267S282.387 512.299 343.839 512.299L343.839 512.299 343.839 512.299zM344.257 345.319c30.595 0 55.395 24.8 55.395 55.4s-24.8 55.395-55.395 55.395c-30.6 0-55.402-24.795-55.402-55.395C288.854 370.124 313.662 345.319 344.257 345.319L344.257 345.319 344.257 345.319z',
    );
    this.childNodes.push(path0);
  }
}
