/* eslint-disable react/prop-types */


const ResumeModel = ({imageUrl,onClose}) => {
  return (
    <div className='resume-modal'>
      <div className="modal-content">
        <span className='close' onClick={onClose}>
          x
        </span>
        <img src={imageUrl} alt="resume" />
      </div>
    </div>
  )
}

export default ResumeModel