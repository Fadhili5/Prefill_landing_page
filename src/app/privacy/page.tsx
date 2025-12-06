import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Prefill AI",
  description: "Privacy Policy for Prefill AI Chrome Extension",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
          Privacy Policy
        </h1>
        <p className="text-gray-600 text-sm md:text-base mb-8">
          Last Updated: December 4, 2024
        </p>

        <p className="mb-6 text-gray-700">
          This Privacy Policy describes how Event Registration Bot ("we", "our", or "the Extension") collects, uses, and protects your information when you use our Chrome extension.
        </p>

        <div className="bg-blue-50 p-4 rounded-lg mb-8">
          <p className="font-semibold text-gray-900">
            Summary:
          </p>
          <p className="text-gray-700">
            We collect only the information necessary to auto-fill forms on your behalf. Your data is stored securely and never sold to third parties.
          </p>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-blue-600">
            1. Information We Collect
          </h2>

          <h3 className="text-lg font-medium text-gray-800 mt-6 mb-3">
            1.1 Information You Provide
          </h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>
              <strong>Profile Information:</strong> Name, email address, phone number, student ID, and other form-filling details you choose to save.
            </li>
            <li>
              <strong>Account Information:</strong> If you sign in with Google, we receive your email address, name, and profile picture from Google.
            </li>
          </ul>

          <h3 className="text-lg font-medium text-gray-800 mt-6 mb-3">
            1.2 Information Collected Automatically
          </h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>
              <strong>Form URLs:</strong> URLs of Microsoft Forms you choose to monitor.
            </li>
            <li>
              <strong>Activity Logs:</strong> Records of form fill attempts and their success/failure status.
            </li>
            <li>
              <strong>Security Events:</strong> Login attempts and security-related actions for account protection.
            </li>
          </ul>

          <h3 className="text-lg font-medium text-gray-800 mt-6 mb-3">
            1.3 Information We Do NOT Collect
          </h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Browsing history outside of Microsoft Forms</li>
            <li>Passwords or payment information</li>
            <li>Content from other websites or forms</li>
            <li>Personal files or documents</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-blue-600">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>
              <strong>Form Auto-Fill:</strong> To automatically fill Microsoft Forms with your saved profile data.
            </li>
            <li>
              <strong>Form Monitoring:</strong> To check when forms become available and notify you.
            </li>
            <li>
              <strong>Account Management:</strong> To sync your settings across devices.
            </li>
            <li>
              <strong>Service Improvement:</strong> To understand usage patterns and improve the extension.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-blue-600">
            3. Data Storage and Security
          </h2>

          <h3 className="text-lg font-medium text-gray-800 mt-6 mb-3">
            3.1 Where Data is Stored
          </h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>
              <strong>Local Storage:</strong> Your profile and settings are stored locally in your browser.
            </li>
            <li>
              <strong>Cloud Storage:</strong> If you sign in, data is synced to Firebase (Google Cloud) for backup and cross-device access.
            </li>
          </ul>

          <h3 className="text-lg font-medium text-gray-800 mt-6 mb-3">
            3.2 Security Measures
          </h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>All data transmission uses HTTPS encryption.</li>
            <li>Firebase security rules ensure you can only access your own data.</li>
            <li>Passwords are never stored - we use secure Google authentication.</li>
            <li>Rate limiting prevents abuse of the service.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-blue-600">
            4. Third-Party Services
          </h2>
          <p className="mb-4 text-gray-700">
            We use the following third-party services:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>
              <strong>Google Firebase:</strong> For authentication and cloud data storage.{" "}
              <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Firebase Privacy Policy
              </a>
            </li>
            <li>
              <strong>Google Sign-In:</strong> For secure authentication.{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Google Privacy Policy
              </a>
            </li>
            <li>
              <strong>Google Gemini AI:</strong> For intelligent form field matching (processes form structure only, not your personal data).{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Google AI Privacy
              </a>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-blue-600">
            5. Your Rights and Choices
          </h2>

          <h3 className="text-lg font-medium text-gray-800 mt-6 mb-3">
            5.1 Access and Export
          </h3>
          <p className="mb-4 text-gray-700">
            You can view all your stored data in the extension's Profile tab.
          </p>

          <h3 className="text-lg font-medium text-gray-800 mt-6 mb-3">
            5.2 Deletion
          </h3>
          <p className="mb-2 text-gray-700">
            You can delete your data by:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Clearing the extension's local storage</li>
            <li>Signing out and requesting account deletion</li>
            <li>Uninstalling the extension</li>
          </ul>

          <h3 className="text-lg font-medium text-gray-800 mt-6 mb-3">
            5.3 Opt-Out
          </h3>
          <p className="mb-4 text-gray-700">
            You can use the extension without signing in, keeping all data local to your browser.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-blue-600">
            6. Data Retention
          </h2>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Local data is retained until you clear it or uninstall the extension.</li>
            <li>Cloud data is retained while your account is active.</li>
            <li>Activity logs are retained for 90 days.</li>
            <li>Upon account deletion, all cloud data is permanently removed within 30 days.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-blue-600">
            7. Children's Privacy
          </h2>
          <p className="mb-4 text-gray-700">
            This extension is not intended for users under 13 years of age. We do not knowingly collect information from children under 13.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-blue-600">
            8. Changes to This Policy
          </h2>
          <p className="mb-4 text-gray-700">
            We may update this Privacy Policy from time to time. We will notify you of significant changes through the extension or by updating the "Last Updated" date.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4 pb-2 border-b-2 border-blue-600">
            9. Permissions Explained
          </h2>
          <p className="mb-4 text-gray-700">
            The extension requests the following permissions:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>
              <strong>activeTab:</strong> To interact with the current Microsoft Forms page.
            </li>
            <li>
              <strong>storage:</strong> To save your profile and settings locally.
            </li>
            <li>
              <strong>notifications:</strong> To alert you when forms are filled or become available.
            </li>
            <li>
              <strong>identity:</strong> For Google Sign-In authentication.
            </li>
            <li>
              <strong>scripting:</strong> To inject form-filling scripts into Microsoft Forms pages.
            </li>
            <li>
              <strong>nativeMessaging:</strong> To communicate with the local Python backend for AI-powered form analysis.
            </li>
          </ul>
        </section>

        <div className="bg-gray-50 p-6 rounded-lg mt-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
            10. Contact Us
          </h2>
          <p className="mb-4 text-gray-700">
            If you have questions about this Privacy Policy or your data, please contact us:
          </p>
          <p className="mb-2 text-gray-700">
            <strong>Email:</strong>{" "}
            <a href="mailto:support@example.com" className="text-blue-600 hover:underline">
              support@example.com
            </a>
          </p>
          <p className="text-gray-700">
            <strong>Website:</strong>{" "}
            <a href="https://www.prefill.live" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              www.prefill.live
            </a>
          </p>
        </div>

        <div className="text-center mt-10 pt-6 border-t border-gray-200 text-gray-600 text-sm">
          <p>© 2024 Event Registration Bot. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

