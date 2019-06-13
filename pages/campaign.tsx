import React from 'react';
import { FlatList, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { actions } from '../store/actions';
import { bindActionCreators } from 'redux';
import { Button, ListItem } from 'react-native-elements';
import { NavigationScreenProp } from 'react-navigation';
import styled from 'styled-components';
import { Container, Title, AppButton } from '../common';
import CampaignCreate from '../modals/campaign-create';

interface PropTypes {
    actions: Actions;
    navigation: NavigationScreenProp<any, any>;
    campaigns: Campaign[];
    currentCampaign: any;
}
export class CampaignComp extends React.Component<PropTypes> {
    componentDidMount() {
        const { currentCampaign, navigation } = this.props;
        if (currentCampaign) {
            navigation.navigate('Home');
        }

    }
    render() {
        const {
            navigation,
            campaigns,
            actions
        } = this.props;
        return (
            <Container>
                <Title>Choose a campaign</Title>
                <CampaignCreate />
                <FlatList
                    data={campaigns}
                    keyExtractor={campaign => campaign.id}
                    renderItem={({ item }) => (
                        <ListItem 
                            title={item.name}
                            onPress={() => {
                                actions.campaignSetCurrent(item.id);
                                navigation.navigate('Home');
                            }}
                            rightIcon={<Icon name='chevron-right' />} 
                            titleStyle={{fontSize: 12}}
                            />
                    )}
                    ItemSeparatorComponent={Separator}
                    ListEmptyComponent={<Empty>No campaigns</Empty>}
                    />
                <AppButton
                    onPress={() => actions.toggleValue('showCampaignModal')}
                    title='Create new'/>
            </Container>
        )
    }
}

const Empty = styled.Text`
    color: lightgray;
    font-size: 12px;
    align-self: center;
`;
const Separator = styled.View`
    height: 1;
    width: 100%;
    background-color: #CED0CE;
`;
const mapStateToProps = (store: Store) => ({
    campaigns: store.campaigns,
    currentCampaign: store.currentCampaign
})
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(CampaignComp);
