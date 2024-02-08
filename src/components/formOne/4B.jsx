import React, { useState, useEffect, useRef } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import Cat from '../../assets/image/cat.jpg';

const Home = () => {
  const glosaOneExpression = "what's the weather like";
  const glosaTwoExpression = "spring";
  const glosaTreeExpression = "summer";
  const glosaFourExpression = "autumn";
  const glosaFiveExpression = "fall";
  const glosaSixExpression = "winter";
  const glosaSevenExpression = "season";
  const glosaEightExpression = "blow";
  const glosaNineExpression = "grow";
  const glosaTenExpression = "throw";
  const glosaElevenExpression = "window";
  const glosaTwelveExpression = "inside";
  const glosaThirteenExpression = "watch";
  // const glosaFourteenExpression = "window";
  // const glosaFifteenExpression = "inside";
  // const glosaSixteenExpression = "watch";
  

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
    // glosaFourteen: new RegExp(glosaFourteenExpression, "i"),
    // glosaFifteen: new RegExp(glosaFifteenExpression, "i"),
    // glosaSixteen: new RegExp(glosaSixteenExpression, "i"),

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
      // glosaFourteen: '',
      // glosaFifteen: '',
      // glosaSixteen: '',

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
        // glosaFourteen: Yup.string()
      //   .required(`Glosa must be specified - ${glosaFourteenExpression}.`)
      //   .matches(regexExpressions.glosaFourteen, `You must spell correctly: ${glosaFourteenExpression}`),
      // glosaFifteen: Yup.string()
      //   .required(`Glosa must be specified - ${glosaFifteenExpression}.`)
      //   .matches(regexExpressions.glosaFifteen, `You must spell correctly: ${glosaFifteenExpression}`),
      // glosaSixteen: Yup.string()
      //   .required(`Glosa must be specified - ${glosaSixteenExpression}.`)
      //   .matches(regexExpressions.glosaSixteen, `You must spell correctly: ${glosaSixteenExpression}`),

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
        {isSubmitted && (
          <div className="alert alert-success" tabIndex={-1} ref={successAlertRef} onFocus={() => successAlertRef.current.focus()}>
            <img src={Cat} alt="" />
            <Link to="/" className="btn btn-primary">Back to Homepage</Link>
          </div>
        )}
        <p className='errorMessage'>{errorMessage}</p>

        {renderInputField('glosaOne', 'Hur är vädret?')}
        {renderInputField('glosaTwo', 'vår')}
        {renderInputField('glosaTree', 'sommar')}
        {renderInputField('glosaFour', 'höst BrE')}
        {renderInputField('glosaFive', 'höst AmE')}
        {renderInputField('glosaSix', 'vinter')}
        {renderInputField('glosaSeven', 'årstid')}
        {renderInputField('glosaEight', 'blåsa')}
        {renderInputField('glosaNine', 'växa')}
        {renderInputField('glosaTen', 'kasta')}
        {renderInputField('glosaEleven', 'fönster')}
        {renderInputField('glosaTwelve', 'inomhus')}
        {renderInputField('glosaThirteen', 'titta')}
        {/* {renderInputField('glosaFourteen', 'window')}
        {renderInputField('glosaFifteen', 'inside')}
        {renderInputField('glosaSixteen', 'watch')} */}


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
// // Regular expressions for form validation
// const regexExpressions = {
//   glosaOne: /what´s the wether like/i,
//   glosaTwo: /spring/i,
//   glosaTree: /summar/i,
//   glosaFour: /autumn/i,
//   glosaFive: /fall/i,
//   glosaSix: /winter/i,
//   glosaSeven: /season/i,
//   glosaEight: /blow/i,
//   glosaNine: /grow/i,
//   glosaTen: /pass/i,
//   glosaEleven: /window/i,
//   glosaTwelve: /inside/i,
//   glosaThirteen: /watch/i,
//   // glosaFourteen: /around/i,
//   // glosaFifteen: /stay/i,
//   // glosaSixteen: /strike/i,
// };

// const glosaOneExpression = "what's the weather like";



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
//   const [errorMessage] = useState('');
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
//       glosaTwelve: '',
//       glosaThirteen: '',
//       // glosaFourteen: '',
//       // glosaFifteen: '',
//       // glosaSixteen: ''
//     },
//     validationSchema: Yup.object({
//       glosaOne: Yup.string()
//       .required(`Glosa must be specified - ${glosaOneExpression}.`)
//       .matches(new RegExp(glosaOneExpression, "i"), `You must spell correctly, ${glosaOneExpression}`),
//       glosaTwo: Yup.string()
//         .required('Glosa must be specified - spring.')
//         .matches(regexExpressions.glosaTwo, 'You must spell correctly, spring'),
//       glosaTree: Yup.string()
//         .required('Glosa must be specified - summar.')
//         .matches(regexExpressions.glosaTree, 'You must spell correctly, summar'),
//       glosaFour: Yup.string()
//         .required('Glosa must be specified - autumn.')
//         .matches(regexExpressions.glosaFour, 'You must spell correctly, autumn'),
//       glosaFive: Yup.string()
//         .required('Glosa must be specified - fall.')
//         .matches(regexExpressions.glosaFive, 'You must spell correctly, fall'),
//       glosaSix: Yup.string()
//         .required('Glosa must be specified - winter')
//         .matches(regexExpressions.glosaSix, 'You must spell correctly, winter'),
//       glosaSeven: Yup.string()
//         .required('Glosa must be specified - season.')
//         .matches(regexExpressions.glosaSeven, 'You must spell correctly, season'),
//       glosaEight: Yup.string()
//         .required('Glosa must be specified - blow.')
//         .matches(regexExpressions.glosaEight, 'You must spell correctly, blow'),
//       glosaNine: Yup.string()
//         .required('Glosa must be specified - grow.')
//         .matches(regexExpressions.glosaNine, 'You must spell correctly, grow'),
//       glosaTen: Yup.string()
//         .required('Glosa must be specified - pass.')
//         .matches(regexExpressions.glosaTen, 'You must spell correctly, pass'),
//       glosaEleven: Yup.string()
//         .required('Glosa must be specified - window.')
//         .matches(regexExpressions.glosaEleven, 'You must spell correctly, window'),
//       glosaTwelve: Yup.string()
//         .required('Glosa must be specified - inside.')
//         .matches(regexExpressions.glosaTwelve, 'You must spell correctly, inside'),
//       glosaThirteen: Yup.string()
//         .required('Glosa must be specified - watch.')
//         .matches(regexExpressions.glosaThirteen, 'You must spell correctly, watch'),
//       // glosaFourteen: Yup.string()
//       //   .required('Glosa must be specified - around.')
//       //   .matches(regexExpressions.glosaFourteen, 'You must spell correctly, around'),
//       // glosaFifteen: Yup.string()
//       //   .required('Glosa must be specified - stay.')
//       //   .matches(regexExpressions.glosaFifteen, 'You must spell correctly, stay'),
//         // glosaSixteen: Yup.string()
//         // .required('Glosa must be specified - strike.')
//         // .matches(regexExpressions.glosaSixteen, 'You must spell correctly, strike')
      
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
//         {isSubmitted && (
//         <div className="alert alert-success" tabIndex={-1} ref={successAlertRef} onFocus={() => successAlertRef.current.focus()}>
//           <img src={Horse} alt="" />
//           <Link to="/" className="btn btn-primary">Back to Homepage</Link>
//         </div>
//       )}
//         <p className='errorMessage'>{errorMessage}</p>

//         {renderInputField('glosaOne', 'Hur är vädret?')}
//         {renderInputField('glosaTwo', 'vår')}
//         {renderInputField('glosaTree', 'sommar')}
//         {renderInputField('glosaFour', 'höst BrE')}
//         {renderInputField('glosaFive', 'höst AmE')}
//         {renderInputField('glosaSix', 'vinter')}
//         {renderInputField('glosaSeven', 'årstid')}
//         {renderInputField('glosaEight', 'blåsa')}
//         {renderInputField('glosaNine', 'växa')}
//         {renderInputField('glosaTen', 'kasta')}
//         {renderInputField('glosaEleven', 'fönster')}
//         {renderInputField('glosaTwelve', 'inomhus')}
//         {renderInputField('glosaThirteen', 'titta')}
//         {/* {renderInputField('glosaFourteen', 'runt omkring')}
//         {renderInputField('glosaFifteen', 'stanna')} */}
//         {/* {renderInputField('glosaSixteen', 'hugga')} */}

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
