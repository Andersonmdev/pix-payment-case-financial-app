import { View, ViewProps } from 'react-native';

import { cn } from '../utils/cn';

type CardProps = ViewProps;

export const Card = ({ children, className, ...rest }: CardProps) => {
  return (
    <View className={cn('p-2 bg-white rounded-lg shadow', className)} {...rest}>
      {children}
    </View>
  );
};
