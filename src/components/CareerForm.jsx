// src/components/CareerForm.jsx

import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const CareerForm = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    suffix: '',
    ssn: '',
    dob_month: '',
    dob_day: '',
    dob_year: '',
    address1: '',
    address2: '',
    country: 'United States',
    city: '',
    state: '',
    zip: '',
    livedThreeYears: 'Yes',
    primaryPhone: '',
    cellPhone: '',
    email: '',
    confirmEmail: '',
    agreeToCommunications: true,
    agreeToTexts: false,
  });


   // New state variables to track form submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleThreeYearsClick = (value) => {
    setFormData((prevData) => ({ ...prevData, livedThreeYears: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
 setSubmitStatus(''); // Reset status on each new submission attempt
    if (formData.email !== formData.confirmEmail) {
      alert("Emails do not match. Please check and try again.");
      return;
    }
setIsSubmitting(true);
    // Replace with your EmailJS Service ID, Template ID, and Public Key
    const serviceID = 'service_19gzj3c';
    const templateID = 'template_yhey6tr';
    const publicKey = 'XL7fCY_RL7PSOWLBv';

     emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
        console.log('SUCCESS!', result.text);
        setSubmitStatus('success');
        setFormData(initialFormData); // Reset form state to initial values
        form.current.reset(); // Also reset the form element itself
      }, (error) => {
        console.log('FAILED...', error.text);
        setSubmitStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false); // Re-enable the button
      });
  };

  // Helper function for generating input classes
  const inputClasses = "w-full bg-gray-100 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500";

  return (
    <div className="bg-white min-h-screen flex justify-center items-start p-4 sm:p-8 font-sans">
      <div className="w-full max-w-4xl mx-auto">
        {/* Logo and Progress Bar */}
        <div className="text-center mb-8 mt-25">
          <img src="/Rise-n-Grind4.svg" alt="RiseNGrind Trucking" className="mx-auto h-28 mb-4 sm:h-34 md:h-40" /> {/* Make sure you have a logo in your public folder */}
         
          <p className="text-sm text-gray-600 mt-2">FORM </p>
        </div>

        <form ref={form} onSubmit={sendEmail} className="space-y-8">
          
          {/* Personal Information Section */}
          <div className="border-t pt-6">
            <h2 className="text-2xl font-semibold mb-6">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-1">First Name <span className="text-red-500">*</span></label>
                <input type="text" name="firstName" onChange={handleChange} className={inputClasses} required />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Middle Name</label>
                <input type="text" name="middleName" onChange={handleChange} className={inputClasses} />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Last Name <span className="text-red-500">*</span></label>
                <input type="text" name="lastName" onChange={handleChange} className={inputClasses} required />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Suffix</label>
                <select name="suffix" onChange={handleChange} className={inputClasses}>
                  <option value="">Please Choose</option>
                  <option value="Jr">Jr.</option>
                  <option value="Sr">Sr.</option>
                  <option value="II">II</option>
                  <option value="III">III</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-1">SSN / SIN <span className="text-red-500">*</span></label>
                <input type="text" name="ssn" onChange={handleChange} className={inputClasses} required />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Date of Birth (mm/dd/yyyy) <span className="text-red-500">*</span></label>
                <div className="flex gap-2">
                  <input type="text" name="dob_month" placeholder="MM" maxLength="2" onChange={handleChange} className={`${inputClasses} text-center`} required />
                  <input type="text" name="dob_day" placeholder="DD" maxLength="2" onChange={handleChange} className={`${inputClasses} text-center`} required />
                  <input type="text" name="dob_year" placeholder="YYYY" maxLength="4" onChange={handleChange} className={`${inputClasses} text-center`} required />
                </div>
              </div>
            </div>
          </div>

          {/* Address Section */}
          <div className="border-t pt-6">
            <h2 className="text-2xl font-semibold mb-6">Address</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-gray-700 mb-1">Current Street Address (line 1) <span className="text-red-500">*</span></label>
                <input type="text" name="address1" onChange={handleChange} className={inputClasses} required />
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-700 mb-1">Current Street Address (line 2)</label>
                <input type="text" name="address2" onChange={handleChange} className={inputClasses} />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Country <span className="text-red-500">*</span></label>
                <input type="text" name="country" value={formData.country} onChange={handleChange} className={inputClasses} required />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">City <span className="text-red-500">*</span></label>
                <input type="text" name="city" onChange={handleChange} className={inputClasses} required />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">State/Province <span className="text-red-500">*</span></label>
                <select name="state" onChange={handleChange} className={inputClasses} required>
                   <option value="">Please Choose</option>
                   {/* Add all US states here */}
                   <option value="AL">Alabama</option>
<option value="AK">Alaska</option>
<option value="AZ">Arizona</option>
<option value="AR">Arkansas</option>
<option value="CA">California</option>
<option value="CO">Colorado</option>
<option value="CT">Connecticut</option>
<option value="DE">Delaware</option>
<option value="FL">Florida</option>
<option value="GA">Georgia</option>
<option value="HI">Hawaii</option>
<option value="ID">Idaho</option>
<option value="IL">Illinois</option>
<option value="IN">Indiana</option>
<option value="IA">Iowa</option>
<option value="KS">Kansas</option>
<option value="KY">Kentucky</option>
<option value="LA">Louisiana</option>
<option value="ME">Maine</option>
<option value="MD">Maryland</option>
<option value="MA">Massachusetts</option>
<option value="MI">Michigan</option>
<option value="MN">Minnesota</option>
<option value="MS">Mississippi</option>
<option value="MO">Missouri</option>
<option value="MT">Montana</option>
<option value="NE">Nebraska</option>
<option value="NV">Nevada</option>
<option value="NH">New Hampshire</option>
<option value="NJ">New Jersey</option>
<option value="NM">New Mexico</option>
<option value="NY">New York</option>
<option value="NC">North Carolina</option>
<option value="ND">North Dakota</option>
<option value="OH">Ohio</option>
<option value="OK">Oklahoma</option>
<option value="OR">Oregon</option>
<option value="PA">Pennsylvania</option>
<option value="RI">Rhode Island</option>
<option value="SC">South Carolina</option>
<option value="SD">South Dakota</option>
<option value="TN">Tennessee</option>
<option value="TX">Texas</option>
<option value="UT">Utah</option>
<option value="VT">Vermont</option>
<option value="VA">Virginia</option>
<option value="WA">Washington</option>
<option value="WV">West Virginia</option>
<option value="WI">Wisconsin</option>
<option value="WY">Wyoming</option>
                   {/* ... and so on */}
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Zip/Postal Code <span className="text-red-500">*</span></label>
                <input type="text" name="zip" onChange={handleChange} className={inputClasses} required />
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-700 mb-2">Residence address for 3 or more years? <span className="text-red-500">*</span></label>
                <div className="flex gap-2">
                  <button type="button" onClick={() => handleThreeYearsClick('Yes')} className={`py-2 px-6 rounded-md ${formData.livedThreeYears === 'Yes' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>Yes</button>
                  <button type="button" onClick={() => handleThreeYearsClick('No')} className={`py-2 px-6 rounded-md ${formData.livedThreeYears === 'No' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>No</button>
                  <input type="hidden" name="livedThreeYears" value={formData.livedThreeYears} />
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Section */}
          <div className="border-t pt-6">
            <h2 className="text-2xl font-semibold mb-6">Contact</h2>
            <p className="text-sm text-gray-600 mb-4">If your cell phone is also your primary phone, enter it in both fields below.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div>
                <label className="block text-gray-700 mb-1">Primary Phone <span className="text-red-500">*</span></label>
                <input type="tel" name="primaryPhone" onChange={handleChange} className={inputClasses} required />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Cell Phone</label>
                <input type="tel" name="cellPhone" onChange={handleChange} className={inputClasses} />
              </div>
               <div>
                <label className="block text-gray-700 mb-1">Email Address <span className="text-red-500">*</span></label>
                <input type="email" name="email" onChange={handleChange} className={inputClasses} required />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Confirm Email Address <span className="text-red-500">*</span></label>
                <input type="email" name="confirmEmail" onChange={handleChange} className={inputClasses} required />
              </div>
            </div>
          </div>

          {/* Agreements Section */}
          <div className="border-t pt-6 space-y-6">
              <div>
                  <label className="flex items-start gap-3">
                      <input type="checkbox" name="agreeToCommunications" checked={formData.agreeToCommunications} onChange={handleChange} className="mt-1 h-5 w-5 accent-blue-600" />
                      <div>
                          <p className="font-semibold">Yes, I agree to receive information concerning future opportunities or promotions from Bellerud Transport by email or other commercial electronic communications.</p>
                      </div>
                  </label>
              </div>
               <div>
                  <label className="flex items-start gap-3">
                      <input type="checkbox" name="agreeToTexts" checked={formData.agreeToTexts} onChange={handleChange} className="mt-1 h-5 w-5 accent-blue-600" />
                      <div>
                          <p className="font-semibold">Would you like to receive communication from Bellerud Transport via text message?</p>
                          <p className="text-sm text-gray-600 mt-1">By participating, you consent to receive text messages sent by an automatic telephone dialing system, which may contain recruiting/advertising messages. Consent to these terms is not a condition of being hired, contracted, or leased. You may opt out at any time by texting STOP to unsubscribe.</p>
                      </div>
                  </label>
              </div>
          </div>
          
          {/* --- NEW: Submission Status Messages --- */}
          <div className="pt-2 text-center h-6">
              {submitStatus === 'success' && (
                  <p className="text-green-600 font-semibold">
                      Thank you! Your application has been submitted successfully.
                  </p>
              )}
              {submitStatus === 'error' && (
                  <p className="text-red-600 font-semibold">
                      An error occurred while submitting the form. Please try again.
                  </p>
              )}
              {submitStatus === 'email_mismatch' && (
                  <p className="text-red-600 font-semibold">
                      Emails do not match. Please check and try again.
                  </p>
              )}
          </div>
          
          {/* --- MODIFIED: Submit Button --- */}
          <div className="pt-2">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-red-600 text-white font-bold py-3 px-8 rounded-md text-lg hover:bg-red-700 transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default CareerForm;