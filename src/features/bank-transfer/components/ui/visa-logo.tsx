import { Image } from 'expo-image';

export function VisaLogo() {
  return (
    <Image
      alt="visa"
      source={require('../../../../assets/visa.svg')}
      style={{ width: 32, height: 32 }}
      contentFit="contain"
    />
  );
}
