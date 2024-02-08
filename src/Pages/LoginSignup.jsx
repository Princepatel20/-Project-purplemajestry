import React from 'react';
import './LoginSignup.css';

const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <input type="phone" placeholder="Phone No." />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already have an account? <span>Login here</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>
            By continuing, I agree to the <span>terms of use</span> & <span>privacy policy</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;

// import React from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import { useHistory } from 'react-router-dom';
// import './LoginSignup.css';

// const LoginSignup = () => {
//   const history = useHistory();

//   const handleSubmit = async (values, { setSubmitting }) => {
//     try {
//       // Your authentication logic here (e.g., sending data to backend for registration)
//       console.log('Submitting form with values:', values);

//       // Simulating server response delay (remove in production)
//       await new Promise((resolve) => setTimeout(resolve, 1000));

//       // Redirect to dashboard after successful registration
//       history.push('/dashboard');
//     } catch (error) {
//       console.error('Error during form submission:', error.message);
//       // Handle error (e.g., display error message to user)
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <div className="loginsignup">
//       <div className="loginsignup-container">
//         <h1>Sign Up</h1>
//         <Formik
//           initialValues={{
//             name: '',
//             email: '',
//             phone: '',
//             password: ''
//           }}
//           validate={(values) => {
//             const errors = {};
//             // Your validation logic here
//             return errors;
//           }}
//           onSubmit={handleSubmit}
//         >
//           {({ isSubmitting }) => (
//             <Form>
//               <div className="loginsignup-fields">
//                 <Field type="text" name="name" placeholder="Your Name" />
//                 <ErrorMessage name="name" component="div" className="error-message" />

//                 <Field type="email" name="email" placeholder="Email Address" />
//                 <ErrorMessage name="email" component="div" className="error-message" />

//                 <Field type="phone" name="phone" placeholder="Phone No." />
//                 <ErrorMessage name="phone" component="div" className="error-message" />

//                 <Field type="password" name="password" placeholder="Password" />
//                 <ErrorMessage name="password" component="div" className="error-message" />
//               </div>

//               <button type="submit" disabled={isSubmitting}>
//                 {isSubmitting ? 'Submitting...' : 'Continue'}
//               </button>
//             </Form>
//           )}
//         </Formik>

//         <p className="loginsignup-login">
//           Already have an account? <span>Login here</span>
//         </p>
//         <div className="loginsignup-agree">
//           <input type="checkbox" name="agree" id="agree" />
//           <label htmlFor="agree">
//             By continuing, I agree to the <span>terms of use</span> & <span>privacy policy</span>.
//           </label>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginSignup;
