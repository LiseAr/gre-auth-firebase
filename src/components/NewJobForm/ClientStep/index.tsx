import { RadioGroup } from "@headlessui/react"
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Select } from "../../Select";

const options = [
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
];


const ClientStep = ({ handleNextStep, handleBack }) => {

  const { register, handleSubmit, formState: { errors } } = useForm()

  const [selected, setSelected] = useState();

  const _handleSubmit = (data) => {
    console.log(data);

    handleNextStep();
  }

  useEffect(() => {
    console.log(errors);

  }, [errors]);

  return (
    <>
      <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            {/* <h3 className="text-lg font-medium leading-6 text-gray-900">Cliente</h3> */}
            <p className="mt-1 text-sm text-gray-500">
              Quer selecionar um cliente já existente ou criar um novo?
            </p>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form
              noValidate
              autoComplete='off'
              className="space-y-6"
              onSubmit={handleSubmit(_handleSubmit)}>
              <div>
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
              </div>
              {selected?.tag === 'existent'
                &&
                <div className="">

                  <div className="">
                    <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                      Cliente
                  </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <Select />
                    </div>
                  </div>
                </div>
              }
              {selected?.tag === 'new' &&
                <>
                  <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
                    <div>
                      <h3 className="text-lg leading-6 font-medium text-gray-900">Informações Básicas</h3>
                      <p className="mt-1 max-w-2xl text-sm text-gray-500">Preencha com as informações básicas do cliente. epois </p>
                    </div>
                    <div className="space-y-6 sm:space-y-5">
                      <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                          Nome *</label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                          <input
                            {...register('name', { required: true })}
                            type="text"
                            name="name"
                            id="name"
                            // RMV: remover linha abaixo
                            value="Cliente"
                            autoComplete="nope"
                            className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                          />
                          {errors.name && errors.name.type === "required" && <small style={{ color: 'red' }}>Campo obrigatório</small>}
                        </div>
                      </div>

                      <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                          Telefone
              </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                          <input
                            {...register('phone',
                              {
                                maxLength: 11,
                                minLength: 11
                              }
                            )}
                            id="phone"
                            name="phone"
                            type="number"
                            autoComplete="nope"
                            className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"

                          />
                          {errors.phone &&
                            (errors.phone.type === "minLength" || errors.phone.type === "maxLength")
                            && <small style={{ color: 'red' }}>O número deve seguir o formato (xx) xxxxx-xxxx</small>}
                        </div>
                      </div>


                      <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                          Telefone
              </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                          <input
                            {...register('phone2',
                              {
                                maxLength: 11,
                                minLength: 11
                              }
                            )}
                            id="phone2"
                            name="phone2"
                            type="number"
                            autoComplete="nope"
                            className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"

                          />
                          {errors.phone2 &&
                            (errors.phone2.type === "minLength" || errors.phone2.type === "maxLength")
                            && <small style={{ color: 'red' }}>O número deve seguir o formato (xx) xxxxx-xxxx</small>}
                        </div>
                      </div>

                      <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                          Email
                        </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                          <input
                            {...register('email', {
                              pattern: /^\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b$/i,
                            })}
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="nope"
                            className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                          />
                          {errors.email && errors.email.type === "pattern" && <small style={{ color: 'red' }}>Formato de E-mail inválido</small>}
                        </div>
                      </div>

                      <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                        <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                          CEP
              </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                          <input
                            {...register('cep')}
                            type="text"
                            name="postal-code"
                            id="postal-code"
                            autoComplete='off'
                            // autoComplete="postal-code"
                            className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                      </div>

                      <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                        <label htmlFor="street-address" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                          Endereço </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                          <input
                            {...register('address')}
                            type="text"
                            name="street-address"
                            id="street-address"
                            autoComplete="street-address"
                            className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                      </div>

                      <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                          Cidade</label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                          <input
                            {...register('city')}
                            type="text"
                            name="city"
                            id="city"
                            autoComplete="address-level2"
                            className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                      </div>

                      <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                        <label htmlFor="region" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                          Estado</label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                          <input
                            {...register('region')}
                            type="text"
                            name="region"
                            id="region"
                            autoComplete="address-level1"
                            className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                      </div>


                    </div>
                  </div>

                </>
              }
              <div className="flex justify-end mt-8">
                <button
                  type="submit"
                  className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Continuar
</button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </>

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

export { ClientStep };