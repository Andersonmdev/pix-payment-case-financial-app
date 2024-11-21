import { Pressable, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { Card } from '../../../../shared/ui/card';
import { Text } from '../../../../shared/ui/text';
import { COLORS } from '../../../../shared/styles/colors';
import { Loading } from '../../../../shared/ui/loading';

type Props = {
  isLoading: boolean;
  text?: string;
  showInstallments: () => void;
};

export function ChooseInstallments({ isLoading, text = 'Escolher parcelas', showInstallments }: Props) {
  return (
    <Pressable onPress={showInstallments} disabled={isLoading}>
      <Card className=" flex-row items-center justify-between px-4 h-12">
        {isLoading ? (
          <View className="flex-1">
            <Loading className="self-center" />
          </View>
        ) : (
          <>
            <Text className="font-medium text-lg text-primary">{text}</Text>
            <Feather name="arrow-right" size={20} color={COLORS.primary} />
          </>
        )}
      </Card>
    </Pressable>
  );
}
