const PatientBillSlip = ({
  billData = {
    billNo: '',
    patientName: '',
    patientId: '',
    paymentMode: '',
    treatments: [],
    receivedBy: '',
    clinicInfo: {
      name: 'MEDICAL CLINIC NAME',
      address: '123 Medical Street, City, Country',
      phone: '(123) 456-7890',
      logo: '/logo.png',
    },
  },
}) => {
  const currentDate = new Date().toLocaleDateString();

  // Calculate total amount
  const totalAmount = billData.treatments?.reduce(
    (sum, treatment) => sum + treatment.amount,
    0
  );

  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        padding: '30px',
        border: '2px solid #333',
        width: '21cm',
        margin: '0 auto',
        backgroundColor: '#fff',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <img
          src={billData.clinicInfo.logo}
          alt="Clinic Logo"
          style={{ width: '150px', marginBottom: '15px' }}
        />
        <h1
          style={{
            margin: '0',
            color: '#2c3e50',
            fontSize: '24px',
          }}
        >
          {billData.clinicInfo.name}
        </h1>
        <p
          style={{
            color: '#7f8c8d',
            margin: '5px 0',
          }}
        >
          {billData.clinicInfo.address}
        </p>
        <p
          style={{
            color: '#7f8c8d',
            margin: '5px 0',
          }}
        >
          Tel: {billData.clinicInfo.phone}
        </p>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '30px',
          padding: '10px',
          backgroundColor: '#f8f9fa',
        }}
      >
        <div>
          <p>
            <strong>Bill No:</strong> {billData.billNo}
          </p>
          <p>
            <strong>Patient Name:</strong> {billData.patientName}
          </p>
          <p>
            <strong>Patient ID:</strong> {billData.patientId}
          </p>
        </div>
        <div>
          <p>
            <strong>Date:</strong> {currentDate}
          </p>
          <p>
            <strong>Payment Mode:</strong> {billData.paymentMode}
          </p>
        </div>
      </div>

      <div style={{ marginBottom: '30px' }}>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            marginBottom: '20px',
          }}
        >
          <thead>
            <tr style={{ backgroundColor: '#2c3e50', color: 'white' }}>
              <th style={tableHeaderStyle}>Treatment</th>
              <th style={tableHeaderStyle}>Amount</th>
            </tr>
          </thead>
          <tbody>
            {billData.treatments?.map((treatment, index) => (
              <tr key={index}>
                <td style={tableCellStyle}>{treatment.name}</td>
                <td style={tableCellStyle}>${treatment.amount.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr style={{ fontWeight: 'bold' }}>
              <td style={tableCellStyle}>Total Amount</td>
              <td style={tableCellStyle}>${totalAmount.toFixed(2)}</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '50px',
          paddingTop: '20px',
          borderTop: '1px solid #eee',
        }}
      >
        <div>
          <p>
            <strong>Received By:</strong> {billData.receivedBy}
          </p>
        </div>
        <div>
          <p
            style={{
              borderTop: '1px solid #000',
              paddingTop: '5px',
              width: '200px',
            }}
          >
            Authorized Signature
          </p>
        </div>
      </div>

      <div
        style={{
          textAlign: 'center',
          marginTop: '30px',
          padding: '20px',
          borderTop: '1px solid #eee',
          color: '#7f8c8d',
          fontSize: '14px',
        }}
      >
        <p>Thank you for choosing our services!</p>
        <p>This is a computer-generated bill, no signature required.</p>
      </div>
    </div>
  );
};

const tableHeaderStyle = {
  padding: '12px',
  textAlign: 'left',
  borderBottom: '2px solid #2c3e50',
};

const tableCellStyle = {
  padding: '12px',
  borderBottom: '1px solid #ddd',
};

export default PatientBillSlip;
