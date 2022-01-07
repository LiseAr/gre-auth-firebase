import { PlusIcon } from "@heroicons/react/solid"
import ButtonDropDown from "../../elements/ButtonDropDown/Index"


const items = [
  {
    href: 'settings',
    title: 'Configurações',
  },
  {
    href: 'logout',
    title: 'Sair',
  },

]

const ProfileDropDown = () => {

  return (
    <ButtonDropDown
      buttonClass="h-8 w-8 rounded-full"
      items={items}
    >
      <img
        className="h-8 w-8 rounded-full"
        src="https://github.com/lisear.png"
        alt=""
      />
    </ButtonDropDown>
  )
}

export { ProfileDropDown }