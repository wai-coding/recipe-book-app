function AboutPage() {
  return (
    <div className="about-page">
      <h1>About Us</h1>
      <p>
        Welcome to the Recipe Book App! We are building a comprehensive and
        user-friendly platform designed to help home cooks and health-conscious
        individuals find their next favorite meal. Our website goes beyond just
        providing recipes. For every dish, users can quickly view:
      </p>
      <ul>
        <li>
          High-Quality Photos: See the finished result before you start cooking.
        </li>

        <li>
          Calorie Information: Transparent nutritional data for informed
          choices.
        </li>

        <li>
          Calorie Indicator: A simple, visual tag that clearly shows whether a
          recipe is High or Low calorie, making meal planning easy and
          straightforward.
        </li>

        <li>
          Our goal is to make healthy, delicious cooking accessible to everyone.
        </li>
      </ul>

      <h2>Our Team</h2>
      <p>
        This project was developed by a team of dedicated students focused on
        delivering a practical and aesthetically pleasing web application.
      </p>

      <h3>Alexandra Domareski</h3>
      <ol>
        <li>Role: Frontend Developer</li>
        <li>
          GitHub:{" "}
          <a className="link-style" href="https://github.com/alexandra-junges">
            alexandra-junges
          </a>
        </li>
        <li>
          LinkedIn:{" "}
          <a
            className="link-style"
            href="https://www.linkedin.com/in/alexandra-webdeveloper/"
          >
            alexandra-webdeveloper
          </a>
        </li>
      </ol>

      <h3>Luis Castro</h3>
      <ol>
        <li>Role: Frontend Developer</li>
        <li>
          GitHub:{" "}
          <a className="link-style" href="https://github.com/wai-coding">
            wai-coding
          </a>
        </li>
        <li>
          LinkedIn:{" "}
          <a
            className="link-style"
            href="https://www.linkedin.com/in/luiscastrosounds/"
          >
            luis-castro
          </a>
        </li>
      </ol>

      <h2>Source Code</h2>
      <p>
        The full source code for the Recipe Book App is available for review on
        GitHub:
      </p>
      <a
        className="link-style"
        href="https://github.com/wai-coding/recipe-book-app"
      >
        Project Repository
      </a>
      <p> </p>
    </div>
  );
}

export default AboutPage;
