import { Pressable, PressableProps, View, ViewProps } from 'react-native';

type RadioGroupItemProps = PressableProps;

const RadioGroupItem = ({ children, ...rest }: RadioGroupItemProps) => {
  return (
    <Pressable className="flex-row items-center gap-3" {...rest}>
      {children}
    </Pressable>
  );
};

type RadioGroupIndicatorProps = ViewProps & {
  selected: boolean;
};

const RadioGroupIndicator = ({ selected, ...rest }: RadioGroupIndicatorProps) => {
  return (
    <View className={`rounded-full w-7 h-7 p-[2] border-2 border-primary`} {...rest}>
      {selected && <View className="bg-primary rounded-full flex-1" />}
    </View>
  );
};

export const Radio = {
  Item: RadioGroupItem,
  Indicator: RadioGroupIndicator,
};
