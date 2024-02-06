import React, { useState, useEffect, useRef } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import Horse from '../../assets/image/horse.jpg';

const Home = () => {
  const glosaOneExpression = "forbidden";
  const glosaTwoExpression = "on board";
  const glosaTreeExpression = "care";
  const glosaFourExpression = "soldier";
  const glosaFiveExpression = "run ran run";
  const glosaSixExpression = "hide hid hidden";
  const glosaSevenExpression = "fight fought fought";
  const glosaEightExpression = "swoard";
  const glosaNineExpression = "axe";
  const glosaTenExpression = "catch caught caught";

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
        <h1>Glosor v 7</h1>
        <p className='errorMessage'>{errorMessage}</p>
        {isSubmitted && (
          <div className="alert alert-success" tabIndex={-1} ref={successAlertRef} onFocus={() => successAlertRef.current.focus()}>
            <img src={Horse} alt="" />
            <Link to="/" className="btn btn-primary">Back to Homepage</Link>
          </div>
        )}

        {renderInputField('glosaOne', 'förbjudet')}
        {renderInputField('glosaTwo', 'ombord')}
        {renderInputField('glosaTree', 'bry sig')}
        {renderInputField('glosaFour', 'soldat')}
        {renderInputField('glosaFive', 'springa sprang sprungit')}
        {renderInputField('glosaSix', 'göma sig gömde sig gömt sig')}
        {renderInputField('glosaSeven', 'kämpa kämpade kämpat')}
        {renderInputField('glosaEight', 'svärd')}
        {renderInputField('glosaNine', 'yxa')}
        {renderInputField('glosaTen', 'fånga fångade fångat')}

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

// import React, { useState, useEffect, useRef } from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import { Link } from 'react-router-dom';
// import Horse from '../../assets/image/horse.jpg';

// const Home = () => {
//   // Regular expressions for form validation
//   const regexExpressions = {
//     glosaOne: /forbidden/i,
//     glosaTwo: /on board/i,
//     glosaTree: /care/i,
//     glosaFour: /soldier/i,
//     glosaFive: /run ran run/i,
//     glosaSix: /hide hid hidden/i,
//     glosaSeven: /fight fought fought/i,
//     glosaEight: /swoard/i,
//     glosaNine: /axe/i,
//     glosaTen: /catch caught caught/i,
//     // glosaEleven: /surrounding/i,
//     // glosaTwelve: / /i,
// };


//   // State and refs initialization
//   const [isSubmitted, setIsSubmitted] = useState(true);
//   const successAlertRef = useRef(null);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//     if (isSubmitted) {
//       successAlertRef.current.blur();  // Ta bort fokus från knappen
//     }
//   }, [isSubmitted]);
    
//   useEffect(() => {
//     setIsSubmitted(false);
//   }, []);
  

//   // State for error message and form handling using Formik
//   const [errorMessage, setErrorMessage] = useState('');
//   const form = useFormik({
//     initialValues: {
//       glosaOne: '',
//       glosaTwo: '',
//       glosaTree: '',
//       glosaFour: '',
//       glosaFive: '',
//       glosaSix: '',
//       glosaSeven: '',
//       glosaEight: '',
//       glosaNine: '',
//       glosaTen: '',
//       glosaEleven: '',
//       glosaTwelve: ''
//     },
//     validationSchema: Yup.object({
//       glosaOne: Yup.string()
//         .required('Glosa must be specified - forbidden.')
//         .matches(regexExpressions.glosaOne, 'You must spell correctly, forbidden'),
//       glosaTwo: Yup.string()
//         .required('Glosa must be specified - on board.')
//         .matches(regexExpressions.glosaTwo, 'You must spell correctly, on board'),
//       glosaTree: Yup.string()
//         .required('Glosa must be specified - care.')
//         .matches(regexExpressions.glosaTree, 'You must spell correctly, care'),
//       glosaFour: Yup.string()
//         .required('Glosa must be specified - soldier.')
//         .matches(regexExpressions.glosaFour, 'You must spell correctly, soldier'),
//       glosaFive: Yup.string()
//         .required('Glosa must be specified - run ran run.')
//         .matches(regexExpressions.glosaFive, 'You must spell correctly, run ran run'),
//       glosaSix: Yup.string()
//         .required('Glosa must be specified - hide hid hidden.')
//         .matches(regexExpressions.glosaSix, 'You must spell correctly, hide hid hidden'),
//       glosaSeven: Yup.string()
//         .required('Glosa must be specified - fight fought fought.')
//         .matches(regexExpressions.glosaSeven, 'You must spell correctly, fight fought fought'),
//       glosaEight: Yup.string()
//         .required('Glosa must be specified - swoard.')
//         .matches(regexExpressions.glosaEight, 'You must spell correctly, swoard'),
//       glosaNine: Yup.string()
//         .required('Glosa must be specified - axe.')
//         .matches(regexExpressions.glosaNine, 'You must spell correctly, axe'),
//       glosaTen: Yup.string()
//         .required('Glosa must be specified - catch caught caught.')
//         .matches(regexExpressions.glosaTen, 'You must spell correctly, catch caught caught'),
//       // glosaEleven: Yup.string()
//       //   .required('Glosa must be specified - surrounding.')
//       //   .matches(regexExpressions.glosaEleven, 'You must spell correctly, surrounding'),
//       // // glosaTwelve: Yup.string()
//       //   .required('Glosa must be specified - sanning.')
//       //   .matches(regexExpressions.glosaTwelve, 'You must spell correctly, sanning')
//     })
//   });

//   // Handle form submission
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setIsSubmitted(true);
//   };

//   const renderInputField = (fieldName, label) => (
//     <div className="mb-3 formBox">
//       <label>{form.touched[fieldName] && form.errors[fieldName] ? form.errors[fieldName] : label}</label>
//       <input
//         type="text"
//         name={fieldName}
//         value={form.values[fieldName]}
//         onChange={form.handleChange}
//         onBlur={form.handleBlur}
//         autoComplete="off" // Disable autocomplete for individual input fields
//       />
//     </div>
//   );
//   return (
//     <>
//       <form onSubmit={handleSubmit} noValidate>
//         <h1>Glosor v 7</h1>
//         <p className='errorMessage'>{errorMessage}</p>
//         {isSubmitted && (
//         <div className="alert alert-success" tabIndex={-1} ref={successAlertRef} onFocus={() => successAlertRef.current.focus()}>
//           <img src={Horse} alt="" />
//           <Link to="/" className="btn btn-primary">Back to Homepage</Link>
//         </div>
//       )}

//         {renderInputField('glosaOne', 'förbjudet')}
//         {renderInputField('glosaTwo', 'ombord')}
//         {renderInputField('glosaTree', 'bry sig')}
//         {renderInputField('glosaFour', 'soldat')}
//         {renderInputField('glosaFive', 'springa sprang sprungit')}
//         {renderInputField('glosaSix', 'göma sig gömde sig gömt sig')}
//         {renderInputField('glosaSeven', 'kämpa kämpade kämpat')}
//         {renderInputField('glosaEight', 'svärd')}
//         {renderInputField('glosaNine', 'yxa')}
//         {renderInputField('glosaTen', 'fånga fångade fångat')}
//         {/* {renderInputField('glosaEleven', 'omgivning')} */}
//         {/* {renderInputField('glosaTwelve', 'otäck')} */}

//         <div className="d-grid">
//           <button className="btn btn-success" type="submit" disabled={!form.isValid || form.isSubmitting}>
//             Lämna in!
//           </button>
//         </div>
//       </form>
//     </>
//   );
// };

// export default Home;