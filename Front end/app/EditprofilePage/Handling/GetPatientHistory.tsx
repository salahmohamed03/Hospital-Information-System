const GetPatientHistory = async (pid: any): Promise<any> => {
    const url = `http://localhost:5221/GetPhistory?pid=${pid}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('patient history:', data);
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export default GetPatientHistory;