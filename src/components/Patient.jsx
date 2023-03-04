import React from 'react'

export const Patient = ({ patient, setPatient, deletPatient, setError }) => {
  const { name, owner, email, date, symptoms, id } = patient

  const handleDelete = () => {
    // console.log('Elimiando...')
    const response = confirm('¿Deseas eliminar este paciente?')

    if (response) {
      deletPatient(id)
    }
  }

  const handleEdit = () => {
    setError(false)
    setPatient(patient)
  }

  return (
    <div className='mb-3 mx-3 bg-white shadow-md px-5 py-8 rounded-lg'>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Nombre: {''}
        <span className='font-normal normal-case'>{name}</span>
      </p>

      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Propietario: {''}
        <span className='font-normal normal-case'>{owner}</span>
      </p>

      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Email: {''}
        <span className='font-normal normal-case'>{email}</span>
      </p>

      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Alta: {''}
        <span className='font-normal normal-case'>{date}</span>
      </p>

      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Sintomas: {''}
        <span className='font-normal normal-case'>{symptoms}</span>
      </p>

      <div className='flex md:justify-end gap-2'>
        <button
          type='button'
          className='py-2 px-4 text-red-500 font-bold uppercase hover:text-red-800'
          onClick={handleDelete}
        >
          Eliminar
        </button>

        <button
          type='button'
          className='py-2 px-10 border-2 border-indigo-600 text-indigo-600 font-bold uppercase rounded-md hover:bg-indigo-600 hover:text-white transition duration-300'
          onClick={handleEdit}
        >
          Editar
        </button>
      </div>
    </div>
  )
}
