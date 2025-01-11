document.addEventListener('DOMContentLoaded', function() {
          // Sidebar Toggle
          document.getElementById('sidebarCollapse').addEventListener('click', function() {
              document.getElementById('sidebar').classList.toggle('active');
              document.getElementById('content').classList.toggle('active');
          });
      
          // Profile Visit Chart
          const profileCtx = document.getElementById('profileVisitChart').getContext('2d');
          new Chart(profileCtx, {
              type: 'bar',
              data: {
                  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                  datasets: [{
                      label: 'Profile Visits',
                      data: [10, 20, 30, 20, 10, 20, 30, 20, 10, 20, 30, 20],
                      borderColor: '#435ebe',
                      backgroundColor: '	rgb(21, 96, 189)',
                      tension: 0.4,
                      fill: true
                  }]
              },
              options: {
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                      legend: {
                          display: false
                      }
                  },
                  scales: {
                      y: {
                          beginAtZero: true,
                          grid: {
                              display: true,
                              color: '#f0f0f0'
                          }
                      },
                      x: {
                          grid: {
                              display: false
                          }
                      }
                  }
              }
          });
      
          // Visitors Profile Chart
          const visitorsCtx = document.getElementById('visitorsChart').getContext('2d');
          new Chart(visitorsCtx, {
              type: 'doughnut',
              data: {
                  labels: ['India','Europe'],
                  datasets: [{
                      data: [70, 30],
                      backgroundColor: [
                          '#435ebe',
                          '#57caeb'
                      ],
                      borderWidth: 0
                  }]
              },
              options: {
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                      legend: {
                          position: 'bottom'
                      }
                  },
                  cutout: '70%'
              }
          });
      
          // Sparkline Charts
          const sparklineOptions = {
              chart: {
                  type: 'line',
                  height: 30,
                  sparkline: {
                      enabled: true
                  },
                
              },
              stroke: {
                  width: 2,
                  curve: 'smooth'
              },
              fill: {
                  type: 'gradient',
                  gradient: {
                      shadeIntensity: 0.9,
                    thickness:100,
                      opacityFrom: 1,
                      opacityTo: 1,
                      stops: [0, 100]
                  }
              },
              series: [{
                  data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63]
              }],
              tooltip: {
                  enabled: false
              }
          };
      
          new ApexCharts(document.querySelector("#sparkline1"), {
              ...sparklineOptions,
              colors: ['#435ebe']
          }).render();
      
          new ApexCharts(document.querySelector("#sparkline2"), {
              ...sparklineOptions,
              colors: ['#57caeb']
          }).render();
      
          new ApexCharts(document.querySelector("#sparkline3"), {
              ...sparklineOptions,
              colors: ['#ffc107']
          }).render();
      
          new ApexCharts(document.querySelector("#sparkline4"), {
              ...sparklineOptions,
              colors: ['#ff7976']
          }).render();
      
          // Handle Responsive Sidebar
          function handleResize() {
              if (window.innerWidth <= 768) {
                  document.getElementById('sidebar').classList.add('active');
                  document.getElementById('content').classList.remove('active');
              } else {
                  document.getElementById('sidebar').classList.remove('active');
                  document.getElementById('content').classList.remove('active');
              }
          }
      
          window.addEventListener('resize', handleResize);
          handleResize(); // Initial check
      });