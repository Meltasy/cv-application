import '../styles/profile.css'

export default function Profile({ values, handleChange }) {
  return (
    <div className='profile'>
      <h1>Profile</h1>
      <form>
        <label htmlFor='fullName'>
          Your name:{' '}
        </label>
        <input
          type='text'
          id='fullName'
          name='fullName'
          placeholder='full name'
          value={values.fullName}
          onChange={handleChange}
        />
        <label htmlFor='email'>
          Email:{' '}
        </label>
        <input
          type='email'
          id='email'
          name='email'
          placeholder='email'
          value={values.email}
          onChange={handleChange}
        />
        <label htmlFor='phone'>
          Phone:{' '}
        </label>
        <input
          type='tel'
          id='phone'
          name='phone'
          placeholder='phone number'
          value={values.phone}
          onChange={handleChange}
        />
        <label htmlFor='address'>
          Address:{' '}
        </label>
        <input
          type='text'
          id='address'
          name='address'
          placeholder='town, country'
          value={values.address}
          onChange={handleChange}
        />
      </form>
    </div>
  )
}
