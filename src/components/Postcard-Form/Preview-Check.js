const Preview = (props) => {

  console.log(props.location.state)


  return (
    <section>
      <div>{props.location.state.message}</div>
      <img src={props.location.state.image} />
    </section>
  )
}

export default Preview
