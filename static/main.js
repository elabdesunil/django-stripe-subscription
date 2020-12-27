console.log("Sanity Check!");

// Get Stripe publishable key
fetch("/config/")
  .then((result) => result.json())
  .then((data) => {
    // Initialize Stripe.js
    const stripe = Stripe(data.publicKey);

    // new

    // Event Handler
    let submitBtn = document.querySelector("#submitBtn");
    if (submitBtn != null) {
      submitBtn.addEventListener("click", () => {
        // Get Checkout Session ID
        fetch("/create-checkout-session/")
          .then((result) => {
            return result.json();
          })
          .then((data) => {
            console.log(data);

            // Redirect to Stripe Checkout
            return stripe.redirectToCheckout({ sessionId: data.sessionId });
          })
          .catch((res) => {
            console.log(res);
          });
      });
    }
  });
