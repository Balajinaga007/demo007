document.addEventListener('DOMContentLoaded', function() {
          const sidebar = document.getElementById('sidebar');
          const content = document.getElementById('content');
          const sidebarCollapse = document.getElementById('sidebarCollapse');
          const overlay = document.querySelector('.sidebar-overlay');
      
          function toggleSidebar() {
              sidebar.classList.toggle('active');
              content.classList.toggle('active');
              document.body.classList.toggle('sidebar-active');
              overlay.classList.toggle('active');
          }
      
          sidebarCollapse.addEventListener('click', toggleSidebar);
          overlay.addEventListener('click', toggleSidebar);
      
          // Profile Visit Chart
          const profileCtx = document.getElementById('profileVisitChart').getContext('2d');
          const profileVisitChart = new Chart(profileCtx, {
              type: 'bar',
              data: {
                  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                  datasets: [{
                      label: 'Profile Visits',
                      data: [10, 20, 30, 20, 10, 20, 30, 20, 10, 20, 30, 20],
                      borderColor: '#435ebe',
                      backgroundColor: 'rgb(21, 96, 189)',
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
                      },
                      tooltip: {
                          mode: 'index',
                          intersect: false,
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
                  },
                  onHover: (event, chartElement) => {
                      event.native.target.style.cursor = chartElement[0] ? 'pointer' : 'default';
                  },
                  hover: {
                      mode: 'index',
                      intersect: false
                  }
              }
          });
      
          // Visitors Profile Chart
          const visitorsCtx = document.getElementById('visitorsChart').getContext('2d');
          const visitorsChart = new Chart(visitorsCtx, {
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
                          position: 'bottom',
                          labels: {
                              boxWidth: 12,
                              padding: 20,
                              font: {
                                  size: 12
                              }
                          }
                      },
                      tooltip: {
                          callbacks: {
                              label: function(context) {
                                  let label = context.label || '';
                                  if (label) {
                                      label += ': ';
                                  }
                                  if (context.parsed !== null) {
                                      label += context.parsed + '%';
                                  }
                                  return label;
                              }
                          }
                      }
                  },
                  cutout: '70%',
                  layout: {
                      padding: 20
                  }
              }
          });
      
          function resizeCharts() {
              profileVisitChart.resize();
              visitorsChart.resize();
          }
      
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
                      thickness: 100,
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
      
          // Handle Responsive Sidebar and Charts
          function handleResize() {
              if (window.innerWidth <= 991.98) {
                  sidebar.classList.remove('active');
                  content.classList.remove('active');
                  document.body.classList.remove('sidebar-active');
                  overlay.classList.remove('active');
              } else {
                  sidebar.classList.remove('active');
                  content.classList.add('active');
                  document.body.classList.remove('sidebar-active');
                  overlay.classList.remove('active');
              }
              resizeCharts();
          }
      
          window.addEventListener('resize', handleResize);
          handleResize(); // Initial check
      
          // Debounce function to limit the rate of chart resizing
          function debounce(func, wait) {
              let timeout;
              return function executedFunction(...args) {
                  const later = () => {
                      clearTimeout(timeout);
                      func(...args);
                  };
                  clearTimeout(timeout);
                  timeout = setTimeout(later, wait);
              };
          }
      
          // Debounced resize event listener
          window.addEventListener('resize', debounce(resizeCharts, 250));
      });
      
      
