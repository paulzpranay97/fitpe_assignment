// components/Dashboard.js
import React from 'react';
// import Typography from '@mui/material/Typography';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

import { CircularProgress, Box } from '@mui/material';
import '../style.css'; 


function Dashboard() {

  const percentage = 75;
  const barData = [
    { name: 'Jan', value: 4000 },
    { name: 'Feb', value: 3000 },
    { name: 'Mar', value: 2000 },
    { name: 'Apr', value: 2780 },
    { name: 'May', value: 1890 },
    { name: 'Jun', value: 2390 },
    { name: 'Jul', value: 3490 },
    { name: 'Aug', value: 1490 },
    { name: 'Sep', value: 3590 },
    { name: 'Oct', value: 2290 },
    { name: 'Nov', value: 1190 },
    { name: 'Dec', value: 1390 }
  ]; 
  return (
    <div className='page-body'>

      <div className="ld-flex-row">
        <div className="ld-flex-col-10 heading">
          <h1>Dashboard</h1>
        </div>
      </div>

      <div className="ld-flex-row">
        <div className="ld-flex-col-7">
          <div className="ld-flex-row cards-main-continer">
            <div className="ld-flex-col-2-5 cards-1">
              <div className="top-cards">
                <i class="ri-briefcase-3-fill"></i>
                <p>Total Order</p>
                <p><span className='price'>76</span> <span><i class="ri-arrow-up-s-fill"></i></span><span>3%</span></p>
              </div>
            </div>
            <div className="ld-flex-col-2-5 cards-1">
              <div className="top-cards">
                <i class="ri-briefcase-3-fill"></i>
                <p>Total Delivered</p>
                <p><span className='price'>76</span> <span><i class="ri-arrow-up-s-fill"></i></span><span>3%</span></p>
              </div>
            </div>
            <div className="ld-flex-col-2-5 cards-1">
              <div className="top-cards">
                <i class="ri-briefcase-3-fill"></i>
                <p>Total Canceled</p>
                <p><span className='price'>76</span> <span><i class="ri-arrow-up-s-fill"></i></span><span>3%</span></p>
              </div>
            </div>
            <div className="ld-flex-col-2-5 cards-1">
              <div className="top-cards">
                <i class="ri-briefcase-3-fill"></i>
                <p>Total Revenue</p>
                <p><span className='price'>76</span> <span><i class="ri-arrow-up-s-fill"></i></span><span>3%</span></p>
              </div>
            </div>
            
          </div>
        </div>

        <div className="ld-flex-col-3">
          <div className="ld-flex-row .cards-main-continer">
            <div className="ld-flex-col-10">
              <div className="top-cards-2">

                <div className='net-prof-div'>
                  <p>Net Profit</p>
                  <p>$ 6285.29</p>
                  <p><i class="ri-arrow-up-s-fill"></i><span>3%</span></p>
                </div>

                <div>
                  <Box display="flex" justifyContent="center" alignItems="center">
                    <CircularProgress
                      variant="determinate"
                      value={percentage}
                      size={100}
                      thickness={4}
                      sx={{
                        color: '#4d73f2', // Customize color as needed
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 100,
                        height: 100,
                      }}
                    >
                      <span style={{ fontSize: '24px', fontWeight: 'bold' }}>{percentage}% </span>
                    
                    </Box>
                  </Box>
                        <span className='chart-mid'>Goal Completed</span>
                        <span className='chart-last'>*The value here has been rounded off</span>
                </div>
                
              </div>
          
            </div>
          </div>
        </div>
      </div>

      <div className="ld-flex-row">
        <div className='ld-flex-col-7'>
          <div className="ld-flex-row cards-main-continer-bar-chart">
          <BarChart
              width={1000}
              height={300}
              data={barData}
              margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#4d73f2" />
            </BarChart>
          </div>
        </div>
        <div className='ld-flex-col-3'>
          <div className='goal-pop-menu-main'>
            <div className='goal-pop-menu'>
              <i class="ri-crosshair-line"></i>
              <p>Goal</p>
              <i class="ri-arrow-right-s-line"></i>
            </div>
            <div className='goal-pop-menu'>
              <i class="ri-crosshair-line"></i>
              <p>Dishes</p>
              <i class="ri-arrow-right-s-line"></i>
            </div>
            <div className='goal-pop-menu'>
              <i class="ri-crosshair-line"></i>
              <p>Menus</p>
              <i class="ri-arrow-right-s-line"></i>
            </div>
          </div>
          
          
        </div>
      </div>


    </div>
  );
}

export default Dashboard;