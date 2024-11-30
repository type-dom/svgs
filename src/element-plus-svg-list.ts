import { TypeDiv } from '@type-dom/framework';
import type { IStyle } from '@type-dom/css-type';
import {
  ElAddLocationSvg,
  ElAimSvg,
  ElAlarmClockSvg,
  ElAppleSvg,
  ElArrowDownBoldSvg,
  ElArrowDownSvg,
  ElArrowLeftBoldSvg,
  ElArrowLeftSvg,
  ElArrowRightBoldSvg,
  ElArrowRightSvg,
  ElArrowUpBoldSvg,
  ElArrowUpSvg,
  ElAvatarSvg,
  ElBackSvg,
  ElBaseballSvg,
  ElBasketballSvg,
  ElBellFilledSvg,
  ElBellSvg,
  ElBicycleSvg,
  ElBottomLeftSvg,
  ElBottomRightSvg,
  ElBottomSvg,
  ElBowlSvg,
  ElBoxSvg,
  ElBriefcaseSvg,
  ElBrushFilledSvg,
  ElBrushSvg,
  ElBurgerSvg,
  ElCalendarSvg,
  ElCameraFilledSvg,
  ElCameraSvg,
  ElCaretBottomSvg,
  ElCaretLeftSvg,
  ElCaretRightSvg,
  ElCaretTopSvg,
  ElCellphoneSvg,
  ElChatDotRoundSvg,
  ElChatDotSquareSvg,
  ElChatLineRoundSvg,
  ElChatLineSquareSvg,
  ElChatRoundSvg,
  ElChatSquareSvg,
  ElCheckSvg,
  ElCheckedSvg,
  ElCherrySvg,
  ElChickenSvg,
  ElChromeFilledSvg,
  ElCircleCheckFilledSvg,
  ElCircleCheckSvg,
  ElCircleCloseFilledSvg,
  ElCircleCloseSvg,
  ElCirclePlusFilledSvg,
  ElCirclePlusSvg,
  ElClockSvg,
  ElCloseBoldSvg,
  ElCloseSvg,
  ElCloudySvg,
  ElCoffeeCupSvg,
  ElCoffeeSvg,
  ElCoinSvg,
  ElColdDrinkSvg,
  ElCollectionTagSvg,
  ElCollectionSvg,
  ElCommentSvg,
  ElCompassSvg,
  ElConnectionSvg,
  ElCoordinateSvg,
  ElCopyDocumentSvg,
  ElCpuSvg,
  ElCreditCardSvg,
  ElCropSvg,
  ElDArrowLeftSvg,
  ElDArrowRightSvg,
  ElDCaretSvg,
  ElDataAnalysisSvg,
  ElDataBoardSvg,
  ElDataLineSvg,
  ElDeleteFilledSvg,
  ElDeleteLocationSvg,
  ElDeleteSvg,
  ElDessertSvg,
  ElDiscountSvg,
  ElDishDotSvg,
  ElDishSvg,
  ElDocumentAddSvg,
  ElDocumentCheckedSvg,
  ElDocumentCopySvg,
  ElDocumentDeleteSvg,
  ElDocumentRemoveSvg,
  ElDocumentSvg,
  ElDownloadSvg,
  ElDrizzlingSvg,
  ElEditPenSvg,
  ElEditSvg,
  ElElemeFilledSvg,
  ElElemeSvg,
  ElElementPlusSvg,
  ElExpandSvg,
  ElFailedSvg,
  ElFemaleSvg,
  ElFilesSvg,
  ElFilmSvg,
  ElFilterSvg,
  ElFinishedSvg,
  ElFirstAidKitSvg,
  ElFlagSvg,
  ElFoldSvg,
  ElFolderAddSvg,
  ElFolderCheckedSvg,
  ElFolderDeleteSvg,
  ElFolderOpenedSvg,
  ElFolderRemoveSvg,
  ElFolderSvg,
  ElFoodSvg,
  ElFootballSvg,
  ElForkSpoonSvg,
  ElFriesSvg,
  ElFullScreenSvg,
  ElGobletFullSvg,
  ElGobletSquareFullSvg,
  ElGobletSquareSvg,
  ElGobletSvg,
  ElGoldMedalSvg,
  ElGoodsFilledSvg,
  ElGoodsSvg,
  ElGrapeSvg,
  ElGridSvg,
  ElGuideSvg,
  ElHandbagSvg,
  ElHeadsetSvg,
  ElHelpFilledSvg,
  ElHelpSvg,
  ElHideSvg,
  ElHistogramSvg,
  ElHomeFilledSvg,
  ElHotWaterSvg,
  ElHouseSvg,
  ElIceCreamRoundSvg,
  ElIceCreamSquareSvg,
  ElIceCreamSvg,
  ElIceDrinkSvg,
  ElIceTeaSvg,
  ElInfoFilledSvg,
  ElIphoneSvg,
  ElKeySvg,
  ElKnifeForkSvg,
  ElLightningSvg,
  ElLinkSvg,
  ElListSvg,
  ElLoadingSvg,
  ElLocationFilledSvg,
  ElLocationInformationSvg,
  ElLocationSvg,
  ElLockSvg,
  ElLollipopSvg,
  ElMagicStickSvg,
  ElMagnetSvg,
  ElMaleSvg,
  ElManagementSvg,
  ElMapLocationSvg,
  ElMedalSvg,
  ElMemoSvg,
  ElMenuSvg,
  ElMessageBoxSvg,
  ElMessageSvg,
  ElMicSvg,
  ElMicrophoneSvg,
  ElMilkTeaSvg,
  ElMinusSvg,
  ElMoneySvg,
  ElMonitorSvg,
  ElMoonNightSvg,
  ElMoonSvg,
  ElMoreFilledSvg,
  ElMoreSvg,
  ElMostlyCloudySvg,
  ElMouseSvg,
  ElMugSvg,
  ElMuteNotificationSvg,
  ElMuteSvg,
  ElNoSmokingSvg,
  ElNotebookSvg,
  ElNotificationSvg,
  ElOdometerSvg,
  ElOfficeBuildingSvg,
  ElOpenSvg,
  ElOperationSvg,
  ElOpportunitySvg,
  ElOrangeSvg,
  ElPaperclipSvg,
  ElPartlyCloudySvg,
  ElPearSvg,
  ElPhoneFilledSvg,
  ElPhoneSvg,
  ElPictureFilledSvg,
  ElPictureRoundedSvg,
  ElPictureSvg,
  ElPieChartSvg,
  ElPlaceSvg,
  ElPlatformSvg,
  ElPlusSvg,
  ElPointerSvg,
  ElPositionSvg,
  ElPostcardSvg,
  ElPouringSvg,
  ElPresentSvg,
  ElPriceTagSvg,
  ElPrinterSvg,
  ElPromotionSvg,
  ElQuartzWatchSvg,
  ElQuestionFilledSvg,
  ElRankSvg,
  ElReadingLampSvg,
  ElReadingSvg,
  ElRefreshLeftSvg,
  ElRefreshRightSvg,
  ElRefreshSvg,
  ElRefrigeratorSvg,
  ElRemoveFilledSvg,
  ElRemoveSvg,
  ElRightSvg,
  ElScaleToOriginalSvg,
  ElSchoolSvg,
  ElScissorSvg,
  ElSearchSvg,
  ElSelectSvg,
  ElSellSvg,
  ElSemiSelectSvg,
  ElServiceSvg,
  ElSetUpSvg,
  ElSettingSvg,
  ElShareSvg,
  ElShipSvg,
  ElShopSvg,
  ElShoppingBagSvg,
  ElShoppingCartFullSvg,
  ElShoppingCartSvg,
  ElShoppingTrolleySvg,
  ElSmokingSvg,
  ElSoccerSvg,
  ElSoldOutSvg,
  ElSortDownSvg,
  ElSortUpSvg,
  ElSortSvg,
  ElStampSvg,
  ElStarFilledSvg,
  ElStarSvg,
  ElStopwatchSvg,
  ElSuccessFilledSvg,
  ElSugarSvg,
  ElSuitcaseLineSvg,
  ElSuitcaseSvg,
  ElSunnySvg,
  ElSunriseSvg,
  ElSunsetSvg,
  ElSwitchButtonSvg,
  ElSwitchFilledSvg,
  ElSwitchSvg,
  ElTakeawayBoxSvg,
  ElTicketSvg,
  ElTicketsSvg,
  ElTimerSvg,
  ElToiletPaperSvg,
  ElToolsSvg,
  ElTopLeftSvg,
  ElTopRightSvg,
  ElTopSvg,
  ElTrendChartsSvg,
  ElTrophyBaseSvg,
  ElTrophySvg,
  ElTurnOffSvg,
  ElUmbrellaSvg,
  ElUnlockSvg,
  ElUploadFilledSvg,
  ElUploadSvg,
  ElUserFilledSvg,
  ElUserSvg,
  ElVanSvg,
  ElVideoCameraFilledSvg,
  ElVideoCameraSvg,
  ElVideoPauseSvg,
  ElVideoPlaySvg,
  ElViewSvg,
  ElWalletFilledSvg,
  ElWalletSvg,
  ElWarnTriangleFilledSvg,
  ElWarningFilledSvg,
  ElWarningSvg,
  ElWatchSvg,
  ElWatermelonSvg,
  ElWindPowerSvg,
  ElZoomInSvg,
  ElZoomOutSvg,
} from './index';
export class ElementPlusSvgList extends TypeDiv {
  className: 'ElementPlusSvgList';
  constructor() {
    super();
    console.log('ElementPlusSvgList constructor . ');
    this.className = 'ElementPlusSvgList';
    const $svgStyle: IStyle = {
      padding: '10px',
      border: '1px solid #ddd'
    };
    this.addChildren(
      new ElAddLocationSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElAimSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElAlarmClockSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElAppleSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElArrowDownBoldSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElArrowDownSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElArrowLeftBoldSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElArrowLeftSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElArrowRightBoldSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElArrowRightSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElArrowUpBoldSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElArrowUpSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElAvatarSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElBackSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElBaseballSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElBasketballSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElBellFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElBellSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElBicycleSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElBottomLeftSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElBottomRightSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElBottomSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElBowlSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElBoxSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElBriefcaseSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElBrushFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElBrushSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElBurgerSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElCalendarSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElCameraFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElCameraSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElCaretBottomSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElCaretLeftSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElCaretRightSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElCaretTopSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElCellphoneSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElChatDotRoundSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElChatDotSquareSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElChatLineRoundSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElChatLineSquareSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElChatRoundSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElChatSquareSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElCheckSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElCheckedSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElCherrySvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElChickenSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElChromeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElCircleCheckFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElCircleCheckSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElCircleCloseFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElCircleCloseSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElCirclePlusFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElCirclePlusSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElClockSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElCloseBoldSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElCloseSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElCloudySvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElCoffeeCupSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElCoffeeSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElCoinSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElColdDrinkSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElCollectionTagSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElCollectionSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElCommentSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElCompassSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElConnectionSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElCoordinateSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElCopyDocumentSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElCpuSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElCreditCardSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElCropSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElDArrowLeftSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElDArrowRightSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElDCaretSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElDataAnalysisSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElDataBoardSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElDataLineSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElDeleteFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElDeleteLocationSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElDeleteSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElDessertSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElDiscountSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElDishDotSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElDishSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElDocumentAddSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElDocumentCheckedSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElDocumentCopySvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElDocumentDeleteSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElDocumentRemoveSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElDocumentSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElDownloadSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElDrizzlingSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElEditPenSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElEditSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElElemeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElElemeSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElElementPlusSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElExpandSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElFailedSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElFemaleSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElFilesSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElFilmSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElFilterSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElFinishedSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElFirstAidKitSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElFlagSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElFoldSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElFolderAddSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElFolderCheckedSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElFolderDeleteSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElFolderOpenedSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElFolderRemoveSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElFolderSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElFoodSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElFootballSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElForkSpoonSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElFriesSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElFullScreenSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElGobletFullSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElGobletSquareFullSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElGobletSquareSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElGobletSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElGoldMedalSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElGoodsFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElGoodsSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElGrapeSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElGridSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElGuideSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElHandbagSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElHeadsetSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElHelpFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElHelpSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElHideSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElHistogramSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElHomeFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElHotWaterSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElHouseSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElIceCreamRoundSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElIceCreamSquareSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElIceCreamSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElIceDrinkSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElIceTeaSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElInfoFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElIphoneSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElKeySvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElKnifeForkSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElLightningSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElLinkSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElListSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElLoadingSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElLocationFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElLocationInformationSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElLocationSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElLockSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElLollipopSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElMagicStickSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElMagnetSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElMaleSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElManagementSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElMapLocationSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElMedalSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElMemoSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElMenuSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElMessageBoxSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElMessageSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElMicSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElMicrophoneSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElMilkTeaSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElMinusSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElMoneySvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElMonitorSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElMoonNightSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElMoonSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElMoreFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElMoreSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElMostlyCloudySvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElMouseSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElMugSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElMuteNotificationSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElMuteSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElNoSmokingSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElNotebookSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElNotificationSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElOdometerSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElOfficeBuildingSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElOpenSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElOperationSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElOpportunitySvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElOrangeSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElPaperclipSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElPartlyCloudySvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElPearSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElPhoneFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElPhoneSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElPictureFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElPictureRoundedSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElPictureSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElPieChartSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElPlaceSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElPlatformSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElPlusSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElPointerSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElPositionSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElPostcardSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElPouringSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElPresentSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElPriceTagSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElPrinterSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElPromotionSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElQuartzWatchSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElQuestionFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElRankSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElReadingLampSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElReadingSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElRefreshLeftSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElRefreshRightSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElRefreshSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElRefrigeratorSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElRemoveFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElRemoveSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElRightSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElScaleToOriginalSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElSchoolSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElScissorSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElSearchSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElSelectSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElSellSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElSemiSelectSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElServiceSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElSetUpSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElSettingSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElShareSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElShipSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElShopSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElShoppingBagSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElShoppingCartFullSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElShoppingCartSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElShoppingTrolleySvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElSmokingSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElSoccerSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElSoldOutSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElSortDownSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElSortUpSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElSortSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElStampSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElStarFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElStarSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElStopwatchSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElSuccessFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElSugarSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElSuitcaseLineSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElSuitcaseSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElSunnySvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElSunriseSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElSunsetSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElSwitchButtonSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElSwitchFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElSwitchSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElTakeawayBoxSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElTicketSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElTicketsSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElTimerSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElToiletPaperSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElToolsSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElTopLeftSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElTopRightSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElTopSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElTrendChartsSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElTrophyBaseSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElTrophySvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElTurnOffSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElUmbrellaSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElUnlockSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElUploadFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElUploadSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElUserFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElUserSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElVanSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElVideoCameraFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElVideoCameraSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElVideoPauseSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElVideoPlaySvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElViewSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElWalletFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElWalletSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElWarnTriangleFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElWarningFilledSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElWarningSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElWatchSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElWatermelonSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElWindPowerSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElZoomInSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
      new ElZoomOutSvg({
        attrObj: {
          width: '2em',
          height: '2em'
        },
        styleObj: $svgStyle
      }),
    );
  }
}