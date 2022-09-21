import React, { Component } from "react";
import styles from '../componentsCreatedByMe/Dropdown.styles.css'


class Dropdown extends Component {
    state = {
    visible: false
    }
    
    toggle = () => {
        this.setState(oldState => ({
           visible: !oldState.visible
       }))
}


    // show = () => {
    //     this.setState({visible: true})
    // }


    //  hide = () => {
    //     this.setState({visible: false})
    // }


    render() {
        return (
            <div>

                <button type="button" onClick={this.toggle}>{this.state.visible? 'cкрыть': 'показать'}</button>
                {/* <button type="button" onClick={this.show}>Показать</button> */}
                  {/* <button type="button" onClick={this.hide}>Скрыть</button> */}
              

                {this.state.visible &&   <div>Выпадающее Окно</div>
}
            </div>
        )
    }
}

export default Dropdown