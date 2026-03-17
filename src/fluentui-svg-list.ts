import { TypeDiv, CSSProperties } from '@type-dom/framework';
import {
  FlAccessTimeFilledSvg,
  FlAccessTimeRegularSvg,
  FlAccessibilityCheckmarkFilledSvg,
  FlAccessibilityCheckmarkRegularSvg,
  FlAccessibilityErrorFilledSvg,
  FlAccessibilityErrorRegularSvg,
  FlAccessibilityFilledSvg,
  FlAccessibilityMoreFilledSvg,
  FlAccessibilityMoreRegularSvg,
  FlAccessibilityQuestionMarkFilledSvg,
  FlAccessibilityQuestionMarkRegularSvg,
  FlAccessibilityRegularSvg,
  FlAddCircleColorSvg,
  FlAddCircleFilledSvg,
  FlAddCircleRegularSvg,
  FlAddFilledSvg,
  FlAddRegularSvg,
  FlAddSquareFilledSvg,
  FlAddSquareMultipleFilledSvg,
  FlAddSquareMultipleRegularSvg,
  FlAddSquareRegularSvg,
  FlAddSubtractCircleFilledSvg,
  FlAddSubtractCircleRegularSvg,
  FlAirplaneFilledSvg,
  FlAirplaneLandingFilledSvg,
  FlAirplaneLandingRegularSvg,
  FlAirplaneRegularSvg,
  FlAirplaneTakeOffFilledSvg,
  FlAirplaneTakeOffRegularSvg,
  FlAlbumAddFilledSvg,
  FlAlbumAddRegularSvg,
  FlAlbumFilledSvg,
  FlAlbumRegularSvg,
  FlAlertBadgeFilledSvg,
  FlAlertBadgeRegularSvg,
  FlAlertColorSvg,
  FlAlertFilledSvg,
  FlAlertOffFilledSvg,
  FlAlertOffRegularSvg,
  FlAlertOnFilledSvg,
  FlAlertOnRegularSvg,
  FlAlertRegularSvg,
  FlAlertSnoozeFilledSvg,
  FlAlertSnoozeRegularSvg,
  FlAlertUrgentFilledSvg,
  FlAlertUrgentRegularSvg,
  FlAlignBottomFilledSvg,
  FlAlignBottomRegularSvg,
  FlAlignCenterHorizontalFilledSvg,
  FlAlignCenterHorizontalRegularSvg,
  FlAlignCenterVerticalFilledSvg,
  FlAlignCenterVerticalRegularSvg,
  FlAlignDistributeBottom16FilledSvg,
  FlAlignDistributeBottom16RegularSvg,
  FlAlignDistributeLeft16FilledSvg,
  FlAlignDistributeLeft16RegularSvg,
  FlAlignDistributeRight16FilledSvg,
  FlAlignDistributeRight16RegularSvg,
  FlAlignDistributeTop16FilledSvg,
  FlAlignDistributeTop16RegularSvg,
  FlAlignEndHorizontalFilledSvg,
  FlAlignEndHorizontalRegularSvg,
  FlAlignEndVerticalFilledSvg,
  FlAlignEndVerticalRegularSvg,
  FlAlignLeftFilledSvg,
  FlAlignLeftRegularSvg,
  FlAlignRightFilledSvg,
  FlAlignRightRegularSvg,
  FlAlignSpaceAroundHorizontalFilledSvg,
  FlAlignSpaceAroundHorizontalRegularSvg,
  FlAlignSpaceAroundVerticalFilledSvg,
  FlAlignSpaceAroundVerticalRegularSvg,
  FlAlignSpaceBetweenHorizontalFilledSvg,
  FlAlignSpaceBetweenHorizontalRegularSvg,
  FlAlignSpaceBetweenVerticalFilledSvg,
  FlAlignSpaceBetweenVerticalRegularSvg,
  FlAlignSpaceEvenlyHorizontalFilledSvg,
  FlAlignSpaceEvenlyHorizontalRegularSvg,
  FlAlignSpaceEvenlyVerticalFilledSvg,
  FlAlignSpaceEvenlyVerticalRegularSvg,
  FlAlignSpaceFitVerticalFilledSvg,
  FlAlignSpaceFitVerticalRegularSvg,
  FlAlignStartHorizontalFilledSvg,
  FlAlignStartHorizontalRegularSvg,
  FlAlignStartVerticalFilledSvg,
  FlAlignStartVerticalRegularSvg,
  FlAlignStraightenFilledSvg,
  FlAlignStraightenRegularSvg,
  FlAlignStretchHorizontalFilledSvg,
  FlAlignStretchHorizontalRegularSvg,
  FlAlignStretchVerticalFilledSvg,
  FlAlignStretchVerticalRegularSvg,
  FlAlignTopFilledSvg,
  FlAlignTopRegularSvg,
  FlAnimalCatFilledSvg,
  FlAnimalCatRegularSvg,
  FlAnimalDogFilledSvg,
  FlAnimalDogRegularSvg,
  FlAnimalPawPrintFilledSvg,
  FlAnimalPawPrintRegularSvg,
  FlAnimalRabbitFilledSvg,
  FlAnimalRabbitOffFilledSvg,
  FlAnimalRabbitOffRegularSvg,
  FlAnimalRabbitRegularSvg,
  FlAnimalTurtleFilledSvg,
  FlAnimalTurtleRegularSvg,
  FlAppFolderFilledSvg,
  FlAppFolderRegularSvg,
  FlAppGenericFilledSvg,
  FlAppGenericRegularSvg,
  FlAppRecentFilledSvg,
  FlAppRecentRegularSvg,
  FlAppStore24FilledSvg,
  FlAppStore24RegularSvg,
  FlAppTitleFilledSvg,
  FlAppTitleRegularSvg,
  FlApprovalsAppColorSvg,
  FlApprovalsAppFilledSvg,
  FlApprovalsAppRegularSvg,
  FlAppsAddInFilledSvg,
  FlAppsAddInRegularSvg,
  FlAppsColorSvg,
  FlAppsFilledSvg,
  FlAppsListDetailFilledSvg,
  FlAppsListDetailRegularSvg,
  FlAppsListFilledSvg,
  FlAppsListRegularSvg,
  FlAppsRegularSvg,
  FlAppsSettingsFilledSvg,
  FlAppsSettingsRegularSvg,
  FlAppsShieldFilledSvg,
  FlAppsShieldRegularSvg,
  FlArchiveArrowBackFilledSvg,
  FlArchiveArrowBackRegularSvg,
  FlArchiveFilledSvg,
  FlArchiveMultipleFilledSvg,
  FlArchiveMultipleRegularSvg,
  FlArchiveRegularSvg,
  FlArchiveSettingsFilledSvg,
  FlArchiveSettingsRegularSvg,
  FlArrowAutofitContentFilledSvg,
  FlArrowAutofitContentRegularSvg,
  FlArrowAutofitDownFilledSvg,
  FlArrowAutofitDownRegularSvg,
  FlArrowAutofitHeightDottedFilledSvg,
  FlArrowAutofitHeightDottedRegularSvg,
  FlArrowAutofitHeightFilledSvg,
  FlArrowAutofitHeightInFilledSvg,
  FlArrowAutofitHeightInRegularSvg,
  FlArrowAutofitHeightRegularSvg,
  FlArrowAutofitUpFilledSvg,
  FlArrowAutofitUpRegularSvg,
  FlArrowAutofitWidthDottedFilledSvg,
  FlArrowAutofitWidthDottedRegularSvg,
  FlArrowAutofitWidthFilledSvg,
  FlArrowAutofitWidthRegularSvg,
  FlArrowBetweenDownFilledSvg,
  FlArrowBetweenDownRegularSvg,
  FlArrowBetweenUpFilledSvg,
  FlArrowBetweenUpRegularSvg,
  FlArrowBidirectionalLeftRightFilledSvg,
  FlArrowBidirectionalLeftRightRegularSvg,
  FlArrowBidirectionalUpDownFilledSvg,
  FlArrowBidirectionalUpDownRegularSvg,
  FlArrowBounceFilledSvg,
  FlArrowBounceRegularSvg,
  FlArrowCircleDownDoubleFilledSvg,
  FlArrowCircleDownDoubleRegularSvg,
  FlArrowCircleDownFilledSvg,
  FlArrowCircleDownRegularSvg,
  FlArrowCircleDownRightFilledSvg,
  FlArrowCircleDownRightRegularSvg,
  FlArrowCircleDownSplitFilledSvg,
  FlArrowCircleDownSplitRegularSvg,
  FlArrowCircleDownUpFilledSvg,
  FlArrowCircleDownUpRegularSvg,
  FlArrowCircleLeftFilledSvg,
  FlArrowCircleLeftRegularSvg,
  FlArrowCircleRightFilledSvg,
  FlArrowCircleRightRegularSvg,
  FlArrowCircleUpFilledSvg,
  FlArrowCircleUpLeftFilledSvg,
  FlArrowCircleUpLeftRegularSvg,
  FlArrowCircleUpRegularSvg,
  FlArrowCircleUpRightFilledSvg,
  FlArrowCircleUpRightRegularSvg,
  FlArrowClockwiseDashesFilledSvg,
  FlArrowClockwiseDashesRegularSvg,
  FlArrowClockwiseDashesSettingsFilledSvg,
  FlArrowClockwiseDashesSettingsRegularSvg,
  FlArrowClockwiseFilledSvg,
  FlArrowClockwiseRegularSvg,
  FlArrowCollapseAllFilledSvg,
  FlArrowCollapseAllRegularSvg,
  FlArrowCounterclockwiseDashesFilledSvg,
  FlArrowCounterclockwiseDashesRegularSvg,
  FlArrowCounterclockwiseFilledSvg,
  FlArrowCounterclockwiseRegularSvg,
  FlArrowCurveDownLeftFilledSvg,
  FlArrowCurveDownLeftRegularSvg,
  FlArrowCurveDownRightFilledSvg,
  FlArrowCurveDownRightRegularSvg,
  FlArrowCurveUpLeftFilledSvg,
  FlArrowCurveUpLeftRegularSvg,
  FlArrowCurveUpRightFilledSvg,
  FlArrowCurveUpRightRegularSvg,
  FlArrowDownExclamationFilledSvg,
  FlArrowDownExclamationRegularSvg,
  FlArrowDownFilledSvg,
  FlArrowDownLeftFilledSvg,
  FlArrowDownLeftRegularSvg,
  FlArrowDownRegularSvg,
  FlArrowDownRightFilledSvg,
  FlArrowDownRightRegularSvg,
  FlArrowDownloadFilledSvg,
  FlArrowDownloadOffFilledSvg,
  FlArrowDownloadOffRegularSvg,
  FlArrowDownloadRegularSvg,
  FlArrowEjectFilledSvg,
  FlArrowEjectRegularSvg,
  FlArrowEnterFilledSvg,
  FlArrowEnterLeftFilledSvg,
  FlArrowEnterLeftRegularSvg,
  FlArrowEnterRegularSvg,
  FlArrowEnterUpFilledSvg,
  FlArrowEnterUpRegularSvg,
  FlArrowExitFilledSvg,
  FlArrowExitRegularSvg,
  FlArrowExpandAllFilledSvg,
  FlArrowExpandAllRegularSvg,
  FlArrowExpandFilledSvg,
  FlArrowExpandRegularSvg,
  FlArrowExportFilledSvg,
  FlArrowExportLtrFilledSvg,
  FlArrowExportLtrRegularSvg,
  FlArrowExportRegularSvg,
  FlArrowExportRtlFilledSvg,
  FlArrowExportRtlRegularSvg,
  FlArrowExportUpFilledSvg,
  FlArrowExportUpRegularSvg,
  FlArrowFitFilledSvg,
  FlArrowFitInFilledSvg,
  FlArrowFitInRegularSvg,
  FlArrowFitRegularSvg,
  FlArrowFlowDiagonalUpRightFilledSvg,
  FlArrowFlowDiagonalUpRightRegularSvg,
  FlArrowFlowUpRightFilledSvg,
  FlArrowFlowUpRightRectangleMultipleFilledSvg,
  FlArrowFlowUpRightRectangleMultipleRegularSvg,
  FlArrowFlowUpRightRegularSvg,
  FlArrowForwardDownLightningFilledSvg,
  FlArrowForwardDownLightningRegularSvg,
  FlArrowForwardDownPersonFilledSvg,
  FlArrowForwardDownPersonRegularSvg,
  FlArrowForwardFilledSvg,
  FlArrowForwardRegularSvg,
  FlArrowHookDownLeftFilledSvg,
  FlArrowHookDownLeftRegularSvg,
  FlArrowHookDownRightFilledSvg,
  FlArrowHookDownRightRegularSvg,
  FlArrowHookUpLeftFilledSvg,
  FlArrowHookUpLeftRegularSvg,
  FlArrowHookUpRightFilledSvg,
  FlArrowHookUpRightRegularSvg,
  FlArrowImportFilledSvg,
  FlArrowImportRegularSvg,
  FlArrowJoinFilledSvg,
  FlArrowJoinRegularSvg,
  FlArrowLeftFilledSvg,
  FlArrowLeftRegularSvg,
  FlArrowMaximizeFilledSvg,
  FlArrowMaximizeRegularSvg,
  FlArrowMaximizeVerticalFilledSvg,
  FlArrowMaximizeVerticalRegularSvg,
  FlArrowMinimizeFilledSvg,
  FlArrowMinimizeRegularSvg,
  FlArrowMinimizeVerticalFilledSvg,
  FlArrowMinimizeVerticalRegularSvg,
  FlArrowMoveFilledSvg,
  FlArrowMoveInwardFilledSvg,
  FlArrowMoveInwardRegularSvg,
  FlArrowMoveRegularSvg,
  FlArrowNextFilledSvg,
  FlArrowNextRegularSvg,
  FlArrowOutlineDownLeftFilledSvg,
  FlArrowOutlineDownLeftRegularSvg,
  FlArrowOutlineUpRightFilledSvg,
  FlArrowOutlineUpRightRegularSvg,
  FlArrowParagraphFilledSvg,
  FlArrowParagraphRegularSvg,
  FlArrowPreviousFilledSvg,
  FlArrowPreviousRegularSvg,
  FlArrowRedoFilledSvg,
  FlArrowRedoRegularSvg,
  FlArrowRepeat1FilledSvg,
  FlArrowRepeat1RegularSvg,
  FlArrowRepeatAllFilledSvg,
  FlArrowRepeatAllOffFilledSvg,
  FlArrowRepeatAllOffRegularSvg,
  FlArrowRepeatAllRegularSvg,
  FlArrowReplyAllFilledSvg,
  FlArrowReplyAllRegularSvg,
  FlArrowReplyDownFilledSvg,
  FlArrowReplyDownRegularSvg,
  FlArrowReplyFilledSvg,
  FlArrowReplyRegularSvg,
  FlArrowResetFilledSvg,
  FlArrowResetRegularSvg,
  FlArrowRightFilledSvg,
  FlArrowRightRegularSvg,
  FlArrowRotateClockwiseFilledSvg,
  FlArrowRotateClockwiseRegularSvg,
  FlArrowRotateCounterclockwiseFilledSvg,
  FlArrowRotateCounterclockwiseRegularSvg,
  FlArrowRoutingFilledSvg,
  FlArrowRoutingRectangleMultipleFilledSvg,
  FlArrowRoutingRectangleMultipleRegularSvg,
  FlArrowRoutingRegularSvg,
  FlArrowShuffleFilledSvg,
  FlArrowShuffleOffFilledSvg,
  FlArrowShuffleOffRegularSvg,
  FlArrowShuffleRegularSvg,
  FlArrowSortDownFilledSvg,
  FlArrowSortDownLinesFilledSvg,
  FlArrowSortDownLinesRegularSvg,
  FlArrowSortDownRegularSvg,
  FlArrowSortFilledSvg,
  FlArrowSortRegularSvg,
  FlArrowSortUpFilledSvg,
  FlArrowSortUpLinesFilledSvg,
  FlArrowSortUpLinesRegularSvg,
  FlArrowSortUpRegularSvg,
  FlArrowSplitFilledSvg,
  FlArrowSplitRegularSvg,
  FlArrowSprintFilledSvg,
  FlArrowSprintRegularSvg,
  FlArrowSquareDownFilledSvg,
  FlArrowSquareDownRegularSvg,
  FlArrowSquareUpRightFilledSvg,
  FlArrowSquareUpRightRegularSvg,
  FlArrowStepBackFilledSvg,
  FlArrowStepBackRegularSvg,
  FlArrowStepInDiagonalDownLeftFilledSvg,
  FlArrowStepInDiagonalDownLeftRegularSvg,
  FlArrowStepInFilledSvg,
  FlArrowStepInLeftFilledSvg,
  FlArrowStepInLeftRegularSvg,
  FlArrowStepInRegularSvg,
  FlArrowStepInRightFilledSvg,
  FlArrowStepInRightRegularSvg,
  FlArrowStepOutFilledSvg,
  FlArrowStepOutRegularSvg,
  FlArrowStepOverFilledSvg,
  FlArrowStepOverRegularSvg,
  FlArrowSwapFilledSvg,
  FlArrowSwapRegularSvg,
  FlArrowSyncCheckmarkFilledSvg,
  FlArrowSyncCheckmarkRegularSvg,
  FlArrowSyncCircleFilledSvg,
  FlArrowSyncCircleRegularSvg,
  FlArrowSyncDismissFilledSvg,
  FlArrowSyncDismissRegularSvg,
  FlArrowSyncFilledSvg,
  FlArrowSyncOffFilledSvg,
  FlArrowSyncOffRegularSvg,
  FlArrowSyncRegularSvg,
  FlArrowTrendingCheckmarkFilledSvg,
  FlArrowTrendingCheckmarkRegularSvg,
  FlArrowTrendingDownFilledSvg,
  FlArrowTrendingDownRegularSvg,
  FlArrowTrendingFilledSvg,
  FlArrowTrendingLinesColorSvg,
  FlArrowTrendingLinesFilledSvg,
  FlArrowTrendingLinesRegularSvg,
  FlArrowTrendingRegularSvg,
  FlArrowTrendingSettingsFilledSvg,
  FlArrowTrendingSettingsRegularSvg,
  FlArrowTrendingSparkleFilledSvg,
  FlArrowTrendingSparkleRegularSvg,
  FlArrowTrendingTextFilledSvg,
  FlArrowTrendingTextRegularSvg,
  FlArrowTrendingWrenchFilledSvg,
  FlArrowTrendingWrenchRegularSvg,
  FlArrowTurnBidirectionalDownRightFilledSvg,
  FlArrowTurnBidirectionalDownRightRegularSvg,
  FlArrowTurnDownLeftFilledSvg,
  FlArrowTurnDownLeftRegularSvg,
  FlArrowTurnDownRightFilledSvg,
  FlArrowTurnDownRightRegularSvg,
  FlArrowTurnDownUpFilledSvg,
  FlArrowTurnDownUpRegularSvg,
  FlArrowTurnLeftDownFilledSvg,
  FlArrowTurnLeftDownRegularSvg,
  FlArrowTurnLeftRightFilledSvg,
  FlArrowTurnLeftRightRegularSvg,
  FlArrowTurnLeftUpFilledSvg,
  FlArrowTurnLeftUpRegularSvg,
  FlArrowTurnRightDownFilledSvg,
  FlArrowTurnRightDownRegularSvg,
  FlArrowTurnRightFilledSvg,
  FlArrowTurnRightLeftFilledSvg,
  FlArrowTurnRightLeftRegularSvg,
  FlArrowTurnRightRegularSvg,
  FlArrowTurnRightUpFilledSvg,
  FlArrowTurnRightUpRegularSvg,
  FlArrowTurnUpDownFilledSvg,
  FlArrowTurnUpDownRegularSvg,
  FlArrowTurnUpLeftFilledSvg,
  FlArrowTurnUpLeftRegularSvg,
  FlArrowUndoFilledSvg,
  FlArrowUndoRegularSvg,
  FlArrowUpExclamationFilledSvg,
  FlArrowUpExclamationRegularSvg,
  FlArrowUpFilledSvg,
  FlArrowUpLeftFilledSvg,
  FlArrowUpLeftRegularSvg,
  FlArrowUpRegularSvg,
  FlArrowUpRightDashesFilledSvg,
  FlArrowUpRightDashesRegularSvg,
  FlArrowUpRightFilledSvg,
  FlArrowUpRightRegularSvg,
  FlArrowUploadFilledSvg,
  FlArrowUploadRegularSvg,
  FlArrowWrapFilledSvg,
  FlArrowWrapOffFilledSvg,
  FlArrowWrapOffRegularSvg,
  FlArrowWrapRegularSvg,
  FlArrowWrapUpToDownFilledSvg,
  FlArrowWrapUpToDownRegularSvg,
  FlArrowsBidirectionalFilledSvg,
  FlArrowsBidirectionalRegularSvg,
  FlAttachArrowRightFilledSvg,
  FlAttachArrowRightRegularSvg,
  FlAttachFilledSvg,
  FlAttachRegularSvg,
  FlAttachTextFilledSvg,
  FlAttachTextRegularSvg,
  FlAutoFitHeightFilledSvg,
  FlAutoFitHeightRegularSvg,
  FlAutoFitWidthFilledSvg,
  FlAutoFitWidthRegularSvg,
  FlAutocorrectFilledSvg,
  FlAutocorrectRegularSvg,
  FlAutosumFilledSvg,
  FlAutosumRegularSvg,
  FlBackpackAddFilledSvg,
  FlBackpackAddRegularSvg,
  FlBackpackFilledSvg,
  FlBackpackRegularSvg,
  FlBackspaceFilledSvg,
  FlBackspaceRegularSvg,
  FlBadgeFilledSvg,
  FlBadgeRegularSvg,
  FlBalloonFilledSvg,
  FlBalloonRegularSvg,
  FlBarcodeScannerFilledSvg,
  FlBarcodeScannerRegularSvg,
  FlBattery0FilledSvg,
  FlBattery0RegularSvg,
  FlBattery10FilledSvg,
  FlBattery10RegularSvg,
  FlBattery1FilledSvg,
  FlBattery1RegularSvg,
  FlBattery2FilledSvg,
  FlBattery2RegularSvg,
  FlBattery3FilledSvg,
  FlBattery3RegularSvg,
  FlBattery4FilledSvg,
  FlBattery4RegularSvg,
  FlBattery5FilledSvg,
  FlBattery5RegularSvg,
  FlBattery6FilledSvg,
  FlBattery6RegularSvg,
  FlBattery7FilledSvg,
  FlBattery7RegularSvg,
  FlBattery8FilledSvg,
  FlBattery8RegularSvg,
  FlBattery9FilledSvg,
  FlBattery9RegularSvg,
  FlBatteryChargeFilledSvg,
  FlBatteryChargeRegularSvg,
  FlBatteryCheckmarkFilledSvg,
  FlBatteryCheckmarkRegularSvg,
  FlBatterySaverFilledSvg,
  FlBatterySaverRegularSvg,
  FlBatteryWarningFilledSvg,
  FlBatteryWarningRegularSvg,
  FlBeachColorSvg,
  FlBeachFilledSvg,
  FlBeachRegularSvg,
  FlBeakerAddFilledSvg,
  FlBeakerAddRegularSvg,
  FlBeakerDismissFilledSvg,
  FlBeakerDismissRegularSvg,
  FlBeakerEditFilledSvg,
  FlBeakerEditRegularSvg,
  FlBeakerFilledSvg,
  FlBeakerOffFilledSvg,
  FlBeakerOffRegularSvg,
  FlBeakerRegularSvg,
  FlBeakerSettingsFilledSvg,
  FlBeakerSettingsRegularSvg,
  FlBedFilledSvg,
  FlBedRegularSvg,
  FlBenchFilledSvg,
  FlBenchRegularSvg,
  FlBezierCurveSquareFilledSvg,
  FlBezierCurveSquareRegularSvg,
  FlBinFullFilledSvg,
  FlBinFullRegularSvg,
  FlBinRecycleFilledSvg,
  FlBinRecycleFullFilledSvg,
  FlBinRecycleFullRegularSvg,
  FlBinRecycleRegularSvg,
  FlBinderTriangleFilledSvg,
  FlBinderTriangleRegularSvg,
  FlBluetoothConnectedFilledSvg,
  FlBluetoothConnectedRegularSvg,
  FlBluetoothDisabledFilledSvg,
  FlBluetoothDisabledRegularSvg,
  FlBluetoothFilledSvg,
  FlBluetoothRegularSvg,
  FlBluetoothSearchingFilledSvg,
  FlBluetoothSearchingRegularSvg,
  FlBlurFilledSvg,
  FlBlurRegularSvg,
  FlBoardFilledSvg,
  FlBoardGamesFilledSvg,
  FlBoardGamesRegularSvg,
  FlBoardHeartFilledSvg,
  FlBoardHeartRegularSvg,
  FlBoardRegularSvg,
  FlBoardSplitFilledSvg,
  FlBoardSplitRegularSvg,
  FlBookAddFilledSvg,
  FlBookAddRegularSvg,
  FlBookArrowClockwiseFilledSvg,
  FlBookArrowClockwiseRegularSvg,
  FlBookClockFilledSvg,
  FlBookClockRegularSvg,
  FlBookCoinsFilledSvg,
  FlBookCoinsRegularSvg,
  FlBookCompassFilledSvg,
  FlBookCompassRegularSvg,
  FlBookContactsFilledSvg,
  FlBookContactsRegularSvg,
  FlBookDatabaseFilledSvg,
  FlBookDatabaseRegularSvg,
  FlBookDefaultFilledSvg,
  FlBookDismissFilledSvg,
  FlBookDismissRegularSvg,
  FlBookExclamationMarkFilledSvg,
  FlBookExclamationMarkRegularSvg,
  FlBookFilledSvg,
  FlBookGlobeFilledSvg,
  FlBookGlobeRegularSvg,
  FlBookInformationFilledSvg,
  FlBookInformationRegularSvg,
  FlBookLetterFilledSvg,
  FlBookLetterRegularSvg,
  FlBookNumberFilledSvg,
  FlBookNumberRegularSvg,
  FlBookOpenFilledSvg,
  FlBookOpenGlobeFilledSvg,
  FlBookOpenGlobeRegularSvg,
  FlBookOpenMicrophoneFilledSvg,
  FlBookOpenMicrophoneRegularSvg,
  FlBookOpenRegularSvg,
  FlBookPulseFilledSvg,
  FlBookPulseRegularSvg,
  FlBookQuestionMarkFilledSvg,
  FlBookQuestionMarkRegularSvg,
  FlBookQuestionMarkRtlFilledSvg,
  FlBookQuestionMarkRtlRegularSvg,
  FlBookRegularSvg,
  FlBookSearchFilledSvg,
  FlBookSearchRegularSvg,
  FlBookStarFilledSvg,
  FlBookStarRegularSvg,
  FlBookTemplateFilledSvg,
  FlBookTemplateRegularSvg,
  FlBookThetaFilledSvg,
  FlBookThetaRegularSvg,
  FlBookToolboxFilledSvg,
  FlBookToolboxRegularSvg,
  FlBookmarkAddFilledSvg,
  FlBookmarkAddRegularSvg,
  FlBookmarkFilledSvg,
  FlBookmarkMultipleFilledSvg,
  FlBookmarkMultipleRegularSvg,
  FlBookmarkOffFilledSvg,
  FlBookmarkOffRegularSvg,
  FlBookmarkRegularSvg,
  FlBookmarkSearchFilledSvg,
  FlBookmarkSearchRegularSvg,
  FlBorderAllFilledSvg,
  FlBorderAllRegularSvg,
  FlBorderBottomDoubleFilledSvg,
  FlBorderBottomDoubleRegularSvg,
  FlBorderBottomFilledSvg,
  FlBorderBottomRegularSvg,
  FlBorderBottomThickFilledSvg,
  FlBorderBottomThickRegularSvg,
  FlBorderInsideFilledSvg,
  FlBorderInsideRegularSvg,
  FlBorderLeftFilledSvg,
  FlBorderLeftRegularSvg,
  FlBorderLeftRightFilledSvg,
  FlBorderLeftRightRegularSvg,
  FlBorderNoneFilledSvg,
  FlBorderNoneRegularSvg,
  FlBorderOutsideFilledSvg,
  FlBorderOutsideRegularSvg,
  FlBorderOutsideThickFilledSvg,
  FlBorderOutsideThickRegularSvg,
  FlBorderRightFilledSvg,
  FlBorderRightRegularSvg,
  FlBorderTopBottomDoubleFilledSvg,
  FlBorderTopBottomDoubleRegularSvg,
  FlBorderTopBottomFilledSvg,
  FlBorderTopBottomRegularSvg,
  FlBorderTopBottomThickFilledSvg,
  FlBorderTopBottomThickRegularSvg,
  FlBorderTopFilledSvg,
  FlBorderTopRegularSvg,
  FlBotAddFilledSvg,
  FlBotAddRegularSvg,
  FlBotFilledSvg,
  FlBotRegularSvg,
  FlBotSparkleFilledSvg,
  FlBotSparkleRegularSvg,
  FlBowTieFilledSvg,
  FlBowTieRegularSvg,
  FlBowlChopsticksFilledSvg,
  FlBowlChopsticksRegularSvg,
  FlBowlSaladFilledSvg,
  FlBowlSaladRegularSvg,
  FlBoxArrowLeftFilledSvg,
  FlBoxArrowLeftRegularSvg,
  FlBoxArrowUpFilledSvg,
  FlBoxArrowUpRegularSvg,
  FlBoxCheckmarkFilledSvg,
  FlBoxCheckmarkRegularSvg,
  FlBoxDismissFilledSvg,
  FlBoxDismissRegularSvg,
  FlBoxEditFilledSvg,
  FlBoxEditRegularSvg,
  FlBoxFilledSvg,
  FlBoxMultipleArrowLeftFilledSvg,
  FlBoxMultipleArrowLeftRegularSvg,
  FlBoxMultipleArrowRightFilledSvg,
  FlBoxMultipleArrowRightRegularSvg,
  FlBoxMultipleCheckmarkFilledSvg,
  FlBoxMultipleCheckmarkRegularSvg,
  FlBoxMultipleFilledSvg,
  FlBoxMultipleRegularSvg,
  FlBoxMultipleSearchFilledSvg,
  FlBoxMultipleSearchRegularSvg,
  FlBoxRegularSvg,
  FlBoxSearchFilledSvg,
  FlBoxSearchRegularSvg,
  FlBoxToolboxFilledSvg,
  FlBoxToolboxRegularSvg,
  FlBracesFilledSvg,
  FlBracesRegularSvg,
  FlBracesVariableFilledSvg,
  FlBracesVariableRegularSvg,
  FlBrainCircuitFilledSvg,
  FlBrainCircuitRegularSvg,
  FlBranchCompareFilledSvg,
  FlBranchCompareRegularSvg,
  FlBranchFilledSvg,
  FlBranchForkFilledSvg,
  FlBranchForkHintFilledSvg,
  FlBranchForkHintRegularSvg,
  FlBranchForkLinkFilledSvg,
  FlBranchForkLinkRegularSvg,
  FlBranchForkRegularSvg,
  FlBranchRegularSvg,
  FlBranchRequestFilledSvg,
  FlBranchRequestRegularSvg,
  FlBreakoutRoomFilledSvg,
  FlBreakoutRoomRegularSvg,
  FlBriefcaseFilledSvg,
  FlBriefcaseMedicalFilledSvg,
  FlBriefcaseMedicalRegularSvg,
  FlBriefcaseOffFilledSvg,
  FlBriefcaseOffRegularSvg,
  FlBriefcaseRegularSvg,
  FlBriefcaseSearchFilledSvg,
  FlBriefcaseSearchRegularSvg,
  FlBrightnessHighFilledSvg,
  FlBrightnessHighRegularSvg,
  FlBrightnessLowFilledSvg,
  FlBrightnessLowRegularSvg,
  FlBroadActivityFeedFilledSvg,
  FlBroadActivityFeedRegularSvg,
  FlBroomFilledSvg,
  FlBroomRegularSvg,
  FlBubbleMultipleFilledSvg,
  FlBubbleMultipleRegularSvg,
  FlBugArrowCounterclockwiseFilledSvg,
  FlBugArrowCounterclockwiseRegularSvg,
  FlBugFilledSvg,
  FlBugProhibitedFilledSvg,
  FlBugProhibitedRegularSvg,
  FlBugRegularSvg,
  FlBuildingBankFilledSvg,
  FlBuildingBankLinkFilledSvg,
  FlBuildingBankLinkRegularSvg,
  FlBuildingBankRegularSvg,
  FlBuildingBankToolboxFilledSvg,
  FlBuildingBankToolboxRegularSvg,
  FlBuildingCheckmarkFilledSvg,
  FlBuildingCheckmarkRegularSvg,
  FlBuildingColorSvg,
  FlBuildingDesktopFilledSvg,
  FlBuildingDesktopRegularSvg,
  FlBuildingFactoryFilledSvg,
  FlBuildingFactoryRegularSvg,
  FlBuildingFilledSvg,
  FlBuildingGovernmentFilledSvg,
  FlBuildingGovernmentRegularSvg,
  FlBuildingGovernmentSearchFilledSvg,
  FlBuildingGovernmentSearchRegularSvg,
  FlBuildingHomeFilledSvg,
  FlBuildingHomeRegularSvg,
  FlBuildingLighthouseFilledSvg,
  FlBuildingLighthouseRegularSvg,
  FlBuildingMosqueFilledSvg,
  FlBuildingMosqueRegularSvg,
  FlBuildingMultipleColorSvg,
  FlBuildingMultipleFilledSvg,
  FlBuildingMultipleRegularSvg,
  FlBuildingPeopleColorSvg,
  FlBuildingPeopleFilledSvg,
  FlBuildingPeopleRegularSvg,
  FlBuildingRegularSvg,
  FlBuildingRetailFilledSvg,
  FlBuildingRetailMoneyFilledSvg,
  FlBuildingRetailMoneyRegularSvg,
  FlBuildingRetailMoreFilledSvg,
  FlBuildingRetailMoreRegularSvg,
  FlBuildingRetailRegularSvg,
  FlBuildingRetailShieldFilledSvg,
  FlBuildingRetailShieldRegularSvg,
  FlBuildingRetailToolboxFilledSvg,
  FlBuildingRetailToolboxRegularSvg,
  FlBuildingShopFilledSvg,
  FlBuildingShopRegularSvg,
  FlBuildingSkyscraperFilledSvg,
  FlBuildingSkyscraperRegularSvg,
  FlBuildingStoreColorSvg,
  FlBuildingSwapFilledSvg,
  FlBuildingSwapRegularSvg,
  FlBuildingTownhouseFilledSvg,
  FlBuildingTownhouseRegularSvg,
  FlButtonFilledSvg,
  FlButtonRegularSvg,
  FlCalculatorArrowClockwiseFilledSvg,
  FlCalculatorArrowClockwiseRegularSvg,
  FlCalculatorFilledSvg,
  FlCalculatorMultipleFilledSvg,
  FlCalculatorMultipleRegularSvg,
  FlCalculatorRegularSvg,
  FlCalendar3DayFilledSvg,
  FlCalendar3DayRegularSvg,
  FlCalendarAddFilledSvg,
  FlCalendarAddRegularSvg,
  FlCalendarAgendaFilledSvg,
  FlCalendarAgendaRegularSvg,
  FlCalendarArrowCounterclockwiseFilledSvg,
  FlCalendarArrowCounterclockwiseRegularSvg,
  FlCalendarArrowDownFilledSvg,
  FlCalendarArrowDownRegularSvg,
  FlCalendarArrowRepeatAllFilledSvg,
  FlCalendarArrowRepeatAllRegularSvg,
  FlCalendarArrowRightFilledSvg,
  FlCalendarArrowRightRegularSvg,
  FlCalendarAssistantFilledSvg,
  FlCalendarAssistantRegularSvg,
  FlCalendarCancelColorSvg,
  FlCalendarCancelFilledSvg,
  FlCalendarCancelRegularSvg,
  FlCalendarChatFilledSvg,
  FlCalendarChatRegularSvg,
  FlCalendarCheckmarkColorSvg,
  FlCalendarCheckmarkFilledSvg,
  FlCalendarCheckmarkRegularSvg,
  FlCalendarClockColorSvg,
  FlCalendarClockFilledSvg,
  FlCalendarClockRegularSvg,
  FlCalendarColorSvg,
  FlCalendarDataBarFilledSvg,
  FlCalendarDataBarRegularSvg,
  FlCalendarDateFilledSvg,
  FlCalendarDateRegularSvg,
  FlCalendarDayFilledSvg,
  FlCalendarDayRegularSvg,
  FlCalendarEditFilledSvg,
  FlCalendarEditRegularSvg,
  FlCalendarEmptyFilledSvg,
  FlCalendarEmptyRegularSvg,
  FlCalendarErrorFilledSvg,
  FlCalendarErrorRegularSvg,
  FlCalendarEyeFilledSvg,
  FlCalendarEyeRegularSvg,
  FlCalendarFilledSvg,
  FlCalendarInfoFilledSvg,
  FlCalendarInfoRegularSvg,
  FlCalendarLockFilledSvg,
  FlCalendarLockRegularSvg,
  FlCalendarLtrFilledSvg,
  FlCalendarLtrRegularSvg,
  FlCalendarMailFilledSvg,
  FlCalendarMailRegularSvg,
  FlCalendarMentionFilledSvg,
  FlCalendarMentionRegularSvg,
  FlCalendarMonthFilledSvg,
  FlCalendarMonthRegularSvg,
  FlCalendarMultipleFilledSvg,
  FlCalendarMultipleRegularSvg,
  FlCalendarNoteFilledSvg,
  FlCalendarNoteRegularSvg,
  FlCalendarPatternFilledSvg,
  FlCalendarPatternRegularSvg,
  FlCalendarPeopleColorSvg,
  FlCalendarPersonFilledSvg,
  FlCalendarPersonRegularSvg,
  FlCalendarPhoneFilledSvg,
  FlCalendarPhoneRegularSvg,
  FlCalendarPlayFilledSvg,
  FlCalendarPlayRegularSvg,
  FlCalendarQuestionMarkFilledSvg,
  FlCalendarQuestionMarkRegularSvg,
  FlCalendarRecordFilledSvg,
  FlCalendarRecordRegularSvg,
  FlCalendarRegularSvg,
  FlCalendarReplyFilledSvg,
  FlCalendarReplyRegularSvg,
  FlCalendarRtlFilledSvg,
  FlCalendarRtlRegularSvg,
  FlCalendarSearchFilledSvg,
  FlCalendarSearchRegularSvg,
  FlCalendarSettingsFilledSvg,
  FlCalendarSettingsRegularSvg,
  FlCalendarShieldFilledSvg,
  FlCalendarShieldRegularSvg,
  FlCalendarSparkleFilledSvg,
  FlCalendarSparkleRegularSvg,
  FlCalendarStarFilledSvg,
  FlCalendarStarRegularSvg,
  FlCalendarSyncFilledSvg,
  FlCalendarSyncRegularSvg,
  FlCalendarTemplateFilledSvg,
  FlCalendarTemplateRegularSvg,
  FlCalendarTodayFilledSvg,
  FlCalendarTodayRegularSvg,
  FlCalendarToolboxFilledSvg,
  FlCalendarToolboxRegularSvg,
  FlCalendarVideoFilledSvg,
  FlCalendarVideoRegularSvg,
  FlCalendarWeekNumbersFilledSvg,
  FlCalendarWeekNumbersRegularSvg,
  FlCalendarWeekStartFilledSvg,
  FlCalendarWeekStartRegularSvg,
  FlCalendarWorkWeekFilledSvg,
  FlCalendarWorkWeekRegularSvg,
  FlCallAddFilledSvg,
  FlCallAddRegularSvg,
  FlCallCheckmarkFilledSvg,
  FlCallCheckmarkRegularSvg,
  FlCallConnectingFilledSvg,
  FlCallConnectingRegularSvg,
  FlCallDismissFilledSvg,
  FlCallDismissRegularSvg,
  FlCallEndFilledSvg,
  FlCallEndRegularSvg,
  FlCallExclamationFilledSvg,
  FlCallExclamationRegularSvg,
  FlCallFilledSvg,
  FlCallForwardFilledSvg,
  FlCallForwardRegularSvg,
  FlCallInboundFilledSvg,
  FlCallInboundRegularSvg,
  FlCallMissedFilledSvg,
  FlCallMissedRegularSvg,
  FlCallOutboundFilledSvg,
  FlCallOutboundRegularSvg,
  FlCallParkFilledSvg,
  FlCallParkRegularSvg,
  FlCallPauseFilledSvg,
  FlCallPauseRegularSvg,
  FlCallProhibitedFilledSvg,
  FlCallProhibitedRegularSvg,
  FlCallRegularSvg,
  FlCallTransferFilledSvg,
  FlCallTransferRegularSvg,
  FlCallWarningFilledSvg,
  FlCallWarningRegularSvg,
  FlCalligraphyPenCheckmarkFilledSvg,
  FlCalligraphyPenCheckmarkRegularSvg,
  FlCalligraphyPenErrorFilledSvg,
  FlCalligraphyPenErrorRegularSvg,
  FlCalligraphyPenFilledSvg,
  FlCalligraphyPenQuestionMarkFilledSvg,
  FlCalligraphyPenQuestionMarkRegularSvg,
  FlCalligraphyPenRegularSvg,
  FlCameraAddFilledSvg,
  FlCameraAddRegularSvg,
  FlCameraArrowUpFilledSvg,
  FlCameraArrowUpRegularSvg,
  FlCameraColorSvg,
  FlCameraDomeFilledSvg,
  FlCameraDomeRegularSvg,
  FlCameraEditFilledSvg,
  FlCameraEditRegularSvg,
  FlCameraFilledSvg,
  FlCameraOffFilledSvg,
  FlCameraOffRegularSvg,
  FlCameraRegularSvg,
  FlCameraSparklesFilledSvg,
  FlCameraSparklesRegularSvg,
  FlCameraSwitchFilledSvg,
  FlCameraSwitchRegularSvg,
  FlCardUiFilledSvg,
  FlCardUiPortraitFlipFilledSvg,
  FlCardUiPortraitFlipRegularSvg,
  FlCardUiRegularSvg,
  FlCaretDownFilledSvg,
  FlCaretDownRegularSvg,
  FlCaretDownRightFilledSvg,
  FlCaretDownRightRegularSvg,
  FlCaretLeftFilledSvg,
  FlCaretLeftRegularSvg,
  FlCaretRightFilledSvg,
  FlCaretRightRegularSvg,
  FlCaretUpFilledSvg,
  FlCaretUpRegularSvg,
  FlCartFilledSvg,
  FlCartRegularSvg,
  FlCastFilledSvg,
  FlCastMultipleFilledSvg,
  FlCastMultipleRegularSvg,
  FlCastRegularSvg,
  FlCatchUpFilledSvg,
  FlCatchUpRegularSvg,
  FlCd16FilledSvg,
  FlCd16RegularSvg,
  FlCellular3gFilledSvg,
  FlCellular3gRegularSvg,
  FlCellular4gFilledSvg,
  FlCellular4gRegularSvg,
  FlCellular5gFilledSvg,
  FlCellular5gRegularSvg,
  FlCellularData1FilledSvg,
  FlCellularData1RegularSvg,
  FlCellularData2FilledSvg,
  FlCellularData2RegularSvg,
  FlCellularData3FilledSvg,
  FlCellularData3RegularSvg,
  FlCellularData4FilledSvg,
  FlCellularData4RegularSvg,
  FlCellularData5FilledSvg,
  FlCellularData5RegularSvg,
  FlCellularOffFilledSvg,
  FlCellularOffRegularSvg,
  FlCellularWarningFilledSvg,
  FlCellularWarningRegularSvg,
  FlCenterHorizontalFilledSvg,
  FlCenterHorizontalRegularSvg,
  FlCenterVerticalFilledSvg,
  FlCenterVerticalRegularSvg,
  FlCertificateFilledSvg,
  FlCertificateRegularSvg,
  FlChannelAddFilledSvg,
  FlChannelAddRegularSvg,
  FlChannelAlertFilledSvg,
  FlChannelAlertRegularSvg,
  FlChannelArrowLeftFilledSvg,
  FlChannelArrowLeftRegularSvg,
  FlChannelDismissFilledSvg,
  FlChannelDismissRegularSvg,
  FlChannelFilledSvg,
  FlChannelRegularSvg,
  FlChannelShareFilledSvg,
  FlChannelShareRegularSvg,
  FlChannelSubtractFilledSvg,
  FlChannelSubtractRegularSvg,
  FlChartMultipleFilledSvg,
  FlChartMultipleRegularSvg,
  FlChartPersonFilledSvg,
  FlChartPersonRegularSvg,
  FlChatAddFilledSvg,
  FlChatAddRegularSvg,
  FlChatArrowBackDownFilledSvg,
  FlChatArrowBackDownRegularSvg,
  FlChatArrowBackFilledSvg,
  FlChatArrowBackRegularSvg,
  FlChatArrowDoubleBackFilledSvg,
  FlChatArrowDoubleBackRegularSvg,
  FlChatBubblesQuestionColorSvg,
  FlChatBubblesQuestionFilledSvg,
  FlChatBubblesQuestionRegularSvg,
  FlChatCursorFilledSvg,
  FlChatCursorRegularSvg,
  FlChatDismissFilledSvg,
  FlChatDismissRegularSvg,
  FlChatEmptyFilledSvg,
  FlChatEmptyRegularSvg,
  FlChatFilledSvg,
  FlChatHelpFilledSvg,
  FlChatHelpRegularSvg,
  FlChatLockFilledSvg,
  FlChatLockRegularSvg,
  FlChatMailFilledSvg,
  FlChatMailRegularSvg,
  FlChatMoreColorSvg,
  FlChatMultipleColorSvg,
  FlChatMultipleFilledSvg,
  FlChatMultipleHeartFilledSvg,
  FlChatMultipleHeartRegularSvg,
  FlChatMultipleRegularSvg,
  FlChatOffFilledSvg,
  FlChatOffRegularSvg,
  FlChatRegularSvg,
  FlChatSettingsFilledSvg,
  FlChatSettingsRegularSvg,
  FlChatSparkleFilledSvg,
  FlChatSparkleRegularSvg,
  FlChatVideoFilledSvg,
  FlChatVideoRegularSvg,
  FlChatWarningFilledSvg,
  FlChatWarningRegularSvg,
  FlCheckFilledSvg,
  FlCheckRegularSvg,
  FlCheckbox1FilledSvg,
  FlCheckbox1RegularSvg,
  FlCheckbox2FilledSvg,
  FlCheckbox2RegularSvg,
  FlCheckboxArrowRightFilledSvg,
  FlCheckboxArrowRightRegularSvg,
  FlCheckboxCheckedFilledSvg,
  FlCheckboxCheckedRegularSvg,
  FlCheckboxCheckedSyncFilledSvg,
  FlCheckboxCheckedSyncRegularSvg,
  FlCheckboxColorSvg,
  FlCheckboxIndeterminateFilledSvg,
  FlCheckboxIndeterminateRegularSvg,
  FlCheckboxPersonColorSvg,
  FlCheckboxPersonFilledSvg,
  FlCheckboxPersonRegularSvg,
  FlCheckboxUncheckedFilledSvg,
  FlCheckboxUncheckedRegularSvg,
  FlCheckboxWarningFilledSvg,
  FlCheckboxWarningRegularSvg,
  FlCheckmarkCircleColorSvg,
  FlCheckmarkCircleFilledSvg,
  FlCheckmarkCircleRegularSvg,
  FlCheckmarkCircleSquareFilledSvg,
  FlCheckmarkCircleSquareRegularSvg,
  FlCheckmarkCircleWarningFilledSvg,
  FlCheckmarkCircleWarningRegularSvg,
  FlCheckmarkFilledSvg,
  FlCheckmarkLockFilledSvg,
  FlCheckmarkLockRegularSvg,
  FlCheckmarkNoteFilledSvg,
  FlCheckmarkNoteRegularSvg,
  FlCheckmarkRegularSvg,
  FlCheckmarkSquareFilledSvg,
  FlCheckmarkSquareRegularSvg,
  FlCheckmarkStarburstFilledSvg,
  FlCheckmarkStarburstRegularSvg,
  FlCheckmarkUnderlineCircleFilledSvg,
  FlCheckmarkUnderlineCircleRegularSvg,
  FlChessFilledSvg,
  FlChessRegularSvg,
  FlChevronCircleDownFilledSvg,
  FlChevronCircleDownRegularSvg,
  FlChevronCircleLeftFilledSvg,
  FlChevronCircleLeftRegularSvg,
  FlChevronCircleRightFilledSvg,
  FlChevronCircleRightRegularSvg,
  FlChevronCircleUpFilledSvg,
  FlChevronCircleUpRegularSvg,
  FlChevronDoubleDownFilledSvg,
  FlChevronDoubleDownRegularSvg,
  FlChevronDoubleLeftFilledSvg,
  FlChevronDoubleLeftRegularSvg,
  FlChevronDoubleRightFilledSvg,
  FlChevronDoubleRightRegularSvg,
  FlChevronDoubleUpFilledSvg,
  FlChevronDoubleUpRegularSvg,
  FlChevronDownFilledSvg,
  FlChevronDownRegularSvg,
  FlChevronDownUpFilledSvg,
  FlChevronDownUpRegularSvg,
  FlChevronLeftFilledSvg,
  FlChevronLeftRegularSvg,
  FlChevronRightFilledSvg,
  FlChevronRightRegularSvg,
  FlChevronUpDownFilledSvg,
  FlChevronUpDownRegularSvg,
  FlChevronUpFilledSvg,
  FlChevronUpRegularSvg,
  FlCircleEditFilledSvg,
  FlCircleEditRegularSvg,
  FlCircleEraserFilledSvg,
  FlCircleEraserRegularSvg,
  FlCircleFilledSvg,
  FlCircleHalfFillFilledSvg,
  FlCircleHalfFillRegularSvg,
  FlCircleHighlightFilledSvg,
  FlCircleHighlightRegularSvg,
  FlCircleHintFilledSvg,
  FlCircleHintHalfVerticalFilledSvg,
  FlCircleHintHalfVerticalRegularSvg,
  FlCircleHintRegularSvg,
  FlCircleImageFilledSvg,
  FlCircleImageRegularSvg,
  FlCircleLineFilledSvg,
  FlCircleLineRegularSvg,
  FlCircleMultipleSubtractCheckmarkFilledSvg,
  FlCircleMultipleSubtractCheckmarkRegularSvg,
  FlCircleOffFilledSvg,
  FlCircleOffRegularSvg,
  FlCircleRegularSvg,
  FlCircleShadowFilledSvg,
  FlCircleShadowRegularSvg,
  FlCircleSmallFilledSvg,
  FlCircleSmallRegularSvg,
  FlCityFilledSvg,
  FlCityRegularSvg,
  FlClassFilledSvg,
  FlClassRegularSvg,
  FlClassificationFilledSvg,
  FlClassificationRegularSvg,
  FlClearFormattingFilledSvg,
  FlClearFormattingRegularSvg,
  FlClipboard3DayFilledSvg,
  FlClipboard3DayRegularSvg,
  FlClipboardArrowRightFilledSvg,
  FlClipboardArrowRightRegularSvg,
  FlClipboardBrushFilledSvg,
  FlClipboardBrushRegularSvg,
  FlClipboardBulletListFilledSvg,
  FlClipboardBulletListLtrFilledSvg,
  FlClipboardBulletListLtrRegularSvg,
  FlClipboardBulletListRegularSvg,
  FlClipboardBulletListRtlFilledSvg,
  FlClipboardBulletListRtlRegularSvg,
  FlClipboardCheckmarkFilledSvg,
  FlClipboardCheckmarkRegularSvg,
  FlClipboardClockFilledSvg,
  FlClipboardClockRegularSvg,
  FlClipboardCodeFilledSvg,
  FlClipboardCodeRegularSvg,
  FlClipboardColorSvg,
  FlClipboardDataBarFilledSvg,
  FlClipboardDataBarRegularSvg,
  FlClipboardDayFilledSvg,
  FlClipboardDayRegularSvg,
  FlClipboardEditFilledSvg,
  FlClipboardEditRegularSvg,
  FlClipboardErrorFilledSvg,
  FlClipboardErrorRegularSvg,
  FlClipboardFilledSvg,
  FlClipboardHeartFilledSvg,
  FlClipboardHeartRegularSvg,
  FlClipboardImageFilledSvg,
  FlClipboardImageRegularSvg,
  FlClipboardLetterFilledSvg,
  FlClipboardLetterRegularSvg,
  FlClipboardLinkFilledSvg,
  FlClipboardLinkRegularSvg,
  FlClipboardMathFormulaFilledSvg,
  FlClipboardMathFormulaRegularSvg,
  FlClipboardMonthFilledSvg,
  FlClipboardMonthRegularSvg,
  FlClipboardMoreFilledSvg,
  FlClipboardMoreRegularSvg,
  FlClipboardNoteFilledSvg,
  FlClipboardNoteRegularSvg,
  FlClipboardNumber123FilledSvg,
  FlClipboardNumber123RegularSvg,
  FlClipboardPasteFilledSvg,
  FlClipboardPasteRegularSvg,
  FlClipboardPulseFilledSvg,
  FlClipboardPulseRegularSvg,
  FlClipboardRegularSvg,
  FlClipboardSearchFilledSvg,
  FlClipboardSearchRegularSvg,
  FlClipboardSettingsFilledSvg,
  FlClipboardSettingsRegularSvg,
  FlClipboardTaskAddFilledSvg,
  FlClipboardTaskAddRegularSvg,
  FlClipboardTaskFilledSvg,
  FlClipboardTaskListFilledLtrSvg,
  FlClipboardTaskListFilledRtlSvg,
  FlClipboardTaskListLtrFilledSvg,
  FlClipboardTaskListLtrRegularSvg,
  FlClipboardTaskListRegularLtrSvg,
  FlClipboardTaskListRegularRtlSvg,
  FlClipboardTaskListRtlFilledSvg,
  FlClipboardTaskListRtlRegularSvg,
  FlClipboardTaskRegularSvg,
  FlClipboardTextEditColorSvg,
  FlClipboardTextEditFilledSvg,
  FlClipboardTextEditRegularSvg,
  FlClipboardTextLtrFilledSvg,
  FlClipboardTextLtrRegularSvg,
  FlClipboardTextRtlFilledSvg,
  FlClipboardTextRtlRegularSvg,
  FlClockAlarmColorSvg,
  FlClockAlarmFilledSvg,
  FlClockAlarmRegularSvg,
  FlClockArrowDownloadFilledSvg,
  FlClockArrowDownloadRegularSvg,
  FlClockBillFilledSvg,
  FlClockBillRegularSvg,
  FlClockDismissFilledSvg,
  FlClockDismissRegularSvg,
  FlClockFilledSvg,
  FlClockLockFilledSvg,
  FlClockLockRegularSvg,
  FlClockPauseFilledSvg,
  FlClockPauseRegularSvg,
  FlClockRegularSvg,
  FlClockToolboxFilledSvg,
  FlClockToolboxRegularSvg,
  FlClosedCaptionFilledSvg,
  FlClosedCaptionOffFilledSvg,
  FlClosedCaptionOffRegularSvg,
  FlClosedCaptionRegularSvg,
  FlClothesHangerFilledSvg,
  FlClothesHangerRegularSvg,
  FlCloudAddFilledSvg,
  FlCloudAddRegularSvg,
  FlCloudArchiveFilledSvg,
  FlCloudArchiveRegularSvg,
  FlCloudArrowDownFilledSvg,
  FlCloudArrowDownRegularSvg,
  FlCloudArrowRightFilledSvg,
  FlCloudArrowRightRegularSvg,
  FlCloudArrowUpFilledSvg,
  FlCloudArrowUpRegularSvg,
  FlCloudBeakerFilledSvg,
  FlCloudBeakerRegularSvg,
  FlCloudBidirectionalFilledSvg,
  FlCloudBidirectionalRegularSvg,
  FlCloudCheckmarkFilledSvg,
  FlCloudCheckmarkRegularSvg,
  FlCloudColorSvg,
  FlCloudCubeFilledSvg,
  FlCloudCubeRegularSvg,
  FlCloudDatabaseFilledSvg,
  FlCloudDatabaseRegularSvg,
  FlCloudDesktopFilledSvg,
  FlCloudDesktopRegularSvg,
  FlCloudDismissColorSvg,
  FlCloudDismissFilledSvg,
  FlCloudDismissRegularSvg,
  FlCloudEditFilledSvg,
  FlCloudEditRegularSvg,
  FlCloudErrorFilledSvg,
  FlCloudErrorRegularSvg,
  FlCloudFilledSvg,
  FlCloudFlowFilledSvg,
  FlCloudFlowRegularSvg,
  FlCloudLinkFilledSvg,
  FlCloudLinkRegularSvg,
  FlCloudOffFilledSvg,
  FlCloudOffRegularSvg,
  FlCloudRegularSvg,
  FlCloudSwapFilledSvg,
  FlCloudSwapRegularSvg,
  FlCloudSyncFilledSvg,
  FlCloudSyncRegularSvg,
  FlCloudWordsFilledSvg,
  FlCloudWordsRegularSvg,
  FlCloverFilledSvg,
  FlCloverRegularSvg,
  FlCodeBlockColorSvg,
  FlCodeBlockFilledSvg,
  FlCodeBlockRegularSvg,
  FlCodeCircleFilledSvg,
  FlCodeCircleRegularSvg,
  FlCodeFilledSvg,
  FlCodeRegularSvg,
  FlCodeTextEditFilledSvg,
  FlCodeTextEditRegularSvg,
  FlCodeTextFilledSvg,
  FlCodeTextRegularSvg,
  FlCoinMultipleColorSvg,
  FlCoinMultipleFilledSvg,
  FlCoinMultipleRegularSvg,
  FlCoinStackFilledSvg,
  FlCoinStackRegularSvg,
  FlCollectionsAddFilledSvg,
  FlCollectionsAddRegularSvg,
  FlCollectionsFilledSvg,
  FlCollectionsRegularSvg,
  FlColorBackgroundAccentRegularSvg,
  FlColorBackgroundFilledSvg,
  FlColorBackgroundRegularSvg,
  FlColorFillAccentRegularSvg,
  FlColorFillFilledSvg,
  FlColorFillRegularSvg,
  FlColorFilledSvg,
  FlColorLineAccentRegularSvg,
  FlColorLineFilledSvg,
  FlColorLineRegularSvg,
  FlColorRegularSvg,
  FlColumnArrowRightFilledSvg,
  FlColumnArrowRightRegularSvg,
  FlColumnDoubleCompareFilledSvg,
  FlColumnDoubleCompareRegularSvg,
  FlColumnEditFilledSvg,
  FlColumnEditRegularSvg,
  FlColumnFilledSvg,
  FlColumnRegularSvg,
  FlColumnSingleCompareFilledSvg,
  FlColumnSingleCompareRegularSvg,
  FlColumnTripleEditFilledSvg,
  FlColumnTripleEditRegularSvg,
  FlColumnTripleFilledSvg,
  FlColumnTripleRegularSvg,
  FlCommaFilledSvg,
  FlCommaRegularSvg,
  FlCommentAddFilledSvg,
  FlCommentAddRegularSvg,
  FlCommentArrowLeftFilledSvg,
  FlCommentArrowLeftRegularSvg,
  FlCommentArrowRightFilledSvg,
  FlCommentArrowRightRegularSvg,
  FlCommentBadgeFilledSvg,
  FlCommentBadgeRegularSvg,
  FlCommentCheckmarkFilledSvg,
  FlCommentCheckmarkRegularSvg,
  FlCommentDismissFilledSvg,
  FlCommentDismissRegularSvg,
  FlCommentEditFilledSvg,
  FlCommentEditRegularSvg,
  FlCommentErrorFilledSvg,
  FlCommentErrorRegularSvg,
  FlCommentFilledSvg,
  FlCommentLightningFilledSvg,
  FlCommentLightningRegularSvg,
  FlCommentLinkFilledSvg,
  FlCommentLinkRegularSvg,
  FlCommentMentionFilledSvg,
  FlCommentMentionRegularSvg,
  FlCommentMultipleCheckmarkFilledSvg,
  FlCommentMultipleCheckmarkRegularSvg,
  FlCommentMultipleFilledSvg,
  FlCommentMultipleLinkFilledSvg,
  FlCommentMultipleLinkRegularSvg,
  FlCommentMultipleMentionFilledSvg,
  FlCommentMultipleMentionRegularSvg,
  FlCommentMultipleRegularSvg,
  FlCommentNoteFilledSvg,
  FlCommentNoteRegularSvg,
  FlCommentOffFilledSvg,
  FlCommentOffRegularSvg,
  FlCommentQuoteFilledSvg,
  FlCommentQuoteRegularSvg,
  FlCommentRegularSvg,
  FlCommentTextFilledSvg,
  FlCommentTextRegularSvg,
  FlCommunicationFilledSvg,
  FlCommunicationPersonFilledSvg,
  FlCommunicationPersonRegularSvg,
  FlCommunicationRegularSvg,
  FlCommunicationShieldFilledSvg,
  FlCommunicationShieldRegularSvg,
  FlCompassNorthwestFilledSvg,
  FlCompassNorthwestRegularSvg,
  FlComponent2DoubleTapSwipeDown24FilledSvg,
  FlComponent2DoubleTapSwipeDown24RegularSvg,
  FlComponent2DoubleTapSwipeUp24FilledSvg,
  FlComponent2DoubleTapSwipeUp24RegularSvg,
  FlComposeFilledSvg,
  FlComposeRegularSvg,
  FlCone16FilledSvg,
  FlCone16RegularSvg,
  FlConferenceRoomFilledSvg,
  FlConferenceRoomRegularSvg,
  FlConnectedFilledSvg,
  FlConnectedRegularSvg,
  FlConnectorFilledSvg,
  FlConnectorRegularSvg,
  FlContactCardFilledSvg,
  FlContactCardGroupFilledSvg,
  FlContactCardGroupRegularSvg,
  FlContactCardLinkFilledSvg,
  FlContactCardLinkRegularSvg,
  FlContactCardRegularSvg,
  FlContactCardRibbonFilledSvg,
  FlContactCardRibbonRegularSvg,
  FlContentSettingsFilledSvg,
  FlContentSettingsRegularSvg,
  FlContentViewFilledSvg,
  FlContentViewGalleryFilledSvg,
  FlContentViewGalleryLightningFilledSvg,
  FlContentViewGalleryLightningRegularSvg,
  FlContentViewGalleryRegularSvg,
  FlContentViewRegularSvg,
  FlContractDownLeftFilledSvg,
  FlContractDownLeftRegularSvg,
  FlContractUpRightFilledSvg,
  FlContractUpRightRegularSvg,
  FlControlButtonFilledSvg,
  FlControlButtonRegularSvg,
  FlConvertRangeFilledSvg,
  FlConvertRangeRegularSvg,
  FlCookiesFilledSvg,
  FlCookiesRegularSvg,
  FlCopyAddFilledSvg,
  FlCopyAddRegularSvg,
  FlCopyArrowRightFilledSvg,
  FlCopyArrowRightRegularSvg,
  FlCopyFilledSvg,
  FlCopyRegularSvg,
  FlCopySelectFilledSvg,
  FlCopySelectRegularSvg,
  FlCouchFilledSvg,
  FlCouchRegularSvg,
  FlCreditCardClockFilledSvg,
  FlCreditCardClockRegularSvg,
  FlCreditCardPersonFilledSvg,
  FlCreditCardPersonRegularSvg,
  FlCreditCardToolboxFilledSvg,
  FlCreditCardToolboxRegularSvg,
  FlCropArrowRotateFilledSvg,
  FlCropArrowRotateRegularSvg,
  FlCropFilledSvg,
  FlCropInterimFilledSvg,
  FlCropInterimOffFilledSvg,
  FlCropInterimOffRegularSvg,
  FlCropInterimRegularSvg,
  FlCropRegularSvg,
  FlCrownFilledSvg,
  FlCrownRegularSvg,
  FlCubeAddFilledSvg,
  FlCubeAddRegularSvg,
  FlCubeArrowCurveDownFilledSvg,
  FlCubeArrowCurveDownRegularSvg,
  FlCubeFilledSvg,
  FlCubeLinkFilledSvg,
  FlCubeLinkRegularSvg,
  FlCubeMultipleFilledSvg,
  FlCubeMultipleRegularSvg,
  FlCubeQuickFilledSvg,
  FlCubeQuickRegularSvg,
  FlCubeRegularSvg,
  FlCubeRotateFilledSvg,
  FlCubeRotateRegularSvg,
  FlCubeSyncFilledSvg,
  FlCubeSyncRegularSvg,
  FlCubeTreeFilledSvg,
  FlCubeTreeRegularSvg,
  FlCurrencyDollarEuroFilledSvg,
  FlCurrencyDollarEuroRegularSvg,
  FlCurrencyDollarRupeeFilledSvg,
  FlCurrencyDollarRupeeRegularSvg,
  FlCursorClickFilledSvg,
  FlCursorClickRegularSvg,
  FlCursorFilledSvg,
  FlCursorHoverFilledSvg,
  FlCursorHoverOffFilledSvg,
  FlCursorHoverOffRegularSvg,
  FlCursorHoverRegularSvg,
  FlCursorProhibitedFilledSvg,
  FlCursorProhibitedRegularSvg,
  FlCursorRegularSvg,
  FlCutFilledSvg,
  FlCutRegularSvg,
  FlDarkThemeFilledSvg,
  FlDarkThemeRegularSvg,
  FlDataAreaFilledSvg,
  FlDataAreaRegularSvg,
  FlDataBarHorizontalFilledSvg,
  FlDataBarHorizontalRegularSvg,
  FlDataBarVerticalAddFilledSvg,
  FlDataBarVerticalAddRegularSvg,
  FlDataBarVerticalArrowDownFilledSvg,
  FlDataBarVerticalArrowDownRegularSvg,
  FlDataBarVerticalAscendingColorSvg,
  FlDataBarVerticalAscendingFilledSvg,
  FlDataBarVerticalAscendingRegularSvg,
  FlDataBarVerticalFilledSvg,
  FlDataBarVerticalRegularSvg,
  FlDataBarVerticalStarFilledSvg,
  FlDataBarVerticalStarRegularSvg,
  FlDataFunnelFilledSvg,
  FlDataFunnelRegularSvg,
  FlDataHistogramFilledSvg,
  FlDataHistogramRegularSvg,
  FlDataLineFilledSvg,
  FlDataLineRegularSvg,
  FlDataPieFilledSvg,
  FlDataPieRegularSvg,
  FlDataScatterFilledSvg,
  FlDataScatterRegularSvg,
  FlDataSunburstFilledSvg,
  FlDataSunburstRegularSvg,
  FlDataTreemapFilledSvg,
  FlDataTreemapRegularSvg,
  FlDataTrendingFilledSvg,
  FlDataTrendingRegularSvg,
  FlDataUsageCheckmarkFilledSvg,
  FlDataUsageCheckmarkRegularSvg,
  FlDataUsageEditFilledSvg,
  FlDataUsageEditRegularSvg,
  FlDataUsageFilledSvg,
  FlDataUsageRegularSvg,
  FlDataUsageSettingsFilledSvg,
  FlDataUsageSettingsRegularSvg,
  FlDataUsageToolboxFilledSvg,
  FlDataUsageToolboxRegularSvg,
  FlDataWaterfallFilledSvg,
  FlDataWaterfallRegularSvg,
  FlDataWhiskerFilledSvg,
  FlDataWhiskerRegularSvg,
  FlDatabaseArrowDownFilledSvg,
  FlDatabaseArrowDownRegularSvg,
  FlDatabaseArrowRightFilledSvg,
  FlDatabaseArrowRightRegularSvg,
  FlDatabaseArrowUpFilledSvg,
  FlDatabaseArrowUpRegularSvg,
  FlDatabaseFilledSvg,
  FlDatabaseLightningFilledSvg,
  FlDatabaseLightningRegularSvg,
  FlDatabaseLinkFilledSvg,
  FlDatabaseLinkRegularSvg,
  FlDatabaseMultipleFilledSvg,
  FlDatabaseMultipleRegularSvg,
  FlDatabasePersonFilledSvg,
  FlDatabasePersonRegularSvg,
  FlDatabasePlugConnectedFilledSvg,
  FlDatabasePlugConnectedRegularSvg,
  FlDatabaseRegularSvg,
  FlDatabaseSearchFilledSvg,
  FlDatabaseSearchRegularSvg,
  FlDatabaseSwitchFilledSvg,
  FlDatabaseSwitchRegularSvg,
  FlDatabaseWarningFilledSvg,
  FlDatabaseWarningRegularSvg,
  FlDatabaseWindowFilledSvg,
  FlDatabaseWindowRegularSvg,
  FlDecimalArrowLeftFilledSvg,
  FlDecimalArrowLeftRegularSvg,
  FlDecimalArrowRightFilledSvg,
  FlDecimalArrowRightRegularSvg,
  FlDeleteArrowBackFilledSvg,
  FlDeleteArrowBackRegularSvg,
  FlDeleteDismissFilledSvg,
  FlDeleteDismissRegularSvg,
  FlDeleteFilledSvg,
  FlDeleteLinesFilledSvg,
  FlDeleteLinesRegularSvg,
  FlDeleteOffFilledSvg,
  FlDeleteOffRegularSvg,
  FlDeleteRegularSvg,
  FlDentistFilledSvg,
  FlDentistRegularSvg,
  FlDesignIdeasFilledSvg,
  FlDesignIdeasRegularSvg,
  FlDeskFilledSvg,
  FlDeskRegularSvg,
  FlDesktopArrowDownFilledSvg,
  FlDesktopArrowDownRegularSvg,
  FlDesktopArrowRightFilledSvg,
  FlDesktopArrowRightRegularSvg,
  FlDesktopCheckmarkFilledSvg,
  FlDesktopCheckmarkRegularSvg,
  FlDesktopCursorFilledSvg,
  FlDesktopCursorRegularSvg,
  FlDesktopEditFilledSvg,
  FlDesktopEditRegularSvg,
  FlDesktopFilledSvg,
  FlDesktopFlowFilledSvg,
  FlDesktopFlowRegularSvg,
  FlDesktopKeyboardFilledSvg,
  FlDesktopKeyboardRegularSvg,
  FlDesktopMacFilledSvg,
  FlDesktopMacRegularSvg,
  FlDesktopOffFilledSvg,
  FlDesktopOffRegularSvg,
  FlDesktopPulseFilledSvg,
  FlDesktopPulseRegularSvg,
  FlDesktopRegularSvg,
  FlDesktopSignalFilledSvg,
  FlDesktopSignalRegularSvg,
  FlDesktopSpeakerFilledSvg,
  FlDesktopSpeakerOffFilledSvg,
  FlDesktopSpeakerOffRegularSvg,
  FlDesktopSpeakerRegularSvg,
  FlDesktopSyncFilledSvg,
  FlDesktopSyncRegularSvg,
  FlDesktopToolboxFilledSvg,
  FlDesktopToolboxRegularSvg,
  FlDesktopTowerFilledSvg,
  FlDesktopTowerRegularSvg,
  FlDeveloperBoardFilledSvg,
  FlDeveloperBoardLightningFilledSvg,
  FlDeveloperBoardLightningRegularSvg,
  FlDeveloperBoardLightningToolboxFilledSvg,
  FlDeveloperBoardLightningToolboxRegularSvg,
  FlDeveloperBoardRegularSvg,
  FlDeveloperBoardSearchFilledSvg,
  FlDeveloperBoardSearchRegularSvg,
  FlDeviceEqFilledSvg,
  FlDeviceEqRegularSvg,
  FlDeviceMeetingRoomFilledSvg,
  FlDeviceMeetingRoomRegularSvg,
  FlDeviceMeetingRoomRemoteFilledSvg,
  FlDeviceMeetingRoomRemoteRegularSvg,
  FlDiagramFilledSvg,
  FlDiagramRegularSvg,
  FlDialpadFilledSvg,
  FlDialpadOffFilledSvg,
  FlDialpadOffRegularSvg,
  FlDialpadQuestionMarkFilledSvg,
  FlDialpadQuestionMarkRegularSvg,
  FlDialpadRegularSvg,
  FlDiamondFilledSvg,
  FlDiamondRegularSvg,
  FlDirectionsFilledSvg,
  FlDirectionsRegularSvg,
  FlDishwasherFilledSvg,
  FlDishwasherRegularSvg,
  FlDismissCircleColorSvg,
  FlDismissCircleFilledSvg,
  FlDismissCircleRegularSvg,
  FlDismissFilledSvg,
  FlDismissRegularSvg,
  FlDismissSquareFilledSvg,
  FlDismissSquareMultipleFilledSvg,
  FlDismissSquareMultipleRegularSvg,
  FlDismissSquareRegularSvg,
  FlDiversityFilledSvg,
  FlDiversityRegularSvg,
  FlDividerShortFilledSvg,
  FlDividerShortRegularSvg,
  FlDividerTallFilledSvg,
  FlDividerTallRegularSvg,
  FlDockFilledSvg,
  FlDockRegularSvg,
  FlDockRowFilledSvg,
  FlDockRowRegularSvg,
  FlDoctorFilledSvg,
  FlDoctorRegularSvg,
  FlDocument100FilledSvg,
  FlDocument100RegularSvg,
  FlDocumentAddColorSvg,
  FlDocumentAddFilledSvg,
  FlDocumentAddRegularSvg,
  FlDocumentArrowDownFilledSvg,
  FlDocumentArrowDownRegularSvg,
  FlDocumentArrowLeftFilledSvg,
  FlDocumentArrowLeftRegularSvg,
  FlDocumentArrowRightFilledSvg,
  FlDocumentArrowRightRegularSvg,
  FlDocumentArrowUpFilledSvg,
  FlDocumentArrowUpRegularSvg,
  FlDocumentBorderFilledSvg,
  FlDocumentBorderPrintFilledSvg,
  FlDocumentBorderPrintRegularSvg,
  FlDocumentBorderRegularSvg,
  FlDocumentBriefcaseFilledSvg,
  FlDocumentBriefcaseRegularSvg,
  FlDocumentBulletListArrowLeftFilledSvg,
  FlDocumentBulletListArrowLeftRegularSvg,
  FlDocumentBulletListClockFilledSvg,
  FlDocumentBulletListClockRegularSvg,
  FlDocumentBulletListCubeFilledSvg,
  FlDocumentBulletListCubeRegularSvg,
  FlDocumentBulletListFilledSvg,
  FlDocumentBulletListMultipleFilledSvg,
  FlDocumentBulletListMultipleRegularSvg,
  FlDocumentBulletListOffFilledSvg,
  FlDocumentBulletListOffRegularSvg,
  FlDocumentBulletListRegularSvg,
  FlDocumentCatchUpFilledSvg,
  FlDocumentCatchUpRegularSvg,
  FlDocumentCheckmarkFilledSvg,
  FlDocumentCheckmarkRegularSvg,
  FlDocumentChevronDoubleFilledSvg,
  FlDocumentChevronDoubleRegularSvg,
  FlDocumentColorSvg,
  FlDocumentCopyFilledSvg,
  FlDocumentCopyRegularSvg,
  FlDocumentCssFilledSvg,
  FlDocumentCssRegularSvg,
  FlDocumentCubeFilledSvg,
  FlDocumentCubeRegularSvg,
  FlDocumentDataFilledSvg,
  FlDocumentDataLinkFilledSvg,
  FlDocumentDataLinkRegularSvg,
  FlDocumentDataLockFilledSvg,
  FlDocumentDataLockRegularSvg,
  FlDocumentDataRegularSvg,
  FlDocumentDatabaseFilledSvg,
  FlDocumentDatabaseRegularSvg,
  FlDocumentDismissFilledSvg,
  FlDocumentDismissRegularSvg,
  FlDocumentEditFilledSvg,
  FlDocumentEditRegularSvg,
  FlDocumentEndnoteFilledSvg,
  FlDocumentEndnoteRegularSvg,
  FlDocumentErrorFilledSvg,
  FlDocumentErrorRegularSvg,
  FlDocumentFilledSvg,
  FlDocumentFitFilledSvg,
  FlDocumentFitRegularSvg,
  FlDocumentFlowchartFilledSvg,
  FlDocumentFlowchartRegularSvg,
  FlDocumentFolderColorSvg,
  FlDocumentFolderFilledSvg,
  FlDocumentFolderRegularSvg,
  FlDocumentFooterDismissFilledSvg,
  FlDocumentFooterDismissRegularSvg,
  FlDocumentFooterFilledSvg,
  FlDocumentFooterRegularSvg,
  FlDocumentGlobeFilledSvg,
  FlDocumentGlobeRegularSvg,
  FlDocumentHeaderArrowDownFilledSvg,
  FlDocumentHeaderArrowDownRegularSvg,
  FlDocumentHeaderDismissFilledSvg,
  FlDocumentHeaderDismissRegularSvg,
  FlDocumentHeaderFilledSvg,
  FlDocumentHeaderFooterFilledSvg,
  FlDocumentHeaderFooterRegularSvg,
  FlDocumentHeaderRegularSvg,
  FlDocumentHeartFilledSvg,
  FlDocumentHeartPulseFilledSvg,
  FlDocumentHeartPulseRegularSvg,
  FlDocumentHeartRegularSvg,
  FlDocumentImageFilledSvg,
  FlDocumentImageRegularSvg,
  FlDocumentJavaFilledSvg,
  FlDocumentJavaRegularSvg,
  FlDocumentJavascriptFilledSvg,
  FlDocumentJavascriptRegularSvg,
  FlDocumentKeyFilledSvg,
  FlDocumentKeyRegularSvg,
  FlDocumentLandscapeDataFilledSvg,
  FlDocumentLandscapeDataRegularSvg,
  FlDocumentLandscapeFilledSvg,
  FlDocumentLandscapeRegularSvg,
  FlDocumentLandscapeSplitFilledSvg,
  FlDocumentLandscapeSplitHintFilledSvg,
  FlDocumentLandscapeSplitHintRegularSvg,
  FlDocumentLandscapeSplitRegularSvg,
  FlDocumentLightningFilledSvg,
  FlDocumentLightningRegularSvg,
  FlDocumentLinkFilledSvg,
  FlDocumentLinkRegularSvg,
  FlDocumentLockColorSvg,
  FlDocumentLockFilledSvg,
  FlDocumentLockRegularSvg,
  FlDocumentMarginsFilledSvg,
  FlDocumentMarginsRegularSvg,
  FlDocumentMentionFilledSvg,
  FlDocumentMentionRegularSvg,
  FlDocumentMultipleFilledSvg,
  FlDocumentMultiplePercentFilledSvg,
  FlDocumentMultiplePercentRegularSvg,
  FlDocumentMultipleProhibitedFilledSvg,
  FlDocumentMultipleProhibitedRegularSvg,
  FlDocumentMultipleRegularSvg,
  FlDocumentMultipleSyncFilledSvg,
  FlDocumentMultipleSyncRegularSvg,
  FlDocumentOnePageAddFilledSvg,
  FlDocumentOnePageAddRegularSvg,
  FlDocumentOnePageColumnsFilledSvg,
  FlDocumentOnePageColumnsRegularSvg,
  FlDocumentOnePageFilledSvg,
  FlDocumentOnePageLinkFilledSvg,
  FlDocumentOnePageLinkRegularSvg,
  FlDocumentOnePageMultipleFilledSvg,
  FlDocumentOnePageMultipleRegularSvg,
  FlDocumentOnePageMultipleSparkleFilledSvg,
  FlDocumentOnePageMultipleSparkleRegularSvg,
  FlDocumentOnePageRegularSvg,
  FlDocumentOnePageSparkleFilledSvg,
  FlDocumentOnePageSparkleRegularSvg,
  FlDocumentPageBottomCenterFilledSvg,
  FlDocumentPageBottomCenterRegularSvg,
  FlDocumentPageBottomLeftFilledSvg,
  FlDocumentPageBottomLeftRegularSvg,
  FlDocumentPageBottomRightFilledSvg,
  FlDocumentPageBottomRightRegularSvg,
  FlDocumentPageBreakFilledSvg,
  FlDocumentPageBreakRegularSvg,
  FlDocumentPageNumberFilledSvg,
  FlDocumentPageNumberRegularSvg,
  FlDocumentPageTopCenterFilledSvg,
  FlDocumentPageTopCenterRegularSvg,
  FlDocumentPageTopLeftFilledSvg,
  FlDocumentPageTopLeftRegularSvg,
  FlDocumentPageTopRightFilledSvg,
  FlDocumentPageTopRightRegularSvg,
  FlDocumentPdfFilledSvg,
  FlDocumentPdfRegularSvg,
  FlDocumentPercentFilledSvg,
  FlDocumentPercentRegularSvg,
  FlDocumentPersonFilledSvg,
  FlDocumentPersonRegularSvg,
  FlDocumentPillFilledSvg,
  FlDocumentPillRegularSvg,
  FlDocumentPrintFilledSvg,
  FlDocumentPrintRegularSvg,
  FlDocumentProhibitedFilledSvg,
  FlDocumentProhibitedRegularSvg,
  FlDocumentQuestionMarkFilledSvg,
  FlDocumentQuestionMarkRegularSvg,
  FlDocumentQueueAddFilledSvg,
  FlDocumentQueueAddRegularSvg,
  FlDocumentQueueFilledSvg,
  FlDocumentQueueMultipleFilledSvg,
  FlDocumentQueueMultipleRegularSvg,
  FlDocumentQueueRegularSvg,
  FlDocumentRegularSvg,
  FlDocumentRibbonFilledSvg,
  FlDocumentRibbonRegularSvg,
  FlDocumentSassFilledSvg,
  FlDocumentSassRegularSvg,
  FlDocumentSaveFilledSvg,
  FlDocumentSaveRegularSvg,
  FlDocumentSearchFilledSvg,
  FlDocumentSearchRegularSvg,
  FlDocumentSettingsFilledSvg,
  FlDocumentSettingsRegularSvg,
  FlDocumentSignatureFilledSvg,
  FlDocumentSignatureRegularSvg,
  FlDocumentSplitHintFilledSvg,
  FlDocumentSplitHintOffFilledSvg,
  FlDocumentSplitHintOffRegularSvg,
  FlDocumentSplitHintRegularSvg,
  FlDocumentSyncFilledSvg,
  FlDocumentSyncRegularSvg,
  FlDocumentTableArrowRightFilledSvg,
  FlDocumentTableArrowRightRegularSvg,
  FlDocumentTableCheckmarkFilledSvg,
  FlDocumentTableCheckmarkRegularSvg,
  FlDocumentTableCubeFilledSvg,
  FlDocumentTableCubeRegularSvg,
  FlDocumentTableFilledSvg,
  FlDocumentTableRegularSvg,
  FlDocumentTableSearchFilledSvg,
  FlDocumentTableSearchRegularSvg,
  FlDocumentTableTruckFilledSvg,
  FlDocumentTableTruckRegularSvg,
  FlDocumentTargetFilledSvg,
  FlDocumentTargetRegularSvg,
  FlDocumentTextClockFilledSvg,
  FlDocumentTextClockRegularSvg,
  FlDocumentTextExtractFilledSvg,
  FlDocumentTextExtractRegularSvg,
  FlDocumentTextFilledSvg,
  FlDocumentTextLinkFilledSvg,
  FlDocumentTextLinkRegularSvg,
  FlDocumentTextRegularSvg,
  FlDocumentTextToolboxFilledSvg,
  FlDocumentTextToolboxRegularSvg,
  FlDocumentToolboxFilledSvg,
  FlDocumentToolboxRegularSvg,
  FlDocumentWidthFilledSvg,
  FlDocumentWidthRegularSvg,
  FlDocumentYmlFilledSvg,
  FlDocumentYmlRegularSvg,
  FlDoorArrowLeftFilledSvg,
  FlDoorArrowLeftRegularSvg,
  FlDoorArrowRightFilledSvg,
  FlDoorArrowRightRegularSvg,
  FlDoorFilledSvg,
  FlDoorRegularSvg,
  FlDoorTagFilledSvg,
  FlDoorTagRegularSvg,
  FlDoubleSwipeDownFilledSvg,
  FlDoubleSwipeDownRegularSvg,
  FlDoubleSwipeUpFilledSvg,
  FlDoubleSwipeUpRegularSvg,
  FlDoubleTapSwipeDownFilledSvg,
  FlDoubleTapSwipeDownRegularSvg,
  FlDoubleTapSwipeUpFilledSvg,
  FlDoubleTapSwipeUpRegularSvg,
  FlDraftsFilledSvg,
  FlDraftsRegularSvg,
  FlDragFilledSvg,
  FlDragRegularSvg,
  FlDrawImageFilledSvg,
  FlDrawImageRegularSvg,
  FlDrawShapeFilledSvg,
  FlDrawShapeRegularSvg,
  FlDrawTextFilledSvg,
  FlDrawTextRegularSvg,
  FlDrawerAddFilledSvg,
  FlDrawerAddRegularSvg,
  FlDrawerArrowDownloadFilledSvg,
  FlDrawerArrowDownloadRegularSvg,
  FlDrawerDismissFilledSvg,
  FlDrawerDismissRegularSvg,
  FlDrawerFilledSvg,
  FlDrawerPlayFilledSvg,
  FlDrawerPlayRegularSvg,
  FlDrawerRegularSvg,
  FlDrawerSubtractFilledSvg,
  FlDrawerSubtractRegularSvg,
  FlDrinkBeerFilledSvg,
  FlDrinkBeerRegularSvg,
  FlDrinkBottleFilledSvg,
  FlDrinkBottleOffFilledSvg,
  FlDrinkBottleOffRegularSvg,
  FlDrinkBottleRegularSvg,
  FlDrinkCoffeeFilledSvg,
  FlDrinkCoffeeRegularSvg,
  FlDrinkMargaritaFilledSvg,
  FlDrinkMargaritaRegularSvg,
  FlDrinkToGoFilledSvg,
  FlDrinkToGoRegularSvg,
  FlDrinkWineFilledSvg,
  FlDrinkWineRegularSvg,
  FlDriveTrainFilledSvg,
  FlDriveTrainRegularSvg,
  FlDropFilledSvg,
  FlDropRegularSvg,
  FlDualScreenAddFilledSvg,
  FlDualScreenAddRegularSvg,
  FlDualScreenArrowRightFilledSvg,
  FlDualScreenArrowRightRegularSvg,
  FlDualScreenArrowUpFilledSvg,
  FlDualScreenArrowUpRegularSvg,
  FlDualScreenClockFilledSvg,
  FlDualScreenClockRegularSvg,
  FlDualScreenClosedAlertFilledSvg,
  FlDualScreenClosedAlertRegularSvg,
  FlDualScreenDesktopFilledSvg,
  FlDualScreenDesktopRegularSvg,
  FlDualScreenDismissFilledSvg,
  FlDualScreenDismissRegularSvg,
  FlDualScreenFilledSvg,
  FlDualScreenGroupFilledSvg,
  FlDualScreenGroupRegularSvg,
  FlDualScreenHeaderFilledSvg,
  FlDualScreenHeaderRegularSvg,
  FlDualScreenLockFilledSvg,
  FlDualScreenLockRegularSvg,
  FlDualScreenMirrorFilledSvg,
  FlDualScreenMirrorRegularSvg,
  FlDualScreenPaginationFilledSvg,
  FlDualScreenPaginationRegularSvg,
  FlDualScreenRegularSvg,
  FlDualScreenSettingsFilledSvg,
  FlDualScreenSettingsRegularSvg,
  FlDualScreenSpanFilledSvg,
  FlDualScreenSpanRegularSvg,
  FlDualScreenSpeakerFilledSvg,
  FlDualScreenSpeakerRegularSvg,
  FlDualScreenStatusBarFilledSvg,
  FlDualScreenStatusBarRegularSvg,
  FlDualScreenTabletFilledSvg,
  FlDualScreenTabletRegularSvg,
  FlDualScreenUpdateFilledSvg,
  FlDualScreenUpdateRegularSvg,
  FlDualScreenVerticalScrollFilledSvg,
  FlDualScreenVerticalScrollRegularSvg,
  FlDualScreenVibrateFilledSvg,
  FlDualScreenVibrateRegularSvg,
  FlDumbbellFilledSvg,
  FlDumbbellRegularSvg,
  FlDustFilledSvg,
  FlDustRegularSvg,
  FlEarthFilledSvg,
  FlEarthLeafFilledSvg,
  FlEarthLeafRegularSvg,
  FlEarthRegularSvg,
  FlEditArrowBackFilledSvg,
  FlEditArrowBackRegularSvg,
  FlEditColorSvg,
  FlEditFilledSvg,
  FlEditLineHorizontal3FilledSvg,
  FlEditLineHorizontal3RegularSvg,
  FlEditLockFilledSvg,
  FlEditLockRegularSvg,
  FlEditOffFilledSvg,
  FlEditOffRegularSvg,
  FlEditPersonFilledSvg,
  FlEditPersonRegularSvg,
  FlEditProhibitedFilledSvg,
  FlEditProhibitedRegularSvg,
  FlEditRegularSvg,
  FlEditSettingsFilledSvg,
  FlEditSettingsRegularSvg,
  FlElevatorFilledSvg,
  FlElevatorRegularSvg,
  FlEmojiAddFilledSvg,
  FlEmojiAddRegularSvg,
  FlEmojiAngryFilledSvg,
  FlEmojiAngryRegularSvg,
  FlEmojiEditFilledSvg,
  FlEmojiEditRegularSvg,
  FlEmojiFilledSvg,
  FlEmojiHandFilledSvg,
  FlEmojiHandRegularSvg,
  FlEmojiHintFilledSvg,
  FlEmojiHintRegularSvg,
  FlEmojiLaughFilledSvg,
  FlEmojiLaughRegularSvg,
  FlEmojiMehFilledSvg,
  FlEmojiMehRegularSvg,
  FlEmojiMemeFilledSvg,
  FlEmojiMemeRegularSvg,
  FlEmojiMultipleFilledSvg,
  FlEmojiMultipleRegularSvg,
  FlEmojiRegularSvg,
  FlEmojiSadFilledSvg,
  FlEmojiSadRegularSvg,
  FlEmojiSadSlightFilledSvg,
  FlEmojiSadSlightRegularSvg,
  FlEmojiSmileSlightFilledSvg,
  FlEmojiSmileSlightRegularSvg,
  FlEmojiSparkleFilledSvg,
  FlEmojiSparkleRegularSvg,
  FlEmojiSurpriseFilledSvg,
  FlEmojiSurpriseRegularSvg,
  FlEngineFilledSvg,
  FlEngineRegularSvg,
  FlEqualCircleFilledSvg,
  FlEqualCircleRegularSvg,
  FlEqualOffFilledSvg,
  FlEqualOffRegularSvg,
  FlEraserFilledSvg,
  FlEraserMediumFilledSvg,
  FlEraserMediumRegularSvg,
  FlEraserRegularSvg,
  FlEraserSegmentFilledSvg,
  FlEraserSegmentRegularSvg,
  FlEraserSmallFilledSvg,
  FlEraserSmallRegularSvg,
  FlEraserToolFilledSvg,
  FlEraserToolRegularSvg,
  FlErrorCircleColorSvg,
  FlErrorCircleFilledSvg,
  FlErrorCircleRegularSvg,
  FlErrorCircleSettingsFilledSvg,
  FlErrorCircleSettingsRegularSvg,
  FlExpandUpLeftFilledSvg,
  FlExpandUpLeftRegularSvg,
  FlExpandUpRightFilledSvg,
  FlExpandUpRightRegularSvg,
  FlExtendedDockFilledSvg,
  FlExtendedDockRegularSvg,
  FlEyeFilledSvg,
  FlEyeLinesFilledSvg,
  FlEyeLinesRegularSvg,
  FlEyeOffFilledSvg,
  FlEyeOffRegularSvg,
  FlEyeRegularSvg,
  FlEyeTrackingFilledSvg,
  FlEyeTrackingOffFilledSvg,
  FlEyeTrackingOffRegularSvg,
  FlEyeTrackingRegularSvg,
  FlEyedropperFilledSvg,
  FlEyedropperOffFilledSvg,
  FlEyedropperOffRegularSvg,
  FlEyedropperRegularSvg,
  FlFStopFilledSvg,
  FlFStopRegularSvg,
  FlFastAccelerationFilledSvg,
  FlFastAccelerationRegularSvg,
  FlFastForwardFilledSvg,
  FlFastForwardRegularSvg,
  FlFaxFilledSvg,
  FlFaxRegularSvg,
  FlFeedFilledSvg,
  FlFeedRegularSvg,
  FlFilmstripFilledSvg,
  FlFilmstripImageFilledSvg,
  FlFilmstripImageRegularSvg,
  FlFilmstripPlayFilledSvg,
  FlFilmstripPlayRegularSvg,
  FlFilmstripRegularSvg,
  FlFilmstripSplitFilledSvg,
  FlFilmstripSplitRegularSvg,
  FlFilterAddFilledSvg,
  FlFilterAddRegularSvg,
  FlFilterDismissFilledSvg,
  FlFilterDismissRegularSvg,
  FlFilterFilledSvg,
  FlFilterRegularSvg,
  FlFilterSyncFilledSvg,
  FlFilterSyncRegularSvg,
  FlFingerprintFilledSvg,
  FlFingerprintRegularSvg,
  FlFireFilledSvg,
  FlFireRegularSvg,
  FlFireplaceFilledSvg,
  FlFireplaceRegularSvg,
  FlFixedWidthFilledSvg,
  FlFixedWidthRegularSvg,
  FlFlagCheckeredFilledSvg,
  FlFlagCheckeredRegularSvg,
  FlFlagClockFilledSvg,
  FlFlagClockRegularSvg,
  FlFlagFilledSvg,
  FlFlagOffFilledSvg,
  FlFlagOffRegularSvg,
  FlFlagPrideFilledSvg,
  FlFlagPrideIntersexInclusiveProgressFilledSvg,
  FlFlagPridePhiladelphiaFilledSvg,
  FlFlagPrideProgressFilledSvg,
  FlFlagRegularSvg,
  FlFlashAddFilledSvg,
  FlFlashAddRegularSvg,
  FlFlashAutoFilledSvg,
  FlFlashAutoRegularSvg,
  FlFlashCheckmarkFilledSvg,
  FlFlashCheckmarkRegularSvg,
  FlFlashFilledSvg,
  FlFlashFlowFilledSvg,
  FlFlashFlowRegularSvg,
  FlFlashOffFilledSvg,
  FlFlashOffRegularSvg,
  FlFlashPlayFilledSvg,
  FlFlashPlayRegularSvg,
  FlFlashRegularSvg,
  FlFlashSettingsFilledSvg,
  FlFlashSettingsRegularSvg,
  FlFlashSparkleFilledSvg,
  FlFlashSparkleRegularSvg,
  FlFlashlightFilledSvg,
  FlFlashlightOffFilledSvg,
  FlFlashlightOffRegularSvg,
  FlFlashlightRegularSvg,
  FlFlipHorizontalFilledSvg,
  FlFlipHorizontalRegularSvg,
  FlFlipVerticalFilledSvg,
  FlFlipVerticalRegularSvg,
  FlFlowFilledSvg,
  FlFlowRegularSvg,
  FlFlowchartCircleFilledSvg,
  FlFlowchartCircleRegularSvg,
  FlFlowchartFilledSvg,
  FlFlowchartRegularSvg,
  FlFluentFilledSvg,
  FlFluentRegularSvg,
  FlFluidFilledSvg,
  FlFluidRegularSvg,
  FlFolderAddFilledSvg,
  FlFolderAddRegularSvg,
  FlFolderArrowLeftFilledSvg,
  FlFolderArrowLeftRegularSvg,
  FlFolderArrowRightFilledSvg,
  FlFolderArrowRightRegularSvg,
  FlFolderArrowUpFilledSvg,
  FlFolderArrowUpRegularSvg,
  FlFolderBriefcaseFilledSvg,
  FlFolderBriefcaseRegularSvg,
  FlFolderDocumentFilledSvg,
  FlFolderDocumentRegularSvg,
  FlFolderFilledSvg,
  FlFolderGlobeFilledSvg,
  FlFolderGlobeRegularSvg,
  FlFolderLightningFilledSvg,
  FlFolderLightningRegularSvg,
  FlFolderLinkFilledSvg,
  FlFolderLinkRegularSvg,
  FlFolderListFilledSvg,
  FlFolderListRegularSvg,
  FlFolderMailFilledSvg,
  FlFolderMailRegularSvg,
  FlFolderOpenFilledSvg,
  FlFolderOpenRegularSvg,
  FlFolderOpenVerticalFilledSvg,
  FlFolderOpenVerticalRegularSvg,
  FlFolderPeopleFilledSvg,
  FlFolderPeopleRegularSvg,
  FlFolderPersonFilledSvg,
  FlFolderPersonRegularSvg,
  FlFolderProhibitedFilledSvg,
  FlFolderProhibitedRegularSvg,
  FlFolderRegularSvg,
  FlFolderSearchFilledSvg,
  FlFolderSearchRegularSvg,
  FlFolderSwapFilledSvg,
  FlFolderSwapRegularSvg,
  FlFolderSyncFilledSvg,
  FlFolderSyncRegularSvg,
  FlFolderZipFilledSvg,
  FlFolderZipRegularSvg,
  FlFontDecreaseFilledSvg,
  FlFontDecreaseRegularSvg,
  FlFontIncreaseFilledSvg,
  FlFontIncreaseRegularSvg,
  FlFontSpaceTrackingInFilledSvg,
  FlFontSpaceTrackingInRegularSvg,
  FlFontSpaceTrackingOutFilledSvg,
  FlFontSpaceTrackingOutRegularSvg,
  FlFoodAppleFilledSvg,
  FlFoodAppleRegularSvg,
  FlFoodCakeFilledSvg,
  FlFoodCakeRegularSvg,
  FlFoodCarrotFilledSvg,
  FlFoodCarrotRegularSvg,
  FlFoodChickenLegFilledSvg,
  FlFoodChickenLegRegularSvg,
  FlFoodColorSvg,
  FlFoodEggFilledSvg,
  FlFoodEggRegularSvg,
  FlFoodFilledSvg,
  FlFoodFishFilledSvg,
  FlFoodFishRegularSvg,
  FlFoodGrainsFilledSvg,
  FlFoodGrainsRegularSvg,
  FlFoodPizzaFilledSvg,
  FlFoodPizzaRegularSvg,
  FlFoodRegularSvg,
  FlFoodToastFilledSvg,
  FlFoodToastRegularSvg,
  FlFormFilledSvg,
  FlFormMultipleFilledSvg,
  FlFormMultipleRegularSvg,
  FlFormNewFilledSvg,
  FlFormNewRegularSvg,
  FlFormRegularSvg,
  FlFormSparkleFilledSvg,
  FlFormSparkleRegularSvg,
  FlFps120FilledSvg,
  FlFps120RegularSvg,
  FlFps240FilledSvg,
  FlFps240RegularSvg,
  FlFps30FilledSvg,
  FlFps30RegularSvg,
  FlFps60FilledSvg,
  FlFps60RegularSvg,
  FlFps960FilledSvg,
  FlFps960RegularSvg,
  FlFrameFilledSvg,
  FlFrameRegularSvg,
  FlFullScreenMaximizeFilledSvg,
  FlFullScreenMaximizeRegularSvg,
  FlFullScreenMinimizeFilledSvg,
  FlFullScreenMinimizeRegularSvg,
  FlGameChatColorSvg,
  FlGameChatFilledSvg,
  FlGameChatRegularSvg,
  FlGamesFilledSvg,
  FlGamesRegularSvg,
  FlGanttChartFilledSvg,
  FlGanttChartRegularSvg,
  FlGasFilledSvg,
  FlGasPumpFilledSvg,
  FlGasPumpRegularSvg,
  FlGasRegularSvg,
  FlGatherFilledSvg,
  FlGatherRegularSvg,
  FlGaugeAddFilledSvg,
  FlGaugeAddRegularSvg,
  FlGaugeFilledSvg,
  FlGaugeRegularSvg,
  FlGavelFilledSvg,
  FlGavelProhibitedFilledSvg,
  FlGavelProhibitedRegularSvg,
  FlGavelRegularSvg,
  FlGestureFilledSvg,
  FlGestureRegularSvg,
  FlGifFilledSvg,
  FlGifRegularSvg,
  FlGiftCardAddFilledSvg,
  FlGiftCardAddRegularSvg,
  FlGiftCardArrowRightFilledSvg,
  FlGiftCardArrowRightRegularSvg,
  FlGiftCardFilledSvg,
  FlGiftCardMoneyFilledSvg,
  FlGiftCardMoneyRegularSvg,
  FlGiftCardMultipleFilledSvg,
  FlGiftCardMultipleRegularSvg,
  FlGiftCardRegularSvg,
  FlGiftFilledSvg,
  FlGiftOpenFilledSvg,
  FlGiftOpenRegularSvg,
  FlGiftRegularSvg,
  FlGlanceFilledSvg,
  FlGlanceHorizontalFilledSvg,
  FlGlanceHorizontalRegularSvg,
  FlGlanceHorizontalSparklesFilledSvg,
  FlGlanceHorizontalSparklesRegularSvg,
  FlGlanceRegularSvg,
  FlGlassesFilledSvg,
  FlGlassesOffFilledSvg,
  FlGlassesOffRegularSvg,
  FlGlassesRegularSvg,
  FlGlobeAddFilledSvg,
  FlGlobeAddRegularSvg,
  FlGlobeArrowForwardFilledSvg,
  FlGlobeArrowForwardRegularSvg,
  FlGlobeArrowUpFilledSvg,
  FlGlobeArrowUpRegularSvg,
  FlGlobeClockFilledSvg,
  FlGlobeClockRegularSvg,
  FlGlobeDesktopFilledSvg,
  FlGlobeDesktopRegularSvg,
  FlGlobeErrorFilledSvg,
  FlGlobeErrorRegularSvg,
  FlGlobeFilledSvg,
  FlGlobeLocationFilledSvg,
  FlGlobeLocationRegularSvg,
  FlGlobeOffFilledSvg,
  FlGlobeOffRegularSvg,
  FlGlobePersonFilledSvg,
  FlGlobePersonRegularSvg,
  FlGlobeProhibitedFilledSvg,
  FlGlobeProhibitedRegularSvg,
  FlGlobeRegularSvg,
  FlGlobeSearchFilledSvg,
  FlGlobeSearchRegularSvg,
  FlGlobeShieldColorSvg,
  FlGlobeShieldFilledSvg,
  FlGlobeShieldRegularSvg,
  FlGlobeStarFilledSvg,
  FlGlobeStarRegularSvg,
  FlGlobeSurfaceFilledSvg,
  FlGlobeSurfaceRegularSvg,
  FlGlobeSyncFilledSvg,
  FlGlobeSyncRegularSvg,
  FlGlobeVideoFilledSvg,
  FlGlobeVideoRegularSvg,
  FlGlobeWarningFilledSvg,
  FlGlobeWarningRegularSvg,
  FlGridDotsFilledSvg,
  FlGridDotsRegularSvg,
  FlGridFilledSvg,
  FlGridKanbanFilledSvg,
  FlGridKanbanRegularSvg,
  FlGridRegularSvg,
  FlGroupDismissFilledSvg,
  FlGroupDismissRegularSvg,
  FlGroupFilledSvg,
  FlGroupListFilledSvg,
  FlGroupListRegularSvg,
  FlGroupRegularSvg,
  FlGroupReturnFilledSvg,
  FlGroupReturnRegularSvg,
  FlGuardianFilledSvg,
  FlGuardianRegularSvg,
  FlGuestAddFilledSvg,
  FlGuestAddRegularSvg,
  FlGuestFilledSvg,
  FlGuestRegularSvg,
  FlGuitarFilledSvg,
  FlGuitarRegularSvg,
  FlHandDrawFilledSvg,
  FlHandDrawRegularSvg,
  FlHandLeftChatFilledSvg,
  FlHandLeftChatRegularSvg,
  FlHandLeftFilledSvg,
  FlHandLeftRegularSvg,
  FlHandOpenHeartFilledSvg,
  FlHandOpenHeartRegularSvg,
  FlHandPointFilledSvg,
  FlHandPointRegularSvg,
  FlHandRightFilledSvg,
  FlHandRightOffFilledSvg,
  FlHandRightOffRegularSvg,
  FlHandRightRegularSvg,
  FlHandWaveFilledSvg,
  FlHandWaveRegularSvg,
  FlHandshakeFilledSvg,
  FlHandshakeRegularSvg,
  FlHapticStrongFilledSvg,
  FlHapticStrongRegularSvg,
  FlHapticWeakFilledSvg,
  FlHapticWeakRegularSvg,
  FlHardDriveFilledSvg,
  FlHardDriveRegularSvg,
  FlHatGraduationAddFilledSvg,
  FlHatGraduationAddRegularSvg,
  FlHatGraduationFilledSvg,
  FlHatGraduationRegularSvg,
  FlHatGraduationSparkleFilledSvg,
  FlHatGraduationSparkleRegularSvg,
  FlHdFilledSvg,
  FlHdRegularSvg,
  FlHdrFilledSvg,
  FlHdrOffFilledSvg,
  FlHdrOffRegularSvg,
  FlHdrRegularSvg,
  FlHeadphonesColorSvg,
  FlHeadphonesFilledSvg,
  FlHeadphonesRegularSvg,
  FlHeadphonesSoundWaveFilledSvg,
  FlHeadphonesSoundWaveRegularSvg,
  FlHeadsetAddFilledSvg,
  FlHeadsetAddRegularSvg,
  FlHeadsetColorSvg,
  FlHeadsetFilledSvg,
  FlHeadsetRegularSvg,
  FlHeadsetVrFilledSvg,
  FlHeadsetVrRegularSvg,
  FlHeartBrokenFilledSvg,
  FlHeartBrokenRegularSvg,
  FlHeartCircleFilledSvg,
  FlHeartCircleHintFilledSvg,
  FlHeartCircleHintRegularSvg,
  FlHeartCircleRegularSvg,
  FlHeartFilledSvg,
  FlHeartOffFilledSvg,
  FlHeartOffRegularSvg,
  FlHeartPulseCheckmarkFilledSvg,
  FlHeartPulseCheckmarkRegularSvg,
  FlHeartPulseErrorFilledSvg,
  FlHeartPulseErrorRegularSvg,
  FlHeartPulseFilledSvg,
  FlHeartPulseRegularSvg,
  FlHeartPulseWarningFilledSvg,
  FlHeartPulseWarningRegularSvg,
  FlHeartRegularSvg,
  FlHexagonFilledSvg,
  FlHexagonRegularSvg,
  FlHexagonSparkleFilledSvg,
  FlHexagonSparkleRegularSvg,
  FlHexagonThreeFilledSvg,
  FlHexagonThreeRegularSvg,
  FlHighlightAccentFilledSvg,
  FlHighlightFilledSvg,
  FlHighlightLinkFilledSvg,
  FlHighlightLinkRegularSvg,
  FlHighlightRegularSvg,
  FlHighwayFilledSvg,
  FlHighwayRegularSvg,
  FlHistoryColorSvg,
  FlHistoryDismissFilledSvg,
  FlHistoryDismissRegularSvg,
  FlHistoryFilledSvg,
  FlHistoryRegularSvg,
  FlHomeAddFilledSvg,
  FlHomeAddRegularSvg,
  FlHomeCheckmarkFilledSvg,
  FlHomeCheckmarkRegularSvg,
  FlHomeColorSvg,
  FlHomeDatabaseFilledSvg,
  FlHomeDatabaseRegularSvg,
  FlHomeFilledSvg,
  FlHomeGarageFilledSvg,
  FlHomeGarageRegularSvg,
  FlHomeHeartFilledSvg,
  FlHomeHeartRegularSvg,
  FlHomeMoreFilledSvg,
  FlHomeMoreRegularSvg,
  FlHomePersonFilledSvg,
  FlHomePersonRegularSvg,
  FlHomeRegularSvg,
  FlHomeSplitFilledSvg,
  FlHomeSplitRegularSvg,
  FlHourglassFilledSvg,
  FlHourglassHalfFilledSvg,
  FlHourglassHalfRegularSvg,
  FlHourglassOneQuarterFilledSvg,
  FlHourglassOneQuarterRegularSvg,
  FlHourglassRegularSvg,
  FlHourglassThreeQuarterFilledSvg,
  FlHourglassThreeQuarterRegularSvg,
  FlIconsFilledSvg,
  FlIconsRegularSvg,
  FlImageAddFilledSvg,
  FlImageAddRegularSvg,
  FlImageAltTextFilledSvg,
  FlImageAltTextRegularSvg,
  FlImageArrowBackFilledSvg,
  FlImageArrowBackRegularSvg,
  FlImageArrowCounterclockwiseFilledSvg,
  FlImageArrowCounterclockwiseRegularSvg,
  FlImageArrowForwardFilledSvg,
  FlImageArrowForwardRegularSvg,
  FlImageBorderFilledSvg,
  FlImageBorderRegularSvg,
  FlImageCircleFilledSvg,
  FlImageCircleRegularSvg,
  FlImageCopyFilledSvg,
  FlImageCopyRegularSvg,
  FlImageEditFilledSvg,
  FlImageEditRegularSvg,
  FlImageFilledSvg,
  FlImageGlobeFilledSvg,
  FlImageGlobeRegularSvg,
  FlImageMultipleFilledSvg,
  FlImageMultipleOffFilledSvg,
  FlImageMultipleOffRegularSvg,
  FlImageMultipleRegularSvg,
  FlImageOffFilledSvg,
  FlImageOffRegularSvg,
  FlImageProhibitedFilledSvg,
  FlImageProhibitedRegularSvg,
  FlImageReflectionFilledSvg,
  FlImageReflectionRegularSvg,
  FlImageRegularSvg,
  FlImageSearchFilledSvg,
  FlImageSearchRegularSvg,
  FlImageShadowFilledSvg,
  FlImageShadowRegularSvg,
  FlImageSparkleFilledSvg,
  FlImageSparkleRegularSvg,
  FlImageSplitFilledSvg,
  FlImageSplitRegularSvg,
  FlImageStackFilledSvg,
  FlImageStackRegularSvg,
  FlImageTableFilledSvg,
  FlImageTableRegularSvg,
  FlImmersiveReaderFilledSvg,
  FlImmersiveReaderRegularSvg,
  FlImportantFilledSvg,
  FlImportantRegularSvg,
  FlIncognitoFilledSvg,
  FlIncognitoRegularSvg,
  FlInfoFilledSvg,
  FlInfoRegularSvg,
  FlInfoShieldFilledSvg,
  FlInfoShieldRegularSvg,
  FlInkStrokeArrowDownFilledSvg,
  FlInkStrokeArrowDownRegularSvg,
  FlInkStrokeArrowUpDownFilledSvg,
  FlInkStrokeArrowUpDownRegularSvg,
  FlInkStrokeFilledSvg,
  FlInkStrokeRegularSvg,
  FlInkingToolAccentFilledSvg,
  FlInkingToolFilledSvg,
  FlInkingToolRegularSvg,
  FlInprivateAccountFilledSvg,
  FlInprivateAccountRegularSvg,
  FlInsertFilledSvg,
  FlInsertRegularSvg,
  FlIosArrow24FilledSvg,
  FlIosArrow24RegularSvg,
  FlIosArrowLtr24FilledSvg,
  FlIosArrowLtr24RegularSvg,
  FlIosArrowRtl24FilledSvg,
  FlIosArrowRtl24RegularSvg,
  FlIosChevronRightFilledSvg,
  FlIosChevronRightRegularSvg,
  FlIotAlertFilledSvg,
  FlIotAlertRegularSvg,
  FlIotFilledSvg,
  FlIotRegularSvg,
  FlJavascriptFilledSvg,
  FlJavascriptRegularSvg,
  FlJoystickFilledSvg,
  FlJoystickRegularSvg,
  FlKeyCommandFilledSvg,
  FlKeyCommandRegularSvg,
  FlKeyFilledSvg,
  FlKeyMultipleFilledSvg,
  FlKeyMultipleRegularSvg,
  FlKeyRegularSvg,
  FlKeyResetFilledSvg,
  FlKeyResetRegularSvg,
  FlKeyboard123FilledSvg,
  FlKeyboard123RegularSvg,
  FlKeyboardDockFilledSvg,
  FlKeyboardDockRegularSvg,
  FlKeyboardFilledSvg,
  FlKeyboardLayoutFloatFilledSvg,
  FlKeyboardLayoutFloatRegularSvg,
  FlKeyboardLayoutOneHandedLeftFilledSvg,
  FlKeyboardLayoutOneHandedLeftRegularSvg,
  FlKeyboardLayoutResizeFilledSvg,
  FlKeyboardLayoutResizeRegularSvg,
  FlKeyboardLayoutSplitFilledSvg,
  FlKeyboardLayoutSplitRegularSvg,
  FlKeyboardRegularSvg,
  FlKeyboardShiftFilledSvg,
  FlKeyboardShiftRegularSvg,
  FlKeyboardShiftUppercaseFilledSvg,
  FlKeyboardShiftUppercaseRegularSvg,
  FlKeyboardTabFilledSvg,
  FlKeyboardTabRegularSvg,
  FlKiosk24FilledSvg,
  FlKiosk24RegularSvg,
  FlLaptopBriefcaseFilledSvg,
  FlLaptopBriefcaseRegularSvg,
  FlLaptopDismissFilledSvg,
  FlLaptopDismissRegularSvg,
  FlLaptopFilledSvg,
  FlLaptopPersonFilledSvg,
  FlLaptopPersonRegularSvg,
  FlLaptopRegularSvg,
  FlLaptopSettingsFilledSvg,
  FlLaptopSettingsRegularSvg,
  FlLaptopShieldFilledSvg,
  FlLaptopShieldRegularSvg,
  FlLaserToolFilledSvg,
  FlLaserToolRegularSvg,
  FlLassoFilledSvg,
  FlLassoRegularSvg,
  FlLauncherSettingsFilledSvg,
  FlLauncherSettingsRegularSvg,
  FlLayerDiagonalAddFilledSvg,
  FlLayerDiagonalAddRegularSvg,
  FlLayerDiagonalFilledSvg,
  FlLayerDiagonalPersonFilledSvg,
  FlLayerDiagonalPersonRegularSvg,
  FlLayerDiagonalRegularSvg,
  FlLayerDiagonalSparkleFilledSvg,
  FlLayerDiagonalSparkleRegularSvg,
  FlLayerFilledSvg,
  FlLayerRegularSvg,
  FlLayoutCellFourFilledSvg,
  FlLayoutCellFourFocusBottomLeftFilledSvg,
  FlLayoutCellFourFocusBottomRightFilledSvg,
  FlLayoutCellFourFocusTopLeftFilledSvg,
  FlLayoutCellFourFocusTopRightFilledSvg,
  FlLayoutCellFourRegularSvg,
  FlLayoutColumnFourFilledSvg,
  FlLayoutColumnFourFocusCenterLeftFilledSvg,
  FlLayoutColumnFourFocusCenterRightFilledSvg,
  FlLayoutColumnFourFocusLeftFilledSvg,
  FlLayoutColumnFourFocusRightFilledSvg,
  FlLayoutColumnFourRegularSvg,
  FlLayoutColumnOneThirdLeftFilledSvg,
  FlLayoutColumnOneThirdLeftRegularSvg,
  FlLayoutColumnOneThirdRightFilledSvg,
  FlLayoutColumnOneThirdRightHintFilledSvg,
  FlLayoutColumnOneThirdRightHintRegularSvg,
  FlLayoutColumnOneThirdRightRegularSvg,
  FlLayoutColumnThreeFilledSvg,
  FlLayoutColumnThreeFocusCenterFilledSvg,
  FlLayoutColumnThreeFocusLeftFilledSvg,
  FlLayoutColumnThreeFocusRightFilledSvg,
  FlLayoutColumnThreeRegularSvg,
  FlLayoutColumnTwoFilledSvg,
  FlLayoutColumnTwoFocusLeftFilledSvg,
  FlLayoutColumnTwoFocusRightFilledSvg,
  FlLayoutColumnTwoRegularSvg,
  FlLayoutColumnTwoSplitLeftFilledSvg,
  FlLayoutColumnTwoSplitLeftFocusBottomLeftFilledSvg,
  FlLayoutColumnTwoSplitLeftFocusRightFilledSvg,
  FlLayoutColumnTwoSplitLeftFocusTopLeftFilledSvg,
  FlLayoutColumnTwoSplitLeftRegularSvg,
  FlLayoutColumnTwoSplitRightFilledSvg,
  FlLayoutColumnTwoSplitRightFocusBottomRightFilledSvg,
  FlLayoutColumnTwoSplitRightFocusLeftFilledSvg,
  FlLayoutColumnTwoSplitRightFocusTopRightFilledSvg,
  FlLayoutColumnTwoSplitRightRegularSvg,
  FlLayoutRowFourFilledSvg,
  FlLayoutRowFourFocusBottomFilledSvg,
  FlLayoutRowFourFocusCenterBottomFilledSvg,
  FlLayoutRowFourFocusCenterTopFilledSvg,
  FlLayoutRowFourFocusTopFilledSvg,
  FlLayoutRowFourRegularSvg,
  FlLayoutRowThreeFilledSvg,
  FlLayoutRowThreeFocusBottomFilledSvg,
  FlLayoutRowThreeFocusCenterFilledSvg,
  FlLayoutRowThreeFocusTopFilledSvg,
  FlLayoutRowThreeRegularSvg,
  FlLayoutRowTwoFilledSvg,
  FlLayoutRowTwoFocusBottomFilledSvg,
  FlLayoutRowTwoFocusTopFilledSvg,
  FlLayoutRowTwoFocusTopSettingsFilledSvg,
  FlLayoutRowTwoRegularSvg,
  FlLayoutRowTwoSettingsFilledSvg,
  FlLayoutRowTwoSettingsRegularSvg,
  FlLayoutRowTwoSplitBottomFilledSvg,
  FlLayoutRowTwoSplitBottomFocusBottomLeftFilledSvg,
  FlLayoutRowTwoSplitBottomFocusBottomRightFilledSvg,
  FlLayoutRowTwoSplitBottomFocusTopFilledSvg,
  FlLayoutRowTwoSplitBottomRegularSvg,
  FlLayoutRowTwoSplitTopFilledSvg,
  FlLayoutRowTwoSplitTopFocusBottomFilledSvg,
  FlLayoutRowTwoSplitTopFocusTopLeftFilledSvg,
  FlLayoutRowTwoSplitTopFocusTopRightFilledSvg,
  FlLayoutRowTwoSplitTopRegularSvg,
  FlLeafOneFilledSvg,
  FlLeafOneRegularSvg,
  FlLeafThreeFilledSvg,
  FlLeafThreeRegularSvg,
  FlLeafTwoFilledSvg,
  FlLeafTwoRegularSvg,
  FlLearningAppFilledSvg,
  FlLearningAppRegularSvg,
  FlLibraryColorSvg,
  FlLibraryFilledSvg,
  FlLibraryRegularSvg,
  FlLightbulbCheckmarkFilledSvg,
  FlLightbulbCheckmarkRegularSvg,
  FlLightbulbCircleFilledSvg,
  FlLightbulbCircleRegularSvg,
  FlLightbulbFilamentFilledSvg,
  FlLightbulbFilamentRegularSvg,
  FlLightbulbFilledSvg,
  FlLightbulbPersonFilledSvg,
  FlLightbulbPersonRegularSvg,
  FlLightbulbRegularSvg,
  FlLikertFilledSvg,
  FlLikertRegularSvg,
  FlLineDashesFilledSvg,
  FlLineDashesRegularSvg,
  FlLineFilledSvg,
  FlLineFlowDiagonalUpRightFilledSvg,
  FlLineFlowDiagonalUpRightRegularSvg,
  FlLineHorizontal1DashDotDashFilledSvg,
  FlLineHorizontal1DashDotDashRegularSvg,
  FlLineHorizontal1DashesFilledSvg,
  FlLineHorizontal1DashesRegularSvg,
  FlLineHorizontal1DotFilledSvg,
  FlLineHorizontal1DotRegularSvg,
  FlLineHorizontal1FilledSvg,
  FlLineHorizontal1RegularSvg,
  FlLineHorizontal2DashesSolidFilledSvg,
  FlLineHorizontal2DashesSolidRegularSvg,
  FlLineHorizontal3FilledSvg,
  FlLineHorizontal3RegularSvg,
  FlLineHorizontal4FilledSvg,
  FlLineHorizontal4RegularSvg,
  FlLineHorizontal4SearchFilledSvg,
  FlLineHorizontal4SearchRegularSvg,
  FlLineHorizontal5ErrorFilledSvg,
  FlLineHorizontal5ErrorRegularSvg,
  FlLineHorizontal5FilledSvg,
  FlLineHorizontal5RegularSvg,
  FlLineRegularSvg,
  FlLineStyleFilledSvg,
  FlLineStyleRegularSvg,
  FlLineStyleSketchFilledSvg,
  FlLineStyleSketchRegularSvg,
  FlLineThicknessFilledSvg,
  FlLineThicknessRegularSvg,
  FlLinkAddFilledSvg,
  FlLinkAddRegularSvg,
  FlLinkDismissFilledSvg,
  FlLinkDismissRegularSvg,
  FlLinkEditFilledSvg,
  FlLinkEditRegularSvg,
  FlLinkFilledSvg,
  FlLinkMultipleFilledSvg,
  FlLinkMultipleRegularSvg,
  FlLinkPersonFilledSvg,
  FlLinkPersonRegularSvg,
  FlLinkRegularSvg,
  FlLinkSquareFilledSvg,
  FlLinkSquareRegularSvg,
  FlLinkToolboxFilledSvg,
  FlLinkToolboxRegularSvg,
  FlListBarFilledSvg,
  FlListBarRegularSvg,
  FlListBarTreeFilledSvg,
  FlListBarTreeOffsetFilledSvg,
  FlListBarTreeOffsetRegularSvg,
  FlListBarTreeRegularSvg,
  FlListFilledSvg,
  FlListRegularSvg,
  FlListRtlFilledSvg,
  FlListRtlRegularSvg,
  FlLiveFilledSvg,
  FlLiveOffFilledSvg,
  FlLiveOffRegularSvg,
  FlLiveRegularSvg,
  FlLocalLanguageFilledSvg,
  FlLocalLanguageRegularSvg,
  FlLocationAddFilledSvg,
  FlLocationAddLeftFilledSvg,
  FlLocationAddLeftRegularSvg,
  FlLocationAddRegularSvg,
  FlLocationAddRightFilledSvg,
  FlLocationAddRightRegularSvg,
  FlLocationAddUpFilledSvg,
  FlLocationAddUpRegularSvg,
  FlLocationArrowFilledSvg,
  FlLocationArrowLeftFilledSvg,
  FlLocationArrowLeftRegularSvg,
  FlLocationArrowRegularSvg,
  FlLocationArrowRightFilledSvg,
  FlLocationArrowRightRegularSvg,
  FlLocationArrowUpFilledSvg,
  FlLocationArrowUpRegularSvg,
  FlLocationDismissFilledSvg,
  FlLocationDismissRegularSvg,
  FlLocationFilledSvg,
  FlLocationLiveFilledSvg,
  FlLocationLiveRegularSvg,
  FlLocationOffFilledSvg,
  FlLocationOffRegularSvg,
  FlLocationRegularSvg,
  FlLocationRippleFilledSvg,
  FlLocationRippleRegularSvg,
  FlLocationTargetSquareFilledSvg,
  FlLocationTargetSquareRegularSvg,
  FlLockClosedFilledSvg,
  FlLockClosedKeyFilledSvg,
  FlLockClosedKeyRegularSvg,
  FlLockClosedRegularSvg,
  FlLockMultipleFilledSvg,
  FlLockMultipleRegularSvg,
  FlLockOpenFilledSvg,
  FlLockOpenRegularSvg,
  FlLockShieldFilledSvg,
  FlLockShieldRegularSvg,
  FlLotteryFilledSvg,
  FlLotteryRegularSvg,
  FlLuggageFilledSvg,
  FlLuggageRegularSvg,
  FlMailAddFilledSvg,
  FlMailAddRegularSvg,
  FlMailAlertFilledSvg,
  FlMailAlertRegularSvg,
  FlMailAllReadFilledSvg,
  FlMailAllReadRegularSvg,
  FlMailAllUnreadFilledSvg,
  FlMailAllUnreadRegularSvg,
  FlMailArrowClockwiseFilledSvg,
  FlMailArrowClockwiseRegularSvg,
  FlMailArrowDoubleBackFilledSvg,
  FlMailArrowDoubleBackRegularSvg,
  FlMailArrowDownFilledSvg,
  FlMailArrowDownRegularSvg,
  FlMailArrowForwardFilledSvg,
  FlMailArrowForwardRegularSvg,
  FlMailArrowUpFilledSvg,
  FlMailArrowUpRegularSvg,
  FlMailAttachFilledSvg,
  FlMailAttachRegularSvg,
  FlMailCheckmarkFilledSvg,
  FlMailCheckmarkRegularSvg,
  FlMailClockFilledSvg,
  FlMailClockRegularSvg,
  FlMailColorSvg,
  FlMailCopyFilledSvg,
  FlMailCopyRegularSvg,
  FlMailDismissFilledSvg,
  FlMailDismissRegularSvg,
  FlMailEditFilledSvg,
  FlMailEditRegularSvg,
  FlMailErrorFilledSvg,
  FlMailErrorRegularSvg,
  FlMailFilledSvg,
  FlMailInboxAddFilledSvg,
  FlMailInboxAddRegularSvg,
  FlMailInboxAllFilledSvg,
  FlMailInboxAllRegularSvg,
  FlMailInboxArrowDownFilledSvg,
  FlMailInboxArrowDownRegularSvg,
  FlMailInboxArrowRightFilledSvg,
  FlMailInboxArrowRightRegularSvg,
  FlMailInboxArrowUpFilledSvg,
  FlMailInboxArrowUpRegularSvg,
  FlMailInboxCheckmarkFilledSvg,
  FlMailInboxCheckmarkRegularSvg,
  FlMailInboxDismissFilledSvg,
  FlMailInboxDismissRegularSvg,
  FlMailInboxFilledSvg,
  FlMailInboxPersonFilledSvg,
  FlMailInboxPersonRegularSvg,
  FlMailInboxRegularSvg,
  FlMailLinkFilledSvg,
  FlMailLinkRegularSvg,
  FlMailListFilledSvg,
  FlMailListRegularSvg,
  FlMailMultipleColorSvg,
  FlMailMultipleFilledSvg,
  FlMailMultipleRegularSvg,
  FlMailOffFilledSvg,
  FlMailOffRegularSvg,
  FlMailOpenPersonFilledSvg,
  FlMailOpenPersonRegularSvg,
  FlMailPauseFilledSvg,
  FlMailPauseRegularSvg,
  FlMailProhibitedFilledSvg,
  FlMailProhibitedRegularSvg,
  FlMailReadFilledSvg,
  FlMailReadMultipleFilledSvg,
  FlMailReadMultipleRegularSvg,
  FlMailReadRegularSvg,
  FlMailRegularSvg,
  FlMailRewindFilledSvg,
  FlMailRewindRegularSvg,
  FlMailSettingsFilledSvg,
  FlMailSettingsRegularSvg,
  FlMailShieldFilledSvg,
  FlMailShieldRegularSvg,
  FlMailTemplateFilledSvg,
  FlMailTemplateRegularSvg,
  FlMailUnreadFilledSvg,
  FlMailUnreadRegularSvg,
  FlMailWarningFilledSvg,
  FlMailWarningRegularSvg,
  FlMailboxFilledSvg,
  FlMailboxRegularSvg,
  FlMapDriveFilledSvg,
  FlMapDriveRegularSvg,
  FlMapFilledSvg,
  FlMapRegularSvg,
  FlMarkdownFilledSvg,
  FlMarkdownRegularSvg,
  FlMatchAppLayoutFilledSvg,
  FlMatchAppLayoutRegularSvg,
  FlMathFormatLinearFilledSvg,
  FlMathFormatLinearRegularSvg,
  FlMathFormatProfessionalFilledSvg,
  FlMathFormatProfessionalRegularSvg,
  FlMathFormulaFilledSvg,
  FlMathFormulaRegularSvg,
  FlMathSymbolsFilledSvg,
  FlMathSymbolsRegularSvg,
  FlMaximizeFilledSvg,
  FlMaximizeRegularSvg,
  FlMeetNowFilledSvg,
  FlMeetNowRegularSvg,
  FlMegaphoneCircleFilledSvg,
  FlMegaphoneCircleRegularSvg,
  FlMegaphoneFilledSvg,
  FlMegaphoneLoudFilledSvg,
  FlMegaphoneLoudRegularSvg,
  FlMegaphoneOffFilledSvg,
  FlMegaphoneOffRegularSvg,
  FlMegaphoneRegularSvg,
  FlMemory16FilledSvg,
  FlMemory16RegularSvg,
  FlMentionArrowDownFilledSvg,
  FlMentionArrowDownRegularSvg,
  FlMentionBracketsFilledSvg,
  FlMentionBracketsRegularSvg,
  FlMentionFilledSvg,
  FlMentionRegularSvg,
  FlMergeFilledSvg,
  FlMergeRegularSvg,
  FlMicColorSvg,
  FlMicFilledSvg,
  FlMicLinkFilledSvg,
  FlMicLinkRegularSvg,
  FlMicOffFilledSvg,
  FlMicOffRegularSvg,
  FlMicProhibitedFilledSvg,
  FlMicProhibitedRegularSvg,
  FlMicPulseFilledSvg,
  FlMicPulseOffFilledSvg,
  FlMicPulseOffRegularSvg,
  FlMicPulseRegularSvg,
  FlMicRecordFilledSvg,
  FlMicRecordRegularSvg,
  FlMicRegularSvg,
  FlMicSettingsFilledSvg,
  FlMicSettingsRegularSvg,
  FlMicSparkleFilledSvg,
  FlMicSparkleRegularSvg,
  FlMicSyncFilledSvg,
  FlMicSyncRegularSvg,
  FlMicroscopeFilledSvg,
  FlMicroscopeRegularSvg,
  FlMidiFilledSvg,
  FlMidiRegularSvg,
  FlMobileOptimizedFilledSvg,
  FlMobileOptimizedRegularSvg,
  FlMoldFilledSvg,
  FlMoldRegularSvg,
  FlMoleculeFilledSvg,
  FlMoleculeRegularSvg,
  FlMoneyCalculatorFilledSvg,
  FlMoneyCalculatorRegularSvg,
  FlMoneyDismissFilledSvg,
  FlMoneyDismissRegularSvg,
  FlMoneyFilledSvg,
  FlMoneyHandFilledSvg,
  FlMoneyHandRegularSvg,
  FlMoneyOffFilledSvg,
  FlMoneyOffRegularSvg,
  FlMoneyRegularSvg,
  FlMoneySettingsFilledSvg,
  FlMoneySettingsRegularSvg,
  FlMoreCircleFilledSvg,
  FlMoreCircleRegularSvg,
  FlMoreHorizontalFilledSvg,
  FlMoreHorizontalRegularSvg,
  FlMoreVerticalFilledSvg,
  FlMoreVerticalRegularSvg,
  FlMountainLocationBottomFilledSvg,
  FlMountainLocationBottomRegularSvg,
  FlMountainLocationTopFilledSvg,
  FlMountainLocationTopRegularSvg,
  FlMountainTrailFilledSvg,
  FlMountainTrailRegularSvg,
  FlMoviesAndTvFilledSvg,
  FlMoviesAndTvRegularSvg,
  FlMultiplier12xFilledSvg,
  FlMultiplier12xRegularSvg,
  FlMultiplier15xFilledSvg,
  FlMultiplier15xRegularSvg,
  FlMultiplier18xFilledSvg,
  FlMultiplier18xRegularSvg,
  FlMultiplier1xFilledSvg,
  FlMultiplier1xRegularSvg,
  FlMultiplier2xFilledSvg,
  FlMultiplier2xRegularSvg,
  FlMultiplier5xFilledSvg,
  FlMultiplier5xRegularSvg,
  FlMultiselectFilledLtrSvg,
  FlMultiselectFilledRtlSvg,
  FlMultiselectLtrFilledSvg,
  FlMultiselectLtrRegularSvg,
  FlMultiselectRegularLtrSvg,
  FlMultiselectRegularRtlSvg,
  FlMultiselectRtlFilledSvg,
  FlMultiselectRtlRegularSvg,
  FlMusicNote1FilledSvg,
  FlMusicNote1RegularSvg,
  FlMusicNote2FilledSvg,
  FlMusicNote2PlayFilledSvg,
  FlMusicNote2PlayRegularSvg,
  FlMusicNote2RegularSvg,
  FlMusicNoteOff1FilledSvg,
  FlMusicNoteOff1RegularSvg,
  FlMusicNoteOff2FilledSvg,
  FlMusicNoteOff2RegularSvg,
  FlMyLocationFilledSvg,
  FlMyLocationRegularSvg,
  FlNavigationFilledSvg,
  FlNavigationLocationTargetFilledSvg,
  FlNavigationLocationTargetRegularSvg,
  FlNavigationPlayFilledSvg,
  FlNavigationPlayRegularSvg,
  FlNavigationRegularSvg,
  FlNavigationUnreadFilledSvg,
  FlNavigationUnreadRegularSvg,
  FlNetworkAdapter16FilledSvg,
  FlNetworkAdapter16RegularSvg,
  FlNetworkCheckFilledSvg,
  FlNetworkCheckRegularSvg,
  FlNewFilledSvg,
  FlNewRegularSvg,
  FlNewsFilledSvg,
  FlNewsRegularSvg,
  FlNextFilledSvg,
  FlNextFrameFilledSvg,
  FlNextFrameRegularSvg,
  FlNextRegularSvg,
  FlNoteAddFilledSvg,
  FlNoteAddRegularSvg,
  FlNoteEditFilledSvg,
  FlNoteEditRegularSvg,
  FlNoteFilledSvg,
  FlNotePinFilledSvg,
  FlNotePinRegularSvg,
  FlNoteRegularSvg,
  FlNotebookAddFilledSvg,
  FlNotebookAddRegularSvg,
  FlNotebookArrowCurveDownFilledSvg,
  FlNotebookArrowCurveDownRegularSvg,
  FlNotebookErrorFilledSvg,
  FlNotebookErrorRegularSvg,
  FlNotebookEyeFilledSvg,
  FlNotebookEyeRegularSvg,
  FlNotebookFilledSvg,
  FlNotebookLightningFilledSvg,
  FlNotebookLightningRegularSvg,
  FlNotebookQuestionMarkFilledSvg,
  FlNotebookQuestionMarkRegularSvg,
  FlNotebookRegularSvg,
  FlNotebookSectionArrowRightFilledSvg,
  FlNotebookSectionArrowRightRegularSvg,
  FlNotebookSectionFilledSvg,
  FlNotebookSectionRegularSvg,
  FlNotebookSubsectionFilledSvg,
  FlNotebookSubsectionRegularSvg,
  FlNotebookSyncFilledSvg,
  FlNotebookSyncRegularSvg,
  FlNotepadEditFilledSvg,
  FlNotepadEditRegularSvg,
  FlNotepadFilledSvg,
  FlNotepadPersonFilledSvg,
  FlNotepadPersonRegularSvg,
  FlNotepadRegularSvg,
  FlNotepadSparkleFilledSvg,
  FlNotepadSparkleRegularSvg,
  FlNumberCircle0FilledSvg,
  FlNumberCircle0RegularSvg,
  FlNumberCircle1FilledSvg,
  FlNumberCircle1RegularSvg,
  FlNumberCircle2FilledSvg,
  FlNumberCircle2RegularSvg,
  FlNumberCircle3FilledSvg,
  FlNumberCircle3RegularSvg,
  FlNumberCircle4FilledSvg,
  FlNumberCircle4RegularSvg,
  FlNumberCircle5FilledSvg,
  FlNumberCircle5RegularSvg,
  FlNumberCircle6FilledSvg,
  FlNumberCircle6RegularSvg,
  FlNumberCircle7FilledSvg,
  FlNumberCircle7RegularSvg,
  FlNumberCircle8FilledSvg,
  FlNumberCircle8RegularSvg,
  FlNumberCircle9FilledSvg,
  FlNumberCircle9RegularSvg,
  FlNumberRowFilledSvg,
  FlNumberRowRegularSvg,
  FlNumberSymbolDismissFilledSvg,
  FlNumberSymbolDismissRegularSvg,
  FlNumberSymbolFilledSvg,
  FlNumberSymbolRegularSvg,
  FlNumberSymbolSquareFilledSvg,
  FlNumberSymbolSquareRegularSvg,
  FlOpenFilledSvg,
  FlOpenFolderFilledSvg,
  FlOpenFolderRegularSvg,
  FlOpenOffFilledSvg,
  FlOpenOffRegularSvg,
  FlOpenRegularSvg,
  FlOptionsFilledSvg,
  FlOptionsRegularSvg,
  FlOrgColorSvg,
  FlOrganizationFilledSvg,
  FlOrganizationHorizontalFilledSvg,
  FlOrganizationHorizontalRegularSvg,
  FlOrganizationRegularSvg,
  FlOrientationFilledSvg,
  FlOrientationRegularSvg,
  FlOvalFilledSvg,
  FlOvalRegularSvg,
  FlOvenFilledSvg,
  FlOvenRegularSvg,
  FlPaddingDownFilledSvg,
  FlPaddingDownRegularSvg,
  FlPaddingLeftFilledSvg,
  FlPaddingLeftRegularSvg,
  FlPaddingRightFilledSvg,
  FlPaddingRightRegularSvg,
  FlPaddingTopFilledSvg,
  FlPaddingTopRegularSvg,
  FlPageFitFilledSvg,
  FlPageFitRegularSvg,
  FlPaintBrushArrowDownFilledSvg,
  FlPaintBrushArrowDownRegularSvg,
  FlPaintBrushArrowUpFilledSvg,
  FlPaintBrushArrowUpRegularSvg,
  FlPaintBrushFilledSvg,
  FlPaintBrushRegularSvg,
  FlPaintBrushSparkleFilledSvg,
  FlPaintBrushSparkleRegularSvg,
  FlPaintBrushSubtractFilledSvg,
  FlPaintBrushSubtractRegularSvg,
  FlPaintBucketFilledSvg,
  FlPaintBucketRegularSvg,
  FlPairFilledSvg,
  FlPairRegularSvg,
  FlPanelBottomContractFilledSvg,
  FlPanelBottomContractRegularSvg,
  FlPanelBottomExpandFilledSvg,
  FlPanelBottomExpandRegularSvg,
  FlPanelBottomFilledSvg,
  FlPanelBottomRegularSvg,
  FlPanelLeftAddFilledSvg,
  FlPanelLeftAddRegularSvg,
  FlPanelLeftContractFilledSvg,
  FlPanelLeftContractRegularSvg,
  FlPanelLeftExpandFilledSvg,
  FlPanelLeftExpandRegularSvg,
  FlPanelLeftFilledSvg,
  FlPanelLeftFocusRightFilledSvg,
  FlPanelLeftHeaderAddFilledSvg,
  FlPanelLeftHeaderAddRegularSvg,
  FlPanelLeftHeaderFilledSvg,
  FlPanelLeftHeaderKeyFilledSvg,
  FlPanelLeftHeaderKeyRegularSvg,
  FlPanelLeftHeaderRegularSvg,
  FlPanelLeftKeyFilledSvg,
  FlPanelLeftKeyRegularSvg,
  FlPanelLeftRegularSvg,
  FlPanelLeftTextAddFilledSvg,
  FlPanelLeftTextAddRegularSvg,
  FlPanelLeftTextDismissFilledSvg,
  FlPanelLeftTextDismissRegularSvg,
  FlPanelLeftTextFilledSvg,
  FlPanelLeftTextRegularSvg,
  FlPanelRightAddFilledSvg,
  FlPanelRightAddRegularSvg,
  FlPanelRightContractFilledSvg,
  FlPanelRightContractRegularSvg,
  FlPanelRightCursorFilledSvg,
  FlPanelRightCursorRegularSvg,
  FlPanelRightExpandFilledSvg,
  FlPanelRightExpandRegularSvg,
  FlPanelRightFilledSvg,
  FlPanelRightGalleryFilledSvg,
  FlPanelRightGalleryRegularSvg,
  FlPanelRightRegularSvg,
  FlPanelSeparateWindowFilledSvg,
  FlPanelSeparateWindowRegularSvg,
  FlPanelTopContractFilledSvg,
  FlPanelTopContractRegularSvg,
  FlPanelTopExpandFilledSvg,
  FlPanelTopExpandRegularSvg,
  FlPanelTopGalleryFilledSvg,
  FlPanelTopGalleryRegularSvg,
  FlPasswordFilledSvg,
  FlPasswordRegularSvg,
  FlPatchFilledSvg,
  FlPatchRegularSvg,
  FlPatientFilledSvg,
  FlPatientRegularSvg,
  FlPauseCircleFilledSvg,
  FlPauseCircleRegularSvg,
  FlPauseFilledSvg,
  FlPauseOffFilledSvg,
  FlPauseOffRegularSvg,
  FlPauseRegularSvg,
  FlPauseSettingsFilledSvg,
  FlPauseSettingsRegularSvg,
  FlPaymentFilledSvg,
  FlPaymentRegularSvg,
  FlPaymentWirelessFilledSvg,
  FlPaymentWirelessRegularSvg,
  FlPenDismissFilledSvg,
  FlPenDismissRegularSvg,
  FlPenFilledSvg,
  FlPenOffFilledSvg,
  FlPenOffRegularSvg,
  FlPenProhibitedFilledSvg,
  FlPenProhibitedRegularSvg,
  FlPenRegularSvg,
  FlPenSparkleFilledSvg,
  FlPenSparkleRegularSvg,
  FlPenSyncFilledSvg,
  FlPenSyncRegularSvg,
  FlPentagonFilledSvg,
  FlPentagonRegularSvg,
  FlPeopleAddFilledSvg,
  FlPeopleAddRegularSvg,
  FlPeopleAudienceFilledSvg,
  FlPeopleAudienceRegularSvg,
  FlPeopleCallFilledSvg,
  FlPeopleCallRegularSvg,
  FlPeopleChatFilledSvg,
  FlPeopleChatRegularSvg,
  FlPeopleCheckmarkFilledSvg,
  FlPeopleCheckmarkRegularSvg,
  FlPeopleColorSvg,
  FlPeopleCommunityAddFilledSvg,
  FlPeopleCommunityAddRegularSvg,
  FlPeopleCommunityFilledSvg,
  FlPeopleCommunityRegularSvg,
  FlPeopleEditFilledSvg,
  FlPeopleEditRegularSvg,
  FlPeopleErrorFilledSvg,
  FlPeopleErrorRegularSvg,
  FlPeopleEyeFilledSvg,
  FlPeopleEyeRegularSvg,
  FlPeopleFilledSvg,
  FlPeopleHomeColorSvg,
  FlPeopleLinkFilledSvg,
  FlPeopleLinkRegularSvg,
  FlPeopleListFilledSvg,
  FlPeopleListRegularSvg,
  FlPeopleLockFilledSvg,
  FlPeopleLockRegularSvg,
  FlPeopleMoneyFilledSvg,
  FlPeopleMoneyRegularSvg,
  FlPeopleProhibitedFilledSvg,
  FlPeopleProhibitedRegularSvg,
  FlPeopleQueueFilledSvg,
  FlPeopleQueueRegularSvg,
  FlPeopleRegularSvg,
  FlPeopleSearchFilledSvg,
  FlPeopleSearchRegularSvg,
  FlPeopleSettingsFilledSvg,
  FlPeopleSettingsRegularSvg,
  FlPeopleStarFilledSvg,
  FlPeopleStarRegularSvg,
  FlPeopleSubtractFilledSvg,
  FlPeopleSubtractRegularSvg,
  FlPeopleSwapFilledSvg,
  FlPeopleSwapRegularSvg,
  FlPeopleSyncFilledSvg,
  FlPeopleSyncRegularSvg,
  FlPeopleTeamAddFilledSvg,
  FlPeopleTeamAddRegularSvg,
  FlPeopleTeamColorSvg,
  FlPeopleTeamDeleteFilledSvg,
  FlPeopleTeamDeleteRegularSvg,
  FlPeopleTeamFilledSvg,
  FlPeopleTeamRegularSvg,
  FlPeopleTeamToolboxFilledSvg,
  FlPeopleTeamToolboxRegularSvg,
  FlPeopleToolboxFilledSvg,
  FlPeopleToolboxRegularSvg,
  FlPerson5FilledSvg,
  FlPerson5RegularSvg,
  FlPerson6FilledSvg,
  FlPerson6RegularSvg,
  FlPersonAccountsFilledSvg,
  FlPersonAccountsRegularSvg,
  FlPersonAddFilledSvg,
  FlPersonAddRegularSvg,
  FlPersonAlertFilledSvg,
  FlPersonAlertOffFilledSvg,
  FlPersonAlertOffRegularSvg,
  FlPersonAlertRegularSvg,
  FlPersonArrowBackFilledSvg,
  FlPersonArrowBackRegularSvg,
  FlPersonArrowLeftFilledSvg,
  FlPersonArrowLeftRegularSvg,
  FlPersonArrowRightFilledSvg,
  FlPersonArrowRightRegularSvg,
  FlPersonAvailableColorSvg,
  FlPersonAvailableFilledSvg,
  FlPersonAvailableRegularSvg,
  FlPersonBoardAddFilledSvg,
  FlPersonBoardAddRegularSvg,
  FlPersonBoardFilledSvg,
  FlPersonBoardRegularSvg,
  FlPersonCallFilledSvg,
  FlPersonCallRegularSvg,
  FlPersonChatFilledSvg,
  FlPersonChatRegularSvg,
  FlPersonCircleFilledSvg,
  FlPersonCircleRegularSvg,
  FlPersonClockFilledSvg,
  FlPersonClockRegularSvg,
  FlPersonColorSvg,
  FlPersonDeleteFilledSvg,
  FlPersonDeleteRegularSvg,
  FlPersonDesktopFilledSvg,
  FlPersonDesktopRegularSvg,
  FlPersonEditFilledSvg,
  FlPersonEditRegularSvg,
  FlPersonFeedbackFilledSvg,
  FlPersonFeedbackRegularSvg,
  FlPersonFilledSvg,
  FlPersonHeadHintFilledSvg,
  FlPersonHeadHintRegularSvg,
  FlPersonHeartFilledSvg,
  FlPersonHeartRegularSvg,
  FlPersonHomeFilledSvg,
  FlPersonHomeRegularSvg,
  FlPersonInfoFilledSvg,
  FlPersonInfoRegularSvg,
  FlPersonKeyFilledSvg,
  FlPersonKeyRegularSvg,
  FlPersonLightbulbFilledSvg,
  FlPersonLightbulbRegularSvg,
  FlPersonLightningFilledSvg,
  FlPersonLightningRegularSvg,
  FlPersonLinkFilledSvg,
  FlPersonLinkRegularSvg,
  FlPersonLockFilledSvg,
  FlPersonLockRegularSvg,
  FlPersonMailFilledSvg,
  FlPersonMailRegularSvg,
  FlPersonMoneyFilledSvg,
  FlPersonMoneyRegularSvg,
  FlPersonNoteFilledSvg,
  FlPersonNoteRegularSvg,
  FlPersonPasskeyFilledSvg,
  FlPersonPasskeyRegularSvg,
  FlPersonPillFilledSvg,
  FlPersonPillRegularSvg,
  FlPersonProhibitedFilledSvg,
  FlPersonProhibitedRegularSvg,
  FlPersonQuestionMarkFilledSvg,
  FlPersonQuestionMarkRegularSvg,
  FlPersonRegularSvg,
  FlPersonRibbonFilledSvg,
  FlPersonRibbonRegularSvg,
  FlPersonRunningFilledSvg,
  FlPersonRunningRegularSvg,
  FlPersonSearchFilledSvg,
  FlPersonSearchRegularSvg,
  FlPersonSettingsFilledSvg,
  FlPersonSettingsRegularSvg,
  FlPersonSoundSpatialFilledSvg,
  FlPersonSoundSpatialRegularSvg,
  FlPersonSquareAddFilledSvg,
  FlPersonSquareAddRegularSvg,
  FlPersonSquareCheckmarkFilledSvg,
  FlPersonSquareCheckmarkRegularSvg,
  FlPersonSquareFilledSvg,
  FlPersonSquareRegularSvg,
  FlPersonStarFilledSvg,
  FlPersonStarRegularSvg,
  FlPersonStarburstFilledSvg,
  FlPersonStarburstRegularSvg,
  FlPersonSubtractFilledSvg,
  FlPersonSubtractRegularSvg,
  FlPersonSupportFilledSvg,
  FlPersonSupportRegularSvg,
  FlPersonSwapFilledSvg,
  FlPersonSwapRegularSvg,
  FlPersonSyncFilledSvg,
  FlPersonSyncRegularSvg,
  FlPersonTagFilledSvg,
  FlPersonTagRegularSvg,
  FlPersonTentativeFilledSvg,
  FlPersonTentativeRegularSvg,
  FlPersonVoiceFilledSvg,
  FlPersonVoiceRegularSvg,
  FlPersonWalkingFilledSvg,
  FlPersonWalkingRegularSvg,
  FlPersonWarningFilledSvg,
  FlPersonWarningRegularSvg,
  FlPersonWrenchFilledSvg,
  FlPersonWrenchRegularSvg,
  FlPhoneAddFilledSvg,
  FlPhoneAddRegularSvg,
  FlPhoneArrowRightFilledSvg,
  FlPhoneArrowRightRegularSvg,
  FlPhoneChatFilledSvg,
  FlPhoneChatRegularSvg,
  FlPhoneCheckmarkFilledSvg,
  FlPhoneCheckmarkRegularSvg,
  FlPhoneDesktopAddFilledSvg,
  FlPhoneDesktopAddRegularSvg,
  FlPhoneDesktopFilledSvg,
  FlPhoneDesktopRegularSvg,
  FlPhoneDismissFilledSvg,
  FlPhoneDismissRegularSvg,
  FlPhoneEditFilledSvg,
  FlPhoneEditRegularSvg,
  FlPhoneEraserFilledSvg,
  FlPhoneEraserRegularSvg,
  FlPhoneFilledSvg,
  FlPhoneFooterArrowDownFilledSvg,
  FlPhoneFooterArrowDownRegularSvg,
  FlPhoneHeaderArrowUpFilledSvg,
  FlPhoneHeaderArrowUpRegularSvg,
  FlPhoneKeyFilledSvg,
  FlPhoneKeyRegularSvg,
  FlPhoneLaptopFilledSvg,
  FlPhoneLaptopRegularSvg,
  FlPhoneLinkSetupFilledSvg,
  FlPhoneLinkSetupRegularSvg,
  FlPhoneLockFilledSvg,
  FlPhoneLockRegularSvg,
  FlPhonePageHeaderFilledSvg,
  FlPhonePageHeaderRegularSvg,
  FlPhonePaginationFilledSvg,
  FlPhonePaginationRegularSvg,
  FlPhoneRegularSvg,
  FlPhoneScreenTimeFilledSvg,
  FlPhoneScreenTimeRegularSvg,
  FlPhoneShakeFilledSvg,
  FlPhoneShakeRegularSvg,
  FlPhoneSpanInFilledSvg,
  FlPhoneSpanInRegularSvg,
  FlPhoneSpanOutFilledSvg,
  FlPhoneSpanOutRegularSvg,
  FlPhoneSpeakerFilledSvg,
  FlPhoneSpeakerRegularSvg,
  FlPhoneStatusBarFilledSvg,
  FlPhoneStatusBarRegularSvg,
  FlPhoneTabletFilledSvg,
  FlPhoneTabletRegularSvg,
  FlPhoneUpdateCheckmarkFilledSvg,
  FlPhoneUpdateCheckmarkRegularSvg,
  FlPhoneUpdateFilledSvg,
  FlPhoneUpdateRegularSvg,
  FlPhoneVerticalScrollFilledSvg,
  FlPhoneVerticalScrollRegularSvg,
  FlPhoneVibrateFilledSvg,
  FlPhoneVibrateRegularSvg,
  FlPhotoFilterFilledSvg,
  FlPhotoFilterRegularSvg,
  FlPiFilledSvg,
  FlPiRegularSvg,
  FlPictureInPictureEnterFilledSvg,
  FlPictureInPictureEnterRegularSvg,
  FlPictureInPictureExitFilledSvg,
  FlPictureInPictureExitRegularSvg,
  FlPictureInPictureFilledSvg,
  FlPictureInPictureRegularSvg,
  FlPillFilledSvg,
  FlPillRegularSvg,
  FlPinColorSvg,
  FlPinFilledSvg,
  FlPinGlobeFilledSvg,
  FlPinGlobeRegularSvg,
  FlPinOffFilledSvg,
  FlPinOffRegularSvg,
  FlPinRegularSvg,
  FlPipelineAddFilledSvg,
  FlPipelineAddRegularSvg,
  FlPipelineArrowCurveDownFilledSvg,
  FlPipelineArrowCurveDownRegularSvg,
  FlPipelineFilledSvg,
  FlPipelinePlayFilledSvg,
  FlPipelinePlayRegularSvg,
  FlPipelineRegularSvg,
  FlPivotFilledSvg,
  FlPivotRegularSvg,
  FlPlantCattailFilledSvg,
  FlPlantCattailRegularSvg,
  FlPlantGrassFilledSvg,
  FlPlantGrassRegularSvg,
  FlPlantRagweedFilledSvg,
  FlPlantRagweedRegularSvg,
  FlPlayCircleFilledSvg,
  FlPlayCircleHintFilledSvg,
  FlPlayCircleHintRegularSvg,
  FlPlayCircleRegularSvg,
  FlPlayCircleSparkleFilledSvg,
  FlPlayCircleSparkleRegularSvg,
  FlPlayFilledSvg,
  FlPlayRegularSvg,
  FlPlaySettingsFilledSvg,
  FlPlaySettingsRegularSvg,
  FlPlayingCardsFilledSvg,
  FlPlayingCardsRegularSvg,
  FlPlugConnectedAddFilledSvg,
  FlPlugConnectedAddRegularSvg,
  FlPlugConnectedCheckmarkFilledSvg,
  FlPlugConnectedCheckmarkRegularSvg,
  FlPlugConnectedFilledSvg,
  FlPlugConnectedRegularSvg,
  FlPlugConnectedSettingsFilledSvg,
  FlPlugConnectedSettingsRegularSvg,
  FlPlugDisconnectedFilledSvg,
  FlPlugDisconnectedRegularSvg,
  FlPointScanFilledSvg,
  FlPointScanRegularSvg,
  FlPollColorSvg,
  FlPollFilledSvg,
  FlPollHorizontalFilledSvg,
  FlPollHorizontalRegularSvg,
  FlPollOffFilledSvg,
  FlPollOffRegularSvg,
  FlPollRegularSvg,
  FlPortHdmiFilledSvg,
  FlPortHdmiRegularSvg,
  FlPortMicroUsbFilledSvg,
  FlPortMicroUsbRegularSvg,
  FlPortUsbAFilledSvg,
  FlPortUsbARegularSvg,
  FlPortUsbCFilledSvg,
  FlPortUsbCRegularSvg,
  FlPositionBackwardFilledSvg,
  FlPositionBackwardRegularSvg,
  FlPositionForwardFilledSvg,
  FlPositionForwardRegularSvg,
  FlPositionToBackFilledSvg,
  FlPositionToBackRegularSvg,
  FlPositionToFrontFilledSvg,
  FlPositionToFrontRegularSvg,
  FlPowerFilledSvg,
  FlPowerRegularSvg,
  FlPredictionsFilledSvg,
  FlPredictionsRegularSvg,
  FlPremiumFilledSvg,
  FlPremiumPersonFilledSvg,
  FlPremiumPersonRegularSvg,
  FlPremiumRegularSvg,
  FlPresenceAvailableFilledSvg,
  FlPresenceAvailableRegularSvg,
  FlPresenceAwayFilledSvg,
  FlPresenceAwayRegularSvg,
  FlPresenceBlockedRegularSvg,
  FlPresenceBusyFilledSvg,
  FlPresenceDndFilledSvg,
  FlPresenceDndRegularSvg,
  FlPresenceOfflineRegularSvg,
  FlPresenceOofRegularSvg,
  FlPresenceTentativeRegularSvg,
  FlPresenceUnknownRegularSvg,
  FlPresenterFilledSvg,
  FlPresenterOffFilledSvg,
  FlPresenterOffRegularSvg,
  FlPresenterRegularSvg,
  FlPreviewLinkFilledSvg,
  FlPreviewLinkRegularSvg,
  FlPreviousFilledSvg,
  FlPreviousFrameFilledSvg,
  FlPreviousFrameRegularSvg,
  FlPreviousRegularSvg,
  FlPrintAddFilledSvg,
  FlPrintAddRegularSvg,
  FlPrintFilledSvg,
  FlPrintRegularSvg,
  FlProductionCheckmarkFilledSvg,
  FlProductionCheckmarkRegularSvg,
  FlProductionFilledSvg,
  FlProductionRegularSvg,
  FlProhibitedFilledSvg,
  FlProhibitedMultipleFilledSvg,
  FlProhibitedMultipleRegularSvg,
  FlProhibitedNoteFilledSvg,
  FlProhibitedNoteRegularSvg,
  FlProhibitedRegularSvg,
  FlProjectionScreenDismissFilledSvg,
  FlProjectionScreenDismissRegularSvg,
  FlProjectionScreenFilledSvg,
  FlProjectionScreenRegularSvg,
  FlProjectionScreenTextFilledSvg,
  FlProjectionScreenTextRegularSvg,
  FlPromptFilledSvg,
  FlPromptRegularSvg,
  FlProtocolHandlerFilledSvg,
  FlProtocolHandlerRegularSvg,
  FlPulseFilledSvg,
  FlPulseRegularSvg,
  FlPulseSquareFilledSvg,
  FlPulseSquareRegularSvg,
  FlPuzzleCubeFilledSvg,
  FlPuzzleCubePieceFilledSvg,
  FlPuzzleCubePieceRegularSvg,
  FlPuzzleCubeRegularSvg,
  FlPuzzlePieceFilledSvg,
  FlPuzzlePieceRegularSvg,
  FlPuzzlePieceShieldFilledSvg,
  FlPuzzlePieceShieldRegularSvg,
  FlQrCodeFilledSvg,
  FlQrCodeRegularSvg,
  FlQuestionCircleColorSvg,
  FlQuestionCircleFilledSvg,
  FlQuestionCircleRegularSvg,
  FlQuestionFilledSvg,
  FlQuestionRegularSvg,
  FlQuizNewFilledSvg,
  FlQuizNewRegularSvg,
  FlRadarCheckmarkFilledSvg,
  FlRadarCheckmarkRegularSvg,
  FlRadarFilledSvg,
  FlRadarRectangleMultipleFilledSvg,
  FlRadarRectangleMultipleRegularSvg,
  FlRadarRegularSvg,
  FlRadioButtonFilledSvg,
  FlRadioButtonRegularSvg,
  FlRamFilledSvg,
  FlRamRegularSvg,
  FlRatingMatureFilledSvg,
  FlRatingMatureRegularSvg,
  FlRatioOneToOneFilledSvg,
  FlRatioOneToOneRegularSvg,
  FlReOrderDotsHorizontalFilledSvg,
  FlReOrderDotsHorizontalRegularSvg,
  FlReOrderDotsVerticalFilledSvg,
  FlReOrderDotsVerticalRegularSvg,
  FlReOrderFilledSvg,
  FlReOrderRegularSvg,
  FlReadAloudFilledSvg,
  FlReadAloudRegularSvg,
  FlReadingListAddFilledSvg,
  FlReadingListAddRegularSvg,
  FlReadingListFilledSvg,
  FlReadingListRegularSvg,
  FlReadingModeMobileFilledSvg,
  FlReadingModeMobileRegularSvg,
  FlRealEstateFilledSvg,
  FlRealEstateRegularSvg,
  FlReceiptAddFilledSvg,
  FlReceiptAddRegularSvg,
  FlReceiptBagFilledSvg,
  FlReceiptBagRegularSvg,
  FlReceiptColorSvg,
  FlReceiptCubeFilledSvg,
  FlReceiptCubeRegularSvg,
  FlReceiptFilledSvg,
  FlReceiptMoneyFilledSvg,
  FlReceiptMoneyRegularSvg,
  FlReceiptPlayFilledSvg,
  FlReceiptPlayRegularSvg,
  FlReceiptRegularSvg,
  FlReceiptSearchFilledSvg,
  FlReceiptSearchRegularSvg,
  FlReceiptSparklesFilledSvg,
  FlReceiptSparklesRegularSvg,
  FlRecordFilledSvg,
  FlRecordRegularSvg,
  FlRecordStopFilledSvg,
  FlRecordStopRegularSvg,
  FlRectangleLandscapeFilledSvg,
  FlRectangleLandscapeHintCopyFilledSvg,
  FlRectangleLandscapeHintCopyRegularSvg,
  FlRectangleLandscapeRegularSvg,
  FlRectangleLandscapeSparkleFilledSvg,
  FlRectangleLandscapeSparkleRegularSvg,
  FlRectangleLandscapeSyncFilledSvg,
  FlRectangleLandscapeSyncOffFilledSvg,
  FlRectangleLandscapeSyncOffRegularSvg,
  FlRectangleLandscapeSyncRegularSvg,
  FlRectanglePortraitLocationTargetFilledSvg,
  FlRectanglePortraitLocationTargetRegularSvg,
  FlRecycleFilledSvg,
  FlRecycleRegularSvg,
  FlRemixAddFilledSvg,
  FlRemixAddRegularSvg,
  FlRemoteFilledSvg,
  FlRemoteRegularSvg,
  FlRenameFilledSvg,
  FlRenameRegularSvg,
  FlReorderFilledSvg,
  FlReorderRegularSvg,
  FlReplayFilledSvg,
  FlReplayRegularSvg,
  FlResizeFilledSvg,
  FlResizeImageFilledSvg,
  FlResizeImageRegularSvg,
  FlResizeLargeFilledSvg,
  FlResizeLargeRegularSvg,
  FlResizeRegularSvg,
  FlResizeSmallFilledSvg,
  FlResizeSmallRegularSvg,
  FlResizeTableFilledSvg,
  FlResizeTableRegularSvg,
  FlResizeVideoFilledSvg,
  FlResizeVideoRegularSvg,
  FlRewardColorSvg,
  FlRewardFilledSvg,
  FlRewardRegularSvg,
  FlRewindFilledSvg,
  FlRewindRegularSvg,
  FlRhombusFilledSvg,
  FlRhombusRegularSvg,
  FlRibbonAddFilledSvg,
  FlRibbonAddRegularSvg,
  FlRibbonFilledSvg,
  FlRibbonOffFilledSvg,
  FlRibbonOffRegularSvg,
  FlRibbonRegularSvg,
  FlRibbonStarFilledSvg,
  FlRibbonStarRegularSvg,
  FlRoadConeFilledSvg,
  FlRoadConeRegularSvg,
  FlRoadFilledSvg,
  FlRoadRegularSvg,
  FlRocketFilledSvg,
  FlRocketRegularSvg,
  FlRotateLeftFilledSvg,
  FlRotateLeftRegularSvg,
  FlRotateRightFilledSvg,
  FlRotateRightRegularSvg,
  FlRouterFilledSvg,
  FlRouterRegularSvg,
  FlRowTripleFilledSvg,
  FlRowTripleRegularSvg,
  FlRssFilledSvg,
  FlRssRegularSvg,
  FlRulerFilledSvg,
  FlRulerRegularSvg,
  FlRunFilledSvg,
  FlRunRegularSvg,
  FlSanitizeFilledSvg,
  FlSanitizeRegularSvg,
  FlSaveArrowRightFilledSvg,
  FlSaveArrowRightRegularSvg,
  FlSaveCopyFilledSvg,
  FlSaveCopyRegularSvg,
  FlSaveEditFilledSvg,
  FlSaveEditRegularSvg,
  FlSaveFilledSvg,
  FlSaveImageFilledSvg,
  FlSaveImageRegularSvg,
  FlSaveMultipleFilledSvg,
  FlSaveMultipleRegularSvg,
  FlSaveRegularSvg,
  FlSaveSearchFilledSvg,
  FlSaveSearchRegularSvg,
  FlSaveSyncFilledSvg,
  FlSaveSyncRegularSvg,
  FlSavingsFilledSvg,
  FlSavingsRegularSvg,
  FlScaleFillFilledSvg,
  FlScaleFillRegularSvg,
  FlScaleFitFilledSvg,
  FlScaleFitRegularSvg,
  FlScalesFilledSvg,
  FlScalesRegularSvg,
  FlScanCameraFilledSvg,
  FlScanCameraRegularSvg,
  FlScanDashFilledSvg,
  FlScanDashRegularSvg,
  FlScanFilledSvg,
  FlScanObjectFilledSvg,
  FlScanObjectRegularSvg,
  FlScanPersonColorSvg,
  FlScanPersonFilledSvg,
  FlScanPersonRegularSvg,
  FlScanRegularSvg,
  FlScanTableFilledSvg,
  FlScanTableRegularSvg,
  FlScanTextFilledSvg,
  FlScanTextRegularSvg,
  FlScanThumbUpFilledSvg,
  FlScanThumbUpOffFilledSvg,
  FlScanThumbUpOffRegularSvg,
  FlScanThumbUpRegularSvg,
  FlScanTypeCheckmarkFilledSvg,
  FlScanTypeCheckmarkRegularSvg,
  FlScanTypeColorSvg,
  FlScanTypeFilledSvg,
  FlScanTypeOffFilledSvg,
  FlScanTypeOffRegularSvg,
  FlScanTypeRegularSvg,
  FlScratchpadFilledSvg,
  FlScratchpadRegularSvg,
  FlScreenCutFilledSvg,
  FlScreenCutRegularSvg,
  FlScreenPersonFilledSvg,
  FlScreenPersonRegularSvg,
  FlScreenSearchFilledSvg,
  FlScreenSearchRegularSvg,
  FlScreenshotFilledSvg,
  FlScreenshotRecordFilledSvg,
  FlScreenshotRecordRegularSvg,
  FlScreenshotRegularSvg,
  FlScriptFilledSvg,
  FlScriptRegularSvg,
  FlSearchFilledSvg,
  FlSearchInfoFilledSvg,
  FlSearchInfoRegularSvg,
  FlSearchRegularSvg,
  FlSearchSettingsFilledSvg,
  FlSearchSettingsRegularSvg,
  FlSearchShieldFilledSvg,
  FlSearchShieldRegularSvg,
  FlSearchSparkleFilledSvg,
  FlSearchSparkleRegularSvg,
  FlSearchSquareFilledSvg,
  FlSearchSquareRegularSvg,
  FlSearchVisualColorSvg,
  FlSearchVisualFilledSvg,
  FlSearchVisualRegularSvg,
  FlSeatAddFilledSvg,
  FlSeatAddRegularSvg,
  FlSeatFilledSvg,
  FlSeatRegularSvg,
  FlSelectAllOffFilledSvg,
  FlSelectAllOffRegularSvg,
  FlSelectAllOnFilledSvg,
  FlSelectAllOnRegularSvg,
  FlSelectObjectFilledSvg,
  FlSelectObjectRegularSvg,
  FlSelectObjectSkewDismissFilledSvg,
  FlSelectObjectSkewDismissRegularSvg,
  FlSelectObjectSkewEditFilledSvg,
  FlSelectObjectSkewEditRegularSvg,
  FlSelectObjectSkewFilledSvg,
  FlSelectObjectSkewRegularSvg,
  FlSendBeakerFilledSvg,
  FlSendBeakerRegularSvg,
  FlSendClockFilledSvg,
  FlSendClockRegularSvg,
  FlSendCopyFilledSvg,
  FlSendCopyRegularSvg,
  FlSendFilledSvg,
  FlSendPersonFilledSvg,
  FlSendPersonRegularSvg,
  FlSendRegularSvg,
  FlSerialPortFilledSvg,
  FlSerialPortRegularSvg,
  FlServerFilledSvg,
  FlServerLinkFilledSvg,
  FlServerLinkRegularSvg,
  FlServerMultipleFilledSvg,
  FlServerMultipleRegularSvg,
  FlServerPlayFilledSvg,
  FlServerPlayRegularSvg,
  FlServerRegularSvg,
  FlServiceBellFilledSvg,
  FlServiceBellRegularSvg,
  FlSettingsChatFilledSvg,
  FlSettingsChatRegularSvg,
  FlSettingsCogMultipleFilledSvg,
  FlSettingsCogMultipleRegularSvg,
  FlSettingsFilledSvg,
  FlSettingsRegularSvg,
  FlShapeExcludeFilledSvg,
  FlShapeExcludeRegularSvg,
  FlShapeIntersectFilledSvg,
  FlShapeIntersectRegularSvg,
  FlShapeOrganicFilledSvg,
  FlShapeOrganicRegularSvg,
  FlShapeSubtractFilledSvg,
  FlShapeSubtractRegularSvg,
  FlShapeUnionFilledSvg,
  FlShapeUnionRegularSvg,
  FlShapesFilledSvg,
  FlShapesRegularSvg,
  FlShareAndroidFilledSvg,
  FlShareAndroidRegularSvg,
  FlShareCloseTrayFilledSvg,
  FlShareCloseTrayRegularSvg,
  FlShareFilledSvg,
  FlShareIosFilledSvg,
  FlShareIosRegularSvg,
  FlShareMultipleFilledSvg,
  FlShareMultipleRegularSvg,
  FlShareRegularSvg,
  FlShareScreenPersonFilledSvg,
  FlShareScreenPersonOverlayFilledSvg,
  FlShareScreenPersonOverlayInsideFilledSvg,
  FlShareScreenPersonOverlayInsideRegularSvg,
  FlShareScreenPersonOverlayRegularSvg,
  FlShareScreenPersonPFilledSvg,
  FlShareScreenPersonPRegularSvg,
  FlShareScreenPersonRegularSvg,
  FlShareScreenStartFilledSvg,
  FlShareScreenStartRegularSvg,
  FlShareScreenStopFilledSvg,
  FlShareScreenStopRegularSvg,
  FlShieldAddFilledSvg,
  FlShieldAddRegularSvg,
  FlShieldBadgeFilledSvg,
  FlShieldBadgeRegularSvg,
  FlShieldCheckmarkColorSvg,
  FlShieldCheckmarkFilledSvg,
  FlShieldCheckmarkRegularSvg,
  FlShieldColorSvg,
  FlShieldDismissFilledSvg,
  FlShieldDismissRegularSvg,
  FlShieldDismissShieldFilledSvg,
  FlShieldDismissShieldRegularSvg,
  FlShieldErrorFilledSvg,
  FlShieldErrorRegularSvg,
  FlShieldFilledSvg,
  FlShieldGlobeFilledSvg,
  FlShieldGlobeRegularSvg,
  FlShieldKeyholeFilledSvg,
  FlShieldKeyholeRegularSvg,
  FlShieldLockFilledSvg,
  FlShieldLockRegularSvg,
  FlShieldPersonAddFilledSvg,
  FlShieldPersonAddRegularSvg,
  FlShieldPersonFilledSvg,
  FlShieldPersonRegularSvg,
  FlShieldProhibitedFilledSvg,
  FlShieldProhibitedRegularSvg,
  FlShieldQuestionFilledSvg,
  FlShieldQuestionRegularSvg,
  FlShieldRegularSvg,
  FlShieldTaskFilledSvg,
  FlShieldTaskRegularSvg,
  FlShifts30MinutesFilledSvg,
  FlShifts30MinutesRegularSvg,
  FlShiftsActivityFilledSvg,
  FlShiftsActivityRegularSvg,
  FlShiftsAddFilledSvg,
  FlShiftsAddRegularSvg,
  FlShiftsAvailabilityFilledSvg,
  FlShiftsAvailabilityRegularSvg,
  FlShiftsCheckmarkFilledSvg,
  FlShiftsCheckmarkRegularSvg,
  FlShiftsColorSvg,
  FlShiftsDayFilledSvg,
  FlShiftsDayRegularSvg,
  FlShiftsFilledSvg,
  FlShiftsOpenFilledSvg,
  FlShiftsOpenRegularSvg,
  FlShiftsProhibitedFilledSvg,
  FlShiftsProhibitedRegularSvg,
  FlShiftsQuestionMarkFilledSvg,
  FlShiftsQuestionMarkRegularSvg,
  FlShiftsRegularSvg,
  FlShiftsTeamFilledSvg,
  FlShiftsTeamRegularSvg,
  FlShoppingBagAddFilledSvg,
  FlShoppingBagAddRegularSvg,
  FlShoppingBagArrowLeftFilledSvg,
  FlShoppingBagArrowLeftRegularSvg,
  FlShoppingBagDismissFilledSvg,
  FlShoppingBagDismissRegularSvg,
  FlShoppingBagFilledSvg,
  FlShoppingBagPauseFilledSvg,
  FlShoppingBagPauseRegularSvg,
  FlShoppingBagPercentFilledSvg,
  FlShoppingBagPercentRegularSvg,
  FlShoppingBagPlayFilledSvg,
  FlShoppingBagPlayRegularSvg,
  FlShoppingBagRegularSvg,
  FlShoppingBagTagFilledSvg,
  FlShoppingBagTagRegularSvg,
  FlShortpickFilledSvg,
  FlShortpickRegularSvg,
  FlShowerheadFilledSvg,
  FlShowerheadRegularSvg,
  FlSidebarSearchFilledLtrSvg,
  FlSidebarSearchFilledRtlSvg,
  FlSidebarSearchLtrFilledSvg,
  FlSidebarSearchLtrRegularSvg,
  FlSidebarSearchRegularLtrSvg,
  FlSidebarSearchRegularRtlSvg,
  FlSidebarSearchRtlFilledSvg,
  FlSidebarSearchRtlRegularSvg,
  FlSignOutFilledSvg,
  FlSignOutRegularSvg,
  FlSignatureFilledSvg,
  FlSignatureRegularSvg,
  FlSimFilledSvg,
  FlSimRegularSvg,
  FlSkipBack10FilledSvg,
  FlSkipBack10RegularSvg,
  FlSkipForward10FilledSvg,
  FlSkipForward10RegularSvg,
  FlSkipForward30FilledSvg,
  FlSkipForward30RegularSvg,
  FlSkipForwardTabFilledSvg,
  FlSkipForwardTabRegularSvg,
  FlSlashForwardFilledSvg,
  FlSlashForwardRegularSvg,
  FlSleepFilledSvg,
  FlSleepRegularSvg,
  FlSlideAddFilledSvg,
  FlSlideAddRegularSvg,
  FlSlideArrowRightFilledSvg,
  FlSlideArrowRightRegularSvg,
  FlSlideContent24FilledSvg,
  FlSlideContent24RegularSvg,
  FlSlideEraserFilledSvg,
  FlSlideEraserRegularSvg,
  FlSlideGridFilledSvg,
  FlSlideGridRegularSvg,
  FlSlideHideFilledSvg,
  FlSlideHideRegularSvg,
  FlSlideLayoutFilledSvg,
  FlSlideLayoutRegularSvg,
  FlSlideLinkFilledSvg,
  FlSlideLinkRegularSvg,
  FlSlideMicrophoneFilledSvg,
  FlSlideMicrophoneRegularSvg,
  FlSlideMultipleArrowRightFilledSvg,
  FlSlideMultipleArrowRightRegularSvg,
  FlSlideMultipleFilledSvg,
  FlSlideMultipleRegularSvg,
  FlSlideMultipleSearchFilledSvg,
  FlSlideMultipleSearchRegularSvg,
  FlSlidePlayFilledSvg,
  FlSlidePlayRegularSvg,
  FlSlideRecordFilledSvg,
  FlSlideRecordRegularSvg,
  FlSlideSearchFilledSvg,
  FlSlideSearchRegularSvg,
  FlSlideSettingsFilledSvg,
  FlSlideSettingsRegularSvg,
  FlSlideSizeFilledSvg,
  FlSlideSizeRegularSvg,
  FlSlideTextCallFilledSvg,
  FlSlideTextCallRegularSvg,
  FlSlideTextCursorFilledSvg,
  FlSlideTextCursorRegularSvg,
  FlSlideTextEditFilledSvg,
  FlSlideTextEditRegularSvg,
  FlSlideTextFilledSvg,
  FlSlideTextMultipleFilledSvg,
  FlSlideTextMultipleRegularSvg,
  FlSlideTextPersonFilledSvg,
  FlSlideTextPersonRegularSvg,
  FlSlideTextRegularSvg,
  FlSlideTextSparkleFilledSvg,
  FlSlideTextSparkleRegularSvg,
  FlSlideTransitionFilledSvg,
  FlSlideTransitionRegularSvg,
  FlSmartwatchDotFilledSvg,
  FlSmartwatchDotRegularSvg,
  FlSmartwatchFilledSvg,
  FlSmartwatchRegularSvg,
  FlSnoozeFilledSvg,
  FlSnoozeRegularSvg,
  FlSoundSourceFilledSvg,
  FlSoundSourceRegularSvg,
  FlSoundWaveCircleFilledSvg,
  FlSoundWaveCircleRegularSvg,
  FlSoundWaveCircleSparkleFilledSvg,
  FlSoundWaveCircleSparkleRegularSvg,
  FlSpace3dFilledSvg,
  FlSpace3dRegularSvg,
  FlSpacebarFilledSvg,
  FlSpacebarRegularSvg,
  FlSparkleCircleFilledSvg,
  FlSparkleCircleRegularSvg,
  FlSparkleFilledSvg,
  FlSparkleRegularSvg,
  FlSpatulaSpoonFilledSvg,
  FlSpatulaSpoonRegularSvg,
  FlSpeaker0FilledSvg,
  FlSpeaker0RegularSvg,
  FlSpeaker1FilledSvg,
  FlSpeaker1RegularSvg,
  FlSpeaker2FilledSvg,
  FlSpeaker2RegularSvg,
  FlSpeakerBluetoothFilledSvg,
  FlSpeakerBluetoothRegularSvg,
  FlSpeakerBoxFilledSvg,
  FlSpeakerBoxRegularSvg,
  FlSpeakerEditFilledSvg,
  FlSpeakerEditRegularSvg,
  FlSpeakerMuteFilledSvg,
  FlSpeakerMuteRegularSvg,
  FlSpeakerOffFilledSvg,
  FlSpeakerOffRegularSvg,
  FlSpeakerSettingsFilledSvg,
  FlSpeakerSettingsRegularSvg,
  FlSpeakerUsbFilledSvg,
  FlSpeakerUsbRegularSvg,
  FlSpinnerIosFilledSvg,
  FlSpinnerIosRegularSvg,
  FlSplitHintFilledSvg,
  FlSplitHintRegularSvg,
  FlSplitHorizontalFilledSvg,
  FlSplitHorizontalRegularSvg,
  FlSplitVerticalFilledSvg,
  FlSplitVerticalRegularSvg,
  FlSportAmericanFootballFilledSvg,
  FlSportAmericanFootballRegularSvg,
  FlSportBaseballFilledSvg,
  FlSportBaseballRegularSvg,
  FlSportBasketballFilledSvg,
  FlSportBasketballRegularSvg,
  FlSportFilledSvg,
  FlSportHockeyFilledSvg,
  FlSportHockeyRegularSvg,
  FlSportRegularSvg,
  FlSportSoccerFilledSvg,
  FlSportSoccerRegularSvg,
  FlSprayCan16FilledSvg,
  FlSprayCan16RegularSvg,
  FlSquareAddFilledSvg,
  FlSquareAddRegularSvg,
  FlSquareArrowForwardFilledSvg,
  FlSquareArrowForwardRegularSvg,
  FlSquareDismissFilledSvg,
  FlSquareDismissRegularSvg,
  FlSquareDovetailJointFilledSvg,
  FlSquareDovetailJointRegularSvg,
  FlSquareEraserFilledSvg,
  FlSquareEraserRegularSvg,
  FlSquareFilledSvg,
  FlSquareHintAppsFilledSvg,
  FlSquareHintAppsRegularSvg,
  FlSquareHintArrowBackFilledSvg,
  FlSquareHintArrowBackRegularSvg,
  FlSquareHintFilledSvg,
  FlSquareHintHexagonFilledSvg,
  FlSquareHintHexagonRegularSvg,
  FlSquareHintRegularSvg,
  FlSquareHintSparklesFilledSvg,
  FlSquareHintSparklesRegularSvg,
  FlSquareMultipleFilledSvg,
  FlSquareMultipleRegularSvg,
  FlSquareRegularSvg,
  FlSquareShadowFilledSvg,
  FlSquareShadowRegularSvg,
  FlSquareTextArrowRepeatAllFilledSvg,
  FlSquareTextArrowRepeatAllRegularSvg,
  FlSquaresNestedFilledSvg,
  FlSquaresNestedRegularSvg,
  FlStackAddFilledSvg,
  FlStackAddRegularSvg,
  FlStackArrowForwardFilledSvg,
  FlStackArrowForwardRegularSvg,
  FlStackFilledSvg,
  FlStackOffFilledSvg,
  FlStackOffRegularSvg,
  FlStackRegularSvg,
  FlStackStarFilledSvg,
  FlStackStarRegularSvg,
  FlStackVerticalFilledSvg,
  FlStackVerticalRegularSvg,
  FlStamp32LightSvg,
  FlStarAddFilledSvg,
  FlStarAddRegularSvg,
  FlStarArrowBackFilledSvg,
  FlStarArrowBackRegularSvg,
  FlStarArrowRightEndFilledSvg,
  FlStarArrowRightEndRegularSvg,
  FlStarArrowRightStartFilledSvg,
  FlStarArrowRightStartRegularSvg,
  FlStarCheckmarkFilledSvg,
  FlStarCheckmarkRegularSvg,
  FlStarDismissFilledSvg,
  FlStarDismissRegularSvg,
  FlStarEditFilledSvg,
  FlStarEditRegularSvg,
  FlStarEmphasisFilledSvg,
  FlStarEmphasisRegularSvg,
  FlStarFilledSvg,
  FlStarHalfFilledSvg,
  FlStarHalfRegularSvg,
  FlStarLineHorizontal3FilledSvg,
  FlStarLineHorizontal3RegularSvg,
  FlStarOffFilledSvg,
  FlStarOffRegularSvg,
  FlStarOneQuarterFilledSvg,
  FlStarOneQuarterRegularSvg,
  FlStarProhibitedFilledSvg,
  FlStarProhibitedRegularSvg,
  FlStarRegularSvg,
  FlStarSettingsFilledSvg,
  FlStarSettingsRegularSvg,
  FlStarThreeQuarterFilledSvg,
  FlStarThreeQuarterRegularSvg,
  FlStatusFilledSvg,
  FlStatusRegularSvg,
  FlStepFilledSvg,
  FlStepRegularSvg,
  FlStepsFilledSvg,
  FlStepsRegularSvg,
  FlStethoscopeFilledSvg,
  FlStethoscopeRegularSvg,
  FlStickerAddFilledSvg,
  FlStickerAddRegularSvg,
  FlStickerFilledSvg,
  FlStickerRegularSvg,
  FlStopFilledSvg,
  FlStopRegularSvg,
  FlStorageFilledSvg,
  FlStorageRegularSvg,
  FlStoreMicrosoftFilledSvg,
  FlStoreMicrosoftRegularSvg,
  FlStreamFilledSvg,
  FlStreamInputFilledSvg,
  FlStreamInputOutputFilledSvg,
  FlStreamInputOutputRegularSvg,
  FlStreamInputRegularSvg,
  FlStreamOutputFilledSvg,
  FlStreamOutputRegularSvg,
  FlStreamRegularSvg,
  FlStreetSignFilledSvg,
  FlStreetSignRegularSvg,
  FlStyleGuideFilledSvg,
  FlStyleGuideRegularSvg,
  FlSubGridFilledSvg,
  FlSubGridRegularSvg,
  FlSubtitlesFilledSvg,
  FlSubtitlesRegularSvg,
  FlSubtractCircleArrowBackFilledSvg,
  FlSubtractCircleArrowBackRegularSvg,
  FlSubtractCircleArrowForwardFilledSvg,
  FlSubtractCircleArrowForwardRegularSvg,
  FlSubtractCircleFilledSvg,
  FlSubtractCircleRegularSvg,
  FlSubtractFilledSvg,
  FlSubtractParenthesesFilledSvg,
  FlSubtractParenthesesRegularSvg,
  FlSubtractRegularSvg,
  FlSubtractSquareFilledSvg,
  FlSubtractSquareMultipleFilledSvg,
  FlSubtractSquareMultipleRegularSvg,
  FlSubtractSquareRegularSvg,
  FlSurfaceEarbudsFilledSvg,
  FlSurfaceEarbudsRegularSvg,
  FlSurfaceHubFilledSvg,
  FlSurfaceHubRegularSvg,
  FlSwimmingPoolFilledSvg,
  FlSwimmingPoolRegularSvg,
  FlSwipeDownFilledSvg,
  FlSwipeDownRegularSvg,
  FlSwipeRightFilledSvg,
  FlSwipeRightRegularSvg,
  FlSwipeUpFilledSvg,
  FlSwipeUpRegularSvg,
  FlSymbolsFilledSvg,
  FlSymbolsRegularSvg,
  FlSyncOffFilledSvg,
  FlSyncOffRegularSvg,
  FlSyringeFilledSvg,
  FlSyringeRegularSvg,
  FlSystemFilledSvg,
  FlSystemRegularSvg,
  FlTabAddFilledSvg,
  FlTabAddRegularSvg,
  FlTabArrowLeftFilledSvg,
  FlTabArrowLeftRegularSvg,
  FlTabDesktopArrowClockwiseFilledSvg,
  FlTabDesktopArrowClockwiseRegularSvg,
  FlTabDesktopArrowLeftFilledSvg,
  FlTabDesktopArrowLeftRegularSvg,
  FlTabDesktopBottomFilledSvg,
  FlTabDesktopBottomRegularSvg,
  FlTabDesktopClockFilledSvg,
  FlTabDesktopClockRegularSvg,
  FlTabDesktopCopyFilledSvg,
  FlTabDesktopCopyRegularSvg,
  FlTabDesktopFilledSvg,
  FlTabDesktopImageFilledSvg,
  FlTabDesktopImageRegularSvg,
  FlTabDesktopLinkFilledSvg,
  FlTabDesktopLinkRegularSvg,
  FlTabDesktopMultipleAddFilledSvg,
  FlTabDesktopMultipleAddRegularSvg,
  FlTabDesktopMultipleBottomFilledSvg,
  FlTabDesktopMultipleBottomRegularSvg,
  FlTabDesktopMultipleFilledSvg,
  FlTabDesktopMultipleRegularSvg,
  FlTabDesktopMultipleSparkleFilledSvg,
  FlTabDesktopMultipleSparkleRegularSvg,
  FlTabDesktopNewPageFilledSvg,
  FlTabDesktopNewPageRegularSvg,
  FlTabDesktopRegularSvg,
  FlTabDesktopSearchFilledSvg,
  FlTabDesktopSearchRegularSvg,
  FlTabFilledSvg,
  FlTabGroupFilledSvg,
  FlTabGroupRegularSvg,
  FlTabInPrivateFilledSvg,
  FlTabInPrivateRegularSvg,
  FlTabInprivateAccountFilledSvg,
  FlTabInprivateAccountRegularSvg,
  FlTabProhibitedFilledSvg,
  FlTabProhibitedRegularSvg,
  FlTabRegularSvg,
  FlTabShieldDismissFilledSvg,
  FlTabShieldDismissRegularSvg,
  FlTableAddFilledSvg,
  FlTableAddRegularSvg,
  FlTableArrowUpFilledSvg,
  FlTableArrowUpRegularSvg,
  FlTableBottomRowFilledSvg,
  FlTableBottomRowRegularSvg,
  FlTableCalculatorFilledSvg,
  FlTableCalculatorRegularSvg,
  FlTableCellEditFilledSvg,
  FlTableCellEditRegularSvg,
  FlTableCellsMergeFilledSvg,
  FlTableCellsMergeRegularSvg,
  FlTableCellsSplitFilledSvg,
  FlTableCellsSplitRegularSvg,
  FlTableCheckerFilledSvg,
  FlTableCheckerRegularSvg,
  FlTableColumnTopBottomFilledSvg,
  FlTableColumnTopBottomRegularSvg,
  FlTableCopyFilledSvg,
  FlTableCopyRegularSvg,
  FlTableCursorFilledSvg,
  FlTableCursorRegularSvg,
  FlTableDeleteColumnFilledSvg,
  FlTableDeleteColumnRegularSvg,
  FlTableDeleteRowFilledSvg,
  FlTableDeleteRowRegularSvg,
  FlTableDismissFilledSvg,
  FlTableDismissRegularSvg,
  FlTableEditFilledSvg,
  FlTableEditRegularSvg,
  FlTableFilledSvg,
  FlTableFreezeColumnAndRowFilledSvg,
  FlTableFreezeColumnAndRowRegularSvg,
  FlTableFreezeColumnFilledSvg,
  FlTableFreezeColumnRegularSvg,
  FlTableFreezeRowFilledSvg,
  FlTableFreezeRowRegularSvg,
  FlTableImageFilledSvg,
  FlTableImageRegularSvg,
  FlTableInsertColumnFilledSvg,
  FlTableInsertColumnRegularSvg,
  FlTableInsertRowFilledSvg,
  FlTableInsertRowRegularSvg,
  FlTableLightningFilledSvg,
  FlTableLightningRegularSvg,
  FlTableLinkFilledSvg,
  FlTableLinkRegularSvg,
  FlTableLockFilledSvg,
  FlTableLockRegularSvg,
  FlTableMoveAboveFilledSvg,
  FlTableMoveAboveRegularSvg,
  FlTableMoveBelowFilledSvg,
  FlTableMoveBelowRegularSvg,
  FlTableMoveLeftFilledSvg,
  FlTableMoveLeftRegularSvg,
  FlTableMoveRightFilledSvg,
  FlTableMoveRightRegularSvg,
  FlTableMultipleFilledSvg,
  FlTableMultipleRegularSvg,
  FlTableOffsetAddFilledSvg,
  FlTableOffsetAddRegularSvg,
  FlTableOffsetFilledSvg,
  FlTableOffsetLessThanOrEqualToFilledSvg,
  FlTableOffsetLessThanOrEqualToRegularSvg,
  FlTableOffsetRegularSvg,
  FlTableOffsetSettingsFilledSvg,
  FlTableOffsetSettingsRegularSvg,
  FlTableRegularSvg,
  FlTableResizeColumnFilledSvg,
  FlTableResizeColumnRegularSvg,
  FlTableResizeRowFilledSvg,
  FlTableResizeRowRegularSvg,
  FlTableSearchFilledSvg,
  FlTableSearchRegularSvg,
  FlTableSettingsFilledSvg,
  FlTableSettingsRegularSvg,
  FlTableSimpleCheckmarkFilledSvg,
  FlTableSimpleCheckmarkRegularSvg,
  FlTableSimpleExcludeFilledSvg,
  FlTableSimpleExcludeRegularSvg,
  FlTableSimpleFilledSvg,
  FlTableSimpleIncludeFilledSvg,
  FlTableSimpleIncludeRegularSvg,
  FlTableSimpleMultipleFilledSvg,
  FlTableSimpleMultipleRegularSvg,
  FlTableSimpleRegularSvg,
  FlTableSparkleFilledSvg,
  FlTableSparkleRegularSvg,
  FlTableSplitFilledSvg,
  FlTableSplitRegularSvg,
  FlTableStackAboveFilledSvg,
  FlTableStackAboveRegularSvg,
  FlTableStackBelowFilledSvg,
  FlTableStackBelowRegularSvg,
  FlTableStackLeftFilledSvg,
  FlTableStackLeftRegularSvg,
  FlTableStackRightFilledSvg,
  FlTableStackRightRegularSvg,
  FlTableSwitchFilledSvg,
  FlTableSwitchRegularSvg,
  FlTabletFilledSvg,
  FlTabletLaptopFilledSvg,
  FlTabletLaptopRegularSvg,
  FlTabletRegularSvg,
  FlTabletSpeakerFilledSvg,
  FlTabletSpeakerRegularSvg,
  FlTabsFilledSvg,
  FlTabsRegularSvg,
  FlTagCircleFilledSvg,
  FlTagCircleRegularSvg,
  FlTagDismissFilledSvg,
  FlTagDismissRegularSvg,
  FlTagErrorFilledSvg,
  FlTagErrorRegularSvg,
  FlTagFilledSvg,
  FlTagLockAccentFilledSvg,
  FlTagLockFilledSvg,
  FlTagLockRegularSvg,
  FlTagMultipleFilledSvg,
  FlTagMultipleRegularSvg,
  FlTagOffFilledSvg,
  FlTagOffRegularSvg,
  FlTagQuestionMarkFilledSvg,
  FlTagQuestionMarkRegularSvg,
  FlTagRegularSvg,
  FlTagResetFilledSvg,
  FlTagResetRegularSvg,
  FlTagSearchFilledSvg,
  FlTagSearchRegularSvg,
  FlTapDoubleFilledSvg,
  FlTapDoubleRegularSvg,
  FlTapSingleFilledSvg,
  FlTapSingleRegularSvg,
  FlTargetAddFilledSvg,
  FlTargetAddRegularSvg,
  FlTargetArrowFilledSvg,
  FlTargetArrowRegularSvg,
  FlTargetDismissFilledSvg,
  FlTargetDismissRegularSvg,
  FlTargetEditFilledSvg,
  FlTargetEditRegularSvg,
  FlTargetFilledSvg,
  FlTargetRegularSvg,
  FlTaskListAddFilledSvg,
  FlTaskListAddRegularSvg,
  FlTaskListFilledLtrSvg,
  FlTaskListFilledRtlSvg,
  FlTaskListLtrFilledSvg,
  FlTaskListLtrRegularSvg,
  FlTaskListRegularLtrSvg,
  FlTaskListRegularRtlSvg,
  FlTaskListRtlFilledSvg,
  FlTaskListRtlRegularSvg,
  FlTaskListSquareAddFilledSvg,
  FlTaskListSquareAddRegularSvg,
  FlTaskListSquareDatabaseFilledSvg,
  FlTaskListSquareDatabaseRegularSvg,
  FlTaskListSquareFilledLtrSvg,
  FlTaskListSquareFilledRtlSvg,
  FlTaskListSquareLtrFilledSvg,
  FlTaskListSquareLtrRegularSvg,
  FlTaskListSquarePersonFilledSvg,
  FlTaskListSquarePersonRegularSvg,
  FlTaskListSquareRegularLtrSvg,
  FlTaskListSquareRegularRtlSvg,
  FlTaskListSquareRtlFilledSvg,
  FlTaskListSquareRtlRegularSvg,
  FlTaskListSquareSettingsFilledSvg,
  FlTaskListSquareSettingsRegularSvg,
  FlTasksAppFilledSvg,
  FlTasksAppRegularSvg,
  FlTeachingFilledSvg,
  FlTeachingRegularSvg,
  FlTeardropBottomRightFilledSvg,
  FlTeardropBottomRightRegularSvg,
  FlTeddyFilledSvg,
  FlTeddyRegularSvg,
  FlTemperatureFilledSvg,
  FlTemperatureRegularSvg,
  FlTentFilledSvg,
  FlTentRegularSvg,
  FlTetrisAppFilledSvg,
  FlTetrisAppRegularSvg,
  FlTextAddFilledSvg,
  FlTextAddRegularSvg,
  FlTextAddSpaceAfterFilledSvg,
  FlTextAddSpaceAfterRegularSvg,
  FlTextAddSpaceBeforeFilledSvg,
  FlTextAddSpaceBeforeRegularSvg,
  FlTextAddTFilledSvg,
  FlTextAddTRegularSvg,
  FlTextAlignCenterFilledSvg,
  FlTextAlignCenterRegularSvg,
  FlTextAlignCenterRotate270FilledSvg,
  FlTextAlignCenterRotate270RegularSvg,
  FlTextAlignCenterRotate90FilledSvg,
  FlTextAlignCenterRotate90RegularSvg,
  FlTextAlignDistributedEvenlyFilledSvg,
  FlTextAlignDistributedEvenlyRegularSvg,
  FlTextAlignDistributedFilledSvg,
  FlTextAlignDistributedRegularSvg,
  FlTextAlignDistributedVerticalFilledSvg,
  FlTextAlignDistributedVerticalRegularSvg,
  FlTextAlignJustifyFilledSvg,
  FlTextAlignJustifyLow90FilledSvg,
  FlTextAlignJustifyLow90RegularSvg,
  FlTextAlignJustifyLowFilledSvg,
  FlTextAlignJustifyLowRegularSvg,
  FlTextAlignJustifyLowRotate270FilledSvg,
  FlTextAlignJustifyLowRotate270RegularSvg,
  FlTextAlignJustifyLowRotate90FilledSvg,
  FlTextAlignJustifyLowRotate90RegularSvg,
  FlTextAlignJustifyRegularSvg,
  FlTextAlignJustifyRotate270FilledSvg,
  FlTextAlignJustifyRotate270RegularSvg,
  FlTextAlignJustifyRotate90FilledSvg,
  FlTextAlignJustifyRotate90RegularSvg,
  FlTextAlignLeftFilledSvg,
  FlTextAlignLeftRegularSvg,
  FlTextAlignLeftRotate270FilledSvg,
  FlTextAlignLeftRotate270RegularSvg,
  FlTextAlignLeftRotate90FilledSvg,
  FlTextAlignLeftRotate90RegularSvg,
  FlTextAlignRightFilledSvg,
  FlTextAlignRightRegularSvg,
  FlTextAlignRightRotate270FilledSvg,
  FlTextAlignRightRotate270RegularSvg,
  FlTextAlignRightRotate90FilledSvg,
  FlTextAlignRightRotate90RegularSvg,
  FlTextArrowDownRightColumnFilledSvg,
  FlTextArrowDownRightColumnRegularSvg,
  FlTextAsteriskFilledSvg,
  FlTextAsteriskRegularSvg,
  FlTextBaselineFilledSvg,
  FlTextBaselineRegularSvg,
  FlTextBoldFilledSvg,
  FlTextBoldRegularSvg,
  FlTextBoxSettingsFilledSvg,
  FlTextBoxSettingsRegularSvg,
  FlTextBulletList90FilledSvg,
  FlTextBulletList90RegularSvg,
  FlTextBulletListAddFilledSvg,
  FlTextBulletListAddRegularSvg,
  FlTextBulletListCheckmarkFilledSvg,
  FlTextBulletListCheckmarkRegularSvg,
  FlTextBulletListDismissFilledSvg,
  FlTextBulletListDismissRegularSvg,
  FlTextBulletListFilledSvg,
  FlTextBulletListLtr90FilledSvg,
  FlTextBulletListLtr90RegularSvg,
  FlTextBulletListLtrFilledSvg,
  FlTextBulletListLtrRegularSvg,
  FlTextBulletListRegularSvg,
  FlTextBulletListRtl90FilledSvg,
  FlTextBulletListRtl90RegularSvg,
  FlTextBulletListRtlFilledSvg,
  FlTextBulletListRtlRegularSvg,
  FlTextBulletListSquareClockFilledSvg,
  FlTextBulletListSquareClockRegularSvg,
  FlTextBulletListSquareEditFilledSvg,
  FlTextBulletListSquareEditRegularSvg,
  FlTextBulletListSquareFilledSvg,
  FlTextBulletListSquarePersonFilledSvg,
  FlTextBulletListSquarePersonRegularSvg,
  FlTextBulletListSquareRegularSvg,
  FlTextBulletListSquareSearchFilledSvg,
  FlTextBulletListSquareSearchRegularSvg,
  FlTextBulletListSquareSettingsFilledSvg,
  FlTextBulletListSquareSettingsRegularSvg,
  FlTextBulletListSquareShieldFilledSvg,
  FlTextBulletListSquareShieldRegularSvg,
  FlTextBulletListSquareSparkleFilledSvg,
  FlTextBulletListSquareSparkleRegularSvg,
  FlTextBulletListSquareToolboxFilledSvg,
  FlTextBulletListSquareToolboxRegularSvg,
  FlTextBulletListSquareWarningFilledSvg,
  FlTextBulletListSquareWarningRegularSvg,
  FlTextBulletListTreeFilledSvg,
  FlTextBulletListTreeRegularSvg,
  FlTextCaseLowercaseFilledSvg,
  FlTextCaseLowercaseRegularSvg,
  FlTextCaseTitleFilledSvg,
  FlTextCaseTitleRegularSvg,
  FlTextCaseUppercaseFilledSvg,
  FlTextCaseUppercaseRegularSvg,
  FlTextChangeCaseFilledSvg,
  FlTextChangeCaseRegularSvg,
  FlTextClearFormattingFilledSvg,
  FlTextClearFormattingRegularSvg,
  FlTextCollapseFilledSvg,
  FlTextCollapseRegularSvg,
  FlTextColorAccentFilledSvg,
  FlTextColorFilledSvg,
  FlTextColorRegularSvg,
  FlTextColumnOneFilledSvg,
  FlTextColumnOneNarrowFilledSvg,
  FlTextColumnOneNarrowRegularSvg,
  FlTextColumnOneRegularSvg,
  FlTextColumnOneSemiNarrowFilledSvg,
  FlTextColumnOneSemiNarrowRegularSvg,
  FlTextColumnOneWideFilledSvg,
  FlTextColumnOneWideLightningFilledSvg,
  FlTextColumnOneWideLightningRegularSvg,
  FlTextColumnOneWideRegularSvg,
  FlTextColumnThreeFilledSvg,
  FlTextColumnThreeRegularSvg,
  FlTextColumnTwoFilledSvg,
  FlTextColumnTwoLeftFilledSvg,
  FlTextColumnTwoLeftRegularSvg,
  FlTextColumnTwoRegularSvg,
  FlTextColumnTwoRightFilledSvg,
  FlTextColumnTwoRightRegularSvg,
  FlTextColumnWideFilledSvg,
  FlTextColumnWideRegularSvg,
  FlTextContinuousFilledSvg,
  FlTextContinuousRegularSvg,
  FlTextDensityFilledSvg,
  FlTextDensityRegularSvg,
  FlTextDescriptionFilledSvg,
  FlTextDescriptionLtrFilledSvg,
  FlTextDescriptionLtrRegularSvg,
  FlTextDescriptionRegularSvg,
  FlTextDescriptionRtlFilledSvg,
  FlTextDescriptionRtlRegularSvg,
  FlTextDirectionHorizontalLeftFilledSvg,
  FlTextDirectionHorizontalLeftRegularSvg,
  FlTextDirectionHorizontalLtrFilledSvg,
  FlTextDirectionHorizontalLtrRegularSvg,
  FlTextDirectionHorizontalRightFilledSvg,
  FlTextDirectionHorizontalRightRegularSvg,
  FlTextDirectionHorizontalRtlFilledSvg,
  FlTextDirectionHorizontalRtlRegularSvg,
  FlTextDirectionRotate270RightFilledSvg,
  FlTextDirectionRotate270RightRegularSvg,
  FlTextDirectionRotate315RightFilledSvg,
  FlTextDirectionRotate315RightRegularSvg,
  FlTextDirectionRotate45RightFilledSvg,
  FlTextDirectionRotate45RightRegularSvg,
  FlTextDirectionRotate90LeftFilledSvg,
  FlTextDirectionRotate90LeftRegularSvg,
  FlTextDirectionRotate90LtrFilledSvg,
  FlTextDirectionRotate90LtrRegularSvg,
  FlTextDirectionRotate90RightFilledSvg,
  FlTextDirectionRotate90RightRegularSvg,
  FlTextDirectionRotate90RtlFilledSvg,
  FlTextDirectionRotate90RtlRegularSvg,
  FlTextDirectionVerticalFilledSvg,
  FlTextDirectionVerticalRegularSvg,
  FlTextEditStyleColorSvg,
  FlTextEditStyleFilledSvg,
  FlTextEditStyleRegularSvg,
  FlTextEffectsFilledSvg,
  FlTextEffectsRegularSvg,
  FlTextEffectsSparkleFilledSvg,
  FlTextEffectsSparkleRegularSvg,
  FlTextExpandFilledSvg,
  FlTextExpandRegularSvg,
  FlTextFieldFilledSvg,
  FlTextFieldRegularSvg,
  FlTextFirstLineFilledSvg,
  FlTextFirstLineRegularSvg,
  FlTextFontFilledSvg,
  FlTextFontInfoFilledSvg,
  FlTextFontInfoRegularSvg,
  FlTextFontRegularSvg,
  FlTextFontSizeFilledSvg,
  FlTextFontSizeRegularSvg,
  FlTextFootnoteFilledSvg,
  FlTextFootnoteRegularSvg,
  FlTextGrammarArrowLeftFilledSvg,
  FlTextGrammarArrowLeftRegularSvg,
  FlTextGrammarArrowRightFilledSvg,
  FlTextGrammarArrowRightRegularSvg,
  FlTextGrammarCheckmarkFilledSvg,
  FlTextGrammarCheckmarkRegularSvg,
  FlTextGrammarDismissFilledSvg,
  FlTextGrammarDismissRegularSvg,
  FlTextGrammarErrorFilledSvg,
  FlTextGrammarErrorRegularSvg,
  FlTextGrammarLightningFilledSvg,
  FlTextGrammarLightningRegularSvg,
  FlTextGrammarSettingsFilledSvg,
  FlTextGrammarSettingsRegularSvg,
  FlTextGrammarWandFilledSvg,
  FlTextGrammarWandRegularSvg,
  FlTextHangingFilledSvg,
  FlTextHangingRegularSvg,
  FlTextHeader1FilledSvg,
  FlTextHeader1LinesCaretFilledSvg,
  FlTextHeader1LinesCaretRegularSvg,
  FlTextHeader1LinesFilledSvg,
  FlTextHeader1LinesRegularSvg,
  FlTextHeader1RegularSvg,
  FlTextHeader2FilledSvg,
  FlTextHeader2LinesCaretFilledSvg,
  FlTextHeader2LinesCaretRegularSvg,
  FlTextHeader2LinesFilledSvg,
  FlTextHeader2LinesRegularSvg,
  FlTextHeader2RegularSvg,
  FlTextHeader3FilledSvg,
  FlTextHeader3LinesCaretFilledSvg,
  FlTextHeader3LinesCaretRegularSvg,
  FlTextHeader3LinesFilledSvg,
  FlTextHeader3LinesRegularSvg,
  FlTextHeader3RegularSvg,
  FlTextIndentDecreaseFilledSvg,
  FlTextIndentDecreaseLtr90FilledSvg,
  FlTextIndentDecreaseLtr90RegularSvg,
  FlTextIndentDecreaseLtrFilledSvg,
  FlTextIndentDecreaseLtrRegularSvg,
  FlTextIndentDecreaseLtrRotate270FilledSvg,
  FlTextIndentDecreaseLtrRotate270RegularSvg,
  FlTextIndentDecreaseRegularSvg,
  FlTextIndentDecreaseRotate270FilledSvg,
  FlTextIndentDecreaseRotate270RegularSvg,
  FlTextIndentDecreaseRotate90FilledSvg,
  FlTextIndentDecreaseRotate90RegularSvg,
  FlTextIndentDecreaseRtl90FilledSvg,
  FlTextIndentDecreaseRtl90RegularSvg,
  FlTextIndentDecreaseRtlFilledSvg,
  FlTextIndentDecreaseRtlRegularSvg,
  FlTextIndentDecreaseRtlRotate270FilledSvg,
  FlTextIndentDecreaseRtlRotate270RegularSvg,
  FlTextIndentIncreaseFilledSvg,
  FlTextIndentIncreaseLtr90FilledSvg,
  FlTextIndentIncreaseLtr90RegularSvg,
  FlTextIndentIncreaseLtrFilledSvg,
  FlTextIndentIncreaseLtrRegularSvg,
  FlTextIndentIncreaseLtrRotate270FilledSvg,
  FlTextIndentIncreaseLtrRotate270RegularSvg,
  FlTextIndentIncreaseRegularSvg,
  FlTextIndentIncreaseRotate270FilledSvg,
  FlTextIndentIncreaseRotate270RegularSvg,
  FlTextIndentIncreaseRotate90FilledSvg,
  FlTextIndentIncreaseRotate90RegularSvg,
  FlTextIndentIncreaseRtl90FilledSvg,
  FlTextIndentIncreaseRtl90RegularSvg,
  FlTextIndentIncreaseRtlFilledSvg,
  FlTextIndentIncreaseRtlRegularSvg,
  FlTextIndentIncreaseRtlRotate270FilledSvg,
  FlTextIndentIncreaseRtlRotate270RegularSvg,
  FlTextItalicFilledSvg,
  FlTextItalicRegularSvg,
  FlTextLineSpacingFilledSvg,
  FlTextLineSpacingRegularSvg,
  FlTextMoreFilledSvg,
  FlTextMoreRegularSvg,
  FlTextNumberFormatFilledSvg,
  FlTextNumberFormatRegularSvg,
  FlTextNumberListFilledLtrSvg,
  FlTextNumberListFilledRtlSvg,
  FlTextNumberListLtr90FilledSvg,
  FlTextNumberListLtr90RegularSvg,
  FlTextNumberListLtrFilledSvg,
  FlTextNumberListLtrRegularSvg,
  FlTextNumberListLtrRotate270FilledSvg,
  FlTextNumberListLtrRotate270RegularSvg,
  FlTextNumberListRegularLtrSvg,
  FlTextNumberListRegularRtlSvg,
  FlTextNumberListRotate270FilledSvg,
  FlTextNumberListRotate270RegularSvg,
  FlTextNumberListRotate90FilledSvg,
  FlTextNumberListRotate90RegularSvg,
  FlTextNumberListRtl90FilledSvg,
  FlTextNumberListRtl90RegularSvg,
  FlTextNumberListRtlFilledSvg,
  FlTextNumberListRtlRegularSvg,
  FlTextNumberListRtlRotate270FilledSvg,
  FlTextNumberListRtlRotate270RegularSvg,
  FlTextParagraphDirectionFilledSvg,
  FlTextParagraphDirectionLeftFilledSvg,
  FlTextParagraphDirectionLeftRegularSvg,
  FlTextParagraphDirectionRegularSvg,
  FlTextParagraphDirectionRightFilledSvg,
  FlTextParagraphDirectionRightRegularSvg,
  FlTextParagraphFilledSvg,
  FlTextParagraphRegularSvg,
  FlTextPeriodAsteriskFilledSvg,
  FlTextPeriodAsteriskRegularSvg,
  FlTextPositionBehindFilledSvg,
  FlTextPositionBehindRegularSvg,
  FlTextPositionFrontFilledSvg,
  FlTextPositionFrontRegularSvg,
  FlTextPositionLineFilledSvg,
  FlTextPositionLineRegularSvg,
  FlTextPositionSquareFilledSvg,
  FlTextPositionSquareLeftFilledSvg,
  FlTextPositionSquareLeftRegularSvg,
  FlTextPositionSquareRegularSvg,
  FlTextPositionSquareRightFilledSvg,
  FlTextPositionSquareRightRegularSvg,
  FlTextPositionThroughFilledSvg,
  FlTextPositionThroughRegularSvg,
  FlTextPositionTightFilledSvg,
  FlTextPositionTightRegularSvg,
  FlTextPositionTopBottomFilledSvg,
  FlTextPositionTopBottomRegularSvg,
  FlTextProofingToolsFilledSvg,
  FlTextProofingToolsRegularSvg,
  FlTextQuoteFilledSvg,
  FlTextQuoteRegularSvg,
  FlTextSortAscendingFilledSvg,
  FlTextSortAscendingRegularSvg,
  FlTextSortDescendingFilledSvg,
  FlTextSortDescendingRegularSvg,
  FlTextStrikethroughFilledSvg,
  FlTextStrikethroughRegularSvg,
  FlTextSubscriptFilledSvg,
  FlTextSubscriptRegularSvg,
  FlTextSuperscriptFilledSvg,
  FlTextSuperscriptRegularSvg,
  FlTextTFilledSvg,
  FlTextTRegularSvg,
  FlTextUnderlineCharacterUFilledSvg,
  FlTextUnderlineCharacterURegularSvg,
  FlTextUnderlineDoubleFilledSvg,
  FlTextUnderlineDoubleRegularSvg,
  FlTextUnderlineFilledSvg,
  FlTextUnderlineRegularSvg,
  FlTextWholeWordFilledSvg,
  FlTextWholeWordRegularSvg,
  FlTextWordCountFilledSvg,
  FlTextWordCountRegularSvg,
  FlTextWrapFilledSvg,
  FlTextWrapOffFilledSvg,
  FlTextWrapOffRegularSvg,
  FlTextWrapRegularSvg,
  FlTextboxAlignBottomCenterFilledSvg,
  FlTextboxAlignBottomCenterRegularSvg,
  FlTextboxAlignBottomFilledSvg,
  FlTextboxAlignBottomLeftFilledSvg,
  FlTextboxAlignBottomLeftRegularSvg,
  FlTextboxAlignBottomRegularSvg,
  FlTextboxAlignBottomRightFilledSvg,
  FlTextboxAlignBottomRightRegularSvg,
  FlTextboxAlignBottomRotate90FilledSvg,
  FlTextboxAlignBottomRotate90RegularSvg,
  FlTextboxAlignCenterFilledSvg,
  FlTextboxAlignCenterRegularSvg,
  FlTextboxAlignMiddleFilledSvg,
  FlTextboxAlignMiddleLeftFilledSvg,
  FlTextboxAlignMiddleLeftRegularSvg,
  FlTextboxAlignMiddleRegularSvg,
  FlTextboxAlignMiddleRightFilledSvg,
  FlTextboxAlignMiddleRightRegularSvg,
  FlTextboxAlignMiddleRotate90FilledSvg,
  FlTextboxAlignMiddleRotate90RegularSvg,
  FlTextboxAlignTopCenterFilledSvg,
  FlTextboxAlignTopCenterRegularSvg,
  FlTextboxAlignTopFilledSvg,
  FlTextboxAlignTopLeftFilledSvg,
  FlTextboxAlignTopLeftRegularSvg,
  FlTextboxAlignTopRegularSvg,
  FlTextboxAlignTopRightFilledSvg,
  FlTextboxAlignTopRightRegularSvg,
  FlTextboxAlignTopRotate90FilledSvg,
  FlTextboxAlignTopRotate90RegularSvg,
  FlTextboxCheckmarkFilledSvg,
  FlTextboxCheckmarkRegularSvg,
  FlTextboxFilledSvg,
  FlTextboxMoreFilledSvg,
  FlTextboxMoreRegularSvg,
  FlTextboxRegularSvg,
  FlTextboxRotate90FilledSvg,
  FlTextboxRotate90RegularSvg,
  FlTextboxSettingsFilledSvg,
  FlTextboxSettingsRegularSvg,
  FlThinkingFilledSvg,
  FlThinkingRegularSvg,
  FlThumbDislikeFilledSvg,
  FlThumbDislikeRegularSvg,
  FlThumbLikeDislikeFilledSvg,
  FlThumbLikeDislikeRegularSvg,
  FlThumbLikeFilledSvg,
  FlThumbLikeRegularSvg,
  FlTicketDiagonalFilledSvg,
  FlTicketDiagonalRegularSvg,
  FlTicketHorizontalFilledSvg,
  FlTicketHorizontalRegularSvg,
  FlTimeAndWeatherFilledSvg,
  FlTimeAndWeatherRegularSvg,
  FlTimePickerFilledSvg,
  FlTimePickerRegularSvg,
  FlTimelineFilledSvg,
  FlTimelineRegularSvg,
  FlTimer10FilledSvg,
  FlTimer10RegularSvg,
  FlTimer2FilledSvg,
  FlTimer2RegularSvg,
  FlTimer3FilledSvg,
  FlTimer3RegularSvg,
  FlTimerFilledSvg,
  FlTimerOffFilledSvg,
  FlTimerOffRegularSvg,
  FlTimerRegularSvg,
  FlToggleLeftFilledSvg,
  FlToggleLeftRegularSvg,
  FlToggleMultipleFilledSvg,
  FlToggleMultipleRegularSvg,
  FlToggleRightFilledSvg,
  FlToggleRightRegularSvg,
  FlToolboxFilledSvg,
  FlToolboxRegularSvg,
  FlTooltipQuoteFilledSvg,
  FlTooltipQuoteRegularSvg,
  FlTopSpeedFilledSvg,
  FlTopSpeedRegularSvg,
  FlTranslateAutoFilledSvg,
  FlTranslateAutoRegularSvg,
  FlTranslateFilledSvg,
  FlTranslateOffFilledSvg,
  FlTranslateOffRegularSvg,
  FlTranslateRegularSvg,
  FlTransmissionFilledSvg,
  FlTransmissionRegularSvg,
  FlTransparencySquareFilledSvg,
  FlTransparencySquareRegularSvg,
  FlTrayItemAddFilledSvg,
  FlTrayItemAddRegularSvg,
  FlTrayItemRemoveFilledSvg,
  FlTrayItemRemoveRegularSvg,
  FlTreeDeciduousFilledSvg,
  FlTreeDeciduousRegularSvg,
  FlTreeEvergreenFilledSvg,
  FlTreeEvergreenRegularSvg,
  FlTriangleDownFilledSvg,
  FlTriangleDownRegularSvg,
  FlTriangleFilledSvg,
  FlTriangleLeftFilledSvg,
  FlTriangleLeftRegularSvg,
  FlTriangleRegularSvg,
  FlTriangleRightFilledSvg,
  FlTriangleRightRegularSvg,
  FlTriangleUpFilledSvg,
  FlTriangleUpRegularSvg,
  FlTrophyFilledSvg,
  FlTrophyLockFilledSvg,
  FlTrophyLockRegularSvg,
  FlTrophyOffFilledSvg,
  FlTrophyOffRegularSvg,
  FlTrophyRegularSvg,
  FlTvArrowRightFilledSvg,
  FlTvArrowRightRegularSvg,
  FlTvFilledSvg,
  FlTvRegularSvg,
  FlTvUsbFilledSvg,
  FlTvUsbRegularSvg,
  FlUmbrellaFilledSvg,
  FlUmbrellaRegularSvg,
  FlUninstallAppFilledSvg,
  FlUninstallAppRegularSvg,
  FlUsbPlugFilledSvg,
  FlUsbPlugRegularSvg,
  FlUsbStickFilledSvg,
  FlUsbStickRegularSvg,
  FlVaultColorSvg,
  FlVaultFilledSvg,
  FlVaultRegularSvg,
  FlVehicleBicycleFilledSvg,
  FlVehicleBicycleRegularSvg,
  FlVehicleBusFilledSvg,
  FlVehicleBusRegularSvg,
  FlVehicleCabFilledSvg,
  FlVehicleCabRegularSvg,
  FlVehicleCableCarFilledSvg,
  FlVehicleCableCarRegularSvg,
  FlVehicleCarCollisionFilledSvg,
  FlVehicleCarCollisionRegularSvg,
  FlVehicleCarFilledSvg,
  FlVehicleCarParkingFilledSvg,
  FlVehicleCarParkingRegularSvg,
  FlVehicleCarProfileFilledSvg,
  FlVehicleCarProfileLtrClockFilledSvg,
  FlVehicleCarProfileLtrClockRegularSvg,
  FlVehicleCarProfileLtrFilledSvg,
  FlVehicleCarProfileLtrRegularSvg,
  FlVehicleCarProfileRegularSvg,
  FlVehicleCarProfileRtlFilledSvg,
  FlVehicleCarProfileRtlRegularSvg,
  FlVehicleCarRegularSvg,
  FlVehicleMotorcycleFilledSvg,
  FlVehicleMotorcycleRegularSvg,
  FlVehicleShipFilledSvg,
  FlVehicleShipRegularSvg,
  FlVehicleSubwayClockFilledSvg,
  FlVehicleSubwayClockRegularSvg,
  FlVehicleSubwayFilledSvg,
  FlVehicleSubwayRegularSvg,
  FlVehicleTractorFilledSvg,
  FlVehicleTractorRegularSvg,
  FlVehicleTruckBagFilledSvg,
  FlVehicleTruckBagRegularSvg,
  FlVehicleTruckCubeFilledSvg,
  FlVehicleTruckCubeRegularSvg,
  FlVehicleTruckFilledSvg,
  FlVehicleTruckProfileFilledSvg,
  FlVehicleTruckProfileRegularSvg,
  FlVehicleTruckRegularSvg,
  FlVideo360FilledSvg,
  FlVideo360OffFilledSvg,
  FlVideo360OffRegularSvg,
  FlVideo360RegularSvg,
  FlVideoAddFilledSvg,
  FlVideoAddRegularSvg,
  FlVideoBackgroundEffectFilledSvg,
  FlVideoBackgroundEffectHorizontalFilledSvg,
  FlVideoBackgroundEffectHorizontalRegularSvg,
  FlVideoBackgroundEffectRegularSvg,
  FlVideoBluetoothFilledSvg,
  FlVideoBluetoothRegularSvg,
  FlVideoChatFilledSvg,
  FlVideoChatRegularSvg,
  FlVideoClipFilledSvg,
  FlVideoClipMultipleFilledSvg,
  FlVideoClipMultipleRegularSvg,
  FlVideoClipOffFilledSvg,
  FlVideoClipOffRegularSvg,
  FlVideoClipOptimizeFilledSvg,
  FlVideoClipOptimizeRegularSvg,
  FlVideoClipRegularSvg,
  FlVideoClipWandFilledSvg,
  FlVideoClipWandRegularSvg,
  FlVideoColorSvg,
  FlVideoFilledSvg,
  FlVideoOffFilledSvg,
  FlVideoOffRegularSvg,
  FlVideoPersonCallFilledSvg,
  FlVideoPersonCallRegularSvg,
  FlVideoPersonClockFilledSvg,
  FlVideoPersonClockRegularSvg,
  FlVideoPersonFilledSvg,
  FlVideoPersonOffFilledSvg,
  FlVideoPersonOffRegularSvg,
  FlVideoPersonPulseFilledSvg,
  FlVideoPersonPulseRegularSvg,
  FlVideoPersonRegularSvg,
  FlVideoPersonSparkleFilledSvg,
  FlVideoPersonSparkleOffFilledSvg,
  FlVideoPersonSparkleOffRegularSvg,
  FlVideoPersonSparkleRegularSvg,
  FlVideoPersonStarFilledSvg,
  FlVideoPersonStarOffFilledSvg,
  FlVideoPersonStarOffRegularSvg,
  FlVideoPersonStarRegularSvg,
  FlVideoPlayPauseFilledSvg,
  FlVideoPlayPauseRegularSvg,
  FlVideoProhibitedFilledSvg,
  FlVideoProhibitedRegularSvg,
  FlVideoRecordingFilledSvg,
  FlVideoRecordingRegularSvg,
  FlVideoRegularSvg,
  FlVideoSecurityFilledSvg,
  FlVideoSecurityRegularSvg,
  FlVideoSwitchFilledSvg,
  FlVideoSwitchRegularSvg,
  FlVideoSyncFilledSvg,
  FlVideoSyncRegularSvg,
  FlVideoUsbFilledSvg,
  FlVideoUsbRegularSvg,
  FlViewDesktopFilledSvg,
  FlViewDesktopMobileFilledSvg,
  FlViewDesktopMobileRegularSvg,
  FlViewDesktopRegularSvg,
  FlVirtualNetworkFilledSvg,
  FlVirtualNetworkRegularSvg,
  FlVirtualNetworkToolboxFilledSvg,
  FlVirtualNetworkToolboxRegularSvg,
  FlVoicemailArrowBackFilledSvg,
  FlVoicemailArrowBackRegularSvg,
  FlVoicemailArrowForwardFilledSvg,
  FlVoicemailArrowForwardRegularSvg,
  FlVoicemailArrowSubtractFilledSvg,
  FlVoicemailArrowSubtractRegularSvg,
  FlVoicemailFilledSvg,
  FlVoicemailRegularSvg,
  FlVoicemailShieldFilledSvg,
  FlVoicemailShieldRegularSvg,
  FlVoicemailSubtractFilledSvg,
  FlVoicemailSubtractRegularSvg,
  FlVoteFilledSvg,
  FlVoteRegularSvg,
  FlWalkieTalkieFilledSvg,
  FlWalkieTalkieRegularSvg,
  FlWalletCreditCardFilledSvg,
  FlWalletCreditCardRegularSvg,
  FlWalletFilledSvg,
  FlWalletRegularSvg,
  FlWallpaperFilledSvg,
  FlWallpaperRegularSvg,
  FlWandFilledSvg,
  FlWandRegularSvg,
  FlWarningColorSvg,
  FlWarningFilledSvg,
  FlWarningLockOpenFilledSvg,
  FlWarningLockOpenRegularSvg,
  FlWarningRegularSvg,
  FlWarningShieldFilledSvg,
  FlWarningShieldRegularSvg,
  FlWasherFilledSvg,
  FlWasherRegularSvg,
  FlWaterFilledSvg,
  FlWaterRegularSvg,
  FlWeatherBlowingSnowFilledSvg,
  FlWeatherBlowingSnowRegularSvg,
  FlWeatherCloudyFilledSvg,
  FlWeatherCloudyRegularSvg,
  FlWeatherDrizzleFilledSvg,
  FlWeatherDrizzleRegularSvg,
  FlWeatherDuststormFilledSvg,
  FlWeatherDuststormRegularSvg,
  FlWeatherFogFilledSvg,
  FlWeatherFogRegularSvg,
  FlWeatherHailDayFilledSvg,
  FlWeatherHailDayRegularSvg,
  FlWeatherHailNightFilledSvg,
  FlWeatherHailNightRegularSvg,
  FlWeatherHazeFilledSvg,
  FlWeatherHazeRegularSvg,
  FlWeatherMoonFilledSvg,
  FlWeatherMoonOffFilledSvg,
  FlWeatherMoonOffRegularSvg,
  FlWeatherMoonRegularSvg,
  FlWeatherPartlyCloudyDayFilledSvg,
  FlWeatherPartlyCloudyDayRegularSvg,
  FlWeatherPartlyCloudyNightFilledSvg,
  FlWeatherPartlyCloudyNightRegularSvg,
  FlWeatherRainFilledSvg,
  FlWeatherRainRegularSvg,
  FlWeatherRainShowersDayFilledSvg,
  FlWeatherRainShowersDayRegularSvg,
  FlWeatherRainShowersNightFilledSvg,
  FlWeatherRainShowersNightRegularSvg,
  FlWeatherRainSnowFilledSvg,
  FlWeatherRainSnowRegularSvg,
  FlWeatherSnowFilledSvg,
  FlWeatherSnowRegularSvg,
  FlWeatherSnowShowerDayFilledSvg,
  FlWeatherSnowShowerDayRegularSvg,
  FlWeatherSnowShowerNightFilledSvg,
  FlWeatherSnowShowerNightRegularSvg,
  FlWeatherSnowflakeFilledSvg,
  FlWeatherSnowflakeRegularSvg,
  FlWeatherSquallsFilledSvg,
  FlWeatherSquallsRegularSvg,
  FlWeatherSunnyFilledSvg,
  FlWeatherSunnyHighFilledSvg,
  FlWeatherSunnyHighRegularSvg,
  FlWeatherSunnyLowFilledSvg,
  FlWeatherSunnyLowRegularSvg,
  FlWeatherSunnyRegularSvg,
  FlWeatherThunderstormFilledSvg,
  FlWeatherThunderstormRegularSvg,
  FlWebAssetFilledSvg,
  FlWebAssetRegularSvg,
  FlWhiteboardFilledSvg,
  FlWhiteboardOffFilledSvg,
  FlWhiteboardOffRegularSvg,
  FlWhiteboardRegularSvg,
  FlWifi1FilledSvg,
  FlWifi1RegularSvg,
  FlWifi2FilledSvg,
  FlWifi2RegularSvg,
  FlWifi3FilledSvg,
  FlWifi3RegularSvg,
  FlWifi4FilledSvg,
  FlWifi4RegularSvg,
  FlWifiLockFilledSvg,
  FlWifiLockRegularSvg,
  FlWifiOffFilledSvg,
  FlWifiOffRegularSvg,
  FlWifiSettingsFilledSvg,
  FlWifiSettingsRegularSvg,
  FlWifiWarningFilledSvg,
  FlWifiWarningRegularSvg,
  FlWindowAdFilledSvg,
  FlWindowAdOffFilledSvg,
  FlWindowAdOffRegularSvg,
  FlWindowAdPersonFilledSvg,
  FlWindowAdPersonRegularSvg,
  FlWindowAdRegularSvg,
  FlWindowAppsFilledSvg,
  FlWindowAppsRegularSvg,
  FlWindowArrowUpFilledSvg,
  FlWindowArrowUpRegularSvg,
  FlWindowBrushFilledSvg,
  FlWindowBrushRegularSvg,
  FlWindowBulletListAddFilledSvg,
  FlWindowBulletListAddRegularSvg,
  FlWindowBulletListFilledSvg,
  FlWindowBulletListRegularSvg,
  FlWindowColumnOneFourthLeftFilledSvg,
  FlWindowColumnOneFourthLeftFocusLeftFilledSvg,
  FlWindowColumnOneFourthLeftFocusTopFilledSvg,
  FlWindowColumnOneFourthLeftRegularSvg,
  FlWindowConsoleFilledSvg,
  FlWindowConsoleRegularSvg,
  FlWindowDatabaseFilledSvg,
  FlWindowDatabaseRegularSvg,
  FlWindowDevEditFilledSvg,
  FlWindowDevEditRegularSvg,
  FlWindowDevToolsFilledSvg,
  FlWindowDevToolsRegularSvg,
  FlWindowEditFilledSvg,
  FlWindowEditRegularSvg,
  FlWindowFilledSvg,
  FlWindowFingerprintFilledSvg,
  FlWindowFingerprintRegularSvg,
  FlWindowHeaderHorizontalFilledSvg,
  FlWindowHeaderHorizontalOffFilledSvg,
  FlWindowHeaderHorizontalOffRegularSvg,
  FlWindowHeaderHorizontalRegularSvg,
  FlWindowHeaderVerticalFilledSvg,
  FlWindowHeaderVerticalRegularSvg,
  FlWindowInprivateAccountFilledSvg,
  FlWindowInprivateAccountRegularSvg,
  FlWindowInprivateFilledSvg,
  FlWindowInprivateRegularSvg,
  FlWindowLocationTargetFilledSvg,
  FlWindowLocationTargetRegularSvg,
  FlWindowMultipleFilledSvg,
  FlWindowMultipleRegularSvg,
  FlWindowMultipleSwapFilledSvg,
  FlWindowMultipleSwapRegularSvg,
  FlWindowNewFilledSvg,
  FlWindowNewRegularSvg,
  FlWindowPlayFilledSvg,
  FlWindowPlayRegularSvg,
  FlWindowRegularSvg,
  FlWindowSettingsFilledSvg,
  FlWindowSettingsRegularSvg,
  FlWindowShieldFilledSvg,
  FlWindowShieldRegularSvg,
  FlWindowTextFilledSvg,
  FlWindowTextRegularSvg,
  FlWindowWrenchFilledSvg,
  FlWindowWrenchRegularSvg,
  FlWrenchColorSvg,
  FlWrenchFilledSvg,
  FlWrenchRegularSvg,
  FlWrenchScrewdriverFilledSvg,
  FlWrenchScrewdriverRegularSvg,
  FlWrenchSettingsFilledSvg,
  FlWrenchSettingsRegularSvg,
  FlXboxConsoleFilledSvg,
  FlXboxConsoleRegularSvg,
  FlXboxControllerErrorFilledSvg,
  FlXboxControllerErrorRegularSvg,
  FlXboxControllerFilledSvg,
  FlXboxControllerRegularSvg,
  FlXrayFilledSvg,
  FlXrayRegularSvg,
  FlZoomFitFilledSvg,
  FlZoomFitRegularSvg,
  FlZoomInFilledSvg,
  FlZoomInRegularSvg,
  FlZoomOutFilledSvg,
  FlZoomOutRegularSvg,
} from './index';
export class FluentuiSvgList extends TypeDiv {
  className: 'FluentuiSvgList';
  constructor() {
    super();
    // console.log('FluentuiSvgList constructor . ');
    this.className = 'FluentuiSvgList';
    const $svgStyle: Partial<CSSProperties> = {
      padding: '10px',
      border: '1px solid #ddd'
    };
    this.addChildren(
      new FlAccessTimeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAccessTimeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAccessibilityCheckmarkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAccessibilityCheckmarkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAccessibilityErrorFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAccessibilityErrorRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAccessibilityFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAccessibilityMoreFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAccessibilityMoreRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAccessibilityQuestionMarkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAccessibilityQuestionMarkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAccessibilityRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAddCircleColorSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAddCircleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAddCircleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAddSquareFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAddSquareMultipleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAddSquareMultipleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAddSquareRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAddSubtractCircleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAddSubtractCircleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAirplaneFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAirplaneLandingFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAirplaneLandingRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAirplaneRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAirplaneTakeOffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAirplaneTakeOffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAlbumAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAlbumAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAlbumFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAlbumRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAlertBadgeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAlertBadgeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAlertColorSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAlertFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAlertOffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAlertOffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAlertOnFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAlertOnRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAlertRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAlertSnoozeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAlertSnoozeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAlertUrgentFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAlertUrgentRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAlignBottomFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAlignBottomRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAlignCenterHorizontalFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAlignCenterHorizontalRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAlignCenterVerticalFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAlignCenterVerticalRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAlignDistributeBottom16FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAlignDistributeBottom16RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAlignDistributeLeft16FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAlignDistributeLeft16RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAlignDistributeRight16FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAlignDistributeRight16RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAlignDistributeTop16FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAlignDistributeTop16RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAlignEndHorizontalFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAlignEndHorizontalRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAlignEndVerticalFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAlignEndVerticalRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAlignLeftFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAlignLeftRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAlignRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAlignRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAlignSpaceAroundHorizontalFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAlignSpaceAroundHorizontalRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAlignSpaceAroundVerticalFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAlignSpaceAroundVerticalRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAlignSpaceBetweenHorizontalFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAlignSpaceBetweenHorizontalRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAlignSpaceBetweenVerticalFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAlignSpaceBetweenVerticalRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAlignSpaceEvenlyHorizontalFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAlignSpaceEvenlyHorizontalRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAlignSpaceEvenlyVerticalFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAlignSpaceEvenlyVerticalRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAlignSpaceFitVerticalFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAlignSpaceFitVerticalRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAlignStartHorizontalFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAlignStartHorizontalRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAlignStartVerticalFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAlignStartVerticalRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAlignStraightenFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAlignStraightenRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAlignStretchHorizontalFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAlignStretchHorizontalRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAlignStretchVerticalFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAlignStretchVerticalRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAlignTopFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAlignTopRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAnimalCatFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAnimalCatRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAnimalDogFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAnimalDogRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAnimalPawPrintFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAnimalPawPrintRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAnimalRabbitFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAnimalRabbitOffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAnimalRabbitOffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAnimalRabbitRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAnimalTurtleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAnimalTurtleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAppFolderFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAppFolderRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAppGenericFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAppGenericRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAppRecentFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAppRecentRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAppStore24FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAppStore24RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAppTitleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAppTitleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlApprovalsAppColorSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlApprovalsAppFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlApprovalsAppRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAppsAddInFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAppsAddInRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAppsColorSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAppsFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAppsListDetailFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAppsListDetailRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAppsListFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAppsListRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAppsRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAppsSettingsFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAppsSettingsRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAppsShieldFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAppsShieldRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArchiveArrowBackFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArchiveArrowBackRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArchiveFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArchiveMultipleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArchiveMultipleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArchiveRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArchiveSettingsFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArchiveSettingsRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowAutofitContentFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowAutofitContentRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowAutofitDownFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowAutofitDownRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowAutofitHeightDottedFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowAutofitHeightDottedRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowAutofitHeightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowAutofitHeightInFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowAutofitHeightInRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowAutofitHeightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowAutofitUpFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowAutofitUpRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowAutofitWidthDottedFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowAutofitWidthDottedRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowAutofitWidthFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowAutofitWidthRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowBetweenDownFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowBetweenDownRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowBetweenUpFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowBetweenUpRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowBidirectionalLeftRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowBidirectionalLeftRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowBidirectionalUpDownFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowBidirectionalUpDownRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowBounceFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowBounceRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowCircleDownDoubleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowCircleDownDoubleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowCircleDownFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowCircleDownRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowCircleDownRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowCircleDownRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowCircleDownSplitFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowCircleDownSplitRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowCircleDownUpFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowCircleDownUpRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowCircleLeftFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowCircleLeftRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowCircleRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowCircleRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowCircleUpFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowCircleUpLeftFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowCircleUpLeftRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowCircleUpRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowCircleUpRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowCircleUpRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowClockwiseDashesFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowClockwiseDashesRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowClockwiseDashesSettingsFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowClockwiseDashesSettingsRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowClockwiseFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowClockwiseRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowCollapseAllFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowCollapseAllRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowCounterclockwiseDashesFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowCounterclockwiseDashesRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowCounterclockwiseFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowCounterclockwiseRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowCurveDownLeftFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowCurveDownLeftRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowCurveDownRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowCurveDownRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowCurveUpLeftFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowCurveUpLeftRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowCurveUpRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowCurveUpRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowDownExclamationFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowDownExclamationRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowDownFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowDownLeftFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowDownLeftRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowDownRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowDownRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowDownRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowDownloadFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowDownloadOffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowDownloadOffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowDownloadRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowEjectFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowEjectRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowEnterFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowEnterLeftFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowEnterLeftRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowEnterRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowEnterUpFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowEnterUpRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowExitFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowExitRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowExpandAllFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowExpandAllRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowExpandFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowExpandRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowExportFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowExportLtrFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowExportLtrRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowExportRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowExportRtlFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowExportRtlRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowExportUpFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowExportUpRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowFitFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowFitInFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowFitInRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowFitRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowFlowDiagonalUpRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowFlowDiagonalUpRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowFlowUpRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowFlowUpRightRectangleMultipleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowFlowUpRightRectangleMultipleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowFlowUpRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowForwardDownLightningFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowForwardDownLightningRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowForwardDownPersonFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowForwardDownPersonRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowForwardFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowForwardRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowHookDownLeftFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowHookDownLeftRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowHookDownRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowHookDownRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowHookUpLeftFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowHookUpLeftRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowHookUpRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowHookUpRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowImportFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowImportRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowJoinFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowJoinRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowLeftFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowLeftRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowMaximizeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowMaximizeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowMaximizeVerticalFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowMaximizeVerticalRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowMinimizeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowMinimizeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowMinimizeVerticalFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowMinimizeVerticalRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowMoveFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowMoveInwardFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowMoveInwardRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowMoveRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowNextFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowNextRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowOutlineDownLeftFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowOutlineDownLeftRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowOutlineUpRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowOutlineUpRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowParagraphFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowParagraphRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowPreviousFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowPreviousRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowRedoFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowRedoRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowRepeat1FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowRepeat1RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowRepeatAllFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowRepeatAllOffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowRepeatAllOffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowRepeatAllRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowReplyAllFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowReplyAllRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowReplyDownFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowReplyDownRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowReplyFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowReplyRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowResetFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowResetRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowRotateClockwiseFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowRotateClockwiseRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowRotateCounterclockwiseFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowRotateCounterclockwiseRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowRoutingFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowRoutingRectangleMultipleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowRoutingRectangleMultipleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowRoutingRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowShuffleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowShuffleOffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowShuffleOffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowShuffleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowSortDownFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowSortDownLinesFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowSortDownLinesRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowSortDownRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowSortFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowSortRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowSortUpFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowSortUpLinesFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowSortUpLinesRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowSortUpRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowSplitFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowSplitRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowSprintFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowSprintRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowSquareDownFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowSquareDownRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowSquareUpRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowSquareUpRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowStepBackFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowStepBackRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowStepInDiagonalDownLeftFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowStepInDiagonalDownLeftRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowStepInFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowStepInLeftFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowStepInLeftRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowStepInRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowStepInRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowStepInRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowStepOutFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowStepOutRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowStepOverFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowStepOverRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowSwapFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowSwapRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowSyncCheckmarkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowSyncCheckmarkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowSyncCircleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowSyncCircleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowSyncDismissFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowSyncDismissRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowSyncFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowSyncOffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowSyncOffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowSyncRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowTrendingCheckmarkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowTrendingCheckmarkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowTrendingDownFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowTrendingDownRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowTrendingFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowTrendingLinesColorSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowTrendingLinesFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowTrendingLinesRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowTrendingRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowTrendingSettingsFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowTrendingSettingsRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowTrendingSparkleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowTrendingSparkleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowTrendingTextFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowTrendingTextRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowTrendingWrenchFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowTrendingWrenchRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowTurnBidirectionalDownRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowTurnBidirectionalDownRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowTurnDownLeftFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowTurnDownLeftRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowTurnDownRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowTurnDownRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowTurnDownUpFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowTurnDownUpRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowTurnLeftDownFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowTurnLeftDownRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowTurnLeftRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowTurnLeftRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowTurnLeftUpFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowTurnLeftUpRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowTurnRightDownFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowTurnRightDownRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowTurnRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowTurnRightLeftFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowTurnRightLeftRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowTurnRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowTurnRightUpFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowTurnRightUpRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowTurnUpDownFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowTurnUpDownRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowTurnUpLeftFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowTurnUpLeftRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowUndoFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowUndoRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowUpExclamationFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowUpExclamationRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowUpFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowUpLeftFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowUpLeftRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowUpRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowUpRightDashesFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowUpRightDashesRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowUpRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowUpRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowUploadFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowUploadRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowWrapFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowWrapOffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowWrapOffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowWrapRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowWrapUpToDownFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowWrapUpToDownRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowsBidirectionalFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlArrowsBidirectionalRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAttachArrowRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAttachArrowRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAttachFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAttachRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAttachTextFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAttachTextRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAutoFitHeightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAutoFitHeightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAutoFitWidthFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAutoFitWidthRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAutocorrectFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAutocorrectRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAutosumFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlAutosumRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBackpackAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBackpackAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBackpackFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBackpackRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBackspaceFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBackspaceRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBadgeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBadgeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBalloonFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBalloonRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBarcodeScannerFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBarcodeScannerRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBattery0FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBattery0RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBattery10FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBattery10RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBattery1FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBattery1RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBattery2FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBattery2RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBattery3FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBattery3RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBattery4FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBattery4RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBattery5FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBattery5RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBattery6FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBattery6RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBattery7FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBattery7RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBattery8FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBattery8RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBattery9FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBattery9RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBatteryChargeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBatteryChargeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBatteryCheckmarkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBatteryCheckmarkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBatterySaverFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBatterySaverRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBatteryWarningFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBatteryWarningRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBeachColorSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBeachFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBeachRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBeakerAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBeakerAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBeakerDismissFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBeakerDismissRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBeakerEditFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBeakerEditRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBeakerFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBeakerOffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBeakerOffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBeakerRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBeakerSettingsFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBeakerSettingsRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBedFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBedRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBenchFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBenchRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBezierCurveSquareFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBezierCurveSquareRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBinFullFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBinFullRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBinRecycleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBinRecycleFullFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBinRecycleFullRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBinRecycleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBinderTriangleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBinderTriangleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBluetoothConnectedFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBluetoothConnectedRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBluetoothDisabledFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBluetoothDisabledRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBluetoothFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBluetoothRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBluetoothSearchingFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBluetoothSearchingRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBlurFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBlurRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBoardFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBoardGamesFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBoardGamesRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBoardHeartFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBoardHeartRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBoardRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBoardSplitFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBoardSplitRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBookAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBookAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBookArrowClockwiseFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBookArrowClockwiseRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBookClockFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBookClockRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBookCoinsFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBookCoinsRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBookCompassFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBookCompassRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBookContactsFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBookContactsRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBookDatabaseFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBookDatabaseRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBookDefaultFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBookDismissFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBookDismissRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBookExclamationMarkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBookExclamationMarkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBookFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBookGlobeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBookGlobeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBookInformationFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBookInformationRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBookLetterFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBookLetterRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBookNumberFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBookNumberRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBookOpenFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBookOpenGlobeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBookOpenGlobeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBookOpenMicrophoneFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBookOpenMicrophoneRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBookOpenRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBookPulseFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBookPulseRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBookQuestionMarkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBookQuestionMarkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBookQuestionMarkRtlFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBookQuestionMarkRtlRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBookRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBookSearchFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBookSearchRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBookStarFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBookStarRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBookTemplateFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBookTemplateRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBookThetaFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBookThetaRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBookToolboxFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBookToolboxRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBookmarkAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBookmarkAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBookmarkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBookmarkMultipleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBookmarkMultipleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBookmarkOffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBookmarkOffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBookmarkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBookmarkSearchFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBookmarkSearchRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBorderAllFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBorderAllRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBorderBottomDoubleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBorderBottomDoubleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBorderBottomFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBorderBottomRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBorderBottomThickFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBorderBottomThickRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBorderInsideFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBorderInsideRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBorderLeftFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBorderLeftRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBorderLeftRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBorderLeftRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBorderNoneFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBorderNoneRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBorderOutsideFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBorderOutsideRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBorderOutsideThickFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBorderOutsideThickRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBorderRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBorderRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBorderTopBottomDoubleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBorderTopBottomDoubleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBorderTopBottomFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBorderTopBottomRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBorderTopBottomThickFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBorderTopBottomThickRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBorderTopFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBorderTopRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBotAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBotAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBotFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBotRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBotSparkleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBotSparkleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBowTieFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBowTieRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBowlChopsticksFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBowlChopsticksRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBowlSaladFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBowlSaladRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBoxArrowLeftFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBoxArrowLeftRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBoxArrowUpFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBoxArrowUpRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBoxCheckmarkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBoxCheckmarkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBoxDismissFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBoxDismissRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBoxEditFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBoxEditRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBoxFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBoxMultipleArrowLeftFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBoxMultipleArrowLeftRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBoxMultipleArrowRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBoxMultipleArrowRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBoxMultipleCheckmarkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBoxMultipleCheckmarkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBoxMultipleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBoxMultipleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBoxMultipleSearchFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBoxMultipleSearchRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBoxRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBoxSearchFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBoxSearchRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBoxToolboxFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBoxToolboxRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBracesFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBracesRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBracesVariableFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBracesVariableRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBrainCircuitFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBrainCircuitRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBranchCompareFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBranchCompareRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBranchFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBranchForkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBranchForkHintFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBranchForkHintRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBranchForkLinkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBranchForkLinkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBranchForkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBranchRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBranchRequestFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBranchRequestRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBreakoutRoomFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBreakoutRoomRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBriefcaseFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBriefcaseMedicalFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBriefcaseMedicalRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBriefcaseOffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBriefcaseOffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBriefcaseRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBriefcaseSearchFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBriefcaseSearchRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBrightnessHighFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBrightnessHighRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBrightnessLowFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBrightnessLowRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBroadActivityFeedFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBroadActivityFeedRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBroomFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBroomRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBubbleMultipleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBubbleMultipleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBugArrowCounterclockwiseFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBugArrowCounterclockwiseRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBugFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBugProhibitedFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBugProhibitedRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBugRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBuildingBankFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBuildingBankLinkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBuildingBankLinkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBuildingBankRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBuildingBankToolboxFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBuildingBankToolboxRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBuildingCheckmarkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBuildingCheckmarkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBuildingColorSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBuildingDesktopFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBuildingDesktopRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBuildingFactoryFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBuildingFactoryRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBuildingFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBuildingGovernmentFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBuildingGovernmentRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBuildingGovernmentSearchFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBuildingGovernmentSearchRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBuildingHomeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBuildingHomeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBuildingLighthouseFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBuildingLighthouseRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBuildingMosqueFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBuildingMosqueRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBuildingMultipleColorSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBuildingMultipleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBuildingMultipleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBuildingPeopleColorSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBuildingPeopleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBuildingPeopleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBuildingRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBuildingRetailFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBuildingRetailMoneyFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBuildingRetailMoneyRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBuildingRetailMoreFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBuildingRetailMoreRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBuildingRetailRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBuildingRetailShieldFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBuildingRetailShieldRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBuildingRetailToolboxFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBuildingRetailToolboxRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBuildingShopFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBuildingShopRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBuildingSkyscraperFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBuildingSkyscraperRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBuildingStoreColorSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBuildingSwapFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBuildingSwapRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBuildingTownhouseFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlBuildingTownhouseRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlButtonFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlButtonRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalculatorArrowClockwiseFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalculatorArrowClockwiseRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalculatorFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalculatorMultipleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalculatorMultipleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalculatorRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendar3DayFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendar3DayRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarAgendaFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarAgendaRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarArrowCounterclockwiseFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarArrowCounterclockwiseRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarArrowDownFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarArrowDownRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarArrowRepeatAllFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarArrowRepeatAllRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarArrowRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarArrowRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarAssistantFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarAssistantRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarCancelColorSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarCancelFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarCancelRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarChatFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarChatRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarCheckmarkColorSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarCheckmarkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarCheckmarkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarClockColorSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarClockFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarClockRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarColorSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarDataBarFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarDataBarRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarDateFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarDateRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarDayFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarDayRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarEditFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarEditRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarEmptyFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarEmptyRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarErrorFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarErrorRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarEyeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarEyeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarInfoFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarInfoRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarLockFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarLockRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarLtrFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarLtrRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarMailFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarMailRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarMentionFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarMentionRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarMonthFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarMonthRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarMultipleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarMultipleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarNoteFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarNoteRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarPatternFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarPatternRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarPeopleColorSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarPersonFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarPersonRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarPhoneFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarPhoneRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarPlayFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarPlayRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarQuestionMarkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarQuestionMarkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarRecordFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarRecordRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarReplyFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarReplyRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarRtlFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarRtlRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarSearchFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarSearchRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarSettingsFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarSettingsRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarShieldFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarShieldRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarSparkleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarSparkleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarStarFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarStarRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarSyncFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarSyncRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarTemplateFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarTemplateRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarTodayFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarTodayRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarToolboxFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarToolboxRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarVideoFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarVideoRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarWeekNumbersFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarWeekNumbersRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarWeekStartFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarWeekStartRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarWorkWeekFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalendarWorkWeekRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCallAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCallAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCallCheckmarkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCallCheckmarkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCallConnectingFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCallConnectingRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCallDismissFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCallDismissRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCallEndFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCallEndRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCallExclamationFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCallExclamationRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCallFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCallForwardFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCallForwardRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCallInboundFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCallInboundRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCallMissedFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCallMissedRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCallOutboundFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCallOutboundRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCallParkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCallParkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCallPauseFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCallPauseRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCallProhibitedFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCallProhibitedRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCallRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCallTransferFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCallTransferRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCallWarningFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCallWarningRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalligraphyPenCheckmarkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalligraphyPenCheckmarkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalligraphyPenErrorFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalligraphyPenErrorRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalligraphyPenFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalligraphyPenQuestionMarkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalligraphyPenQuestionMarkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCalligraphyPenRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCameraAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCameraAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCameraArrowUpFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCameraArrowUpRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCameraColorSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCameraDomeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCameraDomeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCameraEditFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCameraEditRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCameraFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCameraOffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCameraOffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCameraRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCameraSparklesFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCameraSparklesRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCameraSwitchFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCameraSwitchRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCardUiFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCardUiPortraitFlipFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCardUiPortraitFlipRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCardUiRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCaretDownFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCaretDownRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCaretDownRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCaretDownRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCaretLeftFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCaretLeftRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCaretRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCaretRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCaretUpFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCaretUpRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCartFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCartRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCastFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCastMultipleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCastMultipleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCastRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCatchUpFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCatchUpRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCd16FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCd16RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCellular3gFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCellular3gRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCellular4gFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCellular4gRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCellular5gFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCellular5gRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCellularData1FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCellularData1RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCellularData2FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCellularData2RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCellularData3FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCellularData3RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCellularData4FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCellularData4RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCellularData5FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCellularData5RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCellularOffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCellularOffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCellularWarningFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCellularWarningRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCenterHorizontalFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCenterHorizontalRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCenterVerticalFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCenterVerticalRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCertificateFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCertificateRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChannelAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChannelAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChannelAlertFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChannelAlertRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChannelArrowLeftFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChannelArrowLeftRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChannelDismissFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChannelDismissRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChannelFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChannelRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChannelShareFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChannelShareRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChannelSubtractFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChannelSubtractRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChartMultipleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChartMultipleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChartPersonFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChartPersonRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChatAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChatAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChatArrowBackDownFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChatArrowBackDownRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChatArrowBackFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChatArrowBackRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChatArrowDoubleBackFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChatArrowDoubleBackRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChatBubblesQuestionColorSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChatBubblesQuestionFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChatBubblesQuestionRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChatCursorFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChatCursorRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChatDismissFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChatDismissRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChatEmptyFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChatEmptyRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChatFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChatHelpFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChatHelpRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChatLockFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChatLockRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChatMailFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChatMailRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChatMoreColorSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChatMultipleColorSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChatMultipleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChatMultipleHeartFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChatMultipleHeartRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChatMultipleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChatOffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChatOffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChatRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChatSettingsFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChatSettingsRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChatSparkleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChatSparkleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChatVideoFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChatVideoRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChatWarningFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChatWarningRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCheckFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCheckRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCheckbox1FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCheckbox1RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCheckbox2FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCheckbox2RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCheckboxArrowRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCheckboxArrowRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCheckboxCheckedFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCheckboxCheckedRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCheckboxCheckedSyncFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCheckboxCheckedSyncRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCheckboxColorSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCheckboxIndeterminateFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCheckboxIndeterminateRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCheckboxPersonColorSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCheckboxPersonFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCheckboxPersonRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCheckboxUncheckedFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCheckboxUncheckedRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCheckboxWarningFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCheckboxWarningRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCheckmarkCircleColorSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCheckmarkCircleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCheckmarkCircleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCheckmarkCircleSquareFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCheckmarkCircleSquareRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCheckmarkCircleWarningFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCheckmarkCircleWarningRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCheckmarkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCheckmarkLockFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCheckmarkLockRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCheckmarkNoteFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCheckmarkNoteRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCheckmarkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCheckmarkSquareFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCheckmarkSquareRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCheckmarkStarburstFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCheckmarkStarburstRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCheckmarkUnderlineCircleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCheckmarkUnderlineCircleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChessFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChessRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChevronCircleDownFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChevronCircleDownRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChevronCircleLeftFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChevronCircleLeftRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChevronCircleRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChevronCircleRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChevronCircleUpFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChevronCircleUpRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChevronDoubleDownFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChevronDoubleDownRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChevronDoubleLeftFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChevronDoubleLeftRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChevronDoubleRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChevronDoubleRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChevronDoubleUpFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChevronDoubleUpRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChevronDownFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChevronDownRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChevronDownUpFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChevronDownUpRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChevronLeftFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChevronLeftRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChevronRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChevronRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChevronUpDownFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChevronUpDownRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChevronUpFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlChevronUpRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCircleEditFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCircleEditRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCircleEraserFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCircleEraserRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCircleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCircleHalfFillFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCircleHalfFillRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCircleHighlightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCircleHighlightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCircleHintFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCircleHintHalfVerticalFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCircleHintHalfVerticalRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCircleHintRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCircleImageFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCircleImageRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCircleLineFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCircleLineRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCircleMultipleSubtractCheckmarkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCircleMultipleSubtractCheckmarkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCircleOffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCircleOffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCircleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCircleShadowFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCircleShadowRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCircleSmallFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCircleSmallRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCityFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCityRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClassFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClassRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClassificationFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClassificationRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClearFormattingFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClearFormattingRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClipboard3DayFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClipboard3DayRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClipboardArrowRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClipboardArrowRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClipboardBrushFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClipboardBrushRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClipboardBulletListFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClipboardBulletListLtrFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClipboardBulletListLtrRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClipboardBulletListRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClipboardBulletListRtlFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClipboardBulletListRtlRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClipboardCheckmarkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClipboardCheckmarkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClipboardClockFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClipboardClockRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClipboardCodeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClipboardCodeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClipboardColorSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClipboardDataBarFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClipboardDataBarRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClipboardDayFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClipboardDayRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClipboardEditFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClipboardEditRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClipboardErrorFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClipboardErrorRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClipboardFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClipboardHeartFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClipboardHeartRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClipboardImageFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClipboardImageRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClipboardLetterFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClipboardLetterRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClipboardLinkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClipboardLinkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClipboardMathFormulaFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClipboardMathFormulaRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClipboardMonthFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClipboardMonthRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClipboardMoreFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClipboardMoreRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClipboardNoteFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClipboardNoteRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClipboardNumber123FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClipboardNumber123RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClipboardPasteFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClipboardPasteRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClipboardPulseFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClipboardPulseRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClipboardRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClipboardSearchFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClipboardSearchRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClipboardSettingsFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClipboardSettingsRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClipboardTaskAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClipboardTaskAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClipboardTaskFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClipboardTaskListFilledLtrSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClipboardTaskListFilledRtlSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClipboardTaskListLtrFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClipboardTaskListLtrRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClipboardTaskListRegularLtrSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClipboardTaskListRegularRtlSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClipboardTaskListRtlFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClipboardTaskListRtlRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClipboardTaskRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClipboardTextEditColorSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClipboardTextEditFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClipboardTextEditRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClipboardTextLtrFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClipboardTextLtrRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClipboardTextRtlFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClipboardTextRtlRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClockAlarmColorSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClockAlarmFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClockAlarmRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClockArrowDownloadFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClockArrowDownloadRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClockBillFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClockBillRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClockDismissFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClockDismissRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClockFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClockLockFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClockLockRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClockPauseFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClockPauseRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClockRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClockToolboxFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClockToolboxRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClosedCaptionFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClosedCaptionOffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClosedCaptionOffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClosedCaptionRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClothesHangerFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlClothesHangerRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCloudAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCloudAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCloudArchiveFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCloudArchiveRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCloudArrowDownFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCloudArrowDownRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCloudArrowRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCloudArrowRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCloudArrowUpFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCloudArrowUpRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCloudBeakerFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCloudBeakerRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCloudBidirectionalFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCloudBidirectionalRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCloudCheckmarkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCloudCheckmarkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCloudColorSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCloudCubeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCloudCubeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCloudDatabaseFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCloudDatabaseRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCloudDesktopFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCloudDesktopRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCloudDismissColorSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCloudDismissFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCloudDismissRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCloudEditFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCloudEditRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCloudErrorFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCloudErrorRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCloudFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCloudFlowFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCloudFlowRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCloudLinkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCloudLinkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCloudOffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCloudOffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCloudRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCloudSwapFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCloudSwapRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCloudSyncFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCloudSyncRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCloudWordsFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCloudWordsRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCloverFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCloverRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCodeBlockColorSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCodeBlockFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCodeBlockRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCodeCircleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCodeCircleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCodeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCodeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCodeTextEditFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCodeTextEditRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCodeTextFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCodeTextRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCoinMultipleColorSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCoinMultipleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCoinMultipleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCoinStackFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCoinStackRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCollectionsAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCollectionsAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCollectionsFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCollectionsRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlColorBackgroundAccentRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlColorBackgroundFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlColorBackgroundRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlColorFillAccentRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlColorFillFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlColorFillRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlColorFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlColorLineAccentRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlColorLineFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlColorLineRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlColorRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlColumnArrowRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlColumnArrowRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlColumnDoubleCompareFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlColumnDoubleCompareRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlColumnEditFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlColumnEditRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlColumnFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlColumnRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlColumnSingleCompareFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlColumnSingleCompareRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlColumnTripleEditFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlColumnTripleEditRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlColumnTripleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlColumnTripleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCommaFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCommaRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCommentAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCommentAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCommentArrowLeftFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCommentArrowLeftRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCommentArrowRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCommentArrowRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCommentBadgeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCommentBadgeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCommentCheckmarkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCommentCheckmarkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCommentDismissFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCommentDismissRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCommentEditFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCommentEditRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCommentErrorFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCommentErrorRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCommentFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCommentLightningFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCommentLightningRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCommentLinkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCommentLinkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCommentMentionFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCommentMentionRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCommentMultipleCheckmarkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCommentMultipleCheckmarkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCommentMultipleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCommentMultipleLinkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCommentMultipleLinkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCommentMultipleMentionFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCommentMultipleMentionRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCommentMultipleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCommentNoteFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCommentNoteRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCommentOffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCommentOffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCommentQuoteFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCommentQuoteRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCommentRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCommentTextFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCommentTextRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCommunicationFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCommunicationPersonFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCommunicationPersonRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCommunicationRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCommunicationShieldFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCommunicationShieldRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCompassNorthwestFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCompassNorthwestRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlComponent2DoubleTapSwipeDown24FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlComponent2DoubleTapSwipeDown24RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlComponent2DoubleTapSwipeUp24FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlComponent2DoubleTapSwipeUp24RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlComposeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlComposeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCone16FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCone16RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlConferenceRoomFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlConferenceRoomRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlConnectedFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlConnectedRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlConnectorFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlConnectorRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlContactCardFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlContactCardGroupFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlContactCardGroupRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlContactCardLinkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlContactCardLinkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlContactCardRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlContactCardRibbonFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlContactCardRibbonRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlContentSettingsFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlContentSettingsRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlContentViewFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlContentViewGalleryFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlContentViewGalleryLightningFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlContentViewGalleryLightningRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlContentViewGalleryRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlContentViewRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlContractDownLeftFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlContractDownLeftRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlContractUpRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlContractUpRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlControlButtonFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlControlButtonRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlConvertRangeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlConvertRangeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCookiesFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCookiesRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCopyAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCopyAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCopyArrowRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCopyArrowRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCopyFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCopyRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCopySelectFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCopySelectRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCouchFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCouchRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCreditCardClockFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCreditCardClockRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCreditCardPersonFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCreditCardPersonRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCreditCardToolboxFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCreditCardToolboxRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCropArrowRotateFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCropArrowRotateRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCropFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCropInterimFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCropInterimOffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCropInterimOffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCropInterimRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCropRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCrownFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCrownRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCubeAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCubeAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCubeArrowCurveDownFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCubeArrowCurveDownRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCubeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCubeLinkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCubeLinkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCubeMultipleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCubeMultipleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCubeQuickFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCubeQuickRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCubeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCubeRotateFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCubeRotateRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCubeSyncFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCubeSyncRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCubeTreeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCubeTreeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCurrencyDollarEuroFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCurrencyDollarEuroRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCurrencyDollarRupeeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCurrencyDollarRupeeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCursorClickFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCursorClickRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCursorFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCursorHoverFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCursorHoverOffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCursorHoverOffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCursorHoverRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCursorProhibitedFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCursorProhibitedRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCursorRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCutFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlCutRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDarkThemeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDarkThemeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDataAreaFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDataAreaRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDataBarHorizontalFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDataBarHorizontalRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDataBarVerticalAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDataBarVerticalAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDataBarVerticalArrowDownFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDataBarVerticalArrowDownRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDataBarVerticalAscendingColorSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDataBarVerticalAscendingFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDataBarVerticalAscendingRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDataBarVerticalFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDataBarVerticalRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDataBarVerticalStarFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDataBarVerticalStarRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDataFunnelFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDataFunnelRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDataHistogramFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDataHistogramRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDataLineFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDataLineRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDataPieFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDataPieRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDataScatterFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDataScatterRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDataSunburstFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDataSunburstRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDataTreemapFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDataTreemapRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDataTrendingFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDataTrendingRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDataUsageCheckmarkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDataUsageCheckmarkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDataUsageEditFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDataUsageEditRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDataUsageFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDataUsageRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDataUsageSettingsFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDataUsageSettingsRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDataUsageToolboxFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDataUsageToolboxRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDataWaterfallFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDataWaterfallRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDataWhiskerFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDataWhiskerRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDatabaseArrowDownFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDatabaseArrowDownRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDatabaseArrowRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDatabaseArrowRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDatabaseArrowUpFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDatabaseArrowUpRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDatabaseFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDatabaseLightningFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDatabaseLightningRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDatabaseLinkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDatabaseLinkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDatabaseMultipleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDatabaseMultipleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDatabasePersonFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDatabasePersonRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDatabasePlugConnectedFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDatabasePlugConnectedRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDatabaseRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDatabaseSearchFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDatabaseSearchRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDatabaseSwitchFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDatabaseSwitchRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDatabaseWarningFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDatabaseWarningRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDatabaseWindowFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDatabaseWindowRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDecimalArrowLeftFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDecimalArrowLeftRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDecimalArrowRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDecimalArrowRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDeleteArrowBackFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDeleteArrowBackRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDeleteDismissFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDeleteDismissRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDeleteFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDeleteLinesFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDeleteLinesRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDeleteOffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDeleteOffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDeleteRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDentistFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDentistRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDesignIdeasFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDesignIdeasRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDeskFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDeskRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDesktopArrowDownFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDesktopArrowDownRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDesktopArrowRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDesktopArrowRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDesktopCheckmarkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDesktopCheckmarkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDesktopCursorFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDesktopCursorRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDesktopEditFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDesktopEditRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDesktopFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDesktopFlowFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDesktopFlowRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDesktopKeyboardFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDesktopKeyboardRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDesktopMacFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDesktopMacRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDesktopOffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDesktopOffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDesktopPulseFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDesktopPulseRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDesktopRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDesktopSignalFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDesktopSignalRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDesktopSpeakerFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDesktopSpeakerOffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDesktopSpeakerOffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDesktopSpeakerRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDesktopSyncFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDesktopSyncRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDesktopToolboxFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDesktopToolboxRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDesktopTowerFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDesktopTowerRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDeveloperBoardFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDeveloperBoardLightningFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDeveloperBoardLightningRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDeveloperBoardLightningToolboxFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDeveloperBoardLightningToolboxRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDeveloperBoardRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDeveloperBoardSearchFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDeveloperBoardSearchRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDeviceEqFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDeviceEqRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDeviceMeetingRoomFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDeviceMeetingRoomRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDeviceMeetingRoomRemoteFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDeviceMeetingRoomRemoteRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDiagramFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDiagramRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDialpadFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDialpadOffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDialpadOffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDialpadQuestionMarkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDialpadQuestionMarkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDialpadRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDiamondFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDiamondRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDirectionsFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDirectionsRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDishwasherFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDishwasherRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDismissCircleColorSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDismissCircleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDismissCircleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDismissFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDismissRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDismissSquareFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDismissSquareMultipleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDismissSquareMultipleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDismissSquareRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDiversityFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDiversityRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDividerShortFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDividerShortRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDividerTallFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDividerTallRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDockFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDockRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDockRowFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDockRowRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDoctorFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDoctorRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocument100FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocument100RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentAddColorSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentArrowDownFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentArrowDownRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentArrowLeftFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentArrowLeftRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentArrowRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentArrowRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentArrowUpFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentArrowUpRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentBorderFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentBorderPrintFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentBorderPrintRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentBorderRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentBriefcaseFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentBriefcaseRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentBulletListArrowLeftFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentBulletListArrowLeftRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentBulletListClockFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentBulletListClockRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentBulletListCubeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentBulletListCubeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentBulletListFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentBulletListMultipleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentBulletListMultipleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentBulletListOffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentBulletListOffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentBulletListRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentCatchUpFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentCatchUpRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentCheckmarkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentCheckmarkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentChevronDoubleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentChevronDoubleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentColorSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentCopyFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentCopyRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentCssFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentCssRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentCubeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentCubeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentDataFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentDataLinkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentDataLinkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentDataLockFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentDataLockRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentDataRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentDatabaseFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentDatabaseRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentDismissFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentDismissRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentEditFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentEditRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentEndnoteFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentEndnoteRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentErrorFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentErrorRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentFitFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentFitRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentFlowchartFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentFlowchartRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentFolderColorSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentFolderFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentFolderRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentFooterDismissFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentFooterDismissRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentFooterFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentFooterRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentGlobeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentGlobeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentHeaderArrowDownFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentHeaderArrowDownRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentHeaderDismissFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentHeaderDismissRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentHeaderFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentHeaderFooterFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentHeaderFooterRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentHeaderRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentHeartFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentHeartPulseFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentHeartPulseRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentHeartRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentImageFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentImageRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentJavaFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentJavaRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentJavascriptFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentJavascriptRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentKeyFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentKeyRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentLandscapeDataFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentLandscapeDataRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentLandscapeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentLandscapeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentLandscapeSplitFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentLandscapeSplitHintFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentLandscapeSplitHintRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentLandscapeSplitRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentLightningFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentLightningRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentLinkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentLinkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentLockColorSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentLockFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentLockRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentMarginsFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentMarginsRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentMentionFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentMentionRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentMultipleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentMultiplePercentFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentMultiplePercentRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentMultipleProhibitedFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentMultipleProhibitedRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentMultipleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentMultipleSyncFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentMultipleSyncRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentOnePageAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentOnePageAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentOnePageColumnsFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentOnePageColumnsRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentOnePageFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentOnePageLinkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentOnePageLinkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentOnePageMultipleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentOnePageMultipleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentOnePageMultipleSparkleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentOnePageMultipleSparkleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentOnePageRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentOnePageSparkleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentOnePageSparkleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentPageBottomCenterFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentPageBottomCenterRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentPageBottomLeftFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentPageBottomLeftRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentPageBottomRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentPageBottomRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentPageBreakFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentPageBreakRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentPageNumberFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentPageNumberRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentPageTopCenterFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentPageTopCenterRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentPageTopLeftFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentPageTopLeftRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentPageTopRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentPageTopRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentPdfFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentPdfRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentPercentFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentPercentRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentPersonFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentPersonRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentPillFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentPillRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentPrintFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentPrintRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentProhibitedFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentProhibitedRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentQuestionMarkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentQuestionMarkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentQueueAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentQueueAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentQueueFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentQueueMultipleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentQueueMultipleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentQueueRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentRibbonFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentRibbonRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentSassFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentSassRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentSaveFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentSaveRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentSearchFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentSearchRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentSettingsFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentSettingsRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentSignatureFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentSignatureRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentSplitHintFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentSplitHintOffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentSplitHintOffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentSplitHintRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentSyncFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentSyncRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentTableArrowRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentTableArrowRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentTableCheckmarkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentTableCheckmarkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentTableCubeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentTableCubeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentTableFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentTableRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentTableSearchFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentTableSearchRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentTableTruckFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentTableTruckRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentTargetFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentTargetRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentTextClockFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentTextClockRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentTextExtractFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentTextExtractRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentTextFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentTextLinkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentTextLinkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentTextRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentTextToolboxFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentTextToolboxRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentToolboxFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentToolboxRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentWidthFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentWidthRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentYmlFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDocumentYmlRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDoorArrowLeftFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDoorArrowLeftRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDoorArrowRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDoorArrowRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDoorFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDoorRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDoorTagFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDoorTagRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDoubleSwipeDownFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDoubleSwipeDownRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDoubleSwipeUpFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDoubleSwipeUpRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDoubleTapSwipeDownFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDoubleTapSwipeDownRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDoubleTapSwipeUpFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDoubleTapSwipeUpRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDraftsFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDraftsRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDragFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDragRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDrawImageFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDrawImageRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDrawShapeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDrawShapeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDrawTextFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDrawTextRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDrawerAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDrawerAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDrawerArrowDownloadFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDrawerArrowDownloadRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDrawerDismissFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDrawerDismissRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDrawerFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDrawerPlayFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDrawerPlayRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDrawerRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDrawerSubtractFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDrawerSubtractRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDrinkBeerFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDrinkBeerRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDrinkBottleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDrinkBottleOffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDrinkBottleOffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDrinkBottleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDrinkCoffeeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDrinkCoffeeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDrinkMargaritaFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDrinkMargaritaRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDrinkToGoFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDrinkToGoRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDrinkWineFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDrinkWineRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDriveTrainFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDriveTrainRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDropFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDropRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDualScreenAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDualScreenAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDualScreenArrowRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDualScreenArrowRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDualScreenArrowUpFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDualScreenArrowUpRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDualScreenClockFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDualScreenClockRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDualScreenClosedAlertFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDualScreenClosedAlertRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDualScreenDesktopFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDualScreenDesktopRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDualScreenDismissFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDualScreenDismissRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDualScreenFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDualScreenGroupFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDualScreenGroupRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDualScreenHeaderFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDualScreenHeaderRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDualScreenLockFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDualScreenLockRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDualScreenMirrorFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDualScreenMirrorRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDualScreenPaginationFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDualScreenPaginationRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDualScreenRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDualScreenSettingsFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDualScreenSettingsRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDualScreenSpanFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDualScreenSpanRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDualScreenSpeakerFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDualScreenSpeakerRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDualScreenStatusBarFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDualScreenStatusBarRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDualScreenTabletFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDualScreenTabletRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDualScreenUpdateFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDualScreenUpdateRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDualScreenVerticalScrollFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDualScreenVerticalScrollRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDualScreenVibrateFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDualScreenVibrateRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDumbbellFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDumbbellRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDustFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlDustRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEarthFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEarthLeafFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEarthLeafRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEarthRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEditArrowBackFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEditArrowBackRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEditColorSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEditFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEditLineHorizontal3FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEditLineHorizontal3RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEditLockFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEditLockRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEditOffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEditOffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEditPersonFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEditPersonRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEditProhibitedFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEditProhibitedRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEditRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEditSettingsFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEditSettingsRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlElevatorFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlElevatorRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEmojiAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEmojiAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEmojiAngryFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEmojiAngryRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEmojiEditFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEmojiEditRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEmojiFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEmojiHandFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEmojiHandRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEmojiHintFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEmojiHintRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEmojiLaughFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEmojiLaughRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEmojiMehFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEmojiMehRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEmojiMemeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEmojiMemeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEmojiMultipleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEmojiMultipleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEmojiRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEmojiSadFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEmojiSadRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEmojiSadSlightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEmojiSadSlightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEmojiSmileSlightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEmojiSmileSlightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEmojiSparkleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEmojiSparkleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEmojiSurpriseFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEmojiSurpriseRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEngineFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEngineRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEqualCircleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEqualCircleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEqualOffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEqualOffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEraserFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEraserMediumFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEraserMediumRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEraserRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEraserSegmentFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEraserSegmentRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEraserSmallFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEraserSmallRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEraserToolFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEraserToolRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlErrorCircleColorSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlErrorCircleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlErrorCircleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlErrorCircleSettingsFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlErrorCircleSettingsRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlExpandUpLeftFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlExpandUpLeftRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlExpandUpRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlExpandUpRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlExtendedDockFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlExtendedDockRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEyeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEyeLinesFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEyeLinesRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEyeOffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEyeOffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEyeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEyeTrackingFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEyeTrackingOffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEyeTrackingOffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEyeTrackingRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEyedropperFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEyedropperOffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEyedropperOffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlEyedropperRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFStopFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFStopRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFastAccelerationFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFastAccelerationRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFastForwardFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFastForwardRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFaxFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFaxRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFeedFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFeedRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFilmstripFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFilmstripImageFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFilmstripImageRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFilmstripPlayFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFilmstripPlayRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFilmstripRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFilmstripSplitFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFilmstripSplitRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFilterAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFilterAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFilterDismissFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFilterDismissRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFilterFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFilterRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFilterSyncFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFilterSyncRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFingerprintFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFingerprintRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFireFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFireRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFireplaceFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFireplaceRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFixedWidthFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFixedWidthRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFlagCheckeredFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFlagCheckeredRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFlagClockFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFlagClockRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFlagFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFlagOffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFlagOffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFlagPrideFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFlagPrideIntersexInclusiveProgressFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFlagPridePhiladelphiaFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFlagPrideProgressFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFlagRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFlashAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFlashAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFlashAutoFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFlashAutoRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFlashCheckmarkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFlashCheckmarkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFlashFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFlashFlowFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFlashFlowRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFlashOffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFlashOffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFlashPlayFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFlashPlayRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFlashRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFlashSettingsFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFlashSettingsRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFlashSparkleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFlashSparkleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFlashlightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFlashlightOffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFlashlightOffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFlashlightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFlipHorizontalFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFlipHorizontalRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFlipVerticalFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFlipVerticalRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFlowFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFlowRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFlowchartCircleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFlowchartCircleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFlowchartFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFlowchartRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFluentFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFluentRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFluidFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFluidRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFolderAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFolderAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFolderArrowLeftFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFolderArrowLeftRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFolderArrowRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFolderArrowRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFolderArrowUpFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFolderArrowUpRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFolderBriefcaseFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFolderBriefcaseRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFolderDocumentFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFolderDocumentRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFolderFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFolderGlobeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFolderGlobeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFolderLightningFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFolderLightningRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFolderLinkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFolderLinkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFolderListFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFolderListRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFolderMailFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFolderMailRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFolderOpenFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFolderOpenRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFolderOpenVerticalFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFolderOpenVerticalRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFolderPeopleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFolderPeopleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFolderPersonFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFolderPersonRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFolderProhibitedFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFolderProhibitedRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFolderRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFolderSearchFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFolderSearchRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFolderSwapFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFolderSwapRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFolderSyncFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFolderSyncRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFolderZipFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFolderZipRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFontDecreaseFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFontDecreaseRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFontIncreaseFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFontIncreaseRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFontSpaceTrackingInFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFontSpaceTrackingInRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFontSpaceTrackingOutFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFontSpaceTrackingOutRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFoodAppleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFoodAppleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFoodCakeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFoodCakeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFoodCarrotFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFoodCarrotRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFoodChickenLegFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFoodChickenLegRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFoodColorSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFoodEggFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFoodEggRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFoodFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFoodFishFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFoodFishRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFoodGrainsFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFoodGrainsRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFoodPizzaFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFoodPizzaRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFoodRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFoodToastFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFoodToastRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFormFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFormMultipleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFormMultipleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFormNewFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFormNewRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFormRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFormSparkleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFormSparkleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFps120FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFps120RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFps240FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFps240RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFps30FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFps30RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFps60FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFps60RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFps960FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFps960RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFrameFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFrameRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFullScreenMaximizeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFullScreenMaximizeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFullScreenMinimizeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlFullScreenMinimizeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGameChatColorSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGameChatFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGameChatRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGamesFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGamesRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGanttChartFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGanttChartRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGasFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGasPumpFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGasPumpRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGasRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGatherFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGatherRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGaugeAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGaugeAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGaugeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGaugeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGavelFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGavelProhibitedFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGavelProhibitedRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGavelRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGestureFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGestureRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGifFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGifRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGiftCardAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGiftCardAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGiftCardArrowRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGiftCardArrowRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGiftCardFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGiftCardMoneyFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGiftCardMoneyRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGiftCardMultipleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGiftCardMultipleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGiftCardRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGiftFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGiftOpenFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGiftOpenRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGiftRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGlanceFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGlanceHorizontalFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGlanceHorizontalRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGlanceHorizontalSparklesFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGlanceHorizontalSparklesRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGlanceRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGlassesFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGlassesOffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGlassesOffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGlassesRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGlobeAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGlobeAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGlobeArrowForwardFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGlobeArrowForwardRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGlobeArrowUpFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGlobeArrowUpRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGlobeClockFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGlobeClockRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGlobeDesktopFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGlobeDesktopRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGlobeErrorFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGlobeErrorRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGlobeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGlobeLocationFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGlobeLocationRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGlobeOffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGlobeOffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGlobePersonFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGlobePersonRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGlobeProhibitedFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGlobeProhibitedRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGlobeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGlobeSearchFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGlobeSearchRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGlobeShieldColorSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGlobeShieldFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGlobeShieldRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGlobeStarFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGlobeStarRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGlobeSurfaceFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGlobeSurfaceRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGlobeSyncFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGlobeSyncRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGlobeVideoFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGlobeVideoRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGlobeWarningFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGlobeWarningRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGridDotsFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGridDotsRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGridFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGridKanbanFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGridKanbanRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGridRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGroupDismissFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGroupDismissRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGroupFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGroupListFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGroupListRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGroupRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGroupReturnFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGroupReturnRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGuardianFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGuardianRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGuestAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGuestAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGuestFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGuestRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGuitarFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlGuitarRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHandDrawFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHandDrawRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHandLeftChatFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHandLeftChatRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHandLeftFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHandLeftRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHandOpenHeartFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHandOpenHeartRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHandPointFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHandPointRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHandRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHandRightOffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHandRightOffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHandRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHandWaveFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHandWaveRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHandshakeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHandshakeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHapticStrongFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHapticStrongRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHapticWeakFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHapticWeakRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHardDriveFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHardDriveRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHatGraduationAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHatGraduationAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHatGraduationFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHatGraduationRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHatGraduationSparkleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHatGraduationSparkleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHdFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHdRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHdrFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHdrOffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHdrOffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHdrRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHeadphonesColorSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHeadphonesFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHeadphonesRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHeadphonesSoundWaveFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHeadphonesSoundWaveRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHeadsetAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHeadsetAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHeadsetColorSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHeadsetFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHeadsetRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHeadsetVrFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHeadsetVrRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHeartBrokenFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHeartBrokenRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHeartCircleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHeartCircleHintFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHeartCircleHintRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHeartCircleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHeartFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHeartOffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHeartOffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHeartPulseCheckmarkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHeartPulseCheckmarkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHeartPulseErrorFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHeartPulseErrorRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHeartPulseFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHeartPulseRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHeartPulseWarningFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHeartPulseWarningRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHeartRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHexagonFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHexagonRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHexagonSparkleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHexagonSparkleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHexagonThreeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHexagonThreeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHighlightAccentFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHighlightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHighlightLinkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHighlightLinkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHighlightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHighwayFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHighwayRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHistoryColorSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHistoryDismissFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHistoryDismissRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHistoryFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHistoryRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHomeAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHomeAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHomeCheckmarkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHomeCheckmarkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHomeColorSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHomeDatabaseFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHomeDatabaseRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHomeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHomeGarageFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHomeGarageRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHomeHeartFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHomeHeartRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHomeMoreFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHomeMoreRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHomePersonFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHomePersonRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHomeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHomeSplitFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHomeSplitRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHourglassFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHourglassHalfFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHourglassHalfRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHourglassOneQuarterFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHourglassOneQuarterRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHourglassRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHourglassThreeQuarterFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlHourglassThreeQuarterRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlIconsFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlIconsRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlImageAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlImageAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlImageAltTextFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlImageAltTextRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlImageArrowBackFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlImageArrowBackRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlImageArrowCounterclockwiseFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlImageArrowCounterclockwiseRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlImageArrowForwardFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlImageArrowForwardRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlImageBorderFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlImageBorderRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlImageCircleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlImageCircleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlImageCopyFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlImageCopyRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlImageEditFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlImageEditRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlImageFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlImageGlobeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlImageGlobeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlImageMultipleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlImageMultipleOffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlImageMultipleOffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlImageMultipleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlImageOffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlImageOffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlImageProhibitedFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlImageProhibitedRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlImageReflectionFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlImageReflectionRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlImageRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlImageSearchFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlImageSearchRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlImageShadowFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlImageShadowRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlImageSparkleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlImageSparkleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlImageSplitFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlImageSplitRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlImageStackFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlImageStackRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlImageTableFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlImageTableRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlImmersiveReaderFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlImmersiveReaderRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlImportantFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlImportantRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlIncognitoFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlIncognitoRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlInfoFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlInfoRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlInfoShieldFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlInfoShieldRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlInkStrokeArrowDownFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlInkStrokeArrowDownRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlInkStrokeArrowUpDownFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlInkStrokeArrowUpDownRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlInkStrokeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlInkStrokeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlInkingToolAccentFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlInkingToolFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlInkingToolRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlInprivateAccountFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlInprivateAccountRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlInsertFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlInsertRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlIosArrow24FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlIosArrow24RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlIosArrowLtr24FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlIosArrowLtr24RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlIosArrowRtl24FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlIosArrowRtl24RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlIosChevronRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlIosChevronRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlIotAlertFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlIotAlertRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlIotFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlIotRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlJavascriptFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlJavascriptRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlJoystickFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlJoystickRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlKeyCommandFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlKeyCommandRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlKeyFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlKeyMultipleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlKeyMultipleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlKeyRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlKeyResetFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlKeyResetRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlKeyboard123FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlKeyboard123RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlKeyboardDockFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlKeyboardDockRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlKeyboardFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlKeyboardLayoutFloatFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlKeyboardLayoutFloatRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlKeyboardLayoutOneHandedLeftFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlKeyboardLayoutOneHandedLeftRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlKeyboardLayoutResizeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlKeyboardLayoutResizeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlKeyboardLayoutSplitFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlKeyboardLayoutSplitRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlKeyboardRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlKeyboardShiftFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlKeyboardShiftRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlKeyboardShiftUppercaseFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlKeyboardShiftUppercaseRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlKeyboardTabFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlKeyboardTabRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlKiosk24FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlKiosk24RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLaptopBriefcaseFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLaptopBriefcaseRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLaptopDismissFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLaptopDismissRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLaptopFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLaptopPersonFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLaptopPersonRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLaptopRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLaptopSettingsFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLaptopSettingsRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLaptopShieldFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLaptopShieldRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLaserToolFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLaserToolRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLassoFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLassoRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLauncherSettingsFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLauncherSettingsRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLayerDiagonalAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLayerDiagonalAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLayerDiagonalFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLayerDiagonalPersonFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLayerDiagonalPersonRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLayerDiagonalRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLayerDiagonalSparkleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLayerDiagonalSparkleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLayerFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLayerRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLayoutCellFourFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLayoutCellFourFocusBottomLeftFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLayoutCellFourFocusBottomRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLayoutCellFourFocusTopLeftFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLayoutCellFourFocusTopRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLayoutCellFourRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLayoutColumnFourFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLayoutColumnFourFocusCenterLeftFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLayoutColumnFourFocusCenterRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLayoutColumnFourFocusLeftFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLayoutColumnFourFocusRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLayoutColumnFourRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLayoutColumnOneThirdLeftFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLayoutColumnOneThirdLeftRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLayoutColumnOneThirdRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLayoutColumnOneThirdRightHintFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLayoutColumnOneThirdRightHintRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLayoutColumnOneThirdRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLayoutColumnThreeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLayoutColumnThreeFocusCenterFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLayoutColumnThreeFocusLeftFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLayoutColumnThreeFocusRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLayoutColumnThreeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLayoutColumnTwoFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLayoutColumnTwoFocusLeftFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLayoutColumnTwoFocusRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLayoutColumnTwoRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLayoutColumnTwoSplitLeftFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLayoutColumnTwoSplitLeftFocusBottomLeftFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLayoutColumnTwoSplitLeftFocusRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLayoutColumnTwoSplitLeftFocusTopLeftFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLayoutColumnTwoSplitLeftRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLayoutColumnTwoSplitRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLayoutColumnTwoSplitRightFocusBottomRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLayoutColumnTwoSplitRightFocusLeftFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLayoutColumnTwoSplitRightFocusTopRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLayoutColumnTwoSplitRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLayoutRowFourFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLayoutRowFourFocusBottomFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLayoutRowFourFocusCenterBottomFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLayoutRowFourFocusCenterTopFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLayoutRowFourFocusTopFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLayoutRowFourRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLayoutRowThreeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLayoutRowThreeFocusBottomFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLayoutRowThreeFocusCenterFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLayoutRowThreeFocusTopFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLayoutRowThreeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLayoutRowTwoFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLayoutRowTwoFocusBottomFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLayoutRowTwoFocusTopFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLayoutRowTwoFocusTopSettingsFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLayoutRowTwoRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLayoutRowTwoSettingsFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLayoutRowTwoSettingsRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLayoutRowTwoSplitBottomFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLayoutRowTwoSplitBottomFocusBottomLeftFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLayoutRowTwoSplitBottomFocusBottomRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLayoutRowTwoSplitBottomFocusTopFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLayoutRowTwoSplitBottomRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLayoutRowTwoSplitTopFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLayoutRowTwoSplitTopFocusBottomFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLayoutRowTwoSplitTopFocusTopLeftFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLayoutRowTwoSplitTopFocusTopRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLayoutRowTwoSplitTopRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLeafOneFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLeafOneRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLeafThreeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLeafThreeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLeafTwoFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLeafTwoRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLearningAppFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLearningAppRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLibraryColorSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLibraryFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLibraryRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLightbulbCheckmarkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLightbulbCheckmarkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLightbulbCircleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLightbulbCircleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLightbulbFilamentFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLightbulbFilamentRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLightbulbFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLightbulbPersonFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLightbulbPersonRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLightbulbRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLikertFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLikertRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLineDashesFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLineDashesRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLineFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLineFlowDiagonalUpRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLineFlowDiagonalUpRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLineHorizontal1DashDotDashFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLineHorizontal1DashDotDashRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLineHorizontal1DashesFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLineHorizontal1DashesRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLineHorizontal1DotFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLineHorizontal1DotRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLineHorizontal1FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLineHorizontal1RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLineHorizontal2DashesSolidFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLineHorizontal2DashesSolidRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLineHorizontal3FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLineHorizontal3RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLineHorizontal4FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLineHorizontal4RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLineHorizontal4SearchFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLineHorizontal4SearchRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLineHorizontal5ErrorFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLineHorizontal5ErrorRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLineHorizontal5FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLineHorizontal5RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLineRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLineStyleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLineStyleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLineStyleSketchFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLineStyleSketchRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLineThicknessFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLineThicknessRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLinkAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLinkAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLinkDismissFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLinkDismissRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLinkEditFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLinkEditRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLinkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLinkMultipleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLinkMultipleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLinkPersonFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLinkPersonRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLinkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLinkSquareFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLinkSquareRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLinkToolboxFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLinkToolboxRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlListBarFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlListBarRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlListBarTreeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlListBarTreeOffsetFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlListBarTreeOffsetRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlListBarTreeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlListFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlListRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlListRtlFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlListRtlRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLiveFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLiveOffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLiveOffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLiveRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLocalLanguageFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLocalLanguageRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLocationAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLocationAddLeftFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLocationAddLeftRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLocationAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLocationAddRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLocationAddRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLocationAddUpFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLocationAddUpRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLocationArrowFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLocationArrowLeftFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLocationArrowLeftRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLocationArrowRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLocationArrowRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLocationArrowRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLocationArrowUpFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLocationArrowUpRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLocationDismissFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLocationDismissRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLocationFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLocationLiveFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLocationLiveRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLocationOffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLocationOffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLocationRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLocationRippleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLocationRippleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLocationTargetSquareFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLocationTargetSquareRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLockClosedFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLockClosedKeyFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLockClosedKeyRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLockClosedRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLockMultipleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLockMultipleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLockOpenFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLockOpenRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLockShieldFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLockShieldRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLotteryFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLotteryRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLuggageFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlLuggageRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailAlertFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailAlertRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailAllReadFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailAllReadRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailAllUnreadFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailAllUnreadRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailArrowClockwiseFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailArrowClockwiseRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailArrowDoubleBackFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailArrowDoubleBackRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailArrowDownFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailArrowDownRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailArrowForwardFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailArrowForwardRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailArrowUpFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailArrowUpRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailAttachFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailAttachRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailCheckmarkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailCheckmarkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailClockFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailClockRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailColorSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailCopyFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailCopyRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailDismissFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailDismissRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailEditFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailEditRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailErrorFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailErrorRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailInboxAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailInboxAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailInboxAllFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailInboxAllRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailInboxArrowDownFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailInboxArrowDownRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailInboxArrowRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailInboxArrowRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailInboxArrowUpFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailInboxArrowUpRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailInboxCheckmarkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailInboxCheckmarkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailInboxDismissFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailInboxDismissRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailInboxFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailInboxPersonFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailInboxPersonRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailInboxRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailLinkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailLinkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailListFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailListRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailMultipleColorSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailMultipleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailMultipleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailOffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailOffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailOpenPersonFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailOpenPersonRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailPauseFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailPauseRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailProhibitedFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailProhibitedRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailReadFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailReadMultipleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailReadMultipleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailReadRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailRewindFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailRewindRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailSettingsFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailSettingsRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailShieldFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailShieldRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailTemplateFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailTemplateRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailUnreadFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailUnreadRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailWarningFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailWarningRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailboxFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMailboxRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMapDriveFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMapDriveRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMapFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMapRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMarkdownFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMarkdownRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMatchAppLayoutFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMatchAppLayoutRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMathFormatLinearFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMathFormatLinearRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMathFormatProfessionalFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMathFormatProfessionalRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMathFormulaFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMathFormulaRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMathSymbolsFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMathSymbolsRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMaximizeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMaximizeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMeetNowFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMeetNowRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMegaphoneCircleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMegaphoneCircleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMegaphoneFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMegaphoneLoudFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMegaphoneLoudRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMegaphoneOffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMegaphoneOffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMegaphoneRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMemory16FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMemory16RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMentionArrowDownFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMentionArrowDownRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMentionBracketsFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMentionBracketsRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMentionFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMentionRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMergeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMergeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMicColorSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMicFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMicLinkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMicLinkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMicOffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMicOffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMicProhibitedFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMicProhibitedRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMicPulseFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMicPulseOffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMicPulseOffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMicPulseRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMicRecordFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMicRecordRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMicRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMicSettingsFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMicSettingsRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMicSparkleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMicSparkleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMicSyncFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMicSyncRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMicroscopeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMicroscopeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMidiFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMidiRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMobileOptimizedFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMobileOptimizedRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMoldFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMoldRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMoleculeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMoleculeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMoneyCalculatorFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMoneyCalculatorRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMoneyDismissFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMoneyDismissRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMoneyFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMoneyHandFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMoneyHandRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMoneyOffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMoneyOffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMoneyRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMoneySettingsFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMoneySettingsRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMoreCircleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMoreCircleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMoreHorizontalFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMoreHorizontalRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMoreVerticalFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMoreVerticalRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMountainLocationBottomFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMountainLocationBottomRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMountainLocationTopFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMountainLocationTopRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMountainTrailFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMountainTrailRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMoviesAndTvFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMoviesAndTvRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMultiplier12xFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMultiplier12xRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMultiplier15xFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMultiplier15xRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMultiplier18xFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMultiplier18xRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMultiplier1xFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMultiplier1xRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMultiplier2xFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMultiplier2xRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMultiplier5xFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMultiplier5xRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMultiselectFilledLtrSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMultiselectFilledRtlSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMultiselectLtrFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMultiselectLtrRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMultiselectRegularLtrSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMultiselectRegularRtlSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMultiselectRtlFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMultiselectRtlRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMusicNote1FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMusicNote1RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMusicNote2FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMusicNote2PlayFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMusicNote2PlayRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMusicNote2RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMusicNoteOff1FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMusicNoteOff1RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMusicNoteOff2FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMusicNoteOff2RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMyLocationFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlMyLocationRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNavigationFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNavigationLocationTargetFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNavigationLocationTargetRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNavigationPlayFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNavigationPlayRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNavigationRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNavigationUnreadFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNavigationUnreadRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNetworkAdapter16FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNetworkAdapter16RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNetworkCheckFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNetworkCheckRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNewFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNewRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNewsFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNewsRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNextFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNextFrameFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNextFrameRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNextRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNoteAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNoteAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNoteEditFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNoteEditRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNoteFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNotePinFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNotePinRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNoteRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNotebookAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNotebookAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNotebookArrowCurveDownFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNotebookArrowCurveDownRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNotebookErrorFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNotebookErrorRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNotebookEyeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNotebookEyeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNotebookFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNotebookLightningFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNotebookLightningRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNotebookQuestionMarkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNotebookQuestionMarkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNotebookRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNotebookSectionArrowRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNotebookSectionArrowRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNotebookSectionFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNotebookSectionRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNotebookSubsectionFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNotebookSubsectionRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNotebookSyncFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNotebookSyncRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNotepadEditFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNotepadEditRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNotepadFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNotepadPersonFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNotepadPersonRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNotepadRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNotepadSparkleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNotepadSparkleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNumberCircle0FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNumberCircle0RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNumberCircle1FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNumberCircle1RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNumberCircle2FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNumberCircle2RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNumberCircle3FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNumberCircle3RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNumberCircle4FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNumberCircle4RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNumberCircle5FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNumberCircle5RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNumberCircle6FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNumberCircle6RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNumberCircle7FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNumberCircle7RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNumberCircle8FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNumberCircle8RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNumberCircle9FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNumberCircle9RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNumberRowFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNumberRowRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNumberSymbolDismissFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNumberSymbolDismissRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNumberSymbolFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNumberSymbolRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNumberSymbolSquareFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlNumberSymbolSquareRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlOpenFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlOpenFolderFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlOpenFolderRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlOpenOffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlOpenOffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlOpenRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlOptionsFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlOptionsRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlOrgColorSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlOrganizationFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlOrganizationHorizontalFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlOrganizationHorizontalRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlOrganizationRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlOrientationFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlOrientationRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlOvalFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlOvalRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlOvenFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlOvenRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPaddingDownFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPaddingDownRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPaddingLeftFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPaddingLeftRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPaddingRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPaddingRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPaddingTopFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPaddingTopRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPageFitFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPageFitRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPaintBrushArrowDownFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPaintBrushArrowDownRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPaintBrushArrowUpFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPaintBrushArrowUpRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPaintBrushFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPaintBrushRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPaintBrushSparkleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPaintBrushSparkleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPaintBrushSubtractFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPaintBrushSubtractRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPaintBucketFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPaintBucketRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPairFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPairRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPanelBottomContractFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPanelBottomContractRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPanelBottomExpandFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPanelBottomExpandRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPanelBottomFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPanelBottomRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPanelLeftAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPanelLeftAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPanelLeftContractFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPanelLeftContractRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPanelLeftExpandFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPanelLeftExpandRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPanelLeftFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPanelLeftFocusRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPanelLeftHeaderAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPanelLeftHeaderAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPanelLeftHeaderFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPanelLeftHeaderKeyFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPanelLeftHeaderKeyRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPanelLeftHeaderRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPanelLeftKeyFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPanelLeftKeyRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPanelLeftRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPanelLeftTextAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPanelLeftTextAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPanelLeftTextDismissFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPanelLeftTextDismissRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPanelLeftTextFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPanelLeftTextRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPanelRightAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPanelRightAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPanelRightContractFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPanelRightContractRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPanelRightCursorFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPanelRightCursorRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPanelRightExpandFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPanelRightExpandRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPanelRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPanelRightGalleryFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPanelRightGalleryRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPanelRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPanelSeparateWindowFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPanelSeparateWindowRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPanelTopContractFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPanelTopContractRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPanelTopExpandFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPanelTopExpandRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPanelTopGalleryFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPanelTopGalleryRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPasswordFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPasswordRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPatchFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPatchRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPatientFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPatientRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPauseCircleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPauseCircleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPauseFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPauseOffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPauseOffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPauseRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPauseSettingsFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPauseSettingsRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPaymentFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPaymentRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPaymentWirelessFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPaymentWirelessRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPenDismissFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPenDismissRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPenFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPenOffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPenOffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPenProhibitedFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPenProhibitedRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPenRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPenSparkleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPenSparkleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPenSyncFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPenSyncRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPentagonFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPentagonRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPeopleAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPeopleAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPeopleAudienceFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPeopleAudienceRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPeopleCallFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPeopleCallRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPeopleChatFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPeopleChatRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPeopleCheckmarkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPeopleCheckmarkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPeopleColorSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPeopleCommunityAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPeopleCommunityAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPeopleCommunityFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPeopleCommunityRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPeopleEditFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPeopleEditRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPeopleErrorFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPeopleErrorRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPeopleEyeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPeopleEyeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPeopleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPeopleHomeColorSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPeopleLinkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPeopleLinkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPeopleListFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPeopleListRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPeopleLockFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPeopleLockRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPeopleMoneyFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPeopleMoneyRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPeopleProhibitedFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPeopleProhibitedRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPeopleQueueFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPeopleQueueRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPeopleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPeopleSearchFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPeopleSearchRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPeopleSettingsFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPeopleSettingsRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPeopleStarFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPeopleStarRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPeopleSubtractFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPeopleSubtractRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPeopleSwapFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPeopleSwapRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPeopleSyncFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPeopleSyncRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPeopleTeamAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPeopleTeamAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPeopleTeamColorSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPeopleTeamDeleteFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPeopleTeamDeleteRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPeopleTeamFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPeopleTeamRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPeopleTeamToolboxFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPeopleTeamToolboxRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPeopleToolboxFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPeopleToolboxRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPerson5FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPerson5RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPerson6FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPerson6RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonAccountsFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonAccountsRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonAlertFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonAlertOffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonAlertOffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonAlertRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonArrowBackFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonArrowBackRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonArrowLeftFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonArrowLeftRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonArrowRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonArrowRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonAvailableColorSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonAvailableFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonAvailableRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonBoardAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonBoardAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonBoardFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonBoardRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonCallFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonCallRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonChatFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonChatRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonCircleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonCircleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonClockFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonClockRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonColorSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonDeleteFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonDeleteRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonDesktopFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonDesktopRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonEditFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonEditRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonFeedbackFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonFeedbackRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonHeadHintFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonHeadHintRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonHeartFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonHeartRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonHomeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonHomeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonInfoFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonInfoRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonKeyFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonKeyRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonLightbulbFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonLightbulbRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonLightningFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonLightningRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonLinkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonLinkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonLockFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonLockRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonMailFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonMailRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonMoneyFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonMoneyRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonNoteFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonNoteRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonPasskeyFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonPasskeyRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonPillFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonPillRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonProhibitedFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonProhibitedRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonQuestionMarkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonQuestionMarkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonRibbonFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonRibbonRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonRunningFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonRunningRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonSearchFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonSearchRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonSettingsFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonSettingsRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonSoundSpatialFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonSoundSpatialRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonSquareAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonSquareAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonSquareCheckmarkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonSquareCheckmarkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonSquareFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonSquareRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonStarFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonStarRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonStarburstFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonStarburstRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonSubtractFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonSubtractRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonSupportFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonSupportRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonSwapFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonSwapRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonSyncFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonSyncRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonTagFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonTagRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonTentativeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonTentativeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonVoiceFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonVoiceRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonWalkingFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonWalkingRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonWarningFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonWarningRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonWrenchFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPersonWrenchRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPhoneAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPhoneAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPhoneArrowRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPhoneArrowRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPhoneChatFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPhoneChatRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPhoneCheckmarkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPhoneCheckmarkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPhoneDesktopAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPhoneDesktopAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPhoneDesktopFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPhoneDesktopRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPhoneDismissFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPhoneDismissRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPhoneEditFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPhoneEditRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPhoneEraserFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPhoneEraserRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPhoneFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPhoneFooterArrowDownFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPhoneFooterArrowDownRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPhoneHeaderArrowUpFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPhoneHeaderArrowUpRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPhoneKeyFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPhoneKeyRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPhoneLaptopFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPhoneLaptopRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPhoneLinkSetupFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPhoneLinkSetupRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPhoneLockFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPhoneLockRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPhonePageHeaderFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPhonePageHeaderRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPhonePaginationFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPhonePaginationRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPhoneRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPhoneScreenTimeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPhoneScreenTimeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPhoneShakeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPhoneShakeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPhoneSpanInFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPhoneSpanInRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPhoneSpanOutFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPhoneSpanOutRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPhoneSpeakerFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPhoneSpeakerRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPhoneStatusBarFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPhoneStatusBarRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPhoneTabletFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPhoneTabletRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPhoneUpdateCheckmarkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPhoneUpdateCheckmarkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPhoneUpdateFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPhoneUpdateRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPhoneVerticalScrollFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPhoneVerticalScrollRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPhoneVibrateFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPhoneVibrateRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPhotoFilterFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPhotoFilterRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPiFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPiRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPictureInPictureEnterFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPictureInPictureEnterRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPictureInPictureExitFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPictureInPictureExitRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPictureInPictureFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPictureInPictureRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPillFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPillRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPinColorSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPinFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPinGlobeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPinGlobeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPinOffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPinOffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPinRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPipelineAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPipelineAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPipelineArrowCurveDownFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPipelineArrowCurveDownRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPipelineFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPipelinePlayFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPipelinePlayRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPipelineRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPivotFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPivotRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPlantCattailFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPlantCattailRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPlantGrassFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPlantGrassRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPlantRagweedFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPlantRagweedRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPlayCircleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPlayCircleHintFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPlayCircleHintRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPlayCircleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPlayCircleSparkleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPlayCircleSparkleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPlayFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPlayRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPlaySettingsFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPlaySettingsRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPlayingCardsFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPlayingCardsRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPlugConnectedAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPlugConnectedAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPlugConnectedCheckmarkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPlugConnectedCheckmarkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPlugConnectedFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPlugConnectedRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPlugConnectedSettingsFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPlugConnectedSettingsRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPlugDisconnectedFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPlugDisconnectedRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPointScanFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPointScanRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPollColorSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPollFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPollHorizontalFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPollHorizontalRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPollOffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPollOffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPollRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPortHdmiFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPortHdmiRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPortMicroUsbFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPortMicroUsbRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPortUsbAFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPortUsbARegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPortUsbCFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPortUsbCRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPositionBackwardFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPositionBackwardRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPositionForwardFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPositionForwardRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPositionToBackFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPositionToBackRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPositionToFrontFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPositionToFrontRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPowerFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPowerRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPredictionsFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPredictionsRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPremiumFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPremiumPersonFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPremiumPersonRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPremiumRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPresenceAvailableFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPresenceAvailableRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPresenceAwayFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPresenceAwayRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPresenceBlockedRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPresenceBusyFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPresenceDndFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPresenceDndRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPresenceOfflineRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPresenceOofRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPresenceTentativeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPresenceUnknownRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPresenterFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPresenterOffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPresenterOffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPresenterRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPreviewLinkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPreviewLinkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPreviousFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPreviousFrameFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPreviousFrameRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPreviousRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPrintAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPrintAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPrintFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPrintRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlProductionCheckmarkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlProductionCheckmarkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlProductionFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlProductionRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlProhibitedFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlProhibitedMultipleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlProhibitedMultipleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlProhibitedNoteFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlProhibitedNoteRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlProhibitedRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlProjectionScreenDismissFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlProjectionScreenDismissRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlProjectionScreenFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlProjectionScreenRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlProjectionScreenTextFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlProjectionScreenTextRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPromptFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPromptRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlProtocolHandlerFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlProtocolHandlerRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPulseFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPulseRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPulseSquareFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPulseSquareRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPuzzleCubeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPuzzleCubePieceFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPuzzleCubePieceRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPuzzleCubeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPuzzlePieceFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPuzzlePieceRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPuzzlePieceShieldFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlPuzzlePieceShieldRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlQrCodeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlQrCodeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlQuestionCircleColorSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlQuestionCircleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlQuestionCircleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlQuestionFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlQuestionRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlQuizNewFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlQuizNewRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlRadarCheckmarkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlRadarCheckmarkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlRadarFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlRadarRectangleMultipleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlRadarRectangleMultipleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlRadarRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlRadioButtonFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlRadioButtonRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlRamFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlRamRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlRatingMatureFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlRatingMatureRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlRatioOneToOneFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlRatioOneToOneRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlReOrderDotsHorizontalFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlReOrderDotsHorizontalRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlReOrderDotsVerticalFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlReOrderDotsVerticalRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlReOrderFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlReOrderRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlReadAloudFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlReadAloudRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlReadingListAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlReadingListAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlReadingListFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlReadingListRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlReadingModeMobileFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlReadingModeMobileRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlRealEstateFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlRealEstateRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlReceiptAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlReceiptAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlReceiptBagFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlReceiptBagRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlReceiptColorSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlReceiptCubeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlReceiptCubeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlReceiptFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlReceiptMoneyFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlReceiptMoneyRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlReceiptPlayFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlReceiptPlayRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlReceiptRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlReceiptSearchFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlReceiptSearchRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlReceiptSparklesFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlReceiptSparklesRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlRecordFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlRecordRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlRecordStopFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlRecordStopRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlRectangleLandscapeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlRectangleLandscapeHintCopyFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlRectangleLandscapeHintCopyRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlRectangleLandscapeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlRectangleLandscapeSparkleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlRectangleLandscapeSparkleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlRectangleLandscapeSyncFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlRectangleLandscapeSyncOffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlRectangleLandscapeSyncOffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlRectangleLandscapeSyncRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlRectanglePortraitLocationTargetFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlRectanglePortraitLocationTargetRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlRecycleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlRecycleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlRemixAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlRemixAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlRemoteFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlRemoteRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlRenameFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlRenameRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlReorderFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlReorderRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlReplayFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlReplayRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlResizeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlResizeImageFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlResizeImageRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlResizeLargeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlResizeLargeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlResizeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlResizeSmallFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlResizeSmallRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlResizeTableFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlResizeTableRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlResizeVideoFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlResizeVideoRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlRewardColorSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlRewardFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlRewardRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlRewindFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlRewindRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlRhombusFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlRhombusRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlRibbonAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlRibbonAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlRibbonFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlRibbonOffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlRibbonOffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlRibbonRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlRibbonStarFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlRibbonStarRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlRoadConeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlRoadConeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlRoadFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlRoadRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlRocketFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlRocketRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlRotateLeftFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlRotateLeftRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlRotateRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlRotateRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlRouterFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlRouterRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlRowTripleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlRowTripleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlRssFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlRssRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlRulerFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlRulerRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlRunFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlRunRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSanitizeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSanitizeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSaveArrowRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSaveArrowRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSaveCopyFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSaveCopyRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSaveEditFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSaveEditRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSaveFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSaveImageFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSaveImageRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSaveMultipleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSaveMultipleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSaveRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSaveSearchFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSaveSearchRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSaveSyncFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSaveSyncRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSavingsFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSavingsRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlScaleFillFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlScaleFillRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlScaleFitFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlScaleFitRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlScalesFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlScalesRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlScanCameraFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlScanCameraRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlScanDashFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlScanDashRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlScanFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlScanObjectFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlScanObjectRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlScanPersonColorSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlScanPersonFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlScanPersonRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlScanRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlScanTableFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlScanTableRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlScanTextFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlScanTextRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlScanThumbUpFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlScanThumbUpOffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlScanThumbUpOffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlScanThumbUpRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlScanTypeCheckmarkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlScanTypeCheckmarkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlScanTypeColorSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlScanTypeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlScanTypeOffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlScanTypeOffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlScanTypeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlScratchpadFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlScratchpadRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlScreenCutFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlScreenCutRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlScreenPersonFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlScreenPersonRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlScreenSearchFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlScreenSearchRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlScreenshotFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlScreenshotRecordFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlScreenshotRecordRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlScreenshotRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlScriptFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlScriptRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSearchFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSearchInfoFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSearchInfoRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSearchRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSearchSettingsFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSearchSettingsRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSearchShieldFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSearchShieldRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSearchSparkleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSearchSparkleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSearchSquareFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSearchSquareRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSearchVisualColorSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSearchVisualFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSearchVisualRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSeatAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSeatAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSeatFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSeatRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSelectAllOffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSelectAllOffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSelectAllOnFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSelectAllOnRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSelectObjectFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSelectObjectRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSelectObjectSkewDismissFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSelectObjectSkewDismissRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSelectObjectSkewEditFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSelectObjectSkewEditRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSelectObjectSkewFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSelectObjectSkewRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSendBeakerFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSendBeakerRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSendClockFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSendClockRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSendCopyFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSendCopyRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSendFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSendPersonFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSendPersonRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSendRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSerialPortFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSerialPortRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlServerFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlServerLinkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlServerLinkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlServerMultipleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlServerMultipleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlServerPlayFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlServerPlayRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlServerRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlServiceBellFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlServiceBellRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSettingsChatFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSettingsChatRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSettingsCogMultipleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSettingsCogMultipleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSettingsFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSettingsRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShapeExcludeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShapeExcludeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShapeIntersectFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShapeIntersectRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShapeOrganicFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShapeOrganicRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShapeSubtractFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShapeSubtractRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShapeUnionFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShapeUnionRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShapesFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShapesRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShareAndroidFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShareAndroidRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShareCloseTrayFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShareCloseTrayRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShareFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShareIosFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShareIosRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShareMultipleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShareMultipleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShareRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShareScreenPersonFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShareScreenPersonOverlayFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShareScreenPersonOverlayInsideFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShareScreenPersonOverlayInsideRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShareScreenPersonOverlayRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShareScreenPersonPFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShareScreenPersonPRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShareScreenPersonRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShareScreenStartFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShareScreenStartRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShareScreenStopFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShareScreenStopRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShieldAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShieldAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShieldBadgeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShieldBadgeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShieldCheckmarkColorSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShieldCheckmarkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShieldCheckmarkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShieldColorSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShieldDismissFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShieldDismissRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShieldDismissShieldFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShieldDismissShieldRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShieldErrorFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShieldErrorRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShieldFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShieldGlobeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShieldGlobeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShieldKeyholeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShieldKeyholeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShieldLockFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShieldLockRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShieldPersonAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShieldPersonAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShieldPersonFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShieldPersonRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShieldProhibitedFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShieldProhibitedRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShieldQuestionFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShieldQuestionRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShieldRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShieldTaskFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShieldTaskRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShifts30MinutesFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShifts30MinutesRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShiftsActivityFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShiftsActivityRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShiftsAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShiftsAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShiftsAvailabilityFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShiftsAvailabilityRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShiftsCheckmarkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShiftsCheckmarkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShiftsColorSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShiftsDayFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShiftsDayRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShiftsFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShiftsOpenFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShiftsOpenRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShiftsProhibitedFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShiftsProhibitedRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShiftsQuestionMarkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShiftsQuestionMarkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShiftsRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShiftsTeamFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShiftsTeamRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShoppingBagAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShoppingBagAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShoppingBagArrowLeftFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShoppingBagArrowLeftRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShoppingBagDismissFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShoppingBagDismissRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShoppingBagFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShoppingBagPauseFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShoppingBagPauseRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShoppingBagPercentFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShoppingBagPercentRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShoppingBagPlayFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShoppingBagPlayRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShoppingBagRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShoppingBagTagFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShoppingBagTagRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShortpickFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShortpickRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShowerheadFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlShowerheadRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSidebarSearchFilledLtrSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSidebarSearchFilledRtlSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSidebarSearchLtrFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSidebarSearchLtrRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSidebarSearchRegularLtrSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSidebarSearchRegularRtlSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSidebarSearchRtlFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSidebarSearchRtlRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSignOutFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSignOutRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSignatureFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSignatureRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSimFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSimRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSkipBack10FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSkipBack10RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSkipForward10FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSkipForward10RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSkipForward30FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSkipForward30RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSkipForwardTabFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSkipForwardTabRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSlashForwardFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSlashForwardRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSleepFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSleepRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSlideAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSlideAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSlideArrowRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSlideArrowRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSlideContent24FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSlideContent24RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSlideEraserFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSlideEraserRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSlideGridFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSlideGridRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSlideHideFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSlideHideRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSlideLayoutFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSlideLayoutRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSlideLinkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSlideLinkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSlideMicrophoneFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSlideMicrophoneRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSlideMultipleArrowRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSlideMultipleArrowRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSlideMultipleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSlideMultipleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSlideMultipleSearchFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSlideMultipleSearchRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSlidePlayFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSlidePlayRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSlideRecordFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSlideRecordRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSlideSearchFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSlideSearchRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSlideSettingsFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSlideSettingsRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSlideSizeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSlideSizeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSlideTextCallFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSlideTextCallRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSlideTextCursorFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSlideTextCursorRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSlideTextEditFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSlideTextEditRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSlideTextFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSlideTextMultipleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSlideTextMultipleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSlideTextPersonFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSlideTextPersonRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSlideTextRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSlideTextSparkleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSlideTextSparkleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSlideTransitionFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSlideTransitionRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSmartwatchDotFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSmartwatchDotRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSmartwatchFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSmartwatchRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSnoozeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSnoozeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSoundSourceFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSoundSourceRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSoundWaveCircleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSoundWaveCircleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSoundWaveCircleSparkleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSoundWaveCircleSparkleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSpace3dFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSpace3dRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSpacebarFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSpacebarRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSparkleCircleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSparkleCircleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSparkleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSparkleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSpatulaSpoonFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSpatulaSpoonRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSpeaker0FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSpeaker0RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSpeaker1FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSpeaker1RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSpeaker2FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSpeaker2RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSpeakerBluetoothFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSpeakerBluetoothRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSpeakerBoxFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSpeakerBoxRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSpeakerEditFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSpeakerEditRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSpeakerMuteFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSpeakerMuteRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSpeakerOffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSpeakerOffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSpeakerSettingsFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSpeakerSettingsRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSpeakerUsbFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSpeakerUsbRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSpinnerIosFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSpinnerIosRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSplitHintFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSplitHintRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSplitHorizontalFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSplitHorizontalRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSplitVerticalFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSplitVerticalRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSportAmericanFootballFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSportAmericanFootballRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSportBaseballFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSportBaseballRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSportBasketballFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSportBasketballRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSportFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSportHockeyFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSportHockeyRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSportRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSportSoccerFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSportSoccerRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSprayCan16FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSprayCan16RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSquareAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSquareAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSquareArrowForwardFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSquareArrowForwardRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSquareDismissFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSquareDismissRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSquareDovetailJointFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSquareDovetailJointRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSquareEraserFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSquareEraserRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSquareFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSquareHintAppsFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSquareHintAppsRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSquareHintArrowBackFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSquareHintArrowBackRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSquareHintFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSquareHintHexagonFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSquareHintHexagonRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSquareHintRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSquareHintSparklesFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSquareHintSparklesRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSquareMultipleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSquareMultipleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSquareRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSquareShadowFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSquareShadowRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSquareTextArrowRepeatAllFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSquareTextArrowRepeatAllRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSquaresNestedFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSquaresNestedRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlStackAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlStackAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlStackArrowForwardFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlStackArrowForwardRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlStackFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlStackOffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlStackOffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlStackRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlStackStarFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlStackStarRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlStackVerticalFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlStackVerticalRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlStamp32LightSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlStarAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlStarAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlStarArrowBackFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlStarArrowBackRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlStarArrowRightEndFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlStarArrowRightEndRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlStarArrowRightStartFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlStarArrowRightStartRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlStarCheckmarkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlStarCheckmarkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlStarDismissFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlStarDismissRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlStarEditFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlStarEditRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlStarEmphasisFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlStarEmphasisRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlStarFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlStarHalfFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlStarHalfRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlStarLineHorizontal3FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlStarLineHorizontal3RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlStarOffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlStarOffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlStarOneQuarterFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlStarOneQuarterRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlStarProhibitedFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlStarProhibitedRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlStarRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlStarSettingsFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlStarSettingsRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlStarThreeQuarterFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlStarThreeQuarterRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlStatusFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlStatusRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlStepFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlStepRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlStepsFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlStepsRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlStethoscopeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlStethoscopeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlStickerAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlStickerAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlStickerFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlStickerRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlStopFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlStopRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlStorageFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlStorageRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlStoreMicrosoftFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlStoreMicrosoftRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlStreamFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlStreamInputFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlStreamInputOutputFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlStreamInputOutputRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlStreamInputRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlStreamOutputFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlStreamOutputRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlStreamRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlStreetSignFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlStreetSignRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlStyleGuideFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlStyleGuideRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSubGridFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSubGridRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSubtitlesFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSubtitlesRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSubtractCircleArrowBackFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSubtractCircleArrowBackRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSubtractCircleArrowForwardFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSubtractCircleArrowForwardRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSubtractCircleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSubtractCircleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSubtractFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSubtractParenthesesFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSubtractParenthesesRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSubtractRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSubtractSquareFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSubtractSquareMultipleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSubtractSquareMultipleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSubtractSquareRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSurfaceEarbudsFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSurfaceEarbudsRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSurfaceHubFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSurfaceHubRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSwimmingPoolFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSwimmingPoolRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSwipeDownFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSwipeDownRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSwipeRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSwipeRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSwipeUpFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSwipeUpRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSymbolsFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSymbolsRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSyncOffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSyncOffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSyringeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSyringeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSystemFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlSystemRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTabAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTabAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTabArrowLeftFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTabArrowLeftRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTabDesktopArrowClockwiseFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTabDesktopArrowClockwiseRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTabDesktopArrowLeftFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTabDesktopArrowLeftRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTabDesktopBottomFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTabDesktopBottomRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTabDesktopClockFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTabDesktopClockRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTabDesktopCopyFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTabDesktopCopyRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTabDesktopFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTabDesktopImageFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTabDesktopImageRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTabDesktopLinkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTabDesktopLinkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTabDesktopMultipleAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTabDesktopMultipleAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTabDesktopMultipleBottomFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTabDesktopMultipleBottomRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTabDesktopMultipleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTabDesktopMultipleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTabDesktopMultipleSparkleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTabDesktopMultipleSparkleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTabDesktopNewPageFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTabDesktopNewPageRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTabDesktopRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTabDesktopSearchFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTabDesktopSearchRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTabFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTabGroupFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTabGroupRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTabInPrivateFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTabInPrivateRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTabInprivateAccountFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTabInprivateAccountRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTabProhibitedFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTabProhibitedRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTabRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTabShieldDismissFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTabShieldDismissRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableArrowUpFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableArrowUpRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableBottomRowFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableBottomRowRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableCalculatorFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableCalculatorRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableCellEditFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableCellEditRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableCellsMergeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableCellsMergeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableCellsSplitFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableCellsSplitRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableCheckerFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableCheckerRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableColumnTopBottomFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableColumnTopBottomRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableCopyFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableCopyRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableCursorFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableCursorRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableDeleteColumnFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableDeleteColumnRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableDeleteRowFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableDeleteRowRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableDismissFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableDismissRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableEditFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableEditRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableFreezeColumnAndRowFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableFreezeColumnAndRowRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableFreezeColumnFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableFreezeColumnRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableFreezeRowFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableFreezeRowRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableImageFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableImageRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableInsertColumnFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableInsertColumnRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableInsertRowFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableInsertRowRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableLightningFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableLightningRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableLinkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableLinkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableLockFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableLockRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableMoveAboveFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableMoveAboveRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableMoveBelowFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableMoveBelowRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableMoveLeftFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableMoveLeftRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableMoveRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableMoveRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableMultipleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableMultipleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableOffsetAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableOffsetAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableOffsetFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableOffsetLessThanOrEqualToFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableOffsetLessThanOrEqualToRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableOffsetRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableOffsetSettingsFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableOffsetSettingsRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableResizeColumnFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableResizeColumnRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableResizeRowFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableResizeRowRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableSearchFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableSearchRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableSettingsFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableSettingsRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableSimpleCheckmarkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableSimpleCheckmarkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableSimpleExcludeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableSimpleExcludeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableSimpleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableSimpleIncludeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableSimpleIncludeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableSimpleMultipleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableSimpleMultipleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableSimpleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableSparkleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableSparkleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableSplitFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableSplitRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableStackAboveFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableStackAboveRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableStackBelowFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableStackBelowRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableStackLeftFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableStackLeftRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableStackRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableStackRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableSwitchFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTableSwitchRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTabletFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTabletLaptopFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTabletLaptopRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTabletRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTabletSpeakerFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTabletSpeakerRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTabsFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTabsRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTagCircleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTagCircleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTagDismissFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTagDismissRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTagErrorFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTagErrorRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTagFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTagLockAccentFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTagLockFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTagLockRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTagMultipleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTagMultipleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTagOffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTagOffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTagQuestionMarkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTagQuestionMarkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTagRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTagResetFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTagResetRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTagSearchFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTagSearchRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTapDoubleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTapDoubleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTapSingleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTapSingleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTargetAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTargetAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTargetArrowFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTargetArrowRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTargetDismissFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTargetDismissRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTargetEditFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTargetEditRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTargetFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTargetRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTaskListAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTaskListAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTaskListFilledLtrSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTaskListFilledRtlSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTaskListLtrFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTaskListLtrRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTaskListRegularLtrSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTaskListRegularRtlSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTaskListRtlFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTaskListRtlRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTaskListSquareAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTaskListSquareAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTaskListSquareDatabaseFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTaskListSquareDatabaseRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTaskListSquareFilledLtrSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTaskListSquareFilledRtlSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTaskListSquareLtrFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTaskListSquareLtrRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTaskListSquarePersonFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTaskListSquarePersonRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTaskListSquareRegularLtrSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTaskListSquareRegularRtlSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTaskListSquareRtlFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTaskListSquareRtlRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTaskListSquareSettingsFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTaskListSquareSettingsRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTasksAppFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTasksAppRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTeachingFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTeachingRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTeardropBottomRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTeardropBottomRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTeddyFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTeddyRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTemperatureFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTemperatureRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTentFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTentRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTetrisAppFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTetrisAppRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextAddSpaceAfterFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextAddSpaceAfterRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextAddSpaceBeforeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextAddSpaceBeforeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextAddTFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextAddTRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextAlignCenterFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextAlignCenterRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextAlignCenterRotate270FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextAlignCenterRotate270RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextAlignCenterRotate90FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextAlignCenterRotate90RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextAlignDistributedEvenlyFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextAlignDistributedEvenlyRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextAlignDistributedFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextAlignDistributedRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextAlignDistributedVerticalFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextAlignDistributedVerticalRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextAlignJustifyFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextAlignJustifyLow90FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextAlignJustifyLow90RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextAlignJustifyLowFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextAlignJustifyLowRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextAlignJustifyLowRotate270FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextAlignJustifyLowRotate270RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextAlignJustifyLowRotate90FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextAlignJustifyLowRotate90RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextAlignJustifyRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextAlignJustifyRotate270FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextAlignJustifyRotate270RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextAlignJustifyRotate90FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextAlignJustifyRotate90RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextAlignLeftFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextAlignLeftRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextAlignLeftRotate270FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextAlignLeftRotate270RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextAlignLeftRotate90FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextAlignLeftRotate90RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextAlignRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextAlignRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextAlignRightRotate270FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextAlignRightRotate270RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextAlignRightRotate90FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextAlignRightRotate90RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextArrowDownRightColumnFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextArrowDownRightColumnRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextAsteriskFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextAsteriskRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextBaselineFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextBaselineRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextBoldFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextBoldRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextBoxSettingsFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextBoxSettingsRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextBulletList90FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextBulletList90RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextBulletListAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextBulletListAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextBulletListCheckmarkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextBulletListCheckmarkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextBulletListDismissFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextBulletListDismissRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextBulletListFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextBulletListLtr90FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextBulletListLtr90RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextBulletListLtrFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextBulletListLtrRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextBulletListRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextBulletListRtl90FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextBulletListRtl90RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextBulletListRtlFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextBulletListRtlRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextBulletListSquareClockFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextBulletListSquareClockRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextBulletListSquareEditFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextBulletListSquareEditRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextBulletListSquareFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextBulletListSquarePersonFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextBulletListSquarePersonRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextBulletListSquareRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextBulletListSquareSearchFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextBulletListSquareSearchRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextBulletListSquareSettingsFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextBulletListSquareSettingsRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextBulletListSquareShieldFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextBulletListSquareShieldRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextBulletListSquareSparkleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextBulletListSquareSparkleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextBulletListSquareToolboxFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextBulletListSquareToolboxRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextBulletListSquareWarningFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextBulletListSquareWarningRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextBulletListTreeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextBulletListTreeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextCaseLowercaseFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextCaseLowercaseRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextCaseTitleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextCaseTitleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextCaseUppercaseFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextCaseUppercaseRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextChangeCaseFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextChangeCaseRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextClearFormattingFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextClearFormattingRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextCollapseFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextCollapseRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextColorAccentFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextColorFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextColorRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextColumnOneFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextColumnOneNarrowFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextColumnOneNarrowRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextColumnOneRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextColumnOneSemiNarrowFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextColumnOneSemiNarrowRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextColumnOneWideFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextColumnOneWideLightningFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextColumnOneWideLightningRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextColumnOneWideRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextColumnThreeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextColumnThreeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextColumnTwoFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextColumnTwoLeftFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextColumnTwoLeftRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextColumnTwoRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextColumnTwoRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextColumnTwoRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextColumnWideFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextColumnWideRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextContinuousFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextContinuousRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextDensityFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextDensityRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextDescriptionFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextDescriptionLtrFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextDescriptionLtrRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextDescriptionRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextDescriptionRtlFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextDescriptionRtlRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextDirectionHorizontalLeftFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextDirectionHorizontalLeftRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextDirectionHorizontalLtrFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextDirectionHorizontalLtrRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextDirectionHorizontalRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextDirectionHorizontalRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextDirectionHorizontalRtlFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextDirectionHorizontalRtlRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextDirectionRotate270RightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextDirectionRotate270RightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextDirectionRotate315RightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextDirectionRotate315RightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextDirectionRotate45RightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextDirectionRotate45RightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextDirectionRotate90LeftFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextDirectionRotate90LeftRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextDirectionRotate90LtrFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextDirectionRotate90LtrRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextDirectionRotate90RightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextDirectionRotate90RightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextDirectionRotate90RtlFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextDirectionRotate90RtlRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextDirectionVerticalFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextDirectionVerticalRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextEditStyleColorSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextEditStyleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextEditStyleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextEffectsFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextEffectsRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextEffectsSparkleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextEffectsSparkleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextExpandFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextExpandRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextFieldFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextFieldRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextFirstLineFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextFirstLineRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextFontFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextFontInfoFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextFontInfoRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextFontRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextFontSizeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextFontSizeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextFootnoteFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextFootnoteRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextGrammarArrowLeftFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextGrammarArrowLeftRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextGrammarArrowRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextGrammarArrowRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextGrammarCheckmarkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextGrammarCheckmarkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextGrammarDismissFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextGrammarDismissRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextGrammarErrorFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextGrammarErrorRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextGrammarLightningFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextGrammarLightningRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextGrammarSettingsFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextGrammarSettingsRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextGrammarWandFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextGrammarWandRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextHangingFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextHangingRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextHeader1FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextHeader1LinesCaretFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextHeader1LinesCaretRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextHeader1LinesFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextHeader1LinesRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextHeader1RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextHeader2FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextHeader2LinesCaretFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextHeader2LinesCaretRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextHeader2LinesFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextHeader2LinesRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextHeader2RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextHeader3FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextHeader3LinesCaretFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextHeader3LinesCaretRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextHeader3LinesFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextHeader3LinesRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextHeader3RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextIndentDecreaseFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextIndentDecreaseLtr90FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextIndentDecreaseLtr90RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextIndentDecreaseLtrFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextIndentDecreaseLtrRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextIndentDecreaseLtrRotate270FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextIndentDecreaseLtrRotate270RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextIndentDecreaseRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextIndentDecreaseRotate270FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextIndentDecreaseRotate270RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextIndentDecreaseRotate90FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextIndentDecreaseRotate90RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextIndentDecreaseRtl90FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextIndentDecreaseRtl90RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextIndentDecreaseRtlFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextIndentDecreaseRtlRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextIndentDecreaseRtlRotate270FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextIndentDecreaseRtlRotate270RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextIndentIncreaseFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextIndentIncreaseLtr90FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextIndentIncreaseLtr90RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextIndentIncreaseLtrFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextIndentIncreaseLtrRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextIndentIncreaseLtrRotate270FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextIndentIncreaseLtrRotate270RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextIndentIncreaseRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextIndentIncreaseRotate270FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextIndentIncreaseRotate270RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextIndentIncreaseRotate90FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextIndentIncreaseRotate90RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextIndentIncreaseRtl90FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextIndentIncreaseRtl90RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextIndentIncreaseRtlFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextIndentIncreaseRtlRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextIndentIncreaseRtlRotate270FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextIndentIncreaseRtlRotate270RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextItalicFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextItalicRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextLineSpacingFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextLineSpacingRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextMoreFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextMoreRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextNumberFormatFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextNumberFormatRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextNumberListFilledLtrSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextNumberListFilledRtlSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextNumberListLtr90FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextNumberListLtr90RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextNumberListLtrFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextNumberListLtrRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextNumberListLtrRotate270FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextNumberListLtrRotate270RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextNumberListRegularLtrSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextNumberListRegularRtlSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextNumberListRotate270FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextNumberListRotate270RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextNumberListRotate90FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextNumberListRotate90RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextNumberListRtl90FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextNumberListRtl90RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextNumberListRtlFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextNumberListRtlRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextNumberListRtlRotate270FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextNumberListRtlRotate270RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextParagraphDirectionFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextParagraphDirectionLeftFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextParagraphDirectionLeftRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextParagraphDirectionRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextParagraphDirectionRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextParagraphDirectionRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextParagraphFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextParagraphRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextPeriodAsteriskFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextPeriodAsteriskRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextPositionBehindFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextPositionBehindRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextPositionFrontFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextPositionFrontRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextPositionLineFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextPositionLineRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextPositionSquareFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextPositionSquareLeftFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextPositionSquareLeftRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextPositionSquareRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextPositionSquareRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextPositionSquareRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextPositionThroughFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextPositionThroughRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextPositionTightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextPositionTightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextPositionTopBottomFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextPositionTopBottomRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextProofingToolsFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextProofingToolsRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextQuoteFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextQuoteRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextSortAscendingFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextSortAscendingRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextSortDescendingFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextSortDescendingRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextStrikethroughFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextStrikethroughRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextSubscriptFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextSubscriptRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextSuperscriptFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextSuperscriptRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextTFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextTRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextUnderlineCharacterUFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextUnderlineCharacterURegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextUnderlineDoubleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextUnderlineDoubleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextUnderlineFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextUnderlineRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextWholeWordFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextWholeWordRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextWordCountFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextWordCountRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextWrapFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextWrapOffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextWrapOffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextWrapRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextboxAlignBottomCenterFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextboxAlignBottomCenterRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextboxAlignBottomFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextboxAlignBottomLeftFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextboxAlignBottomLeftRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextboxAlignBottomRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextboxAlignBottomRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextboxAlignBottomRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextboxAlignBottomRotate90FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextboxAlignBottomRotate90RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextboxAlignCenterFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextboxAlignCenterRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextboxAlignMiddleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextboxAlignMiddleLeftFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextboxAlignMiddleLeftRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextboxAlignMiddleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextboxAlignMiddleRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextboxAlignMiddleRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextboxAlignMiddleRotate90FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextboxAlignMiddleRotate90RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextboxAlignTopCenterFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextboxAlignTopCenterRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextboxAlignTopFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextboxAlignTopLeftFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextboxAlignTopLeftRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextboxAlignTopRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextboxAlignTopRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextboxAlignTopRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextboxAlignTopRotate90FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextboxAlignTopRotate90RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextboxCheckmarkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextboxCheckmarkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextboxFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextboxMoreFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextboxMoreRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextboxRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextboxRotate90FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextboxRotate90RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextboxSettingsFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTextboxSettingsRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlThinkingFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlThinkingRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlThumbDislikeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlThumbDislikeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlThumbLikeDislikeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlThumbLikeDislikeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlThumbLikeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlThumbLikeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTicketDiagonalFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTicketDiagonalRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTicketHorizontalFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTicketHorizontalRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTimeAndWeatherFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTimeAndWeatherRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTimePickerFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTimePickerRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTimelineFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTimelineRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTimer10FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTimer10RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTimer2FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTimer2RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTimer3FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTimer3RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTimerFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTimerOffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTimerOffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTimerRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlToggleLeftFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlToggleLeftRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlToggleMultipleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlToggleMultipleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlToggleRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlToggleRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlToolboxFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlToolboxRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTooltipQuoteFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTooltipQuoteRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTopSpeedFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTopSpeedRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTranslateAutoFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTranslateAutoRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTranslateFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTranslateOffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTranslateOffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTranslateRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTransmissionFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTransmissionRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTransparencySquareFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTransparencySquareRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTrayItemAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTrayItemAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTrayItemRemoveFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTrayItemRemoveRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTreeDeciduousFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTreeDeciduousRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTreeEvergreenFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTreeEvergreenRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTriangleDownFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTriangleDownRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTriangleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTriangleLeftFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTriangleLeftRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTriangleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTriangleRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTriangleRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTriangleUpFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTriangleUpRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTrophyFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTrophyLockFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTrophyLockRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTrophyOffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTrophyOffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTrophyRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTvArrowRightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTvArrowRightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTvFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTvRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTvUsbFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlTvUsbRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlUmbrellaFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlUmbrellaRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlUninstallAppFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlUninstallAppRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlUsbPlugFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlUsbPlugRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlUsbStickFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlUsbStickRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVaultColorSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVaultFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVaultRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVehicleBicycleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVehicleBicycleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVehicleBusFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVehicleBusRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVehicleCabFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVehicleCabRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVehicleCableCarFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVehicleCableCarRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVehicleCarCollisionFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVehicleCarCollisionRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVehicleCarFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVehicleCarParkingFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVehicleCarParkingRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVehicleCarProfileFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVehicleCarProfileLtrClockFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVehicleCarProfileLtrClockRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVehicleCarProfileLtrFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVehicleCarProfileLtrRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVehicleCarProfileRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVehicleCarProfileRtlFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVehicleCarProfileRtlRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVehicleCarRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVehicleMotorcycleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVehicleMotorcycleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVehicleShipFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVehicleShipRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVehicleSubwayClockFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVehicleSubwayClockRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVehicleSubwayFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVehicleSubwayRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVehicleTractorFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVehicleTractorRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVehicleTruckBagFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVehicleTruckBagRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVehicleTruckCubeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVehicleTruckCubeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVehicleTruckFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVehicleTruckProfileFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVehicleTruckProfileRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVehicleTruckRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVideo360FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVideo360OffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVideo360OffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVideo360RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVideoAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVideoAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVideoBackgroundEffectFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVideoBackgroundEffectHorizontalFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVideoBackgroundEffectHorizontalRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVideoBackgroundEffectRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVideoBluetoothFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVideoBluetoothRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVideoChatFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVideoChatRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVideoClipFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVideoClipMultipleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVideoClipMultipleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVideoClipOffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVideoClipOffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVideoClipOptimizeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVideoClipOptimizeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVideoClipRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVideoClipWandFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVideoClipWandRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVideoColorSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVideoFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVideoOffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVideoOffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVideoPersonCallFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVideoPersonCallRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVideoPersonClockFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVideoPersonClockRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVideoPersonFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVideoPersonOffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVideoPersonOffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVideoPersonPulseFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVideoPersonPulseRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVideoPersonRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVideoPersonSparkleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVideoPersonSparkleOffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVideoPersonSparkleOffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVideoPersonSparkleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVideoPersonStarFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVideoPersonStarOffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVideoPersonStarOffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVideoPersonStarRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVideoPlayPauseFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVideoPlayPauseRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVideoProhibitedFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVideoProhibitedRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVideoRecordingFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVideoRecordingRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVideoRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVideoSecurityFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVideoSecurityRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVideoSwitchFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVideoSwitchRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVideoSyncFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVideoSyncRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVideoUsbFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVideoUsbRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlViewDesktopFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlViewDesktopMobileFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlViewDesktopMobileRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlViewDesktopRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVirtualNetworkFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVirtualNetworkRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVirtualNetworkToolboxFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVirtualNetworkToolboxRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVoicemailArrowBackFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVoicemailArrowBackRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVoicemailArrowForwardFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVoicemailArrowForwardRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVoicemailArrowSubtractFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVoicemailArrowSubtractRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVoicemailFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVoicemailRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVoicemailShieldFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVoicemailShieldRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVoicemailSubtractFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVoicemailSubtractRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVoteFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlVoteRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWalkieTalkieFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWalkieTalkieRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWalletCreditCardFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWalletCreditCardRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWalletFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWalletRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWallpaperFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWallpaperRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWandFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWandRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWarningColorSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWarningFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWarningLockOpenFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWarningLockOpenRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWarningRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWarningShieldFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWarningShieldRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWasherFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWasherRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWaterFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWaterRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWeatherBlowingSnowFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWeatherBlowingSnowRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWeatherCloudyFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWeatherCloudyRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWeatherDrizzleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWeatherDrizzleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWeatherDuststormFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWeatherDuststormRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWeatherFogFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWeatherFogRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWeatherHailDayFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWeatherHailDayRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWeatherHailNightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWeatherHailNightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWeatherHazeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWeatherHazeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWeatherMoonFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWeatherMoonOffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWeatherMoonOffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWeatherMoonRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWeatherPartlyCloudyDayFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWeatherPartlyCloudyDayRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWeatherPartlyCloudyNightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWeatherPartlyCloudyNightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWeatherRainFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWeatherRainRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWeatherRainShowersDayFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWeatherRainShowersDayRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWeatherRainShowersNightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWeatherRainShowersNightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWeatherRainSnowFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWeatherRainSnowRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWeatherSnowFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWeatherSnowRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWeatherSnowShowerDayFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWeatherSnowShowerDayRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWeatherSnowShowerNightFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWeatherSnowShowerNightRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWeatherSnowflakeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWeatherSnowflakeRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWeatherSquallsFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWeatherSquallsRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWeatherSunnyFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWeatherSunnyHighFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWeatherSunnyHighRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWeatherSunnyLowFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWeatherSunnyLowRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWeatherSunnyRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWeatherThunderstormFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWeatherThunderstormRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWebAssetFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWebAssetRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWhiteboardFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWhiteboardOffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWhiteboardOffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWhiteboardRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWifi1FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWifi1RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWifi2FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWifi2RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWifi3FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWifi3RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWifi4FilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWifi4RegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWifiLockFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWifiLockRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWifiOffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWifiOffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWifiSettingsFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWifiSettingsRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWifiWarningFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWifiWarningRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWindowAdFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWindowAdOffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWindowAdOffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWindowAdPersonFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWindowAdPersonRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWindowAdRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWindowAppsFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWindowAppsRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWindowArrowUpFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWindowArrowUpRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWindowBrushFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWindowBrushRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWindowBulletListAddFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWindowBulletListAddRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWindowBulletListFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWindowBulletListRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWindowColumnOneFourthLeftFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWindowColumnOneFourthLeftFocusLeftFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWindowColumnOneFourthLeftFocusTopFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWindowColumnOneFourthLeftRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWindowConsoleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWindowConsoleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWindowDatabaseFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWindowDatabaseRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWindowDevEditFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWindowDevEditRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWindowDevToolsFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWindowDevToolsRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWindowEditFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWindowEditRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWindowFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWindowFingerprintFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWindowFingerprintRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWindowHeaderHorizontalFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWindowHeaderHorizontalOffFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWindowHeaderHorizontalOffRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWindowHeaderHorizontalRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWindowHeaderVerticalFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWindowHeaderVerticalRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWindowInprivateAccountFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWindowInprivateAccountRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWindowInprivateFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWindowInprivateRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWindowLocationTargetFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWindowLocationTargetRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWindowMultipleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWindowMultipleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWindowMultipleSwapFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWindowMultipleSwapRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWindowNewFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWindowNewRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWindowPlayFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWindowPlayRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWindowRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWindowSettingsFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWindowSettingsRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWindowShieldFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWindowShieldRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWindowTextFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWindowTextRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWindowWrenchFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWindowWrenchRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWrenchColorSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWrenchFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWrenchRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWrenchScrewdriverFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWrenchScrewdriverRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWrenchSettingsFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlWrenchSettingsRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlXboxConsoleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlXboxConsoleRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlXboxControllerErrorFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlXboxControllerErrorRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlXboxControllerFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlXboxControllerRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlXrayFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlXrayRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlZoomFitFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlZoomFitRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlZoomInFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlZoomInRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlZoomOutFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
      new FlZoomOutRegularSvg({
        attrObj: {
          width: '2em',
          height: '2em',
        },
        styleObj: $svgStyle
      }),
    );
  }
}