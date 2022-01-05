/* This example requires Tailwind CSS v2.0+ */
import { service as ServiceIcon } from '../assets/images/svg/service'

const actions = [
  { title: 'Serviço', href: '#', bgColor: 'bg-pink-600', txtColor: 'text-pink-600' },
  { title: 'Cliente', href: '#', bgColor: 'bg-purple-600', txtColor: 'text-purple-600' },
  { title: 'Fornecedor', href: '#', bgColor: 'bg-yellow-500', txtColor: 'text-yellow-500' },
  { title: 'Funcionários', href: '#', bgColor: 'bg-green-500', txtColor: 'text-green-500' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Home() {

  const handleClickFastAction = () => {
    console.log(actions);
  }

  return (
    <div>
      <ul role="list" className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {actions.map((action) => (
          <li onClick={handleClickFastAction} key={action.title} className="col-span-1 flex shadow-sm rounded-md cursor-pointer">

            <div
              style={{ zIndex: -1, }}
              className={classNames(
                action.bgColor,
                'flex-shrink-0 flex flex-col items-center justify-center w-full h-48 text-white text-3xl font-bold rounded-md'
              )}
            >
              <div
                style={{ zIndex: 1, opacity: 0.5 }}
              >
                {action.title}
              </div>
              <div
                style={{
                  opacity: 0.5,
                  zIndex: 0,
                }}
              >
                <ServiceIcon />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
