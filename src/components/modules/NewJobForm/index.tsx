import { useEffect, useState } from "react";
import { Collapse } from "../../elements/Collapse"
import { RadioGroup } from '@headlessui/react'
import { Select } from "../../elements/Select"
import { ClientStep } from "./ClientStep";
import { JobStep } from "./JobStep";

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

const NewJobForm = () => {

  const [selected, setSelected] = useState();
  const [step, setStep] = useState(1);

  return (
    <div className="space-y-6">

      <ClientStep
        handleNextStep={() => setStep(step + 1)}
        handleBack={() => setStep(step - 1)}
        collapseState={step === 1 ? 'collapse-open' : 'collapse-close'}
      />

      <JobStep
        handleNextStep={() => setStep(step + 1)}
        handleBack={() => setStep(step - 1)}
        collapseState={step === 2 ? 'collapse-open' : 'collapse-close'}
      />

    </div >
  )
}

export { NewJobForm }