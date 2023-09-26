import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import WebService, { urls } from "../services/WebService"
import { AddPatient, changePatient } from "../reducer/PatientSlice"
import { useNavigate } from "react-router-dom"
import { updatep } from "../reducer/UpdatePatient"

export default function PatientLists() {
    const navigate = useNavigate()
    const uinfo = useSelector(state => state.Uinfo.value)
    console.log(uinfo.msg)
    var patientlist = useSelector(state => state.patient.value)

    // const [patient, setPatient] = useState([])
    const dispatch = useDispatch()

    const loadPatient = async () => {

        const response = await WebService.GetApiCall(urls.PATIENTLIST,uinfo.msg)
        if (response.data.status) {
            // setPatient(response.data.data)
            dispatch(AddPatient(response.data.data))
        }
        console.log(response.data)
    }

    useEffect(() => {
        loadPatient()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const dele = async (id) => {
        var status = window.confirm("Are You sure to want to delete this record ?")
        if (status) {
            const URL = urls.DELETEPATIENT + id
            const response = await WebService.DeleteApiCall(URL, uinfo.msg)
            if (response.data.status) {
                var list = patientlist.filter(ob => ob.id !== response.data.data.id)
                dispatch(changePatient(list))
                console.log(response)
            }
        }
    }
    const updatepatient = (ob) => {
        dispatch(updatep(ob))
        navigate("/updatepatient")

    }
     return <>
       <div class="container-fluid py-5">
            <div class="container">
                <div class="text-center mx-auto mb-5">
                    <h5 class="d-inline-block text-primary text-uppercase border-bottom border-5">Patient</h5>
                    <h1 class="display-4">Patient list</h1>
                </div>
                <div class="row">
                    <table className="table table-responsive">
                        <thead>
                            <tr>
                                <th className='col-sm-1'>S.no</th>
                                <th className='col-sm-1'>Name</th>
                                <th className='col-sm-1'>Mobile</th>
                                <th className='col-sm-1'>Gender</th>
                                <th className='col-sm-1'>Age</th>
                                <th className='col-sm-1'>Date</th>
                                <th className='col-sm-1'>Time</th>
                                <th className='col-sm-1'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            { [...patientlist].reverse().map((ob, index) =><tr>
                                <td>{index + 1}</td>
                                <td>{ob.name}</td>
                                <td>{ob.phoneNumber}</td>
                                <td>{ob.sex}</td>
                                <td>{ob.age}</td>
                                <td>{ob.appointmentdate}</td>
                                <td>{ob.time}</td>
                                <td><button className="btn btn-success" onClick={() => updatepatient(ob)}>Update</button> &nbsp;
                                    <button onClick={() => dele(ob.id)} className="btn btn-danger mt-2">Delete</button></td>
                            </tr>)}
                        </tbody>
                    </table>

                </div>
            </div>
        </div>


    </>
}
