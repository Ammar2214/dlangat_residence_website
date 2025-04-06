
function ReportForm(){
    return (
      <div className="container">
        <h2><u>Report Form:</u></h2>
        <form>
          <label>Name: </label>
          <input
            required
          />
          <br />
          <br />
          <label>Email: </label>
          <input
            required
          />
          <br />
          <br />
          <label>Report: </label>
          <textarea
            required
          />
          <br />
          <br />
          <button type="submit">Submit Report</button>
        </form>
      </div>
    );
  };
  
  export default ReportForm;