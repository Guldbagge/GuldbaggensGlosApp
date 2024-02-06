import React from 'react'

const regexExpressionsEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

const Form48 = () => {
    return (
        <div>       
           <form action="" autoComplete="off">
                <label htmlFor="question1">Question 1:</label>
                <input type="text" id="question1" name="question1" />

                <label htmlFor="question2">Question 2:</label>
                <input type="text" id="question2" name="question2" />

                <label htmlFor="question3">Question 3:</label>
                <input type="text" id="question3" name="question3" />

                <label htmlFor="question4">Question 4:</label>
                <input type="text" id="question4" name="question4" />

                <label htmlFor="question5">Question 5:</label>
                <input type="text" id="question5" name="question5" />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form48