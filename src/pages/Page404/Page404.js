import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Page404 extends Component {
  render() {
    return (
      <div className="container pt-1">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="clearfix">
              <h1 className="float-left display-3 mr-2">404</h1>
              <h4 className="pt-1">Not Found</h4>
              <p className="text-muted">The page you are looking for was not found.</p>
              <Link to="/">Go Home</Link>
            </div>
            {/*
            <div className="input-prepend input-group">
              <span className="input-group-addon"><i className="fa fa-search"></i></span>
              <input className="form-control" size="16" type="text" placeholder="What are you looking for?" />
              <span className="input-group-btn">
                <button className="btn btn-info" type="button">Search</button>
              </span>
            </div>
            */}
          </div>
        </div>
      </div>
    );
  }
}

export default Page404;
