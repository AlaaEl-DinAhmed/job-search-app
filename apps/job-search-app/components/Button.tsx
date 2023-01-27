import { Button, InputProps, ThemeTypings } from '@chakra-ui/react';

export type ButtonProps = {
  colorScheme: ThemeTypings['colorSchemes'];
  size: Pick<InputProps, 'size'>['size'];
  variant: Pick<InputProps, 'variant'>['variant'];
  isLoading?: boolean;
  loadingText?: string;
  label: string;
};

export default function CustomButton({
  colorScheme,
  size,
  variant,
  isLoading,
  loadingText,
  label,
}: ButtonProps) {
  return (
    <Button
      colorScheme={colorScheme}
      size={size}
      isLoading={isLoading}
      loadingText={loadingText}
      variant={variant}
    >
      {label}
    </Button>
  );
}
