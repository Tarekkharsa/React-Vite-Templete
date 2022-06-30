// material
import { alpha, styled } from '@mui/material/styles';

import { CustomTheme } from '@/theme/ThemeTypes';

// ----------------------------------------------------------------------

const RootStyle = styled('span')(
  ({
    theme,
    ownerState,
  }: {
    theme?: CustomTheme;
    ownerState: { color: ColorType; variant: VariantType };
  }) => {
    const { color, variant } = ownerState;

    const styleFilled = (col: ColorType) => ({
      color: theme?.palette[col].contrastText,
      backgroundColor: theme?.palette[col].main,
    });

    const styleOutlined = (col: ColorType) => ({
      color: theme?.palette[col].main,
      backgroundColor: 'transparent',
      border: `1px solid ${theme?.palette[col].main}`,
    });

    const styleGhost = (col: ColorType) => ({
      color: theme?.palette[col].dark,
      backgroundColor: alpha(theme?.palette[col].main, 0.16),
    });

    return {
      height: 22,
      minWidth: 22,
      lineHeight: 0,
      borderRadius: 8,
      cursor: 'default',
      alignItems: 'center',
      whiteSpace: 'nowrap',
      display: 'inline-flex',
      justifyContent: 'center',
      padding: theme?.spacing(0, 1),
      color: theme?.palette.grey[800],
      fontSize: theme?.typography.pxToRem(12),
      fontFamily: theme?.typography.fontFamily,
      backgroundColor: theme?.palette.grey[300],
      fontWeight: theme?.typography.fontWeightBold,

      ...(color !== 'default'
        ? {
            ...(variant === 'filled' && { ...styleFilled(color) }),
            ...(variant === 'outlined' && { ...styleOutlined(color) }),
            ...(variant === 'ghost' && { ...styleGhost(color) }),
          }
        : {
            ...(variant === 'outlined' && {
              backgroundColor: 'transparent',
              color: theme?.palette.text.primary,
              border: `1px solid ${theme?.palette.grey['500_32']}`,
            }),
            ...(variant === 'ghost' && {
              color: theme?.palette.text.secondary,
              backgroundColor: theme?.palette.grey['500_16'],
            }),
          }),
    };
  }
);

// ----------------------------------------------------------------------

export default function Label({
  color = 'default',
  variant = 'ghost',
  children,
  ...other
}: LableProps) {
  return (
    <RootStyle ownerState={{ color, variant }} {...other}>
      {children}
    </RootStyle>
  );
}

type LableProps = {
  children: React.ReactNode;
  color: 'default' | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';
  variant: 'filled' | 'outlined' | 'ghost';
};

type ColorType =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'error';
type VariantType = 'filled' | 'outlined' | 'ghost';
