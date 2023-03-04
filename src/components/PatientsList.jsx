import React, { useEffect } from 'react'
import { Patient } from './Patient'

export const PatientsList = ({
  patients,
  setPatient,
  deletPatient,
  setError,
  edit,
  setEdit
}) => {
  console.log(patients)

  useEffect(() => {
    if (patients.length > 0) {
      console.log('Nuevo Paciente')
    }
  }, [patients])

  return (
    <div className='md:w-1/2 lg:w-3/5 max-sm:pt-8'>
      {patients.length ? (
        <>
          <h2 className='font-black text-2xl text-center'>
            Listado de Pacientes
          </h2>

          <p className='text-lg mt-5 mb-8 text-center'>
            Administra tus{' '}
            <span className='text-indigo-600 font-bold'>Pacientes y citas</span>
          </p>

          <div className='md:h-screen overflow-y-scroll'>
            {patients.map((patient) => (
              <Patient
                key={patient.id}
                patient={patient}
                setPatient={setPatient}
                deletPatient={deletPatient}
                setError={setError}
                edit={edit}
                setEdit={setEdit}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <h2 className='font-black text-2xl text-center'>No hay pacientes</h2>

          <p className='text-lg mt-5 mb-8 text-center'>
            Comienza agendando pacientes{' '}
            <span className='text-indigo-600 font-bold'>y aparecerá, aquí</span>
          </p>
        </>
      )}
    </div>
  )
}
