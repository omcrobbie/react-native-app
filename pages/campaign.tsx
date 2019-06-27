import React from 'react';
import { FlatList } from 'react-native';
import { Icon } from 'react-native-elements';
import { ListItem } from 'react-native-elements';
import { NavigationScreenProp } from 'react-navigation';
import { Container, Title, AppButton, Separator, Empty } from '../common';
import CampaignCreate from '../modals/campaign-create';
import { observer, inject } from 'mobx-react';
import { IStore } from '../store';
import { ICampaign } from '../store/campaign';

type PropTypes = {
    navigation: NavigationScreenProp<any, any>;
    campaigns: ICampaign[];
    currentCampaign: ICampaign;
    store: IStore;
}
@observer
@inject((store: IStore) => ({
    store,
    campaigns: store.campaigns,
    currentCampaign: store.currentCampaign
}))
export default class CampaignComp extends React.Component<PropTypes> {
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
            store
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
                                store.setCurrentCampaignId(item.id)
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
                    onPress={() => store.toggleValue('showCampaignModal')}
                    title='Create new'/>
            </Container>
        )
    }
}

// const mapStateToProps = (store: Store) => ({
//     campaigns: store.campaigns,
//     currentCampaign: getCurrentCampaign(store)
// })
// const mapDispatchToProps = dispatch => ({
//     actions: bindActionCreators<Actions, any>(actions, dispatch)
// });
// export default connect(mapStateToProps, mapDispatchToProps)(CampaignComp as any);
