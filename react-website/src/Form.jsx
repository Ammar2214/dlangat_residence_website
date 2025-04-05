
function ReportForm(){
    return (
      <div className="container">
        <h2><u>Report Form:</u></h2>
        <form action="submit" className="form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <br />
          <br />
  
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <br />
          <br />
  
          <label htmlFor="message">Report:</label>
          <textarea id="message" name="message" rows="4" cols="30"></textarea>
        </form>
      </div>
    );
  };
  
  export default ReportForm;