import { ImageSourcePropType } from 'react-native';

export interface INew {
  id: number;
  title: string;
  article?: string;
  body?: string;
  publishedDate: Date;
  imageUri?: string;
}
