import React from 'react';
import { Alert } from 'react-native';
import { connect } from 'react-redux';
import { Title, Container, AppButton } from '../common';
import { NavigationScreenProp } from 'react-navigation';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { actions } from '../store/actions';

interface PropTypes {
    currentCampaign: Campaign;
    navigation: NavigationScreenProp<any, any>;
    actions: Actions;
    records: AppRecord[]
}
export class Home extends React.Component<PropTypes> {
    
    render() {
        const { currentCampaign, navigation, actions, records } = this.props;
        return (
            <Container>
                <InnerContainer>
                    <Title>{currentCampaign.name}</Title>
                    <Subtitle>Day {records.length + 1}</Subtitle>
                </InnerContainer>
                <AppButton
                    title='Remove campaign'
                    onPress={() => {
                        Alert.alert(
                            'Please confirm',
                            'Are you sure you want to remove this campaign?',
                            [
                              {
                                text: 'Cancel',
                                style: 'cancel',
                              },
                              {text: 'OK', onPress: () => {
                                actions.campaignRemove(currentCampaign.id);
                                navigation.navigate('Campaign');
                              }},
                            ],
                            {cancelable: false},
                          );
                        
                    }}
                />
            </Container>
        )
    }
}
const Subtitle = styled.Text`
    font-size: 12px;
    color: lightgray;
    align-self: center;
`;
const InnerContainer = styled.View`
    padding-top: 20px;
    padding-bottom: 40px;
    flex: 1;
`;
const mapStateToProps = (state: Store) => ({
    currentCampaign: state.currentCampaign,
    records: state.currentCampaign ? state.currentCampaign.records : []
});
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);