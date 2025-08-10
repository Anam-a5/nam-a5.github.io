// ✅ 
  // 🔒 Toggle Password Eye
  const toggle = document.getElementById('togglePassword');
  const password = document.getElementById('password');

  if (toggle && password) {
    toggle.addEventListener('click', function () {
      const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
      password.setAttribute('type', type);
      this.classList.toggle('fa-eye');
      this.classList.toggle('fa-eye-slash');
    });
  }

  // 🔓 Open login page
  function openLoginPage() {
    window.location.href = 'login.html';
  }

  // 🖼️ Image Slider Logic
  let currentSlide = 0;

  function goToSlide(slideIndex) {
    const track = document.querySelector('.slider-track');
    const dots = document.querySelectorAll('.dot');
    const slideWidth = document.querySelector('.slide').offsetWidth;

    track.style.transform = `translateX(-${slideIndex * slideWidth}px)`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[slideIndex].classList.add('active');

    currentSlide = slideIndex;
  }



// 🖼️ Second Image Slider Logic
let currentSlide2 = 0;

function goToSlide2(slideIndex) {
  const track = document.querySelector('.second-slider-track');
  const dots = document.querySelectorAll('.second-slider-dots .dot');
  const slideWidth = document.querySelector('.second-slider-track .slide').offsetWidth;

  track.style.transform = `translateX(-${slideIndex * slideWidth}px)`;

  dots.forEach(dot => dot.classList.remove('active'));
  dots[slideIndex].classList.add('active');

  currentSlide2 = slideIndex;
}





let cartCount = 0;
let cartTotal = 0;
let cartItems = [];

function addToCart(productName = "Unknown Item", price = 0) {
  cartCount++;
  cartTotal += price;
  cartItems.push({ name: productName, price });

  // Update hover dropdown
  document.getElementById('cart-summary').textContent = 
    `You have ${cartCount} item${cartCount > 1 ? 's' : ''} in your cart.`;

  // Update cart sidebar
  const cartItemsContainer = document.getElementById('cartItems');
  cartItemsContainer.innerHTML = ''; // Clear old content

  cartItems.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('cart-item');
    div.textContent = `${item.name} - R${item.price}`;
    cartItemsContainer.appendChild(div);
  });

  // Update total
  document.getElementById('cartTotal').textContent = cartTotal;
}

// Toggle cart sidebar visibility
function toggleCartSidebar() {
  const sidebar = document.getElementById('cartSidebar');
  sidebar.classList.toggle('open');
}

