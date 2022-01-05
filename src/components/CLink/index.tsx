import Link from "next/link"

{
  /* 
    Wrapper of the Link component created
    to avoid re-rendering the panel
  */
}
const CLink = (props) => {
  let { href, children, ...rest } = props
  return (
    <Link href={href}>
      <a {...rest}>{children}</a>
    </Link>
  )
}

export { CLink }