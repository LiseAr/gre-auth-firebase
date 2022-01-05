import { useEffect, useState } from 'react'
import { RadioGroup } from '@headlessui/react'

export default function CRadioGroup(
  {
    title = "title",
    description = "description",
    options = [
      {
        tag: 'existent',
        name: 'Cliente já existe',
        description: 'Selecionar da base de dados',
      },
      {
        tag: 'new',
        name: 'Criar novo',
        description: 'Criar novo Cliente',
      },
    ],
    handleSelectedItem,
    selectedindex = 0
  }
) {
  const [selected, setSelected] = useState();

  useEffect(() => {
    setTimeout(() => {
      if (selected) handleSelectedItem(selected)
    }, 500);
  }, [selected]);

  return (
    <div className=" w-full py-2">
      <div className="w-full ">
        <RadioGroup value={selected} onChange={setSelected}>
          <RadioGroup.Label className="sr-only">Client</RadioGroup.Label>
          <div className="space-y-2">
            {options.map((plan) => (
              <RadioGroup.Option
                key={plan.name}
                value={plan}
                className={({ active, checked }) => `
                  relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none text-black
                  ${active ? 'ring-2 ring-indigo-500' : ''}
                  ${checked ? 'bg-sky-900 bg-opacity-75 text-black bg-indigo-900' : ''}
                `}
              >
                {({ checked }) => (
                  <>
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`${checked ? 'font-bold text-white' : 'font-medium  text-gray-900'
                              }`}
                          >
                            {plan.name}
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as="span"
                            className={`inline ${checked ? 'text-white' : 'text-gray-400'
                              }`}
                          >
                            <span>
                              {plan.description}
                            </span>
                          </RadioGroup.Description>
                        </div>
                      </div>
                      {checked && (
                        <div className="flex-shrink-0 ">
                          <CheckIcon className="w-5 h-5 " />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  )
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
