import React from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

export class Home extends React.Component {
    render() {
        return (
            <Text>Home page</Text>
        )
    }
}
const mapStateToProps = (state: Store) => ({
    ...state
});
export default connect(mapStateToProps)(Home);