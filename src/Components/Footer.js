import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon,MDBBtn} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
  
    <MDBFooter bgColor='blue' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='#' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='#' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='#' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='#' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='#' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='#' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Our Vision
              </h6>
              <p>
              Almost in everyone’s life a phase comes when we have to move out from our native place for higher education or for career commitments.. When me and my friend shifted to Jaipur for higher education without our support system “Our Family” it was a challenging task to find a place to order Healthy, Hygienic, Home made food which could remind us of our Mom’s Magic

              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='https://www.zomato.com/india' className='text-reset'>
                  Zomato
                </a>
              </p>
              <p>
                <a href='https://www.swiggy.com/' className='text-reset'>
                  Swiggy
                </a>
              </p>
              <p>
                <a href='https://en.wikipedia.org/wiki/Biryani' className='text-reset'>
                  Biryani
                </a>
              </p>
              <p>
                <a href='!#' className='text-reset'>
                  Laravel
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Institute
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Tenders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Notices
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Research & Development
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Jharkhand, JAMSHEDPUR 831014, India
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +91 9801486326
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 91 8809408094
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <MDBBtn className='m-6' style={{ backgroundColor: '#ed302f' }} href='#'>
        <MDBIcon fab icon='youtube' />
      </MDBBtn>
      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:
        <a className='text-reset fw-bold' href='https://en.wikipedia.org/wiki/National_Institute_of_Technology,_Jamshedpur'>
          NIT JAMSHEDPUR
        </a>
      </div>
    </MDBFooter>
  );
}