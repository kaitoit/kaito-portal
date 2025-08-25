import React, { useState } from "react";
import axios from "axios";

// This component would be used on a specific service page, e.g., /pages/services/iso-27001.js
const ServiceInquiryForm = ({ serviceName }) => {
  const [formData, setFormData] = useState({ name: '', firm: '', email: '' });
  const [formState, setFormState] = useState({ status: 'idle' }); // idle, submitting, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState({ status: 'submitting' });
    try {
      // The API payload should include the service they are interested in
      await axios.post("https://<your-api>.azurewebsites.net/api/inquiries", {
        ...formData,
        interest: serviceName,
      });
      setFormState({ status: 'success' });
    } catch (error) {
      setFormState({ status: 'error' });
    }
  };

  if (formState.status === 'success') {
    return (
      <div className="bg-green-50 border border-green-300 text-green-800 p-6 rounded-lg text-center">
        <h3 className="font-semibold">Thank You</h3>
        <p>Your inquiry has been received. A compliance specialist will be in contact shortly.</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">Inquire About {serviceName}</h3>
      <form onSubmit={handleSubmit}>
        <div className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input type="text" name="name" id="name" required onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
          </div>
          <div>
            <label htmlFor="firm" className="block text-sm font-medium text-gray-700">Firm / Practice Name</label>
            <input type="text" name="firm" id="firm" required onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input type="email" name="email" id="email" required onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
          </div>
        </div>
        {formState.status === 'error' && <p className="mt-4 text-sm text-red-600">An error occurred. Please try again.</p>}
        <button
          type="submit"
          disabled={formState.status === 'submitting'}
          className="mt-6 w-full bg-blue-900 text-white font-bold py-3 px-4 rounded-md hover:bg-blue-800 disabled:bg-gray-400"
        >
          {formState.status === 'submitting' ? 'Submitting...' : 'Request Information'}
        </button>
      </form>
    </div>
  );
};

export default ServiceInquiryForm;