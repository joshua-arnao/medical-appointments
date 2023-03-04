import React, { useEffect, useState } from 'react'
import Error from './Error'

export const Form = ({
  patients,
  setPatients,
  patient,
  setPatient,
  error,
  setError,
  setEdit
}) => {
  const [name, setName] = useState('')
  const [owner, setOwner] = useState('')
  const [email, setEmail] = useState('')
  const [date, setDate] = useState('')
  const [symptoms, setSymptoms] = useState('')

  useEffect(() => {
    console.log(Object.keys(patient).length > 0)
    if (Object.keys(patient).length > 0) {
      // console.log(patient)
      setName(patient.name)
      setOwner(patient.owner)
      setEmail(patient.email)
      setDate(patient.date)
      setSymptoms(patient.symptoms)
    }
  }, [patient])

  const generateId = () => {
    const random = Math.random().toString(36).substring(2)
    const date = Date.now().toString(36)

    return random + date
  }

  const resetForm = () => {
    setName('')
    setOwner('')
    setEmail('')
    setDate('')
    setSymptoms('')

    setPatient({})
    setEdit(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validación del Formulario
    if ([name, owner, email, date, symptoms].includes('')) {
      console.log('Hay al menos un campo vacío')
      setError(true)
      return
    }

    setError(false)

    //Objeto de paciente
    const patientObject = {
      name,
      owner,
      email,
      date,
      symptoms
    }

    if (patient.id) {
      // Editar un registro
      patientObject.id = patient.id

      const patientsUpdate = patients.map((patientState) =>
        patientState.id === patient.id ? patientObject : patientState
      )

      setPatients(patientsUpdate)
      setPatient({})
    } else {
      // Nuevo Registro
      patientObject.id = generateId()
      setPatients([...patients, patientObject])
    }

    // Reinciar Form
    resetForm()
  }

  return (
    <div className='md:w-1/2 lg:w-2/5'>
      <h2 className='font-black text-2xl text-center'>Seguimeinto Pacientes</h2>
      <p className='text-lg mt-5 text-center mb-8'>
        Añade Pacientes y {''}
        <span className='text-indigo-600 font-bold'>Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className='bg-white shadow-md rounded-lg py-8 px-5'
      >
        {error && <Error>Todos los campos son obligatorios</Error>}

        <div className='mb-4'>
          <label
            htmlFor='pet'
            className='block text-gray-700 uppercase font-bold'
          >
            Nombre Mascota
          </label>

          <input
            id='pet'
            type='text'
            placeholder='Nombre de la mascota'
            className='border-2 w-full p-2 mt-2 placeholder-gray-300 rounded-md'
            // className={
            //   !error
            //     ? 'border-2 w-full p-2 mt-2 placeholder-gray-300 rounded-md'
            //     : 'border-2 w-full p-2 mt-2 placeholder-gray-300 rounded-md bg-red-100'
            // }
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className='mb-4'>
          <label
            htmlFor='owner'
            className='block text-gray-700 uppercase font-bold'
          >
            Nombre Propietario
          </label>

          <input
            id='owner'
            type='text'
            placeholder='Nombre del propietario'
            className='border-2 w-full p-2 mt-2 placeholder-gray-300 rounded-md'
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
          />
        </div>

        <div className='mb-4'>
          <label
            htmlFor='email'
            className='block text-gray-700 uppercase font-bold'
          >
            Email
          </label>

          <input
            id='email'
            type='email'
            placeholder='Email contacto'
            className='border-2 w-full p-2 mt-2 placeholder-gray-300 rounded-md'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className='mb-4'>
          <label
            htmlFor='alta'
            className='block text-gray-700 uppercase font-bold'
          >
            Alta
          </label>

          <input
            id='alta'
            type='date'
            className='border-2 w-full p-2 mt-2 placeholder-gray-300 rounded-md'
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className='mb-4'>
          <label
            htmlFor='symptoms'
            className='block text-gray-700 uppercase font-bold'
          >
            Sintomas
          </label>

          <textarea
            id='symptoms'
            placeholder='Describe los sitomas'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
          />
        </div>

        <div className='flex flex-col gap-3'>
          <input
            type='submit'
            className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 rounded-md cursor-pointer transition-all'
            value={patient.id ? 'Editar Paciente' : 'Agregar Paciente'}
          />

          {patient.id && (
            <button
              type='button'
              className='py-2 px-10 w-full text-red-500 font-bold uppercase hover:text-red-800'
              onClick={resetForm}
            >
              Cancelar
            </button>
          )}
        </div>
      </form>
    </div>
  )
}
