import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";

const Modal = (props) => {
  const video = useSelector((video) => video.movies.video);
  const url = video[0]?.key;

  return (
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              {props.title}
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            {url ? (
              <ReactPlayer
                width="100%"
                url={`https://www.youtube.com/watch?v=${url}`}
              />
            ) : (
              <>No video was found</>
            )}
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
