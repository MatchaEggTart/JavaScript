function Form() {
  // 虽然要用e，但事实证明还是只是参数名，随意
  function handleSubmit(event) {
    event.preventDefault();
    console.log('You Click submit.');
  }
  
  return (
    <div className="Form">
      <form onSubmit={handleSubmit}>
	<button type="submit">Submit</button>
      </form>
      <br/>
      <a href="https://www.baidu.com" onClick={handleSubmit}>去百度?(使用了e.preventDefault())</a>
      <br/>
      <a href="https://www.baidu.com">去百度?</a>
      <br/>
    </div>
  )
}

export default Form;
