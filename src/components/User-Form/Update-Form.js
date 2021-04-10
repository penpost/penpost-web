function UpdateUserInfoForm(props) {
  console.log(props.name)
  return (
    <>
      <h1>FORM TEST {props.name}</h1>
      <h1>{props.street}</h1>
        <form>

        </form>
    </>
  )
}

export default UpdateUserInfoForm
