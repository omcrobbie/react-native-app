import React from 'react';

import { Modal } from 'react-native';
import styled from 'styled-components';
import { Container, Title, Field, AppButton } from '../common';
import { observer, inject } from 'mobx-react';
import { IStore } from '../store';


interface PropTypes {
    store: IStore;
    show: boolean;
}
@observer
@inject((store: IStore) => ({
    store,
    show: store.showCampaignModal
}))
export default class CampaignCreate extends React.Component<Partial<PropTypes>> {
    state = { name: '', description: '' };
    resetState = () => {
        this.setState({ name: '', description: '' });
    }
    render() {
        const {show, store} = this.props;
         return (
            <Modal visible={show} transparent={false} animationType='slide'>
                <Container>
                    <InnerContainer>
                        <Title>Create a new campaign</Title>
                        <Field
                            placeholder='Campaign name'
                            onChangeText={ text => this.setState({ name: text })} />
                        <Field
                            placeholder='Description' 
                            onChangeText={ text => this.setState({ description: text})} />
                    </InnerContainer>
                    <AppButton type='outline' title='Cancel' onPress={() => {
                        this.resetState();
                        store.toggleValue('showCampaignModal');
                    }} />
                    <AppButton
                        title='Create'
                        disabled={!this.state.name.length || !this.state.description.length}
                        onPress={() => {
                            store.createCampaign(this.state);
                            this.resetState();
                            store.toggleValue('showCampaignModal');
                    }} />
                </Container>
            </Modal>
        )
    }
}

const InnerContainer = styled.View`
    padding-top: 20px;
    padding-bottom: 40px;
    justify-content: center;
    flex: 1;
    align-items: center;
`;
// const mapStateToProps = (state: Store) => ({
//     show: state.showCampaignModal
// });
// const mapDispatchToProps = dispatch => ({
//     actions: bindActionCreators<Actions, any>(actions, dispatch)
// });
// export default connect(mapStateToProps, mapDispatchToProps)(CampaignCreate);
