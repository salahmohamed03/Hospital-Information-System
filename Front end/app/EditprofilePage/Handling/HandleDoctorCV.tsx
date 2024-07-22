const HandleDoctorCV = async (DoctorCV: any) => {
    const response = await fetch('http://localhost:5221/api/Doctor/SetDoctorCV', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(DoctorCV),
    });
  
    console.log("HandleDoctorCV response:", response);
    return response;
  };
  
  export default HandleDoctorCV;