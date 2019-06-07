import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from '../store/actions';
import { Modal } from 'react-native';
import { Button } from 'react-native-elements';
import styled from 'styled-components';
import { Container, Title } from '../common';


interface PropTypes {
    actions: Actions;
    show: boolean;
}
const CampaignCreate: React.SFC<PropTypes> = ({show, actions}) => (
    <Modal visible={show} transparent={false} animationType='slide'>
        <Container>
            <Title>Create a new campaign</Title>
            <Button title='Create' onPress={() => {
                actions.toggleValue('showCampaignModal');
            }} />
        </Container>
    </Modal>
);
const mapStateToProps = (state: Store) => ({
    show: state.showCampaignModal
});
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(CampaignCreate);
