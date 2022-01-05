import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"

type ServiceType = {
  description: string,
  quantity: string,
  price: string
}

type SubmitData = {
  description: string,
  quantity: string,
  price: string
}

const JobStep = ({ handleNextStep, handleBack }) => {

  const { register, handleSubmit } = useForm();

  const [services, setServices] = useState<Array<ServiceType>>([])

  const addService = (data: SubmitData) => {

    console.log('addService');
    console.log('services');
    console.log(services);
    console.log('data');
    console.log(data);

    if (data.description) {

      const service: ServiceType = {
        description: data.description,
        quantity: data.quantity,
        price: data.price
      }

      console.log('service');
      console.log(service);

      if (services?.length > 0) {
        setServices([...services, service])
      } else {
        setServices([service])
      }

      console.log('services');
      console.log(services);
    }

  }

  const rmvService = (indexToRemove) => {
    const newServices = services.filter((_, index) => index !== indexToRemove)
    setServices(newServices);
  }

  const quantityBalance = () => {
    const reducer = (prev, crr) => {
      let quantity = crr['quantity'];
      return prev + parseInt(quantity)
    }
    return services.reduce(reducer, 0)
  }

  const priceBalance = () => {
    const reducer = (prev, crr) => {
      let price = crr['price'];
      return prev + parseInt(price)
    }
    return services.reduce(reducer, 0)
  }

  return (
    <>
      <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6" >
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <p className="mt-1 text-sm text-gray-500"> Adicione os serviços</p>
          </div>
          <div className="md:col-span-2">
            <form
              className=""
              onSubmit={handleSubmit(addService)}>
              {/* { */}
              <table className="w-full table-auto">
                <thead>
                  <tr>
                    <th className='text-left'>QUANT</th>
                    <th className='text-left'>DESCRIÇÃO</th>
                    <th className='text-left'>VALOR</th>
                    <th className='text-left'></th>
                  </tr>
                </thead>
                <tbody>
                  {services?.length > 0 && services.map((item: ServiceType, index) => {
                    console.log(item);

                    return (
                      <tr
                        className="border-b"
                        key={index}
                      >
                        <td>{item.quantity}</td>
                        <td className="max-w-xs">
                          <div className="truncate mr-2">{item.description}
                          </div>
                        </td>
                        <td>{item.price}</td>
                        <td className="py-2">
                          <button
                            type="button"
                            className="bg-white px-4 border border-gray-300 rounded-md shadow-sm text-lg font-bold text-gray-700 hover:bg-gray-50 focus:outline-none"
                            onClick={() => rmvService(index)}
                          >
                            -
                        </button>
                        </td>
                      </tr>
                    )
                  })}
                  {/* <div > */}
                  <tr className="bg-gray-200 h-10">
                    <td className='font-bold'>{quantityBalance()}</td>
                    <td className='font-bold'></td>
                    <td className='font-bold'>{priceBalance()}</td>
                    <td className='font-bold'></td>
                  </tr>
                  {/* </div> */}
                  <tr className="h-40">
                    <td><input
                      {...register('quantity')}
                      type="text"
                      name="quantity"
                      id="quantity"
                      autoComplete="nope"
                      placeholder='QUANT.'
                      className="mr-2 w-36 max-w-lg block shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-md border-gray-300 rounded-md"
                    /></td>
                    <td> <input
                      {...register('description', { required: true })}
                      type="text"
                      name="description"
                      id="description"
                      autoComplete="nope"
                      placeholder='Descrição'
                      className="mr-2 w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-md border-gray-300 rounded-md"
                    />
                    </td>
                    <td><input
                      {...register('price', { required: true })}
                      type="text"
                      name="price"
                      id="price"
                      autoComplete="nope"
                      placeholder='Valor'
                      className="w-28 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-md border-gray-300 rounded-md"
                    /></td>
                    <td className="py-2">
                      <button
                        type="submit"
                        className="flex align-center justify-center py-1 px-4 border border-transparent shadow-sm text-md font-bold rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
                        onClick={addService}
                      >
                        +
                      </button>
                    </td>
                  </tr>

                </tbody>
              </table>
            </form>
          </div>
        </div>
      </div >
      <div className="flex justify-end mt-8">
        <button
          type="button"
          className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={handleBack}
        >
          Voltar
  </button>
        <button
          type="button"
          className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={handleNextStep}
        >
          Continuar
  </button>
      </div>
    </>
  )
}

export { JobStep }