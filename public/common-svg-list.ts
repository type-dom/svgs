import { IStyle, TextNode, TypeDiv } from 'type-dom.ts';
import { SVGSRoot } from "./svgs-root";
import {
  Td404Svg,
  TdAPlusSvg,
  TdAMinusSvg,
  TdAdaptiveWidthSvg,
  TdAddBookmarkSvg,
  TdAddCommentsSvg,
  TdAddRestrictedEditSvg,
  TdAddSvg,
  TdAlignBottomSvg,
  TdAlignCenterSvg,
  TdAlignJustifiedSvg,
  TdAlignLeftSvg,
  TdAlignMiddleSvg,
  TdAlignRightSvg,
  TdAlignScatterSvg,
  TdAlignTopSvg,
  TdAttachmentSvg,
  TdBackSvg,
  TdBackgroundColorSvg,
  TdBoldTSvg,
  TdBoldSvg,
  TdBookmarkListSvg,
  TdBookmarkSvg,
  TdBugSvg,
  TdCatalogSvg,
  TdChartSvg,
  TdCheckSvg,
  TdCheckboxSvg,
  TdCircleSvg,
  TdCleanSvg,
  TdClipboardSvg,
  TdCloseRevisionSvg,
  TdCloseSvg,
  TdComponentSvg,
  TdConnectionSvg,
  TdCreateFillRestrictionSvg,
  TdCrossSvg,
  TdDashboardSvg,
  TdDateSvg,
  TdDatepickerSvg,
  TdDeleteSvg,
  TdDocumentationSvg,
  TdDragSvg,
  TdDropdownBoxSvg,
  TdEditSvg,
  TdEducationSvg,
  TdEmailSvg,
  TdEvenOddSvg,
  TdExampleSvg,
  TdExcelSvg,
  TdExitFullscreenSvg,
  TdExportSvg,
  TdEyeOpenSvg,
  TdEyeSvg,
  TdFillRestrictedListSvg,
  TdFindSvg,
  TdFlowSvg,
  TdFontColorSvg,
  TdForbidEditSvg,
  TdFormSvg,
  TdFormImageSvg,
  TdFormQRCodeSvg,
  TdFormTextSvg,
  TdFormatBrushNewSvg,
  TdFormatBrushSvg,
  TdFullscreenSvg,
  TdGuideSvg,
  TdHSvg,
  TdHistorySvg,
  TdHomepageSvg,
  TdIconSvg,
  TdIdentifierSvg,
  TdImageSvg,
  TdImportSvg,
  TdIncreaseIndentSvg,
  TdIncreaseLineHeightSvg,
  TdInsertColumnSvg,
  TdInsertRowSvg,
  TdInternationalSvg,
  TdItalic1Svg,
  TdItalicSvg,
  TdLanguageSvg,
  TdLineSvg,
  TdLinkSvg,
  TdListSvg,
  TdLockSvg,
  TdMPageSvg,
  TdMergeCellSvg,
  TdMessageSvg,
  TdMiddleLineSvg,
  TdMinusSvg,
  TdModuleSvg,
  TdMoneySvg,
  TdMultilineInputSvg,
  TdMultipleOptionsSvg,
  TdNestedSvg,
  TdNetworkSvg,
  TdNumericalInputSvg,
  TdNumericalSvg,
  TdOverlineSvg,
  TdPageAddSvg,
  TdPageDeleteSvg,
  TdPageDirectionSvg,
  TdPageHeaderFooterSvg,
  TdPageMarginSvg,
  TdPaginateSvg,
  TdPaginationSvg,
  TdPagingSvg,
  TdPasswordSvg,
  TdPdfSvg,
  TdPeopleSvg,
  TdPeoplesSvg,
  TdPlusSvg,
  TdProcessSvg,
  TdPropertySvg,
  TdQqSvg,
  TdRadioButtonSvg,
  TdRectangleSvg,
  TdRedoSvg,
  TdRestrictedEditListSvg,
  TdRowHeightSvg,
  TdRowSpacingSvg,
  TdSPageSvg,
  TdSaveSvg,
  TdSdTagSvg,
  TdSearchSvg,
  TdSelectSvg,
  TdSensitiveInfoSvg,
  TdShoppingCardSvg,
  TdShoppingSvg,
  TdSignSvg,
  TdSignatureSvg,
  TdSingleInputSvg,
  TdSingleOptionSvg,
  TdSizeSvg,
  TdSkillSvg,
  TdSortValueSvg,
  TdSortSvg,
  TdSplitCellSvg,
  TdStarSvg,
  TdStaticCatalogSvg,
  TdStaticHorizontalLineSvg,
  TdStaticImageSvg,
  TdStaticVerticalLineSvg,
  TdStaticHLineSvg,
  TdStaticLabelSvg,
  TdStaticMLLabelSvg,
  TdStaticQRCodeSvg,
  TdStaticSLLabelSvg,
  TdStaticTableSvg,
  TdStaticTextSvg,
  TdStaticVLineSvg,
  TdStrikethroughSvg,
  TdSubmitSvg,
  TdTabSvg,
  TdTable1Svg,
  TdTable2Svg,
  TdTableNewSvg,
  TdTableSvg,
  TdTaskSvg,
  TdTdImageSvg,
  TdTdTextSvg,
  TdTdQRCodeSvg,
  TdTextIndentSvg,
  TdThemeSvg,
  TdThreeDotsSvg,
  TdTimeSvg,
  TdTransformSvg,
  TdTreeTableSvg,
  TdTreeSvg,
  TdUnderlineSvg,
  TdUndoSvg,
  TdUserSvg,
  TdWatermarkSvg,
  TdWechatSvg,
  TdWorkflowSvg,
  TdZipSvg,
} from '../src';
export class CommonSvgList extends TypeDiv {
  className: 'CommonSvgList';
  constructor(public parent: SVGSRoot) {
    super();
    console.log('CommonSvgList constructor . ');
    this.className = 'CommonSvgList';
    this.addStyleObj({
      padding: '30px'
    });
    const $svgStyle: Partial<IStyle> = {
      padding: '10px',
      border: '1px solid #ddd'
    };
    this.createItems(this, [
      {
        TypeClass: Td404Svg,
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
        TypeClass: TdAPlusSvg,
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
        TypeClass: TdAMinusSvg,
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
        TypeClass: TdAdaptiveWidthSvg,
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
        TypeClass: TdAddBookmarkSvg,
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
        TypeClass: TdAddCommentsSvg,
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
        TypeClass: TdAddRestrictedEditSvg,
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
        TypeClass: TdAddSvg,
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
        TypeClass: TdAlignBottomSvg,
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
        TypeClass: TdAlignCenterSvg,
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
        TypeClass: TdAlignJustifiedSvg,
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
        TypeClass: TdAlignLeftSvg,
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
        TypeClass: TdAlignMiddleSvg,
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
        TypeClass: TdAlignRightSvg,
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
        TypeClass: TdAlignScatterSvg,
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
        TypeClass: TdAlignTopSvg,
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
        TypeClass: TdAttachmentSvg,
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
        TypeClass: TdBackSvg,
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
        TypeClass: TdBackgroundColorSvg,
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
        TypeClass: TdBoldTSvg,
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
        TypeClass: TdBoldSvg,
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
        TypeClass: TdBookmarkListSvg,
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
        TypeClass: TdBookmarkSvg,
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
        TypeClass: TdBugSvg,
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
        TypeClass: TdCatalogSvg,
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
        TypeClass: TdChartSvg,
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
        TypeClass: TdCheckSvg,
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
        TypeClass: TdCheckboxSvg,
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
        TypeClass: TdCircleSvg,
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
        TypeClass: TdCleanSvg,
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
        TypeClass: TdClipboardSvg,
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
        TypeClass: TdCloseRevisionSvg,
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
        TypeClass: TdCloseSvg,
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
        TypeClass: TdComponentSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'component'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdConnectionSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'connection'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdCreateFillRestrictionSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'create-fill-restriction'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdCrossSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'cross'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdDashboardSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'dashboard'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdDateSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'date'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdDatepickerSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'datepicker'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdDeleteSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'delete'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdDocumentationSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'documentation'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdDragSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'drag'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdDropdownBoxSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'dropdown-box'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdEditSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'edit'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdEducationSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'education'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdEmailSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'email'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdEvenOddSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'even-odd'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdExampleSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'example'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdExcelSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'excel'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdExitFullscreenSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'exit-fullscreen'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdExportSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'export'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdEyeOpenSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'eye-open'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdEyeSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'eye'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdFillRestrictedListSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'fill-restricted-list'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdFindSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'find'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdFlowSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'flow'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdFontColorSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'font-color'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdForbidEditSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'forbid-edit'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdFormSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'form'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdFormImageSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'formImage'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdFormQRCodeSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'formQRCode'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdFormTextSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'formText'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdFormatBrushNewSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'format-brush-new'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdFormatBrushSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'format-brush'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdFullscreenSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'fullscreen'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdGuideSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'guide'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdHSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'h'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdHistorySvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'history'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdHomepageSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'homepage'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdIconSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'icon'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdIdentifierSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'identifier'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdImageSvg,
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
        TypeClass: TdImportSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'import'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdIncreaseIndentSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'increase-indent'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdIncreaseLineHeightSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'increase-line-height'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdInsertColumnSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'insert-column'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdInsertRowSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'insert-row'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdInternationalSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'international'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdItalic1Svg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'italic-1'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdItalicSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'italic'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdLanguageSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'language'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdLineSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'line'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdLinkSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'link'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdListSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'list'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdLockSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'lock'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdMPageSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'mPage'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdMergeCellSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'merge-cell'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdMessageSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'message'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdMiddleLineSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'middle-line'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdMinusSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'minus'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdModuleSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'module'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdMoneySvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'money'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdMultilineInputSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'multiline-input'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdMultipleOptionsSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'multiple-options'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdNestedSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'nested'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdNetworkSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'network'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdNumericalInputSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'numerical-input'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdNumericalSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'numerical'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdOverlineSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'overline'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdPageAddSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'page-add'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdPageDeleteSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'page-delete'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdPageDirectionSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'page-direction'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdPageHeaderFooterSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'page-header-footer'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdPageMarginSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'page-margin'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdPaginateSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'paginate'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdPaginationSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'pagination'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdPagingSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'paging'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdPasswordSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'password'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdPdfSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'pdf'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdPeopleSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'people'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdPeoplesSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'peoples'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdPlusSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'plus'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdProcessSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'process'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdPropertySvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'property'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdQqSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'qq'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdRadioButtonSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'radio-button'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdRectangleSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'rectangle'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdRedoSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'redo'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdRestrictedEditListSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'restricted-edit-list'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdRowHeightSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'row-height'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdRowSpacingSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'row-spacing'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdSPageSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'sPage'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdSaveSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'save'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdSdTagSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'sd-tag'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdSearchSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'search'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdSelectSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'select'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdSensitiveInfoSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'sensitive-info'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdShoppingCardSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'shopping-card'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdShoppingSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'shopping'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdSignSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'sign'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdSignatureSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'signature'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdSingleInputSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'single-input'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdSingleOptionSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'single-option'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdSizeSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'size'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdSkillSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'skill'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdSortValueSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'sort-value'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdSortSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'sort'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdSplitCellSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'split-cell'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdStarSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'star'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdStaticCatalogSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'static-catalog'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdStaticHorizontalLineSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'static-horizontal-line'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdStaticImageSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'static-image'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdStaticVerticalLineSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'static-vertical-line'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdStaticHLineSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'staticHLine'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdStaticLabelSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'staticLabel'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdStaticMLLabelSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'staticMLLabel'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdStaticQRCodeSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'staticQRCode'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdStaticSLLabelSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'staticSLLabel'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdStaticTableSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'staticTable'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdStaticTextSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'staticText'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdStaticVLineSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'staticVLine'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdStrikethroughSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'strikethrough'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdSubmitSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'submit'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdTabSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'tab'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdTable1Svg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'table-1'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdTable2Svg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'table-2'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdTableNewSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'table-new'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdTableSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'table'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdTaskSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'task'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdTdImageSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'td-image'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdTdTextSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'td-text'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdTdQRCodeSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'tdQRCode'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdTextIndentSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'text-indent'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdThemeSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'theme'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdThreeDotsSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'three-dots'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdTimeSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'time'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdTransformSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'transform'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdTreeTableSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'tree-table'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdTreeSvg,
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
        TypeClass: TdUnderlineSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'underline'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdUndoSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'undo'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdUserSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'user'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdWatermarkSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'watermark'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdWechatSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'wechat'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdWorkflowSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'workflow'
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: TdZipSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
            name: 'zip'
          },
          styleObj: $svgStyle
        }
      },
    ]);
  }
}