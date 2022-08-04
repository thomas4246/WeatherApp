import React from 'react';

export default function MainView() {
  return (
    <>
      <div className='main'>
        <div class='row align-items-center vh-100'>
          <div class='col-7 mx-auto '>
            <div class='card shadow border'>
              <div class='card-body d-flex flex-column align-items-center'>
                <p class='card-text'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href='#' class='btn btn-primary'>
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
