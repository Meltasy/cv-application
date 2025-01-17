import { useState } from 'react'
import Profile from './profile'
import Education from './education'
import Experience from './experience'
import Preview from './preview'
import '../styles/App.css'

export default function App() {
  const [profileInfo, setProfileInfo] = useState({
    fullName: 'Joe Brown',
    email: 'joe.brown@fakemail.com',
    phone: '0123 456789',
    address: 'Sometown, Someland'
  })
  
  function handleProfileInfoChange(e) {
    setProfileInfo({ ...profileInfo, [e.target.name]: e.target.value })
  }

  const [educationInfo, setEducationInfo] = useState({
    id: crypto.randomUUID(),
    institName: 'Oxford University',
    subject: 'BA English Literature',
    startDate: '2005-09',
    endDate: '2008-06'
  })

  const [educationInfoArray, setEducationInfoArray] = useState([])

  function handleEducationInfoChange(e) {
    setEducationInfo({ ...educationInfo, [e.target.name]: e.target.value })
  }

  function handleEducationSubmit(e) {
    e.preventDefault()
    setEducationInfoArray([
      ...educationInfoArray,
      { ...educationInfo, [e.target.name]: e.target.value }
    ])
    setEducationInfo({
      id: crypto.randomUUID(),
      institName: '',
      subject: '',
      startDate: '',
      endDate: ''
    })
  }

  function handleEducationDelete(e, id) {
    e.preventDefault()
    setEducationInfoArray(educationInfoArray.filter(eIA => eIA.id !== id))
  }

  function handleEducationEdit(e, id) {
    e.preventDefault()
    let editEducation = educationInfoArray.filter(eIA => eIA.id === id)
    handleEducationDelete(e, id)
    setEducationInfo({
      ...educationInfo,
      // [e.target.name]: editEducation[0].value
      id: editEducation[0].id,
      institName: editEducation[0].institName,
      subject: editEducation[0].subject,
      startDate: editEducation[0].startDate,
      endDate: editEducation[0].endDate
    })
  }

  const [experienceInfo, setExperienceInfo] = useState({
    id: crypto.randomUUID(),
    companyName: 'Pearson',
    position: 'Publisher',
    responsibilities: 'Overseeing the development and production of ELT materails for young adults.',
    startDate: '2018-07',
    endDate:'2022-04'
  })

  const [experienceInfoArray, setExperienceInfoArray] = useState([])

  function handleExperienceInfoChange(e) {
    setExperienceInfo({ ...experienceInfo, [e.target.name]: e.target.value })
  }

  function handleExperienceSubmit(e) {
    e.preventDefault()
    setExperienceInfoArray([
      ...experienceInfoArray,
      { ...experienceInfo, [e.target.name]: e.target.value}
    ])
    setExperienceInfo({
      id: crypto.randomUUID(),
      companyName: '',
      position: '',
      responsibilities: '',
      startDate: '',
      endDate: ''
    })
  }

  function handleExperienceDelete(e, id) {
    e.preventDefault()
    setExperienceInfoArray(experienceInfoArray.filter(eIA => eIA.id !== id))
  }

  function handleExperienceEdit(e, id) {
    e.preventDefault()
    let editExperience = experienceInfoArray.filter(eIA => eIA.id === id)
    handleExperienceDelete(e, id)
    setExperienceInfo({
      ...experienceInfo,
      // [e.target.name]: editEducation[0].value
      id: editExperience[0].id,
      companyNameName: editExperience[0].companyName,
      position: editExperience[0].position,
      responsibilities: editExperience[0].responsibilities,
      startDate: editExperience[0].startDate,
      endDate: editExperience[0].endDate
    })
  }

  return (
    <main>
      <Profile
        values={profileInfo}
        handleChange={handleProfileInfoChange}
      />
      <Education
        values={educationInfo}
        handleChange={handleEducationInfoChange}
        handleSubmit={handleEducationSubmit}
      />
      <Experience
        values={experienceInfo}
        handleChange={handleExperienceInfoChange}
        handleSubmit={handleExperienceSubmit}
      />
      <Preview
        profileInfo={profileInfo}
        previewEducation={educationInfoArray}
        educationInfo={educationInfo}
        handleEducationDelete={handleEducationDelete}
        handleEducationEdit={handleEducationEdit}
        previewExperience={experienceInfoArray}
        experienceInfo={experienceInfo}
        handleExperienceDelete={handleExperienceDelete}
        handleExperienceEdit={handleExperienceEdit}
      />
    </main>
  )
}
