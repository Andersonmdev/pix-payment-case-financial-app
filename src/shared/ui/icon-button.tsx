import { forwardRef } from 'react';
import { Pressable, PressableProps } from 'react-native';
import { cva, VariantProps } from 'class-variance-authority';

import { Feather } from './icon';
import { cn } from '../utils/cn';
import { COLORS } from '../styles/colors';

const sizes = {
  md: 20,
};

const iconButtonVariants = cva('bg-secondary self-start rounded-full active:bg-primary/20', {
  variants: {
    size: {
      md: 'p-3',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

type ButtonVariantProps = VariantProps<typeof iconButtonVariants>;

type IconButtonProps = PressableProps &
  ButtonVariantProps & {
    name: keyof typeof Feather.glyphMap;
  };

export const IconButton = forwardRef<React.ElementRef<typeof Pressable>, IconButtonProps>(
  ({ name, size, className, ...rest }, ref) => {
    return (
      <Pressable ref={ref} className={cn(iconButtonVariants({ size, className }))} {...rest}>
        <Feather name={name} size={sizes[size ?? 'md']} color={COLORS.primary} />
      </Pressable>
    );
  },
);
IconButton.displayName = 'IconButton';
