/// sprite swap button
class SpriteButton extends HTMLElement {
	connectedCallback() {
		const base = this.hasAttribute("base");
		const path = base ? "." : "..";

		const id = this.getAttribute("id");
		const imgId = this.getAttribute("imgId");

		this.innerHTML = `
			<button class="sprite-swap-btn" id="${id}">
				<img src="${path}/assets/imgs/buttons/${imgId}_norm.png" />
				<img src="${path}/assets/imgs/buttons/${imgId}_hover.png" />
			</button>
		`;

		this.addEventListener("click", function () {
			this.dispatchEvent(new CustomEvent(`btn-click`));
		});
	}
}
customElements.define("sprite-btn", SpriteButton);

/// navigation bar
class NavBar extends HTMLElement {
	connectedCallback() {
		const base = this.hasAttribute("base");
		const path = base ? "." : "..";

		this.innerHTML = `
			<nav class="row">
				<div>
					<a href="${path}/">HOME</a>
					<a href="${path}/studio-woolworks" data-link="studio-woolworks">STUDIO WOOLWORKS</a>
				</div>

				<div>
					<a href="${path}/faq" data-link="faq">FAQ</a>
					<a href="${path}/press-kit" data-link="press-kit">PRESS KIT</a>
				</div>
			</nav>
    `;

		const currentPage = location.pathname
			.split("/")
			.filter((a) => a != "")
			.pop();

		if (currentPage == undefined) {
			document.querySelector("nav a").classList.add("active");
		} else {
			document.querySelectorAll("nav a").forEach(link => {
				if (currentPage == link.dataset.link) {
					link.classList.add("active");
				}
			});
		}
	}
}
customElements.define("nav-bar", NavBar);

/// footer
class Footer extends HTMLElement {
	connectedCallback() {
		const base = this.hasAttribute("base");
		const path = base ? "." : "..";

		this.innerHTML = `
			<footer class="col">
				<img id="footer-top" src="${path}/assets/imgs/footer/footerTop.png" />
				<div class="row">
					<img src="${path}/assets/imgs/footer/logo.png" alt="Stitchlings Logo" />

					<div class="col">
					 	<h3>Stay up to date!</h3>
						<div class="row icons">
							<a href="https://www.linkedin.com/company/stitchlings" target="_blank">
								<img src="${path}/assets/imgs/footer/linkedin.png" />
							</a>
							<a href="https://www.instagram.com/play.stitchlings" target="_blank">
								<img src="${path}/assets/imgs/footer/instagram.png" />
							</a>
							<a href="https://www.tiktok.com/@play.stitchlings" target="_blank">
								<img src="${path}/assets/imgs/footer/tiktok.png" />
							</a>
						</div>
					</div>

					<div class="col">
						<h3>Join our community!</h3>
						<div class="row icons">
							<a href="https://discord.gg/GjAj5Kagcu" target="_blank">
								<img src="${path}/assets/imgs/footer/discord.png" />
							</a>
						</div>
					</div>
				</div>

				<p id="copyright">&copy; Copyright 2026 USC Games & Studio Woolworks</p>
				<sprite-btn
					id="back-to-top-btn"
					imgId="backToTop"
					${base ? "base" : ""}>
				</sprite-btn>
			</footer>
    `;
	}
}
customElements.define("stitch-footer", Footer);

/// parallax backgrounds
window.addEventListener("scroll", () => {
	const y = window.scrollY;

	document.querySelector("#parallax")
		.style.transform = `translateY(${y * 0.21}px)`;
});
