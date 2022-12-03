import React from 'react'
import AdminNav from './AdminNav'
import AdminSidebar from './AdminSidebar'



function Adminportal() {
  return (<>

<AdminSidebar/>
<AdminNav/>

  {/* Lead */}
  <div className="container mt-5" id="Lead">
             <p className='display-2 text-center text-black cwd'>Lead Status</p>
        <div className="row justify-content-center">

            <div className="col-md-5">
                <div className="card mb-4 p-2 border-3 border-secondary rounded-3 shadow" id="Card1">
                    <h6 className="card-title text-center">New</h6>
                    <div className="progress" style={{height:'18px'}}>
                        <div className="progress-bar bg-success progress-bar-striped progress-bar-animated"
                            role="progressbar" aria-label="Animated striped example" aria-valuenow="25"
                            aria-valuemin="0" aria-valuemax="100" style={{width:'65%'}}> <strong>65%</strong>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-5">
                <div className="card p-2 mb-4 border-3 border-secondary rounded-3 shadow" id="Card2">
                    <h6 className="card-title text-center">Qualified</h6>
                    <div className="progress" style={{height:'18px'}}>
                        <div className="progress-bar bg-success progress-bar-striped progress-bar-animated"
                            role="progressbar" aria-label="Animated striped example" aria-valuenow="25"
                            aria-valuemin="0" aria-valuemax="100" style={{width:'85%'}}> <strong>85%</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="row justify-content-center mt-2">
            <div className="col-md-5">
                <div className="card mb-4 p-2 border-3 border-secondary rounded-3 shadow" id="Card3">
                    <h6 className="card-title text-center">Contacted</h6>
                    <div className="progress" style={{height:'18px'}}>
                        <div className="progress-bar bg-primary progress-bar-striped progress-bar-animated"
                            role="progressbar" aria-label="Animated striped example" aria-valuenow="25"
                            aria-valuemin="0" aria-valuemax="100" style={{width:'75%'}}> <strong>70%</strong>
                        </div>
                    </div>
                </div>
            </div>


            <div className="col-md-5">
                <div className="card mb-4 p-2 border-3 border-secondary rounded-3 shadow" id="Card4">
                    <h6 className="card-title text-center">Pending</h6>
                    <div className="progress" style={{height:'18px'}}>
                        <div className="progress-bar bg-warning progress-bar-striped progress-bar-animated"
                            role="progressbar" aria-label="Animated striped example" aria-valuenow="25"
                            aria-valuemin="0" aria-valuemax="100" style={{width:'58%'}}> <strong>58%</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="row justify-content-center mt-2">
            <div className="col-md-5">
                <div className="card mb-4 text-center p-2 border-3 border-secondary rounded-3 shadow" id="Card5">
                    <h6 className="card-title">Cancelled</h6>
                    <div className="progress" style={{height:'18px'}}>
                        <div className="progress-bar bg-danger progress-bar-striped progress-bar-animated"
                            role="progressbar" aria-label="Animated striped example" aria-valuenow="25"
                            aria-valuemin="0" aria-valuemax="100" style={{width:'42%'}}> <strong>42%</strong>
                        </div>
                    </div>
                </div>
            </div>


            <div className="col-md-5">
                <div className="card mb-4 p-2 border-3 border-secondary rounded-3 shadow" id="Card6">
                    <h6 className="card-title text-center ">Lost</h6>
                    <div className="progress" style={{height:'18px'}}>
                        <div className="progress-bar bg-danger progress-bar-striped progress-bar-animated"
                            role="progressbar" aria-label="Animated striped example" aria-valuenow="25"
                            aria-valuemin="0" aria-valuemax="100" style={{width:'33%'}}> <strong>33%</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
</div>
</>)
}

export default Adminportal;