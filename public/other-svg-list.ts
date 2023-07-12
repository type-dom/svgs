import { IStyle, SvgSvg, TypeDiv } from 'type-dom.ts';
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
  HorilineSvg,
  ImageSvg,
  InventorySvg,
  LabelSvg,
  OutlineSvg,
  PictureSvg,
  QrcodeSvg,
  RectangleSvg,
  ShapeSvg,
  SignStampSvg,
  SwitchSvg,
  TableSvg,
  TemplatesSvg, TextSvg, ThumbnailSvg, TreeSvg, TriangleSvg, UnfoldSvg, VertlineSvg
} from '../src';
import { FolderSvg } from '../src/other/folder/folder';
import { LogoSvg } from '../src/other/logo/logo';
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
            name: '404'
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
            name: 'A+'
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
            name: 'A-'
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
            name: 'adaptive-width'
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
            name: 'add-bookmark'
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
            name: 'add-comments'
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
            name: 'add-restricted-edit'
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
            name: 'add'
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
            name: 'align-bottom'
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
            name: 'align-center'
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
            name: 'align-justified'
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
            name: 'align-left'
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
            name: 'align-middle'
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
            name: 'align-right'
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
            name: 'align-scatter'
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
            name: 'align-top'
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
            name: 'attachment'
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
            name: 'back'
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
            name: 'background-color'
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
            name: 'bold-T'
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
            name: 'bold'
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
            name: 'bookmark-list'
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
            name: 'bookmark'
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
            name: 'bug'
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
            name: 'catalog'
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
            name: 'chart'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TableSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'check'
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
            name: 'checkbox'
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
            name: 'circle'
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
            name: 'clean'
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
            name: 'clipboard'
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
            name: 'close-revision'
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
            name: 'close'
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
            name: 'component'
          },
          styleObj: $svgStyle
        }
      }
    ]);
  }
}
