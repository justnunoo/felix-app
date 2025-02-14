// import nodemailer from "nodemailer";

// export async function POST(request) {
//   try {
//     // Parse the form data from the request body
//     const formData = await request.json();

//     // Validate form data (optional)
//     if (!formData.firstName || !formData.email || !formData.contributionAmount) {
//       return new Response(JSON.stringify(
//         { error: "Missing required fields" },
//         { status: 400 }
//       ))
//     }

//     // Configure Nodemailer transporter
//     const transporter = nodemailer.createTransport({
//       service: "gmail", // Use your email service (e.g., Gmail, Outlook)
//       auth: {
//         user: process.env.EMAIL_USER, // Your email address
//         pass: process.env.EMAIL_PASSWORD, // Your email password or app-specific password
//       },
//     });

//     // Email content
//     const mailOptions = {
//       from: process.env.EMAIL_USER, // Sender email address
//       to: "justnunoo1@gmail.com", // Recipient email address
//       subject: "New Registration Form Submission", // Email subject
//       html: `
//         <h1>New Registration Form Submission</h1>
//         <p><strong>First Name:</strong> ${formData.firstName}</p>
//         <p><strong>Other Names:</strong> ${formData.otherNames}</p>
//         <p><strong>Surname:</strong> ${formData.surname}</p>
//         <p><strong>Date of Birth:</strong> ${formData.dateOfBirth}</p>
//         <p><strong>Gender:</strong> ${formData.gender}</p>
//         <p><strong>ID Type:</strong> ${formData.idType}</p>
//         <p><strong>ID Number:</strong> ${formData.idNumber}</p>
//         <p><strong>Residential Address:</strong> ${formData.residentialAddress}</p>
//         <p><strong>Postal Address:</strong> ${formData.postalAddress}</p>
//         <p><strong>Mobile Number:</strong> ${formData.mobileNumber}</p>
//         <p><strong>Educational Level:</strong> ${formData.educationalLevel}</p>
//         <p><strong>Employment Status:</strong> ${formData.employmentStatus}</p>
//         <p><strong>Employer Name:</strong> ${formData.employerName}</p>
//         <p><strong>Employer Address:</strong> ${formData.employerAddress}</p>
//         <p><strong>Position:</strong> ${formData.position}</p>
//         <p><strong>Years Employed:</strong> ${formData.yearsEmployed}</p>
//         <p><strong>Contribution Amount:</strong> ${formData.contributionAmount}</p>
//         <p><strong>Payment Mode:</strong> ${formData.paymentMode}</p>
//         <p><strong>Interest Frequency:</strong> ${formData.interestFrequency}</p>
//         <p><strong>Bank Account Name:</strong> ${formData.bankAccountName}</p>
//         <p><strong>Bank Name:</strong> ${formData.bankName}</p>
//         <p><strong>Branch Name:</strong> ${formData.branchName}</p>
//         <p><strong>Account Number:</strong> ${formData.accountNumber}</p>
//         <p><strong>Beneficiary Name:</strong> ${formData.beneficiaryName}</p>
//         <p><strong>Beneficiary Mobile Number:</strong> ${formData.beneficiaryMobileNumber}</p>
//         <p><strong>Beneficiary Relationship:</strong> ${formData.beneficiaryRelationship}</p>
//       `,
//     };

//     // Send the email
//     await transporter.sendMail(mailOptions);

//     // Return a success response
//     return new Response(JSON.stringify({ message: "Form submitted successfully" },
//         { status: 200 })
//     )
//   } catch (error) {
//     console.error("Error submitting form:", error);
//     return new Response(JSON.stringify({ error: "An unexpected error occurred" },
//         { status: 500 })
//     )
//   }
// }




import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const formData = await request.json();

    // Validate required fields
    if (!formData.firstName || !formData.surname || !formData.contributionAmount || !formData.email) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 }
      );
    }

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,  // Your email address
        pass: process.env.EMAIL_PASSWORD,  // Use an App Password if using Gmail
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "justnunoo@gmail.com", // Change to recipient's email
      subject: "New Registration Form Submission",
      html: `
        <h2>New Registration Submission</h2>
        <p><strong>First Name:</strong> ${formData.firstName}</p>
        <p><strong>Other Names:</strong> ${formData.otherNames}</p>
        <p><strong>Surname:</strong> ${formData.surname}</p>
        <p><strong>Date of Birth:</strong> ${formData.dateOfBirth}</p>
        <p><strong>Gender:</strong> ${formData.gender}</p>
        <p><strong>ID Type:</strong> ${formData.idType}</p>
        <p><strong>ID Number:</strong> ${formData.idNumber}</p>
        <p><strong>Residential Address:</strong> ${formData.residentialAddress}</p>
        <p><strong>Postal Address:</strong> ${formData.postalAddress}</p>
        <p><strong>Mobile Number:</strong> ${formData.mobileNumber}</p>
        <p><strong>Educational Level:</strong> ${formData.educationalLevel}</p>
        <p><strong>Employment Status:</strong> ${formData.employmentStatus}</p>
        <p><strong>Employer Name:</strong> ${formData.employerName}</p>
        <p><strong>Employer Address:</strong> ${formData.employerAddress}</p>
        <p><strong>Position:</strong> ${formData.position}</p>
        <p><strong>Years Employed:</strong> ${formData.yearsEmployed}</p>
        <p><strong>Contribution Amount:</strong> ${formData.contributionAmount} Cedis</p>
        <p><strong>Payment Mode:</strong> ${formData.paymentMode}</p>
        <p><strong>Interest Frequency:</strong> ${formData.interestFrequency}</p>
        <p><strong>Bank Account Name:</strong> ${formData.bankAccountName}</p>
        <p><strong>Bank Name:</strong> ${formData.bankName}</p>
        <p><strong>Branch Name:</strong> ${formData.branchName}</p>
        <p><strong>Account Number:</strong> ${formData.accountNumber}</p>
        <p><strong>Beneficiary Name:</strong> ${formData.beneficiaryName}</p>
        <p><strong>Beneficiary Mobile Number:</strong> ${formData.beneficiaryMobileNumber}</p>
        <p><strong>Beneficiary Relationship:</strong> ${formData.beneficiaryRelationship}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Form submitted successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error submitting form:", error);
    return new Response(
      JSON.stringify({ error: "An error occurred while submitting the form." }),
      { status: 500 }
    );
  }
}
