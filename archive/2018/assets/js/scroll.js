const linkQuery = document.querySelectorAll('.navbar__link');
const links = [...linkQuery];
const section = document.getElementsByTagName('section');
const sections = {};
let x;

activeLink();
activeByScroll();

function activeLink() {
  links.forEach(item => {
    item.addEventListener('click', (event) => {
      event.preventDefault();

      checkIfActive(item);

      window.location.hash = item.hash;
      item.classList.add('active');
    })
  })
}

function checkIfActive(link) {
  const checkActive = link.classList.contains('active');

    if (!checkActive) {
      links.forEach(elem => {
        if (elem != this) {
          elem.classList.remove('active');
        }
      })
    }
}

function activeByScroll() {
  Array.prototype.forEach.call(section, (e) => {
    sections[e.id] = e.offsetTop;
  });

  window.onscroll = () => {
    const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    for (x in sections) {
      if (sections[x] <= scrollPosition) {
        document.querySelector('.active').classList.remove("active");
        document.querySelector('a[href*=' + x + ']').classList.add("active");
    }
  }
}


}
