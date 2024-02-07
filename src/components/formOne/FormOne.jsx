// import React, { useState, useEffect, useRef } from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import { Link } from 'react-router-dom';
// import Horse from '../../assets/image/horse.jpg';

// const Home = () => {
//   // Regular expressions for form validation
//   const regexExpressions = {
//     glosaOne: /preparation/,
//     glosaTwo: /concrete/,
//     glosaTree: /far below/,
//     glosaFour: /flexible/,
//     glosaFive: /height/,
//     glosaSix: /smoothly/,
//     glosaSeven: /pavement/,
//     glosaEight: /beat beat beaten/,
//     glosaNine: /chase/,
//     glosaTen: /move as one with/,
//     glosaEleven: /surranding/,
//     glosaTwelve: / /
//   };

//   // State and refs initialization
//   const [isSubmitted, setIsSubmitted] = useState(true);
//   const successAlertRef = useRef(null);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//     if (isSubmitted) {
//       successAlertRef.current.focus();
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
//         .required('Glosa must be specified - preparation.')
//         .matches(regexExpressions.glosaOne, 'You must spell correctly, preparation'),
//       glosaTwo: Yup.string()
//         .required('Glosa must be specified - concrete.')
//         .matches(regexExpressions.glosaTwo, 'You must spell correctly, concrete'),
//       glosaTree: Yup.string()
//         .required('Glosa must be specified - far below.')
//         .matches(regexExpressions.glosaTree, 'You must spell correctly, far below'),
//       glosaFour: Yup.string()
//         .required('Glosa must be specified - flexible.')
//         .matches(regexExpressions.glosaFour, 'You must spell correctly, flexible'),
//       glosaFive: Yup.string()
//         .required('Glosa must be specified - height.')
//         .matches(regexExpressions.glosaFive, 'You must spell correctly, height'),
//       glosaSix: Yup.string()
//         .required('Glosa must be specified - smoothly.')
//         .matches(regexExpressions.glosaSix, 'You must spell correctly, smoothly'),
//       glosaSeven: Yup.string()
//         .required('Glosa must be specified - pavement.')
//         .matches(regexExpressions.glosaSeven, 'You must spell correctly, pavement'),
//       glosaEight: Yup.string()
//         .required('Glosa must be specified - beat beat beaten.')
//         .matches(regexExpressions.glosaEight, 'You must spell correctly, beat beat beaten'),
//       glosaNine: Yup.string()
//         .required('Glosa must be specified - chase.')
//         .matches(regexExpressions.glosaNine, 'You must spell correctly, chase'),
//       glosaTen: Yup.string()
//         .required('Glosa must be specified - move as one with.')
//         .matches(regexExpressions.glosaTen, 'You must spell correctly, move as one with'),
//       glosaEleven: Yup.string()
//         .required('Glosa must be specified - surranding.')
//         .matches(regexExpressions.glosaEleven, 'You must spell correctly, surranding'),
//       glosaTwelve: Yup.string()
//         .required('Glosa must be specified - betong.')
//         .matches(regexExpressions.glosaTwelve, 'You must spell correctly, betong')
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
//       />
//     </div>
//   );
//   return (
//     <>
//       <form onSubmit={handleSubmit} noValidate>
//         <h1>Glosor v 46</h1>
//         <p className='errorMessage'>{errorMessage}</p>

//         {renderInputField('glosaOne', 'förberedelse')}
//         {renderInputField('glosaTwo', 'betong')}
//         {renderInputField('glosaTree', 'långt nedanför')}
//         {renderInputField('glosaFour', 'flexibel')}
//         {renderInputField('glosaFive', 'höjd')}
//         {renderInputField('glosaSix', 'mjuk, smidig')}
//         {renderInputField('glosaSeven', 'trottoar')}
//         {renderInputField('glosaEight', 'besegra (slå slagit slått)')}
//         {renderInputField('glosaNine', 'jaga efter någon')}
//         {renderInputField('glosaTen', 'ung flyta ihop med')}
//         {renderInputField('glosaEleven', 'omgivning')}
//         {renderInputField('glosaTwelve', 'förberedelse')}

//         <div className="d-grid">
//           <button className="btn btn-success" type="submit" disabled={!form.isValid || form.isSubmitting}>
//             Lämna in!
//           </button>
//         </div>
//       </form>

//       {isSubmitted && (
//         <div className="alert alert-success" tabIndex={-1} ref={successAlertRef} onFocus={() => successAlertRef.current.focus()}>
//           <img src={Horse} alt="" />
//           <Link to="/" className="btn btn-primary">Back to Homepage</Link>
//         </div>
//       )}
//     </>
//   );
// };

// export default Home;