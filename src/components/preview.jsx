import '../styles/preview.css'

export default function Preview({
  profileInfo,
  previewEducation,
  educationInfo,
  handleEducationDelete,
  handleEducationEdit,
  previewExperience,
  experienceInfo,
  handleExperienceDelete,
  handleExperienceEdit
}) {

  function getDate(date) {
    if (date === '') {
      return ' '
    }
    const monthsArray = ['January', 'February', 'March', 'April', 'May', 'June', 
      'July', 'August', 'September', 'October', 'November', 'December']
    let yearMonthArray = date.split('-')
    let monthYear = monthsArray[yearMonthArray[1] - 1] + ' ' + yearMonthArray[0]
    return monthYear.toString()
  }

  return (
    <>
      <div className='preview'>
        <h1>Preview</h1>
          <section>
            <h2>{profileInfo.fullName}</h2>
            <p>{profileInfo.email}</p>
            <p>{profileInfo.phone}</p>
            <p>{profileInfo.address}</p>
          </section>
          <section>
            <h2>Education</h2>
            <div className='savedEducation'>
              {previewEducation.map(education => (
                <div key={education.id}>
                  <div className='text'>
                    <h3>{education.institName}</h3>
                    <p>{education.subject}</p>
                    <p>from: {getDate(education.startDate)}</p>
                    <p>to: {getDate(education.endDate)}</p>
                  </div>
                  <div className='buttons'>
                    <button onClick={(e) => handleEducationDelete(e, education.id)}>Delete</button>
                    <button onClick={(e) => handleEducationEdit(e, education.id)}>Edit</button>
                  </div>
                </div>
              ))}
            </div>
            <h3>{educationInfo.institName}</h3>
            <p>{educationInfo.subject}</p>
            <p>from: {getDate(educationInfo.startDate)}</p>
            <p>to: {getDate(educationInfo.endDate)}</p>
          </section>
          <section>
            <h2>Experience</h2>
            <div className='savedExperience'>
              {previewExperience.map(experience => (
                <div key={experience.id}>
                  <div className='text'>
                    <h3>{experience.companyName}</h3>
                    <p>{experience.position}</p>
                    <p>{experience.responsibilities}</p>
                    <p>from: {getDate(experience.startDate)}</p>
                    <p>to: {getDate(experience.endDate)}</p>
                  </div>
                  <div className='buttons'>
                    <button onClick={(e) => handleExperienceDelete(e, experience.id)}>Delete</button>
                    <button onClick={(e) => handleExperienceEdit(e, experience.id)}>Edit</button>
                  </div>
                </div>
              ))}
            </div>
            <h3>{experienceInfo.companyName}</h3>
            <p>{experienceInfo.position}</p>
            <p>{experienceInfo.responsibilities}</p>
            <p>from: {getDate(experienceInfo.startDate)}</p>
            <p>to: {getDate(experienceInfo.endDate)}</p>
          </section>
      </div>
    </>
  )
}
