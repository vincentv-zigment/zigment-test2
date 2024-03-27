/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
const plans = [
  { id: 'small', name: 'Comments', description: 'Respond to Instagram Comments' },
  { id: 'medium', name: 'DMs', description: 'Respond to Instagram DMs' },
  { id: 'large', name: 'Both', description: 'If you select this option, then you cannot create any other agents due to  posting rule conflict' },
]

export default function Example() {
  return (
    <fieldset>
      <legend className="sr-only">Plan</legend>
      <div className="space-y-5">
        {plans.map((plan) => (
          <div key={plan.id} className="relative flex items-start">
            <div className="flex h-5 items-center">
              <input
                id={plan.id}
                aria-describedby={`${plan.id}-description`}
                name="plan"
                type="radio"
                defaultChecked={plan.id === 'small'}
                className="h-4 w-4 border-gray-300 text-brand-orange-deski focus:ring-brand-orange-deski"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor={plan.id} className="font-medium text-gray-700">
                {plan.name}
              </label>
              <p id={`${plan.id}-description`} className="text-gray-500">
                {plan.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </fieldset>
  )
}
