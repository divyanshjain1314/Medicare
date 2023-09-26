import axios from "axios"
 class WebService {
 postApiCall(url,data) {
    return axios.post(url,data)
 };

 postrecCall(url, data , msg) {
    return axios.post(url,data ,{ headers: { Authorization: 'Bearer ' + msg }}) 
 };

   GetApiCall(url, msg) {
      return axios.get(url, { headers: { Authorization: 'Bearer ' + msg } })
  };

  DeleteApiCall(url, msg) {
   return axios.delete(url, { headers: { Authorization: 'Bearer ' + msg } })
  };

  PutApiCall(url, data, msg) {
   return axios.put(url, data, { headers: { Authorization: 'Bearer ' + msg } })
   };

}

const SERVER = "http://apps.codebetter.in:8082"

export const urls = {
    // Doctor 
    REGISTER : `${SERVER}/clinic/auth/doctor/save`,
    LOGIN : `${SERVER}/clinic/auth/login`,
    // Reception
    AddReception: `${SERVER}/clinic/api/reception/save`,
    GETReception: `${SERVER}/clinic/api/reception/lists`,
    // patient
    ADDPATIENT : `${SERVER}/clinic/api/patient/addpatient`,
    PATIENTLIST : `${SERVER}/clinic/api/patient/list`,
    DELETEPATIENT : `${SERVER}/clinic/api/patient/delete/`,
    RECEPDELETE : `${SERVER}/clinic/api/reception/delete/`,
    UPDATERECEP : `${SERVER}/clinic/api/reception/updateReception/`,
    UPDATEPATIENT : `${SERVER}/clinic/api/patient/update/`
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new WebService()