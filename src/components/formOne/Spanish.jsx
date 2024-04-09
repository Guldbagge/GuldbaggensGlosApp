import React, { useState, useEffect, useRef } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import Cat from '../../assets/image/spanish.jpg';

const Home = () => {
  const glosaOneExpression = "lunes";
  const glosaTwoExpression = "martes";
  const glosaTreeExpression = "miércoles";
  const glosaFourExpression = "jueves";
  const glosaFiveExpression = "viernes";
  const glosaSixExpression = "sábado";
  const glosaSevenExpression = "domingo";
  const glosaEightExpression = "día de semana";
  const glosaNineExpression = "día laborable";
  const glosaTenExpression = "fin de semana";
  const glosaElevenExpression = "día feriado";
  const glosaTwelveExpression = "día festivo";
  const glosaThirteenExpression = "día laboral";
  

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
    glosaEleven: new RegExp(glosaElevenExpression, "i"),
    glosaTwelve: new RegExp(glosaTwelveExpression, "i"),
    glosaThirteen: new RegExp(glosaThirteenExpression, "i"),
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
      glosaEleven: '',
      glosaTwelve: '',
      glosaThirteen: '',
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
      glosaEleven: Yup.string()
        .required(`Glosa must be specified - ${glosaElevenExpression}.`)
        .matches(regexExpressions.glosaEleven, `You must spell correctly: ${glosaElevenExpression}`),
      glosaTwelve: Yup.string()
        .required(`Glosa must be specified - ${glosaTwelveExpression}.`)
        .matches(regexExpressions.glosaTwelve, `You must spell correctly: ${glosaTwelveExpression}`),
      glosaThirteen: Yup.string()
        .required(`Glosa must be specified - ${glosaThirteenExpression}.`)
        .matches(regexExpressions.glosaThirteen, `You must spell correctly: ${glosaThirteenExpression}`),
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
        <h1>Glosor v 10</h1>
        {isSubmitted && (
          <div className="alert alert-success" tabIndex={-1} ref={successAlertRef} onFocus={() => successAlertRef.current.focus()}>
            <img src={Cat} alt="" />
            <Link to="/" className="btn btn-primary">Back to Homepage</Link>
          </div>
        )}
        <p className='errorMessage'>{errorMessage}</p>

        {renderInputField('glosaOne', 'Måndag')}
        {renderInputField('glosaTwo', 'Tisdag')}
        {renderInputField('glosaTree', 'Onsdag')}
        {renderInputField('glosaFour', 'Torsdag')}
        {renderInputField('glosaFive', 'Fredag')}
        {renderInputField('glosaSix', 'Lördag')}
        {renderInputField('glosaSeven', 'Söndag')}
        {renderInputField('glosaEight', 'Veckodag')}
        {renderInputField('glosaNine', 'Arbetsdag')}
        {renderInputField('glosaTen', 'Helg')}
        {renderInputField('glosaEleven', 'Röd dag')}
        {renderInputField('glosaTwelve', 'Röd dag')}
        {renderInputField('glosaThirteen', 'Arbetsdag')}


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
