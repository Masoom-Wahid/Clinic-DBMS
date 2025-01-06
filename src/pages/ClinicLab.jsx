import { Button, Card, Typography } from '@material-tailwind/react';
import { PlusIcon } from '@heroicons/react/16/solid';
import { useState, useEffect } from 'react';

import { get, del } from '../utils/ApiFetch';

import '../assets/styles/patientPage.css';

import { Link } from 'react-router-dom';
import Mypagination from '../components/MyPagination';

export default function ClinicLab() {
  const [labs, setLabs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    const fetchLabs = async () => {
      try {
        setIsLoading(true);
        const response = await get('/api/lab/', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        if (response.success && response.data) {
          setLabs(response.data || []);
        }
      } catch (error) {
        console.error('Error fetching labs:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLabs();
  }, []);

  // Calculate pagination values based on labs array
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = labs.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(labs.length / itemsPerPage);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-48">
        <Typography>Loading...</Typography>
      </div>
    );
  }

  const handleDelete = async (id) => {
    const response = await del(`/api/lab/${id}/`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });

    if (response.success) {
      setLabs((prev) => prev.filter((a) => a.id !== id));
    } else {
      console.error('Could not delete the lab');
    }
  };

  const getColor = (state) => {
    return state === 'waiting'
      ? 'orange'
      : state === 'pending'
      ? 'orange'
      : state === 'done'
      ? 'green'
      : state === 'warning'
      ? 'red'
      : 'black'; // default color if none of the states match
  };

  return (
    <div>
      <div className="flex-col table patient-table">
        <div className="table-head">
          <Link to="/dashboard/dental-lab/add">
            <Button className="patient-btn">
              <PlusIcon style={{ height: '18px' }} />
              Add Clinic Lab Orders
            </Button>
          </Link>

          <h1 className="head-text">Clinic Lab Orders</h1>
        </div>
        <div className="table-body">
          <div className="tab">
            <Card className="table-body h-full w-full overflow-scroll">
              <table className="w-full min-w-max table-auto text-left">
                <thead>
                  <tr>
                    <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70"
                      >
                        Status
                      </Typography>
                    </th>
                    <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70"
                      >
                        Patient Name
                      </Typography>
                    </th>

                    <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70"
                      >
                        Labratory Name
                      </Typography>
                    </th>
                    <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70"
                      >
                        Dental Type
                      </Typography>
                    </th>
                    <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70"
                      >
                        Day
                      </Typography>
                    </th>
                    <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70"
                      >
                        To
                      </Typography>
                    </th>
                    <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70"
                      >
                        Phone Number
                      </Typography>
                    </th>
                    <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70"
                      >
                        Action
                      </Typography>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.map((lab) => (
                    <tr key={lab.id} className="even:bg-blue-gray-50/50">
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color={getColor(lab.status)}
                          className="font-normal"
                        >
                          {lab.status}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {lab.name}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {lab.labratory_name}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {lab.dental_type}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                          style={{ direction: 'rtl' }}
                        >
                          {lab.day.split('T')[0]}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {lab.to.split('T')[0]}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {lab.phone_no}
                        </Typography>
                      </td>

                      <td>
                        <Button
                          variant="text"
                          size="sm"
                          className="font-medium"
                          onClick={() => handleDelete(lab.id)}
                        >
                          Delete
                        </Button>

                        <Link
                          to={`/dashboard/dental-lab/edit/${lab.id}`}
                          state={{ data: lab }}
                        >
                          <Button
                            variant="text"
                            size="sm"
                            className="font-medium"
                          >
                            Edit
                          </Button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>
            <div className="table-pag">
              <Mypagination
                totalPages={totalPages}
                currentPage={currentPage}
                paginate={setCurrentPage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
