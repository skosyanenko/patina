import React, {Component} from 'react';
import './index.sass';

class Icons extends Component {

    activate = e => {
        const self = e.target;
        const activatedClass = 'activated';

        if (!self.classList.contains(activatedClass) && self.classList.contains('iconsContainer__like')) {
            self.classList.add(activatedClass);
            setTimeout(() => self.classList.remove(activatedClass), 1000);
        }
    };

    render() {
        return (
            <div className="iconsContainer">
                {Object.keys(this.props).map((item, key) => (
                    <div className="iconsContainer__box" key={key}>
                        <div className="iconsContainer__counter">{this.props[item]}</div>
                        <div className={`iconsContainer__${item}`}
                                      onClick={this.activate}
                        />
                    </div>
                ))}
            </div>
        );
    }
}

export default Icons;
