import '../styles/education.css'

export default function Education({ values, handleChange, handleSubmit }) {
  return (
    <div className='education'>
      <h1>Education</h1>
      <form>
        <label htmlFor='institName'>
          Educational institution:{' '}
        </label>
        <input
          type='text'
          id='institName'
          name='institName'
          placeholder='name of school'
          value={values.institName}
          onChange={handleChange}
        />
        <label htmlFor='subject'>
          Subject:{' '}
        </label>
        <input
          type='text'
          id='subject'
          name='subject'
          placeholder='title of study'
          value={values.subject}
          onChange={handleChange}
        />
        <div className='dates'>
          <div>
            <label htmlFor='startDate'>
              Start date:{' '}
            </label>
            <input
              type='month'
              id='startDate'
              name='startDate'
              placeholder='YYYY/MM'
              value={values.startDate}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor='endDate'>
              End date:{' '}
            </label>
            <input
              type='month'
              id='endDate'
              name='endDate'
              placeholder='YYYY/MM'
              value={values.endDate}
              onChange={handleChange}
            />
          </div>
        </div>
        <button type='submit' onClick={handleSubmit}>Save</button>
      </form>
    </div>
  )
}
