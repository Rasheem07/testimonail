import React from 'react';

const Page = () => {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-semibold text-center text-indigo-600">
          Data Deletion Request
        </h1>
        <p className="mt-4 text-lg text-gray-700 text-center">
          We understand the importance of your privacy and are committed to
          ensuring you have control over your personal information. Below are the
          instructions on how to delete your data from our app.
        </p>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">How to Delete Your Data:</h2>
          <ol className="mt-4 space-y-4 text-gray-700 list-decimal pl-5">
            <li>
              <strong>Step 1:</strong> Log in to your account using your email and password.
            </li>
            <li>
              <strong>Step 2:</strong> Navigate to the <strong>Account Settings</strong> page.
            </li>
            <li>
              <strong>Step 3:</strong> Scroll down to the <strong>Data Deletion</strong> section.
            </li>
            <li>
              <strong>Step 4:</strong> Click the <strong>Delete Account</strong> button.
            </li>
            <li>
              <strong>Step 5:</strong> Confirm your action by typing in your account password and clicking
              <strong>Confirm Deletion</strong>.
            </li>
          </ol>

          <p className="mt-6 text-lg text-gray-700">
            Please note that once your data is deleted, it cannot be recovered.
          </p>
        </div>

        <div className="mt-8 bg-yellow-50 p-4 rounded-lg">
          <p className="text-lg text-yellow-800">
            <strong>Important:</strong> Deleting your data will permanently remove all your
            information from our system, including your testimonials, feedback, and any other
            content you have submitted. If you are unsure, please contact our support team before proceeding.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Need Help?</h2>
          <p className="mt-4 text-lg text-gray-700">
            If you need assistance or have any questions about the data deletion process, feel free to
            <a href="/contact" className="text-indigo-600 hover:text-indigo-800">
              contact our support team.
            </a>
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="/data-deletion-request"
            className="inline-flex items-center px-6 py-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg"
          >
            Request Data Deletion
          </a>
        </div>
      </div>
    </div>
  );
};

export default Page;
