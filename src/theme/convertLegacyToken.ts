// Source:
// https://github.com/ant-design/ant-design/blob/2c9fbc8f0c714c9de27fc2f54712acb69ac1abd8/components/style/themes/default.less
import type { MapToken } from 'antd/lib/theme/interface';
import formatToken from 'antd/lib/theme/util/alias';

export default function convertLegacyToken(mapToken: MapToken) {
  const token = formatToken(mapToken as any);

  const raw = {
    theme: 'default',
    'ant-prefix': 'ant',
    'html-selector': 'html',

    // -------- Colors -----------
    // >>> Primary
    'primary-color': token.colorPrimary,
    'primary-color-hover': token.colorPrimaryHover,
    'primary-color-active': token.colorPrimaryActive,
    'primary-color-outline': 'fade(@primary-color, @outline-fade)',
    'processing-color': token.colorPrimary,

    // >>> Info
    'info-color': token.colorInfo,
    'info-color-deprecated-bg': token.colorInfoBg,
    'info-color-deprecated-border': token.colorInfoBorder,

    // >>> Success
    'success-color': token.colorSuccess,
    'success-color-hover': token.colorSuccessBgHover,
    'success-color-active': token.colorSuccessActive,
    'success-color-outline': 'fade(@success-color, @outline-fade)',
    'success-color-deprecated-bg': token.colorSuccessBg,
    'success-color-deprecated-border': token.colorSuccessBorder,

    // >>> Warning
    'warning-color': token.colorWarning,
    'warning-color-hover': token.colorWarningHover,
    'warning-color-active': token.colorWarningActive,
    'warning-color-outline': 'fade(@warning-color, @outline-fade)',
    'warning-color-deprecated-bg': token.colorWarningBg,
    'warning-color-deprecated-border': token.colorWarningBorder,

    // >>> Error
    'error-color': token.colorError,
    'error-color-hover': token.colorErrorHover,
    'error-color-active': token.colorErrorActive,
    'error-color-outline': 'fade(@error-color, @outline-fade)',
    'error-color-deprecated-bg': token.colorErrorBg,
    'error-color-deprecated-border': token.colorErrorBorder,

    'highlight-color': token.colorHighlight,
    'normal-color': '#d9d9d9',
    white: token.colorWhite,
    black: '#000',

    // Color used by default to control hover and active backgrounds and for
    // alert info backgrounds.
    'primary-1': token.colorPrimaryBg,
    'primary-2': token.colorPrimaryBgHover,
    'primary-3': token.colorPrimaryBorder,
    'primary-4': token.colorPrimaryBorderHover,
    'primary-5': token.colorPrimaryHover,
    'primary-6': token.colorPrimary,
    'primary-7': token.colorPrimaryActive,
    'primary-8': token.colorPrimaryTextHover,
    'primary-9': token.colorPrimaryText,
    'primary-10': token.colorPrimaryTextActive,

    // Base Scaffolding Variables
    // ---
    // Background color for `<body>`
    'body-background': token.colorBgBase,

    // Base background color for most components
    'component-background': token.colorBgContainer,

    // Popover background color
    'popover-background': token.colorBgElevated,
    'popover-customize-border-color': token.colorSplit,
    'font-family': token.fontFamily,
    'code-family': "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
    'text-color': token.colorText,
    'text-color-secondary': token.colorTextSecondary,
    'text-color-inverse': token.colorWhite,
    'icon-color': token.colorIcon,
    'icon-color-hover': token.colorIconHover,
    'heading-color': token.colorTextHeading,
    'text-color-dark': 'fade(@white, 85%)',
    'text-color-secondary-dark': 'fade(@white, 65%)',
    'text-selection-bg': token.colorPrimary,
    'font-variant-base': 'tabular-nums',
    'font-feature-settings-base': 'tnum',
    'font-size-base': token.fontSize,
    'font-size-lg': token.fontSizeLG,
    'font-size-sm': token.fontSizeSM,
    'heading-1-size': token.fontSizeHeading1,
    'heading-2-size': token.fontSizeHeading2,
    'heading-3-size': token.fontSizeHeading3,
    'heading-4-size': token.fontSizeHeading4,
    'heading-5-size': token.fontSizeHeading5,

    // https://github.com/ant-design/ant-design/issues/20210
    'line-height-base': token.lineHeight,
    'border-radius-base': token.borderRadius,
    'border-radius-sm': token.borderRadiusSM,

    // control border
    'control-border-radius': token.borderRadius,

    // arrow border
    'arrow-border-radius': token.borderRadiusSM, //  2px;

    // vertical paddings
    'padding-lg': token.paddingLG,
    'padding-md': token.padding,
    'padding-sm': token.paddingSM,
    'padding-xs': token.paddingXS,
    'padding-xss': token.paddingXXS,

    // vertical padding for all form controls
    'control-padding-horizontal': token.paddingSM, //@padding-sm;
    'control-padding-horizontal-sm': token.paddingXS, // @padding-xs;

    // vertical margins
    'margin-lg': token.marginLG,
    'margin-md': token.margin,
    'margin-sm': token.marginSM,
    'margin-xs': token.marginXS,
    'margin-xss': token.marginXXS,

    // height rules
    'height-base': token.controlHeight,
    'height-lg': token.controlHeightLG,
    'height-sm': token.controlHeightSM,

    // The background colors for active and hover states for things like
    // list items or table cells.
    'item-active-bg': token.controlItemBgActive,
    'item-hover-bg': token.controlItemBgHover,

    // ICONFONT
    'iconfont-css-prefix': 'anticon',

    // LINK
    'link-color': token.colorLink,
    'link-hover-color': token.colorLinkHover,
    'link-active-color': token.colorLinkActive,
    'link-decoration': 'none',
    'link-hover-decoration': 'none',
    'link-focus-decoration': 'none',
    'link-focus-outline': 0,

    // Animation
    'ease-base-out': token.motionEaseOut,
    'ease-base-in': 'cubic-bezier(0.9, 0, 0.3, 0.7)',
    'ease-out': token.motionEaseOut,
    'ease-in': 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
    'ease-in-out': token.motionEaseInOut,
    'ease-out-back': token.motionEaseOutBack,
    'ease-in-back': 'cubic-bezier(0.71, -0.46, 0.88, 0.6)',
    'ease-in-out-back': 'cubic-bezier(0.71, -0.46, 0.29, 1.46)',
    'ease-out-circ': token.motionEaseOutCirc,
    'ease-in-circ': 'cubic-bezier(0.6, 0.04, 0.98, 0.34)',
    'ease-in-out-circ': token.motionEaseInOutCirc,
    'ease-out-quint': token.motionEaseOutQuint,
    'ease-in-quint': token.motionEaseInQuint,
    'ease-in-out-quint': 'cubic-bezier(0.86, 0, 0.07, 1)',

    // Border color
    'border-color-base': token.colorBorder,
    'border-color-split': token.colorSplit,
    'border-color-inverse': token.colorWhite,
    'border-width-base': token.lineWidth,
    'border-style-base': 'solid',

    // Outline
    'outline-blur-size': 0,
    'outline-width': token.controlOutlineWidth,
    'outline-color': token.controlOutline,
    'outline-fade': '20%',
    'background-color-light': 'hsv(0, 0, 98%)', // background of header and selected item
    'background-color-base': 'hsv(0, 0, 96%)', // Default grey background color

    // Disabled states
    'disabled-color': token.colorTextDisabled,
    'disabled-bg': token.colorBgContainerDisabled,
    'disabled-active-bg': token.colorBgContainerDisabled, // tint(@black, 90%);
    'disabled-color-dark': 'fade(#fff, 35%)',

    // Shadow
    'shadow-color': 'rgba(0, 0, 0, 0.15)',
    'shadow-color-inverse': token.colorBgContainer,
    'box-shadow-base': token.boxShadow,
    'shadow-1-up': token.boxShadowDrawerUp,
    'shadow-1-down': token.boxShadowDrawerDown,
    'shadow-1-left': token.boxShadowDrawerLeft,
    'shadow-1-right': token.boxShadowDrawerRight,
    'shadow-2': token.boxShadowSecondary,

    // ==========================================================================
    // ==                              Components                              ==
    // ==========================================================================
    // Buttons
    'btn-font-weight': '400',
    'btn-border-radius-base': '@border-radius-base',
    'btn-border-radius-sm': '@border-radius-base',
    'btn-border-width': '@border-width-base',
    'btn-border-style': '@border-style-base',
    'btn-shadow': '0 2px 0 rgba(0, 0, 0, 0.015)',
    'btn-primary-shadow': '0 2px 0 rgba(0, 0, 0, 0.045)',
    'btn-text-shadow': '0 -1px 0 rgba(0, 0, 0, 0.12)',

    'btn-primary-color': '#fff',
    'btn-primary-bg': '@primary-color',

    'btn-default-color': '@text-color',
    'btn-default-bg': '@component-background',
    'btn-default-border': '@border-color-base',

    'btn-danger-color': '#fff',
    'btn-danger-bg': '@error-color',
    'btn-danger-border': '@error-color',

    'btn-disable-color': '@disabled-color',
    'btn-disable-bg': '@disabled-bg',
    'btn-disable-border': '@border-color-base',

    'btn-default-ghost-color': '@component-background',
    'btn-default-ghost-bg': 'transparent',
    'btn-default-ghost-border': '@component-background',

    'btn-font-size-lg': '@font-size-lg',
    'btn-font-size-sm': '@font-size-base',
    'btn-padding-horizontal-base': '@padding-md - 1px',
    'btn-padding-horizontal-lg': '@btn-padding-horizontal-base',
    'btn-padding-horizontal-sm': '@padding-xs - 1px',

    'btn-height-base': '@height-base',
    'btn-height-lg': '@height-lg',
    'btn-height-sm': '@height-sm',

    'btn-line-height': '@line-height-base',

    'btn-circle-size': '@btn-height-base',
    'btn-circle-size-lg': '@btn-height-lg',
    'btn-circle-size-sm': '@btn-height-sm',

    'btn-square-size': '@btn-height-base',
    'btn-square-size-lg': '@btn-height-lg',
    'btn-square-size-sm': '@btn-height-sm',
    'btn-square-only-icon-size': '@font-size-base + 2px',
    'btn-square-only-icon-size-sm': '@font-size-base',
    'btn-square-only-icon-size-lg': '@btn-font-size-lg + 2px',

    'btn-group-border': '@primary-5',

    'btn-link-hover-bg': 'transparent',
    'btn-text-hover-bg': 'rgba(0, 0, 0, 0.018)',

    // Checkbox
    'checkbox-size': '16px',
    'checkbox-color': '@primary-color',
    'checkbox-check-color': '#fff',
    'checkbox-check-bg': '@checkbox-check-color',
    'checkbox-border-width': '@border-width-base',
    'checkbox-border-radius': '@border-radius-base',
    'checkbox-group-item-margin-right': '8px',

    // Descriptions
    'descriptions-bg': '#fafafa',
    'descriptions-title-margin-bottom': '20px',
    'descriptions-default-padding': '@padding-md @padding-lg',
    'descriptions-middle-padding': '@padding-sm @padding-lg',
    'descriptions-small-padding': '@padding-xs @padding-md',
    'descriptions-item-padding-bottom': '@padding-md',
    'descriptions-item-trailing-colon': 'true',
    'descriptions-item-label-colon-margin-right': '8px',
    'descriptions-item-label-colon-margin-left': '2px',
    'descriptions-extra-color': '@text-color',

    // Divider
    'divider-text-padding': '1em',
    'divider-orientation-margin': '5%',
    'divider-color': 'rgba(0, 0, 0, 6%)',
    'divider-vertical-gutter': '8px',

    // Dropdown
    'dropdown-selected-color': '@primary-color',
    'dropdown-menu-submenu-disabled-bg': '@component-background',
    'dropdown-selected-bg': '@item-active-bg',

    // Empty
    'empty-font-size': '@font-size-base',

    // Radio
    'radio-size': '16px',
    'radio-top': '0.2em',
    'radio-border-width': '1px',
    'radio-dot-size': '@radio-size - 8px',
    'radio-dot-color': '@primary-color',
    'radio-dot-disabled-color': 'fade(@black, 20%)',
    'radio-solid-checked-color': '@component-background',

    // Radio buttons
    'radio-button-bg': '@btn-default-bg',
    'radio-button-checked-bg': '@btn-default-bg',
    'radio-button-color': '@btn-default-color',
    'radio-button-hover-color': '@primary-5',
    'radio-button-active-color': '@primary-7',
    'radio-button-padding-horizontal': '@padding-md - 1px',
    'radio-disabled-button-checked-bg': '@disabled-active-bg',
    'radio-disabled-button-checked-color': '@disabled-color',
    'radio-wrapper-margin-right': '8px',

    // Media queries breakpoints
    // @screen-xs and @screen-xs-min is not used in Grid
    // smallest break point is @screen-md
    'screen-xs': '480px',
    'screen-xs-min': '@screen-xs',
    // 👆 Extra small screen / phone

    // 👇 Small screen / tablet
    'screen-sm': '576px',
    'screen-sm-min': '@screen-sm',

    // Medium screen / desktop
    'screen-md': '768px',
    'screen-md-min': '@screen-md',

    // Large screen / wide desktop
    'screen-lg': '992px',
    'screen-lg-min': '@screen-lg',

    // Extra large screen / full hd
    'screen-xl': '1200px',
    'screen-xl-min': '@screen-xl',

    // Extra extra large screen / large desktop
    'screen-xxl': '1600px',
    'screen-xxl-min': '@screen-xxl',

    // provide a maximum
    'screen-xs-max': '(@screen-sm-min - 1px)',
    'screen-sm-max': '(@screen-md-min - 1px)',
    'screen-md-max': '(@screen-lg-min - 1px)',
    'screen-lg-max': '(@screen-xl-min - 1px)',
    'screen-xl-max': '(@screen-xxl-min - 1px)',

    // Grid system
    'grid-columns': '24',

    // Layout
    'layout-body-background': '#f0f2f5',
    'layout-header-background': '#001529',
    'layout-header-height': '64px',
    'layout-header-padding': '0 50px',
    'layout-header-color': '@text-color',
    'layout-footer-padding': '24px 50px',
    'layout-footer-background': '@layout-body-background',
    'layout-sider-background': '@layout-header-background',
    'layout-trigger-height': '48px',
    'layout-trigger-background': '#002140',
    'layout-trigger-color': '#fff',
    'layout-zero-trigger-width': '36px',
    'layout-zero-trigger-height': '42px',
    // Layout light theme
    'layout-sider-background-light': '#fff',
    'layout-trigger-background-light': '#fff',
    'layout-trigger-color-light': '@text-color',

    // z-index list, order by `z-index`
    'zindex-badge': 'auto',
    'zindex-table-fixed': '2',
    'zindex-affix': '10',
    'zindex-back-top': '10',
    'zindex-picker-panel': '10',
    'zindex-popup-close': '10',
    'zindex-modal': '1000',
    'zindex-modal-mask': '1000',
    'zindex-message': '1010',
    'zindex-notification': '1010',
    'zindex-popover': '1030',
    'zindex-dropdown': '1050',
    'zindex-picker': '1050',
    'zindex-popoconfirm': '1060',
    'zindex-tooltip': '1070',
    'zindex-image': '1080',

    // Animation
    'animation-duration-slow': '0.3s', // Modal
    'animation-duration-base': '0.2s',
    'animation-duration-fast': '0.1s', // Tooltip

    //CollapsePanel
    'collapse-panel-border-radius': '@border-radius-base',

    //Dropdown
    'dropdown-menu-bg': '@component-background',
    'dropdown-vertical-padding': '5px',
    'dropdown-edge-child-vertical-padding': '4px',
    'dropdown-font-size': '@font-size-base',
    'dropdown-line-height': '22px',

    // Form
    // ---
    'label-required-color': '@highlight-color',
    'label-color': '@heading-color',
    'form-warning-input-bg': '@input-bg',
    'form-item-margin-bottom': '24px',
    'form-item-trailing-colon': 'true',
    'form-vertical-label-padding': '0 0 8px',
    'form-vertical-label-margin': '0',
    'form-item-label-font-size': '@font-size-base',
    'form-item-label-height': '@input-height-base',
    'form-item-label-colon-margin-right': '8px',
    'form-item-label-colon-margin-left': '2px',
    'form-error-input-bg': '@input-bg',

    // Input
    // ---
    'input-height-base': '@height-base',
    'input-height-lg': '@height-lg',
    'input-height-sm': '@height-sm',
    'input-padding-horizontal': '@control-padding-horizontal - 1px',
    'input-padding-horizontal-base': '@input-padding-horizontal',
    'input-padding-horizontal-sm': '@control-padding-horizontal-sm - 1px',
    'input-padding-horizontal-lg': '@input-padding-horizontal',
    'input-padding-vertical-base': `max(
  (round(((@input-height-base - @font-size-base * @line-height-base) / 2) * 10) / 10) -
    @border-width-base,
  3px
)`,
    'input-padding-vertical-sm': `max(
  (round(((@input-height-sm - @font-size-base * @line-height-base) / 2) * 10) / 10) -
    @border-width-base,
  0
)`,
    'input-padding-vertical-lg': `(
    ceil(((@input-height-lg - @font-size-lg * @line-height-base) / 2) * 10) / 10
  ) - @border-width-base`,
    'input-placeholder-color': 'hsv(0, 0, 75%)',
    'input-color': '@text-color',
    'input-icon-color': '@input-color',
    'input-border-color': '@border-color-base',
    'input-bg': '@component-background',
    'input-number-hover-border-color': '@input-hover-border-color',
    'input-number-handler-active-bg': '#f4f4f4',
    'input-number-handler-hover-bg': '@primary-5',
    'input-number-handler-bg': '@component-background',
    'input-number-handler-border-color': '@border-color-base',
    'input-addon-bg': '@background-color-light',
    'input-hover-border-color': '@primary-5',
    'input-disabled-bg': '@disabled-bg',
    'input-outline-offset': '0 0',
    'input-icon-hover-color': 'fade(@black, 85%)',
    'input-disabled-color': '@disabled-color',

    // Mentions
    // ---
    'mentions-dropdown-bg': '@component-background',
    'mentions-dropdown-menu-item-hover-bg': '@mentions-dropdown-bg',

    // Select
    // ---
    'select-border-color': '@border-color-base',
    'select-item-selected-color': '@text-color',
    'select-item-selected-font-weight': '600',
    'select-dropdown-bg': '@component-background',
    'select-item-selected-bg': '@primary-1',
    'select-item-active-bg': '@item-hover-bg',
    'select-dropdown-vertical-padding': '@dropdown-vertical-padding',
    'select-dropdown-font-size': '@dropdown-font-size',
    'select-dropdown-line-height': '@dropdown-line-height',
    'select-dropdown-height': '32px',
    'select-background': '@component-background',
    'select-clear-background': '@select-background',
    'select-selection-item-bg': '@background-color-base',
    'select-selection-item-border-color': '@border-color-split',
    'select-single-item-height-lg': '40px',
    'select-multiple-item-height': '@input-height-base - @input-padding-vertical-base * 2', // Normal 24px
    'select-multiple-item-height-lg': '32px',
    'select-multiple-item-spacing-half': 'ceil((@input-padding-vertical-base / 2))',
    'select-multiple-disabled-background': '@input-disabled-bg',
    'select-multiple-item-disabled-color': '#bfbfbf',
    'select-multiple-item-disabled-border-color': '@select-border-color',

    // Cascader
    // ---
    'cascader-bg': '@component-background',
    'cascader-item-selected-bg': '@primary-1',
    'cascader-menu-bg': '@component-background',
    'cascader-menu-border-color-split': '@border-color-split',

    // Cascader
    // ----
    'cascader-dropdown-vertical-padding': '@dropdown-vertical-padding',
    'cascader-dropdown-edge-child-vertical-padding': '@dropdown-edge-child-vertical-padding',
    'cascader-dropdown-font-size': '@dropdown-font-size',
    'cascader-dropdown-line-height': '@dropdown-line-height',

    // Anchor
    // ---
    'anchor-bg': 'transparent',
    'anchor-border-color': '@border-color-split',
    'anchor-link-top': '4px',
    'anchor-link-left': '16px',
    'anchor-link-padding': '@anchor-link-top 0 @anchor-link-top @anchor-link-left',

    // Tooltip
    // ---
    // Tooltip max width
    'tooltip-max-width': '250px',
    // Tooltip text color
    'tooltip-color': '#fff',
    // Tooltip background color
    'tooltip-bg': 'rgba(0, 0, 0, 0.75)',
    // Tooltip arrow width
    'tooltip-arrow-width': '8px * sqrt(2)',
    // Tooltip distance with trigger
    'tooltip-distance': '@tooltip-arrow-width - 1px + 4px',
    // Tooltip arrow color
    'tooltip-arrow-color': '@tooltip-bg',
    'tooltip-border-radius': '@border-radius-base',

    // Popover
    // ---
    // Popover body background color
    'popover-bg': '@component-background',
    // Popover text color
    'popover-color': '@text-color',
    // Popover maximum width
    'popover-min-width': '177px',
    'popover-min-height': '32px',
    // Popover arrow width
    'popover-arrow-width': '@tooltip-arrow-width',
    // Popover arrow color
    'popover-arrow-color': '@popover-bg',
    // Popover outer arrow width
    // Popover outer arrow color
    'popover-arrow-outer-color': '@popover-bg',
    // Popover distance with trigger
    'popover-distance': '@popover-arrow-width + 4px',
    'popover-padding-horizontal': '@padding-md',

    // Modal
    // --
    'modal-header-padding-vertical': '@padding-md',
    'modal-header-padding-horizontal': '@padding-lg',
    'modal-body-padding': '@padding-lg',
    'modal-header-bg': '@component-background',
    'modal-header-padding': '@modal-header-padding-vertical @modal-header-padding-horizontal',
    'modal-header-border-width': '@border-width-base',
    'modal-header-border-style': '@border-style-base',
    'modal-header-title-line-height': '22px',
    'modal-header-title-font-size': '@font-size-lg',
    'modal-header-border-color-split': '@border-color-split',
    'modal-header-close-size':
      '@modal-header-title-line-height + 2 * @modal-header-padding-vertical',
    'modal-content-bg': '@component-background',
    'modal-heading-color': '@heading-color',
    'modal-close-color': '@text-color-secondary',
    'modal-footer-bg': 'transparent',
    'modal-footer-border-color-split': '@border-color-split',
    'modal-footer-border-style': '@border-style-base',
    'modal-footer-padding-vertical': '10px',
    'modal-footer-padding-horizontal': '16px',
    'modal-footer-border-width': '@border-width-base',
    'modal-mask-bg': 'fade(@black, 45%)',
    'modal-confirm-body-padding': '32px 32px 24px',
    'modal-confirm-title-font-size': '@font-size-lg',
    'modal-border-radius': '@border-radius-base',

    // Progress
    // --
    'progress-default-color': '@processing-color',
    'progress-remaining-color': '@background-color-base',
    'progress-info-text-color': '@progress-text-color',
    'progress-radius': '100px',
    'progress-steps-item-bg': '#f3f3f3',
    'progress-text-font-size': '1em',
    'progress-text-color': '@text-color', // This is for circle text color, should be renamed better
    'progress-circle-text-font-size': '1em',
    // Menu
    // ---
    'menu-inline-toplevel-item-height': '40px',
    'menu-item-height': '40px',
    'menu-item-group-height': '@line-height-base',
    'menu-collapsed-width': '80px',
    'menu-bg': '@component-background',
    'menu-popup-bg': '@component-background',
    'menu-item-color': '@text-color',
    'menu-inline-submenu-bg': '@background-color-light',
    'menu-highlight-color': '@primary-color',
    'menu-highlight-danger-color': '@error-color',
    'menu-item-active-bg': '@primary-1',
    'menu-item-active-danger-bg': '@red-1',
    'menu-item-active-border-width': '3px',
    'menu-item-group-title-color': '@text-color-secondary',
    'menu-item-vertical-margin': '4px',
    'menu-item-font-size': '@font-size-base',
    'menu-item-boundary-margin': '8px',
    'menu-item-padding-horizontal': '20px',
    'menu-item-padding': '0 @menu-item-padding-horizontal',
    'menu-horizontal-line-height': '46px',
    'menu-icon-margin-right': '10px',
    'menu-icon-size': '@menu-item-font-size',
    'menu-icon-size-lg': '@font-size-lg',
    'menu-item-group-title-font-size': '@menu-item-font-size',

    // dark theme
    'menu-dark-color': '@text-color-secondary-dark',
    'menu-dark-danger-color': '@error-color',
    'menu-dark-bg': '@layout-header-background',
    'menu-dark-arrow-color': '#fff',
    'menu-dark-inline-submenu-bg': '#000c17',
    'menu-dark-highlight-color': '#fff',
    'menu-dark-item-active-bg': '@primary-color',
    'menu-dark-item-active-danger-bg': '@error-color',
    'menu-dark-selected-item-icon-color': '@white',
    'menu-dark-selected-item-text-color': '@white',
    'menu-dark-item-hover-bg': 'transparent',
    // Spin
    // ---
    'spin-dot-size-sm': '14px',
    'spin-dot-size': '20px',
    'spin-dot-size-lg': '32px',

    // Table
    // --
    'table-bg': '@component-background',
    'table-header-bg': '@background-color-light',
    'table-header-color': '@heading-color',
    'table-header-sort-bg': '@background-color-base',
    'table-body-sort-bg': '#fafafa',
    'table-row-hover-bg': '@background-color-light',
    'table-selected-row-color': 'inherit',
    'table-selected-row-bg': '@primary-1',
    'table-body-selected-sort-bg': '@table-selected-row-bg',
    'table-selected-row-hover-bg': 'darken(@table-selected-row-bg, 2%)',
    'table-expanded-row-bg': '#fbfbfb',
    'table-padding-vertical': '16px',
    'table-padding-horizontal': '16px',
    'table-padding-vertical-md': '(@table-padding-vertical * 3 / 4)',
    'table-padding-horizontal-md': '(@table-padding-horizontal / 2)',
    'table-padding-vertical-sm': '(@table-padding-vertical / 2)',
    'table-padding-horizontal-sm': '(@table-padding-horizontal / 2)',
    'table-border-color': '@border-color-split',
    'table-border-radius-base': '@border-radius-base',
    'table-footer-bg': '@background-color-light',
    'table-footer-color': '@heading-color',
    'table-header-bg-sm': '@table-header-bg',
    'table-font-size': '@font-size-base',
    'table-font-size-md': '@table-font-size',
    'table-font-size-sm': '@table-font-size',
    'table-header-cell-split-color': 'rgba(0, 0, 0, 0.06)',
    // Sorter
    // Legacy: `table-header-sort-active-bg` is used for hover not real active
    'table-header-sort-active-bg': 'rgba(0, 0, 0, 0.04)',
    'table-fixed-header-sort-active-bg': 'hsv(0, 0, 96%)',

    // Filter
    'table-header-filter-active-bg': 'rgba(0, 0, 0, 0.04)',
    'table-filter-btns-bg': 'inherit',
    'table-filter-dropdown-bg': '@component-background',
    'table-expand-icon-bg': '@component-background',
    'table-selection-column-width': '32px',
    // Sticky
    'table-sticky-scroll-bar-bg': 'fade(#000, 35%)',
    'table-sticky-scroll-bar-radius': '4px',

    // Tag
    // --
    'tag-border-radius': '@border-radius-base',
    'tag-default-bg': '@background-color-light',
    'tag-default-color': '@text-color',
    'tag-font-size': '@font-size-sm',
    'tag-line-height': '20px',

    // TimePicker
    // ---
    'picker-bg': '@component-background',
    'picker-basic-cell-hover-color': '@item-hover-bg',
    'picker-basic-cell-active-with-range-color': '@primary-1',
    'picker-basic-cell-hover-with-range-color': 'lighten(@primary-color, 35%)',
    'picker-basic-cell-disabled-bg': 'rgba(0, 0, 0, 0.04)',
    'picker-border-color': '@border-color-split',
    'picker-date-hover-range-border-color': 'lighten(@primary-color, 20%)',
    'picker-date-hover-range-color': '@picker-basic-cell-hover-with-range-color',
    'picker-time-panel-column-width': '56px',
    'picker-time-panel-column-height': '224px',
    'picker-time-panel-cell-height': '28px',
    'picker-panel-cell-height': '24px',
    'picker-panel-cell-width': '36px',
    'picker-text-height': '40px',
    'picker-panel-without-time-cell-height': '66px',

    // Calendar
    // ---
    'calendar-bg': '@component-background',
    'calendar-input-bg': '@input-bg',
    'calendar-border-color': '@border-color-inverse',
    'calendar-item-active-bg': '@item-active-bg',
    'calendar-column-active-bg': 'fade(@calendar-item-active-bg, 20%)',
    'calendar-full-bg': '@calendar-bg',
    'calendar-full-panel-bg': '@calendar-full-bg',

    // Carousel
    // ---
    'carousel-dot-width': '16px',
    'carousel-dot-height': '3px',
    'carousel-dot-active-width': '24px',

    // Badge
    // ---
    'badge-height': '20px',
    'badge-height-sm': '14px',
    'badge-dot-size': '6px',
    'badge-font-size': '@font-size-sm',
    'badge-font-size-sm': '@font-size-sm',
    'badge-font-weight': 'normal',
    'badge-status-size': '6px',
    'badge-text-color': '@component-background',
    'badge-color': '@highlight-color',

    // Rate
    // ---
    'rate-star-color': '@yellow-6',
    'rate-star-bg': '@border-color-split',
    'rate-star-size': '20px',
    'rate-star-hover-scale': 'scale(1.1)',

    // Card
    // ---
    'card-head-color': '@heading-color',
    'card-head-background': 'transparent',
    'card-head-font-size': '@font-size-lg',
    'card-head-font-size-sm': '@font-size-base',
    'card-head-padding': '16px',
    'card-head-padding-sm': '(@card-head-padding / 2)',
    'card-head-height': '48px',
    'card-head-height-sm': '36px',
    'card-inner-head-padding': '12px',
    'card-padding-base': '24px',
    'card-padding-base-sm': '(@card-padding-base / 2)',
    'card-actions-background': '@component-background',
    'card-actions-li-margin': '12px 0',
    'card-skeleton-bg': '#cfd8dc',
    'card-background': '@component-background',
    'card-shadow': `0 1px 2px -2px rgba(0, 0, 0, 0.16), 0 3px 6px 0 rgba(0, 0, 0, 0.12),
  0 5px 12px 4px rgba(0, 0, 0, 0.09)`,
    'card-radius': '@border-radius-base',
    'card-head-tabs-margin-bottom': '-17px',
    'card-head-extra-color': '@text-color',

    // Comment
    // ---
    'comment-bg': 'inherit',
    'comment-padding-base': '@padding-md 0',
    'comment-nest-indent': '44px',
    'comment-font-size-base': '@font-size-base',
    'comment-font-size-sm': '@font-size-sm',
    'comment-author-name-color': '@text-color-secondary',
    'comment-author-time-color': '#ccc',
    'comment-action-color': '@text-color-secondary',
    'comment-action-hover-color': '#595959',
    'comment-actions-margin-bottom': 'inherit',
    'comment-actions-margin-top': '@margin-sm',
    'comment-content-detail-p-margin-bottom': 'inherit',

    // Tabs
    // ---
    'tabs-card-head-background': '@background-color-light',
    'tabs-card-height': '40px',
    'tabs-card-active-color': '@primary-color',
    'tabs-card-horizontal-padding': `(
    (@tabs-card-height - floor(@font-size-base * @line-height-base)) / 2
  ) - @border-width-base @padding-md`,
    'tabs-card-horizontal-padding-sm': '6px @padding-md',
    'tabs-card-horizontal-padding-lg': '7px @padding-md 6px',
    'tabs-title-font-size': '@font-size-base',
    'tabs-title-font-size-lg': '@font-size-lg',
    'tabs-title-font-size-sm': '@font-size-base',
    'tabs-ink-bar-color': '@primary-color',
    'tabs-bar-margin': '0 0 @margin-md 0',
    'tabs-horizontal-gutter': '32px',
    'tabs-horizontal-margin': '0 0 0 @tabs-horizontal-gutter',
    'tabs-horizontal-margin-rtl': '0 0 0 32px',
    'tabs-horizontal-padding': '@padding-sm 0',
    'tabs-horizontal-padding-lg': '@padding-md 0',
    'tabs-horizontal-padding-sm': '@padding-xs 0',
    'tabs-vertical-padding': '@padding-xs @padding-lg',
    'tabs-vertical-margin': '@margin-md 0 0 0',
    'tabs-scrolling-size': '32px',
    'tabs-highlight-color': '@primary-color',
    'tabs-hover-color': '@primary-5',
    'tabs-active-color': '@primary-7',
    'tabs-card-gutter': '2px',
    'tabs-card-tab-active-border-top': '2px solid transparent',

    // BackTop
    // ---
    'back-top-color': '#fff',
    'back-top-bg': '@text-color-secondary',
    'back-top-hover-bg': '@text-color',

    // Avatar
    // ---
    'avatar-size-base': '32px',
    'avatar-size-lg': '40px',
    'avatar-size-sm': '24px',
    'avatar-font-size-base': '18px',
    'avatar-font-size-lg': '24px',
    'avatar-font-size-sm': '14px',
    'avatar-bg': '#ccc',
    'avatar-color': '#fff',
    'avatar-border-radius': '@border-radius-base',
    'avatar-group-overlapping': '-8px',
    'avatar-group-space': '3px',
    'avatar-group-border-color': '#fff',

    // Switch
    // ---
    'switch-height': '22px',
    'switch-sm-height': '16px',
    'switch-min-width': '44px',
    'switch-sm-min-width': '28px',
    'switch-disabled-opacity': '0.4',
    'switch-color': '@primary-color',
    'switch-bg': '@component-background',
    'switch-shadow-color': 'fade(#00230b, 20%)',
    'switch-padding': '2px',
    'switch-inner-margin-min': 'ceil(@switch-height * 0.3)',
    'switch-inner-margin-max': 'ceil(@switch-height * 1.1)',
    'switch-sm-inner-margin-min': 'ceil(@switch-sm-height * 0.3)',
    'switch-sm-inner-margin-max': 'ceil(@switch-sm-height * 1.1)',

    // Pagination
    // ---
    'pagination-item-bg': '@component-background',
    'pagination-item-size': '@height-base',
    'pagination-item-size-sm': '24px',
    'pagination-font-family': '@font-family',
    'pagination-font-weight-active': '500',
    'pagination-item-bg-active': '@component-background',
    'pagination-item-link-bg': '@component-background',
    'pagination-item-disabled-color-active': '@disabled-color',
    'pagination-item-disabled-bg-active': '@disabled-active-bg',
    'pagination-item-input-bg': '@component-background',
    'pagination-mini-options-size-changer-top': '0px',

    // PageHeader
    // ---
    'page-header-padding': '@padding-lg',
    'page-header-padding-vertical': '@padding-md',
    'page-header-padding-breadcrumb': '@padding-sm',
    'page-header-content-padding-vertical': '@padding-sm',
    'page-header-back-color': '#000',
    'page-header-ghost-bg': 'inherit',
    'page-header-heading-title': '@heading-4-size',
    'page-header-heading-sub-title': '14px',
    'page-header-tabs-tab-font-size': '16px',

    // Breadcrumb
    // ---
    'breadcrumb-base-color': '@text-color-secondary',
    'breadcrumb-last-item-color': '@text-color',
    'breadcrumb-font-size': '@font-size-base',
    'breadcrumb-icon-font-size': '@font-size-base',
    'breadcrumb-link-color': '@text-color-secondary',
    'breadcrumb-link-color-hover': '@text-color',
    'breadcrumb-separator-color': '@text-color-secondary',
    'breadcrumb-separator-margin': '0 @padding-xs',

    // Slider
    // ---
    'slider-margin': '10px 6px 10px',
    'slider-rail-background-color': '@background-color-base',
    'slider-rail-background-color-hover': '#e1e1e1',
    'slider-track-background-color': '@primary-3',
    'slider-track-background-color-hover': '@primary-4',
    'slider-handle-border-width': '2px',
    'slider-handle-background-color': '@component-background',
    'slider-handle-color': '@primary-3',
    'slider-handle-color-hover': '@primary-4',
    'slider-handle-color-focus': 'tint(@primary-color, 20%)',
    'slider-handle-color-focus-shadow': 'fade(@primary-color, 12%)',
    'slider-handle-color-tooltip-open': '@primary-color',
    'slider-handle-size': '14px',
    'slider-handle-margin-top': '-5px',
    'slider-handle-margin-left': '-5px',
    'slider-handle-shadow': '0',
    'slider-dot-border-color': '@border-color-split',
    'slider-dot-border-color-active': 'tint(@primary-color, 50%)',
    'slider-disabled-color': '@disabled-color',
    'slider-disabled-background-color': '@component-background',

    // Tree
    // ---
    'tree-bg': '@component-background',
    'tree-title-height': '24px',
    'tree-child-padding': '18px',
    'tree-directory-selected-color': '#fff',
    'tree-directory-selected-bg': '@primary-color',
    'tree-node-hover-bg': '@item-hover-bg',
    'tree-node-selected-bg': '@primary-2',

    // Collapse
    // ---
    'collapse-header-padding': '@padding-sm @padding-md',
    'collapse-header-padding-extra': '40px',
    'collapse-header-bg': '@background-color-light',
    'collapse-content-padding': '@padding-md',
    'collapse-content-bg': '@component-background',
    'collapse-header-arrow-left': '16px',

    // Skeleton
    // ---
    'skeleton-color': 'rgba(190, 190, 190, 0.2)',
    'skeleton-to-color': 'shade(@skeleton-color, 5%)',
    'skeleton-paragraph-margin-top': '28px',
    'skeleton-paragraph-li-margin-top': '@margin-md',
    'skeleton-paragraph-li-height': '16px',
    'skeleton-title-height': '16px',
    'skeleton-title-paragraph-margin-top': '@margin-lg',

    // Transfer
    // ---
    'transfer-header-height': '40px',
    'transfer-item-height': '@height-base',
    'transfer-disabled-bg': '@disabled-bg',
    'transfer-list-height': '200px',
    'transfer-item-hover-bg': '@item-hover-bg',
    'transfer-item-selected-hover-bg': 'darken(@item-active-bg, 2%)',
    'transfer-item-padding-vertical': '6px',
    'transfer-list-search-icon-top': '12px',

    // Message
    // ---
    'message-notice-content-padding': '10px 16px',
    'message-notice-content-bg': '@component-background',
    // Motion
    // ---
    'wave-animation-width': '6px',

    // Alert
    // ---
    'alert-success-border-color': token.colorSuccessBorder,
    'alert-success-bg-color': token.colorSuccessBg,
    'alert-success-icon-color': token.colorSuccess,
    'alert-info-border-color': token.colorInfoBorder,
    'alert-info-bg-color': token.colorInfoBg,
    'alert-info-icon-color': token.colorInfo,
    'alert-warning-border-color': token.colorWarningBorder,
    'alert-warning-bg-color': token.colorWarningBg,
    'alert-warning-icon-color': token.colorWarning,
    'alert-error-border-color': token.colorErrorBorder,
    'alert-error-bg-color': token.colorErrorBg,
    'alert-error-icon-color': '@error-color',
    'alert-message-color': '@heading-color',
    'alert-text-color': '@text-color',
    'alert-close-color': '@text-color-secondary',
    'alert-close-hover-color': '@icon-color-hover',
    'alert-padding-vertical': '@padding-xs',
    'alert-padding-horizontal': '@padding-md - 1px',
    'alert-no-icon-padding-vertical': '@padding-xs',
    'alert-with-description-no-icon-padding-vertical': '@padding-md - 1px',
    'alert-with-description-padding-vertical': '@padding-md - 1px',
    'alert-with-description-padding': `@alert-with-description-padding-vertical 15px
  @alert-with-description-no-icon-padding-vertical @alert-with-description-icon-size`,
    'alert-icon-top': '8px + @font-size-base * (@line-height-base / 2) - (@font-size-base / 2)',
    'alert-with-description-icon-size': '24px',

    // List
    // ---
    'list-header-background': 'transparent',
    'list-footer-background': 'transparent',
    'list-empty-text-padding': '@padding-md',
    'list-item-padding': '@padding-sm 0',
    'list-item-padding-sm': '@padding-xs @padding-md',
    'list-item-padding-lg': '16px 24px',
    'list-item-meta-margin-bottom': '@padding-md',
    'list-item-meta-avatar-margin-right': '@padding-md',
    'list-item-meta-title-margin-bottom': '@padding-sm',
    'list-customize-card-bg': '@component-background',
    'list-item-meta-description-font-size': '@font-size-base',

    // Statistic
    // ---
    'statistic-title-font-size': '@font-size-base',
    'statistic-content-font-size': '24px',
    'statistic-unit-font-size': '24px',
    'statistic-font-family': '@font-family',

    // Drawer
    // ---
    'drawer-header-padding': '@padding-md @padding-lg',
    'drawer-body-padding': '@padding-lg',
    'drawer-bg': '@component-background',
    'drawer-footer-padding-vertical': '@modal-footer-padding-vertical',
    'drawer-footer-padding-horizontal': '@modal-footer-padding-horizontal',
    'drawer-header-close-size': '56px',
    'drawer-title-font-size': '@font-size-lg',
    'drawer-title-line-height': '22px',

    // Timeline
    // ---
    'timeline-width': '2px',
    'timeline-color': '@border-color-split',
    'timeline-dot-border-width': '2px',
    'timeline-dot-color': '@primary-color',
    'timeline-dot-bg': '@component-background',
    'timeline-item-padding-bottom': '20px',

    // Typography
    // ---
    'typography-title-font-weight': '600',
    'typography-title-margin-top': '1.2em',
    'typography-title-margin-bottom': '0.5em',

    // Upload
    // ---
    'upload-actions-color': '@text-color-secondary',

    // Steps
    // ---
    'process-tail-color': '@border-color-split',
    'steps-nav-arrow-color': 'fade(@black, 25%)',
    'steps-background': '@component-background',
    'steps-icon-size': '32px',
    'steps-icon-custom-size': '@steps-icon-size',
    'steps-icon-custom-top': '0px',
    'steps-icon-custom-font-size': '24px',
    'steps-icon-top': '-0.5px',
    'steps-icon-font-size': '@font-size-lg',
    'steps-icon-margin': '0 8px 0 0',
    'steps-title-line-height': '@height-base',
    'steps-small-icon-size': '24px',
    'steps-small-icon-margin': '0 8px 0 0',
    'steps-dot-size': '8px',
    'steps-dot-top': '2px',
    'steps-current-dot-size': '10px',
    'steps-description-max-width': '140px',
    'steps-nav-content-max-width': 'auto',
    'steps-vertical-icon-width': '16px',
    'steps-vertical-tail-width': '16px',
    'steps-vertical-tail-width-sm': '12px',

    // Notification
    // ---
    'notification-bg': '@component-background',
    'notification-padding-vertical': '16px',
    'notification-padding-horizontal': '24px',

    // Result
    // ---
    'result-title-font-size': '24px',
    'result-subtitle-font-size': '@font-size-base',
    'result-icon-font-size': '72px',
    'result-extra-margin': '24px 0 0 0',

    // Image
    // ---
    'image-size-base': '48px',
    'image-font-size-base': '24px',
    'image-bg': '#f5f5f5',
    'image-color': '#fff',
    'image-mask-font-size': '16px',
    'image-preview-operation-size': '18px',
    'image-preview-operation-color': '@text-color-dark',
    'image-preview-operation-disabled-color': 'fade(@image-preview-operation-color, 25%)',

    // Segmented
    // ---
    'segmented-bg': 'fade(@black, 4%)',
    'segmented-hover-bg': 'fade(@black, 6%)',
    'segmented-selected-bg': '@white',
    'segmented-label-color': 'fade(@black, 65%)',
    'segmented-label-hover-color': '#262626',
  } as const;

  // Fill colors. e.g. '@red-1', '@yellow-6'
  Object.keys(token).forEach((key: any) => {
    if (key !== key.toLowerCase()) {
      return;
    }

    const value = token[key];
    if (typeof value === 'string') {
      raw[key] = value;
    }
  });

  // Convert to string
  const returnData: Record<keyof typeof raw, string> = {} as any;

  Object.keys(raw).forEach(key => {
    const value = raw[key];

    if (typeof value === 'function') {
      returnData[key] = value(raw);
    } else if (typeof value === 'number' && !key.includes('line-height')) {
      returnData[key] = `${value}px`;
    } else {
      returnData[key] = `${value}`;
    }
  });

  return returnData;
}
