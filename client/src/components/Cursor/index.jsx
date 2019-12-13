import React, {Component} from 'react';
import './index.sass';
import CursorEffect from 'services/cursorEffect';

class Cursor extends Component {
    componentDidMount() {
        new CursorEffect();
    }

    render() {
        return (
            <div>
                <div className="circle-cursor circle-cursor--inner"/>
                <div className="circle-cursor circle-cursor--outer" />
            </div>
        );
    }
}

export default Cursor;