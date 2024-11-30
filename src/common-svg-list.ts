import { TypeDiv } from '@type-dom/framework';
import type { IStyle } from '@type-dom/css-type';
import {
  Td404Svg,
  TdAPlusSvg,
  TdAMinusSvg,
  TdQRCodeSvg,
  TdShrinkOutlinedSvg,
  TdUnfoldedOutlinedSvg,
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
  TdExampleSvg,
  TdExcelSvg,
  TdExitFullscreenSvg,
  TdExportSvg,
  TdEyeOpenSvg,
  TdEyeSvg,
  TdFileOpenSvg,
  TdFileSvg,
  TdFillRestrictedListSvg,
  TdFindSvg,
  TdFlowSvg,
  TdFoldSvg,
  TdFolderSvg,
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
  TdIconVerticalAlignBottoSvg,
  TdIconVerticalAlignMiddlSvg,
  TdIconVerticalAlignTopSvg,
  TdIconSvg,
  TdIdentifierSvg,
  TdImageSvg,
  TdImportSvg,
  TdIncreaseIndentSvg,
  TdIncreaseLineHeightSvg,
  TdInsertColumnSvg,
  TdInsertRowSvg,
  TdInternationalSvg,
  TdInventorySvg,
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
  TdNumericalInputSvg,
  TdNumericalSvg,
  TdOutlineSvg,
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
  TdSave2Svg,
  TdSaveSvg,
  TdSdTagSvg,
  TdSearchSvg,
  TdSelectSvg,
  TdSensitiveInfoSvg,
  TdShapeSvg,
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
  TdSvgSvg,
  TdTabSvg,
  TdTable1Svg,
  TdTable2Svg,
  TdTableNewSvg,
  TdTableSvg,
  TdTaskSvg,
  TdTdImageSvg,
  TdTemplatesSvg,
  TdTextIndentSvg,
  TdTextSvg,
  TdThemeSvg,
  TdThreeDotsSvg,
  TdThumbnailPageSvg,
  TdThumbnailSvg,
  TdTimeSvg,
  TdTransformSvg,
  TdTreeShapeSvg,
  TdTreeTableSvg,
  TdTreeSvg,
  TdUnderlineSvg,
  TdUndoSvg,
  TdUnfoldSvg,
  TdUserSvg,
  TdViewCodeSvg,
  TdWatermarkSvg,
  TdWechatSvg,
  TdWorkflowSvg,
  TdZipSvg,
} from './index';
export class CommonSvgList extends TypeDiv {
  className: 'CommonSvgList';
  constructor() {
    super();
    console.log('CommonSvgList constructor . ');
    this.className = 'CommonSvgList';
    const $svgStyle: Partial<IStyle> = {
      padding: '10px',
      border: '1px solid #ddd'
    };
    this.addChildren(
      new Td404Svg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdAPlusSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdAMinusSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdQRCodeSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdShrinkOutlinedSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdUnfoldedOutlinedSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdAdaptiveWidthSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdAddBookmarkSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdAddCommentsSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdAddRestrictedEditSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdAddSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdAlignBottomSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdAlignCenterSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdAlignJustifiedSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdAlignLeftSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdAlignMiddleSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdAlignRightSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdAlignScatterSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdAlignTopSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdAttachmentSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdBackSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdBackgroundColorSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdBoldTSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdBoldSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdBookmarkListSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdBookmarkSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdBugSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdCatalogSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdChartSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdCheckSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdCheckboxSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdCircleSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdCleanSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdClipboardSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdCloseRevisionSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdCloseSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdComponentSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdConnectionSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdCreateFillRestrictionSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdCrossSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdDashboardSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdDateSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdDatepickerSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdDeleteSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdDocumentationSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdDragSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdDropdownBoxSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdEditSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdEducationSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdEmailSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdExampleSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdExcelSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdExitFullscreenSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdExportSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdEyeOpenSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdEyeSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdFileOpenSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdFileSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdFillRestrictedListSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdFindSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdFlowSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdFoldSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdFolderSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdFontColorSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdForbidEditSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdFormSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdFormImageSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdFormQRCodeSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdFormTextSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdFormatBrushNewSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdFormatBrushSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdFullscreenSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdGuideSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdHSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdHistorySvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdHomepageSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdIconVerticalAlignBottoSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdIconVerticalAlignMiddlSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdIconVerticalAlignTopSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdIconSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdIdentifierSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdImageSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdImportSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdIncreaseIndentSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdIncreaseLineHeightSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdInsertColumnSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdInsertRowSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdInternationalSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdInventorySvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdItalic1Svg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdItalicSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdLanguageSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdLineSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdLinkSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdListSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdLockSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdMPageSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdMergeCellSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdMessageSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdMiddleLineSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdMinusSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdModuleSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdMoneySvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdMultilineInputSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdMultipleOptionsSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdNestedSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdNumericalInputSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdNumericalSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdOutlineSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdOverlineSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdPageAddSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdPageDeleteSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdPageDirectionSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdPageHeaderFooterSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdPageMarginSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdPaginateSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdPaginationSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdPagingSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdPasswordSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdPdfSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdPeopleSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdPeoplesSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdPlusSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdProcessSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdPropertySvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdQqSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdRadioButtonSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdRectangleSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdRedoSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdRestrictedEditListSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdRowHeightSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdRowSpacingSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdSPageSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdSave2Svg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdSaveSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdSdTagSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdSearchSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdSelectSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdSensitiveInfoSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdShapeSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdShoppingCardSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdShoppingSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdSignSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdSignatureSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdSingleInputSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdSingleOptionSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdSizeSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdSkillSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdSortValueSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdSortSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdSplitCellSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdStarSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdStaticCatalogSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdStaticHorizontalLineSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdStaticImageSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdStaticVerticalLineSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdStaticHLineSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdStaticLabelSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdStaticMLLabelSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdStaticQRCodeSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdStaticSLLabelSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdStaticTableSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdStaticTextSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdStaticVLineSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdStrikethroughSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdSubmitSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdSvgSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdTabSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdTable1Svg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdTable2Svg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdTableNewSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdTableSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdTaskSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdTdImageSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdTemplatesSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdTextIndentSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdTextSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdThemeSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdThreeDotsSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdThumbnailPageSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdThumbnailSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdTimeSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdTransformSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdTreeShapeSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdTreeTableSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdTreeSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdUnderlineSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdUndoSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdUnfoldSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdUserSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdViewCodeSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdWatermarkSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdWechatSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdWorkflowSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new TdZipSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
    );
  }
}