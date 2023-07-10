import { Br, Division, IStyle, TypeRoot } from 'type-dom.ts';
import {
  ElAlarmClockSvg,
  Td404Svg,
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
  TdAMinusSvg,
  TdAPlusSvg,
  TdAttachmentSvg,
  TdBackgroundColorSvg,
  TdBackSvg,
  TdBoldSvg,
  TdBoldTSvg,
  TdBookmarkListSvg,
  TdBookmarkSvg,
  TdBugSvg,
  TdCatalogSvg,
  TdChartSvg,
  TdCheckboxSvg,
  TdCheckSvg,
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
  TdDatepickerSvg,
  TdDateSvg,
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
  TdFormatBrushNewSvg,
  TdFormatBrushSvg,
  TdFormImageSvg,
  TdFormQRCodeSvg,
  TdFormSvg,
  TdFormTextSvg,
  TdFullscreenSvg,
  TdGuideSvg,
  TdHistorySvg,
  TdHomepageSvg,
  TdHSvg,
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
  TdMergeCellSvg,
  TdMessageSvg,
  TdMiddleLineSvg,
  TdMinusSvg,
  TdModuleSvg,
  TdMoneySvg,
  TdMPageSvg,
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
  TdPeoplesSvg,
  TdPeopleSvg,
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
  TdSaveSvg,
  TdSdTagSvg,
  TdSearchSvg,
  TdSelectSvg,
  TdSensitiveInfoSvg,
  TdShoppingCardSvg,
  TdShoppingSvg,
  TdSignatureSvg,
  TdSignSvg,
  TdSingleInputSvg,
  TdSingleOptionSvg,
  TdSizeSvg,
  TdSkillSvg,
  TdSortSvg,
  TdSortValueSvg,
  TdSPageSvg,
  TdSplitCellSvg,
  TdStarSvg,
  TdStaticCatalogSvg,
  TdStaticHLineSvg,
  TdStaticHorizontalLineSvg,
  TdStaticImageSvg,
  TdStaticLabelSvg,
  TdStaticMLLabelSvg,
  TdStaticQRCodeSvg,
  TdStaticSLLabelSvg,
  TdStaticTableSvg,
  TdStaticTextSvg,
  TdStaticVerticalLineSvg,
  TdStaticVLineSvg,
  TdStrikethroughSvg,
  TdSubmitSvg,
  TdTable1Svg,
  TdTable2Svg,
  TdTableNewSvg,
  TdTableSvg,
  TdTabSvg,
  TdTaskSvg,
  TdTdImageSvg,
  TdTdQRCodeSvg,
  TdTdTextSvg,
  TdTextIndentSvg,
  TdThemeSvg,
  TdThreeDotsSvg,
  TdTimeSvg,
  TdTransformSvg,
  TdTreeSvg,
  TdTreeTableSvg,
  TdUnderlineSvg,
  TdUndoSvg,
  TdUserSvg,
  TdWatermarkSvg,
  TdWechatSvg,
  TdWorkflowSvg, TdZipSvg
} from '../src';

export class SVGSRoot extends TypeRoot {
  className: 'SVGSRoot';
  constructor(editorEl: HTMLElement) {
    super(editorEl);
    console.log('SVGSView constructor . ');
    this.className = 'SVGSRoot';
    this.addStyleObj({
      padding: '30px'
    });
    const $svgStyle: Partial<IStyle> = {
      padding: '10px',
      border: '1px solid #ddd'
    };
    this.createItems(this, [
      {
        TypeClass: Division,
        childNodes: [{
          TypeClass: Td404Svg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdAPlusSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdAMinusSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdAdaptiveWidthSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdAddBookmarkSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdAddCommentsSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdAddRestrictedEditSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdAddSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdAlignBottomSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdAlignCenterSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdAlignJustifiedSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdAlignLeftSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdAlignMiddleSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdAlignRightSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdAlignScatterSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdAlignTopSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdAttachmentSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdBackSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdBackgroundColorSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdBoldTSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdBoldSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdBookmarkListSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdBookmarkSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdBugSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdCatalogSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdChartSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdCheckSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdCheckboxSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdCircleSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdCleanSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdClipboardSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdCloseRevisionSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdCloseSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdComponentSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdConnectionSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdCreateFillRestrictionSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdCrossSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdDashboardSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdDateSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdDatepickerSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdDeleteSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdDocumentationSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdDragSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdDropdownBoxSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdEditSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdEducationSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdEmailSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdEvenOddSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdExampleSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdExcelSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdExitFullscreenSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdExportSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdEyeOpenSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdEyeSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdFillRestrictedListSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdFindSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdFlowSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdFontColorSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdForbidEditSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdFormSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdFormatBrushNewSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdFormatBrushSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdFormImageSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdFormQRCodeSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdFormTextSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdFullscreenSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdGuideSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdHSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdHistorySvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdHomepageSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdIconSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdIdentifierSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdImageSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdImportSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdIncreaseIndentSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdIncreaseLineHeightSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdInsertColumnSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdInsertRowSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdInternationalSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdItalic1Svg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdItalicSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdLanguageSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdLineSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdLinkSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdListSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdLockSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdMergeCellSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdMessageSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdMiddleLineSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdMinusSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdModuleSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdMoneySvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdMPageSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdMultilineInputSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdMultipleOptionsSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdNestedSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdNetworkSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdNumericalInputSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdNumericalSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdOverlineSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdPageAddSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdPageDeleteSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdPageDirectionSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdPageHeaderFooterSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdPageMarginSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdPaginateSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdPaginationSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdPagingSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdPasswordSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdPdfSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdPeopleSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdPeoplesSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdPlusSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdProcessSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdPropertySvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdQqSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdRadioButtonSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdRectangleSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdRedoSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdRestrictedEditListSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdRowHeightSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdRowSpacingSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdSaveSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdSdTagSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdSearchSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdSelectSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdSensitiveInfoSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdShoppingCardSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdShoppingSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdSignSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdSignatureSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdSingleInputSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdSingleOptionSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdSizeSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdSkillSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdSortValueSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdSortSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdSPageSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdSplitCellSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdStarSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdStaticCatalogSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdStaticHorizontalLineSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdStaticImageSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdStaticVerticalLineSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdStaticHLineSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdStaticLabelSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdStaticMLLabelSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdStaticQRCodeSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdStaticSLLabelSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdStaticTableSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdStaticTextSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdStaticVLineSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdStrikethroughSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdSubmitSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdTabSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdTable1Svg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdTable2Svg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdTableNewSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdTableSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdTaskSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdTdImageSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdTdTextSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdTdQRCodeSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdTextIndentSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdThemeSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdThreeDotsSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdTimeSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdTransformSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdTreeTableSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdTreeSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdUnderlineSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdUndoSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdUserSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdWatermarkSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdWechatSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdWorkflowSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        }, {
          TypeClass: TdZipSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        },
        {
          TypeClass: ElAlarmClockSvg,
          propObj: {
            attrObj: {
              width: '2em',
              height: '2em',
            },
            styleObj: $svgStyle
          }
        },
        ]
      },
      {
        TypeClass: Br
      }
    ]);
    this.render();
  }
}
