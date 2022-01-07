import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Link } from '../Link'

export default function ButtonDropDown({ children, buttonClass, items }) {
  return (
    <div className="text-right">
      <Menu as="div" className="relative text-left ring-0">
        <div>
          <Menu.Button className={buttonClass}>
            {children}
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-0"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-50"
        >
          <Menu.Items className="z-10 absolute mt-2 right-0 origin-top-right bg-white divide-y divide-gray-100 rounded-md">
            {items && items.map((item) => {
              return (
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href={item.href}
                        className={`${active ? 'bg-violet-500 text-gray-600' : 'text-gray-900'
                          } group flex rounded-md items-center w-full px-2 py-2 text-md font-bold`}
                      >
                        {item.title}
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              )
            })}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

