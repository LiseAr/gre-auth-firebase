import LinkNext from "next/link"

{
  /* 
    Wrapper of the Link component created
    to avoid re-rendering the panel
  */
}
const Link = (props) => {
  let { href, children, ...rest } = props
  return (
    <LinkNext href={href}>
      <a {...rest}>{children}</a>
    </LinkNext>
  )
}

export { Link }