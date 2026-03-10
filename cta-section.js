class CtaSection extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute("title") || "";
    const text = this.getAttribute("text") || "";
    const btnText = this.getAttribute("btn-text") || "";
    const basePath = this.getAttribute("base-path") || "";

    this.innerHTML = `
      <div class="contact-us-section-wrappaer orbitsolutions-contact-us-bg mb-30 mt-5">
        <div class="container">
          <div class="row align-items-center orbitsolutions-contact-us-bg-center">
            <div class="col-md-12">
              <div class="text-center">
                <h2 class="mb-3 border-bottom">${title}</h2>
                <h3 class="heading text-white">${text}</h3>
              </div>

              <div class="single-button-group wow move-up animated text-center mt-20" style="visibility: visible">
                <div class="button-group-wrap">
                  <a href="${basePath}contact.html" class="btn btn--secondary">${btnText}</a>
                </div>
              </div>
            </div>
          </div>
          <div class="row pt-4 pb-4 mb-2 mt-1">
            <div class="col-md-12">
              <img src="${basePath}assets/images/Earth-h2o-Logo-small.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("cta-section", CtaSection);
