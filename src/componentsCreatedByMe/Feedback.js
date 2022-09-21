import React, { Component } from "react";
import styles from '../componentsCreatedByMe/Feedback.module.css'

class Feedback extends Component {
    
       static defaultProps = {
    initialValue: 0
}

    state = {
   
  good: 0,
  neutral: this.props.initialValue,
  bad: this.props.initialValue,
  
    }
    
    hendleIncrimentGood = () => {
        
       
        this.setState((oldState) => {
            return {good: oldState.good + 1}
        })
    }

    hendleIncrimentNeutural = () => {
    
         this.setState((oldState) => {
            return {neutral: oldState.neutral + 1}
        })
    }
    
    hendleIncrimentBad = () => {
        this.setState((oldState) => {
            return {bad: oldState.bad + 1}
        })
    }

     totalFeedback = () => {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
    };
    

    persentOfpositive = () => {
        const { good, neutral, bad } = this.state;

        return Number.parseInt(100 / (bad + neutral + good) * good)
        
        
    }

  


    render() {

        if (this.totalFeedback() === 0) {
            return (
                <div>
                     <div>
                    <p className={styles.text}>Оставьте ваш отзыв, пожалуйста</p>
</div>


                <div>
                    <button className={styles.button} onClick={this.hendleIncrimentGood}>Шикарно</button>
                <button className={styles.button} onClick={this.hendleIncrimentNeutural}>Нормально</button>
                    <button className={styles.button} onClick={this.hendleIncrimentBad}>Плохо</button>
                    </div>
                    
                    <h2>На данный момент голосов нет. Статистика отсутствует.</h2>
                  

                </div>
            )
        }
 


        if (this.totalFeedback() !== 0) {
               return (
            <div>

                <div>
                    <p className={styles.text}>Оставьте ваш отзыв, пожалуйста</p>
</div>


                <div>
                    <button className={styles.button} onClick={this.hendleIncrimentGood}>Шикарно</button>
                <button className={styles.button} onClick={this.hendleIncrimentNeutural}>Нормально</button>
                    <button className={styles.button} onClick={this.hendleIncrimentBad}>Плохо</button>
                </div>

                <div>
                    <p className={styles.text}>Статистика отзывов </p>
                    <p className={styles.statisticText}>Позитивные отзывы: {this.state.good}</p>
                    <p className={styles.statisticText}>Нейтральные отзывы: {this.state.neutral}</p>
                    <p className={styles.statisticText} >Негативный отзывы: {this.state.bad}</p>
                    <p className={styles.statisticText} >Общее количество голосов: {this.totalFeedback()}</p>
                    <p className={styles.statisticText} >Процент позитивных отзывов: {this.persentOfpositive() ? this.persentOfpositive(): 0}%</p>
                    

                </div>
        </div>
        )
        }
        

     





        
    }
}

export default Feedback