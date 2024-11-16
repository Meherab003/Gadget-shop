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
        <div className="max-w-md lg:max-w-2xl">
          <h1 className="mb-5 text-5xl font-bold">Welcome To Gadget Shop</h1>
          <p className="mb-5">
            Conveniently evolve bricks-and-clicks strategic theme areas via
            magnetic web services. Dramatically optimize visionary e-business
            before collaborative data.
          </p>
          <button className="btn bg-red-800 border-none text-white hover:bg-red-600">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
