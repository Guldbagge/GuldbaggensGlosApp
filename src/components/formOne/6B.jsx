import React, { useState, useEffect, useRef } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import Horse from '../../assets/image/horse.jpg';

const Home = () => {
  const glosaOneExpression = "Traveler";
  const glosaTwoExpression = "Journey";
  const glosaTreeExpression = "Destination";
  const glosaFourExpression = "Baggage";
  const glosaFiveExpression = "Adventure";
  const glosaSixExpression = "Explore";
  const glosaSevenExpression = "Map";
  const glosaEightExpression = "Ticket";
  const glosaNineExpression = "Guide";
  const glosaTenExpression = "Souvenir";
  

  // Regular expressions for form validation
  const regexExpressions = {
    glosaOne: new RegExp(glosaOneExpression, "i"),
    glosaTwo: new RegExp(glosaTwoExpression, "i"),
    glosaTree: new RegExp(glosaTreeExpression, "i"),
    glosaFour: new RegExp(glosaFourExpression, "i"),
    glosaFive: new RegExp(glosaFiveExpression, "i"),
    glosaSix: new RegExp(glosaSixExpression, "i"),
    glosaSeven: new RegExp(glosaSevenExpression, "i"),
    glosaEight: new RegExp(glosaEightExpression, "i"),
    glosaNine: new RegExp(glosaNineExpression, "i"),
    glosaTen: new RegExp(glosaTenExpression, "i"),
  };

  // State and refs initialization
  const [isSubmitted, setIsSubmitted] = useState(true);
  const successAlertRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (isSubmitted) {
      successAlertRef.current.blur();  // Ta bort fokus från knappen
    }
  }, [isSubmitted]);
    
  useEffect(() => {
    setIsSubmitted(false);
  }, []);

  // State for error message and form handling using Formik
  const [errorMessage] = useState('');
  const form = useFormik({
    initialValues: {
      glosaOne: '',
      glosaTwo: '',
      glosaTree: '',
      glosaFour: '',
      glosaFive: '',
      glosaSix: '',
      glosaSeven: '',
      glosaEight: '',
      glosaNine: '',
      glosaTen: '',
    },
    validationSchema: Yup.object({
      glosaOne: Yup.string()
        .required(`Glosa must be specified - ${glosaOneExpression}.`)
        .matches(regexExpressions.glosaOne, `You must spell correctly: ${glosaOneExpression}`),
      glosaTwo: Yup.string()
        .required(`Glosa must be specified - ${glosaTwoExpression}.`)
        .matches(regexExpressions.glosaTwo, `You must spell correctly: ${glosaTwoExpression}`),
      glosaTree: Yup.string()
        .required(`Glosa must be specified - ${glosaTreeExpression}.`)
        .matches(regexExpressions.glosaTree, `You must spell correctly: ${glosaTreeExpression}`),
      glosaFour: Yup.string()
        .required(`Glosa must be specified - ${glosaFourExpression}.`)
        .matches(regexExpressions.glosaFour, `You must spell correctly: ${glosaFourExpression}`),
      glosaFive: Yup.string()
        .required(`Glosa must be specified - ${glosaFiveExpression}.`)
        .matches(regexExpressions.glosaFive, `You must spell correctly: ${glosaFiveExpression}`),
      glosaSix: Yup.string()
        .required(`Glosa must be specified - ${glosaSixExpression}.`)
        .matches(regexExpressions.glosaSix, `You must spell correctly: ${glosaSixExpression}`),
      glosaSeven: Yup.string()
        .required(`Glosa must be specified - ${glosaSevenExpression}.`)
        .matches(regexExpressions.glosaSeven, `You must spell correctly: ${glosaSevenExpression}`),
      glosaEight: Yup.string()
        .required(`Glosa must be specified - ${glosaEightExpression}.`)
        .matches(regexExpressions.glosaEight, `You must spell correctly: ${glosaEightExpression}`),
      glosaNine: Yup.string()
        .required(`Glosa must be specified - ${glosaNineExpression}.`)
        .matches(regexExpressions.glosaNine, `You must spell correctly: ${glosaNineExpression}`),
      glosaTen: Yup.string()
        .required(`Glosa must be specified - ${glosaTenExpression}.`)
        .matches(regexExpressions.glosaTen, `You must spell correctly: ${glosaTenExpression}`),
    })
  });

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  const renderInputField = (fieldName, label) => (
    <div className="mb-3 formBox">
      <label>{form.touched[fieldName] && form.errors[fieldName] ? form.errors[fieldName] : label}</label>
      <input
        type="text"
        name={fieldName}
        value={form.values[fieldName]}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
        autoComplete="off" // Disable autocomplete for individual input fields
      />
    </div>
  );

  return (
    <>
      <form onSubmit={handleSubmit} noValidate>
        <h1>Glosor v 16</h1>
        <p className='errorMessage'>{errorMessage}</p>
        {isSubmitted && (
          <div className="alert alert-success" tabIndex={-1} ref={successAlertRef} onFocus={() => successAlertRef.current.focus()}>
            <img src={Horse} alt="" />
            <Link to="/" className="btn btn-primary">Back to Homepage</Link>
          </div>
        )}

{renderInputField('glosaOne', 'Resenär', glosaOneExpression)}
{renderInputField('glosaTwo', 'Resa', glosaTwoExpression)}
{renderInputField('glosaTree', 'Destination', glosaTreeExpression)}
{renderInputField('glosaFour', 'Bagage', glosaFourExpression)}
{renderInputField('glosaFive', 'Äventyr', glosaFiveExpression)}
{renderInputField('glosaSix', 'Utforska', glosaSixExpression)}
{renderInputField('glosaSeven', 'Karta', glosaSevenExpression)}
{renderInputField('glosaEight', 'Biljett', glosaEightExpression)}
{renderInputField('glosaNine', 'Guide', glosaNineExpression)}
{renderInputField('glosaTen', 'Souvenir', glosaTenExpression)}



        <div className="d-grid">
          <button className="btn btn-success" type="submit" disabled={!form.isValid || form.isSubmitting}>
            Lämna in!
          </button>
        </div>
      </form>
    </>
  );
};

export default Home;