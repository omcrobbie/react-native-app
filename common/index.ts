import styled from 'styled-components';
import { Input, Button } from 'react-native-elements';

export const Container = styled.View`
    padding-left: 5px;
    padding-right: 5px;
    margin-top: 20px;
    padding-bottom: 5px;
    flex: 1;
    width: 100%;
    height: 100%;
`;
export const Title = styled.Text`
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 15px;
    align-self: center;
`;
export const Field = styled(Input).attrs({
    containerStyle: {
        borderColor: 'lightgrey',
        borderWidth: 2,
        borderRadius: 5,
        marginBottom: 20
        
    },
    inputContainerStyle: {
        borderBottomWidth: 0
    }
})``;
export const AppButton = styled(Button).attrs({
    containerStyle: {
        width: '100%',
        bottom: 0,
        paddingLeft: 5,
        paddingBottom: 5,
        paddingRight: 5
    }
})``;