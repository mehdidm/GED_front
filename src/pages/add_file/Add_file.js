import './Add_file.css';
import hello from "../../assets/avatar.png";

const AddFile = () => {
    return ( 
        <main className="main_addFile">
        <div className="main__container">
          {/* <!-- MAIN TITLE STARTS HERE --> */}
  
          <div className="main__title">
            <img src={hello} alt="hello" />
            <div className="main__greeting">
              <h1>Hello </h1>
              <p>Welcome to e-doc</p>
            </div>
          </div>
  
          {/* <!-- MAIN TITLE ENDS HERE --> */}
  
 
          
  
  
          {/* <!-- CHARTS STARTS HERE --> */}
          <div className="charts_add_file">
       
            <div className="charts__right">
              <div className="charts__right__title">
                <div>
                  <h1>Add new file</h1>
                  <p>New File</p>
                </div>
                <i className="fa fa-file-o" aria-hidden="true"></i>
                
              </div>



              <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
  
          </div>
          </div>
          {/* <!-- CHARTS ENDS HERE --> */}
        </div>
      </main>
  
  );
}
 
export default AddFile;