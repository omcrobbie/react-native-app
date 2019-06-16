import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from '../store/actions';
import { Modal, DatePickerIOS, View, Dimensions } from 'react-native';
import styled from 'styled-components';
import { Container, Title, Field, AppButton } from '../common';
import { ColorPicker } from 'react-native-color-picker';
import { throttle } from 'lodash';

interface PropTypes {
    actions: Actions;
    show: boolean;
}
export class CategoryCreate extends React.Component<PropTypes> {
    state = { label: '', color: '', weight: '', tempColor: ''};
    
    get isValid() {
        const { label, color, weight } = this.state;
        return label.length && color.length;
    }
    resetState = () => {
        this.setState({ label: '', color: '', weight: ''});
    }
    onColorChange = (color) => {
        this.setState({color});
    }
    render() {
        const {show, actions} = this.props;
         return (
            <Modal visible={show} transparent={false} animationType='slide'>
                <Container>
                    <InnerContainer>
                        <Title>Add a new category</Title>
                        <Field
                            placeholder='Category name'
                            onChangeText={ text => this.setState({ label: text })} />
                    </InnerContainer>
                    <ColorPicker
                        color={this.state.tempColor}
                        defaultColor='#ffffff'
                        onColorChange={({h,s,v}) => this.setState({tempColor: {h, s:100, v:100} })}
                        onColorSelected={color => this.setState({color})}
                        style={{flex: 1}}
                        hideSliders
                    />
                    <AppButton type='outline' title='Cancel' onPress={() => {
                        this.resetState();
                        actions.toggleValue('showCategoryModal');
                    }} />
                    <AppButton
                        title='Create'
                        disabled={!this.isValid}
                        onPress={() => {
                            actions.categoryCreate(this.state);
                            this.resetState();
                            actions.toggleValue('showCategoryModal');
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
    show: state.showCategoryModal
});
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators<Actions, any>(actions, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(CategoryCreate);
