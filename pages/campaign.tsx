import React from 'react';
import { FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import { actions } from '../store/actions';
import { bindActionCreators } from 'redux';
import { Button } from 'react-native-elements';
import { NavigationScreenProp } from 'react-navigation';
import styled from 'styled-components';
import { Container, Title } from '../common';
import CampaignCreate from '../modals/campaign-create';


interface PropTypes {
    actions: Actions;
    navigation: NavigationScreenProp<any, any>;
    campaigns: Campaign[];
}
export class CampaignComp extends React.Component<PropTypes> {
    render() {
        const { navigation, campaigns, actions } = this.props;
        return (
            <Container>
                <Title>Choose a campaign</Title>
                <CampaignCreate />
                <FlatList
                    data={campaigns}
                    keyExtractor={campaign => campaign.id}
                    renderItem={({ item }) => <Text>{item.name}</Text>}
                    ItemSeparatorComponent={Separator}
                    ListEmptyComponent={<Empty>No campaigns</Empty>}
                    />
                <Button
                    onPress={() => {
                        !campaigns.length
                        ? actions.toggleValue('showCampaignModal')
                        : navigation.navigate('Home')
                    }}
                    title={
                        !campaigns.length
                        ? 'Create new'
                        : 'Select'
                    } />
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
    campaigns: store.campaigns
})
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(CampaignComp);
