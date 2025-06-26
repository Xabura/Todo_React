import "./AboutPage.scss";

function AboutPage() {
  return (
    <section>
      <h1>About Page</h1>
      <p>
        This is a simple Todo Application which is connected to database using
        mockapi.io and different tools.
      </p>

      <div className="wrapper">
        <h2>Tools</h2>
        <ul>
          <li>React Hooks</li>
          <li>Custome React Hooks</li>
          <li>React Router</li>
          <li>API (mockapi.io)</li>
          <li>LocalStorage</li>
          <li>Responsive UI/UX</li>
          <li>Refined file structure</li>
          <li>Css pre processor SCSS</li>
          <li>Dark/Light themes</li>
        </ul>
      </div>
    </section>
  );
}

export default AboutPage;
