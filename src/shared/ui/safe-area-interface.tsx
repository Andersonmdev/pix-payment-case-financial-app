import { SafeAreaView, SafeAreaViewProps } from 'react-native-safe-area-context';

import { cn } from '../utils/cn';

type SafeAreaInterfaceProps = SafeAreaViewProps;

export const SafeAreaInterface = ({ children, className, ...rest }: SafeAreaInterfaceProps) => {
  return (
    <SafeAreaView className={cn('bg-background flex-1 px-4 py-2 gap-4', className)} {...rest}>
      {children}
    </SafeAreaView>
  );
};
