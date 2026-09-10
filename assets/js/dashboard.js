/* ============================================================
   LinguaGlobal — Dashboard Chart.js Script
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  // Client Donut Chart
  const statusChartCtx = document.getElementById('projectStatusChart');
  if (statusChartCtx) {
    new Chart(statusChartCtx, {
      type: 'doughnut',
      data: {
        labels: ['Completed', 'In Progress', 'Under Review', 'Pending'],
        datasets: [{
          data: [42, 18, 9, 5],
          backgroundColor: ['#10B981', '#4F46E5', '#06B6D4', '#F59E0B'],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'bottom' }
        },
        cutout: '70%'
      }
    });
  }

  // Client Bar Chart
  const langPairsCtx = document.getElementById('langPairsChart');
  if (langPairsCtx) {
    new Chart(langPairsCtx, {
      type: 'bar',
      data: {
        labels: ['EN → ES', 'EN → AR', 'EN → FR', 'DE → EN', 'ZH → EN'],
        datasets: [{
          label: 'Projects Handled',
          data: [28, 22, 16, 12, 9],
          backgroundColor: '#4F46E5',
          borderRadius: 6
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: { y: { beginAtZero: true } }
      }
    });
  }

  // Admin Line Chart
  const revenueChartCtx = document.getElementById('revenueChart');
  if (revenueChartCtx) {
    new Chart(revenueChartCtx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        datasets: [{
          label: 'Revenue ($)',
          data: [18500, 22400, 19800, 27600, 31200, 29800, 36500, 42000],
          borderColor: '#06B6D4',
          backgroundColor: 'rgba(6,182,212,0.1)',
          fill: true,
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } }
      }
    });
  }
});
