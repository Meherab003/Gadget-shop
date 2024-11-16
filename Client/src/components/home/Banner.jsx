const Banner = () => {
  return (
    <div
      className="hero min-h-outlet"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-photo/view-neon-illuminated-gaming-desk-setup-with-keyboard_23-2149529376.jpg?t=st=1731776769~exp=1731780369~hmac=d9a9ed885c31c7b32c0f0f97483ec0ab0a8be8e721d93229bb6e6a9ab797df99&w=2000)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Welcome To Gadget Shop</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
