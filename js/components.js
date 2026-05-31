/// navigation bar
class NavBar extends HTMLElement {
  connectedCallback() {
		const base = this.hasAttribute('base');

    this.innerHTML = `
			<nav class="row">
				<div>
					<a href="${base ? '.' : '..'}/">Home</a>
					<a href="${base ? '.' : '..'}/studio-woolworks">Studio Woolworks</a>
				</div>

				<div>
					<a href="${base ? '.' : '..'}/faq">FAQ</a>
					<a href="${base ? '.' : '..'}/press-kit">Press Kit</a>
				</div>
			</nav>
    `;
  }
}
customElements.define('nav-bar', NavBar);

/// footer
class Footer extends HTMLElement {
  connectedCallback() {
		const base = this.hasAttribute('base');

    this.innerHTML = `
			<footer class="col">
				<div class="row">
					<img src="${base ? '.' : '..'}/assets/imgs/footer/logo.png" alt="Stitchlings Logo" />

					<div class="col">
					 	<h3>Stay up to date!</h3>
						<div class="row icons">
							<a href="https://www.linkedin.com/company/stitchlings" target="_blank"><img src="${base ? '.' : '..'}/assets/imgs/footer/linkedin.png" /></a>
							<a href="https://www.instagram.com/play.stitchlings" target="_blank"><img src="${base ? '.' : '..'}/assets/imgs/footer/instagram.png" /></a>
							<a href="https://www.tiktok.com/@play.stitchlings" target="_blank"><img src="${base ? '.' : '..'}/assets/imgs/footer/tiktok.png" /></a>
						</div>
					</div>

					<div class="col">
						<h3>Join our community!</h3>
						<div class="row icons">
							<a href="https://discord.gg/GjAj5Kagcu" target="_blank"><img src="${base ? '.' : '..'}/assets/imgs/footer/discord.png" /></a>
						</div>
					</div>
				</div>

				<p>&copy; Copyright 2026 USC Games & Studio Woolworks</p>
			</footer>
    `;
  }
}
customElements.define('stitch-footer', Footer);

/// parallax backgrounds 
window.addEventListener('scroll', () => {
  const y = window.scrollY;

  document.querySelector('#parallax')
    .style.transform = `translateY(${y * 0.21}px)`;
});