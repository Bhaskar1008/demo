import React, { useState, useEffect } from 'react'
import './GetPaymentStatus.css'
import paymetImg from '../../../../images/payment_img.jpg'
import axiosRequest from "../../../../axios-request/request.methods";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import apiConfig from '../../../../config/api.config';
import { message } from 'antd';

const TravelGetPaymentStatusCypher = () => {
  const { baseURL } = apiConfig

  const history = useHistory();
  const windowsLocation = window.location.href;
  var cypherLinkSplit = windowsLocation.split("travel-payment-return-url-cyphyer/")

  var finalCypherSplit = cypherLinkSplit[1]?.split("?")
  let finalCypher = finalCypherSplit[0]
  const queryString = window?.location?.search;
  var params = new URLSearchParams(queryString);
  // var requestId = params.get("requestid");
  // var responseId = params.get("responseid");

  var Policy_Number = params.get("Policy_Number");

  const getLeadDetails = async (Policy_Number) => {
    try {

      const axios = require('axios');
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${baseURL}cipherSecure/payment/status?policyNumber=${Policy_Number}`,
        headers: { 'ciphertext': finalCypher },
      };

      axios.request(config)
        .then((response) => {
          if (response?.data?.errCode === -1) {
            if (response?.data?.errMsg?.data?.body?.responseCode === "MA001") {
              // history.push("/travel-payment-success")
              message.success(response?.data?.errMsg?.data?.message)
              if (response?.data?.errMsg?.data?.isCocafAuthenticated === false && response?.data?.errMsg?.data?.isCocafRequired === true) {
                history.push({
                  pathname: "/travel-coca",
                  state: {
                    data: response?.data?.errMsg?.data,
                    cypher: finalCypher
                  }
                })
              } else {
                history.push({
                  pathname: "/travel-payment-success-cypher",
                  state: {
                    data: response?.data?.errMsg?.data,
                    cypher: finalCypher
                  }
                })
              }

            } else if (response?.data?.errMsg?.data?.body?.responseCode === "MA005" || response?.data?.errMsg?.data?.body?.responseCode === "MA003") {
              //  history.push("/travel-payment-failed")
              message.error(response?.data?.errMsg?.data?.message)
              history.push({
                pathname: "/customer/travel-payment-failed-cypher",
                state: {
                  data: response?.data?.errMsg?.data,
                  cypher: finalCypher
                }
              })
            }
          } else {
            message.error(response?.data?.errMsg?.data?.message)
            // history.push("/travel-payment-failed")
            history.push({
              pathname: "/customer/travel-payment-failed-cypher",
              state: {
                data: response?.data?.errMsg?.data,
                cypher: finalCypher
              }
            })
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getLeadDetails(Policy_Number)
  }, [])

  return (
    <>
      {/* GetPaymentStatus */}
      <div className="cardPayment">
        <img
          src={paymetImg}
          alt="Payment Image"
          className="cardPayment-image"
        />
        <div className="cardPayment-content">
          <h3>Payment Status</h3>
          <h5>Please Wait...</h5>
        </div>
      </div>
    </>
  )
}

export default TravelGetPaymentStatusCypher