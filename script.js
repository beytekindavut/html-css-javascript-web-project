
    const menuIcon = document.getElementById("menu-icon");

    const menuList = document.getElementById("menu-list");

    const icon = menuIcon.querySelector('i');

    const closeBtn = document.querySelector('.close-btn a');


    menuIcon.addEventListener('click', () => {
      menuList.classList.toggle("show");

      if (menuList.classList.contains("show")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
      } 
       else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      }
    });



    closeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      menuList.classList.remove("show");
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    });



    // Form mesaj gönderim bildirimi
    document.getElementById("iletisim-formu").addEventListener("submit", function(e) {
      e.preventDefault();
      alert("Mesajınız başarıyla gönderildi. Teşekkür ederiz!");
       this.reset();
    });

    