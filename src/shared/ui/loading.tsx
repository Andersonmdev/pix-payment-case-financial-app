import { ActivityIndicator } from 'react-native';
import { ActivityIndicatorProps } from 'react-native';

import { cn } from '../utils/cn';

type LoadingProps = ActivityIndicatorProps;

export const Loading = ({ className, ...rest }: LoadingProps) => {
  return <ActivityIndicator className={cn('text-primary', className)} {...rest} />;
};
