import { forwardRef } from 'react';
import { Pressable, PressableProps } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';
import * as Slot from '@rn-primitives/slot';

import { Text } from './text';
import { cn } from '../utils/cn';

const buttonVariants = cva('flex-row items-center gap-2 justify-center rounded-3xl disabled:bg-disabled', {
  variants: {
    variant: {
      primary: 'bg-primary active:bg-primary/80',
    },
    size: {
      sm: 'p-2',
      md: 'p-3',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

const buttonTextVariants = cva('font-medium disabled:opacity-90', {
  variants: {
    variant: {
      primary: 'text-onPrimary',
    },
    size: {
      sm: 'text-md',
      md: 'text-md',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

type ButtonVariantProps = Omit<VariantProps<typeof buttonVariants>, 'variant'> & {
  variant?: Exclude<VariantProps<typeof buttonVariants>['variant'], null>;
};

type ButtonProps = PressableProps &
  ButtonVariantProps & {
    title?: string;
    children?: React.ReactNode;
  };

export const Button = forwardRef<React.ElementRef<typeof Slot.Pressable>, ButtonProps>(
  ({ variant = 'primary', title = '', size, className, disabled, children, ...rest }, ref) => {
    return (
      <Slot.Pressable ref={ref} disabled={disabled} {...rest}>
        <Pressable className={cn(buttonVariants({ variant, size, className }))}>
          <Text disabled={disabled ?? false} className={buttonTextVariants({ variant, size })}>
            {title}
          </Text>
          {children}
        </Pressable>
      </Slot.Pressable>
    );
  },
);
Button.displayName = 'Button';
