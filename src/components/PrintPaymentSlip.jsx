import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const PayslipComponent = ({
  username = '',
  payslipDetails = {
    payslipId: '',
    patientName: '',
    patientLastName: '',
    operationName: '',
    treatmentCost: 0,
    moneyPaid: 0,
    remainingMoney: 0,
    date: '',
    printDate: '',
    userSignature: '',
  },
}) => {
  const [logoUrl, setLogoUrl] = useState(null);

  useEffect(() => {
    // Convert image to base64
    const convertImageToBase64 = async () => {
      try {
        const response = await fetch('/logo.png');
        const blob = await response.blob();
        const reader = new FileReader();
        reader.onloadend = () => setLogoUrl(reader.result);
        reader.readAsDataURL(blob);
      } catch (error) {
        console.error('Error loading logo:', error);
      }
    };

    convertImageToBase64();
  }, []);

  const styles = {
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '16px',
      backgroundColor: 'white',
      fontFamily: 'Arial, sans-serif',
    },
    header: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      marginBottom: '24px',
    },
    logoContainer: {
      width: '64px',
      height: '64px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
      width: '85px',
      height: '85px',
    },
    logoPlaceholder: {
      width: '48px',
      height: '48px',
      borderRadius: '50%',
      border: '2px solid #d1d5db',
    },
    headerCenter: {
      flex: 1,
      textAlign: 'center',
    },
    clinicName: {
      fontSize: '20px',
      fontWeight: 'bold',
      margin: '0',
    },
    subtitle: {
      fontSize: '14px',
      fontWeight: '600',
      marginTop: '4px',
    },
    headerRight: {
      fontSize: '14px',
    },
    mainContent: {
      border: '2px solid #d1d5db',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
    },
    cell: {
      border: '2px solid #d1d5db',
      padding: '12px',
      fontSize: '14px',
    },
    labelCell: {
      fontWeight: '600',
      width: '33%',
    },
    footer: {
      marginTop: '32px',
      padding: '16px',
      borderTop: '2px solid #d1d5db',
    },
    footerContent: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
    },
    signatureLine: {
      width: '192px',
      borderTop: '2px solid #9ca3af',
      marginTop: '16px',
    },
    signatureText: {
      fontSize: '14px',
      marginTop: '4px',
    },
    notice: {
      marginTop: '16px',
      fontSize: '14px',
      fontStyle: 'italic',
      textAlign: 'center',
      color: '#4b5563',
    },
  };

  return (
    <div style={styles.container} className="print-component">
      <div style={styles.header}>
        <div style={styles.logoContainer}>
          {logoUrl && (
            <img
              src={logoUrl}
              alt="Clinic Logo"
              style={{
                ...styles.logo,
                WebkitPrintColorAdjust: 'exact',
                printColorAdjust: 'exact',
              }}
            />
          )}
        </div>
        <div style={styles.headerCenter}>
          <h1 style={styles.clinicName}>
            {payslipDetails.clinicName || 'Wahid Dental Clinic'}
          </h1>
          <p style={styles.subtitle}>Payment Bill Slip</p>
        </div>
        <div style={styles.headerRight}>
          <p>Print date: {payslipDetails.printDate}</p>
          <p>Payment Id #: {payslipDetails.payslipId}</p>
        </div>
      </div>

      <div style={styles.mainContent}>
        <table style={styles.table}>
          <tbody>
            <tr>
              <td style={{ ...styles.cell, ...styles.labelCell }}>
                Patient Name:
              </td>
              <td style={styles.cell}>
                {payslipDetails.patientName} {payslipDetails.patientLastName}
              </td>
            </tr>
            <tr>
              <td style={{ ...styles.cell, ...styles.labelCell }}>
                Treatment:
              </td>
              <td style={styles.cell}>{payslipDetails.operationName}</td>
            </tr>
            <tr>
              <td style={{ ...styles.cell, ...styles.labelCell }}>
                Treatment Cost:
              </td>
              <td style={styles.cell}>AFN {payslipDetails.treatmentCost}</td>
            </tr>
            <tr>
              <td style={{ ...styles.cell, ...styles.labelCell }}>
                Amount Paid:
              </td>
              <td style={styles.cell}>AFN {payslipDetails.moneyPaid}</td>
            </tr>
            <tr>
              <td style={{ ...styles.cell, ...styles.labelCell }}>
                Remaining Amount:
              </td>
              <td style={styles.cell}>AFN {payslipDetails.remainingMoney}</td>
            </tr>
          </tbody>
        </table>

        <div style={styles.footer}>
          <div style={styles.footerContent}>
            <div>
              <p style={{ marginBottom: '16px' }}>Issued By: {username}</p>
              <div style={styles.signatureLine}></div>
              <p style={styles.signatureText}>Staff Signature</p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p style={{ marginBottom: '16px' }}>
                Date: {payslipDetails.date}
              </p>
              <div style={styles.signatureLine}></div>
              <p style={styles.signatureText}>Date & Stamp</p>
            </div>
          </div>
        </div>
      </div>

      <div style={styles.notice}>
        The fee is Neither refundable Nor Transferable
      </div>
    </div>
  );
};

PayslipComponent.propTypes = {
  payslipDetails: PropTypes.shape({
    patientName: PropTypes.string.isRequired,
    operationName: PropTypes.string.isRequired,
    treatmentCost: PropTypes.number.isRequired,
    moneyPaid: PropTypes.number.isRequired,
    remainingMoney: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
  username: PropTypes.string.isRequired,
};

export default PayslipComponent;
