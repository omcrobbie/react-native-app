import React from 'react';
import { Alert, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { Title, Container, AppButton, Separator, Empty } from '../common';
import { NavigationScreenProp } from 'react-navigation';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { actions } from '../store/actions';
import CategoryCreate from '../modals/category-create';
import { ListItem } from 'react-native-elements';

interface PropTypes {
    currentCampaign: Campaign;
    navigation: NavigationScreenProp<any, any>;
    actions: Actions;
    records: AppRecord[];
    categories: Category[];
}
export class Home extends React.Component<PropTypes> {
    
    render() {
        const {
            currentCampaign,
            navigation,
            actions,
            records,
            categories
        } = this.props;
        return (
            <Container>
                <InnerContainer>
                    <Title>{currentCampaign.name}</Title>
                    <Subtitle>Day {currentCampaign.days}</Subtitle>
                </InnerContainer>
                <CategoryCreate />
                <FlatList
                    data={categories}
                    keyExtractor={category => category.id}
                    renderItem={({ item }) => (
                        <ListItem 
                            title={item.label}
                            titleStyle={{fontSize: 12}}
                            leftElement={<Swatch color={item.color} />}
                            />
                    )}
                    ItemSeparatorComponent={Separator}
                    ListEmptyComponent={<Empty>No categories</Empty>}
                    />
                <AppButton
                    title='Add category'
                    type='outline'
                    onPress={() => actions.toggleValue('showCategoryModal')} />
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
const Swatch = styled.View`
    height: 20px;
    width: 20px;
    border-radius: 5px;
    border-width: 1px;
    background-color: ${({ color }) => color };
    border-color: lightgray;
`;
const mapStateToProps = (state: Store) => ({
    currentCampaign: state.currentCampaign || {},
    categories: state.currentCampaign ? state.currentCampaign.categories : [],
    records: state.currentCampaign ? state.currentCampaign.records : []
});
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators<Actions, any>(actions, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(Home as any);