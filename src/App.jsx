import { useState, useEffect } from 'react'
import { Form } from './components/Form'
import { Header } from './components/Header'
import { PatientsList } from './components/PatientsList'

function App() {
  const [error, setError] = useState(false)
  const [patients, setPatients] = useState(
    JSON.parse(localStorage.getItem('patients')) ?? []
  )
  const [patient, setPatient] = useState({})
  const [edit, setEdit] = useState(false)

  // useEffect(() => {
  //   const getLocalStorage = () => {
  //     const patientsLocalStorage =
  //       JSON.parse(localStorage.getItem('patients')) ?? []
  //     setPatients(patientsLocalStorage)
  //   }

  //   getLocalStorage()
  // }, [])

  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients))
  }, [patients])

  const deletPatient = (id) => {
    // console.log('Elimianr paciente', id)
    const updatePatients = patients.filter((patient) => patient.id !== id)

    setPatients(updatePatients)
  }

  return (
    <div className='container md:mx-auto mt-20'>
      <Header />

      <div className='mt-12 md:flex'>
        <Form
          patients={patients}
          setPatients={setPatients}
          patient={patient}
          setPatient={setPatient}
          error={error}
          setError={setError}
          setEdit={setEdit}
        />
        <PatientsList
          patients={patients}
          setPatient={setPatient}
          deletPatient={deletPatient}
          setError={setError}
          edit={edit}
          setEdit={setEdit}
        />
      </div>
    </div>
  )
}

export default App
