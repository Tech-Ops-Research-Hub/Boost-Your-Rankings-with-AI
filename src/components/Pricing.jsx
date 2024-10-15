import React from 'react';

function Pricing() {
  return (
    <>
      <div className="text-center py-4 bg-gradient-radial from-purple-700 via-black to-black min-h-screen">
        <h1 className="text-5xl font-bold mb-2 text-white">Pricing</h1>
        <p className="text-lg text-gray-400 mb-6">
          Choose the right plan to meet your SEO needs and start optimizing today.
        </p>
        {/* Dark mode toggle placeholder */}
        <div className="mb-4">
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-purple-500 dark:peer-focus:ring-purple-800 dark:bg-gray-700 peer-checked:after:translate-x-5 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-300">Dark mode</span>
          </label>
        </div>
      </div>

      <div className="flex justify-center space-x-6 mt-4">
        {/* Pricing Plan 1 */}
        <div className="bg-[#1E1E2E] rounded-lg p-6 text-center text-white w-72 shadow-lg border border-gray-600 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold mb-3">Pricing</h2>
            <p className="text-4xl font-bold mb-3">$29/mo</p>
            <hr className="border-t border-gray-600 mb-3" />
            <ul className="text-left mb-6 space-y-2 text-gray-300">
              <li>✓ Keyword optimization</li>
              <li>✓ Automated meta tags</li>
              <li>✓ SEO monitoring</li>
              <li>✓ Monthly reports</li>
            </ul>
          </div>
          <button className="mt-auto bg-purple-500 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-all">
            Join Waitlist
          </button>
        </div>

        {/* Pricing Plan 2 */}
        <div className="bg-[#29293F] rounded-lg p-6 text-center text-white w-72 shadow-lg border border-gray-600 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold mb-3">Pro</h2>
            <p className="text-4xl font-bold mb-3">$79/mo</p>
            <hr className="border-t border-gray-600 mb-3" />
            <ul className="text-left mb-6 space-y-2 text-gray-300">
              <li>✓ Keyword optimization</li>
              <li>✓ Automated meta tags</li>
              <li>✓ SEO monitoring</li>
              <li>✓ Monthly reports</li>
              <li>✓ Content suggestions</li>
              <li>✓ Link optimization</li>
            </ul>
          </div>
          <button className="mt-auto bg-purple-500 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-all">
            Join Waitlist
          </button>
        </div>

        {/* Pricing Plan 3 */}
        <div className="bg-[#1E1E2E] rounded-lg p-6 text-center text-white w-72 shadow-lg border border-gray-600 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold mb-3">Business</h2>
            <p className="text-4xl font-bold mb-3">$149/mo</p>
            <hr className="border-t border-gray-600 mb-3" />
            <ul className="text-left mb-6 space-y-2 text-gray-300">
              <li>✓ Keyword optimization</li>
              <li>✓ Automated meta tags</li>
              <li>✓ SEO monitoring</li>
              <li>✓ Monthly reports</li>
              <li>✓ Content suggestions</li>
              <li>✓ Link optimization</li>
              <li>✓ Multi-user access</li>
            </ul>
          </div>
          <button className="mt-auto bg-purple-500 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-all">
            Join Waitlist
          </button>
        </div>
      </div>
    </>
  );
}

export default Pricing;
