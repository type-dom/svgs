import {
  ElCircleCheckSvg,
  ElCircleCloseFilledSvg, ElCircleCloseSvg,
  ElCloseSvg,
  ElInfoFilledSvg, ElLoadingSvg,
  ElSuccessFilledSvg,
  ElWarningFilledSvg
} from '@type-dom/svgs';

export const CloseComponents = {
  Close: ElCloseSvg
};

export const TypeComponents = {
  Close: ElCloseSvg,
  SuccessFilled: ElSuccessFilledSvg,
  InfoFilled: ElInfoFilledSvg,
  WarningFilled: ElWarningFilledSvg,
  CircleCloseFilled: ElCircleCloseFilledSvg
};

export const TypeComponentsMap = {
  success: ElSuccessFilledSvg,
  warning: ElWarningFilledSvg,
  error: ElCircleCloseFilledSvg,
  info: ElInfoFilledSvg
};

export const ValidateComponentsMap = {
  validating: ElLoadingSvg,
  success: ElCircleCheckSvg,
  error: ElCircleCloseSvg
};
