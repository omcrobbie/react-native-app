import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from '../store/actions';
import { Modal, DatePickerIOS, View } from 'react-native';
import styled from 'styled-components';
import { Container, Title, Field, AppButton } from '../common';


interface PropTypes {
    actions: Actions;
    show: boolean;
}
export class CampaignCreate extends React.Component<PropTypes> {
    state = { name: '', description: '' };
    resetState = () => {
        this.setState({ name: '', description: '' });
    }
    render() {
        const {show, actions} = this.props;
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
                        actions.toggleValue('showCampaignModal');
                    }} />
                    <AppButton
                        title='Create'
                        disabled={!this.state.name.length || !this.state.description.length}
                        onPress={() => {
                            actions.campaignCreate(this.state);
                            this.resetState();
                            actions.toggleValue('showCampaignModal');
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
const mapStateToProps = (state: Store) => ({
    show: state.showCampaignModal
});
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators<Actions, any>(actions, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(CampaignCreate);
