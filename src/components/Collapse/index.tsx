import { useEffect, useState } from "react"

const Collapse = ({ title, children, state = 'collapse-close' }) => {

  const [collapseState, setCollapseState] = useState(state)

  useEffect(() => {
    if (state === 'collapse-open') setCollapseState('collapse-open')
    else setCollapseState('collapse-close')
  }, [state]);

  return (
    <>
      <div
        className={`collapse ${collapseState} w-full border rounded-box border-base-300`}>
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          {title}
        </div>
        <div className="collapse-content">
          {children}
        </div>
      </div>
    </>
  )
}

export { Collapse }