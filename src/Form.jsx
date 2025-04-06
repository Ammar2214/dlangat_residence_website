
function ReportForm(){
    return (
      <div className="container">
        <h2><u>Report Form:</u></h2>
        <form>
          <label>Name</label>
          <input
            required
          />
          <br />
          <label>Email</label>
          <input
            required
          />
          <br />
          <label>Report</label>
          <textarea
            required
          />
          <br />
          <button type="submit">Submit Report</button>
        </form>
      </div>
    );
  };
  
  export default ReportForm;