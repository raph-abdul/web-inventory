/*
  File: apps/web/app/page.tsx
  
  Page for `locker.haus`. It will be the single destination for all
  trademark holders who are redirected from their reserved .locker domain.
*/
import { ShieldCheck, Mail, Globe } from 'lucide-react'; // Using lucide-react for icons

export default function ClaimPage() {
  const supportEmail = "support@locker.haus";

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl w-full bg-white rounded-xl shadow-lg overflow-hidden">
        
        {/* Header Section */}
        <div className="bg-gray-800 p-8 text-white">
          <div className="flex items-center gap-4">
            <ShieldCheck size={48} className="text-green-400" />
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold">Locker Haus</h1>
              <p className="mt-2 text-lg text-gray-300">The place for trademark.locker owners</p>
            </div>
          </div>
        </div>

        <div className="p-8">
          {/* Introduction Text */}
          <div className="mb-10">
            <p className="text-gray-700 text-lg leading-relaxed">
              If your trademark has been redirected here it&apos;s because you visited a [trademark].locker domain that has been proactively secured on your behalf by <b>Locker Haus</b>. We believe in a more secure and trustworthy web, and our goal is to ensure this valuable digital asset is in the hands of its rightful owner-for the same acquisition price*.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mt-4">
              To verify your ownership and initiate the transfer process, please follow the steps below.
            </p>
          </div>

          {/* Verification Methods Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Step 1: Email Verification */}
            <div className="border border-gray-200 rounded-lg p-6 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="text-blue-500" size={28} />
                <h2 className="text-2xl font-semibold text-gray-800">Step 1: Email</h2>
              </div>
              <p className="text-gray-600 flex-grow">
                Send us an email from your official company domain (e.g. john@yourcompany.org).
              </p>
              <div className="mt-6">
                <p className="font-semibold text-gray-700">Instructions:</p>
                <ol className="list-decimal list-inside mt-2 text-gray-600 space-y-1">
                  <li>Send an email from your corporate address.</li>
                  <li>Include the &apos;.locker&apos; domain you are claiming.</li>
                  <li>The decision for granting owndership varies based on trademark ownership certainty.</li>
                </ol>
              </div>
              <a 
                href={`mailto:${supportEmail}?subject=Claiming Domain: [default.locker]`}
                className="mt-6 inline-block w-full text-center bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Draft Request
              </a>
            </div>

            {/* Method 2: DNS Verification */}
            <div className="border border-gray-200 rounded-lg p-6 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="text-green-500" size={28} />
                <h2 className="text-2xl font-semibold text-gray-800">Step 2: DNS</h2>
              </div>
              <p className="text-gray-600 flex-grow">
                This is a necessary and most secure following step, it proves control of the company&apos;s primary domain.
              </p>
              <div className="mt-6">
                <p className="font-semibold text-gray-700">Instructions:</p>
                <ol className="list-decimal list-inside mt-2 text-gray-600 space-y-2">
                  <li>Access the DNS settings for your main domain (e.g., &apos;yourcompany.com&apos;).</li>
                  <li>Create a new `TXT` record with the following value:</li>
                  <span className="mt-2">
                    <code className="bg-gray-100 text-red-600 p-2 rounded-md block text-sm break-all">
                      _locker-haus-verification=[REQUESTED_DOMAIN].locker.[GIVEN_KEY]
                    </code>
                  </span>
                  <li>Once the record is published, notify us at {supportEmail}.</li>
                </ol>
              </div>
            </div>
          </div>
        <br />
	<p className="text-gray-700 text-lg leading-relaxed">After verification, our team will contact you with the final steps to transfer the domain to your control. We are honoured to secure your brand&apos;s domain and look forward to unlocking its potential.</p>
          {/* Footer/Next Steps */}
          <div className="mt-12 border-t pt-8 text-gray-600">
		<p><b>*Locker Haus</b> is part of the super-d&apos;apps family and has no interest in profiting from this transaction. We value and respect each original idea and its creators. Intellectual Property is something we take very seriously.</p><br/>
		<p>Web domains (with or without a trademarked name) is not tipically a reserved asset. Our only intention is to catch your attention by protecting your brand&apos;s online identity. We have the opportunity to introduce our services and propose partnerships while reinforcing our commitment to fairness.</p><br/>
		<p>It&apos;s worth noting that owning specific domain names is not a condition to enjoy the benefits of the .locker TLD or any other decentralised web3 service.</p>
          </div>

        </div>
      </div>
    </div>
  );
}