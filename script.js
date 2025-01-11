:root {
          --sidebar-width: 250px;
          --sidebar-width-collapsed: 80px;
          --primary-color: #435ebe;
          --purple: #9694ff;
          --blue: #57caeb;
          --green: #5ddab4;
          --red: #ff7976;
      }
      
      body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          background-color: #f2f7ff;
          min-height: 100vh;
      }
      
      .wrapper {
          display: flex;
          width: 100%;
          align-items: stretch;
      }
      
      #sidebar {
          min-width: var(--sidebar-width);
          max-width: var(--sidebar-width);
          background: #ffffff;
          transition: all 0.3s ease-in-out;
          position: fixed;
          top: 0;
          left: 0;
          height: 100vh;
          z-index: 999;
          box-shadow: 0 0 15px rgba(0,0,0,0.05);
          overflow-x: hidden;
          overflow-y: auto;
      }
      
      #sidebar.active {
          min-width: var(--sidebar-width);
      }
      
      .sidebar-header {
          padding: 1.5rem;
          border-bottom: 1px solid #f0f0f0;
      }
      
      .sidebar-header h3 {
          margin: 0;
          color: var(--primary-color);
          font-weight: 700;
      }
      
      .menu-header {
          padding: 1rem 1.5rem;
          font-size: 0.8rem;
          color: #888;
          text-transform: uppercase;
          font-weight: 600;
      }
      
      #sidebar ul li a {
          padding: 0.8rem 1.5rem;
          display: block;
          color: #666;
          text-decoration: none;
          transition: all 0.3s;
          white-space: nowrap;
      }
      
      #sidebar ul li a i {
          margin-right: 10px;
      }
      
      #sidebar ul li.active a,
      #sidebar ul li a:hover {
          background: var(--primary-color);
          color: #fff;
      }
      
      #content {
          width: 100%;
          min-height: 100vh;
          transition: all 0.3s;
          margin-left: var(--sidebar-width);
      }
      
      #content.active {
          margin-left: var(--sidebar-width);
      }
      
      .navbar {
          padding: 1rem;
          background: #fff !important;
          box-shadow: 0 0 15px rgba(0,0,0,0.05);
      }
      
      #sidebarCollapse {
          cursor: pointer;
          z-index: 1000;
          transition: all 0.3s ease-in-out;
      }
      
      #sidebarCollapse:hover {
          background: #f8f9fa;
      }
      
      .stats-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 0.5rem;
          color: #fff;
      }
      
      .stats-icon.purple { background: var(--purple); }
      .stats-icon.blue { background: var(--blue); }
      .stats-icon.green { background: var(--green); }
      .stats-icon.red { background: var(--red); }
      
      .card {
          border: none;
          box-shadow: 0 0 15px rgba(0,0,0,0.05);
          border-radius: 0.5rem;
          height: 100%;
      }
      
      .card-header {
          background: none;
          padding: 1.5rem;
          border-bottom: 1px solid #f0f0f0;
      }
      
      .card-header h4 {
          margin: 0;
          font-size: 1.2rem;
          font-weight: 600;
      }
      
      .comment-item {
          padding: 0.5rem 0;
      }
      
      .comment-item h6 {
          font-size: 0.9rem;
          font-weight: 600;
      }
      
      .comment-item p {
          font-size: 0.85rem;
      }
      
      .visit-item {
          padding: 1.5rem 0;
          border-bottom: 1px solid rgba(0,0,0,0.05);
      }
      
      .visit-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
      }
      
      .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          display: inline-block;
      }
      
      .dot-primary { background-color: var(--primary-color); }
      .dot-info { background-color: var(--blue); }
      .dot-warning { background-color: #ffc107; }
      .dot-danger { background-color: var(--red); }
      
      .sparkline-chart {
          height: 30px;
          width: 100%;
          margin-top: 0.5rem;
      }
      
      .chart-container {
          position: relative;
          height: 300px;
          width: 100%;
      }
      
      @media (max-width: 768px) {
          .chart-container {
              height: 250px;
          }
      }
      
      @media (max-width: 991.98px) {
          #sidebar {
              margin-left: calc(var(--sidebar-width) * -1);
              min-width: var(--sidebar-width);
          }
          
          #sidebar.active {
              margin-left: 0;
          }
          
          #content {
              margin-left: 0;
          }
          
          #content.active {
              margin-left: 0;
          }
      
          body.sidebar-active {
              overflow: hidden;
          }
      
          .sidebar-overlay {
              display: none;
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background-color: rgba(0, 0, 0, 0.5);
              z-index: 998;
          }
      
          .sidebar-overlay.active {
              display: block;
          }
      }
      
      @media (max-width: 767.98px) {
          .card {
              margin-bottom: 1rem;
          }
      }
      
      
