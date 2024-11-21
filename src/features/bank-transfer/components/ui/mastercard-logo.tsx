import { Image } from 'expo-image';

export function MastercardLogo() {
  return (
    <Image
      alt="mastercard"
      source={require('../../../../assets/mastercard.svg')}
      style={{ width: 32, height: 32 }}
      contentFit="contain"
    />
  );
}
