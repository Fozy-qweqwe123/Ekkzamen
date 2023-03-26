<template>
    <div>
      <main>
        <!-- Контент страницы -->
      </main>
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <p>&copy; 2023 My Website. All Rights Reserved.</p>
            </div>
            <div class="col-md-6">
              <ul class="footer-menu">
                
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: 'VFooter',
  }
  </script>
  
  <style>
  footer {
  
    bottom: 0;
    width: 100%;
    background-color: #f2f2f2;
    padding: 20px;
    text-align: center;
  }
  
  main {
    padding-bottom: 80px; /* Высота футера + отступ */
  }
  
  .footer-menu {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: flex-end;
  }
  
  .footer-menu li {
    margin-left: 20px;
  }
  
  .footer-menu li:first-child {
    margin-left: 0;
  }
  
  .li {
    text-decoration: none;
  }
  </style>
  