import React, { useState } from 'react';
import './travel-details.css';


const TravelDetailsForm = () => {
  const [formData, setFormData] = useState({
    passportNumber: '',
    issueDate: '',
    expiryDate: '',
    placeOfIssue: '',
    countryOfIssue: '',
    issuingAuthority: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className='form-container'>
      <h2>Travel Details</h2>
    <form onSubmit={handleSubmit} className='horizontal-form'>
      <div className='form-group'>
        <label htmlFor="passportNumber">Passport Number:</label>
        <input
          type="text"
          id="passportNumber"
          name="passportNumber"
          value={formData.passportNumber}
          onChange={handleChange}
          required
        />
      </div>

      <div className='form-group'>
        <label htmlFor="issueDate">Issue Date:</label>
        <input
          type="date"
          id="issueDate"
          name="issueDate"
          value={formData.issueDate}
          onChange={handleChange}
          required
        />
      </div>

      <div className='form-group'>
        <label htmlFor="expiryDate">Expiry Date:</label>
        <input
          type="date"
          id="expiryDate"
          name="expiryDate"
          value={formData.expiryDate}
          onChange={handleChange}
          required
        />
      </div>

      <div className='form-group'>
        <label htmlFor="placeOfIssue">Place of Issue:</label>
        <input
          type="text"
          id="placeOfIssue"
          name="placeOfIssue"
          value={formData.placeOfIssue}
          onChange={handleChange}
          required
        />
      </div>

      <div className='form-group'>
        <label htmlFor="countryOfIssue">Country of Issue:</label>
        <input
          type="text"
          id="countryOfIssue"
          name="countryOfIssue"
          value={formData.countryOfIssue}
          onChange={handleChange}
          required
        />
      </div>

      <div className='form-group'>
        <label htmlFor="issuingAuthority">Issuing Authority:</label>
        <input
          type="text"
          id="issuingAuthority"
          name="issuingAuthority"
          value={formData.issuingAuthority}
          onChange={handleChange}
          required
        />
      </div>
    </form>
    </div>
  );
};

export default TravelDetailsForm;
