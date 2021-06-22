import styled from 'styled-components';
interface props {
  color: String;
  type: String;
  width: number;
  height: number;
  dir: String;
  weight: number;
}

const Theme = {
  buttonPrimary: '#3B5383',
  ButtonSecondary: 'white',
  inputColor: '#EFEFEF',
  textLink: '#2C4171',
};

const ContainerPages = styled.View`
  flex: 1;
  background-color: #E5E5E5;
  align-items: ${(props: props) => props.dir}};
`;
const ViewOnboarding = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: white;
`;
const ModalContainer = styled.View`
  width: 343px;
  min-height: 173px;
  background-color: white;
  border-radius: 10px;

  padding: 16px;
  align-items: center;
  max-height: 100%;
`;
const TextSmall = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: ${(props: props) =>
    typeof props.color === 'undefined' ? 'black' : props.color};
  font-weight: ${(props: props) =>
    typeof props.weight === 'undefined' ? '400' : props.weight}; ;
`;
const TextLarge = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 30px;
  font-weight: ${props => props.weight};
  color: ${(props: props) =>
    typeof props.color === 'undefined' ? 'black' : props.color};
`;
const ButtonPrimary = styled.TouchableOpacity`
  width: ${(props: props) => props.width}px;
  height: ${(props: props) => props.height}px;
  background-color: ${(props: props) =>
    typeof props.color === 'undefined' ? Theme.buttonPrimary : props.color};
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  border: ${(props: props) =>
    props.type === 'secondary' ? '1px solid #3C5485' : 'none'};
`;

const ContainerIconHeader = styled.View`
  background-color: ${Theme.buttonPrimary};
  width: 100%;
  height: 300px;
  border-bottom-end-radius: 50px;
  border-bottom-start-radius: 50px;
  justify-content: center;
  align-items: center;
`;
const ContainerIcon = styled.View`
  width: 65px;
  height: 65px;
  background-color: white;
  border-radius: 15px;
`;
const ContainerContentSignUp = styled.View`
  width: 343px;
  min-height: 173px;
  background-color: white;
  border-radius: 10px;
  margin-top: -40px;
  padding: 16px;
  align-items: center;
  max-height: 100%;
`;
const Gap = styled.View``;
const TextInputComponent = styled.TextInput`
  width: 271px;
  height: 35px;
  background-color: ${Theme.inputColor};
  border-radius: 5px;
  padding-horizontal: 16px;
`;
const TextLink = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: ${Theme.textLink};
  font-weight: 500;
  text-decoration: underline;
`;
export {
  ContainerPages,
  ViewOnboarding,
  TextSmall,
  TextLarge,
  ButtonPrimary,
  Theme,
  ContainerIconHeader,
  ContainerIcon,
  ContainerContentSignUp,
  Gap,
  TextInputComponent,
  TextLink,
  ModalContainer,
};
