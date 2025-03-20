import React from "react"

function About() {
  return (
    <div
      className="about flex-col place-content-center"
      id="about-page"
      aria-label="About Me"
    >
      <h2 className="text-center">About Me</h2>
      <div className="about-page-content">
        <div className="about-page-text">
          <p>Hey! Thanks for coming this far.</p>
          <p>
            My name's Ceilidh, and I'm a software developer. I'm passionate
            about creating games and applications that are fun and easy to use.
            As a web developer, I'm experienced with the MERN stack, .NET, and
            PHP using Laravel.{" "}
          </p>

          <p>
            I also tinker with game development, and used to teach Unity,
            Roblox, and Javascript game development to children ages 5-15.
          </p>

          <p>Some non-coding things I am proud of include:</p>
          <ul>
            <li>
              - I've had my writing published in the online literary and art
              magazine for mixed-race people,{" "}
              <a
                className="font-bold text-neutral-400 hover:text-white transition-colors"
                href="https://www.middlegroundmagazine.co.uk/"
              >
                Middleground
              </a>
              .
            </li>

            <li>- I can officially deadlift my boyfriend.</li>

            <li>
              - I'm currently learning roller derby, and I have gotten very good
              at falling.
            </li>
          </ul>
        </div>
      </div>

      <div className="about-page-content">
        <div className="about-page-text" id="about-site">
          <h3>About This Site</h3>
          <p>
            This site was built using Gatsby + React, Three.js, Motion and
            React-spring. It is styled with a mix of Tailwind and vanilla CSS,
            and it's hosted on GitHub Pages.
          </p>
          <p>
            The background blob and shuffle text effect are a modified version
            of{" "}
            <a
              className="font-bold"
              href="https://codepen.io/Hyperplexed/pen/KKBjvbG"
            >
              this
            </a>{" "}
            codepen by Hyperplexed.
          </p>
          <p>
            My contact form is powered by{" "}
            <a
              className="font-bold text-neutral-400 hover:text-white transition-colors"
              href="https://formspree.io/"
            >
              Formspree
            </a>
            .
          </p>
          <p>
            All icons are from{" "}
            <a
              className="font-bold text-neutral-400 hover:text-white transition-colors"
              href="https://fontawesome.com/"
            >
              Font Awesome
            </a>
            .
          </p>
          <p>
            <a
              className="font-bold text-neutral-400 hover:text-white transition-colors"
              href="https://skfb.ly/ptTZL"
            >
              "Pink Retro Computer"{" "}
            </a>
            by JoeyNutria is licensed under&nbsp;
            <a
              className="font-bold text-neutral-400 hover:text-white transition-colors"
              href="http://creativecommons.org/licenses/by/4.0/"
            >
              Creative Commons Attribution.
            </a>
          </p>
          <p>
            The source code is available on{" "}
            <a
              className="font-bold text-neutral-400 hover:text-white transition-colors"
              href="https://github.com/cashcrof/cashcrof.github.io"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
