import react, { Component } from 'react';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filtered: []
        }
    }
    componentDidMount() {
        this.setState({
            filter: this.props.items
        });
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            filtered: nextProps.items

        })
    }
    handleChange(e){
        let currentList = [];
    }
}