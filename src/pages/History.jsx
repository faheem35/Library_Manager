import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteHistoryAPI, getAllHistoryAPI } from '../services/allAPI';
import toast, { Toaster } from 'react-hot-toast';

const History = () => {
  const [allBookHistory, setAllBookHistory] = useState([]);

  useEffect(() => {
    getAllHistory();
  }, []);

  const getAllHistory = async () => {
    try {
      const result = await getAllHistoryAPI();
      if (result.status >= 200 && result.status < 300) {
        console.log("Fetched history:", result.data); // Debugging log
        setAllBookHistory(result.data);
      } else {
        console.log(result);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const removeHistory = async (id) => {
    try { 
      
      await deleteHistoryAPI(id);
      getAllHistory(); // Reload data from server after delete
      toast.success("Data Removed from History Successfully")
      
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ paddingTop: '50px' }} className="min-vh-100 container">
      <div className="d-flex justify-content-between align-items-center py-4">
        <h3 className="fs-5">Watch History</h3>
        <Link className='text-warning' to="/home" >
          Back to Home
        </Link>
      </div>

      <div className="table-responsive my-4">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Caption</th>
              <th>Link</th>
              <th>TimeStamp</th>
              <th>...</th>
            </tr>
          </thead>
          <tbody>
            {allBookHistory?.length > 0 ? (
              allBookHistory.map((BookDetails, index) => (
                <tr key={BookDetails?.id}>
                  <td>{index + 1}</td>
                  <td>{BookDetails?.caption}</td>
                  <td>
                    <a
                      href={BookDetails?.siteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none text-warning"
                    >
                      Visit
                    </a>
                  </td>
                  <td>{BookDetails?.timeStamp}</td>
                  <td>
                    <button
                      className="btn btn-sm"
                      onClick={() => removeHistory(BookDetails?.id)}
                    >
                      <i className="fa-solid fa-trash text-danger"></i>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">
                  <p className="text-center fw-bold text-danger">
                    You haven't read any books yet!
                  </p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <Toaster position='top-right'/>
    </div>
  );
};

export default History;
