import React from "react"
import styles from '../componentsCreatedByMe/Counter.module.css'

class Counter extends React.Component{

    static defaultProps = {
    initialValue: 1
}


state = {
    // value: 5

   value: this.props.initialValue
}


    hendleIncriment = () => {
        console.log('клик в плюс')
       
        this.setState((oldState) => {
            return {value: oldState.value + 1}
        })

        
    }
    
    hendleDecrement = () => {
        console.log('клик в минус')
        console.log(this)

        this.setState((oldState) => {
             
            return {value: oldState.value - 1}
         })
        
      
    }

    render() {
        return (
        <div className={styles.mainContainer}>
                <span className={styles.textContnent}>{this.state.value}</span>
                
                <div>
                    <button className={styles.button} type="button" onClick={this.hendleIncriment}>Увеличить на 1</button>
                    <button className={styles.button} type="button" onClick={this.hendleDecrement}>Уменьшить на 1</button>
                </div>
            </div>

        
        
  )
    }
};


export default Counter;