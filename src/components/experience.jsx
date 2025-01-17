import '../styles/experience.css'

export default function Experience({ values, handleChange, handleSubmit }) {
  return (
    <div className='experience'>
      <h1>Experience</h1>
      <form>
        <label htmlFor='companyName'>
          Company name:{' '}
        </label>
        <input
          type='text'
          id='companyName'
          name='companyName'
          placeholder='name of company'
          value={values.companyName}
          onChange={handleChange}
        />
        <label htmlFor='position'>
          Position:{' '}
        </label>
        <input
          type='text'
          id='position'
          name='position'
          placeholder='title of position'
          value={values.position}
          onChange={handleChange}
        />
        <label htmlFor='responsibilities'>
          Main responsibilities:{' '}
        </label>
        <textarea
          id='responsibilities'
          name='responsibilities'
          placeholder='list of main responsibilities'
          rows='4'
          cols='40'
          value={values.responsibilities}
          onChange={handleChange}
        >
        </textarea>
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
      </form>
      <button type='submit' onClick={handleSubmit}>Save</button>
    </div>
  )
}
