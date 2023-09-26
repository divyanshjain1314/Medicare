/* eslint-disable no-undef */
import React, { useEffect } from 'react'
import WebService, { urls } from './services/WebService'
import { useDispatch, useSelector } from 'react-redux'
import { changeReception, addReception } from './reducer/RecSlice'
import { useNavigate } from 'react-router-dom'
import { updateRecp } from './reducer/UpdateSlice'

export const Receptionlist = () => {
    const uinfo = useSelector(state => state.Uinfo.value)
    console.log(uinfo)
    const token = useSelector(state => state.Uinfo.value.msg)
    console.log(token)
    const receptionlist = useSelector(state=> state.reception.value)
    const dispatch = useDispatch()
    var navigate = useNavigate()
    useEffect(() => {
        loadReception()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const loadReception = async () => {

        const response = await WebService.GetApiCall(urls.GETReception , uinfo.msg)
        if (response.data.status) {
            // setReception(response.data.data)
            dispatch(addReception(response.data.data))
        }
        console.log(response.data)
    }
    const delet = async (id) => {
        var confir = window.confirm("Are You Sure You want to delete this reception ?")
        // alert(id)
        if (confir) {
            const URL = urls.RECEPDELETE + id
            const response = await WebService.PutApiCall(URL, null, token)
            console.log(response)
            if (response.data.status) {
                var list = receptionlist.filter(ob => ob.id !== response.data.data.id)
                dispatch(changeReception(list))
            }
        }
    }
    
    const updateRec = (ob) => {
        dispatch(updateRecp(ob))
        navigate("/updatereception")

    }

  return (
    <>
     <div class="container-fluid py-5">
            <div class="container">
                <div class="text-center mx-auto mb-5">
                    <h5 class="d-inline-block text-primary text-uppercase border-bottom border-5">Reception</h5>
                    <h1 class="display-4">Reception Details</h1>
                </div>
                <div class="row">
                    <table className="table table-responsive">
                        <thead>
                            <tr>
                                <th className='col-sm-1'>S.no</th>
                                <th className='col-sm-1'>Name</th>
                                <th className='col-sm-1'>Mobile</th>
                                <th className='col-sm-1'>Email</th>
                                <th className='col-sm-1'>Password</th>
                                <th className='col-sm-1'>Address</th>
                                <th className='col-sm-1'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            { [...receptionlist].reverse().map((ob, index) => <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{ob.name}</td>
                                <td>{ob.phoneNumber}</td>
                                <td>{ob.email}</td>
                                <td>{ob.password}</td>
                                <td>{ob.raddress}</td>
                                <td>
                                    <button className="btn btn-success" onClick={() => updateRec(ob)} > Update </button> &nbsp;
                                    <button className="btn btn-danger mt-1" onClick={() => delet(ob.id)} > Delete </button></td>
                            </tr>)}
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    </>
  )
}
