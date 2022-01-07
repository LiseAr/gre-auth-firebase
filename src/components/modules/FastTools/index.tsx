import { PlusIcon } from "@heroicons/react/solid"
import ButtonDropDown from "../../elements/ButtonDropDown/Index"

const items = [
  {
    href: '/newjob',
    title: 'Serviço',
  },
]

const FastTools = () => {

  return (
    <ButtonDropDown
      buttonClass="flex justify-center items-center w-full px-4 py-1 text-lg font-bold text-white bg-blue-800 rounded-md bg-violet-100 hover:bg-blue-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 "
      items={items}
    >
      <div>
        <PlusIcon
          className="w-7 h-7  text-violet-200 hover:text-violet-100"
          aria-hidden="true"
        />
      </div>
    </ButtonDropDown>
  )
}

export { FastTools }