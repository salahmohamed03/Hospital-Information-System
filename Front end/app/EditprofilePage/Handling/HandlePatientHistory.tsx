const HandlePatientHistory = async (patientHistoryData: any) => {
  const response = await fetch('http://localhost:5221/AddPhistory', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(patientHistoryData),
  });

  console.log("HandlePatientHistory response:", response);
  return response;
};

export default HandlePatientHistory;
