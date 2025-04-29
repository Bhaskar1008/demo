import axiosRequest from '../../axios-request/request.methods'


export const getCoverageTypeApi =  async () => {
    const res = await axiosRequest.get(`user/coverageType`);
    if (res.errCode === -1) {
      if (res?.errMsg?.data && Array.isArray(res.errMsg.data)) {
        return res.errMsg.data;
      }
      return null
    }else{
        return null
    }
}

export const getAgeRangeApi = async (travelType, travelPackage) => {
    const res = await axiosRequest.get(`user/ageRange?travelType=${travelType}&travelPackage=${travelPackage}`);
    if (res.errCode === -1) {
      if (res?.errMsg?.data && Array.isArray(res.errMsg.data)) {
        return res.errMsg.data;
      }
      return null
    }else{
        return null
    }
    
}

export const getThirdPartyDetails = (params) => {
  const queryParams = new URLSearchParams(params);
  
  return axiosRequest.get(`user/third-party/detail?${queryParams.toString()}`)
  .then((response) => {
      if (response?.errCode === -1 && response?.errMsg && response?.errMsg?.customerDetail) {
        return response.errMsg;
      } else {
        return response.errMsg;
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

    export const getPrefix = async () => {
        const res = await axiosRequest.get(`user/lov-options?name=Prefix`);
        if (res.errCode === -1) {
            return res.errMsg;
        } else {
            return res.errMsg
        }
    }
    export const getSaperator = async () => {
        const res = await axiosRequest.get(`user/lov-options?name=Separator`);
        if (res.errCode === -1) {
            return res.errMsg;
        } else {
            return res.errMsg
        }
    }