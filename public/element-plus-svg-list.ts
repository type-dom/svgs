import { IStyle, TextNode, TypeDiv } from 'type-dom.ts';
import { SVGSRoot } from "./svgs-root";
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
} from '../src';
export class ElementPlusSvgList extends TypeDiv {
  className: 'ElementPlusSvgList';
  constructor(public parent: SVGSRoot) {
    super();
    console.log('ElementPlusSvgList constructor . ');
    this.className = 'ElementPlusSvgList';
    this.addStyleObj({
      padding: '30px'
    });
    const $svgStyle: Partial<IStyle> = {
      padding: '10px',
      border: '1px solid #ddd'
    };
    this.createItems(this, [
      {
        TypeClass: ElAddLocationSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElAimSvg,
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
      {
        TypeClass: ElAppleSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElArrowDownBoldSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElArrowDownSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElArrowLeftBoldSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElArrowLeftSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElArrowRightBoldSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElArrowRightSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElArrowUpBoldSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElArrowUpSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElAvatarSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElBackSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElBaseballSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElBasketballSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElBellFilledSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElBellSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElBicycleSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElBottomLeftSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElBottomRightSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElBottomSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElBowlSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElBoxSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElBriefcaseSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElBrushFilledSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElBrushSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElBurgerSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElCalendarSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElCameraFilledSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElCameraSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElCaretBottomSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElCaretLeftSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElCaretRightSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElCaretTopSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElCellphoneSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElChatDotRoundSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElChatDotSquareSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElChatLineRoundSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElChatLineSquareSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElChatRoundSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElChatSquareSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElCheckSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElCheckedSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElCherrySvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElChickenSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElChromeFilledSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElCircleCheckFilledSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElCircleCheckSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElCircleCloseFilledSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElCircleCloseSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElCirclePlusFilledSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElCirclePlusSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElClockSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElCloseBoldSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElCloseSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElCloudySvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElCoffeeCupSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElCoffeeSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElCoinSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElColdDrinkSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElCollectionTagSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElCollectionSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElCommentSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElCompassSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElConnectionSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElCoordinateSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElCopyDocumentSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElCpuSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElCreditCardSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElCropSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElDArrowLeftSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElDArrowRightSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElDCaretSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElDataAnalysisSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElDataBoardSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElDataLineSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElDeleteFilledSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElDeleteLocationSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElDeleteSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElDessertSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElDiscountSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElDishDotSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElDishSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElDocumentAddSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElDocumentCheckedSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElDocumentCopySvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElDocumentDeleteSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElDocumentRemoveSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElDocumentSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElDownloadSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElDrizzlingSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElEditPenSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElEditSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElElemeFilledSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElElemeSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElElementPlusSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElExpandSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElFailedSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElFemaleSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElFilesSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElFilmSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElFilterSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElFinishedSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElFirstAidKitSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElFlagSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElFoldSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElFolderAddSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElFolderCheckedSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElFolderDeleteSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElFolderOpenedSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElFolderRemoveSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElFolderSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElFoodSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElFootballSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElForkSpoonSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElFriesSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElFullScreenSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElGobletFullSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElGobletSquareFullSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElGobletSquareSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElGobletSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElGoldMedalSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElGoodsFilledSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElGoodsSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElGrapeSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElGridSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElGuideSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElHandbagSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElHeadsetSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElHelpFilledSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElHelpSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElHideSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElHistogramSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElHomeFilledSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElHotWaterSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElHouseSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElIceCreamRoundSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElIceCreamSquareSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElIceCreamSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElIceDrinkSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElIceTeaSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElInfoFilledSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElIphoneSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElKeySvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElKnifeForkSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElLightningSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElLinkSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElListSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElLoadingSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElLocationFilledSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElLocationInformationSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElLocationSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElLockSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElLollipopSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElMagicStickSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElMagnetSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElMaleSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElManagementSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElMapLocationSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElMedalSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElMemoSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElMenuSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElMessageBoxSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElMessageSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElMicSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElMicrophoneSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElMilkTeaSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElMinusSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElMoneySvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElMonitorSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElMoonNightSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElMoonSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElMoreFilledSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElMoreSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElMostlyCloudySvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElMouseSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElMugSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElMuteNotificationSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElMuteSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElNoSmokingSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElNotebookSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElNotificationSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElOdometerSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElOfficeBuildingSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElOpenSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElOperationSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElOpportunitySvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElOrangeSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElPaperclipSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElPartlyCloudySvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElPearSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElPhoneFilledSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElPhoneSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElPictureFilledSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElPictureRoundedSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElPictureSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElPieChartSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElPlaceSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElPlatformSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElPlusSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElPointerSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElPositionSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElPostcardSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElPouringSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElPresentSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElPriceTagSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElPrinterSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElPromotionSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElQuartzWatchSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElQuestionFilledSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElRankSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElReadingLampSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElReadingSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElRefreshLeftSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElRefreshRightSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElRefreshSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElRefrigeratorSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElRemoveFilledSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElRemoveSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElRightSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElScaleToOriginalSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElSchoolSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElScissorSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElSearchSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElSelectSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElSellSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElSemiSelectSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElServiceSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElSetUpSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElSettingSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElShareSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElShipSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElShopSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElShoppingBagSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElShoppingCartFullSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElShoppingCartSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElShoppingTrolleySvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElSmokingSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElSoccerSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElSoldOutSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElSortDownSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElSortUpSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElSortSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElStampSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElStarFilledSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElStarSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElStopwatchSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElSuccessFilledSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElSugarSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElSuitcaseLineSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElSuitcaseSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElSunnySvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElSunriseSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElSunsetSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElSwitchButtonSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElSwitchFilledSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElSwitchSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElTakeawayBoxSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElTicketSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElTicketsSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElTimerSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElToiletPaperSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElToolsSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElTopLeftSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElTopRightSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElTopSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElTrendChartsSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElTrophyBaseSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElTrophySvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElTurnOffSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElUmbrellaSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElUnlockSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElUploadFilledSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElUploadSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElUserFilledSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElUserSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElVanSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElVideoCameraFilledSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElVideoCameraSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElVideoPauseSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElVideoPlaySvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElViewSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElWalletFilledSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElWalletSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElWarnTriangleFilledSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElWarningFilledSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElWarningSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElWatchSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElWatermelonSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElWindPowerSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElZoomInSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
      {
        TypeClass: ElZoomOutSvg,
        propObj: {
          attrObj: {
            width: '2em',
            height: '2em',
          },
          styleObj: $svgStyle
        }
      },
    ]);
  }
}