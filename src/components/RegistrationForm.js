"use client";

import React, { useState } from "react";

const RegistrationForm = () => {
    const [agreed, setAgreed] = useState(false);

    const handleCheckboxChange = () => {
        setAgreed(!agreed);
    }

  const [formData, setFormData] = useState({
    firstName: "",
    otherNames: "",
    surname: "",
    email: "",
    dateOfBirth: "",
    gender: "",
    idType: "",
    idNumber: "",
    issueDate: "",
    expiryDate: "",
    residentialAddress: "",
    postalAddress: "",
    mobileNumber: "",
    educationalLevel: "",
    employmentStatus: "",
    employerName: "",
    employerAddress: "",
    position: "",
    yearsEmployed: "",
    contributionAmount: "",
    paymentMode: "",
    interestFrequency: "",
    bankAccountName: "",
    bankName: "",
    branchName: "",
    accountNumber: "",
    beneficiaryName: "",
    beneficiaryMobileNumber: "",
    beneficiaryRelationship: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//   };

// const handleSubmit = (e) => {
//     e.preventDefault();
//     if (agreed) {
//       console.log(formData);
//     }
//   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (agreed) {
      console.log(formData);
      try {
        const response = await fetch("/api/sendRegistration", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
  
        const result = await response.json();
        if (response.ok) {
          alert(result.message); // Success message
        } else {
          alert(result.error); // Error message
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("An error occurred while submitting the form.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Registration</h2>

        {/* Personal Details */}
        <h3 className="text-lg font-semibold mb-2">Personal Details</h3>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
          <input
            type="text"
            name="otherNames"
            placeholder="Other Names"
            value={formData.otherNames}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            name="surname"
            placeholder="Surname"
            value={formData.surname}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
            />
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          <input type="text" name="mobileNumber" placeholder="Mobile Number" value={formData.mobileNumber} onChange={handleChange} className="border p-2 rounded w-full" required />
          <select name="educationalLevel" value={formData.educationalLevel} onChange={handleChange} className="border p-2 rounded w-full" required>
            <option value="">Select Educational Level</option>
            <option value="Basic">Basic</option>
            <option value="Secondary">Secondary</option>
            <option value="Tertiary">Tertiary</option>
            <option value="Other">Other</option>
          </select>
        </div>


        {/* ID Information */}

        <h3 className="text-lg font-semibold mt-4 mb-2">ID Information</h3>
        <div className="grid grid-cols-2 gap-4">
        <select
            name="idType"
            value={formData.idType}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          >
            <option disabled value="">Select ID Type</option>
            <option value="Ghana Card">Ghana Card</option>
            <option value="Driver License">Driver License</option>
            <option value="Passport">Passport</option>
          </select>
          <input
            type="text"
            name="idNumber"
            placeholder="ID Number"
            value={formData.idNumber}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
          <input
            type="date"
            name="issueDate"
            value={formData.issueDate}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
          <input
            type="date"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />

          {/* <label htmlFor="idDocument" className="text-sm">Upload ID Document</label>
          <input type="file" name="idDocument" className="border p-2 rounded w-full" required /> */}
        </div>



        {/* Address */}
        <h3 className="text-lg font-semibold mt-4 mb-2">Address</h3>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="residentialAddress"
            placeholder="Residential Address"
            value={formData.residentialAddress}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
          <input
            type="text"
            name="postalAddress"
            placeholder="Postal Address"
            value={formData.postalAddress}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
        </div>

        {/* Professional Information */}
        <h3 className="text-lg font-semibold mt-4 mb-2">Professional Information</h3>
        <div className="grid grid-cols-2 gap-4">
          <select
            name="employmentStatus"
            value={formData.employmentStatus}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          >
            <option value="">Employment Status</option>
            <option value="Employee">Employee</option>
            <option value="Self Employed">Self Employed</option>
            <option value="Student">Student</option>
            <option value="Pensioner">Pensioner</option>
            <option value="Unemployed">Unemployed</option>
          </select>
          <input
            type="text"
            name="employerName"
            placeholder="Employer Name"
            value={formData.employerName}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            
          />
        </div>

        {/* Contribution and Interest Payment */}
        <h3 className="text-lg font-semibold mt-4 mb-2">
          Contribution and Interest Payment
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="number"
            name="contributionAmount"
            placeholder="Contribution Amount"
            value={formData.contributionAmount}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
          <select
            name="paymentMode"
            value={formData.paymentMode}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          >
            <option value="">Payment Mode</option>
            <option value="Cash">Cash</option>
            <option value="Bank Transfer">Bank Transfer</option>
            <option value="Mobile Money">Mobile Money</option>
            <option value="Cheque">Cheque</option>
          </select>
        </div>

        {/* Beneficiary Details */}
        <h3 className="text-lg font-semibold mt-4 mb-2">Beneficiary Details</h3>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="beneficiaryName"
            placeholder="Beneficiary Name"
            value={formData.beneficiaryName}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
          <input
            type="text"
            name="beneficiaryRelationship"
            placeholder="Relationship"
            value={formData.beneficiaryRelationship}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
        </div>
        
        {/* Bank Details */}
        <h3 className="text-lg font-semibold mt-4 mb-2">Bank Details</h3>
        <div className="grid grid-cols-2 gap-4">
          <input type="text" name="bankAccountName" placeholder="Bank Account Name" value={formData.bankAccountName} onChange={handleChange} className="border p-2 rounded w-full" required />
          <input type="text" name="bankName" placeholder="Bank Name" value={formData.bankName} onChange={handleChange} className="border p-2 rounded w-full" required />
          <input type="text" name="branchName" placeholder="Branch Name" value={formData.branchName} onChange={handleChange} className="border p-2 rounded w-full" required />
          <input type="text" name="accountNumber" placeholder="Account Number" value={formData.accountNumber} onChange={handleChange} className="border p-2 rounded w-full" required />
        </div>
        
         {/* Undertaking Agreement */}
         <h3 className="text-lg font-semibold mt-6">Undertaking Agreement</h3>
        <div className="border border-gray-300 p-4 rounded bg-gray-50">
          <p className="text-sm mb-2">By submitting this form, I agree to the following:</p>
          <ul className="list-disc list-inside text-sm
           text-gray-700">
            <li>I agree to contribute a minimum of 10,000 Cedis towards the Professional Initiative Project (PIP).</li>
            <li>I will receive 30% per annum interest, paid quarterly, semi-annually, or annually.</li>
            <li>I am eligible to apply for a loan of up to 150% of my contribution at a rate of 2.5% per month.</li>
            <li>The minimum stay in the project is 1 year before I can withdraw.</li>
            <li>I will abide by the group’s guidelines and policies.</li>
          </ul>
        </div>

        {/* Checkbox Agreement */}
        <div className="mt-4 flex items-center">
          <input type="checkbox" id="agreement" checked={agreed} onChange={handleCheckboxChange} className="mr-2" />
          <label htmlFor="agreement" className="text-sm text-gray-700">I have read and agree to the terms above.</label>
        </div>

        {/* Submit */}
        <div className="flex justify-center mt-6">
          <button type="submit" className={`px-6 py-2 rounded text-white ${agreed ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"}`} disabled={!agreed}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
