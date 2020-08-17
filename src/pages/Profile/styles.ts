import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 50px 30px ${Platform.OS === 'android' ? 100 : 40}px;
  position: relative;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 24px 0;
`;

export const BackButton = styled.TouchableOpacity`
  /* position: absolute;
  left: 24px;
  top: 64px; */
  margin-top: 40px;
  right: 80px;
`;

export const UserAvatarButton = styled.TouchableOpacity`
  margin-top: 35px;
`;

export const UserAvatar = styled.Image`
  width: 186px;
  height: 186px;
  border-radius: 98px;
  align-self: center;
`;
