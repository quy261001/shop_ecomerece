import type { ThemeConfig } from 'antd';
import colors from './baseTheme';

const defaultConfig: ThemeConfig = {
  token: {
    fontFamily: 'Be Vietnam Pro',
    colorPrimary: colors.primary,
    colorLink: colors.blue,
    borderRadiusLG: 12,
    borderRadius: 10,
    borderRadiusSM: 8,
    borderRadiusXS: 6,
    fontSizeHeading2: 32,
    controlHeightLG: 48,
    fontSizeLG: 16,
  },
  components: {
    Layout: {
      headerPadding: '24px 32px',
      headerHeight: 80,
    },
    Form: {
      labelFontSize: 12,
      verticalLabelPadding: '0 0 12px',
    },
    Input: {
      lineWidth: 2,
      paddingBlock: 12,
      paddingBlockLG: 12,
      paddingInline: 16,
      paddingInlineLG: 16,
      fontSizeLG: 14,
    },
    Select: {
      lineWidth: 2,
      fontSizeLG: 14,
    },
    Button: {
      fontWeight: 700,
      lineWidth: 2,
    },
    Switch: {
      handleSize: 23.5,
    },
    Menu: {
      activeBarBorderWidth: 0,
      itemMarginBlock: 4,
      itemMarginInline: 0,
      itemBorderRadius: 8,
      itemHeight: 40,
      iconMarginInlineEnd: 12,
    },
  },
};

export default defaultConfig;
