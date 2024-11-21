import { ComponentPropsWithoutRef } from 'react';
import { UITextView } from 'react-native-uitextview';

import { cn } from '../utils/cn';

type TextProps = ComponentPropsWithoutRef<typeof UITextView>;

export const Text = ({ className, ...rest }: TextProps) => {
  return <UITextView className={cn('font-regular text-black', className)} {...rest} />;
};
