import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn } from 'mdbreact';
const Login = () => {
  return (
    <MDBContainer> 
      <MDBRow className="justify-content-center">
        <MDBCol md="5">
          <MDBCard className="card-login">
            <div className="header pt-3 amy-crisp-gradient">
              <MDBRow className="d-flex justify-content-center">
                <h2 className="white-text mb-4 pt-3 font-weight-bold">
                  ĐĂNG NHẬP
                </h2>
              </MDBRow>
            </div>
            <MDBCardBody className="mx-4 mt-4">
              <MDBInput label="Email" group type="text" validate />
              <MDBInput
                label="Mật khẩu"
                group
                type="password"
                validate
                containerClass="mb-0"
              />
              <MDBRow className="d-flex align-items-center mb-4 mt-5">
                    <MDBBtn rounded type="submit" color="light-blue">
                      Đăng nhập
                    </MDBBtn>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Login;