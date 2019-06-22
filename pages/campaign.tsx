import React from 'react';
import { FlatList, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { actions } from '../store/actions';
import { bindActionCreators } from 'redux';
import { Button, ListItem } from 'react-native-elements';
import { NavigationScreenProp } from 'react-navigation';
import styled from 'styled-components';
import { Container, Title, AppButton, Separator, Empty } from '../common';
import CampaignCreate from '../modals/campaign-create';
import { getCurrentCampaign } from '../store/selectors';

interface PropTypes {
    actions: Actions;
    navigation: NavigationScreenProp<any, any>;
    campaigns: Campaign[];
    currentCampaign: Campaign;
}
export class CampaignComp extends React.Component<PropTypes> {
    componentDidMount() {
        const { currentCampaign, navigation } = this.props;
        if (currentCampaign.id) {
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
                            subtitle={item.description}
                            subtitleStyle={{color: 'lightgrey'}}
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
const mapStateToProps = (store: Store) => ({
    campaigns: store.campaigns,
    currentCampaign: getCurrentCampaign(store)
})
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators<Actions, any>(actions, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(CampaignComp as any);
