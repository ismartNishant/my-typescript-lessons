type HeadingProp = {
  children: string
}

const Heading = (props: HeadingProp) => {
  return (
    <div>
      <h1>{props.children} </h1>
    </div>
  )
}

export default Heading