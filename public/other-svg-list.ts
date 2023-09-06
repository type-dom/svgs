import { IStyle, TypeDiv } from 'type-dom.ts';
import { SVGSRoot } from './svgs-root';
import {
  ArrangementBottomSvg,
  ArrangementMiddleSvg,
  ArrangementTopSvg,
  BarcodeSvg,
  ControlGroupSvg,
  CurrencySvg,
  EllipseSvg,
  FileImportSvg,
  FileOpenSvg,
  FileSaveSvg,
  FileSvg,
  FoldSvg,
  FolderSvg,
  HorilineSvg,
  ImageSvg,
  InventorySvg,
  LabelSvg,
  LogoSvg,
  OutlineSvg,
  PictureSvg,
  QrcodeSvg,
  RectangleSvg,
  ShapeSvg,
  SignStampSvg,
  SvgSvg,
  SwitchSvg,
  TemplatesSvg,
  TextSvg,
  ThumbnailSvg,
  TreeSvg,
  TriangleSvg,
  UnfoldSvg,
  VertlineSvg
} from '../src';
export class OtherSvgList extends TypeDiv {
  className: 'OtherSvgList';
  constructor(public parent: SVGSRoot) {
    super();
    console.log('OtherSvgList constructor . ');
    this.className = 'OtherSvgList';
    this.addStyleObj({
      padding: '30px'
    });
    const $svgStyle: Partial<IStyle> = {
      padding: '10px',
      border: '1px solid #ddd'
    };
    this.createItems(this, [
      {
        TypeClass: ArrangementBottomSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'arrangement-bottom'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ArrangementMiddleSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'arrangement-middle'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ArrangementTopSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'Arrangement-top'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: BarcodeSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'barcode'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ControlGroupSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'control-group'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: CurrencySvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'currency'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: EllipseSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'ellipse'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: FileSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'file'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: FileImportSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'file-import'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: FileOpenSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'file-open'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: FileSaveSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'file-save'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: FoldSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'fold'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: FolderSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'folder'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: HorilineSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'hori-line'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ImageSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'image'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: InventorySvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'inventory'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: LabelSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'label'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: OutlineSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'outline'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: PictureSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'picture'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: LogoSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'logo'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: QrcodeSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'qrcode'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: RectangleSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'rectangel'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ShapeSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'shape'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: SignStampSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'sign-stamp'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: SvgSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'svg'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: SwitchSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'switch'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TemplatesSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'template'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TextSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'text'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ThumbnailSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'thumbnail'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TreeSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'tree'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TriangleSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'triangle'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: UnfoldSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'unfold'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: VertlineSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'vertline'
          },
          styleObj: $svgStyle
        }
      }
    ]);
  }
}
