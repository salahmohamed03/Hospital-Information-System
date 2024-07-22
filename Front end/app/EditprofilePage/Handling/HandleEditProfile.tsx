const HandleEditProfile = async (formData: any) => {
  const response = await fetch('http://localhost:5221/api/Profile/EditUser', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  console.log("HandleEditProfile response:", response);
  return response;
};

export default HandleEditProfile;


